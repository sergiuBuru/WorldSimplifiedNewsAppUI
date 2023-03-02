import { motion } from 'framer-motion';
import { useInView } from "framer-motion";
import { useRef } from 'react';

function FeaturesCard({title, body, bgClass, animationX}) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef);

    return (
    <motion.div ref={cardRef} className={" bg-black mdy:p-10 rounded-md lg:py-7 md:py-2 md:px-2 lg:px-4 py-3 px-2 shadow-2xl md:w-4/5 md:h-9/10 h-95/100 w-11/12 text-white " + bgClass}
        initial={{opacity: 0, x: animationX}} animate={cardInView ? {opacity: 1, x:0} : {opacity: 0}} transition={{duration: 1}}
    >
        <p className=" mdy:text-2xl xl:text-2xl md:text-xl text-sm font-rubik underline underline-offset-4">{title}</p>
        <p className=" mdy:text-lg xl:text-base lg:text-base md:text-base sm:text-sm text-xs font-rubik mt-2">{body}</p>
    </motion.div>
  )
}

export default FeaturesCard