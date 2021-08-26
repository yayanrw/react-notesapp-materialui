import { responsiveFontSizes } from "@material-ui/core";
import React, { useEffect, useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);
  const ApiUrl = "http://localhost:8000";

  useEffect(() => {
    fetch(`${ApiUrl}/notes`)
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((e) => {});
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <p>{note.title}</p>
      ))}
    </div>
  );
}

export default Notes;
