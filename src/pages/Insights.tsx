import PageLayout, { PageHero } from '../components/PageLayout';
import { insights, insightUrl } from '../content/insights';
import './Insights.css';

// Insights index: one card per article in src/content/insights.ts.
export default function Insights() {
  return (
    <PageLayout title="Insights" active="insights">
      <PageHero
        eyebrow="Simplicytas Insights"
        headline={<>{"What the numbers are saying."}<br /><span className="teal">{"Before the market says it for you."}</span></>}
      >
        <div className="page-hero-sub">{"Short reads on the structural shifts in private credit, real estate and private markets, and what they mean for the data behind your book."}</div>
      </PageHero>
      <section className="page-body">
        <div className="page-body-inner">
          <div className="insight-grid">
            {insights.map((a) => (
              <a className="insight-card" href={insightUrl(a.slug)} key={a.slug}>
                <div className="insight-card-tag">{a.eyebrow}</div>
                <h2 className="insight-card-title">{a.title}</h2>
                <p className="insight-card-teaser">{a.heroSub}</p>
                <span className="insight-card-cta">
                  {"Read the insight"}
                  <span className="insight-card-arrow">{"→"}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
