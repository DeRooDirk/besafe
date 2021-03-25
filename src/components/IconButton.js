import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import { faHome, faPhoneSquareAlt, faComments, faCog} from "@fortawesome/free-solid-svg-icons";

const iconComponents = {
    facebook: [faFacebookSquare, "6x", "#"],
    twitter: [faTwitterSquare, "6x", "#"],
    home: [faHome, "4x", "#"],
    phone: [faPhoneSquareAlt, "4x", "#"],
    chat: [faComments, "4x", "#"],
    settings: [faCog, "4x", "#"],
    
};

const IconHeaderButton = ({iconName}) => {   

    return (
        <a href={iconComponents[iconName][2]} className='iconButton'>
            <FontAwesomeIcon icon={iconComponents[iconName][0]} size={iconComponents[iconName][1]} />
        </a>       
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