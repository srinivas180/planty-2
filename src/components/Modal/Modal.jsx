import "./Modal.css";

export function Modal({ children, show }) {
    const modalStyle = { display: show ? "flex" : "none" };
    return (
        <div className="modal" style={modalStyle}>
            <div className="modal__content">{children}</div>
        </div>
    );
}
