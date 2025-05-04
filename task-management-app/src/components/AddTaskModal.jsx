import React, { useState } from "react";

const AddTaskModal = ({ onClose, onSubmit }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "To Do",
  });

  const handleSubmit = () => {
    if (!task.title) {
      alert("Title is required");
      return;
    }
    onSubmit(task);
  };

  return (
    <div
      className="_taskView"
    >
      <h3>Add New Task</h3>
      <input
        placeholder="Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        className="_taskInputBox"
      />
      <textarea
        placeholder="Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        rows={3}
        className="_modalPopupLabel"
      />
      <select
        value={task.status}
        onChange={(e) => setTask({ ...task, status: e.target.value })}
        className="_modalPopupLabel"
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <div className="_btnParentDiv">
        <button onClick={handleSubmit} className="_addBtn">
          Add
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddTaskModal;
