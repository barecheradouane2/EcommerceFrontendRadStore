const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null; // Prevent rendering if not open
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          {/* Modal Header */}
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button className="text-gray-500 hover:text-red-500 cursor-pointer" onClick={onClose}>
              ✖
            </button>
          </div>
  
          {/* Modal Content */}
          <div className="mt-4">{children}</div>
  
          {/* Modal Footer */}
         {/* <div className="flex justify-end mt-4">
            <button className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md mr-2" onClick={onClose}>
              Close
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Confirm
            </button>
          </div>  */}
        </div>
      </div>
    );
  };
  
  export default Modal;
  