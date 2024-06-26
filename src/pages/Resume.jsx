import resumePdf from '../assets/files/chandrika_sista.pdf';
function Resume() {

  const skills = ["PHP", "mySQL", "JavaScript", "React", "Node Js", "Mongodb", "Express js", "WordPress", "Git"]; 

    return (
        <div>
          <section name="resume_intro">
            <h1>Chandrika Sista</h1>
            <h2>Full Stack Web Developer</h2>
            <p>408-752-1183</p>
            <p>cguntur@gmail.com</p>
            <p>I am a full stack developer with experience in PHP, JavaScript, jQuery, Node js, React and Mern.</p>
          </section>
          <section className="resume_section">
            <h3>Skills</h3>
            <h4>Programming Languages and Tools:</h4>
            <ul>
              {skills.map((item) => (
                  <li className="nav__item" key={item}>
                      {item}
                  </li>
              ))}
            </ul>
          </section>
          <section className="resume_section">
            <h4>Core Competencies</h4>
            <ul>
              <li>Building mobile first websites and apps</li>
              <li>Responsive design</li>
              <li>Cross browser testing</li>
            </ul>
          </section>

          <a className="res_download_button" href={resumePdf} download="chandrika_sista" target='_blank'>
             <button className="">Download Resume</button>
        </a>
        </div>
    );
}

export default Resume;