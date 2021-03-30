import { Link } from "react-router-dom";
const GoToSettingsButton = ({ title }) => {
  const GoToSettingsButtonStyle = {    
    fontSize: "1.75rem",
    letterSpacing: " 2px",
    fontWeight: "400",
    padding: ".6rem 1.1rem",
    borderRadius: "10px",
    border: "1px solid rgba(245, 245, 245,0.5)",
    outline: "none",
    display: "inline-block",
    width: "30%",
    margin: " 0 auto",
  };
  return (
    <>
    <Link to="/Settings"> <button className="btn btn-set" style={GoToSettingsButtonStyle}>
      {title}
    </button></Link>
    
    </>
  );
};
GoToSettingsButton.defaultProps = {
  title: "Go To Settings",
};
export default GoToSettingsButton;
