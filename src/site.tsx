import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

export type Screen = 'home' | 'products' | 'about' | 'terms' | 'privacy' | 'cookies';

export type Pattern = {
  tag: string;
  title: string;
  accent: string;
  signals: string[];
  stat: string;
  statLabel: string;
  situationLabel: string;
  situation: string;
  causeLabel: string;
  cause: string;
  triggerLabel: string;
  trigger: string;
  proofLabel: string;
  proof: string;
  nothingLabel: string;
  nothing: string;
};

export type Product = {
  name: string;
  tagline: string;
  body: string;
};

export type TeamMember = {
  initials: string;
  name: string;
  role: string;
  location: string;
  bio: string;
  when: string;
};

export const COLORS = {
  navy: '#2D2B55',
  navyAlt: '#352F6A',
  teal: '#3AB6B3',
  tealLight: '#4FC5C2',
  lavender: '#EEE9F8',
  lavenderLight: '#EDE8F5',
  lavenderMid: '#D8D0EE',
  paleBlue: '#E4EDF8',
  tealBg: '#E8F6F7',
  white: '#FFFFFF',
  red: '#E05050',
  textMuted: 'rgba(45,43,85,0.82)',
  textDim: 'rgba(45,43,85,0.68)',
};

export const patterns: Pattern[] = [
  {
    tag: 'Does this sound familiar?',
    title: 'You have the data.',
    accent: 'Nobody trusts it.',
    signals: [
      'Lenders or investors asking questions you cannot answer.',
      'Reports that do not reconcile across entities.',
      'Every entity captures data differently.',
    ],
    stat: '$6B',
    statLabel: 'in acquired assets. No reliable reporting layer.',
    situationLabel: 'What you are experiencing',
    situation:
      'You have the data. Your systems are running. Your team is filing reports. And when your investors ask a question, nobody can give them a number they would stake their reputation on.',
    causeLabel: 'What is actually happening',
    cause:
      'The data exists across systems, geographies, and asset classes. But it was never built into a single reporting layer anyone controls. Every entity captures things differently. By the time the numbers reach the top, reconciliation becomes a full-time job and trust in the output collapses.',
    triggerLabel: 'The moment it becomes urgent',
    trigger:
      'A lender asks for a portfolio report. A limited partner wants asset-level performance. A board meeting is in three weeks. And you realise you cannot produce a number you would defend in the room.',
    proofLabel: 'What happened',
    proof:
      'A global fund manager with $6B in acquired assets had no reporting layer their investors could rely on. Within the engagement, lender, investor, tax, and regulatory reporting was delivered accurately and on time, for the first time.',
    nothingLabel: 'If nothing changes',
    nothing:
      'The next reporting cycle looks the same as this one. Manual reconciliation. Last-minute fixes. Numbers that do not quite add up. And the question your investors are starting to ask gets harder to answer each time.',
  },
  {
    tag: 'Does this sound familiar?',
    title: 'The platform exists.',
    accent: "The operation didn't follow.",
    signals: [
      'Investment made, infrastructure not built to match.',
      'Stakeholders expecting transparency with no layer to deliver it.',
      'Assets on the books, operation cannot see itself clearly.',
    ],
    stat: '3 weeks',
    statLabel: 'to first reliable stakeholder report. New market. No prior platform.',
    situationLabel: 'What you are experiencing',
    situation:
      'You moved into a new market, acquired the assets, and had investors expecting transparency from day one. The platform was not there. The processes were not there. And the pressure was immediate.',
    causeLabel: 'What is actually happening',
    cause:
      'The investment decision was made at the top. But the operational infrastructure, the systems, the reporting, the local processes, was never built to match the pace of the acquisition. You are running an operation that cannot yet see itself clearly, and your stakeholders are already asking questions you cannot answer.',
    triggerLabel: 'The moment it becomes urgent',
    trigger:
      'Parent company or third-party investors demand visibility. You have the underlying assets. You do not have the layer that makes them legible. The gap between what you own and what you can report is now a credibility problem.',
    proofLabel: 'What happened',
    proof:
      'A distressed debt fund entered Japan and Korea with major acquired portfolios and almost no visibility over underlying data. Manual reporting meeting full stakeholder needs was delivered within three weeks. Processes were then embedded as business as usual with a high degree of automation.',
    nothingLabel: 'If nothing changes',
    nothing:
      'Investor confidence erodes before the operation has a chance to perform. The assets may be sound. But if you cannot show it, it does not matter, and the window to demonstrate performance closes faster than the assets can prove themselves.',
  },
  {
    tag: 'Does this sound familiar?',
    title: 'The programme runs.',
    accent: 'Nothing changes.',
    signals: [
      'Budget spent, activity high, outcomes thin.',
      'Board asking why the investment has not produced visible change.',
      'Playbook delivered. Team reverted to old behaviour.',
    ],
    stat: '10%+',
    statLabel: 'capacity reduction in 6 months. 500 staff trained. Change embedded, not handed over.',
    situationLabel: 'What you are experiencing',
    situation:
      'The board approved it. The budget was allocated. The programme has been running for months. And when someone asks what is actually different, in how the operation works, in what the numbers show, the answer is not convincing.',
    causeLabel: 'What is actually happening',
    cause:
      'Most transformation programmes deliver a framework and a training session. They hand over a playbook and move on. What they do not do is stay inside the operation long enough for the change to compound.',
    triggerLabel: 'The moment it becomes urgent',
    trigger:
      'The board or a senior investor asks for a progress update. Activity is high. Outcomes are thin. The executive accountable for delivery is being asked to explain a gap they cannot clearly diagnose, and the programme budget is almost spent.',
    proofLabel: 'What happened',
    proof:
      'A major European investment bank needed Lean transformation across global equities middle and back office. Over 10% capacity reduction was delivered within six months. More than 500 staff were trained and the change was embedded. Not handed over.',
    nothingLabel: 'If nothing changes',
    nothing:
      'The programme completes on paper. The operation reverts to how it ran before. The investment gets written off as a change management failure. And the next programme starts from zero, with the same team, the same habits, and no explanation for why it did not work the first time.',
  },
];

