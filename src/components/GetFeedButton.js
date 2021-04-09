const GetFeedButton = ({ title }) => {
  const GetFeedStyle = {      
    fontSize: "1.75rem",
    letterSpacing: " 2px",
    fontWeight: "400",
    padding: ".6rem 1.1rem",
    borderRadius: "10px",
    border: "1px solid rgba(245, 245, 245,0.5)",
    outline: "none",
    display: "inline-block",
    width: "90%",
    margin: " 1rem auto",
  };
  return (
    <button className="btn btn-set" style={GetFeedStyle}>
      {title}
    </button>
  );
};
GetFeedButton.defaultProps = {
  title: "Go To Feed",
};
export default GetFeedButton;
