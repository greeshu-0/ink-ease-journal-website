import { useState } from "react";
import reads from "../components/vault/selfhelp/reads";
import ReadCard from "../components/vault/selfhelp/ReadCard";
import FilterButtons from "../components/vault/selfhelp/FilterButtons";

const filterTypes = ["All", "📖 Book", "📰 Blog", "🎧 Podcast"];

export default function SelfHelpReads() {
  const [selectedType, setSelectedType] = useState("All");

  const filteredReads =
    selectedType === "All"
      ? reads
      : reads.filter((item) => item.type === selectedType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-100 p-6">
      <div className="max-w-6xl mx-auto mt-10">
        <h1 className="text-5xl font-vibes text-center text-yellow-600 mb-2 font-bold">
          📚 Self-Help Reads
        </h1>
        <p className="text-center text-gray-600 mb-6 text-lg italic">
          Curated sunshine for your mind and soul. 🌞
        </p>

        <FilterButtons
          types={filterTypes}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReads.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No reads found for this category. 🌸
            </p>
          ) : (
            filteredReads.map((item, index) => <ReadCard key={index} item={item} />)
          )}
        </div>
      </div>
    </div>
  );
}
