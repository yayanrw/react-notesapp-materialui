import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Notes;
