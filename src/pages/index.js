import React from 'react'

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
        <div className='block'>
          <h2 className='title'>Who?</h2>
          <p>
            Full-Stack Software Developer with extensive experience working on
            greenfield Ruby on Rails projects, building ReactJS frontends and
            architecting REST APIs.
          </p>
          <p>
            Loving co-creator and maintainer of the open-source React Native
            test framework, {' '}
            <span>
              <a href='https://cavy.app'>Cavy</a>.
            </span>
          </p>
        </div>
      </section>
      <section className='light'>
        <div className='block'>
          <h2 className='title'>What?</h2>
          <div className='flexBlock'>
            <div className='circleContent'>
              <p>This thing</p>
            </div>
            <div className='circleContent'>
              <p>That thing</p>
            </div>
            <div className='circleContent'>
              <p>Last thing</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
