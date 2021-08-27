import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import React from "react";

function NoteCard({ note, handleDelete }) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={<Avatar aria-label="recipe"></Avatar>}
          action={
            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(note.id)}
            >
              <DeleteOutline />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.detail}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default NoteCard;
