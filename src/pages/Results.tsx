import PageLayout, { PageHero, PageCta } from '../components/PageLayout';
import { CONTACT_URL } from '../components/SiteNav';
import './Results.css';

// Results: the case summaries and case-study note that used to sit on Home,
// followed by the "Most consulting firms..." story from the old About page.
export default function Results() {
  return (
    <PageLayout title="Results" active="results">
      <PageHero
        eyebrow="Results"
        headline={<>{"It has worked before."}<br /><span className="teal">{"Here is what that looked like."}</span></>}
      >
        <div className="page-hero-sub">{"Three situations. Three different regions. The same gap between what the data showed and what was actually happening, and the same outcome when someone stayed long enough to close it."}</div>
      </PageHero>
      <section className="page-body results-body">
        <div className="page-body-inner">
          <div className="results-stack">
            <div className="rcard">
              <div className="rc-left">
                <div className="rc-sector">{"Commercial Real Estate · Americas"}</div>
                <div className="rc-situation">{"$6B in acquired assets. No reporting layer anyone trusted."}</div>
                <div className="rc-tag">
                  <div className="rc-tag-dot" />
                  {"Data visibility"}
                </div>
              </div>
              <div className="rc-mid">
                <div className="rc-before">
                  {"Fragmented data across systems and geographies. Unable to report to lenders or investors. No visibility over day-to-day operations."}
                </div>
                <div className="rc-arrow">{"↓"}</div>
                <div className="rc-after">
                  {"End-to-end reporting built from scratch. Lender, investor, tax, and regulatory reporting delivered accurately and on time, for the first time. Manual remediation fully automated."}
                </div>
              </div>
              <div className="rc-right">
                <div className="rc-stat">
                  {"$6"}
                  <span>{"B"}</span>
                </div>
                <div className="rc-stat-label">{"in assets. First reliable reporting layer delivered within the engagement."}</div>
              </div>
            </div>
            <div className="rcard">
              <div className="rc-left">
                <div className="rc-sector">{"Technology · APAC"}</div>
                <div className="rc-situation">{"Finance teams scattered across eight countries. No shared model, rising costs."}</div>
                <div className="rc-tag">
                  <div className="rc-tag-dot" />
                  {"Platform adoption"}
                </div>
              </div>
              <div className="rc-mid">
                <div className="rc-before">
                  {"Dispersed finance teams across eight APAC countries, each running inconsistent processes. Regulatory complexity across five markets. Costs climbing with no scalable structure to support growth."}
                </div>
                <div className="rc-arrow">{"↓"}</div>
                <div className="rc-after">
                  {"In-house finance shared service centres built in Malaysia and China. Restructuring executed with full change management across all eight countries. Standardised processes, stronger talent retention, and a model built to scale."}
                </div>
              </div>
              <div className="rc-right">
                <div className="rc-stat">
                  {"25"}
                  <span>{"%"}</span>
                </div>
                <div className="rc-stat-label">
                  {"reduction in transactional accounting costs. Shared service centres built across Malaysia and China."}
                </div>
              </div>
            </div>
            <div className="rcard">
              <div className="rc-left">
                <div className="rc-sector">{"Financial Services · Europe"}</div>
                <div className="rc-situation">{"Lean programme approved. Global operations. Change not happening."}</div>
                <div className="rc-tag">
                  <div className="rc-tag-dot" />
                  {"Stalled transformation"}
                </div>
              </div>
              <div className="rc-mid">
                <div className="rc-before">
                  {"Major European investment bank needed transformation across global equities middle and back office. London, New York, and India. Tangible results needed fast."}
                </div>
                <div className="rc-arrow">{"↓"}</div>
                <div className="rc-after">
                  {"10%+ capacity reduction in six months. 500+ staff trained globally. Lean mindset embedded. Not handed over. Long-term operational resilience established across all three locations."}
                </div>
              </div>
              <div className="rc-right">
                <div className="rc-stat">
                  {"10"}
                  <span>{"%+"}</span>
                </div>
                <div className="rc-stat-label">{"capacity reduction in 6 months. 500 staff trained. Change embedded, not handed over."}</div>
              </div>
            </div>
          </div>
          <div className="case-note">
            <div className="case-note-label">{"Case studies"}</div>
            <div className="case-note-text">
              {"Across financial services, commercial real estate, logistics, technology, and industrial sectors. The three above are a representative sample. Tell us what you're dealing with below, and we'll send the ones most relevant to your situation, or set up time to talk it through."}
            </div>
            <a className="case-cta" href={CONTACT_URL}>
              {"Get the relevant case studies, or start a conversation "}
              <span className="case-arrow">{"→"}</span>
            </a>
          </div>
          <div className="page-lede">
            {"Most consulting firms sell a framework. We bring the judgment and insight that change what your organisation can see and do: how value leakage gets measured, how execution gets controlled."}
          </div>
          <div className="body-para">
            {"Between us, we've sat as CEO, CFO, COO, and CIO inside organisations spanning financial services, commercial real estate, industrials, and technology. We've managed $5 billion in real estate transactions. Reduced debtor days from 223 to 65. Moved a production plant from Germany to India in nine months, and resolved the cultural friction that came with it. Closed a major acquisition from the inside."}
          </div>
          <div className="body-para">
            {"We didn't read about these problems. We owned them, in "}
            <span className="cities-line">{"Singapore, the UK, Germany, Russia, the US and Latin America"}</span>
            {"."}
          </div>
          <div className="stat-strip">
            <div className="stat-cell">
              <div className="stat-num">
                {"$5"}
                <span>{"B"}</span>
              </div>
              <div className="stat-label">{"In real estate transactions managed"}</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">
                {"223"}
                <span>{"→65"}</span>
              </div>
              <div className="stat-label">{"Debtor days reduced, in 12 months"}</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">
                {"$20"}
                <span>{"M+"}</span>
              </div>
              <div className="stat-label">{"In efficiency gains, single engagement"}</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">
                {"4"}
                <span />
              </div>
              <div className="stat-label">{"Regions: APAC · Europe · Americas · Middle East"}</div>
            </div>
          </div>
          <div className="body-para">
            {"A global organisation isn't one culture wearing different logos. The Singapore office doesn't decide the way London does. We've sat inside those entities, not visited them, so we know the difference between a market that needs to be told and one that needs to be asked."}
          </div>
          <div className="body-para">
            {"What that gives you: faster structural diagnosis, fewer blind spots in complex markets, and fixes that hold because they match how teams actually decide, not how frameworks assume they do."}
          </div>
          <div className="pull-block">
            <div className="body-para">
              {"That's the gap no AI tool closes. AI can process the data. It can't tell you why a team nods in the meeting and does something else after, because it was never in the room. Judgment like that has to be earned."}
            </div>
          </div>
          <div className="body-para">
            {"When we walk into your business, we're not running a diagnostic. We're recognising a pattern we've lived before. And we stay until the fix holds, in every entity, not just head office."}
          </div>
        </div>
      </section>
      <PageCta
        heading={"Ready to see what your organisation is missing?"}
        body={"For CEOs, CFOs, and COOs who want operators in the room, not consultants studying it from outside, the next step is simple:"}
        bullets={[
          "Tell us where head office and the ground floor disagree.",
          "We respond with the judgment call, not a framework.",
        ]}
      />
    </PageLayout>
  );
}
