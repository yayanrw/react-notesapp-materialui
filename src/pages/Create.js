import React, { useState } from "react";
import { Typography, Button, Container, TextField } from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [titleError, settitleError] = useState(false);
  const [detailError, setdetailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    settitleError(false);
    setdetailError(false);

    title === "" ? settitleError(true) : settitleError(false);
    detail === "" ? setdetailError(true) : setdetailError(false);

    if (title && detail) {
      console.log(title, detail);
    }
  };

  return (
    <Container>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Create a new note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetail(e.target.value)}
          className={classes.field}
          label="Detail title"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailError}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Create;
