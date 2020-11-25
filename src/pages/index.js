import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import headshot from '../assets/headshot.png'

export default function Home() {
  return (
    <Layout>
      <section className='dark'>
        <div className='block'>
          <h1 className='mainTitle'>Abigail McPhillips</h1>
          <p className='subtitle'>Full-Stack Software Developer</p>
          <img className='circleImage' src={headshot} alt='Avatar'/>
        </div>
      </section>
      <section className='mid'>
        <div className='block flexBlock'>
          <div className='aboutBlock'>
            <h2 className='title'>Who?</h2>
            <p>
              Hi there! I'm Abigail,
              <span> Full-Stack Software Developer</span> by
              trade, <span>human</span> by nature.
            </p>
            <p>
              I care about building beautiful applications that make life
              <span> more fulfilling, more connected, more fun</span>.
            </p>
          </div>
          <div className='aboutBlock'>
            <h2 className='title'>What?</h2>
            <p>
              I have extensive experience working with
              <span> Ruby on Rails, JavaScript and React</span>. Check out{' '}
              <span><Link to='/cv'>my CV</Link></span> for the rest.
            </p>
            <p>
              I am also the loving co-creator and maintainer of the
              open-source React Native test framework,{' '}
              <span><a href='https://cavy.app'>Cavy</a></span>.
            </p>
          </div>
        </div>
      </section>
      <section className='light'>
        <div className='block'>
          <h1 className='callout'>Get in touch</h1>
          <p>
            I'm currently based in <span>London</span>, happily working remotely.
          </p>
          <p>
            If you'd like to chat about contract work, send me a message -
          </p>
          <p>
            <a href='mailto:abigail.mcphillips@gmail.com'>
              abigail.mcphillips@gmail.com
            </a>
          </p>
        </div>
      </section>
    </Layout>
  )
}
