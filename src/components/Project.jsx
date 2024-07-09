import React from 'react';
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
              githubLink: ''
            }
          ]}
        </div>
      </div>
    </div>
  )
}

export default Project;
