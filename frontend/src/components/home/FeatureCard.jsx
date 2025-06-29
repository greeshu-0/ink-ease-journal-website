import { motion } from "framer-motion";

export default function FeatureCard({ feature, index }) {
  return (
    <motion.div
      className="bg-gray-50 p-10 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 * index }}
    >
      <img
        src={feature.img}
        alt={feature.title}
        className="md:w-32 md:h-32 w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-300"
      />
      <h3 className="md:text-2xl text-xl text-gray-800 mb-2">{feature.title}</h3>
      <p className="md:text-md text-sm text-center text-gray-500">{feature.text}</p>
    </motion.div>
  );
}
