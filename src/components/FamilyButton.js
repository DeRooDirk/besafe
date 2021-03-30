const FamilyButton = ({ title }) => {
  const FamilyStyle = {
    fontSize:'1.5rem',
    display: "flex",
    border: "1px solid rgba(245, 245, 245,0.5)",
    borderRadius: "10px",
    margin: ".5rem auto",
    minWidth: "100%",
    padding: "2rem",
    outline: "none",
    color:'#39C4E5',
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
