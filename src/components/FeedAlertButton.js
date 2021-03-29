const FeedAlertButton = ({ title }) => {
    const FeedAlertButtonStyle = {
      backgroundColor: "red",
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
      <button className="btn" style={FeedAlertButtonStyle}>
        {title}
      </button>
    );
  };
  FeedAlertButton.defaultProps = {
    title: "Alert",
  };
  export default FeedAlertButton;
  