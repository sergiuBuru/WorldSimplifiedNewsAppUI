import React, { useRef } from "react";

function About() {
  const ref = useRef(null);

  const handleScroll = (e) => {
    // setintoview seems to be bugged on chrome. settimer makes it work
    const timer = setTimeout(() => {
      var contact_section = document.getElementById('contact-section');
      var home_section = document.getElementById('home-section');

      if (e.nativeEvent.wheelDelta <= 0) {
        contact_section.scrollIntoView({behavior: 'smooth'});
      } else {
        home_section.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
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
