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
      border :" 2px solid red",
    };
    return (
      <div className="btn btn-set" style={FeedAlertButtonStyle}>
        {title}
      </div>
    );
  };
  FeedAlertButton.defaultProps = {
    title: "Alert",
  };
  export default FeedAlertButton;
  