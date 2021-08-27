import React, { useEffect, useState } from "react";
import ApiUrl from "../helper/AppConfig";

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(`${ApiUrl}/notes`)
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <p key={note.id}>{note.title}</p>
      ))}
    </div>
  );
}

export default Notes;
