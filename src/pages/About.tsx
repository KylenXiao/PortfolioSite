import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Me</h1>
      </div>
      
      <div className="about-content">
        <div className="about-profile">
          <div className="portrait-container">
            <img 
              src="/images/headshot.png" 
              alt="Kylen Xiao" 
              className="portrait-image" 
            />
          </div>
          
          <div className="about-description">
            <h2>Kylen Xiao</h2>
            <p className="job-title">Software Engineer & Creative Developer</p>
            
            <div className="bio">
              <p>
                Welcome to my portfolio! I'm a passionate developer with expertise in
                software engineering, machine learning, game development, digital art, and more.
              </p>
              <p>
                I pride myself in creating innovative solutions that combine technical excellence with creative vision.
                My work spans from enterprise software applications to interactive experiences and automations.
              </p>
              <p>
                I'm constantly exploring new technologies and approaches to push the boundaries of what's 
                possible for myself. When I'm not coding, you can find me learning how to do new things outside of my usual field of expertise.
              </p>
            </div>
          </div>
        </div>
        
        <div className="skills-section">
          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Software Engineering</h3>
              <ul>
                <li>React & TypeScript</li>
                <li>Full-Stack Development</li>
                <li>Cloud Architecture</li>
                <li>API Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Machine Learning</h3>
              <ul>
                <li>Deep Learning</li>
                <li>Data Analysis</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Game Development</h3>
              <ul>
                <li>GameMaker & Unity</li>
                <li>Game Design</li>
                <li>3D Modeling</li>
                <li>Interactive Storytelling</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="navigation-section">
          <h2>Explore My Work</h2>
          <div className="navigation-cards">
            <Link to="/software" className="nav-card software">
              <h3>Software Engineering</h3>
              <p>Enterprise applications, web development, and system architecture</p>
            </Link>
            <Link to="/ml" className="nav-card ml">
              <h3>Machine Learning</h3>
              <p>AI models, data analysis, and intelligent systems</p>
            </Link>
            <Link to="/gamedev" className="nav-card gamedev">
              <h3>Game Development</h3>
              <p>Interactive experiences, game design, and virtual worlds</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
