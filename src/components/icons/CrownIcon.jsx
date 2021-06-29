import * as React from "react";
import { SvgIcon, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  svgicon: {
    fontSize: "2rem",
  },
}));

function CrownIcon(props) {
  const classes = useStyle();
  return (
    <SvgIcon
      width={80}
      height={59}
      viewBox="0 0 50 39"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classes.svgicon}
    >
      <title>{"Group"}</title>
      <g fill="none" fillRule="evenodd">
        <path fill="#808282" d="M3 14l22 12.5L47 14l-6.145 25H9.085z" />
        <path fillOpacity={0.263} fill="#101A1A" d="M25 8l15 31H10z" />
        <circle fill="#5E6363" cx={2} cy={9} r={2} />
        <circle fill="#5E6363" cx={25} cy={2} r={2} />
        <circle fill="#5E6363" cx={48} cy={9} r={2} />
      </g>
    </SvgIcon>
  );
}

export default CrownIcon;
