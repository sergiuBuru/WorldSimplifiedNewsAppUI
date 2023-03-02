import React, { useEffect, useRef, useState } from "react";
import styles from './About.module.css';
import { motion } from 'framer-motion';
import { useInView } from "framer-motion";
import FeaturesCard from "../FeaturesCard/FeaturesCard";
import uuid from "react-uuid";
import cardData from './CardsInfo.json';

function About() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const textIsInView = useInView(textRef);
  const [containerClass, setClass] = useState('');
  const [resized, setResized] = useState(0);

  const handleScroll = (e) => {
    // setintoview seems to be bugged on chrome. settimer makes it work
    const timer = setTimeout(() => {
      // if the user scrolls down then scroll into view the contact section, otherwise scroll into view the home section
      // remove the underline from the about navbar link and place it under the link that corresponds to the section that was scrolled into view
      document.getElementById('About-link').classList.remove('underline');
      if (e.nativeEvent.wheelDelta <= 0) {
        document.getElementById('signup-section').scrollIntoView({behavior: 'smooth'});
        document.getElementById('Sign up-link').classList.add('underline', 'underline-offset-4');
      } else {
        document.getElementById('home-section').scrollIntoView({behavior: 'smooth'});
        document.getElementById('Home-link').classList.add('underline', 'underline-offset-4');
      }  
    }, 600);
    
    return () => clearTimeout(timer);
  }

  useEffect(() => {
    // if the screen is wider than it is tall, make the text container flex
    // else make it block
    if(window.innerWidth >= window.innerHeight + 100) {setClass('flex-row')}
    else {setClass('flex-col')}

    const handleResize = () => {
      setResized(resized + 1);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [resized]);

  return (
    <div ref={containerRef} id="about-section" className={'h-full w-full flex bg-gradient-to-t from-slate-600 ' + containerClass} onWheel={handleScroll}>
      <div className="md:pt-32 md:px-20 pt-16 px-12 sm:basis-8/12 basis-9/12 flex flex-col">
        <motion.div ref={textRef} initial={{opacity: 0}} animate={textIsInView ? {opacity: 1} : {opacity: 0}} transition={{ease: "easeIn", duration: 2}}
          className='md:basis-2/12 basis-2/12' 
        >
          <p className="md:text-4xl sm:text-3xl text-2xl font-playfair font-semibold pt-4">Know the pulse of the world</p>
          <p className="md:text-lg sm:text-lg mt-2 font-rubik">With the following features you'll be able to catch up with the major world events for the day in no more than 30 minutes.</p>
        </motion.div>
        <motion.div className="md:basis-10/12 basis-10/12 grid grid-cols-2 md:items-start items-end">
          {cardData.info.map((card) => (
            <FeaturesCard title={card.title} body={card.body} bgClass={card.bgClass} animationX={card.animationX} key={uuid()}/>
          ))}
        </motion.div>
      </div>
      <motion.div className={"sm:basis-4/12 basis-3/12 overflow-hidden"} >
        <motion.div className={styles.bg_wallpaper}  transition={{duration: 1.5, repeat: Infinity}} animate={{scale: [1, 1.03, 1]}}></motion.div>
      </motion.div>
    </div>
  );
}

export default About;
