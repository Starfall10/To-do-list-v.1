import React from "react";

interface ModelProps {
  modalOpen: boolean;
  setModalOpen: (open:boolean) => boolean;
}

const Model: React.FC<ModelProps> = ({ modalOpen, setModalOpen }) => {
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
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
  );
};

export default Model;
