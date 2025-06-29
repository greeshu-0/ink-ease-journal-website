export default function PromptCard({ item, setSelectedPrompt }) {
  return (
    <div
      onClick={() => setSelectedPrompt(item)}
      className="relative rounded-3xl p-6 bg-white/60 backdrop-blur-md shadow-lg border-l-[10px] transition-all duration-300 hover:shadow-xl hover:scale-[1.015] cursor-pointer group"
      style={{
        borderColor: item.color,
      }}
    >
      <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-100 rounded-full opacity-20 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-6 right-0 w-16 h-16 bg-pink-100 rounded-full opacity-20 blur-2xl pointer-events-none" />
      <h2 className="text-[20px] font-semibold text-purple-700 mb-2 tracking-wide">
        {item.title}
      </h2>
      <p className="text-gray-700 text-[15px] leading-relaxed tracking-wide">
        {item.question}
      </p>
    </div>
  );
}
