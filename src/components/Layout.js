import Header from './Header'
import Footer from './Footer'
import React from 'react';
import RightHeader from './RightHeader'


const Layout =({children}) =>{
    return(
        <>
            <div className = 'Left'>
                <Header/>
                <Footer/>
            </div>
            <div className = 'Right'>
                  <RightHeader/>         
            </div>            

        </>
    )
}

export default Layout;