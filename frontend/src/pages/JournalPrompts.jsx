import { useState } from "react";
import PromptSection from "../components/vault/journal/PromptSection";
import PromptModal from "../components/vault/journal/PromptModal";
import prompts from "../components/vault/journal/promptData";
const releaseMoods = ["🌙", "🌊", "💌"];
export default function JournalPrompts() {
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [response, setResponse] = useState("");
  const [showAnimation, setShowAnimation] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const isReleasing =
    selectedPrompt && releaseMoods.includes(selectedPrompt.mood);
  const handleAction = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowQuote(true);
      setShowAnimation(false);
    }, 800);
    setTimeout(() => {
      setSelectedPrompt(null);
      setResponse("");
      setShowQuote(false);
    }, 3000);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-white to-purple-100 p-8">
      <div className="max-w-4xl mx-auto text-center mt-8">
        <PromptSection
          prompts={prompts}
          setSelectedPrompt={setSelectedPrompt}
        />
        {selectedPrompt && (
          <PromptModal
            selectedPrompt={selectedPrompt}
            setSelectedPrompt={setSelectedPrompt}
            response={response}
            setResponse={setResponse}
            handleAction={handleAction}
            isReleasing={isReleasing}
            showAnimation={showAnimation}
            showQuote={showQuote}
          />
        )}
      </div>
    </div>
  );
}
