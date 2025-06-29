import { useRef, useEffect } from "react";
export default function EntryInput({ title, setTitle, content, setContent }) {
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [content]);
  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full text-3xl p-4 mb-4 rounded-xl border border-transparent bg-gray-100 text-center hover:border-gray-500 focus:border-gray-500 focus:outline-none transition text-gray-700"
      />
      <textarea
        ref={textareaRef}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your thoughts..."
        className="w-full p-4 rounded-xl border border-transparent bg-gray-100 text-xl overflow-hidden hover:border-gray-500 focus:border-gray-500 focus:outline-none transition text-gray-600"
        rows={12}
      />
    </>
  );
}
