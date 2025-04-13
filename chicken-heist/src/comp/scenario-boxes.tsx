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
    <div className="fixed top-2/4 inset-x-0 flex justify-center">
      <AnimatePresence mode="wait">
        <motion.img
          key={scenarioKey}
          src={imageMap[scenarioKey]}
          className="w-full max-w-3xl px-4"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
};

