import AddUsers from "./AddUsers";

const ModalAddUser = () => {
    return (
        <>
            <label htmlFor="my-modal-3" className="btn">Agregar usuario</label>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <AddUsers/>
            </div>
            </div>
        </>
    )
}

export default ModalAddUser;