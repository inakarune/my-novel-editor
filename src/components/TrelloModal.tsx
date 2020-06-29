import React, { CSSProperties } from 'react';
import './TrelloModal.scss';

interface PropFromTrello {
    text: string;
    onclose:() => void;
}
class TrelloModal extends React.Component<PropFromTrello> {
    public state = {
        editInput: false,
        editDesc: false,
        title: ''
    };

    private handleChange = (e: React.ChangeEvent): void => {
    }

    componentWillReceiveProps(nextProp: PropFromTrello) {
        console.log(nextProp, this.props)
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
                        <p><span>{ !this.state.editInput ? this.state.title : null }</span><input type="text" style={ inputBool } value={ this.state.title } onChange={ this.handleChange } /></p>
                        <span onClick={ this.props.onclose }>✖</span>
                    </div>
                    <div className="content">
                        <div className="btn-box">
                            <button>Member</button>
                            <button>Label</button>
                            <button>Complete</button>
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
