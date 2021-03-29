const GeolocationButton = ({ title }) => {
  const GeolocationStyle = {
    backgroundColor: "#fa5273",
    display: "flex",
    border: "2px solid black",
    borderRadius: "10px",
    margin: ".5rem auto",
    minWidth: "100%",
    padding: "2rem",
    outline: "none",
  };
  return (
    <div className="btn" style={GeolocationStyle}>
      {title}
    </div>
  );
};
GeolocationButton.defaultProps = {
  title: "Geolocation Button",
};
export default GeolocationButton;
