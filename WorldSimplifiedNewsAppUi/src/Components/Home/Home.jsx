import React, { useEffect, useRef, useState } from "react";
import styles from './Home.module.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { motion } from 'framer-motion';
import { useInView } from "framer-motion";

function Home() {
  const ref = useRef(null);
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef)
  const [buttonSize, setSize] = useState('');
  const [buttonBasis, setBasis] = useState('')

  const handleGetStarted = () => {
    // remove the underline from 'Home' and place it under 'Sign up'
    document.getElementById('Sign up-link').classList.add('underline', 'underline-offset-4');
    document.getElementById('Home-link').classList.remove('underline', 'underline-offset-4');

    // scroll to the Signup section
    document.getElementById('signup-section').scrollIntoView({behavior: 'smooth'});
  }

  const handleLearnMore = () => {
    // remove the underline from 'Home' and place it under 'About'
    document.getElementById('About-link').classList.add('underline', 'underline-offset-4');
    document.getElementById('Home-link').classList.remove('underline', 'underline-offset-4');

    // scroll to the Signup section
    document.getElementById('about-section').scrollIntoView({behavior: 'smooth'});
  }

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

  const GetStartedButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: 'black',
    '&:hover': {
      backgroundColor: grey[800],
    },
  }));
  const LearnMoreButton = styled(Button)(({}) => ({
    color: 'black',
  }));

  useEffect(() => {
    if(window.innerWidth < 750) {
      setSize('small');
      setBasis('basis-1/2')
    }
    else {
      setSize('medium');
      setBasis('basis-1/3')
    }
  });

  return (
    <div ref={ref} id="home-section"  onWheel={handleScroll}  className="h-full w-full overflow-hidden">
      <div className={"h-full w-full overflow-hidden text-center " + styles.bg_wallpaper}></div>
      <motion.div ref={heroRef} className={"absolute top-[25%] mx-16 sm:mx-36 md:mx-40 lg:mx-52 xl:w-[44%] xl:mx-[23%] text-center backdrop-blur-[4px] h-fit p-5"}
        initial={{opacity: 0, y: -50}} animate={heroInView ? {opacity: 1, y:0} : {opacity: 0}} transition={{duration: 1}}
      >
        <p className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-playfair backdrop-blur-[1px] mb-1">Understand the world around you</p>
        <p className={"sm:text-xl md:text-xl font-normal backdrop-blur-[6px] border-black border-[1px] p-3 rounded-sm mb-4 font-playfair"} >Stay up to date with major current events around the world. We provide the latest news in areas such as politics, science, economics and others, customized according to your interests from hundres of different sources</p>
        <div className="flex justify-center space-x-2">
          <GetStartedButton className={buttonBasis} variant="contained" size={buttonSize} onClick={handleGetStarted}>Get started</GetStartedButton>
          <LearnMoreButton variant="text" className={buttonBasis} size={buttonSize} onClick={handleLearnMore}>Learn more <ArrowForwardIcon fontSize="small" className="ml-1"/></LearnMoreButton>
        </div>
      </motion.div>
    </div>
    
    
  );
}

export default Home;
