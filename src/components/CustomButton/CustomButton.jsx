import "./custombutton.scss";

export default function CustomButton({
  children,
  isgooglesignin,
  ...otherProps
}) {
  return (
    <button
      className={`${isgooglesignin ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
