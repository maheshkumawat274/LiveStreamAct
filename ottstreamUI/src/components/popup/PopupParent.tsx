import React, { useState } from "react";
import PopupModal from "./PopupModel";

export default function ParentComponent() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="p-10">

      {/* BUTTON ANYWHERE */}
      <button
        onClick={() => setOpenModal(true)}
        className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Open Popup
      </button>

      {/* Modal Call */}
      <PopupModal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <h2 className="text-xl font-semibold mb-3">This is a Popup Modal</h2>
        <p className="text-gray-600">
          Modal alag component me hai, button alag component me. Yeh perfect working structure hai.
        </p>
      </PopupModal>
    </div>
  );
}
