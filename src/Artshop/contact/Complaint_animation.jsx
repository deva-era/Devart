
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Complaint_animation({ handle_close }) {
  return (
    <>
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
              Thank You for Your Comment!
            </div>
          </div>

          <p className="text-gray-600 mt-1 w-4/6 text-center">
            Application has been sent successfully!! <span className="font-semibold"></span>.
          </p>

          {/* <p className="text-gray-500 text-sm">
            You'l.
          </p> */}

          <button
            className="text-white bg-orange-400 px-24 py-1 rounded-full mt-2 hover:bg-orange-600"
            onClick={() => handle_close(false)}
          >
            OK
          </button>
        </div>
      </motion.div>
    </>
  );
}
