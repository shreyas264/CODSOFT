import React from 'react'

const Projects = () => {
  return (
    <section id='projects'>
        <h2>Projects</h2>
        <div className='project-card'>
            <div>
                <img src='/src/assets/img/bookStoreMERN.jpg' alt='bookStore'/>
                <h3>Book Store MERN</h3>
                <a href='https://github.com/shreyas264/BookStore-MERN-Stack' target='blank' rel='noopener noreferrer'>View Code</a>
            </div>
            <div>
                <img src='/src/assets/img/stopwatchJS.jpg' alt='stopWatch'/>
                <h3>Stopwatch Javascript</h3>
                <a href='https://github.com/shreyas264/Stopwatch' target='blank' rel='noopener noreferrer'>View Code</a>
            </div>
        </div>
    </section>
  )
}

export default Projects
