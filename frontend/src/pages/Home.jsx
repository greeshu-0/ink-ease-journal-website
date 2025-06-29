import Header from "../components/shared/Header";
import HeroSection from "../components/home/HeroSection";
import JournalingSection from "../components/home/JournalingSection";
import AboutSection from "../components/home/AboutSection";
import ReminderSection from "../components/home/ReminderSection";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
    >
      <Header />
      <HeroSection />
      <div className="w-screen h-[2px] bg-gray-300" />
      <JournalingSection />
      <div className="w-full h-[2px] bg-gray-300" />
      <AboutSection />
      <div className="w-full h-[2px] bg-gray-300" />
      <ReminderSection />
    </motion.div>
  );
}

export default Home;
