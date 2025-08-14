import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Projects from '../../components/Projects'
import Footer from '../../components/Footer'
import Contact from '../../components/Contact'

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact /> 
      <Footer />
    </div>
  )
} 
