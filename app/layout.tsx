import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pawlish · 宠物洗护点',
  description: 'Pawlish 宠物洗护点，让每一次洗护都变成被温柔对待的时光。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
