import PageLayout, { PageHero, PageCta, READY_CTA } from '../components/PageLayout';
import { insights, insightUrl, sectors } from '../content/insights';
import './Insights.css';

// Insights index: articles from src/content/insights.ts, grouped by sector.
// Sectors with no articles yet are left out.
export default function Insights() {
  const groups = sectors
    .map((sector) => ({ sector, articles: insights.filter((a) => a.sector === sector.id) }))
    .filter((g) => g.articles.length > 0);

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
          {groups.map(({ sector, articles }) => (
            <div className="insight-sector" key={sector.id} id={sector.id}>
              <h2 className="insight-sector-title">{sector.label}</h2>
              <div className="insight-grid">
                {articles.map((a) => (
                  <a className="insight-card" href={insightUrl(a)} key={a.slug}>
                    <div className="insight-card-tag">{a.eyebrow}</div>
                    <h3 className="insight-card-title">{a.title}</h3>
                    <p className="insight-card-teaser">{a.heroSub}</p>
                    <span className="insight-card-cta">
                      {a.cardCta}
                      <span className="insight-card-arrow">{"→"}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <PageCta {...READY_CTA} />
    </PageLayout>
  );
}
