// Navy footer bar with the legal links, shared by every page.
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="foot-brand">{"Simplicytas"}</div>
      <div className="foot-links">
        <a className="foot-link" href="/privacy.html">{"Privacy Policy"}</a>
        <a className="foot-link" href="/cookies.html">{"Cookie Policy/Setting"}</a>
        <a className="foot-link" href="/terms.html">{"Terms of Use"}</a>
        <a className="foot-link" href="mailto:contact@simplicytas.com">{"contact@simplicytas.com"}</a>
      </div>
    </footer>
  );
}
