import React from 'react';
import PastProjects from './pastProjects';
import Catzzeria from '../assets/images/catzzeria.png';
import Reading from '../assets/images/readingRoundtables.png';
import MVC from '../assets/images/mvc.png';
import Scheduler from '../assets/images/scheduler.png';
import Quiz from '../assets/images/quiz.png';
import Password from '../assets/images/password.png';
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
              image: Catzzeria,
              description: "Cat-Based Clicker Game",
              deployedLink: 'https://alfwall.github.io/catzzeria/',
              githubLink: 'https://github.com/alfwall/catzzeria',
            },
            {
              title: 'Reading Roundtables',
              image: Reading,
              description: "Booksearch Website Using Google API",
              deployedLink: 'https://reading-roundtable-a1d1097f86e5.herokuapp.com/login',
              githubLink: 'https://github.com/AdjoaHackman/reading-roundtable',
            },
            {
              title: 'MVC Blogsite',
              image: MVC,
              description: "User-Friendly Blogsite with Posting/Login Features",
              deployedLink: 'https://nks-mvc-blogsite-bab7d4b0eabe.herokuapp.com/',
              githubLink: 'https://github.com/nicolehekim/MVC-Blogsite',
            },
            {
              title: 'Timed Quiz',
              image: Quiz,
              description: "Coding quiz game with saved highscores and timer component",
              deployedLink: 'https://nicolehekim.github.io/timed-quiz-with-highscores/',
              githubLink: 'https://github.com/nicolehekim/timed-quiz-with-highscores',
            },
            {
              title: 'Dayjs Scheduler',
              image: Scheduler,
              description: "Day to day scheduler using Dayjs with color separation",
              deployedLink: 'https://nicolehekim.github.io/using-dayjs-for-scheduling/',
              githubLink: 'https://github.com/nicolehekim/using-dayjs-for-scheduling',
            },
            {
              title: 'Random Password Generator',
              image: Password,
              description: "Random password generator with customizable prompts",
              deployedLink: 'https://nicolehekim.github.io/automatic-password-generator/',
              githubLink: 'https://github.com/nicolehekim/automatic-password-generator',
            },
          ].map((project, index) => (
            <div className='col-12 col-md-6 col-lg-4' key={index}>
              <PastProjects
                title={project.title}
                image={project.image}
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
