import React from 'react';
import pastProjects from './pastProjects';
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/Project.css'


function Project() {
  return (
    <div className='mt-5'>
      <div className='container'>
        <div className='row'>
          {[
            {
              title: 'Catzzeria',
              description: "Cat-Based Clicker Game",
              deployedLink: 'https://alfwall.github.io/catzzeria/',
              githubLink: 'https://github.com/alfwall/catzzeria',
            },
            {
              title: 'Reading Roundtables',
              description: "Booksearch Website Using Google API",
              deployedLink: 'https://reading-roundtable-a1d1097f86e5.herokuapp.com/login',
              githubLink: 'https://github.com/AdjoaHackman/reading-roundtable',
            },
            {
              title: 'MVC Blogsite',
              description: "User-Friendly Blogsite with Posting/Login Features",
              deployedLink: 'https://nks-mvc-blogsite-bab7d4b0eabe.herokuapp.com/',
              githubLink: 'https://nks-mvc-blogsite-bab7d4b0eabe.herokuapp.com/',
            },
          ].map((project, index) => (
            <div className='col-12 col-md-6 col-lg-4' key={index}>
              <pastProjects
                title={project.title}
                description={project.description}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
                />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project;
