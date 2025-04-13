import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import option from "./Option Box.png"
import nextOption from "./Next.png"
import normWin from "./Norm Win.png"
import bestWin from "./Best Win.png"
import restart from "./Restart.png"

type ChoiceKey = "default" | "next" | "normWin" | "bestWin" | "restart"

interface ChoiceProps {
    choiceKey: ChoiceKey
}

const imageMap: Record<ChoiceKey, string> = {
    default: option,
    next: nextOption,
    normWin: normWin,
    bestWin: bestWin,
    restart: restart,
}


export const Choices: React.FC<ChoiceProps> = ({ choiceKey }) => {
    const isDefault = choiceKey === "default"

    const defaultOptions = [option, option]

    return (
        <div className="fixed bottom-10 inset-x-0 flex justify-center">
            <div className="flex flex-row gap-10 w-full max-w-md justify-center">
                {isDefault ? (
                    defaultOptions.map((src, index) => (
                        <img
                            key = {index}
                            src = {src}
                            className="w-150 h-28 cursor-pointer hover:scale-105 transition-transform"
                        />
                    ))
                ): (
                    <img
                        src={imageMap[choiceKey]}
                        className="w-150 h-28 cursor-pointer hover:scale-105 transition-transform"
                    />)}
            </div>
        </div>
    );
};

