"use client";

import { ITask } from "@/types/tasks";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import React, { FormEventHandler, useState } from "react";
import Model from "./Model";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = React.useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] =
    React.useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    router.refresh();
    setOpenModalEdit(false);
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    router.refresh();
    setOpenModalDeleted(false);
  };

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => {
            setOpenModalEdit(true);
          }}
          cursor="pointer"
          className="text-blue-500"
          size={25}
        />
        <Model modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit task</h3>
            <div className="modal-action">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button type="submit" className="btn">
                Add
              </button>
            </div>
          </form>
        </Model>
        <FiTrash2
          onClick={() => setOpenModalDeleted(true)}
          cursor="pointer"
          className="text-red-500"
          size={25}
        />
        <Model modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h3 className="text-gl">
            Are you sure, you want to delete this task?
          </h3>
          <div className="modal-action">
            <button onClick={() => handleDeleteTask(task.id)} className="btn">
              Yes
            </button>
          </div>
        </Model>
      </td>
    </tr>
  );
};

export default Task;
