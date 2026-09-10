const skillCategories = [
  {
    title: "Cloud",
    skills: [
      "AWS",
      "EC2",
      "VPC",
      "S3",
      "IAM",
      "RDS",
      "EKS",
      "CloudWatch"
    ]
  },
  {
    title: "DevOps",
    skills: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Git",
      "GitHub",
      "Terraform",
      "Ansible",
      "CI/CD"
    ]
  },
  {
    title: "Monitoring",
    skills: [
      "Dynatrace",
      "Prometheus",
      "Grafana",
      "CloudWatch"
    ]
  },
  {
    title: "Operating Systems",
    skills: [
      "Linux",
      "Windows"
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="section">

      <div className="container">

        <p className="section-subtitle">
          MY SKILLS
        </p>

        <h2 className="section-title">
          Technologies I Work With
        </h2>

        <div className="skills-grid">

          {skillCategories.map((category) => (
            <div className="skill-card" key={category.title}>

              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;
