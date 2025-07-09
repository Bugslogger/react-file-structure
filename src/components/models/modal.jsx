import React, { memo } from "react";
import { motion } from "framer-motion";

const SimpleModal = ({ children, open, onClose, header }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="max-w-3xl w-full h-auto"
      >
        <div className="flex flex-col items-start p-8 bg-white rounded-lg shadow-lg w-full max-w-3xl overflow-y-auto h-full">
          {/* Heading */}
          {header && (
            <div className="text-lg text-inherit font-bold mb-4">{header}</div>
          )}
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default memo(SimpleModal);
