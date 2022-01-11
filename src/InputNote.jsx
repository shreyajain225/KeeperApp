import React, { useState } from "react";

function InputNote(props) {
  const [NoteTitle, setTitle] = useState("");
  const [NoteContent, setContent] = useState("");

  function handleTitle(event) {
    const title = event.target.value;
    setTitle(title);
  }
  function handleContent(event) {
    const content = event.target.value;
    setContent(content);
  }
  return (
    <div className="inputNote">
      <input
        onChange={handleTitle}
        type="text"
        className="title"
        placeholder="Title"
        value={NoteTitle}
      ></input>
      <br />
      <textarea
        value={NoteContent}
        onChange={handleContent}
        type="text"
        className="noteCnt"
        placeholder="Take a Note..."
      ></textarea>
      <button
        onClick={() => {
          props.addNote(NoteTitle, NoteContent);
          setTitle("");
          setContent("");
        }}
        type="button"
        className="addBtn"
      >
        Add
      </button>
    </div>
  );
}
export default InputNote;
