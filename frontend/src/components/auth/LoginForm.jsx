import { useState } from "react";

export default function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => onSubmit(e, email, password)}
      className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
        Welcome Back😄
      </h2>
      <label className="block mb-2 text-sm text-gray-700">Email</label>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full px-4 py-2 mb-4 border rounded-xl bg-gray-100 placeholder-gray-400 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      <label className="block mb-2 text-sm text-gray-700">Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Your secret password"
        className="w-full px-4 py-2 mb-6 border rounded-xl bg-gray-100 placeholder-gray-400 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      <button
        type="submit"
        className="w-full bg-gray-700 text-seashell py-2 rounded-xl hover:bg-gray-400 transition-all"
      >
        Login
      </button>
    </form>
  );
}
