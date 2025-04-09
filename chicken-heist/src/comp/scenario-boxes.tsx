import React from "react";
import scenarioImage from "./Scenario-Box.png"

export const Scenarios = () => {
    return(
        <>
            <div className="fixed top-[60%] left-1/2 -translate-x-1/2">
            <img src={scenarioImage} className="w-[780%] h-auto"></img>
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/6 text-white">
                    Scenarios
                </h1>
            </div>
        </>
    )
}