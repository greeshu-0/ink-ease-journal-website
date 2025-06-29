import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "@fontsource/great-vibes";

export default function HeroSection() {
  return (
    <section
      className="h-screen bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1643148636637-58b3eb95cdad?q=80&w=1170&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-30 z-0" />
      <motion.div
        className="z-10 space-y-6 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-8xl font-vibes">Welcome to Ink & Ease...</h1>
        <p className="text-2xl">
          A peaceful space for reflection, healing, and journaling. 🌿
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Link
            to="/signup"
            className="px-6 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-200 transition"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition"
          >
            Login
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
