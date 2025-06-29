import PromptCard from "./PromptCard";

export default function PromptSection({ prompts, setSelectedPrompt }) {
  return (
    <>
      <h1 className="text-5xl font-vibes text-purple-700 mb-4">
        📝 Guided Journal Prompts
      </h1>
      <p className="text-gray-600 text-lg italic mb-10">
        “Writing heals the soul — one word at a time.” ✨
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {prompts.map((item, index) => (
          <PromptCard
            key={index}
            item={item}
            setSelectedPrompt={setSelectedPrompt}
          />
        ))}
      </div>
    </>
  );
}
