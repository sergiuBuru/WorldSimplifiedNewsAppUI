import React, { useRef } from "react";

function Home() {
  const ref = useRef(null);

  const handleScroll = (e) => {
    // setintoview seems to be bugged on chrome. settimer makes it work
    const timer = setTimeout(() => {
      var about_section = document.getElementById('about-section');

      if (e.nativeEvent.wheelDelta <= 0) {
        about_section.scrollIntoView({behavior: 'smooth'});
      } 
    }, 600);
    
    return () => clearTimeout(timer);
  }

  return (
    <div ref={ref} id="home-section" className='h-full w-full text-center bg-slate-500 p-10 pt-20' onWheel={handleScroll}>
      <h1>Home</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus placeat corrupti minima doloribus voluptas. Soluta excepturi autem nisi, laboriosam maiores sunt odio officia reprehenderit possimus harum, aut minima deserunt perferendis.</p>
    </div>
  );
}

export default Home;
