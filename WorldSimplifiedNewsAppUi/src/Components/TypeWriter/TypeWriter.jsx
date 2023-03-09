import { useState, useEffect } from "react";

function Typewriter({headline}) {
    const [text, setText] = useState(headline);
    const [index, setIndex] = useState(0);
    const typeSpeed = [30, 120, 150];
    const repeatSpeed = [500, 1500, 2000];
    const fonts = ['rubik', 'playfair', 'sans', 'nanum', 'anton', 'gloock'];
    const [font, setFont] = useState(fonts[getRandomNumber(0,5)]);

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    useEffect(() => {
    if (index < text.length) {
        setTimeout(() => {
        setIndex(index + 1);
        }, typeSpeed[getRandomNumber(0,2)]);
    } else {
        setTimeout(() => {
        setIndex(0);
        setFont(fonts[getRandomNumber(0,5)]);
        }, repeatSpeed[getRandomNumber(0,2)]);
    }
    }, [index, text]);

    return <div className={" basis-1/10 bg-transparent text-black text-xl sm:text-3xl md:text-4xl lg:text-5xl align-middle overflow-hidden z-10 font-bold font-" + font}>{text.substring(0, index)}</div>;
}

export default Typewriter;