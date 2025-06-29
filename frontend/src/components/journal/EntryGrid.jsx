import EntryCard from "./EntryCard";

export default function EntryGrid({ entries, onEntryClick }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-20">
      {entries.length === 0 ? (
        <p className="text-center col-span-full text-gray-600">
          No entries found.
        </p>
      ) : (
        entries.map((entry, index) => (
          <EntryCard
            key={entry.id}
            entry={entry}
            index={index}
            onClick={onEntryClick}
          />
        ))
      )}
    </div>
  );
}
