import React from 'react'
import Header from '../components/Header.jsx'
import ParagraphSection from '../components/ParagraphSection.jsx'
import ResultGuaranteed from '../components/ResultGuaranteed.jsx'
import HomeTrainers from '../components/HomeTrainers.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div>
        < Header />
        <ParagraphSection />
        <ResultGuaranteed />
        <HomeTrainers />
        <Footer />
    </div>
  )
}

export default Home