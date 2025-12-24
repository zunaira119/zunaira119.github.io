(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=()=>`
<section class="hero">
  <h1>Hi, I’m <span>Zunaira</span></h1>
  <h2>Full Stack Developer</h2>
  <div class="hero-actions">
    <a href="#projects" class="btn primary">View Projects</a>
    <a href="./Zunaira_Javed_CV.pdf" class="btn outline" target="_blank">Download Resume</a>
  </div>
</section>
`,c=["Java","Spring Boot","Node.js","NestJS","PHP","PostgreSQL","MySQL","MongoDB","Redis","Oracle","Microservices","REST APIs","GraphQL","AWS","Azure","Git","Agile/Scrum","Code Reviews","System Design"],l=[{role:"Associate Manager Development / OBDX Software Engineer",company:"Allied Bank Limited ",period:"2024 – Present",description:"Provide technical leadership and mentorship to engineers, supporting architectural decisions."},{role:"Senior Software Engineer",company:"Invozone Pvt. Ltd ",period:"2022 – 2024",description:"Designed and developed scalable, API centric backend systems"},{role:"Senior Software Engineer",company:"Suave Solutions Pvt. Ltd ",period:"2020 – 2022",description:"Developed and maintained backend services using Node.js and PHP."}],d=[{title:"Piqsol",description:"Fractional NFT Marketplace that's Multi-Chain.",live:"https://piqsol.com/"},{title:"Quiz Patente",description:"Online driving license quizzes.",live:"https://www.quizpatente.it/"},{title:"Invohub",description:"Resource Engagement.",live:"https://hub.invozone.com/login"},{title:"ShuftiPro",description:"Identity Verification System",live:"https://shuftipro.com/"},{title:"IslamicHoney",description:"Ecommerce",live:"https://islamichoney.com/"},{title:"LokSujag Admin Panel",description:"CMS",live:"https://admin.loksujag.com/login"},{title:"LokSujag",description:"",live:"https://loksujag.com/"},{title:"Mintsclub",description:"MintsClub is a shared liquidity NFT market smart contract which is used by multiple websites to provide the users the best possible experience.",live:"https://mintsclub.io/"}],p=document.querySelector("#app");p.innerHTML=`
${a()}

<section>
  <h2>About Me</h2>
  <p>
  I’m a Full Stack Developer with 7 years of experience building scalable, high performance web applications. I specialize in designing clean user interfaces, developing robust backend systems, and delivering reliable end to end solutions.

  </p>
</section>

<section>
  <h2>Skills</h2>
  <div class="skills">
    ${c.map(i=>`<span>${i}</span>`).join("")}
  </div>
</section>

<section>
  <h2>Experience</h2>
  ${l.map(i=>`
    <div class="timeline">
      <h3>${i.role} — ${i.company}</h3>
      <small>${i.period}</small>
      <p>${i.description}</p>
    </div>
  `).join("")}
</section>

<section id="projects">
  <h2>Projects</h2>
  <div class="projects">
    ${d.map(i=>`
      <div class="card">
        <h3>${i.title}</h3>
        <p>${i.description}</p>
        <div class="links">
          <a class="card-colour" href="${i.github}" target="_blank">GitHub</a>
          ${i.live?`<a class="card-colour" href="${i.live}" target="_blank">Live</a>`:""}
        </div>
      </div>
    `).join("")}
  </div>
</section>

    <h2>Contact</h2>
         <p>Email: zunaira0107@gmail.com</p>
     <p>Mobile No: +923096100358 </p>
     <p>
       LinkedIn:
       <a href="https://www.linkedin.com/in/zunaira-javed-5576bb98/" target="_blank">
         Zunaira Javed
       </a>
  </p>
     <p>
       Github:
       <a href="https://github.com/zunaira119" target="_blank">
         Zunaira Javed
       </a>
  </p>
  
`;
