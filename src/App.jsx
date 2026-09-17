import Navbar from "./components/navbar.jsx"
import FeaturedArticles from "./components/featuredArticles.jsx"
import FeaturedTutorials from "./components/featuredTutorials.jsx"
import Newsletter from "./components/newsLetter.jsx"
import Footer from "./components/footer.jsx"
import Contact from "./components/contact.jsx"
import Hero from "./components/hero.jsx"
import Gallery from "./components/gallery.jsx"
import About from "./components/about.jsx"

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <Hero />
      <About />


      <main>
        <FeaturedArticles />
        <FeaturedTutorials />
        <Gallery />
        <Contact />
        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}

export default App