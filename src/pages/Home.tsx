import { useEffect, useRef, useState } from 'react';
import './Home.css';
import SiteNav, { CONTACT_URL, type NavKey } from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import { PageCta, READY_CTA } from '../components/PageLayout';
import targetIcon from '../../assets/target.png';
import transformationIcon from '../../assets/transformation_icon.png';
import dataReportingIcon from '../../assets/data_and_reporting_icon.png';
import executionIcon from '../../assets/execution_icon.png';
import executionDiagram from '../../assets/execution_diagram.webp';
import dataReportingDiagram from '../../assets/data_and_reporting_diagram.webp';
import transformationDiagram from '../../assets/transformation_diagram.webp';

// Converted 1:1 from simplicytas_website_v5.html
// The patterns data below is copied verbatim from the original <script>.
const patterns = [
  {tag:'Does this sound familiar?',headline:'You have the data.<br><span class="teal">Nobody trusts it.</span>',situation_label:'What you are experiencing',situation:'You have the data. Your systems are running. Your team is filing reports. And when your investors ask a question, nobody can give them a number they would stake their reputation on.',cause_label:'What is actually happening',cause:'The data exists across systems, geographies, and asset classes, but it was never built into a single reporting layer anyone controls. Every entity captures things differently. By the time the numbers reach the top, reconciliation becomes a full-time job and trust in the output collapses.',trigger_label:'The moment it becomes urgent',trigger:'A lender asks for a portfolio report. A limited partner (LP) wants asset-level performance. A board meeting is in three weeks. And you realise you cannot produce a number you would defend in the room.',proof_label:'What happened',proof:'A global fund manager with $6B in acquired assets had no reporting layer their investors could rely on. Within the engagement, lender, investor, tax, and regulatory reporting was delivered accurately and on time, for the first time.',nothing_label:'If nothing changes',nothing:'The next reporting cycle looks the same as this one. Manual reconciliation. Last-minute fixes. Numbers that do not quite add up, and the question your investors are starting to ask gets harder to answer each time.'},
  {tag:'Does this sound familiar?',headline:'The platform exists.<br><span class="teal">The operation didn\'t follow.</span>',situation_label:'What you are experiencing',situation:'You moved into a new market, acquired the assets, and had investors expecting transparency from day one. The platform was not there. The processes were not there. And the pressure was immediate.',cause_label:'What is actually happening',cause:'The investment decision was made at the top, but the operational infrastructure, the systems, the reporting, the local processes were never built to match the pace of the acquisition. You are running an operation that cannot yet see itself clearly, and your stakeholders are already asking questions you cannot answer.',trigger_label:'The moment it becomes urgent',trigger:'Parent company or third-party investors demand visibility. You have the underlying assets. You do not have the layer that makes them legible. The gap between what you own and what you can report is now a credibility problem.',proof_label:'What happened',proof:'A distressed debt fund entered Japan and Korea with major acquired portfolios and almost no visibility over underlying data. Manual reporting meeting full stakeholder needs was delivered within three weeks. Processes were then embedded as business as usual with a high degree of automation.',nothing_label:'If nothing changes',nothing:'Investor confidence erodes before the operation has a chance to perform. The assets may be sound, but if you cannot show it, it does not matter. The window to demonstrate performance closes faster than the assets can prove themselves.'},
  {tag:'Does this sound familiar?',headline:'The programme is running.<br><span class="teal">Nothing has changed.</span>',situation_label:'What you are experiencing',situation:'The board approved it. The budget was allocated. The programme has been running for months. When someone asks what is actually different, in how the operation works, in what the numbers show, the answer is not convincing.',cause_label:'What is actually happening',cause:'Most transformation programmes deliver a framework and a training session. They hand over a playbook and move on. What they do not do is stay inside the operation long enough for the change to compound. Long enough for the team to run the new way of working under real conditions, with someone who can read when it is slipping.',trigger_label:'The moment it becomes urgent',trigger:'The board or a senior investor asks for a progress update. Activity is high. Outcomes are thin. The executive accountable for delivery is being asked to explain a gap they cannot clearly diagnose, and the programme budget is almost spent.',proof_label:'What happened',proof:'A major European investment bank needed Lean transformation across global equities middle and back office. Over 10% capacity reduction was delivered within six months. More than 500 staff were trained and the change was embedded. Not handed over.',nothing_label:'If nothing changes',nothing:'The programme completes on paper. The operation reverts to how it ran before. The investment gets written off as a change management failure. And the next programme starts from zero, with the same team, the same habits, and no explanation for why it did not work the first time.'}
];

