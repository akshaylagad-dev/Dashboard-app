import React, { useEffect, useState } from "react";
import axios from "axios";
import Column from "./Column";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AddTaskModal from "./AddTaskModal";
import ENDPOINTS from "../endpoints";
import { createTask, getApiData } from "../services/ApiServices";
import './Dashboard.css'
const Board = () => {
  const [columns, setColumns] = useState({
    "To Do": [],
    "In Progress": [],
    Done: [],
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getApiData().then((res) => {
      console.log("res", res);

      const tasks = res.map((task) => ({
        id: task.id,
        title: task.title,
        description: "Sample Description",
        status: task.completed ? "Done" : "To Do",
      }));

      const grouped = {
        "To Do": [],
        "In Progress": [],
        Done: [],
      };
      tasks.forEach((t) => grouped[t.status].push(t));
      setColumns(grouped);
    });
  }, []);

  const addTask = async (task) => {
    const newTask = {
      title: task.title,
      description: task.description,
      status: task.status,
    };

    createTask(newTask)
      .then((createdTask) => {
        // Use the returned task from the API (it may have a new ID)
        const taskToAdd = {
          id: createdTask.id, // From API response
          title: createdTask.title,
          description: task.description, // Add description manually if API doesn't return it
          status: task.status,
        };

        setColumns((prev) => ({
          ...prev,
          [task.status]: [...prev[task.status], taskToAdd],
        }));
      })
      .catch((error) => {
        console.error("Failed to add task:", error);
      });
  };

  const moveCard = (task, from, to) => {
    const updatedTask = { ...task, status: to };
    setColumns((prev) => {
      const updated = { ...prev };
      updated[from] = updated[from].filter((t) => t.id !== task.id);
      updated[to] = [...updated[to], updatedTask];
      return updated;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="_modalPopup">
        <button
          onClick={() => setShowModal(true)}
          className="_modalBtn"
        >
          + Add New Task
        </button>
        <div className="_dropdownMenus">
          {["To Do", "In Progress", "Done"].map((col) => (
            <Column
              key={col}
              title={col}
              cards={columns[col]}
              moveCard={moveCard}
            />
          ))}
        </div>
      </div>
      {showModal && (
        <AddTaskModal
          onClose={() => setShowModal(false)}
          onSubmit={(task) => {
            addTask(task);
            setShowModal(false);
          }}
        />
      )}
    </DndProvider>
  )
  }
  export default Board;