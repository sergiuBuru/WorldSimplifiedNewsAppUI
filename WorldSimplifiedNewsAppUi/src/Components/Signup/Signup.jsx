import { useRef } from "react";
import Typewriter from "../TypeWriter/TypeWriter";
import headlines from './Headlines.json';
import uuid from "react-uuid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Contact() {
  const ref = useRef(null);

  const handleScroll = (e) => {
    // setintoview seems to be bugged on chrome. settimer makes it work
    const timer = setTimeout(() => {
      // if the user scrolls down then scroll into view the contact section, otherwise scroll into view the home section
      // remove the underline from the about navbar link and place it under the link that corresponds to the section that was scrolled into view
      if (e.nativeEvent.wheelDelta > 0) {
        document.getElementById('Sign up-link').classList.remove('underline');
        document.getElementById('About-link').classList.add('underline', 'underline-offset-4');
        document.getElementById('about-section').scrollIntoView({behavior: 'smooth'});
      }  
    }, 600);
    
    return () => clearTimeout(timer);
  }
  return (
    <section ref={ref} onWheel={handleScroll} id="signup-section" className='bg-gradient-to-b from-slate-400 relative h-full w-full text-center flex flex-col '>
      {headlines.headlines.map((headline) => (
        <Typewriter headline={headline} key={uuid()}/>
      ))}
      <div className="flex flex-row top-1/3 h-2/5 w-full absolute justify-center">
        <div className="gap-2 flex flex-col bg-gradient-to-b from-slate-100 to-slate-300 basis-1/3 rounded-xl shadow-2xl z-50 p-7 pt-10">
          <p className="text-2xl font-playfair font-bold">Don't let headlines scare you. Sign up</p>
          <p className="text-md mt-2">Already have an account? <a href="" className="mb-2 text-blue-800">Log in</a></p>
          <TextField id="outlined-basic" label="Email" variant="outlined" className=""/>
          <TextField id="outlined-basic" label="Password" variant="outlined"/>
          <Button variant="contained" style={{backgroundColor: '#2b344f'}}>Sign up</Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
