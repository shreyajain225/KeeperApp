import React from "react";

function SingleNote(props) {
  return (
    <div className="note">
      <h2 className="noteTitle">{props.noteTitle}</h2>
      <p className="noteContent">{props.noteArray}</p>
      <button
        type="button"
        className="dltBtn"
        onClick={() => {
          props.deleteNote(props.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default SingleNote;
