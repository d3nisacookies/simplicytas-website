import { useEffect, type ReactNode } from 'react';
import SiteNav, { CONTACT_URL, type NavKey } from './SiteNav';
import SiteFooter from './SiteFooter';

interface PageLayoutProps {
  /** Page name for the browser tab: "Simplicytas | {title}" (unless documentTitle is given). */
  title: string;
  /** Full browser-tab title, used verbatim. Comes from src/seo.ts so it matches the pre-rendered <title>. */
  documentTitle?: string;
  /** Nav link to highlight, if this page has one. */
  active?: NavKey | null;
  children: ReactNode;
}

// Shell for every inner page: shared nav on top, shared footer at the bottom.
// Put a <PageHero>, a .page-body section and (optionally) a <PageCta> inside.
export default function PageLayout({ title, documentTitle, active = null, children }: PageLayoutProps) {
  useEffect(() => {
    document.title = documentTitle ?? `Simplicytas | ${title}`;
  }, [title, documentTitle]);

  // Links like /about/#contact arrive before React has rendered the target,
  // so the browser's own jump-to-anchor finds nothing. Do it once mounted.
  useEffect(() => {
    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }, []);

  return (
    <>
      <SiteNav active={active} />
      {children}
      <SiteFooter />
    </>
  );
}

interface PageHeroProps {
  eyebrow: ReactNode;
  /** Headline content - wrap accent words in <span className="teal">. */
  headline: ReactNode;
  /** Optional line(s) under the headline. */
  children?: ReactNode;
  /** Show the "Scroll to explore" hint in the bottom-right corner. */
  scrollHint?: boolean;
  /** Render the headline as the page's <h1> (default) or a plain div. */
  as?: 'h1' | 'div';
  /** Extra class on the section, for page-specific hero tweaks. */
  className?: string;
}

// Navy hero band with the faint grid texture.
export function PageHero({ eyebrow, headline, children, scrollHint = false, as: Tag = 'h1', className }: PageHeroProps) {
  return (
    <section className={className ? `page-hero ${className}` : 'page-hero'}>
      <div className="hero-gl" />
      <div className="page-hero-inner">
        <div className="page-eyebrow">{eyebrow}</div>
        <Tag className="page-headline">{headline}</Tag>
        {children}
      </div>
      {scrollHint && <div className="page-hero-scroll">{"Scroll to explore"}</div>}
    </section>
  );
}

interface PageCtaProps {
  heading: ReactNode;
  body: ReactNode;
  bullets?: ReactNode[];
  buttonLabel?: string;
  buttonHref?: string;
  id?: string;
}

// The standard "Ready to see..." banner wording, shared by Where It Breaks
// (Home), Results and Insights: <PageCta {...READY_CTA} />.
export const READY_CTA = {
  heading: 'Ready to see what your organisation is missing?',
  body: 'For CEOs, CFOs, and COOs who want people working inside the operation, not studying it from outside, the next step is simple:',
  bullets: [
    'Tell us where head office and the ground floor disagree.',
    'We respond with the judgment call, not a framework.',
  ],
};

// One-line positioning strip shown above the final call to action on Home and Results.
export function AiLine() {
  return (
    <section className="ai-line">
      <p className="ai-line-text">{"AI reports on whatever data you feed it. We fix the data first."}</p>
    </section>
  );
}

// Navy close-out call to action, pointing at the About page contact form by default.
export function PageCta({
  heading,
  body,
  bullets = [],
  buttonLabel = 'Start the conversation →',
  buttonHref = CONTACT_URL,
  id,
}: PageCtaProps) {
  return (
    <section className="page-cta" id={id}>
      <div className="hero-gl" />
      <div className="page-cta-inner">
        <div>
          <h2 className="cta-heading">{heading}</h2>
          <div className="cta-body">{body}</div>
          {bullets.length > 0 && (
            <div className="cta-bullets">
              {bullets.map((b, i) => (
                <div className="cta-bullet" key={i}>{b}</div>
              ))}
            </div>
          )}
        </div>
        <a href={buttonHref} className="cta-btn">{buttonLabel}</a>
      </div>
    </section>
  );
}
