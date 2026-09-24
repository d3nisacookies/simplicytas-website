import PageLayout, { PageHero, PageCta } from '../components/PageLayout';
import './About.css';

// Converted 1:1 from simplicytas_about_v5.html
export default function About() {
  return (
    <PageLayout title="About" active="about">
      <PageHero
        eyebrow="About Simplicytas"
        headline={<><span className="teal">{"Judgment,"}</span>{" not a framework."}</>}
        scrollHint
      />
      <section className="page-body about-body">
        <div className="page-body-inner">
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
                <p className="person-bio">{"John has spent more than 30 years leading transformation, operational excellence, and performance improvement inside some of the world's largest consulting, banking, and professional services organisations, across financial services, commercial real estate, pharmaceuticals, energy, and infrastructure."}</p>
                <p className="person-bio">{"His career is built on execution, not strategy design alone: he has run large-scale transformations end to end from Singapore across Asia-Pacific and beyond, managing multi-million-dollar portfolios and staying accountable for outcomes long after the plan is signed off."}</p>
                <p className="person-bio">{"Three decades of pattern recognition, being in the room when programmes succeeded and when they didn't, gives him the ability to spot problems early and keep a room focused on outcomes."}</p>
                <p className="person-bio">{"At Simplicytas, John is the constant: every engagement starts with him, every major decision passes through him, and he stays until the outcome is real."}</p>
              </div>
            </div>
            <div className="person">
              <div className="person-side">
                <div className="person-init">{"JJ"}</div>
                <div className="person-name">{"Jim Jones"}</div>
                <div className="person-role">{"Senior Advisor, CRE"}</div>
              </div>
              <div className="person-main">
                <p className="person-bio">{"Jim spent over 25 years across a top-tier global investment bank and a leading commercial real estate advisory firm, managing over $5B in commercial real estate transactions and overseeing fund platforms with $15B+ in NAV across the US, EMEA, and Asia-Pacific."}</p>
                <p className="person-bio">{"He worked the deals in each region directly, not from a head office removed from them. He has held CIO, CFO, and COO roles simultaneously, which means he has operated at the intersection of investment decision-making, data infrastructure, and operational control that most CRE organisations treat as three separate functions."}</p>
                <p className="person-bio">{"When a CRE fund board needs to know the person across the table has been inside their specific world before, Jim is that person."}</p>
              </div>
            </div>
            <div className="person">
              <div className="person-side">
                <div className="person-init">{"IJ"}</div>
                <div className="person-name">{"Ian Jackson"}</div>
                <div className="person-role">{"Senior Advisor, Finance"}</div>
              </div>
              <div className="person-main">
                <p className="person-bio">{"Ian is an internationally experienced CFO and finance transformation leader who has delivered financial performance, growth, and operational turnaround across Europe, the Middle East, Africa, Asia, and the Americas."}</p>
                <p className="person-bio">{"As CFO for a Big Four firm's Southeast Asia consulting business, he led finance across a $110M operation spanning 10 countries; as CFO for another top-tier professional services firm's MENA business, he oversaw a $500M, 16-country operation that achieved 7x revenue growth during his tenure. At an energy services company, he reduced debtor days from 223 to 65 in 12 months while restructuring financing to support more than 200% growth. He delivered a $750M refinancing programme at a major Middle East automotive group, generating $10M in annual savings, and led ERP and finance transformation work that cut reporting close cycles by 70%."}</p>
                <p className="person-bio">{"Ian is the proof point that Simplicytas engagements produce measurable financial outcomes, not just process change. He has personally sat in the CFO seat, not advised from outside it, across Latin America, the Middle East, and Asia alike."}</p>
              </div>
            </div>
            <div className="person">
              <div className="person-side">
                <div className="person-init">{"RS"}</div>
                <div className="person-name">{"René Schuster"}</div>
                <div className="person-role">{"Senior Advisor, Emerging Technology"}</div>
              </div>
              <div className="person-main">
                <p className="person-bio">{"René has spent more than 25 years leading some of the world's most recognised organisations, running operations across North America and Europe rather than directing them from a single base."}</p>
                <p className="person-bio">{"As CEO and Chairman of a major European telecom operator, he led one of the largest telco businesses in Europe through significant transformation, later taking on global operating responsibility as Group COO of a major telecom group. He was a partner at a Big Four firm leading consulting across Europe and the Middle East, served as global marketing director at a leading telecom group, held a senior global role at an HR and staffing services company, and played a central role in one of the technology industry's largest acquisitions."}</p>
                <p className="person-bio">{"Alongside his corporate career, he completed a PhD in Artificial Intelligence in 2022, specialising in computer vision and autonomous systems, so he understands both the strategic ambition and the practical limits of applying AI inside a real operation."}</p>
                <p className="person-bio">{"René is engaged where the conversation needs to start at CEO, Regional President, or board level, and where the buyer needs to know someone at their level has navigated this before."}</p>
              </div>
            </div>
            <div className="person">
              <div className="person-side">
                <div className="person-init">{"DM"}</div>
                <div className="person-name">{"Danny Maylin"}</div>
                <div className="person-role">{"Head of Program Delivery"}</div>
              </div>
              <div className="person-main">
                <p className="person-bio">{"Danny has spent over 20 years turning strategy into sustained execution across financial services, telecoms, technology, automotive, energy, and digital businesses."}</p>
                <p className="person-bio">{"As SVP of Delivery & Operations at a global automation consultancy, he reshaped the operating model of the business, scaling it from 120 to 160+ staff while lifting gross margin by more than 10% and delivery efficiency by 20%. He built a global energy major's Automation Centre of Excellence, creating a $6M+ savings pipeline across multiple regions, led transformation at a global financial services firm that identified over $20M in operational benefits, and established automation and transformation capabilities at a major telecom operator and two global professional services firms."}</p>
                <p className="person-bio">{"He is the operator who takes a structural diagnosis and turns it into a working delivery cadence, staying inside the programme until benefits are realised, not just planned."}</p>
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
