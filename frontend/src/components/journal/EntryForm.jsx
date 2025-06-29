import { useRef, useEffect } from "react";
import EntryActions from "./EntryActions";
import EntryInput from "./EntryInput";
import MoodSelector from "./MoodSelector";

export default function EntryForm({
  title,
  setTitle,
  content,
  setContent,
  mood,
  setMood,
  onSave,
  onClose,
  isEditing = false,
  onDelete,
}) {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [content]);

  return (
    <div
      className="fixed inset-0 bg-repeat bg-center bg-fixed z-50 p-6 overflow-y-auto animate-fadeIn"
      style={{
        backgroundColor: "#fdfcfb",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/bedge-grunge.png')",
      }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {isEditing ? "Edit Entry✏️" : "New Entry📝"}
      </h2>

      <EntryInput
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
      />
      <MoodSelector mood={mood} setMood={setMood} />
      <EntryActions
        onSave={onSave}
        onDelete={onDelete}
        onClose={onClose}
        isEditing={isEditing}
      />
    </div>
  );
}
