

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Page2 from './components/Page2'
import Page1 from './components/Page1'
import Page3 from './components/Page3'
import GeoLocation from './components/GeoLocation'
//import GetStartedButton from './components/GetStartedButton'
//import GetFeedButton from './components/GetFeedButton'
//import LogoutButton from './components/LogoutButton'

const App = () => {
    return (
        <div className='App'>
            <Router>

                <Switch>
                    <Route path='/' exact component={() => <Page1 />} />
                    <Route path='/page3' exact component={() => <Page3 />} />
                    <Route path='/geolocation' exact component={() => <GeoLocation />} />
                    {/* <Route path='/' exact component={() => <Page1 />} /> */}
                    {/* <Route path='/Page3' exact component={() => <Page3 />} /> */}
                </Switch>

            </Router>
            {/* < GetStartedButton/> 
                < GetFeedButton/>
               < LogoutButton/>   */}

        </div >
    )
}
export default App



