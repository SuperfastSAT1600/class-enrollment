import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://class-enrollment.vercel.app'),
  title: 'SuperfastSAT - 수업 선택 및 상담 신청',
  description: '관리형 SAT의 기준, SuperfastSAT 수업권. 정규수업과 여름방학 특강을 확인하세요.',
  openGraph: {
    title: 'SuperfastSAT - 수업 선택 및 상담 신청',
    description: '관리형 SAT의 기준, SuperfastSAT 수업권. 정규수업과 여름방학 특강을 확인하세요.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SuperfastSAT - 수업 선택 및 상담 신청',
    description: '관리형 SAT의 기준, SuperfastSAT 수업권. 정규수업과 여름방학 특강을 확인하세요.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={outfit.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
