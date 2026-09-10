function Hero() {
  return (
    <section id="home" className="hero">

      <div className="container hero-content">

        <div className="hero-text">

          <p className="hero-intro">
            Hi, I'm Tejal Tidake
          </p>

          <h1>
            AWS DevOps
            <span> Engineer</span>
          </h1>

          <p className="hero-description">
            I build, automate and deploy reliable cloud
            infrastructure and CI/CD pipelines using AWS,
            Kubernetes, Docker and Terraform.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
