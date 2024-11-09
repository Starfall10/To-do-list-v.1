"use client";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Model from "./Model";

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        ADD NEW TASK <AiOutlinePlus size={18} />
      </button>

      <Model modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input
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
    </div>
  );
};

export default AddTask;
