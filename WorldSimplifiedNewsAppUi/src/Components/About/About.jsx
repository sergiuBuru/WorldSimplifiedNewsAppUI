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
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef);

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
    <div ref={containerRef} id="about-section" className={'relative z-0 h-full w-full flex bg-slate-300 ' + containerClass} onWheel={handleScroll}>
      <div className="md:pt-32 md:px-20 pt-16 px-12 sm:basis-8/12 basis-9/12 flex flex-col">
        <motion.div ref={textRef} initial={{opacity: 0}} animate={textIsInView ? {opacity: 1} : {opacity: 0}} transition={{ease: "easeIn", duration: 2}}
          className='md:basis-2/12 basis-2/12' 
        >
          <p className="md:text-4xl sm:text-3xl text-2xl font-playfair font-semibold pt-4">Know the pulse of the world</p>
          <p className="md:text-lg sm:text-lg mt-2 font-rubik">With the following features you'll be able to catch up with the major world events for the day in no more than 30 minutes.</p>
        </motion.div>
        <motion.div className="md:basis-10/12 basis-10/12 grid grid-cols-2 md:items-start items-end z-50">
          {/* {cardData.info.map((card) => (
            <FeaturesCard title={card.title} body={card.body} bgClass={card.bgClass} animationX={card.animationX} key={uuid()} />
          ))} */}
            <motion.div key={cardData.info[0].title} ref={cardRef} className={"bg-gradient-to-b from-purple-500 to-pink-500 mdy:p-10 rounded-md lg:py-7 md:py-2 md:px-2 lg:px-4 py-3 px-2 shadow-2xl md:w-4/5 md:h-9/10 h-95/100 w-11/12 text-white "}
                initial={{opacity: 0, x: cardData.info[0].animationX}} animate={cardInView ? {opacity: 1, x:0} : {opacity: 0}} transition={{duration: 1}}
            >
                <p className=" mdy:text-2xl xl:text-2xl md:text-xl text-sm font-rubik underline underline-offset-4">{cardData.info[0].title}</p>
                <p className=" mdy:text-lg xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-rubik mt-2">{cardData.info[0].body}</p>
            </motion.div>
            <motion.div key={cardData.info[1].title} ref={cardRef} className={"bg-gradient-to-b from-cyan-900 to-red-800 mdy:p-10 rounded-md lg:py-7 md:py-2 md:px-2 lg:px-4 py-3 px-2 shadow-2xl md:w-4/5 md:h-9/10 h-95/100 w-11/12 text-white "}
                initial={{opacity: 0, x: cardData.info[1].animationX}} animate={cardInView ? {opacity: 1, x:0} : {opacity: 0}} transition={{duration: 1}}
            >
                <p className=" mdy:text-2xl xl:text-2xl md:text-xl text-sm font-rubik underline underline-offset-4">{cardData.info[1].title}</p>
                <p className=" mdy:text-lg xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-rubik mt-2">{cardData.info[1].body}</p>
            </motion.div>
            <motion.div key={cardData.info[2].title} ref={cardRef} className={"bg-gradient-to-t from-emerald-400 to-cyan-600 mdy:p-10 rounded-md lg:py-7 md:py-2 md:px-2 lg:px-4 py-3 px-2 shadow-2xl md:w-4/5 md:h-9/10 h-95/100 w-11/12 text-white "}
                initial={{opacity: 0, x: cardData.info[2].animationX}} animate={cardInView ? {opacity: 1, x:0} : {opacity: 0}} transition={{duration: 1}}
            >
                <p className=" mdy:text-2xl xl:text-2xl md:text-xl text-sm font-rubik underline underline-offset-4">{cardData.info[2].title}</p>
                <p className=" mdy:text-lg xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-rubik mt-2">{cardData.info[2].body}</p>
            </motion.div>
            <motion.div key={cardData.info[3].title} ref={cardRef} className={"bg-gradient-to-b from-black to-neutral-500 mdy:p-10 rounded-md lg:py-7 md:py-2 md:px-2 lg:px-4 py-3 px-2 shadow-2xl md:w-4/5 md:h-9/10 h-95/100 w-11/12 text-white "}
                initial={{opacity: 0, x: cardData.info[3].animationX}} animate={cardInView ? {opacity: 1, x:0} : {opacity: 0}} transition={{duration: 1}}
            >
                <p className=" mdy:text-2xl xl:text-2xl md:text-xl text-sm font-rubik underline underline-offset-4">{cardData.info[3].title}</p>
                <p className=" mdy:text-lg xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-rubik mt-2">{cardData.info[3].body}</p>
            </motion.div>
          {/* <FeaturesCard title={cardData.info[0].title} body={cardData.info[0].body} bgClass={cardData.info[0].bgClass} animationX={cardData.info[0].animationX} key={uuid()}/>
          <FeaturesCard title={cardData.info[1].title} body={cardData.info[1].body} bgClass={cardData.info[1].bgClass} animationX={cardData.info[1].animationX} key={uuid()}/>
          <FeaturesCard title={cardData.info[2].title} body={cardData.info[2].body} bgClass={cardData.info[2].bgClass} animationX={cardData.info[2].animationX} key={uuid()}/>
          <FeaturesCard title={cardData.info[3].title} body={cardData.info[3].body} bgClass={cardData.info[3].bgClass} animationX={cardData.info[3].animationX} key={uuid()}/> */}
        </motion.div>
      </div>
      <motion.div className={"sm:basis-4/12 basis-3/12 overflow-hidden"} >
        <motion.div className={styles.bg_wallpaper}  transition={{duration: 1.5, repeat: Infinity}} animate={{scale: [1, 1.03, 1]}}></motion.div>
      </motion.div>
    </div>
  );
}

export default About;
