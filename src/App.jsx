import React, { useState } from "react";
import InputNote from "./InputNote";
import SingleNote from "./SingleNote";
function App() {
  const [notes, setList] = useState([]);

  function addNote(NoteTitle, NoteContent) {
    const newNote = {
      noteTitle: NoteTitle,
      noteArray: NoteContent
    };
    setList((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setList((prevList) => {
      return prevList.filter((note, ind) => {
        return ind !== id;
      });
    });
  }
  return (
    <div>
      <div className="App">
        <p className="appTitle">Keeper</p>
      </div>
      <InputNote addNote={addNote} />
      <br />
      <br />
      <div>
        {notes.map((note, index) => {
          return (
            <SingleNote
              key={index}
              id={index}
              noteTitle={note.noteTitle}
              noteArray={note.noteArray}
              deleteNote={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
