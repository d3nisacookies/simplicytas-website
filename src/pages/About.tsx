import { useEffect, useRef } from 'react';
import './About.css';

// Converted 1:1 from simplicytas_about_v5.html
export default function About() {
  const navToggleRef = useRef<HTMLInputElement>(null);

  // Original script: clicking any .nav-link closes the mobile menu checkbox
  const closeMenu = () => {
    if (navToggleRef.current) navToggleRef.current.checked = false;
  };

  useEffect(() => {
    document.title = "Simplicytas | About";
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
          <a className="nav-link" href="/products.html" onClick={closeMenu}>{"Products"}</a>
          <a className="nav-link" href="/#s4" onClick={closeMenu}>{"Results"}</a>
          <a className="nav-link active" href="/about.html" onClick={closeMenu}>{"About"}</a>
          <a className="nav-link" href="/#s5" onClick={closeMenu}>{"Talk to Us"}</a>
        </div>
      </nav>
      <section className="about-hero">
        <div className="hero-gl" />
        <div className="about-hero-inner">
          <div className="about-eyebrow">{"About Simplicytas"}</div>
          <div className="about-headline">
            <span className="teal">{"Judgment,"}</span>
            {" not a framework."}
          </div>
        </div>
        <div className="about-hero-scroll">{"Scroll to explore"}</div>
      </section>
      <div className="scroll-pane">
      <section className="about-body">
        <div className="about-body-inner">
          <div className="lede">
            {"Most consulting firms sell a framework. We sell judgment that changes what your organisation can see and do: how value leakage gets measured, how execution gets controlled."}
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
          <div className="team-label">{"Who works on this"}</div>
          <div className="team-heading">{"Judgment is not a methodology."}</div>
          <div className="team-sub">
            {"The people who run every engagement are chosen for what they have seen before, not what they know in theory. Between them, they cover four regions and every functional layer an engagement touches."}
          </div>
          <div className="people-stack">
            <div className="person">
              <div className="person-side">
                <div className="person-init">{"JC"}</div>
                <div className="person-name">{"John Culleton"}</div>
                <div className="person-role">{"CEO, Global Head of Strategy"}</div>
              </div>
              <div className="person-main">
                <div className="person-bio">
                  {"John has spent more than 30 years leading transformation, operational excellence, and performance improvement inside some of the world's largest consulting, banking, and professional services organisations, across financial services, commercial real estate, pharmaceuticals, energy, and infrastructure. His career is built on execution, not strategy design alone: he has run large-scale transformations end to end from Singapore across Asia-Pacific and beyond, managing multi-million-dollar portfolios and staying accountable for outcomes long after the plan is signed off. Three decades of pattern recognition, being in the room when programmes succeeded and when they didn't, gives him the ability to spot problems early and keep a room focused on outcomes. At Simplicytas, John is the constant: every engagement starts with him, every major decision passes through him, and he stays until the outcome is real."}
                </div>
                <div className="person-when">
                  <div className="person-dot" />
                  <div className="person-when-text">{"Present on every engagement, from first diagnostic through to final handover."}</div>
                </div>
              </div>
            </div>
            <div className="person">
              <div className="person-side">
                <div className="person-init">{"JJ"}</div>
                <div className="person-name">{"Jim Jones"}</div>
                <div className="person-role">{"Senior Advisor, CRE"}</div>
              </div>
              <div className="person-main">
                <div className="person-bio">
                  {"Jim spent over 25 years across a top-tier global investment bank and a leading commercial real estate advisory firm, managing over $5B in commercial real estate transactions and overseeing fund platforms with $15B+ in NAV across the US, EMEA, and Asia-Pacific. He worked the deals in each region directly, not from a head office removed from them. He has held CIO, CFO, and COO roles simultaneously, which means he has operated at the intersection of investment decision-making, data infrastructure, and operational control that most CRE organisations treat as three separate functions. When a CRE fund board needs to know the person across the table has been inside their specific world before, Jim is that person."}
                </div>
                <div className="person-when">
                  <div className="person-dot" />
                  <div className="person-when-text">{"Engaged on CRE fund, asset management, and investor reporting mandates."}</div>
                </div>
              </div>
            </div>
            <div className="person">
              <div className="person-side">
                <div className="person-init">{"IJ"}</div>
                <div className="person-name">{"Ian Jackson"}</div>
                <div className="person-role">{"Senior Advisor, Finance"}</div>
              </div>
              <div className="person-main">
                <div className="person-bio">
                  {"Ian is an internationally experienced CFO and finance transformation leader who has delivered financial performance, growth, and operational turnaround across Europe, the Middle East, Africa, Asia, and the Americas. As CFO for a Big Four firm's Southeast Asia consulting business, he led finance across a $110M operation spanning 10 countries; as CFO for another top-tier professional services firm's MENA business, he oversaw a $500M, 16-country operation that achieved 7x revenue growth during his tenure. At an energy services company, he reduced debtor days from 223 to 65 in 12 months while restructuring financing to support more than 200% growth. He delivered a $750M refinancing programme at a major Middle East automotive group, generating $10M in annual savings, and led ERP and finance transformation work that cut reporting close cycles by 70%. Ian is the proof point that Simplicytas engagements produce measurable financial outcomes, not just process change. He has personally sat in the CFO seat, not advised from outside it, across Latin America, the Middle East, and Asia alike."}
                </div>
                <div className="person-when">
                  <div className="person-dot" />
                  <div className="person-when-text">
                    {"Engaged on mandates where financial outcomes, cash flow, and CFO-level credibility are central to the buying decision."}
                  </div>
                </div>
              </div>
            </div>
            <div className="person">
              <div className="person-side">
                <div className="person-init">{"RS"}</div>
                <div className="person-name">{"René Schuster"}</div>
                <div className="person-role">{"Senior Advisor, Emerging Technology"}</div>
              </div>
              <div className="person-main">
                <div className="person-bio">
                  {"René has spent more than 25 years leading some of the world's most recognised organisations, running operations across North America and Europe rather than directing them from a single base. As CEO and Chairman of a major European telecom operator, he led one of the largest telco businesses in Europe through significant transformation, later taking on global operating responsibility as Group COO of a major telecom group. He was a partner at a Big Four firm leading consulting across Europe and the Middle East, served as global marketing director at a leading telecom group, held a senior global role at an HR and staffing services company, and played a central role in one of the technology industry's largest acquisitions. Alongside his corporate career, he completed a PhD in Artificial Intelligence in 2022, specialising in computer vision and autonomous systems, so he understands both the strategic ambition and the practical limits of applying AI inside a real operation. René is engaged where the conversation needs to start at CEO, Regional President, or board level, and where the buyer needs to know someone at their level has navigated this before."}
                </div>
                <div className="person-when">
                  <div className="person-dot" />
                  <div className="person-when-text">{"Engaged when the entry point is CEO, Regional President, or board level."}</div>
                </div>
              </div>
            </div>
            <div className="person">
              <div className="person-side">
                <div className="person-init">{"DM"}</div>
                <div className="person-name">{"Danny Maylin"}</div>
                <div className="person-role">{"Head of Program Delivery"}</div>
              </div>
              <div className="person-main">
                <div className="person-bio">
                  {"Danny has spent over 20 years turning strategy into sustained execution across financial services, telecoms, technology, automotive, energy, and digital businesses. As SVP of Delivery & Operations at a global automation consultancy, he reshaped the operating model of the business, scaling it from 120 to 160+ staff while lifting gross margin by more than 10% and delivery efficiency by 20%. He built a global energy major's Automation Centre of Excellence, creating a $6M+ savings pipeline across multiple regions, led transformation at a global financial services firm that identified over $20M in operational benefits, and established automation and transformation capabilities at a major telecom operator and two global professional services firms. He is the operator who takes a structural diagnosis and turns it into a working delivery cadence, staying inside the programme until benefits are realised, not just planned."}
                </div>
                <div className="person-when">
                  <div className="person-dot" />
                  <div className="person-when-text">
                    {"Engaged to lead programme delivery and embed operating discipline once the diagnostic is agreed."}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-close">
            <div className="brand-sign">
              <div className="brand-sign-mark">
                <img src="data:image/png;base64,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" alt="Simplicytas eye mark" />
              </div>
              <div className="brand-sign-text">
                <div className="brand-sign-name">{"Simplicytas"}</div>
                <div className="brand-sign-tag">{"See what others miss."}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-cta">
        <div className="hero-gl" />
        <div className="p-cta-inner">
          <div>
            <div className="cta-heading">{"Ready to see what your organisation is missing?"}</div>
            <div className="cta-body">{"For CEOs, CFOs, and COOs who want operators in the room, not consultants studying it from outside, the next step is simple:"}</div>
            <div className="cta-bullets">
              <div className="cta-bullet">{"Tell us where head office and the ground floor disagree."}</div>
              <div className="cta-bullet">{"We respond with the judgment call, not a framework."}</div>
            </div>
          </div>
          <a href="/#s5" className="cta-btn">{"Start the conversation →"}</a>
        </div>
      </section>
      <footer className="site-footer">
        <div className="foot-brand">{"Simplicytas"}</div>
        <div className="foot-links">
          <a className="foot-link" href="/privacy.html">{"Privacy Policy"}</a>
          <a className="foot-link" href="/cookies.html">{"Cookie Policy/Setting"}</a>
          <a className="foot-link" href="/terms.html">{"Terms of Use"}</a>
          <a className="foot-link" href="mailto:contact@simplicytas.com">{"contact@simplicytas.com"}</a>
        </div>
      </footer>
      </div>
    </>
  );
}
