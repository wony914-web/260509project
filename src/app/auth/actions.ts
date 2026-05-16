"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";

export type AuthState = {
  ok: boolean;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function signIn(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: "이메일 형식이 올바르지 않아요." };
  }
  if (!password) {
    return { ok: false, message: "비밀번호를 입력해 주세요." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { ok: false, message: "이메일 또는 비밀번호가 올바르지 않아요." };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signUp(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const name = String(formData.get("name") ?? "").trim();

  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: "이메일 형식이 올바르지 않아요." };
  }
  if (password.length < 8) {
    return { ok: false, message: "비밀번호는 최소 8자 이상이어야 해요." };
  }

  const supabase = await createClient();
  const origin = (await headers()).get("origin") ?? "";

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: name ? { name } : undefined,
      emailRedirectTo: origin ? `${origin}/auth/callback` : undefined,
    },
  });

  if (error) {
    if (error.message.toLowerCase().includes("already")) {
      return { ok: false, message: "이미 가입된 이메일이에요." };
    }
    return { ok: false, message: "회원가입 중 문제가 발생했어요. 잠시 후 다시 시도해주세요." };
  }

  return {
    ok: true,
    message: "확인 메일을 보냈어요. 메일함에서 인증 링크를 눌러 가입을 완료해 주세요.",
  };
}

export async function signOut(): Promise<void> {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}
