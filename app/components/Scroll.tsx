"use client"
import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform, } from "motion/react"
import { data } from "../../lib/data"
import { useRef } from "react"

type DataType = {
    id: number
    title: string
    description: string
    image: string
    ability: string
    color: string
}

export default function Scroll() {

    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start", "end", "end", "start"]
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("value", latest)
    })

    const translateContent = useTransform(scrollYProgress, [0.5, 1], [-200, 100])

    return (
        <>
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 min-h-screen p-8">
                <div className="flex flex-col mx-auto justify-center max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl font-bold  mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                            Character Gallery
                        </h1>
                        <p className="text-slate-300 text-lg">Discover amazing abilities and stories</p>
                    </motion.div>

                    <div className="space-y-24">
                        {data.map((info: DataType, idx: number) => {
                            const isEven = idx % 2 === 0;

                            return (
                                <motion.div
                                    key={info.id}
                                    initial={{ opacity: 0, x: isEven ? -200 : 300 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    ref={ref}
                                    style={{
                                        y: translateContent
                                    }}


                                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''
                                        }  h-screen `}
                                >
                                    {/* Info Section */}
                                    <div className={`space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50"
                                        >
                                            <div
                                                className="w-3 h-16 rounded-full mb-6"
                                                style={{ backgroundColor: info.color }}
                                            ></div>

                                            <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                                                {info.title}
                                            </h2>

                                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                                {info.description}
                                            </p>

                                            <div className="flex items-center space-x-3">
                                                <div
                                                    className="w-2 h-2 rounded-full"
                                                    style={{ backgroundColor: info.color }}
                                                ></div>
                                                <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                                                    {info.ability}
                                                </span>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Image Section */}
                                    <motion.div

                                        className={`${!isEven ? 'lg:order-1' : ''}`}>
                                        <motion.div
                                            style={{ y: translateContent }}
                                            whileHover={{ scale: 1.05, rotate: 1 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            className="relative group"
                                        >
                                            <div
                                                className="absolute -inset-1 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                                                style={{ backgroundColor: info.color }}
                                            ></div>

                                            <div className="relative bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                                                <img
                                                    src={info.image}
                                                    alt={info.title}
                                                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                                                />

                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-white font-medium">
                                                            {info.title}
                                                        </span>
                                                        <div
                                                            className="w-3 h-3 rounded-full shadow-lg"
                                                            style={{ backgroundColor: info.color }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div >
        </>
    );
}