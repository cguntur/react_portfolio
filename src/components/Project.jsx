//import portfolioData from '../data/portfolio_data';

function Project(props){
  return (
    <div className = "projects_div">
      {props.projects.map(data => (
      <div className="project" key={data.title}>
        <div className="image_wrapper"><img src={data.image} /></div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p><a target="_blank" href={data.githubLink}>Github Link</a></p>
      </div>
    ))
    }
    </div>
    
  );
}
export default Project;
  