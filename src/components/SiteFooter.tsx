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
      <div className="foot-address">{"Simplicytas Consulting Pte. Ltd. 138 Market Street, #24-01 CapitaGreen, Singapore 048946"}</div>
    </footer>
  );
}
