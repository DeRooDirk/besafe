const Footer = ({title}) => {
    const FooterStyle ={       
    }
    return (
        <footer className ='FooterRight' style ={FooterStyle}>{title}             
        </footer>
    )
}
Footer.defaultProps = {
    title :  ' © BeSafe 2021'   
}
export default Footer
