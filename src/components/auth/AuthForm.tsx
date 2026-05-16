"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signIn, signUp, type AuthState } from "@/app/auth/actions";

const initialState: AuthState = { ok: false, message: "" };

function SubmitButton({ label, pendingLabel }: { label: string; pendingLabel: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-pink-500 px-6 text-base font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 disabled:cursor-not-allowed disabled:bg-pink-300"
    >
      {pending ? pendingLabel : label}
    </button>
  );
}

type Mode = "signin" | "signup";

export function AuthForm({ mode }: { mode: Mode }) {
  const action = mode === "signin" ? signIn : signUp;
  const [state, formAction] = useActionState(action, initialState);
  const showMessage = state.message.length > 0;
  const title = mode === "signin" ? "로그인" : "회원가입";
  const description =
    mode === "signin"
      ? "둥둥실의 소식과 사전예약 현황을 확인해보세요."
      : "이메일로 가입하고 출시 알림과 한정 굿즈 소식을 받아보세요.";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md flex-col justify-center px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-pink-600">
            {mode === "signin" ? "Welcome back" : "Join us"}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
          <p className="mt-3 text-slate-600">{description}</p>
        </div>

        <form
          action={formAction}
          className="mt-8 flex flex-col gap-3 rounded-3xl bg-white/80 p-5 shadow-xl ring-1 ring-white/60 backdrop-blur"
          noValidate
        >
          {mode === "signup" && (
            <div>
              <label htmlFor="name" className="sr-only">
                이름 (선택)
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="이름 (선택)"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>
          )}

          <div>
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
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
            />
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              비밀번호
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              placeholder={mode === "signup" ? "비밀번호 (8자 이상)" : "비밀번호"}
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
            />
          </div>

          <SubmitButton
            label={mode === "signin" ? "로그인" : "회원가입"}
            pendingLabel={mode === "signin" ? "로그인 중..." : "가입 중..."}
          />

          {showMessage && (
            <p
              role="status"
              aria-live="polite"
              className={`rounded-xl px-4 py-3 text-sm font-medium ${
                state.ok ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
              }`}
            >
              {state.message}
            </p>
          )}
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          {mode === "signin" ? (
            <>
              아직 계정이 없으신가요?{" "}
              <Link href="/signup" className="font-semibold text-pink-600 hover:underline">
                회원가입
              </Link>
            </>
          ) : (
            <>
              이미 계정이 있으신가요?{" "}
              <Link href="/login" className="font-semibold text-pink-600 hover:underline">
                로그인
              </Link>
            </>
          )}
        </p>

        <p className="mt-6 text-center text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-700">
            ← 홈으로 돌아가기
          </Link>
        </p>
      </div>
    </section>
  );
}
