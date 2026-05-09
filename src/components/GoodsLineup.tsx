type GoodsItem = {
  emoji: string;
  name: string;
  description: string;
  badge?: string;
  bg: string;
};

const ITEMS: GoodsItem[] = [
  {
    emoji: "✨",
    name: "스티커 팩",
    description: "둥둥실의 일상 표정 12종을 담은 다이컷 스티커 세트",
    badge: "베스트",
    bg: "from-pink-100 to-pink-50",
  },
  {
    emoji: "🔑",
    name: "아크릴 키링",
    description: "양면 인쇄, 60mm 사이즈. 가방 포인트로 딱 좋아요.",
    bg: "from-amber-100 to-amber-50",
  },
  {
    emoji: "💌",
    name: "엽서 세트",
    description: "계절별 4종 엽서 + 사인 카드 1장. 친환경 종이 사용.",
    bg: "from-sky-100 to-sky-50",
  },
  {
    emoji: "🖼️",
    name: "미니 포스터",
    description: "A4 사이즈 두꺼운 매트지. 책상 위 무드 메이커.",
    badge: "한정",
    bg: "from-emerald-100 to-emerald-50",
  },
];

export function GoodsLineup() {
  return (
    <section id="lineup" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-pink-500">
            First Season Lineup
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            첫 시즌 굿즈, 4종 미리보기
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            가격과 정확한 사양은 출시일에 함께 공개됩니다. 사전예약 신청자에게는
            가장 먼저 알림을 보내드려요.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <li
              key={item.name}
              className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`mb-5 flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br ${item.bg} text-6xl`}
              >
                {item.emoji}
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                {item.badge && (
                  <span className="rounded-full bg-pink-500 px-2.5 py-0.5 text-xs font-semibold text-white">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              <p className="mt-4 text-xs font-medium text-slate-400">가격 · Coming Soon</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
