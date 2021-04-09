const PoliceButton = ({ title }) => {
  const PoliceStyle = {
    fontSize:'1.5rem',
    color:'#2F2E41',
    display: "flex",
    border: "1px solid rgba(245, 245, 245,0.5)",
    borderRadius: "10px",
    margin: ".5rem auto",
    minWidth: "100%",
    padding: "2rem",
    outline: "none",
  };
  return (
    <div className="btn btn-set" style={PoliceStyle}>
      {title}
    </div>
  );
};
PoliceButton.defaultProps = {
  title: "Set Police Number",
};
export default PoliceButton;
