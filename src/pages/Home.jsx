import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillSection from '../components/SkillSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* Theme Toggle */}
        <ThemeToggle/>

        {/* Background Effects */}
        <StarBackground/>

        {/* NavBar */}
        <Navbar/>

        {/* main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillSection />
          <ProjectSection />
          <ContactSection />
        </main>

        {/* Footer */}
    </div>
  )
}

export default Home