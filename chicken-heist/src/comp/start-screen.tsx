import React from "react";
import titleCard from "./Title Card.png";
import startButton from "./Start Button.png";

interface StartScreenProps {
    onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
    return (
        <div className="fixed h-screen w-screen">
            <img src={titleCard} className="w-full h-full object-fill" />
            <button
                onClick={onStart}
                className="fixed inset-x-10 bottom-3 flex justify-center scale-75 hover:scale-100 transition-transform"
            >
                <img src={startButton} className="w-50 h-24" />
            </button>
        </div>
    );
};
