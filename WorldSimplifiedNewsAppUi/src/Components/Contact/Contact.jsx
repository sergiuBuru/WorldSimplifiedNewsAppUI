import { useRef } from "react";

function Contact() {
  const ref = useRef(null);

  const handleScroll = (e) => {
    // setintoview seems to be bugged on chrome. settimer makes it work
    const timer = setTimeout(() => {
      var about_section = document.getElementById('about-section');

      if (e.nativeEvent.wheelDelta > 0) {
        about_section.scrollIntoView({behavior: 'smooth'});
      }  
    }, 600);
    
    return () => clearTimeout(timer);
  }
  return (
    <section ref={ref} onWheel={handleScroll} id="contact-section" className='h-full w-full text-center bg-amber-400 p-10 pt-20'>
      <h1>Contact</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti itaque quo blanditiis iste ex, non tenetur quos mollitia explicabo soluta minima quas, harum accusamus nobis a suscipit eligendi error.</p>
    </section>
  );
}

export default Contact;
