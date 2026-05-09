const KEYWORDS = ["손그림", "파스텔톤", "데일리", "한정수량", "친환경 종이"];

export function About() {
  return (
    <section id="about" className="border-y border-slate-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber-100 via-pink-50 to-sky-100">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <div className="text-7xl">🌱</div>
              <p className="text-sm text-slate-500">
                작은 화분에서 시작된 <br /> 둥둥실의 하루를 담았어요.
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 space-y-6 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-pink-500">
            About Dungdungsil
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            느린 하루를 응원하는 <br />
            작은 친구를 만들었어요.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            둥둥실은 화분 속에서 자란 콩 친구예요. 책상 한 구석에서 함께
            아침 커피를 마시고, 저녁엔 노트 위로 폴짝 뛰어 오릅니다. 일상의 작은
            순간을 함께 보낼 수 있도록, 손에 쥐기 좋은 크기와 부드러운 색감으로
            모든 굿즈를 디자인했어요.
          </p>

          <ul className="flex flex-wrap gap-2">
            {KEYWORDS.map((kw) => (
              <li
                key={kw}
                className="rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700"
              >
                #{kw}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
