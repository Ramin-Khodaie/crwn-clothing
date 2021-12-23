import "./Switcher.scss";

export const Switcher = ({ isOn, toggleMode }) => {
  return (
    <>
      <input
        className="react-switch-checkbox"
        type="checkbox"
        id={`mode`}
        onChange={toggleMode}
        checked={isOn}
      />
      <label className="react-switch-label" htmlFor="mode">
        <span style={{ background: !isOn && '#06D6A0' }} className="react-switch-button"></span>
      </label>
    </>
  );
};
