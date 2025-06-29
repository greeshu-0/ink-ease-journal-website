export default function PromptContent({
  showQuote,
  quote,
  question,
  response,
  setResponse,
  isReleasing,
  handleAction,
}) {
  if (showQuote) {
    return (
      <p className="text-purple-600 italic text-lg transition-opacity duration-500 ease-in">
        {quote}
      </p>
    );
  }

  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">{question}</p>
      <textarea
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        rows={5}
        placeholder="Write your thoughts here..."
        className="w-full border border-purple-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 mb-4"
      />
      <div className="flex justify-center gap-4">
        <button
          onClick={handleAction}
          className={`px-5 py-2 rounded-full font-medium transition ${
            isReleasing
              ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
              : "bg-green-100 text-green-700 hover:bg-green-200"
          }`}
        >
          {isReleasing ? "🌬️ Release It" : "🔒 Got It"}
        </button>
      </div>
    </>
  );
}
