export default function FilterBar({ filter, setFilter, onRandom }) {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border border-gray-400 rounded-xl px-4 py-2 text-sm shadow-sm"
      >
        <option value="All">✨ All Types</option>
        <option value="Drawing">🎨 Drawing</option>
        <option value="Writing">🖋️ Writing</option>
        <option value="Movement">🚶 Movement</option>
        <option value="Music">🎵 Music</option>
        <option value="Body">🧴 Body</option>
        <option value="Mind">🧠 Mind</option>
        <option value="Nature">🌿 Nature</option>
        <option value="Meditation">🧘 Meditation</option>
      </select>

      <button
        onClick={onRandom}
        className="text-sm bg-amber-100 text-amber-800 px-4 py-2 rounded-full hover:bg-amber-200 transition shadow"
      >
        🪄 Random Suggestion
      </button>
    </div>
  );
}
