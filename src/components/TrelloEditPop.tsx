import React, { CSSProperties, Props } from 'react';
import './TrelloEditPop.scss';

interface PropFromTrello {
    size: { top: string; left: string; };
    text: string;
    onsave: () => void;
}
class TrelloEditPop extends React.Component<PropFromTrello> {

    public state = {
        text: ''
    };

    private handleChange = (e: any): void => {
        this.setState({ text: e.target.value });
    }

    componentWillReceiveProps(nextProp: PropFromTrello) {
        if (nextProp.text !== this.props.text) {
            this.setState({ text: nextProp.text });
        }
    }

    render(): JSX.Element {
        const size: CSSProperties = {
            position: 'absolute',
            top: this.props.size.top,
            left: this.props.size.left
        };

        return (
            <div className="edit-trello-back">
                <div className="edit-trello-content" style={ size }> 
                    <textarea value={ this.state.text } onChange={ this.handleChange }></textarea>
                    <button onClick={ this.props.onsave }>Save</button>
                </div>
            </div>
        );
    }
}

export default TrelloEditPop;
