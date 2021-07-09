import { Typography, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Directory from "../../components/Directorycomponent/Directory";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "100px",
  },
}));

export default function HomePage({ data, onChange }) {
  const classes = useStyle();
  return (
    <div style={{ marginTop: "100px" }}>
      <Directory data={data} />
    </div>
  );
}
