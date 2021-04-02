import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import GetMoreInfoButton from './GetMoreInfoButton'
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton'


const Page2 = ({ subtitle }) => {
    return (
        <div className='Page2'>
            <div className='Left'>
                <Header />
                <Footer />
            </div>
            <div className='Right'>
                <Main />
                <main>{subtitle}</main>
                <div >
                < GetMoreInfoButton />
                <Link to='/'>
                <LogoutButton />
                
                </Link>
                </div>

            </div>
        </div >
    )
}

Page2.defaultProps = {
    subtitle: 'Hello Page 2'

}

export default Page2
