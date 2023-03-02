import { useState, useEffect } from "react";

function Typewriter({headline}) {
    const [text, setText] = useState(headline);
    const [index, setIndex] = useState(0);
    const typeSpeed = [50, 150, 200];
    const repeatSpeed = [1000, 2000, 3000];
    const fonts = ['rubik', 'playfair', 'sans', 'nanum', 'anton', 'gloock']
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
        }, repeatSpeed[getRandomNumber(0,2)]);
    }
    }, [index, text]);

    return <div className={"grow bg-transparent text-black text-6xl align-middle overflow-hidden z-10 font-bold font-" + fonts[getRandomNumber(0,5)]}>{text.substring(0, index)}</div>;
}

export default Typewriter;