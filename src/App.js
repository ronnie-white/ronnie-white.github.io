// eslint-disable-next-line 
import React, { Component } from 'react';
import References from './components/references'
import Typewriter from './components/typewriter'
import 'normalize.css';
import './App.scss';


class App extends Component {



  render() {
    return (
      <div className="App">
        <div className="content-wrapper">
          <header className="App-header dashed-line">
            <div className="header-wrapper">
              <div className="title">
                <h1>Ronnie White</h1>
                <h3>Full Stack Developer</h3>
              </div>
              <ul className="contact">
                <li title="email" className="mobile email" onClick={() => {this.clickedEmail()}}><a href="mailto:ronishawhite@gmail.com"></a></li>
                <li title="email" className="link" onClick={() => {this.clickedEmail()}}><a href="mailto:ronishawhite@gmail.com">ronishawhite@gmail.com</a></li>
                <li title="github" className="mobile github" onClick={() => {this.clickedEmail()}}><a href="https://github.com/ronnie-white" target="_blank" rel="noopener noreferrer"></a></li>
                <li title="github" className="link" onClick={() => {this.clickedGithub()}}><a href="https://github.com/ronnie-white" target="_blank" rel="noopener noreferrer">github</a></li>
                <li title="linkedin" className="mobile linkedin" onClick={() => {this.clickedEmail()}}><a href="https://linkedin.com/in/ronnie-white" target="_blank" rel="noopener noreferrer"></a></li>
                <li title="linkedin" className="link" onClick={() => {this.clickedLinkedIn()}}><a href="https://linkedin.com/in/ronnie-white" target="_blank" rel="noopener noreferrer">linkedin</a></li>
                <li title="resume" className="mobile resume" onClick={() => {this.clickedEmail()}}><a href={process.env.PUBLIC_URL+ '/resume.pdf#'} target="_blank" rel="noopener noreferrer"></a></li>
                <li title="resume" className="link" onClick={() => {this.clickedResume()}}><a href={process.env.PUBLIC_URL+ '/resume.pdf#'} target="_blank" rel="noopener noreferrer">resume</a></li>
              </ul>
            </div>
          </header>
          <main className="main">
          <References/>
          </main>
          
          {/* <main className="main">
            <div className='text-wrapper'>
              <div className="text">
                {<Typewriter/>}
              </div>
            </div> */}


      {/*     <div className="mobileNav">
              <ul>
                <li onClick={() => this.scroll(this.resume)}>Resume</li>
                <li onClick={() => this.scroll(this.projects)}>Projects</li>
              </ul>
            </div>
          <References/>
</main> */}

        </div>
      </div>
    );
  }
}
    
  
  



export default App;
