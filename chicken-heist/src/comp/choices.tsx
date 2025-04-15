import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import option from "./Option Box.png";
import nextOption from "./Next.png";
import normWin from "./Norm Win.png";
import bestWin from "./Best Win.png";
import restart from "./Restart.png";

type ChoiceKey = "default" | "next" | "normWin" | "bestWin" | "restart" | any

type Choice = {
    text: string;
    nextId: number;
};

interface ChoiceProps {
    choiceKey: ChoiceKey;
    options: Choice[];
    onClick: (nextId: number) => void;
}

const imageMap: Record<ChoiceKey, string> = {
    default: option,
    next: nextOption,
    normWin: normWin,
    bestWin: bestWin,
    restart: restart,
};

export const Choices: React.FC<ChoiceProps> = ({ choiceKey, options, onClick }) => {
    const isDefault = choiceKey === "default";

    return (
        <div className="fixed bottom-10 inset-x-0 flex justify-center">
            <div className="flex flex-row gap-10 w-full max-w-4xl justify-center">
                {isDefault ? (
                    options.map((option, index) => (
                        <div
                            key={index}
                            className="relative w-150 h-28 cursor-pointer hover:scale-105 transition-transform"
                            onClick={() => onClick(option.nextId)}
                        >
                            <img
                                src={imageMap.default}
                                alt={`Option ${index}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-center px-2 text-black font-semibold">
                                {option.text}
                            </div>
                        </div>
                    ))
                ) : (
                    <img
                        src={imageMap[choiceKey]}
                        className="w-150 h-28 cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => onClick(options[0].nextId)}
                    />
                )}
            </div>
        </div>
    );
};
