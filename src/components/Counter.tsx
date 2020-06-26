import React from 'react';
import Trello from './Trello';
import Menu from './Menu';
import ChracterList from './ChracterList';
import CharacterList from './ChracterList';
import './Couter.scss';

class Counter extends React.Component {

 

  
    render(): JSX.Element {
      return (
        <div className="container">
            <div>ArianReben</div>
            <div>
                <Menu/>
                <CharacterList />
            </div>
        </div>
      );
    }
}

export default Counter;
