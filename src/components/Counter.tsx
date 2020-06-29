import React, { CSSProperties } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Trello from './Trello';
import Menu from './Menu';
import ChracterList from './ChracterList';
import EpisodeList from '../components/EpisodeList';
import CreateProfile from './CreateProfile';
import CGList from './CGList';
import './Counter.scss';

class Counter extends React.Component {

    render(): JSX.Element {


        return (
            <div className="container">
                <div className="game-title">ArianReben</div>
                <div className="content">
                    <Menu/>
                    <div className="right">
                        <Route path="/" exact component={ ChracterList } />
                        <Switch>
                            <Route path="/episode" component={ EpisodeList } />
                            <Route path="/trello" component={ Trello } />
                            <Route path="/cg" component={ CGList } />
                            <Route path="/character/create" component={ CreateProfile } />
                            <Redirect path="*" to="/" />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;
