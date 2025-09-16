import React, { Component } from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import about_profile from "../../assets/about_profile.svg"

export default class About extends Component {
  render() {
    return (
      <div className='about'>

        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt='' />
        </div>

        <div className="about-section">
            <div className="about-left">
                <img src={about_profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am Experinced Full stack Developer with over a 2 years of hand on.</p>
                    <p>My passion is my hobby my hobby</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Javascipt & React</p>
                        <hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Python & Django</p>
                        <hr style={{width:"100%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Generative Ai</p>
                        <hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Ai Agents</p>
                        <hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Fastapi & LLM</p>
                        <hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>AWS & Docker</p>
                        <hr style={{width:"100%"}}/>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="about-achievments">
            <div className="about-achievment">
                <h1>5+</h1>
                <p>Years of Experince</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>20+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>20+</h1>
                <p>Happy Clients</p>
            </div>
        </div>
      </div>
    )
  }
}
