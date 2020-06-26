import React from 'react';
import { faUser, faBook, faThLarge, faCog, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Menu extends React.Component {
    render(): JSX.Element {
        return (
            <ul>
                <li><FontAwesomeIcon icon={ faUser } size="1x" /></li>
                <li><FontAwesomeIcon icon={ faBook } size="1x" /></li>
                <li><FontAwesomeIcon icon={ faThLarge } size="1x" /></li>
                <li><FontAwesomeIcon icon={ faImage } size="1x" /></li>
                <li><FontAwesomeIcon icon={ faCog } size="1x" /></li>
            </ul>
        );
    }
}

export default Menu;
