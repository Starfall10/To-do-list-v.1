"use client"
import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import ToDoList from "./components/ToDoList";
import { useEffect, useState } from "react";
import { ITask } from "@/types/tasks";

export default function NotesPage() {
  //const tasks = await getAllTodos();
  const [tasks, setTasks] = useState<ITask[]>([]);
  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getAllTodos();
      setTasks(tasks);
    };
    fetchTasks();
  }, []);
  async function updateTaskList() {
    const tasks = await getAllTodos();
    setTasks(tasks);
  }

  return (
    <main className="max-w-4xl mx-auto mt-4" data-theme="light">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>
        <AddTask update={updateTaskList} />
      </div>
      <ToDoList tasks={tasks} update={updateTaskList}/>
    </main>
  );
}
