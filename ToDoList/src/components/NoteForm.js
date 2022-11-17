import { useState } from "react";
import "./style.css";

function NoteForm(props) {
  const [titleInput, setTitleInput] = useState("");
  const [noteInput, setNoteInput] = useState("");

  function changeTitleHandler(event) {
    setTitleInput(event.target.value);
  }
  function changeNoteHandler(event) {
    setNoteInput(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const newNote = {
      id: Math.random().toString(),
      title: titleInput,
      note: noteInput,
      date: new Date(),
    };
    props.onSaveNote(newNote);
    setTitleInput("");
    setNoteInput("");
  }

  return (
    <div>
      <form className="form_container" onSubmit={submitHandler}>
        <input
          className="title_box"
          id="userInput"
          type="text"
          placeholder="Title"
          value={titleInput}
          onChange={changeTitleHandler}
        />
        <textarea
          className="note_box"
          placeholder="Note"
          contenteditable="true"
          value={noteInput}
          onChange={changeNoteHandler}
          required
        />
        <button className="add_note_btn" type="submit">
          Add Note
        </button>
      </form>
    </div>
  );
}
export default NoteForm;
