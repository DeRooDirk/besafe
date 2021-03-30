import { Link } from "react-router-dom";
const GetMoreInfoButton = ({ title }) => {
  const GetMoreInfoButtonStyle = {
    border: "1px solid rgba(245, 245, 245,0.5)",
    fontSize: "1.75rem",
    letterSpacing: " 2px",
    fontWeight: "400",
    padding: ".6rem 1.1rem",
    borderRadius: "10px",    
    outline: "none",
    display: "inline-block",
    
    margin: " 0 auto",
  };
  return (
    <>
  <Link to="/Info"> <button className=" btn btn-set" style={GetMoreInfoButtonStyle}>
      {title}
    </button></Link>
    
    </>
  );
};
GetMoreInfoButton.defaultProps = {
  title: "Get More Info",
};
export default GetMoreInfoButton;
