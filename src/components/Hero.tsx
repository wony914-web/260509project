export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-pink-200/60 blur-3xl" />
        <div className="absolute top-20 -right-24 h-96 w-96 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-amber-100/70 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pt-20 pb-24 text-center sm:pt-28 lg:flex-row lg:gap-16 lg:text-left">
        <div className="flex-1 space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-pink-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-pink-500" />
            2026 봄, 첫 시즌 굿즈 공개
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            <span className="block">조그만 친구들이</span>
            <span className="block text-pink-500">책상 위로 도착해요</span>
          </h1>

          <p className="mx-auto max-w-xl text-lg text-slate-600 lg:mx-0">
            손그림에서 출발한 캐릭터 <strong>두둥실</strong>의 첫 굿즈 시즌.
            스티커, 키링, 엽서, 미니 포스터까지 — 사전예약 신청자에게는 한정 시크릿 굿즈를 함께 보내드려요.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:items-start lg:justify-start">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-2xl bg-pink-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:-translate-y-0.5 hover:bg-pink-600"
            >
              사전예약 신청하기 →
            </a>
            <a
              href="#lineup"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-7 py-3.5 text-base font-semibold text-slate-700 backdrop-blur transition hover:border-slate-300 hover:bg-white"
            >
              굿즈 미리보기
            </a>
          </div>

          <dl className="grid grid-cols-3 gap-4 pt-4 text-left">
            {[
              { label: "오리지널 캐릭터", value: "1종" },
              { label: "첫 시즌 라인업", value: "4종" },
              { label: "사전예약 혜택", value: "시크릿 +1" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white/60 px-4 py-3 shadow-sm backdrop-blur"
              >
                <dt className="text-xs text-slate-500">{item.label}</dt>
                <dd className="text-base font-semibold text-slate-900">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-pink-200 via-amber-100 to-sky-200 shadow-2xl shadow-pink-200/50" />
            <div className="absolute inset-0 -rotate-2 rounded-[2.5rem] bg-white/80 backdrop-blur" />
            <div className="absolute inset-6 flex flex-col items-center justify-center gap-4 rounded-[2rem] border border-white bg-gradient-to-b from-white to-pink-50">
              <div className="text-[8rem] leading-none">🐰</div>
              <p className="text-lg font-semibold text-slate-700">두둥실</p>
              <p className="px-6 text-center text-sm text-slate-500">
                * 캐릭터 일러스트가 들어갈 자리예요. <br />
                실제 이미지는 <code className="rounded bg-slate-100 px-1">/public</code>에 넣고 교체해 주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
