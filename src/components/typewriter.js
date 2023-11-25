import React, { Component } from 'react';
import './typewriter.scss';



class Typewriter extends Component {

  texts=[

    {
      id: 1,
      ref: 'CUNY RF',
      text: 'Full stack Development of CUNY RF LMS (Learning management system) At CUNY RF I develop web applications.'
      
    },

    {
      id: 2,
      ref: 'Chalkboard',
      text: 'Using Agile Scrum Methodology my team recreated a blackboard quiz CRUD app. While working in this collaborative enviroment I used Key scrum metrics (sprint burn down, team velocity) to deliver commited work.'
    },
    
    {
    id: 3,
    ref: 'AATLAS', 
    text: 'While working with AATLAS  I collaborated closely with the program to provide support during all phases of delivery to build a responsive, dynamic website optimized for smartphones and tablets.' ,
    link: 'https://aatlased.org/',
  }, {
    id: 4,
    ref: 'SUNY Albany',
    text: ' B.A. in Computer Science and Minor in Informatics.',
    link: 'https://www.albany.edu/',
  }, {
    id: 5,
    ref: '35mm',
    text: ' Shooting film is a hobby of mine. I built this portfolio to post photos from travel. The design is based on the ~brutalist™ web design trend. Featuring a transform tool that allows drag and drop movement. ',
    link: 'https://ronnie-white.github.io/35mm/',
  }, {
    id: 6,
    ref: 'ronniewhite.io/',
    text: 'My personal website built with ReactJS. On it you can find links to my projects, Github and LinkedIn',
    link: 'https://ronniewhite.io/',
  },  {
    id: 7,
    ref: 'Mentor Match',
    text: 'My team created an App called "Mentor Match" that paried students with mentors.',
    link: 'https://github.com/paulstefos/MentorMatch',
  }, {
    id: 8,
    ref: 'Wegmans for you', 
    text: 'User enters dish and our app breaks it down by ingredients needed. Using the Wegmans API it returns calories of the dish entered.',
    link: 'https://github.com/ronnie-white/wichacks',
  }, 
  
  {
    id: 0,
    ref: 'default',
    text: 'Hi, my name is Ronnie.* I am a Full Stack Developer based in Albany, NY.* Please click any of the links to learn more about me.',
    link: '',
  }

]



render() {
  
  return (
    <Typewriter />
  )
}
}


export default Typewriter;
