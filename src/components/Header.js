const Header = ({title}) => {
    const HeaderStyle ={    
        color:"rgb(54, 62, 97)",
        fontSize: "9.75rem",
        letterSpacing:" 5px",
        fontWeight:"400"
    }
    return (
        <header  style ={HeaderStyle}>
            {title}            
        </header>
    )
}
Header.defaultProps = {
    title : 'BeSafe'     
}

export default Header
