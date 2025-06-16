import React, { memo, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { animate } from "motion";

const ModelWrapper = ({ children, open, handleClose }) => {
  useEffect(() => {
    animate(".model", { x: open ? 0 : -1000 });
  }, [open]);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 100, opacity: 1 }}
        // animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 1 }}
        // transition={{ ease: "easeInOut", duration: 2 }}
        className="relative z-10 model"
        // aria-labelledby="dialog-title"
        role="dialog"
        // aria-modal="true"
      >
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-gray-500/75 transition-opacity"
          aria-hidden="true"
        ></div>
        <motion.div
          exit={{ x: 100, opacity: 1 }}
          initial={{ x: -1000, opacity: 1 }}
          animate={{ x: open ? 0 : -1000, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="fixed inset-0 z-30 w-screen overflow-y-auto"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default memo(ModelWrapper);
