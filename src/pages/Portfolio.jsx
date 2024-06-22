import Project from '../components/Project';
import projects from '../data/portfolioData';

function Portfolio() {
    return (
      <Project projects={projects} />
    );
}

export default Portfolio;