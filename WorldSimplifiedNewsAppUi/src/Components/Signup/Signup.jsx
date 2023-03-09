import { useRef } from "react";
import Typewriter from "../TypeWriter/TypeWriter";
import headlines from './Headlines.json';
import uuid from "react-uuid";
import SignupForm from "../SignupForm/SignupForm";



function Signup() {
  const ref = useRef(null);
  // const [h, setHeadlines] = useState([]) 

  // fetch("https://newsapi.org/v2/everything?q=politics%sports%entertainment&apiKey=" + import.meta.env.VITE_newsapi_key)
  // .then(res => res.json())
  // .then(data => console.log(data));

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
      <SignupForm />
    </section>
  );
}

export default Signup;
