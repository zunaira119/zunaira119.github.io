import "./style.css";
import { projects } from "./data";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
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
      ${projects
    .map(
      (project) => `
        <div class="card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="links">
            <a href="${project.github}" target="_blank">GitHub</a>
            ${project.live
          ? `<a href="${project.live}" target="_blank">Live Demo</a>`
          : ""
        }
          </div>
        </div>
      `
    )
    .join("")}
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
