import React, { useState } from 'react';

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import LogInButton from './LogInButton';
import { Link } from 'react-router-dom';
// import GetMoreInfoButton from './GetMoreInfoButton'
// import { Link } from 'react-router-dom';


const Page1 = () => {
    
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
            margin: "30px",
            marginBottom: "3rem",
        }

        const MainMiddelStyle = {
            color: "rgb(54, 62, 97)",
            fontSize: "1.55rem",
            letterSpacing: " 2px",
            fontWeight: "400",
           display: "flex",
           justifyContent: "center",
            margin: "3rem auto",
            width: "60%",
            wordSpacing: '.2rem'
        }
        
        
    const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true)

  const About = () => (
    <div id="results" className="search-results" style={MainMiddelStyle}>
   
   Sekura, women's safety app, is a result of our personal experience as well as of millions of others. Street harassment and the feeling of being unsafe in the streets limits women’s mobility and access to public spaces
      </div>
    
  )

  const Results = () => (
    <div id="results" className="search-results" style={MainMiddelStyle}>
       
      <ul>
          <li>Geo-location alert</li>
          <li>Friends alert.</li>
          <li>Police alert.</li>
          <li>Noise alert</li>
      </ul>

      <Link to='/Page3'>
                    <LogInButton />
                </Link>
     
    </div>
  )


    return (
        <div className='Page1'>
            <div className='Left'>
                <Header />
                <Footer />
            </div>
            <div className='Right'>
                <Main />
                { showResults ? <Results /> : <About /> }
                <input type="submit" className="btn" value="Get started" onClick={onClick} style={GetMoreInfoButtonStyle} />
      
                {/* <main>{subtitle}</main>
                <Link to='/Page2'>
                <GetMoreInfoButton />
                </Link> */}
               

            </div>
        </div >
    )
}



  

// Page1.defaultProps = {
//     subtitle: 'Hello page1 '

// }

export default Page1;
