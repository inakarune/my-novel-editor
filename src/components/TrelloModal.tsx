import React, { CSSProperties } from 'react';
import './TrelloModal.scss';

interface PropFromTrello {
    text: string;
    onclose:() => void;
    ondelete: () => void;
}
class TrelloModal extends React.Component<PropFromTrello> {
    public state = {
        editInput: false,
        editDesc: false,
        title: ''
    };

    private handleChange = (e: any): void => {
        this.setState({ title: e.target.value });
    }
    
    componentDidMount() {
        this.setState({ title: this.props.text });
    }

    render(): JSX.Element {
        const inputBool: CSSProperties = {
            display: this.state.editInput ? 'inline-block' : 'none'
        };
        const textBool: CSSProperties = {
            display: this.state.editDesc ? 'block' : 'none'
        };

        return (
            <div className="trello-modal-back">
                <div className="trello-modal-container">
                    <div className="top">
                        <p><span onClick={ () => this.setState({ editInput: !this.state.editInput }) }>{ !this.state.editInput ? this.state.title : null }</span><input type="text" style={ inputBool } value={ this.state.title } onChange={ this.handleChange } /><button style={ inputBool } onClick={ () => this.setState({ editInput: false })}>Save</button></p>
                        <span onClick={ this.props.onclose }>✖</span>
                    </div>
                    <div className="content">
                        <div className="btn-box">
                            <button>Member</button>
                            <button>Label</button>
                            <button>Complete</button>
                            <button onClick={ this.props.ondelete }>Delete</button>
                        </div>
                        <h3>Description</h3>
                        <p>There are beautiful sisters in the town.</p>
                        <textarea style={ textBool }></textarea>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrelloModal;
