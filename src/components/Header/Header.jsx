import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, Button,Slide,useScrollTrigger } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Typography } from "@material-ui/core";

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
    color:"black",
    
   
  },
  loginbtn:{
    color:"red",
    position:"absolute",
    marginRight:"15px",
    right:"0"
  }
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
            <Typography variant="h6" >Home</Typography>

          </div>
          <div className={classes.h6}>
            <Typography variant="h6">Shop</Typography>

          </div>
          <div className={classes.h6}>
            <Typography variant="h6">About</Typography>

          </div>

          <Button className={classes.loginbtn} variant="outlined">Login</Button>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
      
    </div>
  );
}
