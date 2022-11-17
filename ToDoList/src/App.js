import NewItem from "./components/NewItem";
import "./App.css";
import { useState } from "react";

const DUMMY_LIST = [
  { id: "a", title: "first", note: "do something", date: new Date() },
  { id: "b", title: "seconed", note: "do something else", date: new Date() },
];

function App() {
  const [toDoList, setToDoList] = useState(DUMMY_LIST);

  function addNoteHandler(newNote) {
    setToDoList([newNote, ...toDoList]);
  }
  function buttonsClickHandler(id) {
    const newToDoList = toDoList.filter((current) => current.id !== id);
    setToDoList(newToDoList);
  }

  return (
    <div>
      <NewItem
        onAddNote={addNoteHandler}
        items={toDoList}
        onButtonsClick={buttonsClickHandler}
      />
    </div>
  );
}

export default App;
