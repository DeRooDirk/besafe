import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import MainMiddel from './components/MainMiddel'
import GetMoreInfoButton from './components/GetMoreInfoButton'
//import GetStartedButton from './components/GetStartedButton'
//import GetFeedButton from './components/GetFeedButton'
//import LogoutButton from './components/LogoutButton'

const App = ( ) =>{
    return(
        <div className='App'>
            <div className = 'Left'>
                <Header/>
                <Footer/>
            </div>
            <div className = 'Right'>
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



