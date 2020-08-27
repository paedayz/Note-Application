import React from "react";
import "./App.css";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./noteReducer";

// Component
import NewNoteInput from "./NewNoteInput";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  const dispatch = useDispatch();

  const addNote = (note: string) => {
    dispatch({ type: "ADD_NOTE", payload: note });
  };

  return (
    <div>
      <NewNoteInput addNote={addNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
