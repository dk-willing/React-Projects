import React from "react";
import { IoIosClose } from "react-icons/io";

function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 bg flex items-center justify-center z-20">
      <div className="bg-white p-4 relative rounded-lg shadow">
        {children}

        <button
          className="absolute top-2 right-2 text-lg text-gray-500 cursor-pointer p-4 hover:text-red-600"
          onClick={onClose}
        >
          <IoIosClose size={24} />
        </button>
      </div>
    </div>
  );
}

export default Modal;
