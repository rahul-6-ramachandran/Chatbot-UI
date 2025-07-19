import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TypingParagraph from "../components/Paragraph";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex items-center overflow-hidden justify-center bg-gradient-to-br from-gray-100 to-white px-4">
<motion.div
  initial={{ scale: 1 }}
  animate={{ scale: 1.15 }}
  transition={{
    duration: 10,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse",
  }}
  className="absolute inset-0 w-screen h-screen bg-cover bg-center opacity-100 pointer-events-none select-none z-0 hidden md:block"
  style={{
    backgroundImage: `url('/images/abstract low poly plexus design in black and white 0609.jpg')`,
  }}
/>

       

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl z-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl z-20 font-extrabold tracking-tight  md:text-gray-200"
        >
          Talk to AI. Get Things Done.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-lg md:text-gray-200"
        >
          <TypingParagraph text="Your intelligent assistant for code, writing, tasks, and more — all in one place."   />
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.2 }}
          onClick={() => navigate("/dashboard")}
          className="mt-8 px-8 py-3 md:bg-white bg-black text-white md:text-black text-lg rounded-2xl shadow-md md:hover:bg-gray-800 hover:text-gray-200 transition"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}
