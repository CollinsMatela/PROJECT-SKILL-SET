
const ComfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
    if (!isOpen) return null;
    return(
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <p className="mb-4">{message}</p>
                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded-md">Cancel</button>
                    <button onClick={onConfirm} className="bg-green-500 text-white px-4 py-2 rounded-md">Confirm</button>
                </div>
            </div>
        </div>
    )
}
export default ComfirmationModal;