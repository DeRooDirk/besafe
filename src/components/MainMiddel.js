const MainMiddel = ({ title }) => {
  const MainMiddelStyle = {
    color: "rgb(54, 62, 97)",
    letterSpacing: " 1px",
    fontSize: "1.6rem",
    fontWeight: "400",
    width: "80%",
    margin: "2rem auto",
    wordSpacing: ".1rem",
    lineHeight: "2.5rem",
  };
  return (
    <main style={MainMiddelStyle}>
      <h4>{title}</h4>
    </main>
  );
};
MainMiddel.defaultProps = {
  title:
    "BeSafe, womens safety app, is a result of our personal experience as well as of millions of others. Street harassment and the feeling of being unsafe in the streets limits women’s mobility and access to public spaces ",
};
export default MainMiddel;
