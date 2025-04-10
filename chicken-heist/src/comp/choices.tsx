import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import option from "./Option Box.png"
import nextOption from "./Next.png"
import normWin from "./Norm Win.png"
import bestWin from "./Best Win.png"
import restart from "./Restart.png"


export const Choices = () => {
    return (
        <div className="fixed bottom-[-60px] left-[42%] transform -translate-x-3/4 w-[350px] h-60 scale-75">
            <div className="flex flex-row gap-32">
                <img
                    src={option}
                    className="cursor-pointer hover:scale-105 transition-transform"
                />
                <img
                    src={option}
                    className="cursor-pointer hover:scale-105 transition-transform"
                />
            </div>
        </div>
    );
};
