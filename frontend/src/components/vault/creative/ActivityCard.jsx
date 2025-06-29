export default function ActivityCard({ activity }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:bg-gradient-to-r hover:from-amber-50 hover:to-rose-100 transition group">
      <img
        src={activity.image}
        alt="Creative Visual"
        className="rounded-lg shadow-md object-cover w-full h-48 mb-4"
      />
      <div>
        <div className="text-sm text-gray-400 mb-1">{activity.type}</div>
        <h2 className="text-xl font-semibold text-amber-700 mb-1">
          {activity.title}
        </h2>
        <p className="text-gray-700 mb-2">{activity.desc}</p>
        <p className="text-sm text-gray-500 italic mb-2">
          🎨 Tip: {activity.tip}
        </p>
      </div>
    </div>
  );
}
