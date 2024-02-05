import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const animatedLetters = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={animatedLetters}
            idx={15}
          />
          
        </h1>
         <div>
         <p>
          Throughout my academic journey and practical experiences, I have
          acquired a robust skill set in a variety of programming languages and
          technologies. My proficiency includes HTML, CSS, JavaScript,
          Bootstrap, React, Git, Linux, REST, HTTP, Material UI, RESTful API,
          node.js, and jQuery.
        </p>
        <p>
          I have successfully applied these skills in real-world projects,
          demonstrating my ability to adapt and thrive in dynamic and
          challenging environments.
        </p>
        <p>
          {' '}
          My commitment to producing high-quality code and my keen attention to
          detail have allowed me to contribute effectively to team projects. I
          am particularly proud of my work in developing user-friendly and
          responsive web applications using cutting-edge technologies. My
          experience with version control systems like Git, along with my
          understanding of Linux environments, enables me to collaborate
          seamlessly with cross-functional teams.
        </p>
         </div>
      </div>

      <div className='stage-cube-cont'>
        <div className='cube-spinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
          </div>
        </div>
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default About
