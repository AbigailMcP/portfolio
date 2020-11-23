import React from 'react'

import Layout from '../components/layout'
import headshot from '../images/headshot.png'

export default function Home() {
  return (
    <Layout>
      <section>
        <h1 className='mainTitle'>Abigail McPhillips</h1>
        <p className='subtitle'>Full-Stack Software Developer</p>
        <img className='circleImage' src={headshot} alt="Avatar"/>
      </section>
    </Layout>
  )
}
