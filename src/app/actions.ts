"use server";

import { promises as fs } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";

export type WaitlistState = {
  ok: boolean;
  message: string;
};

export type WaitlistEntry = {
  id: string;
  email: string;
  name: string;
  createdAt: string;
};

const WAITLIST_FILE = path.join(process.cwd(), "data", "waitlist.json");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function readWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const raw = await fs.readFile(WAITLIST_FILE, "utf8");
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as WaitlistEntry[]) : [];
  } catch (err: unknown) {
    if (err && typeof err === "object" && "code" in err && (err as { code: string }).code === "ENOENT") {
      return [];
    }
    throw err;
  }
}

async function writeWaitlist(entries: WaitlistEntry[]): Promise<void> {
  await fs.mkdir(path.dirname(WAITLIST_FILE), { recursive: true });
  await fs.writeFile(WAITLIST_FILE, JSON.stringify(entries, null, 2), "utf8");
}

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const emailRaw = formData.get("email");
  const nameRaw = formData.get("name");

  const email = typeof emailRaw === "string" ? emailRaw.trim().toLowerCase() : "";
  const name = typeof nameRaw === "string" ? nameRaw.trim() : "";

  if (!email) {
    return { ok: false, message: "이메일을 입력해 주세요." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: "이메일 형식이 올바르지 않아요." };
  }

  const list = await readWaitlist();
  if (list.some((entry) => entry.email === email)) {
    return { ok: false, message: "이미 신청된 이메일이에요. 출시 알림을 기다려주세요!" };
  }

  list.push({
    id: randomUUID(),
    email,
    name,
    createdAt: new Date().toISOString(),
  });
  await writeWaitlist(list);

  // 추후 외부 서비스 연동(Resend / Supabase / Google Sheets 등) 시
  // 이 시점에서 동기화 호출을 추가하면 됩니다.

  return {
    ok: true,
    message: name
      ? `${name}님, 사전예약 신청 완료! 출시 소식을 가장 먼저 보내드릴게요.`
      : "사전예약 신청 완료! 출시 소식을 가장 먼저 보내드릴게요.",
  };
}
