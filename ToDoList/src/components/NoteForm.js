import { useState } from "react";

function NoteForm(props) {
  const [input, setInput] = useState("");

  function changeHandler(event) {
    setInput(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const newNote = {
      id: Math.random().toString(),
      note: input,
      date: new Date(),
    };
    props.onSaveNote(newNote);
    setInput("");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          id="userInput"
          type="text"
          value={input}
          onChange={changeHandler}
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}
export default NoteForm;
