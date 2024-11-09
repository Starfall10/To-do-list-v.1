'use client';
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Model from "./Model";

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);


  return (
    <div>
      <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">
        ADD NEW TASK <AiOutlinePlus size={18} />
      </button>

      <Model modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  );
};

export default AddTask;
