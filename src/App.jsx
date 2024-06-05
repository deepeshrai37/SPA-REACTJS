import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import Services from './components/Services'
import Partners from './components/Partners'
import Reviews from './components/Reviews'
import VideoGallery from './components/VideoGallery'
import FAQ from './components/FAQ'

function App() {

  return (
    <>
      <NavBar/>
      <Intro/>
      <Services/>
      <Partners/>
      <Reviews/>
      <VideoGallery/>
      <FAQ/>
    </>
  )
}

export default App
