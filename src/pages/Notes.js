import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import NoteCard from "../components/NoteCard";
import ApiUrl from "../helper/AppConfig";

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(`${ApiUrl}/notes`)
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((e) => console.log(e));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`${ApiUrl}/notes/${id}`, {
      method: "delete",
    });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}

export default Notes;