export const products: Product[] = [
  {
    name: 'Procurement360',
    tagline: 'Turns procurement into a source of value, not a cost centre to manage.',
    body: 'Procurement360 sharpens supplier performance, sourcing effectiveness, contract compliance, and spend visibility, then uses that visibility to surface savings other teams miss. For the CFO, that means clean, defensible numbers on where cash is going. For the COO, shorter procurement cycles and suppliers held to account instead of managed on trust.',
  },
  {
    name: 'Data360',
    tagline: 'Replaces fragmented, siloed data with one version of the truth the business can act on.',
    body: 'Data360 brings ingestion, validation, lineage, governance, analytics, and reporting into a single system, so the numbers reconcile before they reach the top. For the CFO, board and investor reporting that does not need reconciling twice. For the CEO, one number everyone in the room already agrees on.',
  },
  {
    name: 'Portfolio Management360',
    tagline: 'Gives AI and transformation portfolios the visibility capital allocation decisions actually need.',
    body: 'Portfolio Management360 tracks priorities, resources, dependencies, risk, cost, and benefit across every initiative in the portfolio. For the CFO, a clear line from spend to return across every AI and transformation bet. For the CEO, the ability to redirect scarce resources before a stalled programme becomes a write-off.',
  },
  {
    name: 'Governance360',
    tagline: 'Builds trust, control, and accountability into how AI gets used, not around it.',
    body: 'Governance360 embeds risk management, compliance, and decision controls directly into day-to-day AI operations, with the transparency and audit trail to prove it. For the COO, fewer surprises inside live operations. For the board, confidence to approve the next initiative without re-litigating the last one.',
  },
];

export const team: TeamMember[] = [
  {
    initials: 'JC',
    name: 'John Culleton',
    role: 'CEO, Global Head of Strategy',
    location: 'Singapore · APAC and global delivery',
    bio: "John has spent more than 30 years leading transformation, operational excellence, and performance improvement inside some of the world's largest consulting, banking, and professional services organisations. At Simplicytas, every engagement starts with him and every major decision passes through him.",
    when: 'Present on every engagement, from first diagnostic through to final handover.',
  },
  {
    initials: 'JJ',
    name: 'Jim Jones',
    role: 'Senior Advisor, CRE',
    location: 'US · EMEA · APAC',
    bio: 'Jim spent over 25 years across a top-tier global investment bank and a leading commercial real estate advisory firm, managing more than $5B in commercial real estate transactions and overseeing fund platforms with $15B+ in NAV.',
    when: 'Engaged on CRE fund, asset management, and investor reporting mandates.',
  },
  {
    initials: 'IJ',
    name: 'Ian Jackson',
    role: 'Senior Advisor, Finance',
    location: 'Europe · Middle East · Asia · Americas',
    bio: 'Ian is an internationally experienced CFO and finance transformation leader who has delivered financial performance, growth, and operational turnaround across multiple regions. He brings direct CFO-seat credibility to engagements where cash flow, reporting, and financial outcomes matter most.',
    when: 'Engaged on mandates where financial outcomes, cash flow, and CFO-level credibility are central to the buying decision.',
  },
  {
    initials: 'RS',
    name: 'René Schuster',
    role: 'Senior Advisor, Emerging Technology',
    location: 'Europe · North America',
    bio: "René has spent more than 25 years leading some of the world's most recognised organisations and later completed a PhD in Artificial Intelligence. He bridges board-level operating experience with a practical view of what AI can and cannot do inside a real operation.",
    when: 'Engaged when the entry point is CEO, Regional President, or board level.',
  },
  {
    initials: 'DM',
    name: 'Danny Maylin',
    role: 'Head of Program Delivery',
    location: 'Global programme execution',
    bio: 'Danny has spent over 20 years turning strategy into sustained execution across financial services, telecoms, technology, automotive, energy, and digital businesses. He is the operator who takes a structural diagnosis and turns it into a working delivery cadence.',
    when: 'Engaged to lead programme delivery and embed operating discipline once the diagnostic is agreed.',
  },
];

