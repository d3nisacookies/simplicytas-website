import PageLayout, { PageHero, PageCta } from '../components/PageLayout';
import { pageSeo } from '../seo';
import './Products.css';

// "How We Help" page (/how-we-help/) - the Enterprise360 Suite products.
// Converted 1:1 from simplicytas_products_v3.html
export default function Products() {
  return (
    <PageLayout title="How We Help" documentTitle={pageSeo['/how-we-help/'].title} active="help">
      <PageHero
        eyebrow="Simplicytas Enterprise360 Suite"
        headline={<>{"Start with Data360. "}<br /><span className="teal">{"Add what you need."}</span></>}
        scrollHint
      >
        <div className="page-hero-sub">{"Simplicytas helps complex organisations find what their data is hiding, reconcile it, and put a name against the answer, so that leaders can sign numbers they can explain and trust."}</div>
      </PageHero>
      <section className="page-body">
          <div className="page-body-inner">
            <div className="page-lede">
              {"Every client starts with Data360 in one function. Add what you need as priorities emerge."}
            </div>
            <div className="product-stack">
              <div className="product-card">
                <div className="product-side">
                  <h2 className="product-name">{"Data360"}</h2>
                </div>
                <div className="product-main">
                  <div className="product-tagline">{"Finds where your data disagrees with itself, puts a confidence score on every number, and names an owner for the answer."}</div>
                  <div className="product-body">
                    {"Data360 brings ingestion, validation, lineage, governance, analytics, and reporting into one solution, so the numbers reconcile before they reach the top. For the CFO, board and investor reporting that does not need reconciling twice. For the CEO, one number everyone in the room already agrees on."}
                  </div>
                  <div className="product-proof">{"$6B in acquired assets. First reliable reporting layer delivered within the engagement."}</div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-side">
                  <h2 className="product-name">{"Procure360"}</h2>
                </div>
                <div className="product-main">
                  <div className="product-tagline">{"Turns procurement into a source of value, not a cost centre to manage."}</div>
                  <div className="product-body">
                    {"Procure360 sharpens supplier performance, sourcing effectiveness, contract compliance, and spend visibility, then uses that visibility to surface savings other teams miss. For the CFO, that means clean, defensible numbers on where cash is going. For the COO, shorter procurement cycles and suppliers held to account instead of managed on trust."}
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-side">
                  <h2 className="product-name">{"Portfolio360"}</h2>
                </div>
                <div className="product-main">
                  <div className="product-tagline">
                    {"Gives AI and transformation portfolios the visibility capital allocation decisions actually need."}
                  </div>
                  <div className="product-body">
                    {"Portfolio360 tracks priorities, resources, dependencies, risk, cost, and benefit across every initiative in the portfolio. For the CFO, a clear line from spend to return across every AI and transformation bet. For the CEO, the ability to redirect scarce resources before a stalled programme becomes a write-off."}
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-side">
                  <h2 className="product-name">{"Governance360"}</h2>
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
              <h2 className="pull-label">{"Together"}</h2>
              <div className="body-para">
                {"Together, the four products form one operating model connecting data, procurement, portfolios, and governance. Every product runs on the same nine-module diagnostic sequence, from source data to business case. The result: stronger controls, better investment decisions, and faster value realisation across the organisation."}
              </div>
            </div>
          </div>
        </section>
        <div className="p-close">
          <a className="p-close-link" href="/#s1">{"← Back to simplicytas.com"}</a>
        </div>
        <PageCta
          heading={"Where is value leaking in your organisation?"}
          body={"For CEOs, CFOs, and COOs who own a data, procurement, or logistics problem, the next step is simple:"}
          bullets={[
            "Share one current reporting pack or operational problem.",
            "We respond with a structured diagnosis that becomes the basis for the conversation.",
          ]}
        />
    </PageLayout>
  );
}
