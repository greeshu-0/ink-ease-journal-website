import { motion } from "framer-motion";
import "@fontsource/dancing-script"; 

export default function ReminderSection() {
  return (
    <section
      className="relative h-screen w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_vector-1724774806398-b2979ecce9d4?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-[#fdf6ec] bg-opacity-75 z-0" />

      <motion.div
        className="z-10 w-full flex flex-col items-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="md:text-7xl text-5xl font-dancing text-gray-700 whitespace-nowrap">
          🕊️ Today’s Gentle Reminder
        </h2>
        <p className="md:text-3xl text-xl text-gray-600 font-medium">
          You’re doing the best you can — and that’s more than enough. 💖
        </p>
        <p className="md:text-xl text-md text-gray-500">
          Come back here anytime your soul needs a little softness.
        </p>
      </motion.div>
    </section>
  );
}
