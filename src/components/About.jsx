const About = () => {
  const stats = [
    { number: '2+', label: 'Years Learning' },
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies' },
    { number: '100%', label: 'Dedication' }
  ]

  const highlights = [
    {
      icon: '🎓',
      title: 'Fresh Graduate',
      description: 'Recently graduated with a strong foundation in computer science and web development.'
    },
    {
      icon: '💻',
      title: 'Full Stack Skills',
      description: 'Proficient in both frontend and backend development with modern technologies.'
    },
    {
      icon: '🚀',
      title: 'Quick Learner',
      description: 'Passionate about learning new technologies and adapting to industry trends.'
    },
    {
      icon: '🎯',
      title: 'Goal-Oriented',
      description: 'Focused on delivering quality solutions and continuous improvement.'
    }
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate developer with a fresh perspective and eagerness to create impactful web solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Hello! I'm Tehreem Ehsan
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a recent computer science graduate with a passion for web development. 
                  During my studies, I discovered my love for creating digital experiences that 
                  combine functionality with beautiful design.
                </p>
                <p>
                  My journey began with learning the fundamentals of programming, and I quickly 
                  gravitated towards web technologies. I've spent countless hours mastering the 
                  MERN stack and WordPress development, building projects that showcase my growing skills.
                </p>
                <p>
                  I believe in writing clean, efficient code and staying up-to-date with the latest 
                  industry trends. I'm excited to bring my fresh perspective and enthusiasm to a 
                  dynamic development team.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{highlight.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ready to Start Something Amazing?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always excited to discuss new opportunities and collaborate on interesting projects.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About