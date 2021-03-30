const FamilyButton = ({ title }) => {
  const FamilyStyle = {
    fontSize:'1.5rem',
    display: "flex",
    borderRadius: "10px",
    margin: ".5rem auto",
    minWidth: "100%",
    padding: "2rem",
    outline: "none",
    color:'#2F2E41',
    
  };
  return (
    <div className=" btn btn-set" style={FamilyStyle}>
      {title}
    </div>
  );
};
FamilyButton.defaultProps = {
  title: "Set Family Alerts",
};
export default FamilyButton;
