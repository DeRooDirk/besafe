import { showIconButtons } from './IconButton';

const buttonsName= ['facebook', 'twitter'];


const RightHeader = () => {    
    return (
        <header className = 'rightHeader'>
            { showIconButtons(buttonsName) }
        </header>
    );
}

export default RightHeader;
