import AddClient from "./AddClient";

const ModalAddUser = () => {
    return (
        <>
            <label htmlFor="my-modal-3" className="btn">Agregar cliente</label>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <AddClient/>
            </div>
            </div>
        </>
    )
}

export default ModalAddUser;