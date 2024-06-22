//import portfolioData from '../data/portfolio_data';

function Project(props){
  return (
    <>
      {props.projects.map(data => (
      <div className="" key={data.title}>
        <div><img src={data.image} /></div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p><a href={data.githubLink}>Github Link</a></p>
      </div>
    ))
    }
    </>
    
  );
}
export default Project;
  