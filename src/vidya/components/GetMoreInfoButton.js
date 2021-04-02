import React from "react";


const GetMoreInfoButton = ({ props, title }) => {
    const GetMoreInfoButtonStyle = {

        color: "#363E61",
        fontSize: "1.75rem",
        letterSpacing: " 2px",
        fontWeight: "400",
        // backgroundColor:"#39C4E5",
        padding: ".75rem 2rem",
        borderRadius: "10px",
        border: "3px solid #363E61 ",
        outline: "none",      
        width: "30%",
        margin: "18px",
        marginBottom: "3rem",
    }
    
    return (

        
            <button className='btn' style={GetMoreInfoButtonStyle}>
                {title}
            </button>
       

    )
}
GetMoreInfoButton.defaultProps = {
    title: 'Get More Info',
}
export default GetMoreInfoButton
