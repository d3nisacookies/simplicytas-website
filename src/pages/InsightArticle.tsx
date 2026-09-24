import PageLayout, { PageHero } from '../components/PageLayout';
import { insights, type Insight, type InsightBlock } from '../content/insights';
import './InsightArticle.css';

// Stat blocks alternate plain / highlighted segments: [plain, highlight, plain, ...]
function StatParts({ parts }: { parts: string[] }) {
  return <>{parts.map((p, i) => (i % 2 ? <span className="teal" key={i}>{p}</span> : p))}</>;
}

function Block({ block }: { block: InsightBlock }) {
  switch (block.type) {
    case 'p':
      return <p className="insight-p">{block.text}</p>;
    case 'h2':
      return <h2 className="insight-h2">{block.text}</h2>;
    case 'list':
      return (
        <ul className="insight-list">
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    case 'stat':
      return (
        <div className="insight-stat">
          <div className="insight-stat-text"><StatParts parts={block.parts} /></div>
          <div className="insight-cite">{block.cite}</div>
        </div>
      );
    case 'question':
      return (
        <div className="insight-question">
          <div className="insight-question-label">{"Key Question"}</div>
          <p className="insight-question-text">{block.question}</p>
          {block.sub && <p className="insight-question-sub">{block.sub}</p>}
        </div>
      );
  }
}

function Article({ article }: { article: Insight }) {
  return (
    <PageLayout title={article.title} active="insights">
      <PageHero
        eyebrow={article.eyebrow}
        headline={<>{article.headline}<br /><span className="teal">{article.headlineAccent}</span></>}
      >
        <div className="page-hero-sub">{article.heroSub}</div>
        <div className="milestones">
          {article.milestones.map((m, i) => (
            <div className="milestone" key={i}>
              <div className="milestone-num">{i + 1}</div>
              <div className="milestone-tag">{m.tag}</div>
              <h3 className="milestone-title">{m.title}</h3>
              <p className="milestone-body">{m.body}</p>
            </div>
          ))}
        </div>
        <div className="milestone-source">{article.milestoneSource}</div>
        <p className="insight-hero-close">{article.heroClose}</p>
      </PageHero>
      <section className="page-body insight-body">
        <div className="page-body-inner">
          <a className="insight-back" href="/insights.html">{"← All insights"}</a>
          {article.body.map((b, i) => <Block block={b} key={i} />)}
          <p className="insight-closing">{article.closing}</p>
          <div className="insight-cta-row">
            <a className="cta-btn" href="/#contact-card">{article.ctaLabel}{" →"}</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

// One component serves every /insights/<slug>.html page: the slug comes
// from the URL, so each article's HTML entry just mounts this.
export default function InsightArticle() {
  const slug = window.location.pathname.split('/').pop()?.replace(/\.html$/, '');
  const article = insights.find((a) => a.slug === slug);
  if (!article) {
    window.location.replace('/insights.html');
    return null;
  }
  return <Article article={article} />;
}
