import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Virtual Experience</h4>
                <h5>Forage</h5>
              </div>
              <h3>2024–2025</h3>
            </div>
            <ul>
              <li>Engineered scalable system layouts across 6+ real-world simulations including J.P. Morgan and Walmart.</li>
              <li>Bridged backend development gaps using advanced API integrations and data processing techniques.</li>
              <li>Maintained rigorous clean code standards and system design principles.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Leadership</h4>
                <h5>VIT Vellore</h5>
              </div>
              <h3>2025</h3>
            </div>
            <ul>
              <li>Orchestrated technical seminars for 100+ students, specializing in compiler design and debugging.</li>
              <li>Mentored a cohort of 30+ students, resulting in a 35% reduction in logical errors.</li>
              <li>Developed streamlined debugging methodologies used in student workshops.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Computer Science & Engineering</h4>
                <h5>VIT Vellore</h5>
              </div>
              <h3>2023–2027</h3>
            </div>
            <p>
              Focused on core engineering principles with a current CGPA of 8.87. 
              Key focus areas include Data Structures, Algorithms, and System Design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
