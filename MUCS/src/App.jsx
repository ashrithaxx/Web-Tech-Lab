import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Navbar, Footer } from './Layout.jsx'

// ---------- Small shared pieces ----------
function Banner({ title, subtitle }) {
  return (
    <section className="page-banner">
      <div className="page-banner-inner"><h1>{title}</h1>{subtitle && <p className="page-subtitle">{subtitle}</p>}</div>
    </section>
  )
}
function CardGrid({ items, cols = 'three-col' }) {
  return (
    <div className={`card-grid ${cols}`}>
      {items.map((i) => <div className="card" key={i.title}><h3>{i.title}</h3><p>{i.text}</p></div>)}
    </div>
  )
}

// ---------- Home ----------
function Home() {
  const programs = [
    { title: 'Undergraduate', text: 'Modern programs in computer science and related disciplines.', to: '/academics/undergraduate' },
    { title: 'Postgraduate', text: 'Advanced programs in research and emerging technologies.', to: '/academics/postgraduate' },
    { title: 'PhD', text: 'Research-driven doctoral programs.', to: '/academics/phd' },
  ]
  const researchAreas = ['Artificial Intelligence', 'Machine Learning', 'Cybersecurity', 'Data Science', 'Computer Vision']
  const campusLife = [
    { title: 'Innovation Labs', text: 'Maker spaces for applied research and prototyping.' },
    { title: 'Student Clubs', text: 'Technical, cultural, and entrepreneurial societies.' },
    { title: 'Sports & Recreation', text: 'Courts, fields, and fitness facilities.' },
    { title: 'Library', text: 'A quiet home for study and research.' },
  ]
  const stats = [
    { value: '95%', label: 'Placement Rate' },
    { value: '120+', label: 'Recruiting Companies' },
    { value: '15 LPA', label: 'Highest Package' },
    { value: '40+', label: 'Research & Industry Partners' },
  ]
  return (
    <>
      <section className="hero" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=1920&q=80)" }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Madras University of Computer Science</p>
          <h1 className="hero-title">Advancing Knowledge. Creating Impact.</h1>
          <div className="hero-actions">
            <Link to="/academics" className="btn btn-primary">Explore Academics</Link>
            <Link to="/admissions" className="btn btn-outline">Apply Now</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner about-grid">
          <div>
            <p className="eyebrow">About MUCS</p>
            <h2>A community built around ideas</h2>
            <p className="body-text">MUCS is focused on computer science, artificial intelligence, data science, cybersecurity, and emerging technologies.</p>
            <Link to="/about" className="btn btn-primary">Discover MUCS</Link>
          </div>
          <div className="about-figure" />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">Academic Programs</p>
          <h2>Choose your path</h2>
          <div className="card-grid three-col">
            {programs.map((p) => (
              <div className="card" key={p.title}><h3>{p.title}</h3><p>{p.text}</p><Link to={p.to} className="card-link">Learn more →</Link></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section research-section">
        <div className="section-inner">
          <p className="eyebrow">Research</p>
          <h2 className="light-heading">Where discovery happens</h2>
          <div className="chip-row">{researchAreas.map((a) => <span className="chip" key={a}>{a}</span>)}</div>
          <Link to="/research" className="btn btn-outline btn-light">Explore Research</Link>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">Campus Life</p>
          <h2>Life beyond the classroom</h2>
          <CardGrid items={campusLife} />
        </div>
      </section>

      <section className="section stats-section">
        <div className="section-inner stats-grid">
          {stats.map((s) => <div className="stat" key={s.label}><span className="stat-value">{s.value}</span><span className="stat-label">{s.label}</span></div>)}
        </div>
      </section>
    </>
  )
}

// ---------- About ----------
function About() {
  const cards = [
    { title: 'Vision', text: 'To be a globally respected center for computing education and research.' },
    { title: 'Mission', text: 'To nurture engineers who solve real-world problems with rigor and integrity.' },
    { title: 'Why MUCS', text: 'Small class sizes, active research labs, and strong industry partnerships.' },
    { title: 'Our Values', text: 'Curiosity, discipline, collaboration, and lifelong learning.' },
  ]
  return (
    <>
      <Banner title="About MUCS" subtitle="Built on curiosity, rigor, and impact." />
      <section className="section"><div className="section-inner narrow">
        <p className="body-text">Madras University of Computer Science was founded to bring together students and researchers who want to shape the future of computing.</p>
        <CardGrid items={cards} cols="two-col" />
      </div></section>
    </>
  )
}

// ---------- Academics ----------
function Academics() {
  const levels = [
    { title: 'Undergraduate', text: 'Four-year programs building strong technical foundations.', to: '/academics/undergraduate' },
    { title: 'Postgraduate', text: 'Two-year programs for advanced specialization.', to: '/academics/postgraduate' },
    { title: 'PhD', text: 'Doctoral research across core and emerging areas.', to: '/academics/phd' },
  ]
  return (
    <>
      <Banner title="Programs at MUCS" />
      <section className="section"><div className="section-inner">
        <div className="card-grid three-col">
          {levels.map((l) => (
            <div className="card" key={l.title}><h3>{l.title}</h3><p>{l.text}</p><Link to={l.to} className="card-link">View programs →</Link></div>
          ))}
        </div>
      </div></section>
    </>
  )
}
function ProgramLevel({ title, banner, items }) {
  return (
    <>
      <Banner title={banner} />
      <section className="section"><div className="section-inner narrow">
        <ul className="program-list">{items.map((p) => <li key={p}>{p}</li>)}</ul>
      </div></section>
    </>
  )
}
const Undergraduate = () => <ProgramLevel banner="Undergraduate Programs" items={['B.Tech Computer Science', 'B.Tech Artificial Intelligence & Data Science', 'B.Tech Cybersecurity']} />
const Postgraduate = () => <ProgramLevel banner="Postgraduate Programs" items={['M.Tech Computer Science', 'M.Tech Artificial Intelligence', 'M.Tech Data Science']} />
function PhD() {
  return (
    <>
      <Banner title="Doctoral Research" />
      <section className="section"><div className="section-inner narrow">
        <p className="body-text">The PhD program trains researchers to pursue original work at the frontier of computing.</p>
        <div className="chip-row">{['AI', 'Computer Vision', 'Machine Learning', 'Cybersecurity', 'Data Science'].map((a) => <span className="chip chip-dark" key={a}>{a}</span>)}</div>
      </div></section>
    </>
  )
}

// ---------- Admissions ----------
function Admissions() {
  return (
    <>
      <Banner title="Join MUCS" />
      <section className="section"><div className="section-inner narrow">
        <h2>Why MUCS</h2>
        <p className="body-text">MUCS offers focused programs, active research labs, and a supportive community.</p>
        <div className="card-grid two-col">
          <Link to="/admissions/eligibility" className="card"><h3>Eligibility →</h3><p>Check requirements for each program level.</p></Link>
          <Link to="/admissions/application" className="card"><h3>Application Process →</h3><p>See the step-by-step process.</p></Link>
          <Link to="/admissions/dates" className="card"><h3>Important Dates →</h3><p>Key deadlines for this session.</p></Link>
        </div>
        <Link to="/admissions/application" className="btn btn-primary">Apply Now</Link>
      </div></section>
    </>
  )
}
function Eligibility() {
  const rows = [
    { level: 'Undergraduate', req: '10+2 or equivalent with relevant subjects' },
    { level: 'Postgraduate', req: "Recognized Bachelor's degree in a relevant discipline" },
    { level: 'PhD', req: "Relevant Master's degree and research proposal" },
  ]
  return (
    <>
      <Banner title="Eligibility" />
      <section className="section"><div className="section-inner narrow">
        <div className="table-list">{rows.map((r) => <div className="table-row" key={r.level}><span className="table-label">{r.level}</span><span>{r.req}</span></div>)}</div>
      </div></section>
    </>
  )
}
function Application() {
  const steps = [
    { number: '01', title: 'Register', text: 'Create your MUCS applicant account.' },
    { number: '02', title: 'Submit Application', text: 'Complete the form and upload documents.' },
    { number: '03', title: 'Selection Process', text: 'Shortlisted applicants proceed to evaluation.' },
  ]
  return (
    <>
      <Banner title="How to Apply" />
      <section className="section"><div className="section-inner">
        <div className="steps-row">{steps.map((s) => <div className="step-card" key={s.number}><span className="step-number">{s.number}</span><h3>{s.title}</h3><p>{s.text}</p></div>)}</div>
      </div></section>
    </>
  )
}
function ImportantDates() {
  const dates = [
    { label: 'Application Opens', value: '10 January' },
    { label: 'Application Deadline', value: '30 April' },
    { label: 'Entrance Examination', value: '15 May' },
    { label: 'Results', value: '30 May' },
  ]
  return (
    <>
      <Banner title="Key Dates" />
      <section className="section"><div className="section-inner narrow">
        <div className="table-list">{dates.map((d) => <div className="table-row" key={d.label}><span className="table-label">{d.label}</span><span>{d.value}</span></div>)}</div>
      </div></section>
    </>
  )
}

// ---------- Research ----------
function Research() {
  return (
    <>
      <Banner title="Research at MUCS" />
      <section className="section"><div className="section-inner narrow">
        <h2>Research Highlights</h2>
        <ul className="program-list">
          <li>AI-driven diagnostics for rural healthcare access</li>
          <li>Privacy-preserving machine learning for financial systems</li>
          <li>Energy-efficient computer vision for edge devices</li>
        </ul>
        <div className="card-grid two-col">
          <Link to="/research/areas" className="card"><h3>Research Areas →</h3><p>Explore the fields our labs work in.</p></Link>
          <Link to="/research/publications" className="card"><h3>Publications →</h3><p>Recent MUCS research output.</p></Link>
        </div>
      </div></section>
    </>
  )
}
function ResearchAreas() {
  const areas = [
    { title: 'Artificial Intelligence', text: 'Systems that reason, learn, and adapt.' },
    { title: 'Machine Learning', text: 'Algorithms that improve from data at scale.' },
    { title: 'Cybersecurity', text: 'Defending systems against evolving threats.' },
    { title: 'Data Science', text: 'Extracting insight from complex datasets.' },
    { title: 'Computer Vision', text: 'Teaching machines to interpret visual data.' },
    { title: 'Natural Language Processing', text: 'Enabling computers to understand language.' },
  ]
  return (
    <>
      <Banner title="Research Areas" />
      <section className="section"><div className="section-inner"><CardGrid items={areas} /></div></section>
    </>
  )
}
function Publications() {
  const pubs = [
    { title: 'Deep Learning for Visual Intelligence', source: 'MUCS Research Journal, 2026' },
    { title: 'Secure AI Systems for Modern Networks', source: 'MUCS Research Journal, 2026' },
    { title: 'Machine Learning for Sustainable Computing', source: 'MUCS Research Journal, 2025' },
  ]
  return (
    <>
      <Banner title="Publications" />
      <section className="section"><div className="section-inner narrow">
        <div className="table-list">{pubs.map((p) => <div className="table-row" key={p.title}><span className="table-label">{p.title}</span><span>{p.source}</span></div>)}</div>
      </div></section>
    </>
  )
}

// ---------- Campus Life / Placements ----------
function CampusLife() {
  const items = [
    { title: 'Student Clubs', text: 'Technical, cultural, and entrepreneurial societies.' },
    { title: 'Sports & Recreation', text: 'Courts, fields, and fitness facilities.' },
    { title: 'Library', text: 'A quiet home for study and research.' },
    { title: 'Hostels', text: 'Comfortable on-campus housing.' },
    { title: 'Innovation Labs', text: 'Maker spaces for applied research.' },
    { title: 'Events', text: 'Tech fests, lectures, and cultural celebrations.' },
  ]
  return (
    <>
      <Banner title="Life at MUCS" />
      <section className="section"><div className="section-inner"><CardGrid items={items} /></div></section>
    </>
  )
}
function Placements() {
  const stats = [
    { value: '95%', label: 'Placement Rate' },
    { value: '120+', label: 'Recruiting Companies' },
    { value: '15 LPA', label: 'Highest Package' },
    { value: '40+', label: 'Research & Industry Partners' },
  ]
  const recruiters = ['MUCS Technologies', 'Vertex Labs', 'Nova Systems', 'Astra Analytics']
  return (
    <>
      <Banner title="Careers & Placements" />
      <section className="section"><div className="section-inner stats-grid">
        {stats.map((s) => <div className="stat stat-light" key={s.label}><span className="stat-value">{s.value}</span><span className="stat-label">{s.label}</span></div>)}
      </div></section>
      <section className="section"><div className="section-inner narrow">
        <h2>Recruiting Partners</h2>
        <div className="chip-row">{recruiters.map((r) => <span className="chip" key={r}>{r}</span>)}</div>
        <h2 style={{ marginTop: '2.5rem' }}>Career Development</h2>
        <p className="body-text">Career Services offers resume workshops, mock interviews, and internship support.</p>
      </div></section>
    </>
  )
}

// ---------- Contact (useState + event handling) ----------
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Thank you for contacting MUCS!')
    setForm({ name: '', email: '', subject: '', message: '' })
  }
  return (
    <>
      <Banner title="Get in Touch" />
      <section className="section">
        <div className="section-inner contact-grid">
          <div className="contact-info">
            <h3>Madras University of Computer Science</h3>
            <p>Chennai, Tamil Nadu, India</p>
            <p>contact@mucs.edu</p>
            <p>+91 44 1234 5678</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name<input type="text" name="name" value={form.name} onChange={handleChange} required /></label>
            <label>Email<input type="email" name="email" value={form.email} onChange={handleChange} required /></label>
            <label>Subject<input type="text" name="subject" value={form.subject} onChange={handleChange} required /></label>
            <label>Message<textarea name="message" rows="5" value={form.message} onChange={handleChange} required /></label>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    </>
  )
}

// ---------- App / Routes ----------
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/academics/undergraduate" element={<Undergraduate />} />
          <Route path="/academics/postgraduate" element={<Postgraduate />} />
          <Route path="/academics/phd" element={<PhD />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/admissions/eligibility" element={<Eligibility />} />
          <Route path="/admissions/application" element={<Application />} />
          <Route path="/admissions/dates" element={<ImportantDates />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/areas" element={<ResearchAreas />} />
          <Route path="/research/publications" element={<Publications />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
