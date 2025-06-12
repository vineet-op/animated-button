"use client"

import { useAnimate, motion, stagger } from "motion/react"
import { useEffect } from "react"

export default function AnimateText() {
    const [scope, animate] = useAnimate()
    const text = " Hello, I'm Vineet a Frontend Developer from India  Hello, I'm Vineet a Frontend Developer from India Hello, I'm Vineet a Frontend Developer from India Hello, I'm Vineet a Frontend Developer from India"

    useEffect(() => {
        animate("span", {
            opacity: 1,
            filter: "blur(0px)",
            y: 0

        }, {
            duration: 0.5,
            ease: "easeInOut",
            delay: stagger(0.02)
        })
    }, [])

    return (
        <div >
            <div
                ref={scope}
                className="text-white text-4xl font-sans font-semibold inline-block max-w-4xl"
            >
                {text.split("").map((word, idx) => (
                    <motion.span
                        style={{
                            opacity: 0,
                            filter: "blur(10px)",
                            y: 100
                        }} key={word + idx}>
                        {word}
                    </motion.span>
                ))}
            </div>
        </div>
    )
}
