import { useEffect, useRef, useState, type ChangeEvent, type SubmitEvent } from 'react';
import './Home.css';
import { sendContactEmail } from '../lib/email';
import transformationIcon from '../../assets/transformation_icon.png';
import dataReportingIcon from '../../assets/data_and_reporting_icon.png';
import executionIcon from '../../assets/execution_icon.png';
import executionDiagram from '../../assets/execution_diagram.png';

// Converted 1:1 from simplicytas_website_v5.html
// The patterns data below is copied verbatim from the original <script>.
const patterns = [
  {tag:'Does this sound familiar?',headline:'You have the data.<br><span class="teal">Nobody trusts it.</span>',situation_label:'What you are experiencing',situation:'You have the data. Your systems are running. Your team is filing reports. And when your investors ask a question, nobody can give them a number they would stake their reputation on.',cause_label:'What is actually happening',cause:'The data exists across systems, geographies, and asset classes, but it was never built into a single reporting layer anyone controls. Every entity captures things differently. By the time the numbers reach the top, reconciliation becomes a full-time job and trust in the output collapses.',trigger_label:'The moment it becomes urgent',trigger:'A lender asks for a portfolio report. A limited partner (LP) wants asset-level performance. A board meeting is in three weeks. And you realise you cannot produce a number you would defend in the room.',proof_label:'What happened',proof:'A global fund manager with $6B in acquired assets had no reporting layer their investors could rely on. Within the engagement, lender, investor, tax, and regulatory reporting was delivered accurately and on time, for the first time.',nothing_label:'If nothing changes',nothing:'The next reporting cycle looks the same as this one. Manual reconciliation. Last-minute fixes. Numbers that do not quite add up, and the question your investors are starting to ask gets harder to answer each time.'},
  {tag:'Does this sound familiar?',headline:'The platform exists.<br><span class="teal">The operation didn\'t follow.</span>',situation_label:'What you are experiencing',situation:'You moved into a new market, acquired the assets, and had investors expecting transparency from day one. The platform was not there. The processes were not there. And the pressure was immediate.',cause_label:'What is actually happening',cause:'The investment decision was made at the top, but the operational infrastructure, the systems, the reporting, the local processes were never built to match the pace of the acquisition. You are running an operation that cannot yet see itself clearly, and your stakeholders are already asking questions you cannot answer.',trigger_label:'The moment it becomes urgent',trigger:'Parent company or third-party investors demand visibility. You have the underlying assets. You do not have the layer that makes them legible. The gap between what you own and what you can report is now a credibility problem.',proof_label:'What happened',proof:'A distressed debt fund entered Japan and Korea with major acquired portfolios and almost no visibility over underlying data. Manual reporting meeting full stakeholder needs was delivered within three weeks. Processes were then embedded as business as usual with a high degree of automation.',nothing_label:'If nothing changes',nothing:'Investor confidence erodes before the operation has a chance to perform. The assets may be sound, but if you cannot show it, it does not matter. The window to demonstrate performance closes faster than the assets can prove themselves.'},
  {tag:'Does this sound familiar?',headline:'The programme is running.<br><span class="teal">Nothing has changed.</span>',situation_label:'What you are experiencing',situation:'The board approved it. The budget was allocated. The programme has been running for months. When someone asks what is actually different, in how the operation works, in what the numbers show, the answer is not convincing.',cause_label:'What is actually happening',cause:'Most transformation programmes deliver a framework and a training session. They hand over a playbook and move on. What they do not do is stay inside the operation long enough for the change to compound. Long enough for the team to run the new way of working under real conditions, with someone who can read when it is slipping.',trigger_label:'The moment it becomes urgent',trigger:'The board or a senior investor asks for a progress update. Activity is high. Outcomes are thin. The executive accountable for delivery is being asked to explain a gap they cannot clearly diagnose, and the programme budget is almost spent.',proof_label:'What happened',proof:'A major European investment bank needed Lean transformation across global equities middle and back office. Over 10% capacity reduction was delivered within six months. More than 500 staff were trained and the change was embedded. Not handed over.',nothing_label:'If nothing changes',nothing:'The programme completes on paper. The operation reverts to how it ran before. The investment gets written off as a change management failure. And the next programme starts from zero, with the same team, the same habits, and no explanation for why it did not work the first time.'}
];

