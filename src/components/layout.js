import React from 'react'

import '../styles/layout.css'

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <ul className='headerLinks'>
          <li><a href='https://github.com/AbigailMcP'>GitHub</a></li>
          <li>
            <a href='https://www.linkedin.com/in/abigail-mcphillips/'>
              LinkedIn
            </a>
          </li>
          <li><a href='https://medium.com/@AbigailMcp'>Medium</a></li>
        </ul>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}