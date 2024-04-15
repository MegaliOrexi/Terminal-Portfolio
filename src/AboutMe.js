import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faPython, faNodeJs, faJava } from '@fortawesome/free-brands-svg-icons';

function AboutMe() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="bg-black rounded-lg shadow-md p-6 text-yellow-400">
        <div className="main text-lg mb-4">
        I'm a second year student at Univeristy of Wollongong in Dubai studying Bachelor of Computer Science specializing in Big Data.
        My hobbies include football and chess, I love talking to new people, if you're interested head on over to the contact me section to chat
        </div>
        <div className="aboutproj text-lg">
          This terminal is a fun project where you can learn more about me and my work. Feel free to explore and don't hesitate to contact me if you have any questions or would like to collaborate on a project.
        </div>
        <div className='skills my-8'>
          <h2 className='text-3xl mb-4'>My Skills:</h2>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="text-center">
              <FontAwesomeIcon icon={faHtml5} size="2xl" />
              <p>HTML5</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faCss3} size="2xl" />
              <p>CSS3</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faJs} size="2xl" />
              <p>JavaScript</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faReact} size="2xl" />
              <p>React</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faPython} size="2xl" />
              <p>Python</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faNodeJs} size="2xl" />
              <p>Node.js</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faJava} size="2xl" />
              <p>Java</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
