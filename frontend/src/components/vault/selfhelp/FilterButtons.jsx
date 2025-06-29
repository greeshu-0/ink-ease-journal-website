export default function FilterButtons({ types, selectedType, setSelectedType }) {
  return (
    <div className="flex justify-center gap-3 mb-10 flex-wrap">
      {types.map((type) => (
        <button
          key={type}
          onClick={() => setSelectedType(type)}
          className={`px-4 py-1 rounded-full text-sm font-medium transition ${
            selectedType === type
              ? "bg-yellow-300 text-yellow-900 shadow-md"
              : "bg-yellow-100 hover:bg-yellow-200 text-yellow-700"
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
