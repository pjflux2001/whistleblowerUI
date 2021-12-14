import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
}));

function Navbar() {
  const classes = useStyles();
  var [isLoggedIn, setLoginStatus] = useState(false);
  var [newEntry, setNewEntry] = useState(false);
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Typography
                variant="h5"
                color="primary"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                <Link href="#" underline="none">
                  {"WhistleBlower"}
                </Link>
              </Typography>
            </IconButton>
            <Button
              className="newEntry"
              color="primary"
              style={{
                position: "absolute",
                right: "10%",
                display:
                  !isLoggedIn || (isLoggedIn && newEntry) ? "none" : "block",
              }}
              onClick={() => {
                setNewEntry(true);
              }}
            >
              New Entry
            </Button>
            <Button
              className="newEntry"
              color="primary"
              style={{
                position: "absolute",
                right: "10%",
                display: isLoggedIn && newEntry ? "block" : "none",
              }}
              onClick={() => {
                setNewEntry(false);
              }}
            >
              Home
            </Button>
            <Button
              className="login"
              color="primary"
              style={{
                position: "absolute",
                right: "1%",
                display: isLoggedIn ? "none" : "block",
              }}
              onClick={() => {
                setLoginStatus(true);
              }}
            >
              Login
            </Button>
            <Button
              className="logout"
              color="primary"
              style={{
                position: "absolute",
                right: "1%",
                display: !isLoggedIn ? "none" : "block",
              }}
              onClick={() => {
                setNewEntry(false);
                setLoginStatus(false);
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
