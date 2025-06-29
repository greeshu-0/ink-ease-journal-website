import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import features from "./featuresData";


export default function AboutSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#fdf6ec] px-4 py-12 text-center">
      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="md:text-5xl text-3xl text-gray-700 mb-4">
          Why This Journal?
        </h2>
        <p className="max-w-2xl md:text-lg text-md mx-auto text-gray-500 mb-8">
          Whether it's for self-love, mental clarity, or emotional healing, this
          journal walks with you through every season. 🌙
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl text-gray-700">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
