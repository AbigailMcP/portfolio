import React from 'react'
import { Link } from 'gatsby'

import Home from '../assets/home.inline.svg'
import GitHub from '../assets/github.inline.svg'
import LinkedIn from '../assets/linkedin.inline.svg'
import Medium from '../assets/medium.inline.svg'

import '../styles/layout.css'

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Link to='/cv'>
          <div class='cornerRibbon'>CV / Resume</div>
        </Link>
        <div className='headerContainer block'>
          <Link to='/'>
            <Home className='headerIcon'/>
          </Link>
          <ul className='headerLinks'>
            <li>
              <a href='https://github.com/AbigailMcP'>
                <GitHub className='headerIcon'/>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/abigail-mcphillips/'>
                <LinkedIn className='headerIcon'/>
              </a>
            </li>
            <li>
              <a href='https://medium.com/@AbigailMcp'>
                <Medium className='headerIcon'/>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}