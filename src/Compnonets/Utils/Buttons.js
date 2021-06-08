import { Dropdown, DropdownButton } from "react-bootstrap";
import "./Buttons.css";
export const ResendOtp = (
  <div className="resend-otp">
    <button type="submit">Resend Code</button>
  </div>
);

const Styles = ["btn-primary-style", "btn-secondry-style", "btn-third-style"];
const Sizes = ["btn-primary-size", "btn-secondry-size", "btn-third-size"];
export const TheButton = ({ buttonSize, buttonStyle, title }) => {
  const CheckButtonStyle = Styles.includes(buttonStyle)
    ? buttonStyle
    : Styles[0];
  const CheckButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0];
  return (
    <div className={`${CheckButtonStyle} + ${CheckButtonSize}`}>
      <button>{title}</button>
    </div>
  );
};

export const ButtonDropdown = ({ title, id }) => {
  return (
    <DropdownButton id={id} title={title}>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
  );
};
