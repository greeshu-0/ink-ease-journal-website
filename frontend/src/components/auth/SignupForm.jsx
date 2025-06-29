import { useState } from "react";

export default function SignupForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => onSubmit(e, { name, email, password })}
      className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
    >
      <h2 className="text-2xl font-bold text-gray-600 text-center mb-6">
        Create Your Account 💌
      </h2>

      <label className="block mb-2 text-sm text-gray-700">Name</label>
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 mb-4 border rounded-xl text-gray-600 placeholder-gray-400 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
        placeholder="Your sweet name"
      />

      <label className="block mb-2 text-sm text-gray-700">Email</label>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 mb-4 border rounded-xl text-gray-600 placeholder-gray-400 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
        placeholder="you@example.com"
      />

      <label className="block mb-2 text-sm text-gray-700">Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 mb-6 border rounded-xl text-gray-600 placeholder-gray-400 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
        placeholder="Create a strong password"
      />

      <button
        type="submit"
        className="w-full bg-gray-700 text-seashell py-2 rounded-xl hover:bg-gray-400 transition-all"
      >
        Sign Up
      </button>
    </form>
  );
}
