export default function EntryPrompt({ onClick }) {
  return (
    <div
      className="max-w-4xl mx-auto mb-6 bg-white p-4 rounded-xl border text-gray-400 cursor-text hover:border-gray-400"
      onClick={onClick}
    >
      Write your entry here...
    </div>
  );
}
