import React from "react";
import titleCard from "./Title Card.png";
import startButton from "./Start Button.png";

interface StartScreenProps {
    onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
    return (
        <>
        <div className="fixed h-screen w-screen overflow-hidden">
            <img src={titleCard} className="w-full h-full object-fill" />
        </div>
        <button
            onClick={onStart}
            className="fixed bottom-[-60px] left-1/2 transform -translate-x-1/2 w-52 h-52 scale-50 hover:scale-75 transition-transform"
        >
            <img src={startButton} />
            </button>
            </>
    );
};
