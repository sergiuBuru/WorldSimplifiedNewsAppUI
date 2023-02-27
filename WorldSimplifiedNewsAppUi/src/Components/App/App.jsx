import './App.css'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import About from '../About/About'
import Signup from '../Signup/Signup';

function App() {

  return (
    <div className='w-full h-full'>
      <Navbar />
      <Home />
      <About />
      <Signup />
    </div>
  )
}

export default App
