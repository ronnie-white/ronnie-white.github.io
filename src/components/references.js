import React, { Component } from 'react';
import Reference from './reference'

class References extends Component {
  constructor(props) {
    super()
    this.state = {
      activeIndex: ''
    }
  }
//EDIT PROJECTS
  references = [{
      id: 1,
      date: 'Jun 2022 to Present',
      title: 'Research Foundation CUNY',
      detail: 'Full Stack Developer',
      tools: ['HTML', 'CSS', 'JS', 'JQuery','MSSQL','Cold Fusion', 'ReactJS']
    },

 {
      id: 2,
      date: 'Dec 2020 to May 2022',
      title: 'Chalkboard',
      detail: 'Full Stack Developer',
      tools: ['NodeJS', 'AZURE', 'ExpressJS']
    },
    
    {
    id: 3,
    date: 'Feb 2019 - Nov 2020 ',
    title: 'AATLAS',
    detail: 'Full Stack Developer',
    tools: ['HTML', 'CSS', 'JS']
  
  }, 
  

  {
    id: 4,
    date: 'Aug 2016 - May 2020',
    title: 'Bachelor of Arts',
    detail: 'University at Albany ',
    tools: ['Computer Science Major', 'Informatics Minor']
  }, 
  ]

  projects = [{
    id: 5,
    date: 'Summer 2020',
    title: '35mm photo portfolio',
    tools: ['HTML','JS','CSS', 'ReactJS']
  }, 
  
  {
    id: 6,
    date: 'Summer 2020',
    title: 'Portfolio',
    tools: ['HTML','JS','CSS', 'ReactJS']
  }, 

  {
    id: 7,
    date: 'Spring 2017',
    title: 'Mentor Match',
    tools: ['Swift']
  }, 
  {
    id: 8,
    date: 'March 2020',
    title: 'Wegmans for you',
    tools: ['React', 'Python', 'Flask']
  }

]

  handleClick = (id) => {
    this.setState({activeIndex: id})
    this.props.setTypewriter(id)
  }

  render() {
    return (
      <div className="sidebar">
        <div className="resume-wrapper sidebar-col">
          <div className="header">
            <h3>Resume</h3>
          </div>
          <div className="references resume" ref={this.props.resumeRef}>
            {this.references.map((ref, id) => (
              <Reference key={id} reference={ref} func={this.handleClick} active={this.state.activeIndex === ref.id}/>
            ))}
          </div>
        </div>
        <div className="projects-wrapper sidebar-col">
          <div className="header">
            <h3>Projects</h3>
          </div>
          <div className="references projects" ref={this.props.projectsRef}>
            {this.projects.map((ref, id) => (
              <Reference key={id} reference={ref} func={this.handleClick} active={this.state.activeIndex === ref.id}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default References;
