const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 85, color: "bg-blue-500" },
        { name: "JavaScript (ES6+)", level: 80, color: "bg-yellow-500" },
        { name: "HTML5 & CSS3", level: 90, color: "bg-orange-500" },
        { name: "Tailwind CSS", level: 85, color: "bg-cyan-500" },
        { name: "Responsive Design", level: 88, color: "bg-green-500" },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 75, color: "bg-green-600" },
        { name: "Express.js", level: 78, color: "bg-gray-600" },
        { name: "MongoDB", level: 70, color: "bg-green-500" },
        { name: "REST APIs", level: 80, color: "bg-blue-600" },
        { name: "Authentication", level: 72, color: "bg-purple-500" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 85, color: "bg-gray-800" },
        { name: "WordPress", level: 80, color: "bg-blue-700" },
        { name: "Vite", level: 75, color: "bg-purple-600" },
        { name: "VS Code", level: 90, color: "bg-blue-500" },
        { name: "Figma", level: 65, color: "bg-pink-500" },
      ],
    },
  ];

  const certifications = [
    {
      title: "React Developer Certification",
      issuer: "freeCodeCamp",
      year: "2024",
      icon: "📜",
    },
    {
      title: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      year: "2024",
      icon: "🏆",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2023",
      icon: "🎖️",
    },
  ];

  return (
    <section id="skills" className="py-16 md-py-24 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md-text-4xl font-bold text-gray-900 mb-4">
                Skills & Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A comprehensive overview of my technical skills and the tools I
                use to bring ideas to life
              </p>
            </div>

            {/* Skills Grid */}
            <div className="row mb-16">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="col-12 col-md-6 col-lg-4 mb-4"
                >
                  <div className="card bg-gray-50 p-6 hover-shadow-lg transition-shadow duration-300">
                    <div className="d-flex align-items-center mb-6">
                      <span className="text-2xl me-3">{category.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900 mb-0">
                        {category.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="progress-bar">
                            <div
                              className={`progress-fill ${skill.color} transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Certifications & Achievements
                </h3>
                <p className="text-gray-600">
                  Continuous learning and professional development
                </p>
              </div>

              <div className="row">
                {certifications.map((cert, index) => (
                  <div key={index} className="col-12 col-md-4 mb-4">
                    <div className="card p-6 text-center hover-shadow-md transition-shadow duration-300">
                      <div className="text-3xl mb-3">{cert.icon}</div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-blue-600 font-medium">
                        {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Journey */}
            <div className="mt-16 text-center">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  My Learning Journey
                </h3>
                <div className="row">
                  <div className="col-12 col-md-4 text-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full d-flex align-items-center justify-content-center mx-auto mb-4">
                      <span className="text-2xl">📚</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Foundation
                    </h4>
                    <p className="text-sm text-gray-600">
                      Started with HTML, CSS, and JavaScript fundamentals
                    </p>
                  </div>
                  <div className="col-12 col-md-4 text-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full d-flex align-items-center justify-content-center mx-auto mb-4">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Growth</h4>
                    <p className="text-sm text-gray-600">
                      Mastered React, Node.js, and full-stack development
                    </p>
                  </div>
                  <div className="col-12 col-md-4 text-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full d-flex align-items-center justify-content-center mx-auto mb-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Specialization
                    </h4>
                    <p className="text-sm text-gray-600">
                      Focusing on modern frameworks and best practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
