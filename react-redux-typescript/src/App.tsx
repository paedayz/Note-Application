import React from "react";
import "./App.css";

// Component
import NewNoteInput from "./NewNoteInput";

function App() {
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
