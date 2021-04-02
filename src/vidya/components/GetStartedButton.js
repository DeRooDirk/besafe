const GetFeedButton = ({title}) => {
    const  GetFeedStyle={
            
        color:"#363E61",
        fontSize: "1.75rem",
        letterSpacing:" 2px",
        fontWeight:"400",
       // backgroundColor:"#39C4E5",
        padding:".75rem 1.55rem",
        borderRadius:"10px",
        border:"3px solid #363E61 ",
        outline:"none",
        display:"inline-block",
        width:"30%",
        margin:" 0 auto",
        
    }
    return (
        <button className='btn' style ={GetFeedStyle}>
            {title}            
        </button>
    )
}
GetFeedButton.defaultProps = {
    title : 'Get To Feed'  ,      
}
export default GetFeedButton