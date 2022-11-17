import "./Modal.css";
function Modal(props) {
  return (
    <div className="modal_background">
      <div className="modal_container">
        <button className="button" onClick={() => props.closeModal(false)}>
          X
        </button>
        <div className="date_modal">{props.date}</div>
        <div className="title_modal">{props.title}</div>
        <div className="note_modal">{props.note}</div>
      </div>
    </div>
  );
}

export { Modal };
