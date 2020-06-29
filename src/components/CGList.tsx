import React from 'react';
import './CGList.scss';

class CGList extends React.Component {
    render(): JSX.Element {
        return (
            <ul className="cglist">
                <li>
                    <div className="img-thum">
                        <img src="/assets/images/kai.png" alt=""/>
                    </div>
                </li>
            </ul>
        );
    }
}

export default CGList;
