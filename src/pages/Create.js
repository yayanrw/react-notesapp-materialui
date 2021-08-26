import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
} from "@material-ui/core";
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
  const [titleError, setTitleError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const [category, setCategory] = useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailError(false);

    title === "" ? setTitleError(true) : setTitleError(false);
    detail === "" ? setDetailError(true) : setDetailError(false);

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
          helperText={titleError ? "Please fill this field" : ""}
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
          helperText={detailError ? "Please fill this field" : ""}
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

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
