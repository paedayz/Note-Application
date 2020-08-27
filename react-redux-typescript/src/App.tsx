import React from "react";
import "./App.css";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./noteReducer";
import { addNote } from "./actions";

// Component
import NewNoteInput from "./NewNoteInput";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <div>
      <NewNoteInput addNote={onAddNote} />
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
