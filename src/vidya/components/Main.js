const Main = ({title}) => {
    const MainTitleStyle ={    
        color:"rgb(54, 62, 97)",
        fontSize: "5.25rem",
        letterSpacing:" 2px",
        fontWeight:"400",
       // textDecoration:"underline",
        margin:'2rem'
       
    }
    return (
        <main style={MainTitleStyle}>
           {title}            
        </main>
    )
}
Main.defaultProps = {
    title : 'Safety App For Women.' 
  
}
export default Main