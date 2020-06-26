import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import CharacterList from '../components/ChracterList';
import EpisodeList from '../components/EpisodeList';
import Counter from '../components/Counter';

const Root: React.FC = () => (
    <BrowserRouter>
        <Counter />
    </BrowserRouter>
)

export default Root;
