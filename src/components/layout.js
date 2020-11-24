import React from 'react'
import { Link } from 'gatsby'

import headshot from '../images/headshot.png'
import home from '../images/home.svg'

import '../styles/layout.css'

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <div className='headerContainer block'>
          <Link to='/'>
            <img className='home' src={home} alt='Home'/>
          </Link>
          <ul className='headerLinks'>
            <li><a href='https://github.com/AbigailMcP'>GitHub</a></li>
            <li>
              <a href='https://www.linkedin.com/in/abigail-mcphillips/'>
                LinkedIn
              </a>
            </li>
            <li><a href='https://medium.com/@AbigailMcp'>Medium</a></li>
            <li><Link to="/cv">CV</Link></li>
          </ul>
        </div>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}