import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, Button, Slide, useScrollTrigger } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Typography } from "@material-ui/core";
import { Link as Mlink } from "@material-ui/core";

import { Link, withRouter } from "react-router-dom";

import Sidbar from "../DrawerComponent/Sidbar";

const useStyle = makeStyles(() => ({
  toolbar: {
    backgroundColor: "#EFEBE9",
  },
  root: {
    flexGrow: 1,
    position: "relative",
  },
  h6: {
    padding: "20px",
    color: "#0c0b09 ",
  },
  loginbtn: {
    color: "#0c0b09",
    position: "absolute",
    marginRight: "15px",
    marginTop: "2px",
    right: "0",
    marginTop: "-18px",
    "&:hover": {
      backgroundColor: "#0c0b09",
      color: "#EFEBE9",
    },
  },
  Mlink: {},
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Header(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar} variant="regular">
            <Sidbar />
            <div className={classes.h6}>
              <Mlink underline="none" href="/" color="inherit">
                <Typography variant="h6">Home</Typography>
              </Mlink>
            </div>
            <div className={classes.h6}>
              <Mlink href="/products" color="inherit" underline="none">
                <Typography variant="h6">Products</Typography>
              </Mlink>
            </div>
            <div className={classes.h6}>
              <Mlink underline="none" href="/about" color="inherit">
                <Typography variant="h6">About</Typography>
              </Mlink>
            </div>

            <div>
              <Button
                className={classes.loginbtn}
                variant="outlined"
                onClick={() => props.history.push("/signin")}
              >
                Login
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}

export default withRouter(Header);
