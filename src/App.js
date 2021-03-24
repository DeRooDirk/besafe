import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import MainMiddel from './components/MainMiddel'
import GetMoreInfoButton from './components/GetMoreInfoButton'
import GetStartedButton from './components/GetStartedButton'
import GetFeedButton from './components/GetFeedButton'
import LogoutButton from './components/LogoutButton'
import IconHeaderButton from './components/IconButton'

const buttonNames= ['facebook', 'twitter'];
const showIconButtons = () => {
    return (
        <div>
            {
                buttonNames.map((button) => {
                    return (
                        <IconHeaderButton                
                            iconName={button}/>
                    );
                })
            }

        </div>
    );
};

const App = ( ) =>{
    return(
        <div className='App'>
            <div className = 'Left'>
                <Header/>
                <Footer/>
            </div>
            <div className = 'Right'>
                <header className = 'rightHeader'>
                    {showIconButtons()}
                </header>
                <Main/>
                <MainMiddel/>  
               < GetMoreInfoButton/> 
                < GetStartedButton/> 
                < GetFeedButton/>
              < LogoutButton/>            
            </div>            
        </div>
    )
}
export default App



