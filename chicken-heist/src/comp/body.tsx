import React from "react";
import { motion, AnimatePresence } from "framer-motion"

import commT from './commT.mp40001-0025.webm'
import recipe from './recipe doc0001-0020.webm'
import guardNeutral from './guard-neutral.png'
import guardConfused from './guard-confused.png'
import guardAngry from './guard-angry.png'
import doors from './doors.png'
import yoga from './yoga.png'
import breakroom from './breakroom.png'
import staffNeutral from './staffNeutral.png'
import staffConfused from './staffConfused.png'
import staffAngry from './staffAngry.png'
import safe from './safe0001-0015.webm'
import chickenLove from './chickenLove0001-0010.webm'

type BodyKey = "flanders" | "recipe" | "guardNeutral" | "guardConfused" | "guardAngry" | "staffYoga"| "breakroom" | "threeDoors" | "staffNeutral" | "staffAngry" | "staffConfused" | "mouthFeed" | "canteen" | "deepFryer" | "duckLadyNice" | "duckLadyHappy" | "duckLadyCry" | "chickenPetting" | "chickenHappyPet" | "staffPhoto" | "chickenThrow" | "bossNeutral" | "bossHappy" | "bossCry" | "safe" | "bossSit" | "explosion" | any

interface BodyProps {
    bodyKey: BodyKey
} 

const bodyMap: Record<BodyKey, string> ={
    flanders: commT,
    recipe: recipe,
    guardNeutral: guardNeutral,
    guardConfused: guardConfused,
    guardAngry: guardAngry,
    threeDoors: doors,
    staffYoga: yoga,
    breakroom: breakroom,
    staffNeutral: staffNeutral,
    staffAngry: staffAngry,
    staffConfused: staffConfused,
    safe: safe,
    chickenHappyPet: chickenLove,
    /*mountFeed: ,
    duckLadyNice: ,
    duckLadyHappy: ,
    duckLadyCry: ,
    chickenPetting: ,
    staffPhoto: ,
    chickenThrow: ,
    bossNeutral: ,
    bossHappy: ,
    bossCry: ,
    bossSit: ,
    explosion: , */
}

export const Body: React.FC<BodyProps> = ({ bodyKey }) => {
    const src = bodyMap[bodyKey]
    const isVideo = src.endsWith('.webm')

    return(
        <>
            <div className='fixed bottom-48 size-96 scale-150 flex left-1/2 -translate-x-1/2'>
                <AnimatePresence mode="wait">
                <motion.div
                    key={bodyKey}
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                {isVideo ? (
                        <video
                            autoPlay
                            loop
                            playsInline
                            src={src}
                            style={{ backgroundColor: 'transparent' }}
                        />
                    ) : (
                        <img
                            src={src}
                            className='fixed bottom-20 size-96 scale-[60%] w-max flex left-1/2 -translate-x-1/2'
                        />
                    )}  
                </motion.div>
                </AnimatePresence>
            </div>
        </>
    )
}