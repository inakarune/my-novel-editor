import React from 'react';
import { faUser, faBook, faThLarge, faCog, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Menu.scss';

class Menu extends React.Component {
    render(): JSX.Element {
        return (
            <ul className="menu">
                <li><Link to="/"><FontAwesomeIcon icon={ faUser } size="1x" /></Link></li>
                <li><Link to="/episode"><FontAwesomeIcon icon={ faBook } size="1x" /></Link></li>
                <li><Link to="/trello"><FontAwesomeIcon icon={ faThLarge } size="1x" /></Link></li>
                <li><Link to="/cg"><FontAwesomeIcon icon={ faImage } size="1x" /></Link></li>
                <li><Link to="/setting"><FontAwesomeIcon icon={ faCog } size="1x" /></Link></li>
            </ul>
        );
    }
}

export default Menu;
