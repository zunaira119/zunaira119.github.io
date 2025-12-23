(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const l=[{title:"Piqsol",description:"Fractional NFT Marketplace that's Multi-Chain.",live:"https://piqsol.com/"},{title:"Quiz Patente",description:"Online driving license quizzes.",live:"https://www.quizpatente.it/"},{title:"Invohub",description:"Resource Engagement.",live:"https://hub.invozone.com/login"},{title:"ShuftiPro",description:"Identity Verification System",live:"https://shuftipro.com/"},{title:"IslamicHoney",description:"Ecommerce",live:"https://islamichoney.com/"},{title:"LokSujag Admin Panel",description:"CMS",live:"https://admin.loksujag.com/login"},{title:"LokSujag",description:"",live:"https://loksujag.com/"},{title:"Mintsclub",description:"MintsClub is a shared liquidity NFT market smart contract which is used by multiple websites to provide the users the best possible experience.",live:"https://mintsclub.io/"}],a=document.querySelector("#app");a.innerHTML=`
  <header class="header">
    <h1>Zunaira Javed</h1>
    <p>FullStack Developer </p>
  </header>

  <section>
    <h2>About Me</h2>
    <p>
      I’m a Full Stack Developer with 7 years of experience building scalable, high performance web applications. I specialize in designing clean user interfaces, developing robust backend systems, and delivering reliable end to end solutions.
    </p>
  </section>

  <section>
    <h2>Projects</h2>
    <div class="projects">
      ${l.map(t=>`
        <div class="card">
          <h3>${t.title}</h3>
          <p>${t.description}</p>
          <div class="links">
            <a href="${t.github}" target="_blank">GitHub</a>
            ${t.live?`<a href="${t.live}" target="_blank">Live Demo</a>`:""}
          </div>
        </div>
      `).join("")}
    </div>
  </section>

  <section>
    <h2>Contact</h2>
    <p>Email: zunaira0107@gmail.com</p>
    <p>Mobile No: +923096100358 </p>
    <p>
      LinkedIn:
      <a href="https://www.linkedin.com/in/zunaira-javed-5576bb98/" target="_blank">
        Zunaira Javed
      </a>
    </p>
  </section>
`;
