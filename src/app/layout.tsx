import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "둥둥실 — 캐릭터 굿즈 첫 시즌 사전예약",
  description:
    "느린 하루를 응원하는 캐릭터 둥둥실의 첫 시즌 굿즈 사전예약. 스티커, 키링, 엽서, 미니 포스터를 가장 먼저 만나보세요.",
  openGraph: {
    title: "둥둥실 — 캐릭터 굿즈 첫 시즌 사전예약",
    description:
      "스티커 · 키링 · 엽서 · 미니 포스터. 사전예약 신청자에게는 한정 시크릿 굿즈를 함께 보내드려요.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "둥둥실 — 캐릭터 굿즈 첫 시즌 사전예약",
    description: "사전예약 신청하고 출시 알림과 시크릿 굿즈를 받아보세요.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">{children}</body>
    </html>
  );
}
