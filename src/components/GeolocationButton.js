const GeolocationButton = ({ title }) => {
  const GeolocationStyle = {
    color:' #EE8197',
    display: "flex",
    border: "1px solid rgba(245, 245, 245,0.5)",
    borderRadius: "10px",
    margin: ".5rem auto",
    width: "100%",
    padding: "2rem",
    outline: "none",
    fontSize:'1.5rem',
    
  };
  return (
    <div className="btn btn-set" style={GeolocationStyle}>
      {title}
    </div>
  );
};
GeolocationButton.defaultProps = {
  title: " Activate Geolocation ",
};
export default GeolocationButton;
