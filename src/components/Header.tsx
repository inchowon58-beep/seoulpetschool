"use client";

import { useEffect, useState } from "react";
import { MOBILE_NAV, NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 980) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label={`${SITE.brandKo} 홈`}>
          <span className="brand-mark" aria-hidden="true">
            {SITE.mark}
          </span>
          <span className="brand-text">
            <span className="brand-en">{SITE.brandEn}</span>
            <span className="brand-ko">{SITE.schoolName}</span>
            <span className="brand-affil">한국애견연맹소속 미용학원정보</span>
          </span>
        </a>

        <nav className="nav-desktop" aria-label="주요 메뉴">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          상담문의
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className="nav-mobile" id="mobile-menu" hidden={!open}>
        {MOBILE_NAV.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="nav-mobile-cta" href="#contact" onClick={() => setOpen(false)}>
          상담문의
        </a>
      </nav>
    </header>
  );
}
