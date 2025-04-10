import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import scenarioImage from "./Scenario-Box.png";
import guardBox from "./Gueard Box.png";
import flandersBox from "./Flander Box.png";
import bossBox from "./Boss Box.png";

type ScenarioKey = "default" | "guard" | "flanders" | "boss";

interface ScenariosProps {
  scenarioKey: ScenarioKey;
}

const imageMap: Record<ScenarioKey, string> = {
  default: scenarioImage,
  guard: guardBox,
  flanders: flandersBox,
  boss: bossBox,
};

export const Scenarios: React.FC<ScenariosProps> = ({ scenarioKey }) => {
  return (
    <div className="fixed top-[50%] left-1/2 -translate-x-1/2 scale-x-150 scale-y-110">
      <AnimatePresence mode="wait">
        <motion.img
          key={scenarioKey}
          src={imageMap[scenarioKey]}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
};
