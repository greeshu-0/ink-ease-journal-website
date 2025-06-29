import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

export default function VaultCard({ title, desc, image, to }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      className="h-screen snap-start relative flex flex-col justify-center items-center text-center px-4"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gray-800 bg-opacity-30 z-0" />
      <div className="z-10 transition-opacity duration-1000 ease-in-out bg-whit w-auto">
        <h2
          className={`text-6xl md:text-8xl font-vibes mb-4 text-white font-semibold transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-xl md:text-2xl mb-6 font-mono font-bold text-white transition-all duration-1000 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {desc}
        </p>
        <Link
          to={to}
          className="inline-block bg-gray-700 text-seashell font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-600 transition"
        >
          Explore →
        </Link>
      </div>
    </section>
  );
}
