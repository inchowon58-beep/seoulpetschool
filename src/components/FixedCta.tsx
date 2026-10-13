import { SITE } from "@/lib/site";

export default function FixedCta() {
  return (
    <div className="fixed-cta">
      <a className="fixed-cta-btn" href="#contact" aria-label={SITE.cta}>
        {SITE.cta}
      </a>
    </div>
  );
}
