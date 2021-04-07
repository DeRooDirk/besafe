
const FeedAlertButton = ({ title }) => {
  const FeedAlertButtonStyle = {
    backgroundColor: "red",
    fontSize: "1.75rem",
    letterSpacing: "2px",
    fontWeight: "400",
    padding: ".7rem 1.5rem",
    borderRadius: "10px",
    outline: "none",
    margin: ".5rem",
    border: " 2px solid red",
  };
  return (
    <button   className="btn btn-set" style={FeedAlertButtonStyle}>
      {title}
    </button>
  );
};
FeedAlertButton.defaultProps = {
  title: "Alert",
};
export default FeedAlertButton;

