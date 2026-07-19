import LegalLayout from './LegalLayout';

// Content converted from the live simplicytas.com Cookie Policy/Setting page.
export default function Cookies() {
  return (
    <LegalLayout title="Cookie Policy" updated="Updated: 1 September 2024">
      <p className="legal-p">{"Welcome to the cookie policy of SIMPLICYTAS Consulting Pte Ltd (collectively referred to as “SIMPLICYTAS”/”we”/”us”)."}</p>

      <h2 className="legal-h2">{"Information about our use of cookies"}</h2>
      <p className="legal-p">{"Our website uses cookies to distinguish you from other users of our website. This helps us provide you with a good experience when you browse our website and also allows us to improve our site."}</p>
      <p className="legal-p">
        {"Due to recent changes in law and voluntary policies, all websites which operate across Singapore, the United Kingdom and certain parts of the European Union are required to obtain consent using or storing cookies (or similar technologies) on your computers or mobile device. This Cookie Policy provides you with clear and comprehensive information about the cookies we use and the purposes for using them. To review the privacy policies that apply to users of our website, please read our "}
        <a href="/privacy.html">{"Privacy Policy"}</a>
        {"."}
      </p>

      <h2 className="legal-h2">{"What is a cookie?"}</h2>
      <p className="legal-p">{"A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies as soon as you visit our website."}</p>

      <h2 className="legal-h2">{"Key concepts"}</h2>
      <ul className="legal-ul">
        <li>{"First and third-party cookies: whether a cookie is ‘first’ or ‘third’ party refers to the domain placing the cookie. First-party cookies are those set by a website that is being visited by the user at the time."}</li>
        <li>{"Third-party cookies: are cookies that are set by a domain other than that of the website being visited by the user. If a user visits a website and another entity sets a cookie through that website, this would be a third-party cookie."}</li>
        <li>{"Persistent cookies: these cookies remain on a user’s device for the period of time specified in the cookie. They are activated each time that the user visits the website that created that particular cookie."}</li>
        <li>{"Session cookies: these cookies allow website operators to link the actions of a user during a browser session. A browser session starts when a user opens the browser window and finishes when they close the browser window. Session cookies are created temporarily. Once you close the browser, all session cookies are deleted."}</li>
      </ul>

      <h2 className="legal-h2">{"What cookies do we use and why?"}</h2>
      <p className="legal-p">{"The cookies used on our website are categorised as follows:"}</p>
      <ul className="legal-ul">
        <li>{"Strictly necessary cookies: are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services."}</li>
        <li>{"Analytical/performance cookies: allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily."}</li>
        <li>{"Functionality cookies: are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region)."}</li>
        <li>{"Targeting cookies: these cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose."}</li>
      </ul>
      <p className="legal-p">{"You can find more information about the individual cookies we use and the purposes for which we use them in the table below."}</p>

      <div className="legal-table-wrap">
        <table className="legal-table">
          <thead>
            <tr>
              <th>{"Cookie"}</th>
              <th>{"Name"}</th>
              <th>{"Purpose"}</th>
              <th>{"More Information"}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row-group">
              <td colSpan={4}>{"First party cookies"}</td>
            </tr>
            <tr>
              <td>{"Session Cookie (Strictly necessary)"}</td>
              <td><code>{".AspNetCore.Identity.Application"}</code></td>
              <td>{"Unique session identifier."}</td>
              <td>{"Microsoft ASP.NET framework – user session"}</td>
            </tr>
            <tr>
              <td>{"Anti-Cross Site Request Forgery"}</td>
              <td><code>{".AspNetCore.Antiforgery.{Id}"}</code></td>
              <td>{"This cookie is a security measure and helps protect the website from unauthorised data submissions. This cookie will expire automatically when you close your browser."}</td>
              <td>{"Microsoft ASP.NET framework – Anti-Cross Site Request Forgery"}</td>
            </tr>
            <tr>
              <td>{"Cookie Consent"}</td>
              <td><code>{".AspNet.Consent"}</code></td>
              <td>{"This is the “Cookie Consent” tracking cookie which records your confirmation that you accept our cookies."}</td>
              <td>{"–"}</td>
            </tr>
            <tr>
              <td>{"SIMPLICYTAS"}</td>
              <td><code>{"odb-attrs"}</code></td>
              <td>{"This is the SIMPLICYTAS attribute cookie used to maintain user state information for the website."}</td>
              <td>{"Persistent"}</td>
            </tr>
            <tr className="row-group">
              <td colSpan={4}>{"Third party cookies"}</td>
            </tr>
            <tr>
              <td>{"Universal Analytics (Google) — Analytical/performance cookies"}</td>
              <td><code>{"_ga"}</code></td>
              <td>{"These cookies are used to collect information about how visitors use our website. We use the information to compile reports and to help us improve the website. The cookies collect information in an anonymous form, including the number of visitors to the website and blog, where visitors have come to the website from and the pages they visited."}</td>
              <td>{"Google information on _ga cookie."}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="legal-p">{"Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control. These cookies are likely to be analytical/performance cookies or targeting cookies. To understand how other parties use cookies, please review their privacy policies."}</p>

      <h2 className="legal-h2">{"Your consent"}</h2>
      <p className="legal-p">{"By continuing to use our website, you are agreeing to our placing cookies on your computer in order to analyse the way you use our website. Please read this cookie policy carefully for more details about the information we collect when you use this site."}</p>
      <p className="legal-p">{"If you do not wish to accept cookies in connection with your use of this website, you must stop using our site."}</p>

      <h2 className="legal-h2">{"Can you withdraw your consent?"}</h2>
      <p className="legal-p">{"If you wish to withdraw your consent at any time, you will need to delete your cookies using your internet browser settings."}</p>

      <h2 className="legal-h2">{"How to delete and block our cookies"}</h2>
      <p className="legal-p">{"You block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies), you may not be able to access all or parts of our site. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies as soon as you visit our site."}</p>

      <h2 className="legal-h2">{"Changing your cookie settings"}</h2>
      <p className="legal-p">{"Please note that internet browsers allow you to change your cookie settings. These settings are usually found in the ‘options’ or ‘preferences’ menu of your internet browser. To understand these settings, you should use the ‘Help’ option in your internet browser for more details."}</p>

      <h2 className="legal-h2">{"Information about cookies"}</h2>
      <p className="legal-p">
        {"Useful information about cookies can be found at: "}
        <a href="http://www.allaboutcookies.org/" target="_blank" rel="noreferrer">{"allaboutcookies.org"}</a>
      </p>
      <p className="legal-p">
        {"A guide to behavioural advertising and online privacy has been produced by the internet advertising industry which can be found at: "}
        <a href="http://www.youronlinechoices.eu/" target="_blank" rel="noreferrer">{"youronlinechoices.eu"}</a>
      </p>

      <h2 className="legal-h2">{"How to contact us"}</h2>
      <p className="legal-p">{"If you have any questions about our information practices, please contact us by writing or email at:"}</p>
      <address className="legal-address">
        {"Data Protection Officer"}
        <br />
        {"Simplicytas Consulting Pte Ltd"}
        <br />
        {"138 Market Street"}
        <br />
        {"#24-01 CapitaGreen"}
        <br />
        {"Singapore 048946"}
        <br />
        {"Email: "}
        <a href="mailto:dpo@simplicytas.com">{"dpo@simplicytas.com"}</a>
      </address>
    </LegalLayout>
  );
}
