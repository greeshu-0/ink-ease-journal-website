export default function EntryActions({ onSave, onDelete, onClose, isEditing }) {
  return (
    <div className="mt-6 flex flex-col sm:flex-row sm:justify-between gap-4">
      <button
        onClick={onClose}
        className="text-gray-600 underline hover:text-deepsea self-start sm:self-auto"
      >
        Cancel
      </button>
      <div className="flex gap-2 justify-end">
        {isEditing && (
          <button
            onClick={onDelete}
            className="bg-red-100 text-red-700 px-6 py-2 rounded-xl hover:bg-red-300"
          >
            Delete
          </button>
        )}
        <button
          onClick={onSave}
          className="bg-deepsea text-white px-6 py-2 rounded-xl hover:bg-mintfoam hover:text-deepsea"
        >
          Save
        </button>
      </div>
    </div>
  );
}
