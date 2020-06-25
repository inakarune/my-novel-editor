import React, { CSSProperties } from 'react';

class TrelloModal extends React.Component {
    public state = {
        editInput: false,
        editDesc: false,
        title: ''
    };

    private handleChange = (e: React.ChangeEvent): void => {
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
                        <p><input type="text" style={ inputBool } value={ this.state.title } onChange={ this.handleChange } /></p>
                        <span>✖</span>
                    </div>
                    <div className="content">
                        <div className="btn-box">
                            <button>Member</button>
                            <button>Label</button>
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
