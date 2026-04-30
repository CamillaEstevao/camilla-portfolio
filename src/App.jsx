import { motion } from "framer-motion";
import "./index.css";
import { useForm, ValidationError } from "@formspree/react";

const projects = [
  {
    title: "Galeria Interativa",
    description:
      "Plataforma para upload e moderação de imagens com interações em tempo real e experiência imersiva.",
    tags: ["React", "TypeScript", "Firebase"],
  },
  {
    title: "Slider Avançado",
    description:
      "Slider moderno, responsivo e com efeitos suaves de transição e destaque visual.",
    tags: ["React", "Tailwind CSS"],
  },
  {
    title: "Clone Mercado Livre",
    description:
      "Clone de interface com foco em responsividade, organização visual e componentes reutilizáveis.",
    tags: ["React", "Styled Components", "API"],
  },
  {
    title: "Portfólio Anterior",
    description:
      "Versão anterior do meu portfólio construída com foco em aprendizado e evolução visual.",
    tags: ["React", "CSS"],
  },
];

const posts = [
  {
    date: "20 MAI 2024",
    title: "Como a consistência transforma resultados no React",
    text: "Dicas práticas para escrever código mais limpo e escalável.",
  },
  {
    date: "10 MAI 2024",
    title: "Gerenciando estado de forma eficiente",
    text: "Entenda como e quando usar cada estratégia no front-end.",
  },
  {
    date: "02 MAI 2024",
    title: "Animações que melhoram a experiência",
    text: "Como microinterações podem fazer diferença no seu projeto.",
  },
];

function SectionTitle({ eyebrow, title, highlight }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>
        {title} <strong>{highlight}</strong>
      </h2>
    </div>
  );
}

