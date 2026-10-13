"use client";

import { useEffect, useId, useState } from "react";

export default function AdPopup() {
  const [open, setOpen] = useState(true);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.classList.add("ad-popup-open");
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("ad-popup-open");
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="ad-popup">
      <button
        className="ad-popup-backdrop"
        type="button"
        aria-label="팝업 닫기"
        onClick={() => setOpen(false)}
      />
      <div
        className="ad-popup-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          className="ad-popup-close"
          type="button"
          aria-label="닫기"
          onClick={() => setOpen(false)}
        >
          ×
        </button>

        <img
          className="ad-popup-logo"
          src="/kkf-logo.png"
          alt="한국애견연맹"
          width={148}
          height={148}
        />

        <p className="ad-popup-kicker">Korea Kennel Federation · Since 1948</p>

        <h2 id={titleId} className="ad-popup-title">
          <span className="ad-popup-free">무료로</span>
          <span className="ad-popup-verb">광고하세요.</span>
        </h2>

        <p className="ad-popup-lead">
          <strong>한국애견연맹 소속 미용학원</strong>이라면
        </p>
        <p className="ad-popup-body">
          <span className="ad-chip">한국애견연맹</span>
          <span className="ad-or">또는</span>
          <span className="ad-chip ad-chip-deep">반려문화증진위원회</span>
          에 연락을 통해 해당 페이지에{" "}
          <em>무료로 광고</em>를 진행하실 수 있습니다.
        </p>

        <p className="ad-popup-note">
          <span>입점 안내</span>
          입점 시 사이트 디자인이 해당 광고에 맞게 수정 진행됩니다.
        </p>

        <button className="ad-popup-confirm" type="button" onClick={() => setOpen(false)}>
          확인했습니다
        </button>
      </div>
    </div>
  );
}
