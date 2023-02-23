import React, { useRef } from "react";

function About() {
  const ref = useRef(null);

  const handleScroll = (e) => {
    // setintoview seems to be bugged on chrome. settimer makes it work
    const timer = setTimeout(() => {
      // if the user scrolls down then scroll into view the contact section, otherwise scroll into view the home section
      // remove the underline from the about navbar link and place it under the link that corresponds to the section that was scrolled into view
      document.getElementById('About-link').classList.remove('underline');
      if (e.nativeEvent.wheelDelta <= 0) {
        document.getElementById('contact-section').scrollIntoView({behavior: 'smooth'});
        document.getElementById('Contact-link').classList.add('underline', 'underline-offset-4');
      } else {
        document.getElementById('home-section').scrollIntoView({behavior: 'smooth'});
        document.getElementById('Home-link').classList.add('underline', 'underline-offset-4');
      }  
    }, 600);
    
    return () => clearTimeout(timer);
  }

  return (
    <div ref={ref} id="about-section" className='bg-lime-500 h-full w-full text-center p-10 pt-20' onWheel={handleScroll}>
      <h1>About</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos enim cum fuga earum ipsam, corrupti blanditiis, neque sint temporibus sapiente quam sunt placeat nihil excepturi perspiciatis asperiores provident, beatae tempore?</p>
    </div>
  );
}

export default About;
