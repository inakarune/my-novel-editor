import React from 'react';

class CharacterList extends React.Component {
    render(): JSX.Element {
        return (
            <ul>
                <li>
                    <img src="../assets/images/kai.png"/>
                    <p>카를로스</p>
                </li>
            </ul>
        );
    }
}

export default CharacterList;
