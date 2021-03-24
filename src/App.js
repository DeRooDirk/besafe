import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import MainMiddel from './components/MainMiddel'


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
            </div>            
        </div>
    )
}

export default App



