import React from 'react';
import './ChracterList.scss';
import { Link } from 'react-router-dom';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CharacterList extends React.Component {
    render(): JSX.Element {
        const img = {
            background: `white url(${ '/assets/images/kai.png' })`,
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        };

        return (<>
            <ul className="character-photo-list">
                <li style={ img }>
                    <p>카를로스</p>
                </li>
                <li style={ img }>
                    <p>카를로스</p>
                </li>
                <li style={ img }>
                    <p>카를로스</p>
                </li>
                <li style={ img }>
                    <p>카를로스</p>
                </li>
                <li style={ img }>
                    <p>카를로스</p>
                </li>
            </ul>
            <Link to="/character/create" className="plus-profile"><FontAwesomeIcon icon={ faUserPlus } size="2x" /></Link>
        </>);
    }
}

export default CharacterList;
