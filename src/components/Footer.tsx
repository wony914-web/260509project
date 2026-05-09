export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-base font-semibold text-slate-900">둥둥실 스튜디오</p>
          <p className="mt-1 text-sm text-slate-500">
            느린 하루를 응원하는 작은 캐릭터 굿즈
          </p>
        </div>

        <ul className="flex items-center gap-2">
          {[
            { label: "Instagram", href: "#" },
            { label: "이메일 문의", href: "mailto:hello@example.com" },
          ].map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-pink-200 hover:text-pink-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-slate-400">© {year} Dungdungsil Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
