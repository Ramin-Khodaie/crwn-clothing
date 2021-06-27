import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, Button, Slide, useScrollTrigger } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Typography } from "@material-ui/core";
import { Link as Mlink } from "@material-ui/core";
import Shop from "../../pages/ShopPage";
import { Link } from "react-router-dom";
import { signInPage } from "../../pages/signInPage";

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
    color: "black",
  },
  loginbtn: {
    color: "red",
    position: "absolute",
    marginRight: "15px",
    marginTop: "2px",
    right: "0",
    marginTop: "-18px",
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

export default function Header() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar} variant="regular">
            <IconButton aria-label="menu" edge="start">
              <MenuIcon />
            </IconButton>
            <div className={classes.h6}>
              <Mlink underline="none" href="/" color="inherit">
                <Typography variant="h6">Home</Typography>
              </Mlink>
            </div>
            <div className={classes.h6}>
              <Mlink href="/shop" color="inherit" underline="none">
                <Typography variant="h6">Shop</Typography>
              </Mlink>
            </div>
            <div className={classes.h6}>
              <Mlink underline="none" href="/about" color="inherit">
                <Typography variant="h6">About</Typography>
              </Mlink>
            </div>

            <div>
              <Mlink href="/signIn">
                <Button className={classes.loginbtn} variant="outlined">
                  Login
                </Button>
              </Mlink>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
