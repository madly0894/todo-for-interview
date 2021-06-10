import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  List,
  ListItemText,
  ListItemSecondaryAction,
  ListItem,
  IconButton,
  Divider,
  InputAdornment,
  Tooltip,
  Zoom
} from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./styled";
import PostAddIcon from "@material-ui/icons/PostAdd";

const Todo = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const lists = useSelector(({ lists }) => lists);

  const handleChange = useCallback(() => {}, []);

  const addTodo = () => {};

  const updateTodo = () => {};

  const deleteTodo = () => {};

  const handleShow = (value) => {
    setValue(value);
    setShow(true);
  };

  const handleHide = () => {
    setValue("");
    setShow(false);
  };

  return (
    <Container disableGutters className={classes.Container}>
      <Box p={2}>
        <Typography align="center" variant="h5">
          Todo list
        </Typography>
      </Box>

      <Divider />

      <Box display="flex" p={2}>
        <TextField
          autoFocus
          label="Title"
          className={classes.TextField}
          size="small"
          variant="outlined"
          value={value}
          onChange={handleChange}
          InputProps={{
            endAdornment: show ? (
              <InputAdornment position="end">
                <Tooltip
                  classes={{ popper: classes.popper }}
                  title="Clear"
                  arrow
                  TransitionComponent={Zoom}
                >
                  <IconButton size="small" onClick={handleHide}>
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ) : null
          }}
        />
        <Button
          className={classes.Button}
          size="small"
          variant="contained"
          color="primary"
          startIcon={show ? <EditIcon /> : <PostAddIcon />}
          onClick={() => (show ? updateTodo() : addTodo())}
        >
          {show ? "Edit" : "Add"}
        </Button>
      </Box>

      <Divider />

      <Box className={classes.Box}>
        {lists.length > 0 ? (
          <List disablePadding>
            {lists.map((list, index) => (
              <ListItem
                key={list.id}
                divider
                button
                onClick={() => handleShow(list.title)}
              >
                <ListItemText
                  primary={
                    <Tooltip
                      TransitionComponent={Zoom}
                      title={list.title}
                      arrow
                      classes={{
                        popper: classes.popper,
                        tooltip: classes.tooltip
                      }}
                    >
                      <Typography noWrap className={classes.Typography}>
                        <Typography color="primary" component="span">
                          {index + 1}.
                        </Typography>{" "}
                        {list.title}
                      </Typography>
                    </Tooltip>
                  }
                />
                <ListItemSecondaryAction
                  className={classes.ListItemSecondaryAction}
                >
                  <Tooltip
                    classes={{ popper: classes.popper }}
                    title="Delete"
                    arrow
                    TransitionComponent={Zoom}
                  >
                    <IconButton color="secondary" onClick={deleteTodo}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography color="textSecondary" align="center" variant="h6">
            No data :(
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default React.memo(Todo);
