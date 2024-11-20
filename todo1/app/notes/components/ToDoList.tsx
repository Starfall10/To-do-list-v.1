"use client"
import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface ToDoListProps {
  tasks: ITask[];
  update: () => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ tasks, update }) => {
  function updateTaskList() {
    update()
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} update={updateTaskList}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
