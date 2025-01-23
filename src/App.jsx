import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">enago Read</div>
        <nav className="nav">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </nav>
        <div className="auth">
          <button className="register">Register for free</button>
          <button className="sign-in">Sign in</button>
        </div>
      </header>

      <section className="hero">
        <h1>AI-Powered Literature Review: <br />Faster, Deeper, Smarter</h1>
        <p>Enago Read simplifies literature reviews by delivering smart AI-driven summaries, key insights, real-time discovery, and a copilot that empowers you to master the literature with superhuman speed.</p>
        <div className="input-group">
          <input type="email" placeholder="Enter your email address" />
          <button>Get Started →</button>
        </div>
        <p className="no-credit-card">No credit card required</p>
      </section>

      <section className="universities">
        <p>Used by researchers from more than 400 universities</p>
        <div className="university-logos">
          {/* Add university logos here */}
        </div>
      </section>

      <section className="features">
        <h2>From Surface-Level Exploration to Critical Reading - All in one Place!</h2>
        <div className="features-container">
          <div className="feature">
            <div className="feature-icon">💡</div>
            <h3>High-Impact Summaries <br />&amp; Key Insights</h3>
            <p>Absorb complex research in seconds with intelligent, high-impact summaries and key insights.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔍</div>
            <h3>Discover the Unseen</h3>
            <p>AI-powered literature discovery helps you explore related papers and uncover new insights with intelligent recommendations.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💬</div>
            <h3>Real-Time AI Copilot</h3>
            <p>Ask questions and receive real-time answers for deeper understanding of complex literature, guiding you through even the most intricate studies.</p>
          </div>
        </div>
      </section>

      <section className="literature-review">
        <h2>Literature Review Made Easy</h2>
        {/* Add content for the literature review section here */}
      </section>

      <section className="copilot">
        <h2>Copilot: Go from Overwhelmed to Enlightened in Moments</h2>
        <p>Get instant insights, clarity, and deeper understanding in an instant.</p>
        <button>Know More</button>
        {/* Add content for the copilot section here */}
      </section>

      <section className="find-papers">
        <h2>Find papers from across the world's largest repositories</h2>
        {/* Add logos of repositories here */}
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        {/* Add testimonials here */}
      </section>

      <section className="privacy-security">
        <h2>Privacy and security of your research data are integral to our mission.</h2>
        <div className="privacy-security-container">
          <div className="privacy-security-item">
            <div className="privacy-security-icon">👁️</div>
            <h3>Privacy of Your Work</h3>
            <p>Everything you add or create on Enago Read is private by default. It is visible only to you.</p>
          </div>
          <div className="privacy-security-item">
            <div className="privacy-security-icon">©️</div>
            <h3>Copyright Your Contribution</h3>
            <p>You can put Creative Commons license on original drafts to protect your IP.</p>
          </div>
          <div className="privacy-security-item">
            <div className="privacy-security-icon">🛡️</div>
            <h3>Security of Your Data</h3>
            <p>We use advanced security protocols including MD5 Encryption, SSL, and HTTPS to secure your data.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h3>enago Read</h3>
            <p>Enago Read is an AI assistant that speeds up the literature review process, offering summaries and key insights to save researchers reading time. It boosts productivity with advanced AI technology and the Copilot feature, enabling real-time questions for deeper comprehension of extensive literature.</p>
          </div>
          <div className="footer-section">
            <h3>Product</h3>
            <ul>
              <li>What's new</li>
              <li>For Reviewers</li>
              <li>For librarians</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>Become an affiliate</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              <li>FAQs</li>
              <li>Blog</li>
              <li>Tutorials</li>
              <li>Plagiarism Checker</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Social Channels</h3>
            <ul>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Crimson AI © 2025 - Made in India. · Privacy · Terms</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