export const results = [
  {
    sector: 'Commercial Real Estate · Americas',
    title: '$6B in acquired assets. No reporting layer anyone trusted.',
    before:
      'Fragmented data across systems and geographies. Unable to report to lenders or investors. No visibility over day-to-day operations.',
    after:
      'End-to-end reporting built from scratch. Lender, investor, tax, and regulatory reporting delivered accurately and on time, for the first time. Manual remediation fully automated.',
    stat: '$6B',
    label: 'in assets. First reliable reporting layer delivered within the engagement.',
  },
  {
    sector: 'Technology · APAC',
    title: 'Finance teams scattered across eight countries. No shared model, rising costs.',
    before:
      'Dispersed finance teams across eight APAC countries, each running inconsistent processes. Regulatory complexity across five markets. Costs climbing with no scalable structure to support growth.',
    after:
      'In-house finance shared service centres built in Malaysia and China. Restructuring executed with full change management across all eight countries. Standardised processes, stronger talent retention, and a model built to scale.',
    stat: '25%',
    label: 'reduction in transactional accounting costs. Shared service centres built across Malaysia and China.',
  },
  {
    sector: 'Financial Services · Europe',
    title: 'Lean programme approved. Global operations. Change not happening.',
    before:
      'Major European investment bank needed transformation across global equities middle and back office. London, New York, and India. Tangible results needed fast.',
    after:
      '10%+ capacity reduction in six months. 500+ staff trained globally. Lean mindset embedded. Not handed over. Long-term operational resilience established across all three locations.',
    stat: '10%+',
    label: 'capacity reduction in 6 months. 500 staff trained. Change embedded, not handed over.',
  },
];

export const aboutStats = [
  { value: '$5B', label: 'In real estate transactions managed' },
  { value: '223→65', label: 'Debtor days reduced, in 12 months' },
  { value: '$20M+', label: 'In efficiency gains, single engagement' },
  { value: '4', label: 'Regions: APAC · Europe · Americas · Middle East' },
];

export const termsUpdated = 'Updated: 1 September 2024';
export const privacyUpdated = 'Updated: 1 September 2024';
export const cookiesUpdated = 'Updated: 1 September 2024';

export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 44 44">
      <Rect width="44" height="44" rx="10" fill={COLORS.navy} />
      <Path d="M7 22C10.1 16.8 15.5 13.5 22 13.5C28.5 13.5 33.9 16.8 37 22C33.9 27.2 28.5 30.5 22 30.5C15.5 30.5 10.1 27.2 7 22Z" stroke={COLORS.teal} strokeWidth="2" fill="none" />
      <Circle cx="22" cy="22" r="5.2" fill={COLORS.teal} />
      <Circle cx="23.6" cy="20.6" r="1.35" fill={COLORS.white} />
    </Svg>
  );
}

export function NavButton({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={[styles.navButton, active && styles.navButtonActive]}>
      <Text style={[styles.navButtonText, active && styles.navButtonTextActive]}>{label}</Text>
    </Pressable>
  );
}

