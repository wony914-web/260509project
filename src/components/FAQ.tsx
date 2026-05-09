type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: "정식 출시는 언제인가요?",
    a: "2026년 봄을 목표로 준비 중이에요. 정확한 출시일은 사전예약 신청자에게 가장 먼저 메일로 알려드립니다.",
  },
  {
    q: "사전예약 신청 시 어떤 혜택이 있나요?",
    a: "출시 알림과 함께 한정 시크릿 굿즈 1종, 그리고 전 상품 10% 얼리버드 쿠폰을 보내드려요.",
  },
  {
    q: "수량은 한정인가요?",
    a: "네, 첫 시즌은 라인업별로 100~300개 한정 수량으로 제작돼요. 사전예약 신청자가 우선 구매할 수 있어요.",
  },
  {
    q: "해외 배송도 되나요?",
    a: "첫 시즌은 국내 배송만 지원해요. 해외 배송은 시즌 2부터 검토 중입니다.",
  },
  {
    q: "이메일을 잘못 입력했어요. 변경할 수 있나요?",
    a: "다시 한 번 정확한 이메일로 신청해 주시면 됩니다. 중복 안내는 자동으로 처리돼요.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-pink-500">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            자주 묻는 질문
          </h2>
        </div>

        <ul className="space-y-3">
          {FAQS.map((item, idx) => (
            <li key={item.q}>
              <details
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-pink-200 open:bg-pink-50/40"
                {...(idx === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-slate-900">
                  <span>{item.q}</span>
                  <span
                    aria-hidden
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition group-open:rotate-45 group-open:bg-pink-500 group-open:text-white"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
