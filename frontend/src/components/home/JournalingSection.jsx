import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function JournalingSection() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center gap-20 h-screen bg-[#fdf6ec] px-4 lg:px-16 py-12 overflow-hidden">
      <motion.img
        src="https://images.unsplash.com/photo-1701634441311-e624c7fdfedf?q=80&w=687&auto=format&fit=crop"
        alt="Journal"
        className="w-full lg:w-[45%] lg:h-[600px] h-96 rounded-2xl shadow-xl object-cover"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="text-left space-y-4 max-w-lg"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="md:text-4xl text-2xl text-gray-700">Start Journaling 🖋️</h2>
        <p className="text-gray-600 md:text-2xl text-lg">
          Let your thoughts breathe. This is your sacred space to write,
          reflect, and feel.
        </p>
        <Link
          to="/journals"
          className="inline-block mt-4 px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
        >
          Start Now →
        </Link>
      </motion.div>
    </section>
  );
}