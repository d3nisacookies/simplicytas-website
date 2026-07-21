import { useEffect, useRef } from 'react';
import './Products.css';

// Converted 1:1 from simplicytas_products_v3.html
export default function Products() {
  const navToggleRef = useRef<HTMLInputElement>(null);

  // Original script: clicking any .nav-link closes the mobile menu checkbox
  const closeMenu = () => {
    if (navToggleRef.current) navToggleRef.current.checked = false;
  };

  useEffect(() => {
    document.title = "Simplicytas | Intelligence360 Suite";
  }, []);

  return (
    <>
      <nav>
        <a className="nav-logo-panel" href="/#s1">
          <div className="nav-mark">
            <img src="data:image/png;base64,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" alt="Simplicytas eye mark" />
          </div>
          <div className="nav-text">
            <div className="nav-brand">{"Simplicytas"}</div>
            <div className="nav-tagline">{"See what others miss"}</div>
          </div>
        </a>
        <input type="checkbox" id="navToggle" className="nav-toggle-checkbox" ref={navToggleRef} />
        <label htmlFor="navToggle" className="nav-toggle" aria-label="Menu">
          <span className="nav-toggle-icon">
            <span />
            <span />
            <span />
          </span>
        </label>
        <div className="nav-links-panel">
          <a className="nav-link" href="/#s1" onClick={closeMenu}>{"The Problem"}</a>
          <a className="nav-link" href="/#s2" onClick={closeMenu}>{"Where It Breaks"}</a>
          <a className="nav-link" href="/#s3" onClick={closeMenu}>{"How We Work"}</a>
          <a className="nav-link active" href="/products.html" onClick={closeMenu}>{"Products"}</a>
          <a className="nav-link" href="/#s4" onClick={closeMenu}>{"Results"}</a>
          <a className="nav-link" href="/about.html" onClick={closeMenu}>{"About"}</a>
          <a className="nav-link" href="/#s5" onClick={closeMenu}>{"Talk to Us"}</a>
        </div>
      </nav>
      <section className="p-hero">
        <div className="hero-gl" />
        <div className="p-hero-inner">
          <div className="p-eyebrow">{"Simplicytas Intelligence360 Suite"}</div>
          <div className="p-headline">
            {"Four products."}
            <br />
            <span className="teal">{"One operating model."}</span>
          </div>
          <div className="p-hero-sub">{"Four distinct products under the Intelligence360 Suite, each built to close one structural gap."}</div>
        </div>
        <div className="p-hero-scroll">{"Scroll to explore"}</div>
      </section>
      <div className="scroll-pane">
        <section className="p-body">
          <div className="p-body-inner">
            <div className="p-lede">
              {"Each product solves one structural problem: procurement, data, portfolios, or governance. Start with one, or run all four together."}
            </div>
            <div className="product-stack">
              <div className="product-card">
                <div className="product-side">
                  <div className="product-name">{"Procurement360"}</div>
                </div>
                <div className="product-main">
                  <div className="product-tagline">{"Turns procurement into a source of value, not a cost centre to manage."}</div>
                  <div className="product-body">
                    {"Procurement360 sharpens supplier performance, sourcing effectiveness, contract compliance, and spend visibility, then uses that visibility to surface savings other teams miss. For the CFO, that means clean, defensible numbers on where cash is going. For the COO, shorter procurement cycles and suppliers held to account instead of managed on trust."}
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-side">
                  <div className="product-name">{"Data360"}</div>
                </div>
                <div className="product-main">
                  <div className="product-tagline">{"Replaces fragmented, siloed data with one version of the truth the business can act on."}</div>
                  <div className="product-body">
                    {"Data360 brings ingestion, validation, lineage, governance, analytics, and reporting into a single system, so the numbers reconcile before they reach the top. For the CFO, board and investor reporting that does not need reconciling twice. For the CEO, one number everyone in the room already agrees on."}
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-side">
                  <div className="product-name">{"Portfolio Management360"}</div>
                </div>
                <div className="product-main">
                  <div className="product-tagline">
                    {"Gives AI and transformation portfolios the visibility capital allocation decisions actually need."}
                  </div>
                  <div className="product-body">
                    {"Portfolio Management360 tracks priorities, resources, dependencies, risk, cost, and benefit across every initiative in the portfolio. For the CFO, a clear line from spend to return across every AI and transformation bet. For the CEO, the ability to redirect scarce resources before a stalled programme becomes a write-off."}
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-side">
                  <div className="product-name">{"Governance360"}</div>
                </div>
                <div className="product-main">
                  <div className="product-tagline">{"Builds trust, control, and accountability into how AI gets used, not around it."}</div>
                  <div className="product-body">
                    {"Governance360 embeds risk management, compliance, and decision controls directly into day to day AI operations, with the transparency and audit trail to prove it. For the COO, fewer surprises inside live operations. For the board, confidence to approve the next initiative without re-litigating the last one."}
                  </div>
                </div>
              </div>
            </div>
            <div className="pull-block">
              <div className="pull-label">{"Together"}</div>
              <div className="body-para">
                {"Together, the four products form one operating model connecting data, procurement, portfolios, and governance. Every product runs on the same nine-module diagnostic sequence, from source data to business case. The result: stronger controls, better investment decisions, and faster value realisation across the organisation."}
              </div>
            </div>
          </div>
        </section>
        <div className="p-close">
          <a className="p-close-link" href="/#s1">{"← Back to simplicytas.com"}</a>
        </div>
        <section className="p-cta">
          <div className="hero-gl" />
          <div className="p-cta-inner">
            <div>
              <div className="cta-heading">{"Where is value leaking in your organisation?"}</div>
              <div className="cta-body">{"For CEOs, CFOs, and COOs who own a data, procurement, or logistics problem, the next step is simple:"}</div>
              <div className="cta-bullets">
                <div className="cta-bullet">{"Share one current reporting pack or operational problem."}</div>
                <div className="cta-bullet">{"We respond with a structured diagnosis that becomes the basis for the conversation."}</div>
              </div>
            </div>
            <a href="mailto:contact@simplicytas.com" className="cta-btn">{"Start the conversation →"}</a>
          </div>
        </section>
        <footer className="site-footer">
          <div className="foot-brand">{"Simplicytas"}</div>
          <div className="foot-links">
            <a className="foot-link" href="/privacy.html">{"Privacy policy"}</a>
            <a className="foot-link" href="/cookies.html">{"Cookie policy/setting"}</a>
            <a className="foot-link" href="/terms.html">{"Terms of use"}</a>
            <a className="foot-link" href="mailto:contact@simplicytas.com">{"contact@simplicytas.com"}</a>
          </div>
        </footer>
      </div>
    </>
  );
}
