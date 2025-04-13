import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import option from "./Option Box.png"
import nextOption from "./Next.png"
import normWin from "./Norm Win.png"
import bestWin from "./Best Win.png"
import restart from "./Restart.png"


export const Choices = () => {
    return (
        <div className="fixed bottom-10 inset-x-0 flex justify-center">
            <div className="flex flex-row gap-10 w-full max-w-md justify-center">
                <img
                    src={option}
                    className="w-150 h-28 cursor-pointer hover:scale-105 transition-transform"
                />
                <img
                    src={option}
                    className="w-150 h-28 cursor-pointer hover:scale-105 transition-transform"
                />
            </div>
        </div>
    );
};

