import { useRef, type MouseEvent } from 'react';
import { navLogo } from '../lib/logo';

export type NavKey = 's1' | 's2' | 'help' | 'results' | 'insights' | 'about';

/** The contact form lives at the bottom of the About page. */
export const CONTACT_URL = '/about/#contact';

const LINKS: { key: NavKey; label: string; href: string }[] = [
  { key: 's1', label: 'The Problem', href: '/#s1' },
  { key: 's2', label: 'Where It Breaks', href: '/#s2-inner' },
  { key: 'help', label: 'How We Help', href: '/how-we-help/' },
  { key: 'results', label: 'Results', href: '/results/' },
  { key: 'insights', label: 'Insights', href: '/insights/' },
  { key: 'about', label: 'About', href: '/about/' },
];

interface SiteNavProps {
  /** Link to highlight as the current page/section. */
  active?: NavKey | null;
  /** Extra click handling per link (Home uses it to smooth-scroll in-page). */
  onLinkClick?: (key: NavKey, e: MouseEvent<HTMLAnchorElement>) => void;
}

// Fixed navy nav shared by every page. Collapses to a CSS-only hamburger
// (checkbox + label) below 1000px - see site.css.
export default function SiteNav({ active = null, onLinkClick }: SiteNavProps) {
  const navToggleRef = useRef<HTMLInputElement>(null);
  const closeMenu = () => {
    if (navToggleRef.current) navToggleRef.current.checked = false;
  };

  return (
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
        {LINKS.map(({ key, label, href }) => (
          <a
            key={key}
            className={`nav-link${active === key ? ' active' : ''}`}
            href={href}
            onClick={(e) => {
              closeMenu();
              onLinkClick?.(key, e);
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
