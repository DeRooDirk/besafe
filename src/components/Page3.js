import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
//import GetMoreInfoButton from './GetMoreInfoButton'
import Page3Button from './Page3Button'
import { Link } from 'react-router-dom'



const Page3 = ({ subtitle }) => {
    return (
        <div className='Page1'>
            <div className='Left'>
                <Header />
                <Footer />
            </div>
            <div className='Right'>
                <Main />
                
                <div >
                
                <Page3Button title="Edit Police telephone Number"/>
                <Page3Button title="Edit SOS telephone Number"/>
                <Link to="/GeoLocation">
                <Page3Button title="Enable your location"/> 
                </Link>

                </div>

            </div>
        </div >
    )
}



export default Page3
