import React from "react";
import Modal from "react-modal";
import { FaTimesCircle } from "react-icons/fa";

const ReusableModal = ({isOpen, onRequestClose, content}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className="fixed inset-0 z-50 flex items-center justify-center p-6"
    overlayClassName="bg-black bg-opacity-50 transition-opacity duration-500 ease-out"
  >
    <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform duration-500 ease-out space-y-4 md:space-y-0 max-w-md">
      <button
        onClick={onRequestClose}
        className="absolute top-2 right-2 text-darkDesert hover:text-goldDesert"
      >
        <FaTimesCircle size={32} />
      </button>
      {content}
    </div>
  </Modal>
);

export default ReusableModal;