function App() {
  const [state, handleSubmit] = useForm("xvzloakg");
  return (
    <div className="site">
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>

      <header className="header">
        <div className="logo">CE</div>

        <nav className="nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#journal">Journal</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href="#contato" className="btn btn-outline">
          Vamos conversar
        </a>
      </header>

      <main className="container">
        <section className="hero" id="inicio">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">Olá, eu sou</span>
            <h1>
              CAMILLA
              <br />
              <strong>ESTEVÃO.</strong>
            </h1>
            <p>
              Transformo ideias em experiências digitais incríveis através de
              interfaces modernas, intuitivas e de alta performance.
            </p>

            <div className="hero-actions">
              <a href="#projetos" className="btn btn-solid">
                Ver projetos
              </a>
              <a href="#sobre" className="btn btn-ghost">
                Sobre mim
              </a>
            </div>

            <div className="stats">
              <div>
                <h3>+2</h3>
                <span>Anos de estudo</span>
              </div>
              <div>
                <h3>+10</h3>
                <span>Projetos concluídos</span>
              </div>
              <div>
                <h3>+4</h3>
                <span>Tecnologias dominadas</span>
              </div>
              <div>
                <h3>100%</h3>
                <span>Dedicação para criar</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-ring"></div>
            <div className="portrait-card">
              <div className="portrait-placeholder">Sua foto aqui</div>
            </div>
            <div className="tech tech-1">React</div>
            <div className="tech tech-2">TypeScript</div>
            <div className="tech tech-3">Tailwind CSS</div>
          </motion.div>
        </section>

        <section className="about grid-2" id="sobre">
          <div className="card about-text">
            <SectionTitle
              eyebrow="Sobre mim"
              title="Prazer, eu sou a"
              highlight="Camilla Estevão"
            />
            <p>
              Sou desenvolvedora front-end apaixonada por criar interfaces que
              conectam pessoas e tecnologia.
            </p>
            <p>
              Gosto de transformar ideias em aplicações modernas, intuitivas e
              com alta performance. Atualmente foco em React, TypeScript e no
              ecossistema front-end moderno.
            </p>

            <a href="#" className="btn btn-outline">
              Baixar currículo
            </a>
          </div>

          <div className="card about-photo">
            <div className="photo-placeholder">Sua foto aqui</div>
          </div>
        </section>

        <section className="highlights">
          <div className="mini-card">
            <h3>Foco em criar valor</h3>
            <p>Mais do que código, penso em impacto e resultado real.</p>
          </div>
          <div className="mini-card">
            <h3>Atenção aos detalhes</h3>
            <p>Interfaces bonitas e funcionais que encantam no uso.</p>
          </div>
          <div className="mini-card">
            <h3>Aprendizado contínuo</h3>
            <p>Estou sempre evoluindo minhas habilidades.</p>
          </div>
          <div className="mini-card">
            <h3>Colaboração</h3>
            <p>Acredito no poder da troca de conhecimento.</p>
          </div>
        </section>

        <section id="projetos" className="section-block">
          <div className="section-header">
            <SectionTitle
              eyebrow="Projetos"
              title="Projetos que criam"
              highlight="impacto"
            />
            <a href="#" className="btn btn-outline">
              Ver mais
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                className="card project-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="project-thumb"></div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="project-detail grid-2">
          <div className="card detail-copy">
            <span className="eyebrow">Galeria Interativa</span>
            <h2>Plataforma de galeria com upload e moderação em tempo real.</h2>

            <div className="detail-group">
              <h3>O problema</h3>
              <p>
                Faltava uma plataforma simples e intuitiva que combinasse upload
                de imagens, moderação e experiência visual agradável.
              </p>
            </div>

            <div className="detail-group">
              <h3>A solução</h3>
              <p>
                Desenvolvi uma aplicação com upload, autenticação, moderação e
                galeria interativa com visual moderno.
              </p>
            </div>

            <div className="detail-group">
              <h3>Resultados</h3>
              <ul>
                <li>Experiência rápida e intuitiva</li>
                <li>Upload e moderação em tempo real</li>
                <li>Interface moderna e responsiva</li>
              </ul>
            </div>

            <div className="hero-actions">
              <a href="#" className="btn btn-solid">
                Ver projeto
              </a>
              <a href="#" className="btn btn-ghost">
                Ver código
              </a>
            </div>
          </div>

          <div className="card detail-visual">
            <div className="detail-main-thumb"></div>
            <div className="thumb-row">
              <div className="small-thumb"></div>
              <div className="small-thumb"></div>
              <div className="small-thumb"></div>
            </div>
          </div>
        </section>

        <section id="journal" className="section-block">
          <div className="section-header">
            <SectionTitle
              eyebrow="Journal"
              title="Compartilho o que"
              highlight="aprendo"
            />
            <a href="#" className="btn btn-outline">
              Ver artigos
            </a>
          </div>

          <div className="journal-grid">
            {posts.map((post) => (
              <article key={post.title} className="card journal-card">
                <span className="post-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <a href="#">Ler artigo</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="contact grid-2">
          <div className="card contact-info">
            <SectionTitle
              eyebrow="Contato"
              title="Vamos criar algo"
              highlight="incrível?"
            />
            <p>
              Estou aberta a novas oportunidades e projetos desafiadores. Vamos
              conversar.
            </p>

            <div className="contact-list">
              <div>
                <strong>E-mail</strong>
                <span>camilla.desenvolvedora@gmail.com</span>
              </div>
              <div>
                <strong>LinkedIn</strong>
                <span>www.linkedin.com/in/camillaestevaolodi</span>
              </div>
              <div>
                <strong>GitHub</strong>
                <span>github.com/CamillaEstevao</span>
              </div>
              <div>
                <strong>Localização</strong>
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          <form className="card contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Seu nome" required />
            <input type="email" name="email" placeholder="Seu e-mail" required />
            <textarea
              name="message"
              rows="6"
              placeholder="Conte um pouco sobre o projeto..."
              required
            />
            <button type="submit" className="btn btn-solid" disabled={state.submitting}>
              {state.submitting ? "Enviando..." : "Enviar mensagem"}
            </button>
            {state.succeeded && (
              <p style={{ color: "#4ade80", marginTop: "10px" }}>
                Mensagem enviada com sucesso! 💜
              </p>
            )}
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="logo">CE</div>
        <p>Feito com 💜 e muito café ☕</p>
      </footer>
    </div>
  );
}

export default App;