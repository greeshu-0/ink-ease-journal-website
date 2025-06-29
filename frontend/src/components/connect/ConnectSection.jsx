import { useState, useEffect } from "react";
import axios from "axios";

export default function ConnectSection() {
  const [comments, setComments] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userName, setUserName] = useState("");

  // 🟢 Get user's name from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.name) {
      setUserName(storedUser.name);
    } else {
      setUserName("Anonymous");
    }
  }, []);

  // 🟢 Fetch comments from DB
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/comments");
        setComments(res.data);
      } catch (err) {
        console.error("Error fetching comments:", err);
      }
    };
    fetchComments();
  }, []);

  const handlePost = async () => {
    if (!newMessage.trim()) {
      console.warn("Comment is empty!");
      return;
    }

    if (!userName.trim()) {
      console.warn("Username is missing — is the user logged in?");
      return;
    }

    const newComment = {
      name: userName || "Anonymous",
      message: newMessage.trim(),
    };
    console.log("Sending comment:", newComment);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/comments",
        newComment
      );
      console.log("Response:", res.data);
      setComments([res.data, ...comments]);
      setNewMessage("");
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10 ">
      {/* Left Section: Reminder + Entry */}
      <div className="w-full lg:w-1/2 space-y-6 mt-20">
        <h2 className="text-3xl font-bold text-gray-700 text-center mt-4">
          Wanna share your thoughts? 💬
        </h2>

        <div className="bg-white border rounded-xl shadow p-6">
          <p className="text-lg text-gray-400 font-semibold mb-2">
            🌷 Someone’s listening:
          </p>
          <p className="text-gray-600">
            Whatever's on your heart... it's safe to let it out here. You
            matter.
          </p>
        </div>

        <div className="bg-white border rounded-xl shadow p-4">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="What’s on your heart today? 💭"
            className="w-full p-3 border rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
            rows="4"
          />
          <button
            onClick={handlePost}
            className="mt-3 bg-gray-600 text-seashell px-4 py-2 rounded-md hover:bg-gray-500 transition-all"
          >
            Share 💌
          </button>
        </div>
      </div>

      {/* Right Section: Comments */}
      <div className="w-full lg:w-1/2 space-y-4 mt-20">
        {comments.length === 0 ? (
          <p className="text-gray-400 text-center mt-8">
            No messages yet. Be the first to share! 📝
          </p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="bg-white border rounded-xl shadow p-4">
              <div className="text-sm font-semibold text-orchid mb-1">
                {comment.name}
              </div>
              <p className="text-gray-600 whitespace-pre-line">
                {comment.message}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
