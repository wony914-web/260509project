"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { joinWaitlist, type WaitlistState } from "@/app/actions";

const initialState: WaitlistState = { ok: false, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 items-center justify-center rounded-2xl bg-pink-500 px-6 text-base font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 disabled:cursor-not-allowed disabled:bg-pink-300"
    >
      {pending ? "신청 중..." : "신청하기"}
    </button>
  );
}

export function WaitlistForm() {
  const [state, formAction] = useActionState(joinWaitlist, initialState);
  const showMessage = state.message.length > 0;

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100"
    >
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-pink-600">
          Join the Waitlist
        </p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          가장 먼저 만나보세요
        </h2>
        <p className="mt-4 text-slate-600">
          출시 알림 + 사전예약 한정 시크릿 굿즈 + 10% 얼리버드 쿠폰을 보내드려요.
        </p>

        <form
          action={formAction}
          className="mx-auto mt-10 flex w-full max-w-xl flex-col gap-3 rounded-3xl bg-white/80 p-4 shadow-xl ring-1 ring-white/60 backdrop-blur sm:p-5"
          noValidate
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="name" className="sr-only">
              이름 (선택)
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="이름 (선택)"
              className="h-12 flex-1 rounded-2xl border border-slate-200 bg-white px-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
            />
            <label htmlFor="email" className="sr-only">
              이메일
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="h-12 flex-[1.4] rounded-2xl border border-slate-200 bg-white px-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
            />
            <SubmitButton />
          </div>

          {showMessage && (
            <p
              role="status"
              aria-live="polite"
              className={`mt-1 rounded-xl px-4 py-3 text-sm font-medium ${
                state.ok
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-rose-50 text-rose-700"
              }`}
            >
              {state.message}
            </p>
          )}

          <p className="mt-1 text-xs text-slate-500">
            입력하신 이메일은 출시 알림 외 다른 용도로 사용되지 않아요.
          </p>
        </form>
      </div>
    </section>
  );
}
