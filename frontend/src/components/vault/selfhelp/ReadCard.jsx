export default function ReadCard({ item }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white shadow-md hover:shadow-xl rounded-2xl overflow-hidden transform hover:scale-[1.015] transition-all border border-yellow-200 group"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="p-4">
        <div className="text-sm text-yellow-500">{item.type}</div>
        <h2 className="text-lg font-semibold text-yellow-700 mb-1">
          {item.title}
        </h2>
        <p className="text-sm text-gray-600 mb-1">by {item.author}</p>
        <p className="text-gray-700 text-sm">{item.desc}</p>
      </div>
    </a>
  );
}