// Which nav link to highlight for the section currently in view.
// How We Work (#s3) is part of Where It Breaks now, so it highlights that link.
const NAV_KEY_BY_SECTION: Record<string, NavKey> = {
  '#s1': 's1', '#s2': 's2', '#s3': 's2', '#home-cta': 's2',
};
// On Home, these nav links smooth-scroll to their in-page target
// (centered in the viewport) instead of doing a plain hash jump.
const NAV_SCROLL_TARGETS: Partial<Record<NavKey, string>> = {
  s2: 's2-inner',
};

// Results, case studies and the contact form used to live on Home. Old
// links to their anchors (in emails, bookmarks) forward to the new pages.
const MOVED_ANCHORS: Record<string, string> = {
  '#s4': '/results/', '#s4-inner': '/results/',
  '#s5': CONTACT_URL, '#contact-card': CONTACT_URL,
};

export default function Home() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [overlayIndex, setOverlayIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>('#s1');

  // Every section is min-height:100vh with its content top-aligned inside
  // (no vertical centering of its own), so on any screen taller than that
  // content - which is most desktop monitors - native #anchor scrolling
  // (block:'start', via scroll-padding-top) lands with the content pinned
  // under the nav and a dead gap below it before the next section peeks
  // in. On phones, that same top-alignment also landed inconsistently,
  // since iOS Safari's address bar resizes the viewport mid-scroll.
  // Centering the target fixes both - except plain block:'center' doesn't
  // know about the section it lives in: since the target usually isn't
  // flush with its section's own edges (the cards grid inside #s2 has a
  // heading above it), centering
  // it can land with the section's top OR bottom edge still inside the
  // viewport, exposing a sliver of the section before or after it.
  // Compute the scroll delta by hand instead, clamped so the enclosing
  // section always fills the viewport top-to-bottom whenever it's tall
  // enough to (only impossible if the section itself is shorter than the
  // viewport, in which case some sliver is unavoidable either way and we
  // fall back to plain centering).
  const centerOnElement = (el: Element, behavior: ScrollBehavior) => {
    const elRect = el.getBoundingClientRect();
    if (elRect.height > window.innerHeight) {
      // Taller than the viewport - centering would crop the same amount
      // off both ends and land mid-content with the heading scrolled
      // past. Top-align instead, same as the overlay back-button fix.
      el.scrollIntoView({ behavior, block: 'start' });
    } else {
      const navHeight = 68;
      const centeredDelta = elRect.top + elRect.height / 2 - window.innerHeight / 2;
      const section = el.closest('section');
      let delta = centeredDelta;
      if (section) {
        const sectionRect = section.getBoundingClientRect();
        const minDelta = sectionRect.top - navHeight; // don't reveal the section before this one
        const maxDelta = sectionRect.bottom - window.innerHeight; // don't reveal the section after it
        delta = minDelta <= maxDelta ? Math.min(Math.max(centeredDelta, minDelta), maxDelta) : centeredDelta;
      }
      window.scrollBy({ top: delta, behavior });
    }
  };
  const scrollToCentered = (targetId: string) => (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      centerOnElement(el, 'smooth');
      history.pushState(null, '', '#' + targetId);
    }
  };

  // Original script: openOverlay(i) / closeOverlay()
  const openOverlay = (i: number) => setOverlayIndex(i);
  const closeOverlay = () => setOverlayIndex(null);

  // Original: overlay.scrollTop = 0 on open
  useEffect(() => {
    if (overlayIndex !== null && overlayRef.current) overlayRef.current.scrollTop = 0;
  }, [overlayIndex]);

  // Original: Escape key closes the overlay
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeOverlay(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Original: IntersectionObserver toggles .active on nav links per visible section
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection('#' + e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.title = "Simplicytas | See What Others Miss";
  }, []);

  // centerOnElement's scroll offset is computed once, from the viewport
  // size and element positions at that instant. Browser zoom changes the
  // effective CSS-px viewport size and reflows every section under the
  // page's existing (unchanged) scroll position, so a section that was
  // centered before a zoom change no longer is after one - the
  // neighbouring section peeks in until the user clicks a nav link and
  // the centering math reruns. Recompute it ourselves on resize (which
  // fires for zoom too) instead of waiting for that click.
  //
  // stableSectionRef mirrors activeSection for the resize-correction below,
  // but freezes for the duration of a resize: the reflow a resize causes is
  // exactly what makes the IntersectionObserver above re-fire (a further
  // section can cross the 40% threshold purely from layout changing size
  // under an unmoved scroll position), and reading activeSection directly
  // during that window meant occasionally correcting to a section the user
  // was never actually on. Freezing it while resizing and resuming once
  // the corrected position has had a moment to settle keeps it accurate
  // the rest of the time, for both click and scroll navigation.
  const stableSectionRef = useRef(activeSection);
  const resizingRef = useRef(false);
  useEffect(() => {
    if (!resizingRef.current) stableSectionRef.current = activeSection;
  }, [activeSection]);

  const overlayIndexRef = useRef(overlayIndex);
  useEffect(() => { overlayIndexRef.current = overlayIndex; }, [overlayIndex]);

  useEffect(() => {
    const sectionTargets: Record<string, string> = {
      '#s2': 's2-inner',
      '#s3': 's3-inner',
    };
    let debounceId: number | undefined;
    let settleId: number | undefined;
    const onResize = () => {
      resizingRef.current = true;
      window.clearTimeout(settleId);
      window.clearTimeout(debounceId);
      debounceId = window.setTimeout(() => {
        if (overlayIndexRef.current === null) {
          const targetId = sectionTargets[stableSectionRef.current];
          if (targetId) { // #s1 needs no correction - it's simply the top of the page
            const el = document.getElementById(targetId);
            // 'auto' would defer to the global html{scroll-behavior:smooth}
            // rule and animate - which a later resize event (e.g. the next
            // step of a multi-stage zoom) can then interrupt mid-flight,
            // leaving the page stuck partway through the correction.
            // 'instant' forces a real, non-interruptible jump regardless.
            if (el) centerOnElement(el, 'instant');
          }
        }
        // Give the IntersectionObserver a moment to confirm the corrected
        // position before trusting its updates again.
        settleId = window.setTimeout(() => { resizingRef.current = false; }, 200);
      }, 150);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.clearTimeout(debounceId);
      window.clearTimeout(settleId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Cross-page links (e.g. /#s2-inner from other pages' nav) land here before
  // the browser's native hash-scroll fires, since the target doesn't exist in the
  // static HTML yet. Scroll to it manually once mounted, via the same
  // centerOnElement logic scrollToCentered above uses.
  useEffect(() => {
    const moved = MOVED_ANCHORS[window.location.hash];
    if (moved) {
      window.location.replace(moved);
      return;
    }
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) centerOnElement(el, 'auto');
    }
  }, []);

  return (
    <>
      {/* NAV */}
      <SiteNav
        active={NAV_KEY_BY_SECTION[activeSection]}
        onLinkClick={(key, e) => {
          const target = NAV_SCROLL_TARGETS[key];
          if (target) scrollToCentered(target)(e);
        }}
      />
      {/* OVERLAY */}
      <div className={`overlay${overlayIndex !== null ? ' open' : ''}`} id="overlay" ref={overlayRef}>
        <div className="ov-inner" id="ov-content">
          {overlayIndex !== null && (() => {
            const p = patterns[overlayIndex];
            return (
              <>
                <button className="ov-back" onClick={closeOverlay}>{"← Back"}</button>
                <div className="ov-tag">{p.tag}</div>
                <div className="ov-headline" dangerouslySetInnerHTML={{ __html: p.headline }} />
                <div className="ov-grid">
                  <div className="ov-block">
                    <div className="ov-block-label">{p.situation_label}</div>
                    <div className="ov-block-text">{p.situation}</div>
                  </div>
                  <div className="ov-block">
                    <div className="ov-block-label">{p.cause_label}</div>
                    <div className="ov-block-text">{p.cause}</div>
                  </div>
                </div>
                <div className="ov-trigger">
                  <div className="ov-trigger-label">{p.trigger_label}</div>
                  <div className="ov-trigger-text">{p.trigger}</div>
                </div>
                <div className="ov-proof">
                  <div className="ov-proof-label">{p.proof_label}</div>
                  <div className="ov-proof-text">{p.proof}</div>
                </div>
                <div className="ov-nothing">
                  <div className="ov-nothing-label">{p.nothing_label}</div>
                  <div className="ov-nothing-text">{p.nothing}</div>
                </div>
              </>
            );
          })()}
        </div>
      </div>
      {/* S1 HERO */}
      <section id="s1">
        <div className="hero-gl" />
        <div className="hero-pg" />
        <div className="hero-tg" />
        <div className="hero-main">
          <div className="hero-left">
            <div className="tension-block">
              <div className="tr">
                <div className="tl-row">
                  <span className="tl-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M7.5 12.3l2.8 2.8 6.2-6.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="tl">{"What's decided"}</span>
                </div>
                <div className="tc-dim">{"The budget's approved. The restructure's signed off. The programme is live."}</div>
              </div>
              <div className="tr">
                <div className="tl-row">
                  <span className="tl-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M2 12.5h3.4l1.8-6.5 3.8 13 2.6-9 1.7 2.5h5.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="tl">{"What's running"}</span>
                </div>
                <div className="tc-mid">
                  {"Head office and the ground floor "}
                  <span className="teal">{"aren't telling the same story."}</span>
                </div>
              </div>
              <div className="tr">
                <div className="tl-row">
                  <span className="tl-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M2.5 12S6 6 12 6s9.5 6 9.5 6-3.5 6-9.5 6S2.5 12 2.5 12z" stroke="currentColor" strokeWidth="1.4" />
                      <circle cx="12" cy="12" r="2.6" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="tl tc">{"What nobody sees"}</span>
                </div>
                <div className="tc-big">{"Why."}</div>
              </div>
            </div>
            <p className="bridge">
              {"It's not that you lack the data, the plan, or the programme."}
              <br />
              {"It's that nobody can see where it's actually breaking, until it's expensive."}
            </p>
            <div className="value-bullets">
              <div className="value-bullet">
                {"We step inside the operation to find where data, execution, and transformation are breaking. We fix it with operators who've run organisations at your scale, not consultants who've studied them."}
              </div>
            </div>
            <div className="tl-row" style={{ marginBottom: "8px" }}>
              <span className="tl-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7L7.4 16.6M16.6 7.4l2.1-2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <span className="stance-label" style={{ marginBottom: "0" }}>{"What we do"}</span>
            </div>
            <div className="stance-text">
              {"We see what others miss,"}
              <br />
              {"and "}
              <span className="teal">{"stay until it's fixed."}</span>
            </div>
            <div className="hero-cta-row">
              <a href="#s2-inner" className="btn-primary" onClick={scrollToCentered('s2-inner')}>
                {"See Where It Breaks "}
                <span className="btn-arrow">{"→"}</span>
              </a>
              <a href={CONTACT_URL} className="btn-secondary">
                {"Talk to Us "}
                <span className="btn-arrow">{"→"}</span>
              </a>
            </div>
          </div>
          <div className="contra-wrap">
            <div className="panel-label">{"Same root cause · Three ways it shows up"}</div>
            <div className="contra-card">
              <div className="card-header">
                <img className="ch-icon" src={targetIcon} alt="Target icon" />
                <div className="card-title">{"Where It's Actually Breaking"}</div>
              </div>
              <div className="pattern-list">
                <div className="pattern-row">
                  <div className="pattern-icon">
                    <img src={dataReportingIcon} alt="Data and reporting icon" />
                  </div>
                  <div className="pattern-text">
                    <div className="pattern-tag">{"Data & Reporting"}</div>
                    <div className="pattern-desc">{"The numbers don't reconcile. Nobody trusts the report enough to act on it."}</div>
                  </div>
                  <div className="pattern-flow pattern-flow-xl">
                    <img src={dataReportingDiagram} alt="Data and reporting flow diagram" />
                  </div>
                </div>
                <div className="pattern-row">
                  <div className="pattern-icon">
                    <img src={executionIcon} alt="Execution icon" />
                  </div>
                  <div className="pattern-text">
                    <div className="pattern-tag">{"Execution"}</div>
                    <div className="pattern-desc">{"HQ decided. The country office didn't follow. Margin leaks quietly."}</div>
                  </div>
                  <div className="pattern-flow pattern-flow-lg">
                    <img src={executionDiagram} alt="Execution flow diagram" />
                  </div>
                </div>
                <div className="pattern-row">
                  <div className="pattern-icon">
                    <img src={transformationIcon} alt="Transformation icon" />
                  </div>
                  <div className="pattern-text">
                    <div className="pattern-tag">{"Transformation"}</div>
                    <div className="pattern-desc">{"The programme ran. The board is asking why nothing changed."}</div>
                  </div>
                  <div className="pattern-flow pattern-flow-lg">
                    <img src={transformationDiagram} alt="Transformation flow diagram" />
                  </div>
                </div>
              </div>
              <div className="card-foot">
                <span className="cf-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="10" cy="10" r="6" />
                    <path d="M14.5 14.5l5 5" strokeLinecap="round" />
                  </svg>
                </span>
                <div className="foot-q">
                  <span className="foot-q-top">{"Different symptom."}</span>
                  <br />
                  <strong>{"Same structural gap."}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <div className="scroll-note">{"Scroll to explore"}</div>
        </div>
      </section>
      {/* S2 PATTERNS */}
      <section id="s2">
        <div className="s2-gl" />
        <div className="s2-inner" id="s2-inner">
          <div className="section-tag">{"Where it breaks"}</div>
          <div className="sh-dark">
            {"Three situations."}
            <br />
            <span>{"One common gap."}</span>
          </div>
          <div className="cards-grid">
            <div className="pcard" onClick={() => openOverlay(0)}>
              <div className="p-tag">{"Does this sound familiar?"}</div>
              <div className="p-headline">
                {"You have the data."}
                <br />
                <span className="teal">{"Nobody trusts it."}</span>
              </div>
              <div className="p-signals">
                <div className="p-signal">{"Lenders or investors asking questions you can't answer"}</div>
                <div className="p-signal">{"Reports that don't reconcile across entities"}</div>
                <div className="p-signal">{"Every entity captures data differently"}</div>
              </div>
              <div className="p-stat">
                <div className="p-stat-num">{"$6B"}</div>
                <div className="p-stat-label">{"in acquired assets. No reliable reporting layer."}</div>
              </div>
              <div className="p-cta">
                {"Read what happened "}
                <span className="p-cta-arrow">{"→"}</span>
              </div>
            </div>
            <div className="pcard" onClick={() => openOverlay(1)}>
              <div className="p-tag">{"Does this sound familiar?"}</div>
              <div className="p-headline">
                {"The platform exists."}
                <br />
                <span className="teal">{"The operation didn't follow."}</span>
              </div>
              <div className="p-signals">
                <div className="p-signal">{"Investment made, infrastructure not built to match"}</div>
                <div className="p-signal">{"Stakeholders expecting transparency with no layer to deliver it"}</div>
                <div className="p-signal">{"Assets on the books, operation can't see itself clearly"}</div>
              </div>
              <div className="p-stat">
                <div className="p-stat-num">{"3 weeks"}</div>
                <div className="p-stat-label">{"to first reliable stakeholder report. New market. No prior platform."}</div>
              </div>
              <div className="p-cta">
                {"Read what happened "}
                <span className="p-cta-arrow">{"→"}</span>
              </div>
            </div>
            <div className="pcard" onClick={() => openOverlay(2)}>
              <div className="p-tag">{"Does this sound familiar?"}</div>
              <div className="p-headline">
                {"The programme is running."}
                <br />
                <span className="teal">{"Nothing has changed."}</span>
              </div>
              <div className="p-signals">
                <div className="p-signal">{"Budget spent, activity high, outcomes thin"}</div>
                <div className="p-signal">{"Board asking why the investment hasn't produced visible change"}</div>
                <div className="p-signal">{"Playbook delivered. Team reverted to old behaviour."}</div>
              </div>
              <div className="p-stat">
                <div className="p-stat-num">{"10%+"}</div>
                <div className="p-stat-label">{"capacity reduction in 6 months. 500 staff trained. Change embedded, not handed over."}</div>
              </div>
              <div className="p-cta">
                {"Read what happened "}
                <span className="p-cta-arrow">{"→"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* S3 HOW WE WORK - part of "Where It Breaks" in the nav */}
      <section id="s3">
        <div className="s3-inner" id="s3-inner">
          <div>
            <div className="section-tag">{"How we work"}</div>
            <div className="sh-light">
              {"Three stages."}
              <br />
              <span>{"One commitment."}</span>
            </div>
            <div className="timeline">
              <div className="tl-item">
                <div className="tl-node" />
                <div className="tl-stage">
                  {"We "}
                  <span>{"go in."}</span>
                </div>
                <div className="tl-body">
                  {"We start where the problem is confirmed. Not where it is reported - into the data, the systems and the operation itself. Finding what is actually wrong, and why it keeps recurring even when leadership is aware of it."}
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-node" />
                <div className="tl-stage">
                  {"We "}
                  <span>{"stay in."}</span>
                </div>
                <div className="tl-body">
                  {"Most engagements end at delivery. Ours ends when the output is working. We stay inside the execution, reading the signals, managing what changes, making sure the team can explain every decision. That is what transfers judgment. Not a handover deck."}
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-node" />
                <div className="tl-stage">
                  {"We "}
                  <span>{"step back."}</span>
                </div>
                <div className="tl-body">
                  {"When the operation can see itself clearly and the team can run without us, we leave. Not before. The goal is always to make ourselves unnecessary, and to leave behind something the organisation owns permanently."}
                </div>
              </div>
            </div>
          </div>
          <div className="s3-right">
            <div className="diff-block">
              <div className="diff-label">{"What makes this different"}</div>
              <div className="diff-text">
                {"Every engagement draws on four products, Data360, Procure360, Portfolio360, and Governance360, each built on the same nine-module diagnostic sequence, from source data classification through to business case and roadmap. The products are the scaffold. What we bring is the judgment to know which findings matter, which numbers are telling the truth, and what to do about it first."}
              </div>
              <a className="case-cta" href="/how-we-help/" style={{ marginTop: "16px" }}>
                {"See the Intelligence360 Suite "}
                <span className="case-arrow">{"→"}</span>
              </a>
            </div>
            <div className="stat-row">
              <div className="stat-cell">
                <div className="stat-num">
                  {"9"}
                  <br />
                  <span>{"modules"}</span>
                </div>
                <div className="stat-label">{"Structured diagnostics from source data to business case"}</div>
              </div>
              <div className="stat-cell">
                <div className="stat-num">
                  {"30"}
                  <br />
                  <span>{"years"}</span>
                </div>
                <div className="stat-label">{"Of execution experience inside the problems we solve"}</div>
              </div>
              <div className="stat-cell">
                <div className="stat-num">
                  {"4"}
                  <br />
                  <span>{"regions"}</span>
                </div>
                <div className="stat-label">{"APAC · Europe · Americas · Middle East"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bottom banner, same as How We Help / Results / Insights */}
      <PageCta {...READY_CTA} id="home-cta" />
      <SiteFooter />
    </>
  );
}
