import React from 'react';
import Cards from './Cards';

const projects = [
    {
      description: "Responsive, multi page website. I used HTML5, CSS3 and Javascript",
      title: "Website",
      getImageSrc: "./images/myWebsite.jpg",
    },
  
    {
      title: "Movies",
      description: "Currently busy with this one. I used HTML5, CSS3 and Javascript.",
      getImageSrc: "./images/movieWebsite.jpg",
    },
  
    {
      title: "Calculator",
      description: "basic calculator that can add, subtract, multiply and divide",
      // getImageSrc: "./images/.jpg",
    },
  ]

function ProjectSection() {

    return(
        <div className="projects-Section" style={{backgroundColor: "#14532d", paddingTop: "50px"}}>
          <a href='#'>
            <h1 
              style={{color: 'white', textAlign: 'left', marginLeft: '100px', paddingTop: '20px'}}
              id="projects-section"
            >
                Featured Projects
            </h1>
            <div className='list'>
                {projects.map((project) => (
                    <Cards
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        url=""
                        getImageSrc={project.getImageSrc}
                    />
                ))}
            </div>
          </a>  
        </div>

    )
};

export default ProjectSection;
