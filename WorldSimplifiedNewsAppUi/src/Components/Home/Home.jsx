import React, { useRef } from "react";
import styles from './Home.module.css';

function Home() {
  const ref = useRef(null);

  const handleScroll = (e) => {
    // setintoview seems to be bugged on chrome. settimer makes it work
    const timer = setTimeout(() => {
      // if the user scrolls down then scroll into view the about section
      // also remove the navbar link underline from home and add it to about
      if (e.nativeEvent.wheelDelta <= 0) {
        document.getElementById('about-section').scrollIntoView({behavior: 'smooth'});
        document.getElementById('Home-link').classList.remove('underline');
        document.getElementById('About-link').classList.add('underline', 'underline-offset-4');
      } 
    }, 600);
    
    return () => clearTimeout(timer);
  }

  return (
    <div ref={ref} id="home-section" className={'h-full w-full text-center bg-slate-50 p-10 pt-20 ' + styles.bg_hero} onWheel={handleScroll} >
      <h1>Home</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus placeat corrupti minima doloribus voluptas. Soluta excepturi autem nisi, laboriosam maiores sunt odio officia reprehenderit possimus harum, aut minima deserunt perferendis.</p>
    </div>
  );
}

export default Home;
