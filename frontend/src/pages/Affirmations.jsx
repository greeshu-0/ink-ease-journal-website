import { useState } from "react";
import affirmationsList from "../components/vault/affirmation/affirmation.js";
import AffirmationBox from "../components/vault/affirmation/AffirmationBox.jsx";
const getRandomIndex = (exclude) => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * affirmationsList.length);
  } while (newIndex === exclude);
  return newIndex;
};
export default function Affirmations() {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * affirmationsList.length)
  );
  const handleNext = () => {
    const newIndex = getRandomIndex(currentIndex);
    setCurrentIndex(newIndex);
  };
  return (
    <div className="min-h-screen bg-gradient-to-bl from-pink-50 via-rose-100 to-yellow-100 p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full text-center space-y-12">
        <div>
          <h1 className="text-5xl font-vibes text-pink-700 mb-2">
            Daily Affirmations 🌷
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Let your soul bloom with kind thoughts 🌿
          </p>
        </div>
        <AffirmationBox text={affirmationsList[currentIndex]} />
        <button
          onClick={handleNext}
          className="px-7 py-3 rounded-full bg-pink-500 text-white font-semibold shadow-md hover:bg-pink-600 transition duration-300"
        >
          ✨ New Affirmation
        </button>
      </div>
    </div>
  );
}
