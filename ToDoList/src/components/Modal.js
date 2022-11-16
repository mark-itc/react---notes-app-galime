import "./Modal.css";
function Modal(props) {
  return (
    <div className="modal_background">
      <div className="modal_container">
        <button className="button" onClick={() => props.closeModal(false)}>
          X
        </button>
        <div className="title">{props.title}</div>
        <div className="note">{props.note}</div>
        <div className="date">{props.date}</div>
      </div>
    </div>
  );
}

export { Modal };
