import React from 'react'
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack'

import Layout from '../components/layout'

import cv from '../assets/cv.pdf'

export default function Cv() {
  return (
    <Layout>
      <section className='dark'>
        <div className='block'>
          <Document className='flexBlock' file={cv}>
            <Page height={640} renderTextLayer={false} pageNumber={1} />
            <Page height={640} renderTextLayer={false} pageNumber={2} />
          </Document>
        </div>
      </section>
  </Layout>
  )
}