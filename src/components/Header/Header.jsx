import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyle = makeStyles(() => ({
  toolbar: {
    backgroundColor: "#EFEBE9",
  },
  root: {
    flexGrow: 1,
    position: "relative",
  },
}));
export default function Header() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar} variant="regular">
          <IconButton aria-label="menu" edge="start">
            <MenuIcon />
          </IconButton>
          <Button color="secondary">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
