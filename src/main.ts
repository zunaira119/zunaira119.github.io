import "./style.css";
import { hero } from "./components/hero";
import { skills, experience, projects } from "./data";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
${hero()}

<section>
  <h2>About Me</h2>
  <p>
  I’m a Full Stack Developer with 7 years of experience building scalable, high performance web applications. I specialize in designing clean user interfaces, developing robust backend systems, and delivering reliable end to end solutions.

  </p>
</section>

<section>
  <h2>Skills</h2>
  <div class="skills">
    ${skills.map(skill => `<span>${skill}</span>`).join("")}
  </div>
</section>

<section>
  <h2>Experience</h2>
  ${experience.map(exp => `
    <div class="timeline">
      <h3>${exp.role} — ${exp.company}</h3>
      <small>${exp.period}</small>
      <p>${exp.description}</p>
    </div>
  `).join("")}
</section>

<section id="projects">
  <h2>Projects</h2>
  <div class="projects">
    ${projects.map(p => `
      <div class="card">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="links">
          <a class="card-colour" href="${p.github}" target="_blank">GitHub</a>
          ${p.live ? `<a class="card-colour" href="${p.live}" target="_blank">Live</a>` : ""}
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
