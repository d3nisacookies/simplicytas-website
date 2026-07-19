import { useEffect, useRef, type ReactNode } from 'react';
import './Legal.css';
import { navLogo } from '../lib/logo';

interface LegalLayoutProps {
  title: string;
  updated: string;
  children: ReactNode;
}

// Shared shell for the legal pages (Privacy / Terms / Cookies): same nav as the
// main pages, a navy hero band, light content body, and the site footer.
export default function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  const navToggleRef = useRef<HTMLInputElement>(null);

  const closeMenu = () => {
    if (navToggleRef.current) navToggleRef.current.checked = false;
  };

  useEffect(() => {
    document.title = `Simplicytas | ${title}`;
  }, [title]);

  return (
    <>
      <nav>
        <a className="nav-logo-panel" href="/#s1">
          <div className="nav-mark">
            <img src={navLogo} alt="Simplicytas eye mark" />
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
          <a className="nav-link" href="/products.html" onClick={closeMenu}>{"Products"}</a>
          <a className="nav-link" href="/#s4" onClick={closeMenu}>{"Results"}</a>
          <a className="nav-link" href="/about.html" onClick={closeMenu}>{"About"}</a>
          <a className="nav-link" href="/#s5" onClick={closeMenu}>{"Talk to Us"}</a>
        </div>
      </nav>
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-eyebrow">{"Simplicytas Consulting Pte Ltd"}</div>
          <h1 className="legal-title">{title}</h1>
          <div className="legal-updated">{updated}</div>
        </div>
      </section>
      <section className="legal-body">
        <div className="legal-body-inner">{children}</div>
      </section>
      <footer className="legal-footer">
        <div className="foot-brand">{"Simplicytas"}</div>
        <div className="foot-links">
          <a className="foot-link" href="/privacy.html">{"Privacy policy"}</a>
          <a className="foot-link" href="/terms.html">{"Terms of use"}</a>
          <a className="foot-link" href="/cookies.html">{"Cookie policy"}</a>
          <a className="foot-link" href="mailto:hello@simplicytas.com">{"hello@simplicytas.com"}</a>
        </div>
      </footer>
    </>
  );
}
