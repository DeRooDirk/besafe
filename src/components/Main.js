

const Main = ({title}) => {
    const MainTitleStyle ={    
        color:"rgb(54, 62, 97)",
        fontSize: "3.25rem",
        letterSpacing:" 2px",
        fontWeight:"400",
        textDecoration:"underline",          
       
    }
    return (
       
          <h2 style={MainTitleStyle}>{title} </h2>            
        
        
    )
}
Main.defaultProps = {
    title : 'Safety App For Women.' 
  
}
export default Main