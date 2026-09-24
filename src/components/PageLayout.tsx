import { useEffect, type ReactNode } from 'react';
import SiteNav, { type NavKey } from './SiteNav';
import SiteFooter from './SiteFooter';

interface PageLayoutProps {
  /** Page name for the browser tab: "Simplicytas | {title}". */
  title: string;
  /** Nav link to highlight, if this page has one. */
  active?: NavKey | null;
  children: ReactNode;
}

// Shell for every inner page: shared nav on top, shared footer at the bottom.
// Put a <PageHero>, a .page-body section and (optionally) a <PageCta> inside.
export default function PageLayout({ title, active = null, children }: PageLayoutProps) {
  useEffect(() => {
    document.title = `Simplicytas | ${title}`;
  }, [title]);

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
}

// Navy hero band with the faint grid texture.
export function PageHero({ eyebrow, headline, children, scrollHint = false, as: Tag = 'h1' }: PageHeroProps) {
  return (
    <section className="page-hero">
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
}

// Navy close-out call to action, pointing at the Home page contact form by default.
export function PageCta({
  heading,
  body,
  bullets = [],
  buttonLabel = 'Start the conversation →',
  buttonHref = '/#contact-card',
}: PageCtaProps) {
  return (
    <section className="page-cta">
      <div className="hero-gl" />
      <div className="page-cta-inner">
        <div>
          <div className="cta-heading">{heading}</div>
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
