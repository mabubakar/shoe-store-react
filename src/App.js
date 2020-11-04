import React from 'react'
import Nav from './components/Nav'
import Jumbotron from './components/Jumbotron'
import Locations from './components/Locations'
import AppWorking from './components/AppWorking'
import DownloadApp from './components/DownloadApp'
import ContactUs from './components/ContactUs'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <>
      <div className='gradient-bg'>
        <Nav />
        <Jumbotron />
      </div>
      <Locations />
      <AppWorking />
      <DownloadApp />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
