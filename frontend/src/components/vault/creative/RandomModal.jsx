export default function RandomModal({ activity, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="relative w-full max-w-md mx-4">
        <div className="relative bg-white shadow-xl p-4 rounded-xl animate-fade-in">
          <button
            className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 text-2xl z-10"
            onClick={onClose}
          >
            ×
          </button>
          {activity.image && (
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          )}
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
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