export function SectionTag({ children, color = COLORS.teal }: { children: string; color?: string }) {
  return <Text style={[styles.sectionTag, { color }]}>{children}</Text>;
}

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.navy },
  appShell: { flex: 1, backgroundColor: COLORS.lavenderLight },
  headerWrap: { backgroundColor: COLORS.navy, borderBottomWidth: 1, borderBottomColor: 'rgba(73,172,181,0.14)' },
  header: { minHeight: 72, paddingHorizontal: 20, paddingVertical: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 16 },
  headerCompact: { alignItems: 'flex-start', flexDirection: 'column' },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  brandName: { color: COLORS.white, fontSize: 16, fontWeight: '800', letterSpacing: 2.4 },
  brandTag: { color: COLORS.teal, fontSize: 10, textTransform: 'uppercase', letterSpacing: 1.6 },
  navRow: { gap: 8, alignItems: 'center' },
  navButton: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 8, borderWidth: 1, borderColor: 'transparent' },
  navButtonActive: { backgroundColor: 'rgba(73,172,181,0.08)', borderColor: 'rgba(73,172,181,0.28)' },
  navButtonText: { color: COLORS.white, fontSize: 13, fontWeight: '600' },
  navButtonTextActive: { color: COLORS.teal },
  screen: { flex: 1 },
  scrollContent: { paddingBottom: 0 },
  heroSection: { backgroundColor: COLORS.navy, paddingHorizontal: 20, paddingTop: 28, paddingBottom: 36, position: 'relative', overflow: 'hidden' },
  gridOverlay: { ...StyleSheet.absoluteFill, backgroundColor: 'transparent', opacity: 0.18 },
  heroInner: { maxWidth: 1180, width: '100%', alignSelf: 'center', flexDirection: 'row', gap: 24 },
  heroInnerCompact: { flexDirection: 'column' },
  heroLeft: { flex: 1 },
  heroBlock: { marginBottom: 28 },
  heroRow: { paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: 'rgba(73,172,181,0.12)' },
  heroRowLast: { paddingTop: 18 },
  heroLabel: { color: COLORS.white, fontSize: 10, letterSpacing: 2.8, textTransform: 'uppercase', marginBottom: 8 },
  heroLabelTeal: { color: COLORS.teal, fontSize: 10, letterSpacing: 2.8, textTransform: 'uppercase', marginBottom: 8 },
  heroSmall: { color: COLORS.white, fontSize: 24, lineHeight: 30, fontWeight: '500' },
  heroMid: { color: COLORS.white, fontSize: 34, lineHeight: 40, fontWeight: '700' },
  heroBig: { color: COLORS.white, fontSize: 72, lineHeight: 74, fontWeight: '800', letterSpacing: -2 },
  tealText: { color: COLORS.teal },
  bridge: { color: COLORS.white, fontSize: 15, lineHeight: 25, fontStyle: 'italic', paddingLeft: 16, borderLeftWidth: 2, borderLeftColor: 'rgba(73,172,181,0.3)', marginBottom: 20, maxWidth: 640 },
  heroBullet: { color: 'rgba(255,255,255,0.9)', fontSize: 14, lineHeight: 23, marginBottom: 20, maxWidth: 620 },
  stanceLabel: { color: COLORS.white, fontSize: 10, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 6 },
  stanceText: { color: COLORS.white, fontSize: 28, lineHeight: 35, fontWeight: '700', maxWidth: 580 },
  ctaRow: { flexDirection: 'row', gap: 12, marginTop: 26 },
  ctaRowCompact: { flexDirection: 'column' },
  primaryButton: { backgroundColor: COLORS.teal, paddingHorizontal: 20, paddingVertical: 14, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  primaryButtonText: { color: COLORS.navy, fontSize: 14, fontWeight: '800', letterSpacing: 0.4 },
  secondaryButton: { borderColor: 'rgba(73,172,181,0.4)', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 14, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  secondaryButtonText: { color: COLORS.white, fontSize: 14, fontWeight: '800', letterSpacing: 0.4 },
  patternPanel: { width: '100%', maxWidth: 430, alignSelf: 'center' },
  panelLabel: { color: COLORS.white, fontSize: 10, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 12, textAlign: 'center' },
  patternPanelCard: { backgroundColor: 'rgba(45,43,85,0.95)', borderWidth: 1, borderColor: 'rgba(73,172,181,0.25)', borderRadius: 14, paddingVertical: 14, paddingHorizontal: 18 },
  patternPanelTitle: { color: COLORS.white, fontSize: 12, textTransform: 'uppercase', letterSpacing: 2, fontWeight: '700', marginBottom: 12 },
  patternPanelRow: { flexDirection: 'row', gap: 14, paddingVertical: 16, borderTopWidth: 1, borderTopColor: 'rgba(73,172,181,0.1)' },
  patternIconWrap: { width: 44, height: 44, borderRadius: 10, borderWidth: 1, borderColor: 'rgba(73,172,181,0.3)', backgroundColor: 'rgba(73,172,181,0.06)', alignItems: 'center', justifyContent: 'center' },
  patternIconText: { color: COLORS.teal, fontSize: 18 },
  patternPanelTextWrap: { flex: 1 },
  patternPanelTag: { color: COLORS.teal, fontSize: 12, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1.4, marginBottom: 5 },
  patternPanelDesc: { color: COLORS.white, fontSize: 13, lineHeight: 20 },
  panelFoot: { color: COLORS.white, fontSize: 12, lineHeight: 18, fontStyle: 'italic', paddingTop: 14, borderTopWidth: 1, borderTopColor: 'rgba(73,172,181,0.12)' },
  darkSectionAlt: { backgroundColor: COLORS.navyAlt, paddingHorizontal: 20, paddingVertical: 60 },
  sectionInner: { maxWidth: 1180, width: '100%', alignSelf: 'center' },
  sectionTag: { fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', fontWeight: '600', marginBottom: 12 },
  sectionHeadlineDark: { color: COLORS.white, fontSize: 38, lineHeight: 44, fontWeight: '700', marginBottom: 32 },
  cardGrid: { flexDirection: 'row', gap: 16 },
  cardGridCompact: { flexDirection: 'column' },
  patternCard: { flex: 1, backgroundColor: 'rgba(255,255,255,0.04)', borderWidth: 1, borderColor: 'rgba(73,172,181,0.15)', borderRadius: 14, padding: 24, minHeight: 320 },
  patternCardCompact: { minHeight: 0 },
  cardEyebrow: { color: COLORS.white, fontSize: 11, fontStyle: 'italic', marginBottom: 16 },
  patternTitle: { color: COLORS.white, fontSize: 28, lineHeight: 32, fontWeight: '700', marginBottom: 18 },
  signalRow: { flexDirection: 'row', gap: 10, marginBottom: 10 },
  signalDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: COLORS.teal, marginTop: 7 },
  signalText: { color: COLORS.white, fontSize: 13, lineHeight: 20, flex: 1 },
  patternStatWrap: { marginTop: 'auto', paddingTop: 18, borderTopWidth: 1, borderTopColor: 'rgba(73,172,181,0.15)' },
  patternStat: { color: COLORS.white, fontSize: 22, lineHeight: 24, fontWeight: '700' },
  patternStatLabel: { color: COLORS.white, fontSize: 11, lineHeight: 16, marginTop: 6 },
  linkish: { color: COLORS.teal, fontSize: 12, fontWeight: '600', marginTop: 14 },
  lightSection: { backgroundColor: COLORS.lavenderLight, paddingHorizontal: 20, paddingVertical: 60 },
  twoColumnWrap: { flexDirection: 'row', gap: 56 },
  oneColumnWrap: { flexDirection: 'column' },
  columnLeft: { flex: 1 },
  columnRight: { flex: 1 },
  sectionHeadlineLight: { color: COLORS.navy, fontSize: 38, lineHeight: 44, fontWeight: '700', marginBottom: 30 },
  timelineItem: { flexDirection: 'row', gap: 14, marginBottom: 28 },
  timelineDotWrap: { width: 22, alignItems: 'center' },
  timelineDot: { width: 18, height: 18, borderRadius: 9, borderWidth: 2, borderColor: COLORS.teal, backgroundColor: COLORS.lavenderLight },
  timelineLine: { width: 1, flex: 1, backgroundColor: 'rgba(73,172,181,0.25)', marginTop: 4 },
  timelineBodyWrap: { flex: 1, paddingBottom: 4 },
  timelineTitle: { color: COLORS.navy, fontSize: 24, lineHeight: 28, fontWeight: '700', marginBottom: 8 },
  timelineBody: { color: COLORS.textMuted, fontSize: 13, lineHeight: 22 },
  diffBlock: { backgroundColor: COLORS.white, borderLeftWidth: 3, borderLeftColor: COLORS.teal, borderRadius: 10, borderWidth: 1, borderColor: COLORS.lavenderMid, padding: 24, marginTop: 52 },
  diffLabel: { color: COLORS.textDim, fontSize: 10, textTransform: 'uppercase', letterSpacing: 2.4, marginBottom: 10 },
  diffText: { color: COLORS.textMuted, fontSize: 13, lineHeight: 22 },
  inlineLink: { color: COLORS.navy, fontSize: 13, fontWeight: '600', marginTop: 16 },
  statRow: { flexDirection: 'row', gap: 10, marginTop: 18 },
  statRowCompact: { flexWrap: 'wrap' },
  miniStatCard: { flex: 1, minWidth: 150, backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.lavenderMid, borderRadius: 10, padding: 16 },
  miniStatNum: { color: COLORS.navy, fontSize: 28, lineHeight: 30, fontWeight: '700', marginBottom: 4 },
  miniStatLabel: { color: COLORS.textDim, fontSize: 11, lineHeight: 16 },
  resultsSection: { backgroundColor: COLORS.paleBlue, paddingHorizontal: 20, paddingVertical: 60 },
  resultsIntro: { color: COLORS.textMuted, fontSize: 14, lineHeight: 22, maxWidth: 580, marginBottom: 32 },
  resultCard: { backgroundColor: COLORS.white, borderRadius: 12, borderWidth: 1, borderColor: COLORS.lavenderMid, overflow: 'hidden', flexDirection: 'row', marginBottom: 14 },
  resultCardCompact: { flexDirection: 'column' },
  resultLeft: { width: 240, backgroundColor: COLORS.lavenderLight, borderRightWidth: 1, borderRightColor: COLORS.lavenderMid, padding: 22 },
  resultSector: { color: COLORS.teal, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 },
  resultTitle: { color: COLORS.navy, fontSize: 15, lineHeight: 20, fontWeight: '700' },
  resultMid: { flex: 1, padding: 22, justifyContent: 'center' },
  resultBefore: { color: COLORS.textDim, fontSize: 12, lineHeight: 19, fontStyle: 'italic' },
  resultArrow: { color: COLORS.lavenderMid, fontSize: 18, marginVertical: 10 },
  resultAfter: { color: COLORS.textMuted, fontSize: 13, lineHeight: 21 },
  resultRight: { width: 190, backgroundColor: COLORS.lavenderLight, borderLeftWidth: 1, borderLeftColor: COLORS.lavenderMid, padding: 22, alignItems: 'center', justifyContent: 'center' },
  resultStat: { color: COLORS.navy, fontSize: 34, lineHeight: 36, fontWeight: '700', marginBottom: 6, textAlign: 'center' },
  resultStatLabel: { color: COLORS.textDim, fontSize: 11, lineHeight: 16, textAlign: 'center' },
  caseStudyBlock: { marginTop: 28 },
  caseLabel: { color: COLORS.navy, fontSize: 10, textTransform: 'uppercase', letterSpacing: 2.4, marginBottom: 8 },
  caseNumber: { color: COLORS.navy, fontSize: 38, lineHeight: 42, fontWeight: '700', marginBottom: 6 },
  caseBody: { color: COLORS.textMuted, fontSize: 13, lineHeight: 21, maxWidth: 580 },
  contactSection: { backgroundColor: COLORS.navy, paddingHorizontal: 20, paddingTop: 60, paddingBottom: 36, position: 'relative', overflow: 'hidden' },
  contactWrap: { flexDirection: 'row', gap: 42 },
  contactCopy: { flex: 1 },
  contactHeadline: { color: COLORS.white, fontSize: 44, lineHeight: 48, fontWeight: '700', marginBottom: 18, maxWidth: 520 },
  contactBody: { color: COLORS.white, fontSize: 14, lineHeight: 23, maxWidth: 430, marginBottom: 18 },
  contactBulletRow: { flexDirection: 'row', gap: 12, marginBottom: 12, maxWidth: 420 },
  contactCheck: { width: 18, height: 18, borderRadius: 9, borderWidth: 1, borderColor: 'rgba(73,172,181,0.4)', backgroundColor: 'rgba(73,172,181,0.1)', marginTop: 2 },
  contactBulletText: { color: COLORS.white, fontSize: 13, lineHeight: 21, flex: 1 },
  contactCard: { flex: 1, backgroundColor: 'rgba(45,43,85,0.42)', borderRadius: 14, borderWidth: 1, borderColor: 'rgba(73,172,181,0.2)', padding: 24, minWidth: 320 },
  contactCardTitle: { color: COLORS.white, fontSize: 22, lineHeight: 26, fontWeight: '700', marginBottom: 4 },
  contactCardSubtitle: { color: COLORS.white, fontSize: 12, letterSpacing: 0.5, marginBottom: 18 },
  contactInput: { backgroundColor: 'rgba(255,255,255,0.05)', borderWidth: 1, borderColor: 'rgba(73,172,181,0.2)', borderRadius: 8, color: COLORS.white, paddingHorizontal: 14, paddingVertical: 12, fontSize: 13, marginBottom: 10 },
  contactInputArea: { backgroundColor: 'rgba(255,255,255,0.05)', borderWidth: 1, borderColor: 'rgba(73,172,181,0.2)', borderRadius: 8, color: COLORS.white, paddingHorizontal: 14, paddingVertical: 12, fontSize: 13, minHeight: 110, marginBottom: 12 },
  submitButton: { backgroundColor: COLORS.teal, borderRadius: 8, paddingVertical: 14, alignItems: 'center', marginBottom: 10 },
  submitButtonText: { color: COLORS.navy, fontSize: 14, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 1 },
  contactNote: { color: COLORS.white, fontSize: 11, lineHeight: 17 },
  footer: { maxWidth: 1180, width: '100%', alignSelf: 'center', marginTop: 32, paddingTop: 18, borderTopWidth: 1, borderTopColor: 'rgba(73,172,181,0.1)', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  footerCompact: { flexDirection: 'column', alignItems: 'flex-start', gap: 12 },
  footerBrand: { color: COLORS.white, fontSize: 12, textTransform: 'uppercase', letterSpacing: 2 },
  footerLinks: { flexDirection: 'row', gap: 18 },
  footerLinksCompact: { flexDirection: 'column', gap: 8 },
  footerLink: { color: COLORS.white, fontSize: 11 },
  pageHero: { backgroundColor: COLORS.navy, paddingHorizontal: 20, paddingVertical: 58, position: 'relative', overflow: 'hidden' },
  pageHeroInner: { maxWidth: 860, width: '100%', alignSelf: 'center' },
  pageHeadline: { color: COLORS.white, fontSize: 52, lineHeight: 58, fontWeight: '700', marginBottom: 16 },
  pageSubhead: { color: 'rgba(255,255,255,0.9)', fontSize: 15, lineHeight: 24, maxWidth: 560 },
  pageBody: { backgroundColor: COLORS.lavender, paddingHorizontal: 20, paddingVertical: 56 },
  pageBodyInner: { maxWidth: 860, width: '100%', alignSelf: 'center' },
  pageLede: { color: COLORS.navy, fontSize: 24, lineHeight: 34, fontWeight: '600', marginBottom: 34 },
  productCard: { backgroundColor: COLORS.white, borderRadius: 14, borderWidth: 1, borderColor: 'rgba(54,178,176,0.28)', overflow: 'hidden', flexDirection: 'row', marginBottom: 16 },
  productCardCompact: { flexDirection: 'column' },
  productSide: { width: 230, backgroundColor: COLORS.tealBg, paddingHorizontal: 24, paddingVertical: 28, justifyContent: 'center', borderRightWidth: 1, borderRightColor: 'rgba(54,178,176,0.18)' },
  productName: { color: COLORS.navy, fontSize: 20, lineHeight: 24, fontWeight: '700' },
  productMain: { flex: 1, paddingHorizontal: 28, paddingVertical: 26 },
  productTagline: { color: '#574580', fontSize: 15, lineHeight: 22, fontWeight: '600', marginBottom: 12 },
  productBody: { color: COLORS.textMuted, fontSize: 13.5, lineHeight: 22 },
  pullBlock: { marginTop: 24, backgroundColor: COLORS.tealBg, borderLeftWidth: 3, borderLeftColor: COLORS.teal, borderRadius: 10, paddingHorizontal: 24, paddingVertical: 22 },
  pullLabel: { color: COLORS.teal, fontSize: 10, textTransform: 'uppercase', letterSpacing: 2.4, marginBottom: 10, fontWeight: '700' },
  pullText: { color: COLORS.navy, fontSize: 15, lineHeight: 24 },
  pageCtaSection: { backgroundColor: COLORS.navy, paddingHorizontal: 20, paddingVertical: 52, position: 'relative', overflow: 'hidden' },
  pageCtaInner: { maxWidth: 860, width: '100%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 24 },
  pageCtaTitle: { color: COLORS.white, fontSize: 28, lineHeight: 34, fontWeight: '700', marginBottom: 12 },
  pageCtaBody: { color: 'rgba(255,255,255,0.9)', fontSize: 14, lineHeight: 22, marginBottom: 12, maxWidth: 520 },
  pageCtaBullet: { color: 'rgba(255,255,255,0.9)', fontSize: 14, lineHeight: 22, marginBottom: 6 },
  aboutBody: { backgroundColor: COLORS.lavender, paddingHorizontal: 20, paddingVertical: 56 },
  aboutLede: { color: COLORS.navy, fontSize: 26, lineHeight: 37, fontWeight: '600', marginBottom: 28, paddingBottom: 28, borderBottomWidth: 1, borderBottomColor: 'rgba(87,69,128,0.15)' },
  aboutParagraph: { color: COLORS.navy, fontSize: 16, lineHeight: 28, marginBottom: 22 },
  aboutStatGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 1, backgroundColor: 'rgba(87,69,128,0.12)', borderRadius: 12, overflow: 'hidden', marginBottom: 28, marginTop: 8 },
  aboutStatGridCompact: { flexDirection: 'column' },
  aboutStatCard: { backgroundColor: COLORS.white, paddingHorizontal: 18, paddingVertical: 24, flexGrow: 1, flexBasis: 180 },
  aboutStatValue: { color: COLORS.navy, fontSize: 28, lineHeight: 30, fontWeight: '700', marginBottom: 8 },
  aboutStatLabel: { color: COLORS.textDim, fontSize: 11, lineHeight: 17 },
  aboutTeamTitle: { color: COLORS.navy, fontSize: 28, lineHeight: 34, fontWeight: '700', marginBottom: 10 },
  aboutTeamSub: { color: COLORS.textMuted, fontSize: 13, lineHeight: 22, marginBottom: 22 },
  personCard: { backgroundColor: COLORS.white, borderRadius: 14, borderWidth: 1, borderColor: 'rgba(54,178,176,0.28)', overflow: 'hidden', flexDirection: 'row', marginBottom: 14 },
  personCardCompact: { flexDirection: 'column' },
  personSide: { width: 200, backgroundColor: COLORS.tealBg, borderRightWidth: 1, borderRightColor: 'rgba(54,178,176,0.18)', paddingHorizontal: 18, paddingVertical: 22 },
  personInitialWrap: { width: 42, height: 42, borderRadius: 21, borderWidth: 1, borderColor: 'rgba(54,178,176,0.4)', backgroundColor: 'rgba(54,178,176,0.18)', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  personInitial: { color: COLORS.navy, fontSize: 15, fontWeight: '700' },
  personName: { color: COLORS.navy, fontSize: 14, lineHeight: 18, fontWeight: '700', marginBottom: 4 },
  personRole: { color: COLORS.textDim, fontSize: 10.5, lineHeight: 16, marginBottom: 12 },
  personLocation: { color: COLORS.teal, fontSize: 10.5, lineHeight: 16, paddingTop: 12, borderTopWidth: 1, borderTopColor: 'rgba(54,178,176,0.18)' },
  personMain: { flex: 1, paddingHorizontal: 24, paddingVertical: 22 },
  personBio: { color: COLORS.textMuted, fontSize: 12.5, lineHeight: 21, marginBottom: 14 },
  personWhenWrap: { flexDirection: 'row', gap: 8, alignItems: 'center', backgroundColor: COLORS.lavender, borderRadius: 6, borderWidth: 1, borderColor: 'rgba(87,69,128,0.12)', paddingHorizontal: 10, paddingVertical: 8 },
  personWhen: { color: COLORS.textMuted, fontSize: 10.5, lineHeight: 16, fontStyle: 'italic', flex: 1 },
  aboutCloseWrap: { marginTop: 28, paddingTop: 28, borderTopWidth: 1, borderTopColor: 'rgba(87,69,128,0.15)' },
  termsBody: { backgroundColor: COLORS.lavender, paddingHorizontal: 20, paddingVertical: 56 },
  termsLead: { color: COLORS.navy, fontSize: 24, lineHeight: 34, fontWeight: '600', marginBottom: 26, paddingBottom: 26, borderBottomWidth: 1, borderBottomColor: 'rgba(87,69,128,0.15)' },
  termsSection: { marginTop: 18 },
  termsSectionTitle: { color: COLORS.navy, fontSize: 22, lineHeight: 28, fontWeight: '700', marginBottom: 10 },
  termsParagraph: { color: COLORS.textMuted, fontSize: 14, lineHeight: 24, marginBottom: 16 },
  termsParagraphStrong: { color: COLORS.navy, fontSize: 14, lineHeight: 24, marginBottom: 16, fontWeight: '700' },
  legalBulletRow: { flexDirection: 'row', gap: 10, marginBottom: 10 },
  legalBulletText: { color: COLORS.textMuted, fontSize: 14, lineHeight: 24, flex: 1 },
  cookieCard: { backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.lavenderMid, borderRadius: 12, paddingHorizontal: 18, paddingVertical: 16, marginBottom: 14 },
  cookieCardTitle: { color: COLORS.navy, fontSize: 16, lineHeight: 22, fontWeight: '700', marginBottom: 6 },
  cookieCardMeta: { color: COLORS.textDim, fontSize: 12, lineHeight: 18, marginBottom: 4 },
  supportLink: { color: COLORS.teal, fontSize: 13, lineHeight: 20, fontWeight: '600', textDecorationLine: 'underline', marginBottom: 8 },
  termsLink: { color: COLORS.teal, textDecorationLine: 'underline' },
  termsBackButton: { alignSelf: 'flex-start', marginTop: 20, backgroundColor: COLORS.navy, borderRadius: 8, paddingHorizontal: 18, paddingVertical: 12 },
  termsBackButtonText: { color: COLORS.white, fontSize: 13, fontWeight: '700', letterSpacing: 0.4, textTransform: 'uppercase' },
  brandSign: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  brandSignName: { color: COLORS.navy, fontSize: 14, textTransform: 'uppercase', letterSpacing: 2, fontWeight: '700' },
  brandSignTag: { color: COLORS.teal, fontSize: 10, textTransform: 'uppercase', letterSpacing: 1.4 },
  modalBackdrop: { flex: 1, backgroundColor: 'rgba(16,14,38,0.84)', justifyContent: 'center', padding: 20 },
  modalCard: { maxHeight: '92%', backgroundColor: COLORS.navy, borderRadius: 16, borderWidth: 1, borderColor: 'rgba(73,172,181,0.22)' },
  modalScrollContent: { padding: 24 },
  modalBack: { color: COLORS.teal, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 26 },
  modalTag: { color: COLORS.white, fontSize: 11, fontStyle: 'italic', marginBottom: 14 },
  modalHeadline: { color: COLORS.white, fontSize: 36, lineHeight: 42, fontWeight: '700', marginBottom: 28 },
  modalGrid: { flexDirection: 'row', gap: 20, marginBottom: 20 },
  modalBlock: { flex: 1 },
  modalBlockLabel: { color: COLORS.white, fontSize: 10, textTransform: 'uppercase', letterSpacing: 2.4, marginBottom: 8 },
  modalBlockText: { color: COLORS.white, fontSize: 14, lineHeight: 23 },
  modalTrigger: { backgroundColor: 'rgba(45,43,85,0.5)', borderRadius: 10, borderWidth: 1, borderColor: 'rgba(73,172,181,0.2)', padding: 20, marginBottom: 16 },
  modalTriggerLabel: { color: COLORS.white, fontSize: 10, textTransform: 'uppercase', letterSpacing: 2.4, marginBottom: 8 },
  modalTriggerText: { color: COLORS.white, fontSize: 14, lineHeight: 23, fontStyle: 'italic' },
  modalProof: { backgroundColor: 'rgba(73,172,181,0.07)', borderRadius: 10, borderWidth: 1, borderColor: 'rgba(73,172,181,0.25)', padding: 20, marginBottom: 16 },
  modalProofLabel: { color: COLORS.teal, fontSize: 10, textTransform: 'uppercase', letterSpacing: 2.4, marginBottom: 8 },
  modalProofText: { color: COLORS.white, fontSize: 14, lineHeight: 23 },
  modalNothing: { backgroundColor: 'rgba(224,80,80,0.04)', borderLeftWidth: 2, borderLeftColor: 'rgba(224,80,80,0.45)', borderRadius: 10, padding: 20 },
  modalNothingLabel: { color: 'rgba(224,80,80,0.7)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 2.4, marginBottom: 8 },
  modalNothingText: { color: COLORS.white, fontSize: 14, lineHeight: 23 },
});