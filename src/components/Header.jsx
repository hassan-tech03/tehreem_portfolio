import { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`position-fixed top-0 start-0 end-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`} style={{backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'}}>
      <nav className="container">
        <div className="row align-items-center justify-content-between" style={{height: '4rem'}}>
          {/* Logo */}
          <div className="col-auto">
            <h1 className={`text-xl font-bold transition-colors duration-300 mb-0 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Portfolio
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="col-auto d-none d-md-block">
            <div className="d-flex align-items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 border-0 bg-transparent hover-text-blue-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white hover-text-blue-200'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="col-auto d-md-none">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 border-0 ${
                isScrolled ? 'text-gray-700 hover-bg-gray-100' : 'text-white'
              }`}
              style={{backgroundColor: isScrolled && !isMobileMenuOpen ? 'transparent' : 'rgba(255, 255, 255, 0.1)'}}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="d-md-none">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white backdrop-blur-sm rounded-lg mt-2 shadow-lg" style={{backgroundColor: 'rgba(255, 255, 255, 0.95)'}}>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="d-block px-3 py-2 text-base font-medium text-gray-700 hover-text-blue-600 hover-bg-gray-50 rounded-md w-100 text-start transition-colors duration-200 border-0 bg-transparent"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header