import React from "react";
import { motion, AnimatePresence } from "framer-motion"

import commT from './commT.mp40001-0025.webm'
import recipe from './recipe doc0001-0020.webm'

type BodyKey = "flanders" | "recipe" | "guardNeutral" | "guardConfused" | "guardAngry" | "staffYoga"| "breakroom" | "threeDoors" | "staffNeutral" | "staffAngry" | "staffConfused" | "mouthFeed" | "canteen" | "deepFryer" | "duckLadyNice" | "duckLadyHappy" | "duckLadyCry" | "chickenPetting" | "chickenHappyPet" | "staffPhoto" | "chickenThrow" | "bossNeutral" | "bossHappy" | "bossCry" | "safe" | "bossSit" | "explosion" | any

interface BodyProps {
    bodyKey: BodyKey
} 

const bodyMap: Record<BodyKey, string> ={
    flanders: commT,
    recipe: recipe,
    /*guardNeutral: ,
    guardConfused: ,
    guardAngry: ,
    staffYoga: ,
    breakroom: ,
    threeDoors: ,
    staffNeutral: ,
    staffAngry: ,
    staffConfused: ,
    mountFeed: ,
    canteen: ,
    deepFryer: ,
    duckLadyNice: ,
    duckLadyHappy: ,
    duckLadyCry: ,
    chickenPetting: ,
    chickenHappyPet: ,
    staffPhoto: ,
    chickenThrow: ,
    bossNeutral: ,
    bossHappy: ,
    bossCry: ,
    safe: ,
    bossSit: ,
    explosion: , */
}

export const Body: React.FC<BodyProps> = ({ bodyKey }) => {
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
                    <video autoPlay loop playsInline src={bodyMap[bodyKey]} style={{backgroundColor: 'transparent'}}></video>
                </motion.div>
                </AnimatePresence>
            </div>
        </>
    )
}