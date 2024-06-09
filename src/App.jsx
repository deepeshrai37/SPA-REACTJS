import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Intro from './components/Intro'
import Services from './components/Services'
import Partners from './components/Partners'
import Reviews from './components/Reviews'
import VideoGallery from './components/VideoGallery'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Intro/>
      <Services/>
      <Partners/>
      <Reviews/>
      <VideoGallery/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default App;
