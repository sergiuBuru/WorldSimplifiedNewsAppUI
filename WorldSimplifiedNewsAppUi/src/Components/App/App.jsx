import './App.css'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'

function App() {

  return (
    <div className='w-full h-full'>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  )
}

export default App
