import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/app/auth/actions";

export async function SiteHeader() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const displayName =
    (user?.user_metadata as { name?: string } | null)?.name ?? user?.email ?? null;

  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-white/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-base font-bold text-slate-900">
          <span className="text-xl leading-none">🐰</span>
          <span>둥둥실</span>
        </Link>

        <nav className="flex items-center gap-2 text-sm">
          {user ? (
            <>
              <span className="hidden text-slate-600 sm:inline">
                <strong className="font-semibold text-slate-900">{displayName}</strong>님
              </span>
              <form action={signOut}>
                <button
                  type="submit"
                  className="inline-flex h-9 items-center justify-center rounded-full border border-slate-200 bg-white px-4 font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  로그아웃
                </button>
              </form>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="inline-flex h-9 items-center justify-center rounded-full px-4 font-medium text-slate-700 transition hover:bg-white"
              >
                로그인
              </Link>
              <Link
                href="/signup"
                className="inline-flex h-9 items-center justify-center rounded-full bg-pink-500 px-4 font-semibold text-white shadow-sm shadow-pink-500/30 transition hover:bg-pink-600"
              >
                회원가입
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
