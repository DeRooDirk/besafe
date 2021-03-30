const GoHomeButton = ({ title }) => {
  const GoHomeButtonStyle = {
    
    fontSize: "1.75rem",
    letterSpacing: " 2px",
    fontWeight: "400",
    padding: ".6rem 1.1rem",
    borderRadius: "10px",
    border: "1px solid rgba(245, 245, 245,0.5)",
    outline: "none",
    display: "inline-block",
    width: "30%",
    margin: " 1rem auto",
  };
  return (
    <button className=" btn btn-set" style={GoHomeButtonStyle}>
      {title}
    </button>
  );
};
GoHomeButton.defaultProps = {
  title: "Go To HomePage",
};
export default GoHomeButton;
