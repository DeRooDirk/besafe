import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";

const iconComponents = {
    facebook: faFacebookSquare,
    twitter: faTwitterSquare
};

const IconHeaderButton = ({iconName}) => {   

    return (
        <a href="#" className='iconButton'>
            <FontAwesomeIcon icon={iconComponents[iconName]} size="6x" />
        </a>       
    );
}


export default IconHeaderButton;