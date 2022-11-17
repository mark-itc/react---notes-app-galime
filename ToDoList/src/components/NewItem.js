import "./style.css";

import NoteForm from "./NoteForm";
import NoteItem from "./NoteItem";

function NewItem(props) {
  function SaveNoteHandler(userInput) {
    const newNote = { ...userInput, id: Math.random().toString() };
    props.onAddNote(newNote);
  }
  function buttonClickHandler(id) {
    props.onButtonsClick(id);
  }
  return (
    <div className="page_container">
      <NoteForm onSaveNote={SaveNoteHandler} />
      {props.items.map((toDoList) => (
        <NoteItem
          title={toDoList.title}
          note={toDoList.note}
          date={toDoList.date}
          id={toDoList.id}
          onButtonClick={buttonClickHandler}
        />
      ))}
    </div>
  );
}
export default NewItem;
