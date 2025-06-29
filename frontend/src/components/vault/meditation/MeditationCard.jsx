export default function MeditationCard({ item }) {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-md p-6 border-l-8 border-emerald-300 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
      <h2 className="text-xl font-semibold text-emerald-800 mb-1">
        {item.title}
      </h2>
      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
      <audio controls className="w-full rounded-md">
        <source src={item.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
