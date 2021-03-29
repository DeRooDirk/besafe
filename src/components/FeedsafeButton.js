const FeedsafeButton = ({ title }) => {
  const FeedsafeButtonStyle = {
    backgroundColor: "#6e7ec7",
    fontSize: "1.75rem",
    letterSpacing: "2px",
    fontWeight: "400",
    padding: ".7rem 1.5rem",
    borderRadius: "10px",
    border: "3px solid #293a86",
    outline: "none",
    margin: ".5rem",
  };
  return (
    <button className="btn" style={FeedsafeButtonStyle}>
      {title}
    </button>
  );
};
FeedsafeButton.defaultProps = {
  title: "Safe",
};
export default FeedsafeButton;
