import React from "react";

interface ModelProps {
  modalOpen: boolean;
  setModalOpen: (open:boolean) => boolean | void;
  children: React.ReactNode;
}

const Model: React.FC<ModelProps> = ({ modalOpen, setModalOpen, children}) => {
  return (
    <dialog
      id="my_modal_2"
      className={`modal ${modalOpen ? "modal-open" : ""}`}
    >
      <div className="modal-box">
        <form method="dialog">
          <button onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {children}
      </div>
    </dialog>
  );
};

export default Model;
