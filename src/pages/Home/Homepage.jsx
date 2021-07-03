import { Typography, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Directory from "../../components/Directorycomponent/Directory";
import { auth } from "../../components/firebase-utils/firebase";
import sections from "../../Data/Data";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "100px",
  },
}));

export default function HomePage({ data, onChange }) {
  const classes = useStyle();

  const [state, setState] = useState({ currentUser: null });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setState({ currentUser: user });
      if (onChange) {
        onChange();
      }
    });
  }, []);

  console.log(100, state.currentUser);
  return (
    <div style={{ marginTop: "100px" }}>
      <Directory data={data} />
    </div>
  );
}
