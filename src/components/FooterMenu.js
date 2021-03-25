import { showIconButtons } from './IconButton';

const buttonsName = ['home', 'phone', 'chat', 'settings'];


const FooterMenu = () => {    
    return (
        <header className = 'rightHeader'>
            { showIconButtons(buttonsName) }
        </header>
    );
}

export default FooterMenu;
