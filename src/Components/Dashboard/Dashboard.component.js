import React, { useState} from 'react'
import './Dashboard.scope.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SlSocialLinkedin, SlSocialGithub, SlSocialInstagram, SlSocialGoogle } from "react-icons/sl";

function Home() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className='container-page wrapper' id='home'>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <header>
        <nav>
          <ul className='fixed top-32 left-20 text-zinc-200 text-right space-y-4'>
            <li className='menu'>
              <AnchorLink href='#home' onClick={() => setActiveSection('home')} className={activeSection === 'home' ? 'active-link' : ''}>Home</AnchorLink>
              </li>
            <li className='menu'>
              <AnchorLink href='#education' onClick={() => setActiveSection('education')}
    className={activeSection === 'education' ? 'active-link' : ''}>Education</AnchorLink>
            </li>
            <li className='menu'>
              <AnchorLink href='#work' onClick={() => setActiveSection('work')}
    className={activeSection === 'work' ? 'active-link' : ''}>Experience</AnchorLink>
            </li>
            <li className='menu'>
              <AnchorLink href='#project' onClick={() => setActiveSection('project')}
    className={activeSection === 'project' ? 'active-link' : ''}>Project</AnchorLink>
            </li>
            <li className='menu'>
              <AnchorLink href='#skillset' onClick={() => setActiveSection('skillset')}
    className={activeSection === 'skillset' ? 'active-link' : ''}>SkillSet</AnchorLink>
            </li>
          </ul>
        </nav>
        <div className="fixed left-28 bottom-48 space-y-4">
          <div>
            <a href='https://www.linkedin.com/in/firyal-y-salsabila/' target="_blank" rel="noreferrer">
              <SlSocialLinkedin className='w-10 h-10 text-white hover:w-16'/>
            </a>
          </div>
          <div>
            <a href='mailto:firsabilac@gmail.com' target="_blank" rel="noreferrer">
              <SlSocialGoogle className='w-10 h-10 text-white hover:w-16'/>
            </a>
          </div>
          <div>
            <a href='https://www.github.com/firyal-salsa' target="_blank" rel="noreferrer">
              <SlSocialGithub className='w-10 h-10 text-white hover:w-16'/>
            </a>
          </div>
          <div>
            <a href='https://www.instagram.com/viola.tte/' target="_blank" rel="noreferrer">
              <SlSocialInstagram className='w-10 h-10 text-white hover:w-16'/>
            </a>
          </div>
        </div>
      </header>
      <div className="container justify-items-center absolute" id='title'>
        <h3 className='title-intro left-4'>Hey, There! I am</h3>
          <h1 className='title-name'>Firyal</h1>
        <h3 className='title-job left-4'>Devops Engineer</h3>
        {/* <p className="italic text-center justify-center">
        “It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.” -Charles Darwin
        </p> */}
      </div>
      {/* <div classNameName="section">
        <Link to="Education">
          <p>Education</p>
        </Link>
        <Link to="WorkingHistory">
          <p>Working History</p>
        </Link>
        <Link to="SkillSet">
          <p>SkillSet</p>
        </Link>
        <Link to="Project">
          <p>Something I've built</p>
        </Link>
        <Link to="GetInTouch">
          <p>Get In Touch</p>
        </Link>
        <div classNameName="out">
        <Outlet />
        </div>
      </div> */}
      </div>
  )
}

export default Home