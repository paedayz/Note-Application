import React from "react";
import "./App.css";

// Redux
import { useSelector } from "react-redux";
import { NotesState } from "./noteReducer";

// Component
import NewNoteInput from "./NewNoteInput";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  return (
    <div>
      <NewNoteInput addNote={alert} />
      <hr />
      <ul>
        <li>Some note</li>
      </ul>
    </div>
  );
}

export default App;
