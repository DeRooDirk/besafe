import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import { faHome, faPhoneSquareAlt, faComments, faCog} from "@fortawesome/free-solid-svg-icons";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
 
const iconComponents = {
    facebook: [faFacebookSquare, "2x", "../pages/settings"],
    twitter: [faTwitterSquare, "2x", "#"],
    home: [faHome, "4x", "#"],
    phone: [faPhoneSquareAlt, "4x", "#"],
    chat: [faComments, "4x", "#"],
    settings: [faCog, "4x", "#"],
    
};

const IconHeaderButton = ({iconName}) => {  
     

    return (
        <Router>
            <Link to={iconComponents[iconName][2]} className='iconButton' >            
                <FontAwesomeIcon icon={iconComponents[iconName][0]} size={iconComponents[iconName][1]} />       
            </Link>
        </Router>       
    );
}

export const showIconButtons = (buttonsName) => {
    return (
        <div>
            {
                buttonsName.map((button) => {
                    return (
                        <IconHeaderButton                
                            iconName={button}/>
                    );
                })
            }

        </div>
    );
};


export default IconHeaderButton;