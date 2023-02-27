import { useRef } from "react";

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
    <section ref={ref} onWheel={handleScroll} id="signup-section" className='h-full w-full text-center bg-amber-400 p-10 pt-20'>
      <h1>Contact</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti itaque quo blanditiis iste ex, non tenetur quos mollitia explicabo soluta minima quas, harum accusamus nobis a suscipit eligendi error.</p>
    </section>
  );
}

export default Contact;
