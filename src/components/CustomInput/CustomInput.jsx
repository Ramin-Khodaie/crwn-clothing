import './CustomInput.scss'

const CustomeInput = ({isValid,otherProps}) => {
  return <input className={`${isValid? "" : "invalid"} custome-input`} {...otherProps}/>;
};

export default CustomeInput;
