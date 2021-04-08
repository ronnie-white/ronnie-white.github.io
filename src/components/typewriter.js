import React, { Component } from 'react';
import './typewriter.scss';
import reactStringReplace from 'react-string-replace';

class Typewriter extends Component {
  constructor() {
    super()
    this.state = {
      display: '',
      typing: false,
      typewriter: {},
      finished: false,
    }
    this.text1 = React.createRef()
    this.text2 = React.createRef()
    this.text3 = React.createRef()
  }

  texts=[{
    id: 1,
    ref: 'AATLAS', 
    text: 'While working with AATLAS I used responsive web designs and development principles to build stable software. I collaborated closely with the program to provide support during all phases of delivery.' ,
    link: 'https://aatlased.org/',
  }, {
    id: 2,
    ref: 'SUNY Albany',
    text: ' B.A. in Computer Science and Minor in Informatics.* I am determined to have a positive impact by transforming how people consume and comprehend web content.',
    link: 'https://www.albany.edu/',
  }, {
    id: 3,
    ref: '35mm',
    text: ' Shooting film is a hobby of mine. I built this portfolio to post photos from travel. The design is based on the ~brutalist™ web design trend. Featuring a transform tool that allows drag and drop movement. ',
    link: 'https://ronnie-white.github.io/35mm/',
  }, {
    id: 4,
    ref: 'ronnie-white.io/',
    text: 'My personal website has animations and is responsive. On it you can find links to my projects, Github and LinkedIn',
    link: 'https://ronnie-white.io/',
  }, {
    id: 5,
    ref: 'Chalkboard',
    text: 'Using Agile Scrum Methodology my team recreated a blackboard quiz CRUD app. While working in this collaborative enviroment I used Key scrum metrics (sprint burn down, team velocity) to deliver commited work.',
    link: 'https://github.com/ronnie-white/Chalkboard418',
  }, {
    id: 6,
    ref: 'Mentor Match',
    text: 'My team created an App called "Mentor Match" that paried students with mentors.',
    link: 'https://github.com/paulstefos/MentorMatch',
  }, {
    id: 7,
    ref: 'Wegmans for you', 
    text: 'User enters dish and our app breaks it down by ingredients needed. Using the Wegmans API it returns calories of the dish entered.',
    link: 'https://github.com/ronnie-white/wichacks',
  }, 
  
  {
    id: 0,
    ref: 'default',
    text: 'Hi, my name is Ronnie.* I am a Front end developer based in Seattle.* Please click any of the links to learn more about me.',
    link: '',
  }

]
//ANIMATION TYPERWRITER SPEED EDIT
  speed = 10

  async type() {
    const typeLetter = (letter) => 
      new Promise(resolve => setTimeout(resolve, this.speed, letter))
      .then(letter => !this.isUnmounted && this.setState({ display: this.state.display + letter }))  
    
    const typeRow = () => {
      !this.isUnmounted && this.setState({typing: false})
      return new Promise(resolve => setTimeout(resolve, this.speed*10))
      .then(!this.isUnmounted && this.setState({ display: this.state.display + '\n'}))  
    }

    for (const letter of this.state.typewriter.text) {
      letter === '*' ? await typeRow() : await typeLetter(letter)
    }
    !this.isUnmounted && this.setState({typing: false, finished: true})
  } 

  componentDidMount() {
    if(this.props.animate) {
      this.setState({typewriter: this.texts.find(_ => _.id === this.props.id), typing: true}, () => this.type())
    } else {
      this.setState({typewriter: this.texts.find(_ => _.id === this.props.id)}, () => {
        this.setState({display: this.state.typewriter.text.replace(/(\*)/g, '\n'), finished: true})
      })
    }
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  componentDidUpdate() {
    if(this.text2 && this.text2.current) {
      this.text2.current.style.display = 'none'
      const a = this.text2.current.offsetHeight
      this.text2.current.style.display = 'unset'
    }
  }

  render() {
    const regex = /(usability, design, and SEO|Deutschland Stipendium|Python, Django, and Javascript|Natural Language Processing|Meteor, React, Node.js and MongoDB|React Native|computer science major)/g
    return (
      <div className="typewriter-wrapper" ref={this.text3}>
        <p
          className={`typewriter ${this.state.typing ? 'typing' : ''}`} ref={this.text1}>
          {reactStringReplace(this.state.display, regex, (match, i) => (
            <span className="highlight" key={i}>{match}</span>
          ))}
          <span className="cursor" ref={this.text2}>_</span>
        </p>
        {this.state.typewriter.link && this.state.finished? 
          <div className="fade-in-fwd">
            <a href={this.state.typewriter.link} className="link" target="_blank" rel="noopener noreferrer">Link</a> 
          </div>
          : null}
      </div>
    )
  }
}

export default Typewriter;
