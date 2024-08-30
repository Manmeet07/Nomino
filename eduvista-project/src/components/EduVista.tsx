'use client'

import React, { useState } from 'react'

export default function EduVista() {
  const [email, setEmail] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Signed up with:', email)
    setEmail('')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="edu-vista">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <span className="icon">🎓</span>
            <span className="logo-text">EduVista</span>
          </div>
          <div className="navbar-toggle" onClick={toggleMenu}>
            <span className="icon">☰</span>
          </div>
          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <button className="nav-button">Courses</button>
            <button className="nav-button">About</button>
            <button className="nav-button">Contact</button>
            <button className="nav-button primary">Sign Up</button>
          </div>
        </div>
      </nav>

      <section className="hero">
        <h1>Unlock Your Potential with EduVista</h1>
        <p>Discover a world of knowledge at your fingertips</p>
        <button className="cta-button">Explore Courses</button>
      </section>

      <section className="features">
        <h2>Why Choose EduVista?</h2>
        <div className="feature-grid">
          {[
            { icon: '🎥', title: 'HD Video Courses', description: 'Learn from high-quality, professionally produced video content.' },
            { icon: '💻', title: 'Interactive Coding', description: 'Practice coding in real-time with our built-in IDE.' },
            { icon: '👥', title: 'Community Support', description: 'Join a vibrant community of learners and educators.' },
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.icon} {feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="courses">
        <h2>Featured Courses</h2>
        <div className="course-grid">
          {[
            { title: 'Introduction to Python', description: 'Learn the basics of Python programming', image: '/placeholder.svg?height=200&width=400' },
            { title: 'Web Development Bootcamp', description: 'Master HTML, CSS, and JavaScript', image: '/placeholder.svg?height=200&width=400' },
            { title: 'Data Science Fundamentals', description: 'Explore the world of data analysis', image: '/placeholder.svg?height=200&width=400' },
          ].map((course, index) => (
            <div key={index} className="course-card">
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button className="enroll-button">Enroll Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Start Learning?</h2>
        <p>Join our newsletter and get the latest updates on new courses and special offers.</p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>EduVista</h3>
            <p>Empowering minds, shaping futures.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © 2023 EduVista. All rights reserved.
        </div>
      </footer>

      <style jsx>{`
        .edu-vista {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .navbar {
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .logo-text {
          margin-left: 0.5rem;
        }

        .navbar-toggle {
          display: none;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .navbar-links {
          display: flex;
        }

        .nav-button {
          background: none;
          border: none;
          padding: 0.5rem 1rem;
          margin-left: 1rem;
          cursor: pointer;
        }

        .nav-button.primary {
          background-color: #4a90e2;
          color: white;
          border-radius: 4px;
        }

        .hero {
          background: linear-gradient(to bottom, #e6f2ff, #ffffff);
          text-align: center;
          padding: 4rem 1rem;
        }

        .hero h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .hero p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        .cta-button {
          background-color: #4a90e2;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          border-radius: 4px;
          cursor: pointer;
        }

        .features, .courses {
          padding: 4rem 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .features h2, .courses h2 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .feature-grid, .course-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }

        .feature-card, .course-card {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          padding: 1.5rem;
        }

        .feature-card h3, .course-card h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .course-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .enroll-button {
          background-color: #4a90e2;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          border-radius: 4px;
          cursor: pointer;
          width: 100%;
          margin-top: 1rem;
        }

        .cta {
          background-color: #4a90e2;
          color: white;
          text-align: center;
          padding: 4rem 1rem;
        }

        .cta h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .cta p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        .newsletter-form {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .newsletter-form input {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          border: none;
          border-radius: 4px;
          width: 100%;
          max-width: 300px;
        }

        .newsletter-form button {
          background-color: white;
          color: #4a90e2;
          border: none;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          border-radius: 4px;
          cursor: pointer;
        }

        .footer {
          background-color: #333;
          color: white;
          padding: 2rem 1rem;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .footer-section {
          margin-bottom: 1rem;
        }

        .footer-section h3, .footer-section h4 {
          margin-bottom: 0.5rem;
        }

        .footer-section ul {
          list-style-type: none;
          padding: 0;
        }

        .footer-section ul li {
          margin-bottom: 0.5rem;
        }

        .footer-section ul li a {
          color: #ccc;
          text-decoration: none;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #555;
        }

        @media (max-width: 768px) {
          .navbar-toggle {
            display: block;
          }

          .navbar-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }

          .navbar-links.active {
            display: flex;
          }

          .nav-button {
            margin: 0.5rem 1rem;
          }

          .hero h1 {
            font-size: 2rem;
          }

          .hero p {
            font-size: 1rem;
          }

          .newsletter-form {
            flex-direction: column;
            align-items: center;
          }

          .newsletter-form input {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}