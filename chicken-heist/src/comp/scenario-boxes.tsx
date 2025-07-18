import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import scenarioImage from "./Scenario-Box.png";
import guardBox from "./Gueard Box.png";
import flandersBox from "./Flander Box.png";
import bossBox from "./Boss Box.png";

type ScenarioKey = "default" | "guard" | "flanders" | "boss" | any;

interface ScenariosProps {
  scenarioKey: ScenarioKey;
  text: string;
}

const imageMap: Record<ScenarioKey, string> = {
  default: scenarioImage,
  guard: guardBox,
  flanders: flandersBox,
  boss: bossBox,
};

export const Scenarios: React.FC<ScenariosProps> = ({ scenarioKey, text }) => {
  return (
    <div className="fixed bottom-48 inset-x-0 flex justify-center scale-100">
      <AnimatePresence mode="wait">
        <motion.img
          key={scenarioKey}
          src={imageMap[scenarioKey]}
          className="w-full max-w-3xl px-4 scale-150 max-h-52"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="absolute bottom-6 w-full max-w-3xl px-14 py-0 max-h-52 flex overflow-hidden">
        <AnimatePresence mode="wait"> 
          <motion.div 
            key={text}
            className="text-black whitespace-pre-line text-left leading-tight"
            style={{
              fontSize: "clamp(12px, 2vw, 20px)",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "left",
              justifyContent: "left",
            }}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
          {text}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
