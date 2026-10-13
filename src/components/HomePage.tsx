import { GALLERY, SITE } from "@/lib/site";

function img(n: string) {
  return `${SITE.imageCdn}/${n}.webp`;
}

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>

      <main id="main">
        <section className="hero" aria-label="서울애견미용학원 히어로">
          <img
            className="hero-media"
            src={img("01")}
            alt="서울애견미용학원 서울펫스쿨 강남 완성 컷"
            width={1600}
            height={1067}
            fetchPriority="high"
          />
          <div className="hero-veil" aria-hidden="true" />
          <div className="hero-content">
            <p className="hero-brand">
              {SITE.brandEn} · {SITE.brandKo}
            </p>
            <h1>서울애견미용학원</h1>
            <p className="hero-lead">
              강남·서초·송파 살롱은 자른 결과와 함께
              보호자에게 한 말, 그리고 다음 달에도 같은 라인을
              사진으로 증명하라고 합니다. 서울펫스쿨의 한 작업은
              상담 문장, 컷, 촬영이 한 세트입니다.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#standard">
                살롱이 보는 기준
              </a>
              <a className="btn btn-ghost" href="#districts">
                강남 거점 안내
              </a>
            </div>
          </div>
        </section>

        <section className="keyword-bar" aria-label="서울 검색어">
          <div className="container keyword-bar-inner">
            <span>#서울애견미용학원</span>
            <span>#서울펫스쿨</span>
            <span>#서울강아지미용학원</span>
            <span>#강남애견미용학원</span>
            <span>#송파애견미용</span>
            <span>#서초애견미용학원</span>
            <span>#애견미용학원비용</span>
          </div>
        </section>

        <section className="section" id="standard">
          <div className="container">
            <div className="section-head left">
              <p className="eyebrow">Bar</p>
              <h2>서울 남부 살롱이 신입에게 보여주는 세 장</h2>
            </div>
            <div className="info-grid">
              <article>
                <h3>말하기</h3>
                <p>
                  오늘 어디를 짧게 했는지, 다음엔 무엇을 남길지.
                  <strong>서울애견미용학원</strong>은 컷 전에 이 두 문장을 적게 합니다.
                  문장이 없으면 가위를 열지 않습니다.
                </p>
              </article>
              <article>
                <h3>라인</h3>
                <p>
                  견종 이름이 많아도 평가 항목은 목 각도, 가슴 폭, 귀 끝 세 곳입니다.
                  강남 재방문 손님이 사진을 들고 오는 지점입니다.
                </p>
              </article>
              <article>
                <h3>촬영</h3>
                <p>
                  같은 배경, 같은 높이. 필터는 금지입니다.
                  포트폴리오가 샵 조명과 다르면 면접에서 제외되는 경우가 있습니다.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="curriculum">
          <div className="container split">
            <figure className="media-frame">
              <img
                src={img("10")}
                alt="서울펫스쿨 상담 문장 후 라인 작업"
                loading="lazy"
                width={800}
                height={1000}
              />
            </figure>
            <div>
              <p className="eyebrow">One job</p>
              <h2>한 마리는 세 장면으로만 끝냅니다</h2>
              <p>
                <strong>서울강아지미용학원</strong> 과제 용지는 칸이 셋입니다.
                첫째 칸에 보호자 문장, 둘째 칸에 목·가슴·귀 길이,
                셋째 칸에 촬영 체크. 기술을 열 개로 나누지 않는 이유는
                강남 샵의 실제 동선이 이미 그렇게 묶여 있기 때문입니다.
              </p>
              <ul className="check-list">
                <li>문장에 없는 부위는 자르지 않습니다</li>
                <li>숫자는 mm가 아니라 지난 사진과의 차이로 적습니다</li>
                <li>촬영이 흐리면 컷을 다시 하지 않고 촬영만 다시 합니다</li>
                <li>송파 잠실 쪽 대형 프랜차이즈는 셋째 칸 비중이 더 큽니다</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="districts">
          <div className="container narrow">
            <p className="eyebrow">Base</p>
            <h2>거점은 강남역이고, 서울 전역 캠퍼스가 아닙니다</h2>
            <p>
              방문 상담은 강남역·신논현, 2호선과 신분당선이 겹치는 생활권입니다.
              서초 교대·방배, 송파 잠실·석촌은 이 거점으로 오는 시간을
              상담에 포함합니다. 성동구는 2호선으로 이어져 저녁 반이 가능합니다.
            </p>
            <p>
              노원·은평·강서에서 “서울”로 검색해 오시는 분께는
              편도 시간을 먼저 말합니다. 주 3회가 도로 위에서 사라지면
              <strong>서울펫스쿨</strong>은 등록 대신 주 1회 촬영 리뷰만 제안합니다.
              모든 구에 같은 수업이 있다고 적지 않습니다.
            </p>
          </div>
        </section>

        <section className="section section-alt" id="price">
          <div className="container narrow">
            <p className="eyebrow">Included</p>
            <h2>애견미용학원비용은 세트 횟수입니다</h2>
            <p>
              시간 수강이 아니라 문장·라인·촬영 세트 횟수로 적습니다.
              <strong>애견미용학원비용</strong> 표에서 모델 견종 폭,
              재촬영 가능 횟수, 개인 가위 시점을 빼면 비교가 불가능합니다.
              강남 샵 면접용 사진 보정이 들어 있는지 없는지도 같은 표에 있습니다.
              자격 실기 용어는 세트 사이에 10분 퀴즈로만 붙이고
              별도 고액 과정으로 두지 않습니다.
            </p>
            <div className="info-grid price-grid">
              <article>
                <h3>문장만</h3>
                <p>컷 없이 상담 기록. 이직 전 말버릇을 고치는 짧은 등록.</p>
              </article>
              <article>
                <h3>세트</h3>
                <p>문장·라인·촬영. 강남·서초 재방문 샵 기준.</p>
              </article>
              <article>
                <h3>프랜차이즈</h3>
                <p>송파 대형 매장 규정에 맞춰 셋째 칸을 늘립니다.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Same light</p>
              <h2>배경을 통일한 서울 과제 사진</h2>
              <p>조명이 다른 사진은 포트폴리오 폴더에 넣지 않습니다.</p>
            </div>
            <div className="gallery-grid">
              {GALLERY.map((n) => (
                <figure key={n}>
                  <img
                    src={img(n)}
                    alt={`서울애견미용학원 동일 조명 과제 ${n}`}
                    loading="lazy"
                    width={600}
                    height={750}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-faq" id="faq">
          <div className="container narrow">
            <p className="eyebrow">FAQ</p>
            <h2>서울에서 범위를 묻는 질문</h2>
            <div className="faq-list">
              <details open>
                <summary>강북에 사는데 서울애견미용학원으로 등록되나요?</summary>
                <p>
                  상담은 가능하지만 거점은 강남역입니다. 편도로 주 3회가 어려우면
                  세트 등록 대신 주 1회 리뷰를 안내합니다.
                </p>
              </details>
              <details>
                <summary>잠실 프랜차이즈 규정이 수업과 다르면요?</summary>
                <p>
                  프랜차이즈 반은 그 매장 사진 규정에 셋째 칸을 맞춥니다.
                  일반 세트 반과 과제를 섞지 않습니다.
                </p>
              </details>
              <details>
                <summary>애견미용사자격증 학원만 찾습니다.</summary>
                <p>
                  실기 용어 퀴즈는 세트 사이에 들어 있습니다. 자격 강의만 있는 반은 열지 않습니다.
                </p>
              </details>
              <details>
                <summary>보정 앱으로 털색을 맞춰도 되나요?</summary>
                <p>
                  안 됩니다. 같은 조명에서 다시 찍습니다. 색 보정은 면접에서 불이익이 됩니다.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="container narrow contact-box">
            <p className="eyebrow">Gangnam</p>
            <h2>강남역에서 세트 횟수를 정합니다</h2>
            <p>
              목표 샵이 서초인지 송파인지, 주 몇 번 올 수 있는지만
              알려 주셔도 문장만·세트·프랜차이즈 중 하나로 좁혀 드립니다.
            </p>
            <p className="contact-brand">
              {SITE.brandKo} · {SITE.schoolName}
            </p>
            <p className="contact-address">{SITE.address}</p>
            <p className="contact-address-sub">{SITE.addressDetail}</p>
            <a className="btn btn-primary" href="#standard">
              세 가지 기준으로
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-brand-en">{SITE.brandEn}</p>
            <p className="footer-brand-ko">{SITE.brandKo}</p>
            <p className="footer-seo">{SITE.title}</p>
          </div>
          <div className="footer-meta">
            <p>{SITE.address}</p>
            <p>서울애견미용학원 · 서울펫스쿨 · 강남애견미용학원</p>
            <p className="footer-managed">
              <img src="/kkf-logo.png" alt="" width={36} height={36} />
              <span>한국애견연맹 반려문화증진위원회에 의해 관리되는 페이지입니다.</span>
            </p>
            <p className="footer-copy">
              &copy; {year} {SITE.brandKo}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
