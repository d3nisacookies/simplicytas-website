// Insight articles shown on /insights.html and /insights/<slug>.html.
// Add a new article by appending an entry here and adding its HTML entry
// (insights/<slug>.html + vite.config.ts input). See AGENTS.md.

export type InsightBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] }
  /** parts alternate plain / highlighted text: [plain, highlight, plain, ...] */
  | { type: 'stat'; parts: string[]; cite: string }
  | { type: 'question'; question: string; sub: string };

export interface Insight {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  heroSub: string;
  milestones: { tag: string; title: string; body: string }[];
  milestoneSource: string;
  heroClose: string;
  body: InsightBlock[];
  closing: string;
  ctaLabel: string;
}

export const insights: Insight[] = [
  {
    "slug": "875-billion-comes-due-this-year",
    "title": "$875 Billion Comes Due This Year",
    "eyebrow": "Private Credit & Commercial Real Estate",
    "headline": "Every loan has a maturity date.",
    "headlineAccent": "The market doesn't negotiate with the calendar.",
    "heroSub": "Unlike most risks in finance, this one was scheduled years in advance.",
    "milestones": [
      {
        "tag": "2026",
        "title": "$875B matures this year",
        "body": "17% of the $5T in outstanding commercial and multifamily mortgages, down 9% from 2025's $957B."
      },
      {
        "tag": "Through 2027",
        "title": "$1.26T matures cumulatively",
        "body": "Most originated at 4.1 to 4.7%. Refinancing today lands closer to 6.5%."
      },
      {
        "tag": "By property type",
        "title": "Hotel and industrial lead",
        "body": "30% of hotel loans, 23% of industrial, 17% of office mature in 2026."
      }
    ],
    "milestoneSource": "Source: Mortgage Bankers Association, 2025 CRE Survey of Loan Maturity Volumes; Kidder Mathews, Nov 2025",
    "heroClose": "A dated event isn't a warning. It's a test with a fixed start time.",
    "closing": "$1.26 trillion doesn't clear on hope. It clears loan by loan, on data the lender trusts as much as you do.",
    "ctaLabel": "See where your book sits",
    "body": [
      {
        "type": "p",
        "text": "Every commercial real estate loan has a maturity date. Every maturity requires repayment, refinancing, or restructuring. That predictability is exactly why the CRE maturity wall is one of the most consequential triggers in private credit and real estate today."
      },
      {
        "type": "h2",
        "text": "Situation"
      },
      {
        "type": "p",
        "text": "Billions in commercial property financing was originated during the low rate era, when occupancy was higher, cap rates were tighter, and refinancing was routine. $875 billion of that debt matures in 2026 alone, with $1.26 trillion cumulative through 2027."
      },
      {
        "type": "h2",
        "text": "Complication"
      },
      {
        "type": "p",
        "text": "The mechanics are straightforward to describe and hard to solve for."
      },
      {
        "type": "list",
        "items": [
          "The original loan may have been sized at 65 to 75% loan to value against a valuation reached years ago. Today's lender underwrites against current conditions, not historical ones, and the gap between the old balance and the new loan amount becomes a funding problem the borrower has to solve.",
          "Office refinancing is under the most severe pressure of any property type. Industrial and multifamily hold up better but aren't exempt.",
          "Firms that built strategy in a favorable financing decade haven't all been tested by a real credit downturn, and haven't all built the asset level data to prove which loans in their book can clear."
        ]
      },
      {
        "type": "stat",
        "parts": [
          "Loans that refinanced successfully carried average debt yields of ",
          "13 to 14%",
          ". Loans that failed to refinance averaged closer to ",
          "9%",
          "."
        ],
        "cite": "Source: Trepp, Spring 2026 Quarterly Data Review"
      },
      {
        "type": "question",
        "question": "What happens when thousands of assets are refinanced based on today's market realities rather than yesterday's valuations?",
        "sub": "The gap isn't about property size or sector. It's about which side of the debt yield line your book sits on, and whether you know that before your lender tells you."
      },
      {
        "type": "h2",
        "text": "Answer"
      },
      {
        "type": "p",
        "text": "The maturity wall creates forced valuation discovery. Well capitalized lenders with strong asset level data can identify which loans are worth supporting before the refinancing conversation starts. Managers without that visibility find out at the table, not before it."
      }
    ]
  },
  {
    "slug": "6-9-billion-requested-4-9-billion-raised",
    "title": "$6.9 Billion Requested. $4.9 Billion Raised.",
    "eyebrow": "Private Credit & Real Estate",
    "headline": "For the first time on record.",
    "headlineAccent": "More came out than went in.",
    "heroSub": "Not a crisis call. A structural signal that valuations are about to get tested.",
    "milestones": [
      {
        "tag": "Q1 2026",
        "title": "Redemptions exceeded new fundraising",
        "body": "First time on record for non-listed BDCs. Gross sales down 46% quarter over quarter, 59% year over year."
      },
      {
        "tag": "Q1 2026",
        "title": "BCRED's cap raised to meet demand",
        "body": "Requests exceeded the standard 5% limit. The board upsized the offer to 7%, the maximum without changing terms."
      },
      {
        "tag": "Q1 to Q2 2026",
        "title": "Ares held its cap, twice",
        "body": "Requests rose from 11.6% to 14.4%. Both quarters, the fund held its 5% limit and fulfilled less than half."
      }
    ],
    "milestoneSource": "Source: Robert A. Stanger & Co., Q1 2026 Non-Listed BDC Report; Blackstone SEC Schedule TO-I/A, filed March 2, 2026; Ares Strategic Income Fund SEC Schedule TO-I/A exhibits, filed March 24 and June 25, 2026; Apollo Debt Solutions BDC Regulation FD disclosure and SEC filing, reported by Reuters, June 22, 2026",
    "heroClose": "A gate raised is not a gate broken. But it is a signal worth reading closely.",
    "closing": "$6.9 billion moved out faster than $4.9 billion moved in. That gap doesn't close itself. It closes on data someone can stand behind.",
    "ctaLabel": "See your valuation gap",
    "body": [
      {
        "type": "p",
        "text": "Non-traded BDCs offer investors periodic liquidity against fundamentally illiquid loan portfolios. In Q1 2026, that structure was tested directly. Redemption requests across publicly registered BDCs exceeded new capital raised for the first time on record."
      },
      {
        "type": "h2",
        "text": "Situation"
      },
      {
        "type": "p",
        "text": "Private credit is now a roughly $2 trillion market. Non-traded BDCs and evergreen real estate vehicles offer periodic liquidity despite holding fundamentally illiquid assets. That structure works when redemption requests stay modest, inside the standard 5% quarterly limit most funds carry."
      },
      {
        "type": "h2",
        "text": "Complication"
      },
      {
        "type": "p",
        "text": "The mechanics are straightforward to describe and hard to solve for."
      },
      {
        "type": "list",
        "items": [
          "BCRED, Blackstone's flagship $82 billion fund, received repurchase requests above its standard 5% limit. Its board upsized the offer to 7% and brought in $400 million alongside other investors to meet every request with certainty.",
          "Ares Strategic Income Fund took the opposite approach. Q1 requests came in at 11.6%. The fund held its 5% cap and fulfilled 43.1% on a pro-rata basis, $524.5 million out of what was asked.",
          "The pressure didn't ease. By Q2, ASIF's requests rose to 14.4%. The fund held the same 5% cap again and fulfilled 34.7%, its second consecutive quarter under pressure.",
          "Apollo Debt Solutions BDC saw the same pattern accelerate further. Requests rose from 11.2% in Q1 to 16.8% in Q2, its largest redemption event since launching in January 2022, roughly $2.4 billion against a 5% cap."
        ]
      },
      {
        "type": "stat",
        "parts": [
          "Non-listed BDC gross sales fell ",
          "46%",
          " quarter over quarter and ",
          "59%",
          " year over year in Q1 2026, the same quarter redemption requests first exceeded new fundraising."
        ],
        "cite": "Source: Robert A. Stanger & Co., Q1 2026 Non-Listed BDC Report"
      },
      {
        "type": "question",
        "question": "When redemption demand outpaces new capital for the first time, which managers can prove what their book is actually worth, and which are finding out at the same time their investors are?",
        "sub": "A cap raised protects the fund's ability to meet demand. It does not by itself answer what investors are actually asking: what is this worth if I had to sell it today?"
      },
      {
        "type": "h2",
        "text": "Answer"
      },
      {
        "type": "p",
        "text": "This is a structural test, not a solvency crisis. Three funds, the same pressure, different responses. One expanded to meet full demand. Two held their line and fulfilled a fraction, and for Apollo, the gap kept widening quarter over quarter. Neither approach is wrong on its face. What separates them is whether the manager can show, on request, exactly what that gap is worth and why the number holds."
      }
    ]
  },
  {
    "slug": "ilpa-voluntary-not-optional",
    "title": "Voluntary Doesn't Mean Optional",
    "eyebrow": "Private Markets",
    "headline": "Three ILPA milestones.",
    "headlineAccent": "A clearer road ahead.",
    "heroSub": "Not a regulatory mandate. But a very real market expectation.",
    "milestones": [
      {
        "tag": "Q1 2026",
        "title": "Updated Reporting Template (v2.0) is live",
        "body": "Replaces the 2016 version, for any fund still in its investment period or launched on or after January 1, 2026."
      },
      {
        "tag": "Q1 2027",
        "title": "First delivery of the Performance Template to LPs",
        "body": "Due after four full quarters of reporting from a January 1, 2026 start. This is the real countdown clock behind a year-end send."
      },
      {
        "tag": "Voluntary, not regulatory",
        "title": "There's no law forcing this.",
        "body": "But LPs are asking, and managers will need to have the answer ready."
      }
    ],
    "milestoneSource": "Source: ILPA.org, all three milestones",
    "heroClose": "Standards don't just change reports. They change conversations.",
    "closing": "The first live delivery to LPs lands Q1 2027. Whatever's being done manually today has one more quarter before it's tested for real. If you're not confident your firm could answer that question this quarter, that's worth a conversation.",
    "ctaLabel": "See your ILPA reporting gap",
    "body": [
      {
        "type": "p",
        "text": "ILPA didn't need a regulator to make its new reporting template matter. The updated template has been live since Q1 2026, for any fund still in its investment period. Nobody is required to adopt it. Most GPs are adopting it anyway, because the real audience was never a regulator. It's the LP sitting across the table."
      },
      {
        "type": "h2",
        "text": "Situation"
      },
      {
        "type": "p",
        "text": "Private markets have grown up. Institutional capital now moves through defined reporting expectations, not a founder's personal spreadsheet. ILPA's original 2016 template was the industry's first real attempt at describing what a correct quarterly report looks like. In 2026, ILPA replaced it with something more granular. That's already the standard funds are being measured against, whether or not they've formally adopted it."
      },
      {
        "type": "h2",
        "text": "Complication"
      },
      {
        "type": "p",
        "text": "The mechanics are simple to describe and hard to produce."
      },
      {
        "type": "list",
        "items": [
          "Fee reporting now itemizes offsets instead of netting them. Every fee line becomes a data-lineage question, not a rounding exercise.",
          "Firms running multiple portfolio systems now have to reconcile them to one shared definition, on demand, not once a year at close.",
          "The companion performance template's first live delivery to LPs is due Q1 2027. The prep window is this quarter, not \"eventually.\""
        ]
      },
      {
        "type": "stat",
        "parts": [
          "ILPA's own adoption survey found the gap plainly: ",
          "100%",
          " of LPs surveyed want the new performance template. Only ",
          "52%",
          " of GPs have committed to delivering it."
        ],
        "cite": "Source: ILPA.org, \"How We Got Here\""
      },
      {
        "type": "question",
        "question": "ILPA isn't mandatory. So why does it matter?",
        "sub": "The question isn't \"Do we have to comply?\" It is \"Can we produce the numbers when our LP asks?\""
      },
      {
        "type": "h2",
        "text": "Answer"
      },
      {
        "type": "p",
        "text": "The firms that can answer yes share one trait: a single, governed data layer sitting underneath every portfolio system, fee structure, and reporting definition, so the ILPA template becomes an output, not a quarterly reconstruction project."
      },
      {
        "type": "p",
        "text": "That's not a compliance gap. It's a reconciliation gap. ILPA just gave the industry a shared name for a problem that already existed."
      }
    ]
  },
  {
    "slug": "ownership-changes-overnight-one-view-takes-years",
    "title": "Ownership Changes Overnight. One View Takes Years.",
    "eyebrow": "Private Credit & Real Estate",
    "headline": "M&A deal volume up 46%.",
    "headlineAccent": "Integration timelines measured in years.",
    "heroSub": "The deal closes on a signature. The reporting perimeter doesn't.",
    "milestones": [
      {
        "tag": "H1 2025",
        "title": "Deal volume up 46%",
        "body": "Most active first half for investment and wealth management M&A in more than a decade."
      },
      {
        "tag": "Feb 2026",
        "title": "$2.5T combined, integration plan: later",
        "body": "Nuveen/Schroders creates a $414B private markets platform. Detailed integration plans won't exist until 12 to 18 months post close."
      },
      {
        "tag": "For now",
        "title": "Two systems, one investor base",
        "body": "Schroders confirmed to operate as a standalone business for at least 12 months after the deal closes."
      }
    ],
    "milestoneSource": "Source: Deloitte 2026 Investment Management Outlook; Nuveen/Schroders Scheme Document, filed 12 March 2026",
    "heroClose": "Ownership can change overnight. Establishing one defensible view across the combined business can take years.",
    "closing": "The deal announcement takes a day. The 12 to 18 month assessment period is real, and it's the exact window where the reporting gap either gets closed on purpose or discovered by accident.",
    "ctaLabel": "See your integration gap",
    "body": [
      {
        "type": "p",
        "text": "In private markets, acquisitions often look straightforward from the outside. A larger manager acquires a smaller manager. A platform expands. Combined assets under management increase. The real work starts after the deal closes."
      },
      {
        "type": "h2",
        "text": "Situation"
      },
      {
        "type": "p",
        "text": "Private credit and real estate continue to consolidate as firms chase scale, broader distribution, and expanded products. Deal volume in the sector reflects it: the most active first half for investment and wealth management M&A in over a decade."
      },
      {
        "type": "h2",
        "text": "Complication"
      },
      {
        "type": "p",
        "text": "The mechanics are straightforward to describe and hard to solve for."
      },
      {
        "type": "list",
        "items": [
          "Ownership can change overnight. A signed deal, a closing date, a new combined AUM figure, all of it is fast. Establishing one defensible view across the combined business is not.",
          "Nuveen's own scheme document for its acquisition of Schroders states plainly that detailed integration plans don't exist yet. They will be developed over a 12 to 18 month assessment period after the deal closes.",
          "During that window, and for at least 12 months after closing, Schroders is expected to continue operating as a standalone business. Two systems, two reporting stacks, one investor base being asked to trust both.",
          "The same pattern shows up closer to home. Barings' acquisition of Artemis Real Estate Partners closed over a year ago. Both firms still operate under distinct branding, a live signal that combining ownership and combining systems are not the same event."
        ]
      },
      {
        "type": "stat",
        "parts": [
          "\"Nuveen and Bidco have not yet developed detailed integration plans for the Combined Group... It is expected that during this period, and for at least ",
          "12 months",
          " following the Effective Date, the Schroders Group will continue to operate as a standalone business.\""
        ],
        "cite": "Source: Nuveen/Schroders Scheme Document, filed 12 March 2026"
      },
      {
        "type": "question",
        "question": "Can the combined organization show investors, boards, and regulators one version of the truth before the standalone period runs out and the questions start?",
        "sub": "M&A doesn't always require immediate systems consolidation. Firms are often right to preserve separate brands and teams through a transition. The problem is showing one trusted view while those separate environments keep operating."
      },
      {
        "type": "h2",
        "text": "Answer"
      },
      {
        "type": "p",
        "text": "M&A doesn't always require immediate systems consolidation, and firms are often right to preserve separate brands and teams through a transition. The problem isn't the separation. It's that leadership still needs one trusted, portfolio wide view while those separate environments keep operating in parallel, and most firms don't build that view until the questions from a board or an investor force it."
      }
    ]
  }
];

export const insightUrl = (slug: string) => `/insights/${slug}.html`;
