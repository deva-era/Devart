import Confetti from "react-confetti";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Ordered_animation({ handle_congrates}) {
  return (
    <>
      <Confetti numberOfPieces={50}    gravity={0.5} // Increase gravity for faster fall
      wind={0.01} // Adjust wind for direction
      tweenDuration={2000} />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        <div className="flex flex-col items-center">
          <div>
            <div className="text-xl font-bold text-cyan-400 mt-2">
              Thank You for Your Order!
            </div>
          </div>

          <p className="text-gray-600 mt-1">
            Our team will contact!! <span className="font-semibold"></span>.
          </p>

          <p className="text-gray-500 text-sm">
            You'll receive a confirmation email shortly.
          </p>

          <button
            className="text-white bg-orange-400 px-24 py-1 rounded-full mt-2 hover:bg-orange-600"
            onClick={() => handle_congrates(false)}
          >
            OK
          </button>
        </div>
      </motion.div>
    </>
  );
}

// export default Ordered_animation;
