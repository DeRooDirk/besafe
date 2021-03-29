
const InfoMiddel = () => {
    const MainMiddelStyle ={    
        color:"rgb(54, 62, 97)",
        fontSize: "1.1rem",        
        fontWeight:"400",
        display:"flex",
        justifyContent:'center',
        margin:"2.75rem auto",        
        wordSpacing:'.1rem' ,
               
    }
  return (
    <main style ={MainMiddelStyle}>
      <ul>
        <li>Geo-Location   </li>
        <li>Friends Alert</li>
        <li>Police Alert</li>
        <li>Noise Alert</li>
      </ul>
    </main>
  );
};

export default InfoMiddel;
