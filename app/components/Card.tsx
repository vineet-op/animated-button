"use client"

import { motion, useAnimate } from "motion/react"
import { useState } from "react"

export default function Card() {
    const [scope, animate] = useAnimate()
    const [paid, setPaid] = useState(false)

    const HandleClick = async () => {
        // Animate button
        await animate("button", {
            width: 100,
            borderRadius: "100%",
            backgroundColor: "green"
        }, {
            duration: 0.3,
            delay: 0.1
        })

        // Fade out text
        await animate("span", { opacity: 0 }, { duration: 0.2 })

        // Update to tick icon
        setPaid(true)

        // Fade in tick
        await animate("span", { opacity: 1 }, { duration: 0.2 })
    }

    return (
        <div
            ref={scope}
            className="w-screen h-screen flex justify-center items-center bg-slate-950"
        >
            <motion.button
                onClick={HandleClick}
                className="font-sans text-lg font-normal py-6 px-5 rounded-full text-center text-white bg-purple-500 cursor-pointer w-72 lg:w-xl h-25"
            >
                <motion.span className="flex items-center justify-center gap-2">
                    {paid ? (
                        <div className="flex flex-col items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={5}
                                stroke="currentColor"
                                className="w-6 h-6 text-white"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>

                            <span className="font-light text-sm">Success</span>

                        </div>

                    ) : (
                        "Pay $1000"
                    )}
                </motion.span>
            </motion.button>
        </div>
    )
}
