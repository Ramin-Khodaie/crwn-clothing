import { makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  root: {
    marginTop: "100px",
  },
  desc: {
    margin: "40px",
  },
}));
export default function About() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ margin: "10px" }}>
        About Us
      </Typography>
      <Typography variant="h6" className={classes.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ad
        perferendis, a eum temporibus sit perspiciatis molestias. Enim nesciunt
        minus consectetur repellendus nobis laborum praesentium distinctio
        obcaecati. Inventore, provident voluptas?
      </Typography>
    </div>
  );
}
