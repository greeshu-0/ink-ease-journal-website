import "./PromptModal.css";
import PromptContent from "./PromptContent";
export default function PromptModal({
  selectedPrompt,
  setSelectedPrompt,
  response,
  setResponse,
  handleAction,
  isReleasing,
  showAnimation,
  showQuote,
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
      <div
        className={`bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center relative animate-fade-in transition-transform duration-700 ${
          showAnimation ? "animate-float-away" : ""
        }`}
      >
        <button
          onClick={() => {
            setSelectedPrompt(null);
            setResponse("");
            setShowQuote(false);
          }}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          {selectedPrompt.title}
        </h2>
        <PromptContent
          showQuote={showQuote}
          quote={selectedPrompt.quote}
          question={selectedPrompt.question}
          response={response}
          setResponse={setResponse}
          isReleasing={isReleasing}
          handleAction={handleAction}
        />
      </div>
    </div>
  );
}
