'use client';

import { useState } from 'react';

const links = [
  ['服务项目', '#services'],
  ['关于我们', '#story'],
  ['价格', '#pricing'],
  ['客人说', '#reviews'],
  ['门店位置', '#location'],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <nav>
          <a className="logo" href="#top" onClick={() => setOpen(false)}>
            <span className="logo-mark">🐾</span> pawlish
          </a>
          <div className={`nav-links${open ? ' open' : ''}`}>
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
            <a href="#booking" className="nav-cta" onClick={() => setOpen(false)}>立即预约</a>
          </div>
          <button className="menu-btn" onClick={() => setOpen((value) => !value)} aria-label={open ? '关闭菜单' : '打开菜单'} aria-expanded={open}>☰</button>
        </nav>
      </div>
    </header>
  );
}
