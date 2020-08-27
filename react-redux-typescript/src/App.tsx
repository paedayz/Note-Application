import React from "react";
import "./App.css";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./redux/noteReducer";
import { addNote } from "./redux/actions";

// Component
import NewNoteInput from "./components/NewNoteInput";

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
