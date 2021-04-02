import React from 'react'



const Page3ButtonStyle = {

    color: "#363E61",
    fontSize: "1.75rem",
    letterSpacing: " 2px",
    fontWeight: "400",
    // backgroundColor:"#39C4E5",
    padding: ".75rem 2rem",
    borderRadius: "10px",
    border: "3px solid #363E61 ",
    outline: "none",      
    width: "80%",
    
    margin: "18px",
    marginBottom: "3rem",
    }
    
    
const Page3Button = ({title}) => {
    return (
        <div>
            <button className='btn' style={Page3ButtonStyle}>
                {title}
            </button>
       
        </div>
    )
}
Page3Button.defaultProps = {
    title: 'Get More Info',
}

export default Page3Button
