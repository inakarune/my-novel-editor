import React from 'react';
import './Trello.scss';

class Trello extends React.Component {
    public state = {
        currentY: 0
    };

    private dragStart = (event: any): void => {
        event.dataTransfer.setData('application/my-app', event.target.id);
        event.dataTransfer.dropEffect = 'move';
        this.setState({ currentY: event.target.getBoundingClientRect().top })
    }

    private dragover = (event: any): void => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }

    private drop = (event: any): void => {
        event.preventDefault();
        const data = event.dataTransfer.getData('application/my-app');
        const el: any = document.getElementById(data);

        if (event.target.getBoundingClientRect().top < this.state.currentY) {
            event.target.before(el);
        } else {
            event.target.after(el);
        }
    }

    render(): JSX.Element {
        return (
            <div className="trello-container" onDrop={ this.drop } onDragOver={ this.dragover }>
                <div id="p1" className="one" draggable="true" onDragStart={ this.dragStart }>I am One</div>
                <div id="p2" className="two" draggable="true" onDragStart={ this.dragStart }>I am Two</div>
                <div id="p3" className="three" draggable="true" onDragStart={ this.dragStart }>I am Three</div>
            </div>
        );
    }
}

export default Trello;
