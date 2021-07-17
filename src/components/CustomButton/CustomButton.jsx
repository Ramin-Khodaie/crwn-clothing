import "./custombutton.scss";

export default function CustomButton({
  children,
  isgooglesignin,
  inverted,
  ...otherProps
}) {
  return (
    <button
      className={`${inverted ? "inverted" : ""}${
        isgooglesignin ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
