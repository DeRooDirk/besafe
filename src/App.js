import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import MainMiddel from './components/MainMiddel'
import GetMoreInfoButton from './components/GetMoreInfoButton'
<<<<<<< HEAD
import GetStartedButton from './components/GetStartedButton'
import GetFeedButton from './components/GetFeedButton'
import LogoutButton from './components/LogoutButton'
import RightHeader from './components/RightHeader'
import FooterMenu from './components/FooterMenu'
=======
//import GetStartedButton from './components/GetStartedButton'
//import GetFeedButton from './components/GetFeedButton'
//import LogoutButton from './components/LogoutButton'
>>>>>>> 7d680a9e1289cc7339401f3ea5d9900a327a70dc

const App = ( ) =>{
    return(
        <div className='App'>
            <div className = 'Left'>
                <Header/>
                <Footer/>
            </div>
            <div className = 'Right'>
                <RightHeader/>
                <FooterMenu/>
                <Main/>
                <MainMiddel/>  
               < GetMoreInfoButton/> 
               {/* < GetStartedButton/> 
                < GetFeedButton/>
               < LogoutButton/>   */}         
            </div>            
        </div>
    )
}
export default App



