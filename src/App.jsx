import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer className="py-10 border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Hamz. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#projects" className="text-gray-700 hover:text-blue-600">Proyek</a>
          <a href="#skills" className="text-gray-700 hover:text-blue-600">Keahlian</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Kontak</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
