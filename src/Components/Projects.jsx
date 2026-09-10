const projects = [
  {
    title: "CI/CD Pipeline on Amazon EKS",
    description:
      "Containerized a React portfolio application and deployed it to Amazon EKS using an automated CI/CD pipeline.",
    technologies:
      "React • Docker • Jenkins • Trivy • Kubernetes • AWS EKS",
    highlights: [
      "Dockerized application",
      "Jenkins CI/CD pipeline",
      "Trivy security scanning",
      "Docker Hub image registry",
      "Kubernetes deployment",
      "AWS EKS hosting"
    ]
  },
  {
    title: "AWS Infrastructure with Terraform",
    description:
      "Provisioned AWS infrastructure using Terraform and followed Infrastructure as Code practices.",
    technologies:
      "Terraform • AWS • VPC • EC2 • IAM • S3",
    highlights: [
      "VPC and subnet configuration",
      "EC2 infrastructure",
      "Security Groups",
      "IAM configuration",
      "Terraform state management"
    ]
  }
];

function Projects() {
  return (
    <section id="projects" className="section">

      <div className="container">

        <p className="section-subtitle">
          MY WORK
        </p>

        <h2 className="section-title">
          DevOps Projects
        </h2>

        <div className="projects-grid">

          {projects.map((project) => (
            <div className="project-card" key={project.title}>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <p className="technologies">
                {project.technologies}
              </p>

              <ul>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;
