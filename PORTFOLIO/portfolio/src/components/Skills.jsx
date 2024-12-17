import React from 'react'
import StackIcon from "tech-stack-icons";
const Skills = () => {
  return (
    <section id='skills'>
        <h2>Skills</h2>
        <ul>
          
            <li ><i>
              <StackIcon name="mongodb"  style={{ width: '50px', height: '50px' }}/>
              <StackIcon name="reactjs" style={{ width: '50px', height: '50px' }}/>
              <StackIcon name="nodejs"style={{ width: '50px', height: '50px' }}/>
            </i>MERN Stack</li>
            <li><i ><StackIcon name="java" style={{ width: '50px', height: '50px' }}/></i>JAVA</li>
            <li><i><StackIcon name="js" style={{ width: '50px', height: '50px' }}/></i>Javascript</li>
            <li><i><StackIcon name="mysql" style={{ width: '50px', height: '50px' }}/></i>SQL</li>
            <li><i><StackIcon name="python" style={{ width: '50px', height: '50px' }}/></i>Python</li>
            <li><i><StackIcon name="github" style={{ width: '50px', height: '50px' }}/></i>Version Control</li>
           
        </ul>
    </section>
  )
}

export default Skills