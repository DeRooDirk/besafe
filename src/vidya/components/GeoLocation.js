import React from 'react'
import Completed from './Completed'
import Footer from './Footer'
import Header from './Header'
//import Main from './Main'

const GeoLocation = () => {
    return (
       <div className="Page1">
           <div className="Left">
               <Header />
               <Footer />
           </div>

           <div className="Right">
             
               <Completed />
           </div>
       </div>
    )
}

export default GeoLocation
