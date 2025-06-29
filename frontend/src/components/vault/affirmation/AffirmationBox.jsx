export default function AffirmationBox({ text }) {
  return (
    <div className="relative bg-white/60 backdrop-blur-md rounded-[2rem] shadow-xl border-4 border-pink-200 px-10 py-8 transition-all duration-700 ease-in-out">
      <p className="text-2xl text-pink-800 font-semibold leading-relaxed animate-fade-in">
        “{text}”
      </p>
      <div className="absolute -top-4 -left-4 w-6 h-6 bg-pink-300 rounded-full shadow-md"></div>
      <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-yellow-200 rounded-full shadow-md"></div>
    </div>
  );
}
