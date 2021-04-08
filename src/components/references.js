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
    date: 'Feb - May 2019',
    title: 'AATLAS',
    detail: 'Web Development Intern',
    tools: ['HTML', 'CSS', 'JS']
  }, {
    id: 2,
    date: 'Aug 2016 - May 2020',
    title: 'Bachelor of Arts',
    detail: 'SUNY Albany ',
    tools: ['Computer Science Major', 'Informatics Minor']
  }, 
  ]

  projects = [{
    id: 3,
    date: 'Summer 2020',
    title: '35mm',
    tools: ['HTML','JS','CSS']
  }, {
    id: 4,
    date: 'Summer 2020',
    title: 'Resume',
    tools: ['React', 'JS']
  }, {
    id: 5,
    date: 'Jan - May 2019',
    title: 'Chalkboard',
    tools: ['HTML', 'CSS', 'JS', 'Node.js', 'MySQL']
  },

  {
    id: 6,
    date: 'Spring 2017',
    title: 'Mentor Match',
    tools: ['Swift']
  }, 
  {
    id: 7,
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
