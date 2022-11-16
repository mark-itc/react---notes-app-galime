import "./style.css";
import { useState } from "react";
import { Modal } from "./Modal";

function NoteItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  const [isClicked, setIsClicked] = useState(false);
  console.log(props.date);

  function deletButtomHandler() {
    if (window.confirm("Are you sure you want to delete this note?")) {
      props.onButtonClick(props.id);
      console.log(props.id);
    }
  }
  function noteClickHandler() {
    setIsClicked((current) => !current);
  }

  return (
    <div className="container" onClick={noteClickHandler}>
      {isClicked && (
        <Modal
          title="Note title"
          note={props.note}
          date={props.date.toLocaleString("en-US")}
          closeModal={setIsClicked}
        />
      )}
      <button onClick={deletButtomHandler}>x</button>
      <h2>Note title</h2>
      <h3>{props.note}</h3>
      <div className="date">
        <div className="month">{month}</div>
        <div className="year">{year}</div>
        <div className="day">{day}</div>
      </div>
    </div>
  );
}
export default NoteItem;