export default function Home() {
  const navToggleRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [overlayIndex, setOverlayIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>('#s1');
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [contactError, setContactError] = useState('');

  const updateContactField = (field: keyof typeof contactForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setContactForm(prev => ({ ...prev, [field]: e.target.value }));

  const submitContactForm = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactStatus('sending');
    setContactError('');
    try {
      await sendContactEmail(contactForm);
      setContactStatus('success');
      setContactForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setContactStatus('error');
      setContactError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  // Original script: clicking any .nav-link closes the mobile menu checkbox
  const closeMenu = () => {
    if (navToggleRef.current) navToggleRef.current.checked = false;
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

  // Cross-page links (e.g. /#s5 from Products/About) land here before the browser's
  // native hash-scroll fires, since #s5 doesn't exist in the static HTML yet. Scroll
  // to it manually once mounted so the first click lands on the right section.
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView();
    }
  }, []);

  return (
    <>
      {/* NAV */}
      <nav>
        <a className="nav-logo-panel" href="#s1">
          <div className="nav-mark logo-eye">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAABRCAYAAABYH93WAAApHUlEQVR42u19e3idVZnv711rfd++JekFWhDkIiLOUJCjYNukrUm4tUlvKWOiOEcY5jiioOIRUZ6Z57gT58zooM4cHHFER9CZUefsLfSWpOWiSaDZaYXOHBAQuShYYWxLb9n3/a213vPH3l+6U9pk71xKWviep0/z7Db7+761fuv3/t7LehfhzXQxU3s8LvbMm0fz9+7leEeHOdp/W5xIzMWBA2cKsmeREOex5TOY7VkQdBpZnMLEs4kpAiDI4CAASYAEAAYMAEOgHIAcE6eJ6SAT9hHza0xilxC0yxr9kpCBXSoQeGWgufm1oz1HeywmR561vd2CiN8sU0Un+/tFmam/v18cDYgXxmLu3DmRc43BhYL4Ima6mJjPY/DbwThFOI5DSgFEADOYGbAWbC3AfPizIuhLd6TSX1T8mQgkBCDE4c+YwVrDeJ4mon0AXgXR8wA9LSCetA7/qi7PL21tbc2XP2+UWfT394umpibbVQQpvwXME5AVB5qbdfk/Na5fP1vXBC5iyw2wvBTARQDOUeGwgJRF0GkNqzXYGMBaZiJb/t1UBBaVgfBYY8hlYGVmRjnjEbOAEERSQigFUgoQAjAGOp1mEH4Hxi9JioSFGnRd98mB5uaDo96nr0+drGx6sgCT2mOx14ORmZZu2XIxK1wOiyZmXiQcdboIBMDWgAteEYTMBswMIgIzEUDjgG4qFxIzwCBi/xkIkMJxQK4DEhI2n4f1vN0g+gWI+wD0JRKPPYmuLvs6kHZ02JOBSU9sYEajorGpSZSDcUVvbyAt5SIDuxqwV8PyxaomQmwtbL4A9jxmwJQAQDj8Z0bxfkkcMJiZAEmOQ8J1QVJApzMgol8S8CAL6lYquH2guTlXDtKB/n5bDty3gHmc2PHC9nbu8s1sNCqWNiysZxZ/ArKrSarzRSAAWyjA5vNgZg0iIuaS0DshJUpRVjAzESnhBiACbvH9tPcik+omYX86uG1HwgdklFk8E4/TiciidAJNDDX298tydly0efO7lCs+yIwPCynfUwRjHjZfYAYMAT4QT0YnzzKzJUAK1yURDMDm8rDWPCmYYjAc37Zy5XOjWLSpyZwoWnTmT1g0Kto7F1Ccih71pY/f7YQOnLPcMv85rG1RkXDQFjzYXK4IRiIBQODNdR0GaTBIwnWg05k8CdrKoHsOHty+9ZmOrgIAtHNMxjuf5plu5mlGA3LBAvJDPIs2bjxNhp2PwPLHpBu4EIJgMlmwtbrEjG82MB7LslgGLAmhZCgEMMMU8s8QyXsKBf2jx1at+gNQjJHGn565AKWZDsilPT0XsEM3MuijKhicZwsFmHzegoipyIz0FhqPAVHAgplkICCE68Jks68x6N9g8Z1ES8uvZzJAaaYCcvFDPRcrFp9l5mtlOBQymSys1qboTOMtdqze1LNQSspwCCaTzQL072B95+CK1U/MRIDSDFjX1A6IOJEBgCVbN18CkreC6EMyGHR1Ou2ba3nCetQzybMHDAmhVCQCk816AMfA9msjAGWWceAND9i/kRNNjX19I1720p6eC1jRbQCul6GQo1MpMLPvzLwFyKmHqCUiqWoiMNmcx0T/Ijx7h+/JN/b1qYHmZvNGhZnekAlvj8XkaKfG/TwxbpLBYPiEAOSR2ZqjjuyoLBJNZGIEESyXUu4ADPM0ArQGJpdNE9N38p75+ign6RjFLicPMKNRgc5OgMheGIu5s2fV3EygL8pw6DSdSoGtnRpAloLRfsXPVIZkAAghpSDHgfDz28Wbjh5Sa4vpTs+DNcYCsJWGsgQRtLVIaw1XClhmWAZqlBpFXwyYKUoaFAEqRBGg2exuZnvHnmdfuOuFW27Jg7k4b8dRfx4vYI4y2w1bNq+BVF9WoeAlJadmSjQkAwbMEEpJGQpCpzOHq34m950kXVeIQABsNEwuP8zg34DxIhi/I+A1S8gAFoJFmIFTQTgbhHcS6DwZCNSRUrD5PEyh4EcUjrpoJBGyxqDWcfDfz3sn3jv3FGS1xtZXX0Hv73chIKXPyFCRCEwuB+t5BkSYdJSipEGFUkqGw7C57BOW8aXE1S2bjrd5n3ZgjjLbmze/SwXU3wpHfZAtw+Ry5dmZyQl6IiVDIZCU0JnMPli7iYErhFJns+dxtffw2UhGIgRm2Hz+RWbaIogfIBY7H21p+a9KvmfZli1v08D7iM0KkrRCuIHzQQSTTr+O1SURMlrjlEAA31xUj3fXzRr1Xd97/te461fP8KxwmLRXeJkZD5NSa1UodCobA5PNgpknv8iLY2plMChJCFjP+6mE/stHrl79/PEy79MHzLIUYmM0qgpLFt0qSPyldN06L5WyJRk2mbDP4RBIKASTyTCI+kng322o7if24GufUJGar9hcDmCWVU0KkVWhkGStYa3dCmu/Y5OZB7d3dGSPXHR75s076hgerf6zsa8v6OXSy0nIj0NQq1AKOps1YBZKCMpojbmBAL69qAHn19VBWwtBBC5NFANoH/g5dmUyJhQOQ6czt7uR2u94Xv5agv0wW25W4TCZ7NSE1krSBU5NjbD5fBKgv8n+9uW/33njjd50pzhpullySe+mpVDON2QotNCk07DGGCKSkxosIpauK4XrQmfSe0Hi/wpH/mDb5ct3AkD9xvtXOXPmbNapVLEmskL2YGYjlJIyGITJ539O4C9vu7p1oAxY1dc/HqM+dNkDD3zAwn5JBt0rUPCQzmUxNxDEtxc34PzaOhhmyLLHtqWqvC/ufAwPvPJ7nuW6oEiEvAPDq4fWru0GgMVbtrxPSr4elj8sw+H5tlCAKRRMqY50MgA1QgopIzUw2dxj0IXPDbau2Tad7DnVwBzRkpfefXc4+I6zogDdJpQinc1OysT4q1eFQoKkhM5lnwHon03O+/GOtWt3+4P06pw5Z8IW/hNCzrae5+uuSr5fq0hE2UJhHyx/YXBF6z2lfxDt8ThNSTEug9rjoyujlj3Q+z8y1v7NKY47/66Fi3B+bR0dCUofmIIIH0tsw3/s34eIlJYdB7DmIIR57xkHcq+MZMt6e+ex4o8w6C9kILAAxkJns2Nq20olkwqFlDXawvA3cgXduXPNmsx0aM8pA2aUWfiDXd/d/QERUP8og8H36OQwM4MnumJHABkOCwAwBW87mL+1xz7/0xdab8n7TJaqraWdl13m1Xdv3OTU1a32ksmKmZmZtVNXp0w2+wgNp2/Y9sEP/ubITNQ0SB1x986d8sbLLvM+vf3Rxbe+530D54TCylhLUohR86KZoYiwc99r+OT2BFwhSgWbbJzaWuklk5uGVq5Ze+njjzs1yST7zHxhLObOmRP5IJg+JRy3HgB0JjMpGVUsFiFSdbVkcrlfGq/w6e2tawaOxMCMAGZpxehL777bCZxz1pdI0F+RlGRyOU1EasIaEmAVDEoQwWhvmyD6xrYrV2wYdd+mJtMej4t4R4ep39Ld7oTDMS+Vqvi+DGintlbpTOoeJxG5caCrWfvvM82hUElEZjfz6fOBDQAWWoDFEQzvs+eLyWHctGMIB/N5OCVgjiyqmhrlJZMdQ6vWxttjMRlvb7dHlgg2bOleS1LdKhy1DMzQRcdzwhqUmbUMBhUbw7D8ldzLuzpHtOcUjN1k44Xkg2LRxo3vkWH3bhUMLdbJJBd9iAmsSt8jDAQkOQo2V3gMFl8dbGm5/wgNWyx+ZSZ0dlJj04Kwlw0+JRz3bFsocCXVRiOgTKW/nmhZeVtpLw9hilb9eKBk5nkAHgTw34y1VgpxbFBuH8K+Qh4hKWHLQ2DMVrgBsl7h5Yh0L3ookciis5NLsoPaYzER/9CHjB82W/JA7zoAt4tgYCF7Giafn3BkpBicB6m6OjLZ7A7tFT6+o3Xtk/7imIz0mbAgbo/FJIg43tFhGrb0fEKFA4NSOYu94WFdtBTVg5KZNSlJTl2tZMu/ttnc9YOJ7YsHW1ruBzO1x2ISAErmlQGgsb9foqvLepnQTaq27hxTKJiKQMlcBGUy+c1Ey8rb/O9+I0AJQB8JSmutlUT2xWQSN+0Ywr58DuEjQVl8XmEKeaNqa89Ne/mb0NVlG/v7fQlTjAwwF+eLmQaXt64fTOyo50z2Orb2WaeuVpJSxMxVs1xxjom8Q8NaKGeRctxEw9beT8Y7OgyIeGRMjxdj+nS99Ec/msOnzrlLhkLXmkxmwh53qciVVG0tmVxuHzPuSO3ee9eT112XHtPzK+1WbNywYZbnql+To+ax1jzegvO1mU6n1ydaVl1zvKq7jwVKAOpIUAohxG9zWXzikX7s8zyEpRwrJWlJKWKt96Tz+o+eaGs7VEIOjxUxuXTTpnAg4NxMhC/IYPBUnUwyY2L+wIjnHo7AZLM/MYdSn9re0bF/oqZdVHl3ao/F5EBzs67vXt+A+acMyXDoWi+ZNGwMVw1KZmZmrUIhQY5DJp/7nrC59yaWt9zx5HXXpY9gyNcvkP5+CSIuuOp6VVc733qeqQCUVgYCUmcyzyOvr49Go2Kgv9/OFFAC0KLInjtv2vbIrw4IQlhKO06eXFjPM6q29rSwq64HEZex5qjLH8v2WEzuXLMmk1je8jVPZ95rc7nvkuOQCofEyK7R6thTsrHsJZNGhkLXytm1Q/Xd6xsGmpu1z9bTw5jFnGzR697Sc7NU8h8ghDNRB6e4wqSU4TBMLj9kWd8+tHzVI+VOzThgITDj0u9+V7lnvu2XMhS4wOYKDBoTmAwSlhwFzqSXJdZcMzThOFwpgQAApR2JxWeNRqmxqUkAgP8O1YASgLLALwWw5Iz4jy+44NT5Owr5fHEf+ljzxWxFMEAmm3vOjdRdVLo3xgzhMKixf1SqeBkp5ysyEFgySQuoZTCgYNljbf7nYMvKu47E0JQwZmNfnwKRXRyLhZY80HuPEwl/y2qtTC5nqwZlkSWNqqmREPKgTqU/Nzg4tHRo+apH/JU10Nysx2Ow9lhMgIiDbz+9SYZD7za5/HigBDNbVRORJpf7VmLNNUONfX2qalD6WpeIB5qb9UBzsy4VNxQ7Y3R12ZHPifjjjz/uVANKAE8I4EoiSu3u+NOd+UzmW05NjfTDZmNQljC5PMtw+N06M9xc0nhiHFoqhpZK75RoWf3o4FUrlplc5rMQ4qBTUyNLtQLVsqcyuby1WisZCX9rydaeey+9++4wiGxjX5+aEsb0NcLijbHzZbD2xzIcer83PDyhYLmfWRHBIGw+v4E1fz7R2vpiuXdfsfPFLONEpmFL9w9UJHJdKW451ktbUpLY8h6h+Y+3PfZYUYdVUTFTzq7vf+j+UwKi5nKr9QfA/EewPLe41Gk/iJ4VRI9IJ9g30Nz8GjPPAtAH4L3jgRLA1US0p49ZNXd22qXvf/8sFngWUsxjY8bUzyWHTnrJ5L8MrVzzZ/4YVfV+JW96aXf3eXDl1yngrrO5vJ/irF6qAcapq1Mmk33c5ArXbl+79oVKdCeNyQylyvLF3RtXqGDghyTVfJ1OaxJCTeABrVNTI20hv8dafDGxvOUH5cCvlrVAxI19fTVeJvkCOc5p4xVqMLNx6uqkd+jQ7UOr1v5dtff1Qbnoxz8+TZ0691aAPyoCgdNJENgYsC2SCgkCSQm2DOF5e/ckU98eWrnyHbOcwHUAPADOeKD0Tb//jPW9G7/o1M76qjc8PB44LCklbMHb7UZqzx9obk75YzUR57YUXroegu6QbmC+l0pNKLTE1hazalrv1dnC9TvWrNkyXqX80VdfsW6S4kSmfsumz6hAoJctz9eZjKkWlMxsSEpyamulyeU2Uip3WWJ5yw/aYzGJaFRMxGNrj8cFAOTT6cUiFDrNep4dc7BKxR46ldrHKvA9MNNAU1N17NzRYRZ1b7zGmTfnP2QoeBuYT9eplPGGk1pnssZks9Zks1ZnssYbTmqTShnPmHnzT5kbzYCuK2YV+VigfPJIUI5oVGZiEfieTib3C6XkOGZVWM+zMhw6rZBNLiofq2qugeZmjWhURJnF4PLWH+ZTuctsPr/eqa2VkJKYuSr5Q0IonckYMM9zQm5Pfc/mW+JEBp2dhGhUVATM9lhM+uatYWv3t5xI7Z1Wa7aeZ6ulcmbWKhyWJGVSZ1I3DS5vbXt03bpdI9pugoWnfkUPCVwuHAcA7DiBdCPDITBzfPuKFfsb+ztlpSzSGI2qOJFp6Nn0OTcSuY8ZZ3iHhjVrzUQkiUgRIIlIEJEo/axAJFlr9lIpYwqetcyCj82UVx0JSj/c09jfKbevWLGfgZgMh/w2h2NmzITjMCyuKB+rqq+uLttV0oSPr1u3a9vVLdfodOaTQsqkCodltXFPIpLW86zVmp3amv/TsKXnLv8+R4t3iqMxwyX33jt7ScPizU5N7c1eKqVhbXUB8+Kqtk5dnbKeHjK5dENixep/ijKLibLkqBXd329LOqSetR63eoiIhM0XQIQfg5nm713AlZrvga4uXd+98eOqru4bJpcz1vMsCVKVmDMlBCU9Tw7s/oMQRLClbI6xlo9lvo/8jvl7FxSzW9b8xBYK4+e4iYi1JhKoLx+rCY91GXsmWlZ+hzP5eut5CaeuTqG4PZirAKeAteQlU1rV1tzU0LCw55J7750d7+gw7UeUJtKRuqLh/p+8U9TMvk8Eg5d4w8N6IqZbOI4kpcDa+1rut7v+aipzqL5matiwoZaVeFG4zrxx9KUVjiNsofByHal3l3pOEsaphPE1ZX3vhvcKJ/ALtkwwpqrcsr9PxxUCf/O+y7B0/mk+uxsAQwDaxwKlH9IBgVf09gYOsfecdANnW8+zx3wOZibHIfa8PfDs+Ym2tuREdOZY2rMx2qd0feZvyXVvY61hPa9qx4it1U5dnbL53BM2mf2TxDXXvFiOEVF+w0UbNiwSdXMeIceZGCiLIlcS0R6TLawbvLr1CztvvFFHmcUUFkUQAFjHOZekOHU8xmRmKwIuQDS4tbU1XzIb405S/OmnORqNCli6SziOYq2rTkgwilXpeWvxucd24NM7huzXn/2V+Kv/ePw38Xj88hIoBY3lORO4PRaTW1tb8wQaFAEXY4aOiowJSHmqdZxzJ5PhOxp7RpnFQGeTGVyx8gsmm11HhD0qEpFsbXWmXQjlDQ9rUs4lVBt+dFH3hkUDzcUCGgAQfiZn8ab1q1Uk+DBAZ1Tt5PhhgdmzlC3kHy1khhcPrVy5wb9J1xTmn9vjcQIAIew7ZChIFWgugAQAu71SzeXr7IcXXrpc1dTU63RmwsXNDEARwRUC2/bsFj987lm79bW9F/x9XeCqKLPoKL1PJZoaJIZQgaJiwMhAQEgy55aP2VRcXUQWRGjs61NDK9ds8FK5RbZQeMSZNUtVG/P0nSIiepsKBn+2aMOGNX6mqFgu1r2xXUUiG2FMjcnnq3JymNlCClLhsDTp9D/mfrrhil+s7fhtGS1PaapvZJKMPYekxLgDQSRsoQAI+VRRs+2t+Hks0cdoClpK+19Q4ziY7Ti2LhwmYcVfVLpg/WdmNk/bQgHjFqkwMykJMJ0zKQdojDv47LZj3bqX1OD2K0w6800VCUsSgsZNBhzhFJl83kKbiFMb3ljfvbE93tFh1NKengus4HvZGLLG2GqcHGY2MhCQzJzTudxNQytW3gtmwtveJqa9npHEaRVYKCYiYfJ5zcLu8k30eBo2TmQW9vbWgfUyk8/TVG0DtsW+7dLLZsGWly3813+ti3d0DI+nAf1ntlbsQj5fZO/igqSxFI+FPX0658B3jAY6Ow2Ibqnv2fT/hOt+WxIFjf+cFTpF1hgrhBAk5b1Le3qeEJbs7TIUipQEbFWetyqmyl7ibObyoRUr7y2lLo/T/mOeO+7WXOZiY35w0mTMAQBAZ+eYvxQtTbbiwgVCqXkT2WE5rtfseSwcNc+dM+dd5fc85lV6Zhv09oORJCFQ4bvPmfZp6OoqN+33wss3s+WXVE2NrNZjt55nZCgUsWRvF2C+0hYKTNUJe0uuyzaXHzAHhpf6eefpMN1jvEqogrdlCAIBmXwkkqvkW5/x9ZiQZ4iAC56G+kwmssJ1YSWfOeqe41yzbSRHRGkIQiVeNlsOH5+5OGzaB1vXbjcHh5dyvtBPrsvjxZiP8GqFLRQYzFcKJpoNa/1m+BUxJSlJYH71wPMvrtre0fFK+1NPudNtuo/UWwBXWAxAYJCZ47oVZSt8PcaMMKaz5aYQxXtUoQGThw5ZBhuq3MlW1erqyZr2C596yt3e0fHK/udeWA3mV0lKqpg5iQBriYlmC2I+CCG44o4VRMTaMIjOmPOud3YvjsXOjF90UaHSqpEpc36IKloIDAaB5YFCQVYDfLI2C55GRWItiJCpBji1s2YJMBRXbpT0NDk/x4xzPnPRRYXFsdiZcy84fzOIzmBjKpdCzIAQTMwHBYgeFq5LXAXlAhBcKJAIBhrlnLptDZs21ZfFoI5P2xnmbEXBeMtgpkhApIOVfO2F7e0MAMKRv7f5gl8HObUihFnYQgHC0Cvl9xzv2p9/LQQgXNymN37hLQnKHCdTTiMJmk3318vZddso4DZxoVBVQoIBK1yXQPSwECy+arLZtHAcWY2bDyLSqZQhonMp5PbVb+25oVTbh2Ml5qd4LPaPKz+IiqeYEWqlkXNKjsSYv9RV0sgFI563Wu8lx6Fq6xHHlUKOQ9bTe63Wz5Xfcwznp+iQUd0cEGqL71TRux+Y9mmIRgWYMdDcrOt7Nt1AofDPSdC5OpUy1TiNzGyF40iTzaYFi6+KbStXPsfMf0ZSspBSTCQGxVoHVDB4z5IHer556Y03KnR12ek27cR2dwV+FvlbKcjgbABoX7CAxnOY2mMx+YvW1mGAHpWBAFcUxK+cFYwMBBiCHkm0tSX9ouOxfsd/ZiHsWaXwnB3fMjEExB+m23Sjq8s2dnbKJVt771Q1kXugdXAisXAhpSApmY25YdvKlc+J9lhMDrWu/qlOp9dCypQMBEQ1ZU2lxDzrTMbISOTTwQ+2/Wzhxtg7psu0j+gxKV5mbcZv/8JsheuCSC6oVm8J8D+zv6V3Si05k2D+ftW6muki4brA+NXsVBwb+fI0OT8jpnvR+vXn6iWLfyYj4c/odMawtTyBWLiAkmkvmWnz98aLeEeHaezrU9vXrNus08krAX5VhcPV5T5Lx8x5Bw9p4QaWueG67fU9PW2+px6dQp0WL+kxa8VvTS5XWcsTtgB4caWTFO/oMIhGxbbW1Vt1KjWkIhFZbQ3isSZBRSLSpNOJwV/sfADRaEVV+yMOmaDFlThkBEiTz1vD+ZfKx2xKLHdpLkumu82pCe4QrvsB79Chqnc1sLW6VEL3XzqXu2JHW9smvyRy5CaNfX1qR1v7Djt84APseU84dXVqIol5nU4bZp4vQ+76JQ/23nHp3Xerrir2elRmDQHheS/B2r2k1JhpSb/kDcxLVvT2BkpAGD9fvmABERFD8M224GlSCqjOQXx97FcpsOd5TPZT6Oqy48qK4ttSvKPDNN57b5DZLimW743BSMxMSgHGvCY8eql8zKbCdHcR2Uvvvlst2dpzhwyF1jNjvk6nzUQKfpy6OsXae4KTmWU7VrXteF11kQ/OdmaZuObaF7MHk40mm+t1Z89WDOgqI/iSPY9tLmdlKHxb8B3nDNRvvu8ivzJl0o4RESMaFYm2tiRIPCMcZ7wguLCeZ0UgcM4w0cLSxitRCWsWZU7bf3I+d5MKh2Rpx6OdAFNaELEKh6TN5W4eam37z0p3Z7bHYwLMVJg3b6EMBscueYMfvHcA4JlEW1sS0aiYdMlbqR5zoLlZL9m4cUHwHWf3y0jkNpvLWfa86rZtMzMztDN7ttKZ7Jbk7//QlLjmmhfbmUe1tBn1gnEi0x6LyZ0dHYcGE9tXe6nkXU5NjYIQXK3HDkB4w8NaOKpeBiOJhq2bP9lFZKfCMfK3xzLsECnF4y0cv/SNWX8ERLxn3tMVmZt4R4dpjEZVYnXb93Qy+TkZDErhOIKtrWyxMjNb1sJxhAwFpR4+dGtiddv3GqPRindn7pn3dDGPTuYjwh2n5M1nTKmYGUPlYzVZB6eLyDZs6fkEhQNDwnEaSh1XRLWeN4Rgp7ZG6WTq24mh1lVP3HDDwfZY7HWb5sRR9VUpRpZYsepTXjp5i1CKhOOIqvd6ECmdyRg2plaFa7695IHeDUs2xc4e2QQ/QfYcqbax9ufW88aNlREgTSYLAjoWb906d6Cp01S6AX+gq6toSVrX/IOXyl5DRK84s2apUlsVw8yaAcPMlounkhU/YzakFDmz6hQRveplstckVrb9fWNfnxro6tIVziQNNHWa999//ylEor30DuOxk7BegSDws0k5PmUsuWz9+rOWPrjlfhUJ/5M1prZUqjaRAnIhlCIvmfpsomXlzUAUx9LZJ/wuyUIm+YI4jrsk6++7b76oDX0eoHF3SdpcfjcD/2pyha/vWLt2d7XNFUZ2SXZvut2ZVfeVindJet4f3HDtu6ZqlyQJukMc512SJ/y+8vqeTT9wamsr3lcOY/eSwR9Ndl/54q1b5yrBVzCwjK394/J95STErwh4NE/q549dddW+I3+34sA1gKVXvn8Wp/AsRBX7ylOpHw61rr7h5NxXfjRwxmIhOavmLhkK3aDTaa42ZlXOnqqmRtp84SBr/eXEjsfu9HfLVdq+zp/oJT0br6JQ+EGTzY5bS+qzpj506M7EqrWfnShbV7OIJtqSbyTFt3njnWr2rM9UwJbFvkyhkEA+f9W2llUPV7wYRr8TLXmw5zOA6JSBwGwvnZ7QkS2l41lIRSJkMpkf5F7+/c07b7wxU+mYT7B30aabpXL+AULOsN5F+fH6Yk5p76J2QOzp76dRvYs4So39TWJ+UxNP9Og7/5kaNm2qp3DgUfY0wPZN1buIJsoW9d3rG2QgdI8IBt7tDScn1vyzvK+31gDhe8Lk/vrRFet2VWL+RjTYlu7PODU1d3rDw+MuklKKUlitn9d791/2ixdeSFVr0qf1ikZFFMCW88+vUfPmPi6UelcpxTeeNdBOXZ3yUqlbhlpWfXM8Ziof24W9973dVeH/xcDHhaOgM9nJzKctNbd4zhZyNwytWpeYiNWYgf0xs/uZ6e+q6Y95yYYNsyIB51lScn5V/TFTqQ2J1tXrjld/zEoWvt+iuqF383pVU9NWYS/5kf6YeSf47p1XXjk8EvMdA5AnT3/M8mB8LCa3/emfHhhc3voRnc58ElKmJtKhwc/OgIi8ZFKDea4KB/+u9vT5O5ds7bluJJxQ1lG4PNje2N8vn1i37iDIfkOGQhVthCIi6SWTWtXWttX3bPrmQHOzbo/HRbU9HKcalO3xuCiB8k5VW9vmJZO6koVe0pYEy9/YedVVh/y+oUcCEszkp1uXbun+aDDo7FTh4B1gPtVLJjWIJtwJWoXDElKmdSZ70+Dy1o9s7+jY7+/AnVAeZSoGM97RYRb39FwsXPHdN6oH+1UNDaG0KTwlXPccm89X2YM99Y1Ey6rPH68e7EfV76VDUxt6N31d1dbd6iWTml7fFe7o2jIQIJsvvBxRx+jBXmZtTvoe7D5jjRSBrFz5y/xvfvcBnc78b1IKMhgUE2HP0qqVtlCwOp0xwlHvF0HnvoaHtjy69OGtbSNJAID9DFL7ggX00PLlaSb7BeE4FRc9E6C8ZFKrmppbGx7o+X6JaezxqsYfyawQ2cbOTtmwpef7VYESpeJaxyEm3PbQ8uVpP/9eeoeR09katnSvXfLg1keE694vHGehTmeMLRSK5WkTA6WWwaAg5cCkMn+b+83vlu1oXfvkSF+qScqiaTznR35LBkMXT4o9cfRzfkjQP+72fn3fUc/56dm00amtXTPhc34K5oZtq1ZN+zk/7bGYjD/9NKOryy7t7j6PXXmvDIU+UIkDd6RW9oaHNw2tWnvMc37Yik9L11kMvMnO+Sn/vtedjEbi80JKMV0nozHkj4aWL9/jT/arc4JnwsoJnowWVrZQ2A/GFwaXt36/FP4R7fEFU3QyWlH6lJ+MtmRr759D0B3CdU/R6XQ15xNZ4TiAtQeQ1+87I3eUk9GY/kIG3+Qnox3L83tDzpLs3rDSqZvVPbmzJHN9IPry4FUt/eVmd6rOklz6YG8jg74kA4HLTS5XXWaFmUEEVVND3v5Dq4ba2noAYNnDW95n7VtnSVYc+jj+p+8WfsIHxY0yEv7qpE7fNRrWmAcgxD/ZSPLB7Q1Tc/ouSNwopGih0um7VWdWiIwIBmHSydvdyOy3Tt+dLHse7/PKQbicpDpnSs4rL+RfZOatROIBEaTHH22s8LzygS1v0wW8j7RZQYQWEQi+81jnlVf6vuQ4xFq/xMDDJGXbW+eVT4H2LHqIm9dAqi+rUOgSk8nAaj35wSyBCcwosmgQOp0BeLIH5sKAmaTrChEIgI2ByeeGmfk3YLwIxu+IeJ8FpYthDo4w0SlgnA3CO4noPBkI1JFUsPk8TKEwOa13mDWhIhGYXBbW0wZEvp6e9CIXSikZDsNms09Y4EuJq1s2lSVWplRLvtHALLnuUYHOToDIXhiLubNn1dxMwBdlOHyaTqXA1vr9kyYbX50YG40vHSwAIaQU5DgQSgEjJ+3x6CG1FlZrsOfBGmMB+GnFKdv/5LP6FPRW4lLRhVQ1NTDZ7G5me8eeZ1+464VbbsmDuThvxzFt+4ZkOkaZ940bT5Nh9/PEuEkGg2GdShUPFJgKgE6ffmYuBcSPWclORGAmKgbsZ+Z7+IAkKgIyl00T4zt5z379sVWr/nC8zPaMAebRzPvSh3ouYCtvA+z1MhRyTgiAnrhXGSAjMNmcx0T/Ijx7x7aVK5873mZ7pgHzcDilVClfjOttvgQkbwXRh2Qw6Op0GmztlGjQt+BYchSFUCoSgclmPYBjYPu1wRWrnwBKBdgTLNc7uYBZpj/LMy2LH+q5WLH4LDNfK8OhkMlMTQjkTXodDq2FQzCZbBagfwfrO0cAWZaJmgkPPPMY6AiALu3puYAdupFBH1XB4DxbKMDk875n+5aZH4sfi8edkAwEhHBdmGz2NQb9Gyy+k2hp+fVMBOTMBeYxAFp0kpyPwPLHpBu4EIJgMlnfzAsQvcWiRThaBiwJoWQoBDDDFPLPEMl7CgX9o1FOzQwE5MwHZjlAOxdQnErFrY/f7YQOnLPcMv85rG1RkXDQFjzYXM4PtE9pSOYEMtWWACmCQRKuA53O5EnQVgbdc/Dg9q3PdHQVihoyJuOdMxeQJw4wy5wkP8Xpf7Ro8+Z3KVd8kBkfFlK+RwQCsIU8bL5QBOnhrBKd1GB0XRLBAGwuD2vNk4IpBsNx38Me8bJnQpX+SQfMsmduj8VGVeggGhVLGxbWM4s/AdnVJNX5RZAWYPN5MHOxOntqgtFvnEdNZFEsIVQiEIBwXdhCHux5LzKpbhL2p4PbdiR8Nowyi2ficRopqj6RJvmE5oxoVDQ2NY06umVFb28gLeUiA7sasFfD8sWqJkJsLWy+APa8Yr/Lonvvs+lMGwcuOS+MYh9ESY5DwnVBUkCnMyDgKSZ6AGx7nEBkaKC5OTeKHYs7N+2JOrUni4mj9ljsdaVlYKalW7ZczAqXw3ITMxYJR50uAgGwNeCCV0wbMptSKVl5tub4jM+RWaRSS0fhOCDXAQkJm8/Det5uEP0CxH0A+hKJx54sB95ISd4JyI4nMzBHadGj1T8CQOP69bN1TeAittwAy0sBXATgHBUOC0gJWAvWughWYwBreVQnuWJd4+H+52OD9/CBC8UucaN2LRKzgBBEUkIoBfLz7sZAp9MMwu8AepKUSFgrE24m8+TAunUHR73PROpD3wLmzHi/KDP19/eLo9VHXhiLuXPnRM41BhcK4ouY6WJiPo/BbwfjFOE4DilVBCCX0uLWFvu6F085O5wqPwzC0l9U/JmoeAiWEIc/YwZrDeN5moj2AXgVRM8D9LSAeNI6/Ku6PL9UOin4sHJhFv39/aKpqcl2TcFRgm8Bcway6dGA6l+LE4m5OHDgTEH2LBLiPLZ8BrM9C4JOI4tTmHg2MUUABBkcBCD9SqZSv3ZDoByAHBOniekgE/YR82tMYpcQtMsa/ZKQgV0qEHhloLn5taM9h1+IfLKy4ljX/wcwM09GO8kAfAAAAABJRU5ErkJggg==" alt="Simplicytas eye mark" />
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
          <a className={`nav-link${activeSection === "#s1" ? ' active' : ''}`} href="#s1" onClick={closeMenu}>{"The Problem"}</a>
          <a className={`nav-link${activeSection === "#s2" ? ' active' : ''}`} href="#s2" onClick={closeMenu}>{"Where It Breaks"}</a>
          <a className={`nav-link${activeSection === "#s3" ? ' active' : ''}`} href="#s3" onClick={closeMenu}>{"How We Work"}</a>
          <a className="nav-link" href="/products.html" onClick={closeMenu}>{"Products"}</a>
          <a className={`nav-link${activeSection === "#s4" ? ' active' : ''}`} href="#s4" onClick={closeMenu}>{"Results"}</a>
          <a className="nav-link" href="/about.html" onClick={closeMenu}>{"About"}</a>
          <a className={`nav-link${activeSection === "#s5" ? ' active' : ''}`} href="#s5" onClick={closeMenu}>{"Talk to Us"}</a>
        </div>
      </nav>
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
              <a href="#s2" className="btn-primary">
                {"See Where It Breaks "}
                <span className="btn-arrow">{"→"}</span>
              </a>
              <a href="#s5" className="btn-secondary">
                {"Talk to Us "}
                <span className="btn-arrow">{"→"}</span>
              </a>
            </div>
          </div>
          <div className="contra-wrap">
            <div className="panel-label">{"Same root cause · Three ways it shows up"}</div>
            <div className="contra-card">
              <div className="card-header">
                <span className="ch-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.4" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                </span>
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
                  <div className="pattern-flow">
                    <svg viewBox="0 0 90 32" fill="none">
                      <rect x="2" y="2" width="11" height="8" rx="2.5" stroke="#6B62D6" strokeWidth="1.2" />
                      <rect x="5" y="3.8" width="5" height="4.4" rx="0.8" stroke="#6B62D6" strokeWidth="0.8" />
                      <path d="M6.2 5.2h2.6M6.2 6.4h2.6M6.2 7.4h1.6" stroke="#6B62D6" strokeWidth="0.7" strokeLinecap="round" />
                      <rect x="2" y="12" width="11" height="8" rx="2.5" stroke="#6B62D6" strokeWidth="1.2" />
                      <rect x="5" y="13.8" width="5" height="4.4" rx="0.8" stroke="#6B62D6" strokeWidth="0.8" />
                      <path d="M6.2 15.2h2.6M6.2 16.4h2.6M6.2 17.4h1.6" stroke="#6B62D6" strokeWidth="0.7" strokeLinecap="round" />
                      <rect x="2" y="22" width="11" height="8" rx="2.5" stroke="#6B62D6" strokeWidth="1.2" />
                      <rect x="5" y="23.8" width="5" height="4.4" rx="0.8" stroke="#6B62D6" strokeWidth="0.8" />
                      <path d="M6.2 25.2h2.6M6.2 26.4h2.6M6.2 27.4h1.6" stroke="#6B62D6" strokeWidth="0.7" strokeLinecap="round" />
                      <path d="M13 6Q45 6 65.5 14.5" stroke="rgba(73,172,181,0.45)" strokeWidth="1.1" strokeDasharray="2 3" strokeLinecap="round" />
                      <path d="M13 16H65.5" stroke="rgba(73,172,181,0.45)" strokeWidth="1.1" strokeDasharray="2 3" strokeLinecap="round" />
                      <path d="M13 26Q45 26 65.5 17.5" stroke="rgba(73,172,181,0.45)" strokeWidth="1.1" strokeDasharray="2 3" strokeLinecap="round" />
                      <circle cx="74" cy="16" r="7" stroke="#E4506B" strokeWidth="1.6" />
                      <path d="M71.4 13.4l5.2 5.2M76.6 13.4l-5.2 5.2" stroke="#E4506B" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
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
                  <div className="pattern-flow">
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
                  <div className="pattern-flow">
                    <svg viewBox="0 0 90 32" fill="none">
                      <circle cx="11.5" cy="17" r="5.6" stroke="#6E67B0" strokeWidth="1.3" />
                      <circle cx="11.5" cy="15.9" r="1.9" stroke="#6E67B0" strokeWidth="1" />
                      <path d="M11.5 17.8v2.2" stroke="#6E67B0" strokeWidth="1" strokeLinecap="round" />
                      <rect x="33" y="4" width="27" height="25" rx="6" stroke="rgba(73,172,181,0.45)" strokeWidth="1.1" strokeDasharray="2 3" strokeLinecap="round" />
                      <path d="M14.8 12.6C19.5 5.2 27.5 3.6 35.2 5.3" stroke="rgba(73,172,181,0.45)" strokeWidth="1.1" strokeDasharray="2 3" strokeLinecap="round" />
                      <path d="M17.2 17H33" stroke="rgba(73,172,181,0.45)" strokeWidth="1.1" strokeDasharray="2 3" strokeLinecap="round" />
                      <path d="M14.8 21.4C19.5 28.6 27.5 29.9 35.2 27.7" stroke="rgba(73,172,181,0.45)" strokeWidth="1.1" strokeDasharray="2 3" strokeLinecap="round" />
                      <circle cx="33" cy="12" r="0.8" fill="rgba(73,172,181,0.7)" />
                      <circle cx="60" cy="13" r="0.8" fill="rgba(73,172,181,0.7)" />
                      <circle cx="52" cy="29" r="0.8" fill="rgba(73,172,181,0.7)" />
                      <path d="M60 17h6.5" stroke="rgba(73,172,181,0.45)" strokeWidth="1.1" strokeDasharray="2 3" strokeLinecap="round" />
                      <path d="M68.5 17h2.2" stroke="rgba(228,80,107,0.8)" strokeWidth="1.2" strokeLinecap="round" />
                      <circle cx="78.5" cy="17" r="7" stroke="#E4506B" strokeWidth="1.6" />
                      <path d="M75.9 14.4l5.2 5.2M81.1 14.4l-5.2 5.2" stroke="#E4506B" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
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
        <div className="s2-inner">
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
      {/* S3 HOW WE WORK */}
      <section id="s3">
        <div className="s3-inner">
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
                {"Every engagement draws on four products, Procurement360, Data360, Portfolio Management360, and Governance360, each built on the same nine-module diagnostic sequence, from source data classification through to business case and roadmap. The products are the scaffold. What we bring is the judgment to know which findings matter, which numbers are telling the truth, and what to do about it first."}
              </div>
              <a className="case-cta" href="/products.html" style={{ marginTop: "16px" }}>
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
      {/* S4 RESULTS */}
      <section id="s4">
        <div className="s4-inner">
          <div className="section-tag">{"Results"}</div>
          <div className="sh-light" style={{ marginBottom: "6px" }}>
            {"It has worked before."}
            <br />
            <span>{"Here is what that looked like."}</span>
          </div>
          <div style={{ fontSize: "14px", color: "rgba(45,43,85,0.82)", lineHeight: "1.65", marginBottom: "26px", maxWidth: "520px" }}>
            {"Three situations. Three different regions. The same gap between what the data showed and what was actually happening, and the same outcome when someone stayed long enough to close it."}
          </div>
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
          <div className="s4-divider" />
          <div className="case-note-solo">
            <div className="case-note-label">{"Case studies"}</div>
            <div className="case-note-num">
              {"18 "}
              <span>{"total"}</span>
            </div>
            <div className="case-note-text">
              {"Across financial services, commercial real estate, logistics, technology, and industrial sectors. The three above are a representative sample. Tell us what you're dealing with below, and we'll send the ones most relevant to your situation, or set up time to talk it through."}
            </div>
            <a className="case-cta" href="#s5">
              {"Get the relevant case studies, or start a conversation "}
              <span className="case-arrow">{"→"}</span>
            </a>
          </div>
        </div>
      </section>
      {/* S5 CONTACT */}
      <section id="s5">
        <div className="s5-gl" />
        <div className="s5-pg" />
        <div className="s5-inner">
          <div>
            <div className="s5-tag">{"Start here"}</div>
            <div className="s5-heading">
              {"If you recognise"}
              <br />
              {"the problem,"}
              <br />
              <span>{"let's talk about it."}</span>
            </div>
            <div className="s5-body">
              {"Tell us what you're dealing with. We'll follow up by email or phone with whichever is the better next step. The case studies closest to your situation, or a short conversation. Either way, it starts with the same form."}
            </div>
            <div className="what-it-is">
              <div className="wit-label">{"If it turns into a conversation"}</div>
              <div className="wit-row">
                <div className="wit-check" />
                <div className="wit-text">
                  <strong>{"30 minutes."}</strong>
                  {" No more unless you want to continue."}
                </div>
              </div>
              <div className="wit-row">
                <div className="wit-check" />
                <div className="wit-text">
                  <strong>{"No deck."}</strong>
                  {" We listen first."}
                </div>
              </div>
              <div className="wit-row">
                <div className="wit-check" />
                <div className="wit-text">
                  <strong>{"No proposal."}</strong>
                  {" We will tell you honestly whether this is something we can help with."}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="contact-card">
              <div className="cc-head">
                <div className="cc-name">{"Start the conversation"}</div>
                <div className="cc-role">{"See what others miss"}</div>
              </div>
              <form onSubmit={submitContactForm}>
                <div className="cc-form">
                  <div className="cc-field">
                    <div className="cc-label">{"Your name"}</div>
                    <input className="cc-input" type="text" placeholder="Name" required value={contactForm.name} onChange={updateContactField('name')} />
                  </div>
                  <div className="cc-field">
                    <div className="cc-label">{"Your email"}</div>
                    <input className="cc-input" type="email" placeholder="email@company.com" required value={contactForm.email} onChange={updateContactField('email')} />
                  </div>
                  <div className="cc-field">
                    <div className="cc-label">{"Your phone (optional)"}</div>
                    <input className="cc-input" type="tel" placeholder="Include country code" value={contactForm.phone} onChange={updateContactField('phone')} />
                  </div>
                  <div className="cc-field">
                    <div className="cc-label">{"What you are dealing with"}</div>
                    <textarea className="cc-textarea" placeholder="A few lines is enough. Tell us the situation, or just ask for case studies. We'll read it before we get back to you." required value={contactForm.message} onChange={updateContactField('message')} />
                  </div>
                </div>
                {contactStatus === 'success' && (
                  <div className="cc-status success">{"Thanks — we've got it and will follow up soon."}</div>
                )}
                {contactStatus === 'error' && (
                  <div className="cc-status error">{contactError}</div>
                )}
                <button className="cc-submit" type="submit" disabled={contactStatus === 'sending'}>
                  {contactStatus === 'sending' ? "Sending…" : "Get in touch →"}
                </button>
              </form>
              <div className="cc-pdpa">
                {"We will use your details to follow up by email or phone, with relevant case studies, a conversation, or both. We will not share your information with third parties."}
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer">
          <div className="foot-brand">{"Simplicytas"}</div>
          <div className="foot-links">
            <a className="foot-link" href="/privacy.html">{"Privacy policy"}</a>
            <a className="foot-link" href="/terms.html">{"Terms of use"}</a>
            <a className="foot-link" href="/cookies.html">{"Cookie policy"}</a>
            <a className="foot-link" href="mailto:hello@simplicytas.com">{"hello@simplicytas.com"}</a>
          </div>
        </div>
      </section>
    </>
  );
}
