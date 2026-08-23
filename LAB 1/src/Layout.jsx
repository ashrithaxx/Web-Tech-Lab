import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

// Reusable Dropdown component — receives title & items via props,
// uses useState + onClick to toggle open/closed.
function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="dropdown-trigger" onClick={() => setIsOpen(!isOpen)}>
        {title} <span className={`caret ${isOpen ? 'open' : ''}`}>▾</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setIsOpen(false)}>{item.label}</NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

const academicItems = [
  { label: 'Undergraduate', path: '/academics/undergraduate' },
  { label: 'Postgraduate', path: '/academics/postgraduate' },
  { label: 'PhD', path: '/academics/phd' },
]
const admissionItems = [
  { label: 'Eligibility', path: '/admissions/eligibility' },
  { label: 'Application Process', path: '/admissions/application' },
  { label: 'Important Dates', path: '/admissions/dates' },
]
const researchItems = [
  { label: 'Research Areas', path: '/research/areas' },
  { label: 'Publications', path: '/research/publications' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand" onClick={() => setMobileOpen(false)}>
          <span className="brand-text">
            <span className="brand-name">MUCS</span>
            <span className="brand-sub">Madras University of Computer Science</span>
          </span>
        </NavLink>
        <button className="nav-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
          <span /><span /><span />
        </button>
        <nav className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <NavLink to="/about" onClick={() => setMobileOpen(false)}>About Us</NavLink>
          <Dropdown title="Academics" items={academicItems} />
          <Dropdown title="Admissions" items={admissionItems} />
          <Dropdown title="Research" items={researchItems} />
          <NavLink to="/campus-life" onClick={() => setMobileOpen(false)}>Campus Life</NavLink>
          <NavLink to="/placements" onClick={() => setMobileOpen(false)}>Placements</NavLink>
          <NavLink to="/contact" className="nav-cta" onClick={() => setMobileOpen(false)}>Contact Us</NavLink>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <span className="footer-title">MUCS</span>
          <p>Madras University of Computer Science</p>
          <p className="footer-tagline">Advancing Knowledge. Creating Impact.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/about">About Us</Link>
          <Link to="/academics">Academics</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/research">Research</Link>
          <Link to="/placements">Placements</Link>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Chennai, Tamil Nadu, India</p>
          <p>contact@mucs.edu</p>
          <p>+91 44 1234 5678</p>
        </div>
        <div className="footer-col">
          <h4>Follow</h4>
          <div className="footer-social"><span>LinkedIn</span><span>Twitter</span><span>Instagram</span></div>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Madras University of Computer Science. All rights reserved.</div>
    </footer>
  )
}
