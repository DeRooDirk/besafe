const Footer = ({title}) => {
    const FooterStyle ={
        color:"rgb(54, 62, 97)",
        fontSize: "1.75rem",
        letterSpacing:" 1px",
    }
    return (
        <footer style ={FooterStyle}>{title}             
        </footer>
    )
}
Footer.defaultProps = {
    title :  ' © BeSafe 2021'   
}
export default Footer
