import type { ReactNode } from 'react';
import PageLayout, { PageHero } from '../components/PageLayout';
import './Legal.css';

interface LegalLayoutProps {
  title: string;
  updated: string;
  children: ReactNode;
}

// Shared shell for the legal pages (Privacy / Terms / Cookies): the standard
// page layout with a navy hero band showing the title + last-updated date.
export default function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <PageLayout title={title}>
      <PageHero eyebrow="Simplicytas Consulting Pte Ltd" headline={title}>
        <div className="legal-updated">{updated}</div>
      </PageHero>
      <section className="page-body legal-body">
        <div className="page-body-inner">{children}</div>
      </section>
    </PageLayout>
  );
}
