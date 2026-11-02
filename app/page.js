const features = [
  {
    title: "Brand identity",
    description: "Elegant digital experiences designed to reflect a modern and memorable brand.",
  },
  {
    title: "Web development",
    description: "Fast, responsive, and conversion-focused builds with clean user experience.",
  },
  {
    title: "Creative direction",
    description: "Strategic content and design that help your message stand out clearly.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <nav className="topbar">
          <div className="brand">heartzouk</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="eyebrow">Creative digital studio</div>
          <h1>Build a bold online presence.</h1>
          <p>
            We create modern websites and brand experiences that help businesses look polished,
            trustworthy, and memorable across the web.
          </p>
          <div className="cta-row">
            <a href="#contact" className="primary-btn">Get started</a>
            <a href="#services" className="secondary-btn">Our services</a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-heading">
          <span>About</span>
          <h2>Made for brands that want to stand out.</h2>
        </div>
        <div className="about-grid">
          <div className="panel">
            <p>
              heartzouk is a concept-driven design and development studio focused on premium web
              experiences. We combine strategy, storytelling, and technical execution to bring a
              clean and bold identity online.
            </p>
          </div>
          <div className="stats">
            <div>
              <strong>01</strong>
              <span>Strategy-first thinking</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Responsive design systems</span>
            </div>
            <div>
              <strong>03</strong>
              <span>High-converting layouts</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-heading">
          <span>Services</span>
          <h2>What we do.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-icon">✦</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <span>Contact</span>
          <h2>Let’s build something memorable.</h2>
        </div>
        <div className="contact-box">
          <p>hello@heartzouk.top</p>
          <a href="mailto:hello@heartzouk.top">Send an email</a>
        </div>
      </section>
    </main>
  );
}
