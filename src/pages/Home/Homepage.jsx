import React, { useEffect, useState } from "react";
import Directory from "../../components/Directory/Directory";
import "./Homepage.scss";

export default function HomePage({ data }) {
  return (
    <div className="homepage">
      <Directory data={data} />
    </div>
  );
}
