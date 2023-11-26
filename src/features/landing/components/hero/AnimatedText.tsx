import React, { useEffect, useRef } from 'react'
import './AnimatedText.css'
const AnimatedText = () => {
    const refs = useRef<(HTMLDivElement | null)[]>([])
    let index = 0;

    function changeText(texts: (HTMLDivElement | null)[]) {
        const currentText = texts[index];
        const nextIndex = (index + 1) % texts.length;
        const nextText = texts[nextIndex];

        currentText?.classList.remove("active");
        nextText?.classList.add("active");

        index = nextIndex;
    }

    useEffect(() => {
        const texts = refs.current;
        setInterval(() => {
            changeText(texts);
        }, 2000);
    }, [refs])

    return (
        <div className="text-container">
            <div ref={(el) => (refs.current[0] = el)} className="text active w-[200px]" id="text1">Optimal</div>
            <div ref={(el) => (refs.current[1] = el)} className="text w-[200px]" id="text2">Simple</div>
            <div ref={(el) => (refs.current[2] = el)} className="text w-[200px]" id="text3">Efficient</div>
        </div>
    )
}

export default AnimatedText