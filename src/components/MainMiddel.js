const MainMiddel = ({title}) => {
    const MainMiddelStyle ={    
        color:"rgb(54, 62, 97)",
       // fontSize: "1rem",
        letterSpacing:" 1px",
        fontWeight:"400",
        width:"60%",
        margin:"2rem auto",        
        wordSpacing:'.1rem'        
    }
    return (
        <main style={MainMiddelStyle}>
           {title}            
        </main>
    )
}
MainMiddel.defaultProps = {
    title : 'If you could count the skeletons in my closet. Under my bed and up under my faucet. Then you would know Under my bed and up under my faucet. Then you would know  ' 
  
}
export default MainMiddel