import React, { useEffect, useState } from "react";
import Directory from "../../components/Directory/Directory";
import "./Homepage.scss";

export default function HomePage() {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}
