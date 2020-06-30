import React from 'react';
import './Trello.scss';
import { faEdit, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TrelloEditPop from './TrelloEditPop';
import TrelloModal from './TrelloModal';

class Trello extends React.Component {
    public state = {
        currentY: 0,
        size: { top: '0px', left: '0px' },
        text: 'I am text',
        display: 'none',
        addOne: 'none',
        addTwo: 'none',
        list: [
            { title: 'I am one', label: 'common', complete: false },
            { title: 'I am two', label: 'true', complete: true },
            { title: 'I am three', label: 'bad', complete: false },
            { title: 'I am four', label: 'another', complete: true }
        ],
        idx: 0,
        txt: ''
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

    private edit = (): void => {
        const el: any = document.getElementById('123');
        const size = el.getBoundingClientRect();
        this.setState({ size: { top: (size.top - 15) + 'px', left: (size.left - 15) + 'px' }, display: 'edit' });
    }

    private save = (): void => {
        this.setState({ display: 'none' });
    }

    private addCard = (display: string, keyword: string): void => {
        let key: any = {};
        key['add' + keyword] = display;
        key.txt = '';
        if (display === 'none') {
            let arr = this.state.list.slice();
            const obj = {
                title: this.state.txt,
                complete: false,
                label: 'common'
            };
            if (keyword === 'One') {
                key.list = [obj].concat(arr);
                this.setState(key);
            } else if (keyword === 'Two') {
                arr.push(obj);
                key.list = arr;
                this.setState(key);
            } else {
                this.setState({ addOne: display, addTwo: display });
            }
        } else {
            this.setState(key);
        }
    }

    private handleChange = (e: any) => {
        this.setState({ txt: e.target.value });
    }

    private sortCategory = (label: string) => {
        if (label === 'common') {
            return 'common';
        } else if (label === 'bad') {
            return 'bad';
        } else if (label === 'true') {
            return 'true';
        } else if (label === 'another') {
            return 'another';
        }
    }

    private delete = () => {
        
    }

    render(): JSX.Element {
        return (<>
            { this.state.display === 'edit' ? <TrelloEditPop size={ this.state.size } text={ this.state.text } onsave={ this.save } /> : null }
            { this.state.display === 'detail' ? <TrelloModal text={ this.state.text } ondelete={ this.delete } onclose={ this.save } /> : null }
            
            <div className="trello-background">
                <ul className="trello-list">
                    <li>
                        <div className="title"><span>Todo</span><span onClick={ () => this.addCard('block', 'One') }>+</span></div>
                        <div className="trello-area">

                            <div className="add-item" style={{ display: this.state.addOne }}>
                                <textarea placeholder="Enter a title for this card..." value={ this.state.txt } onChange={ this.handleChange }></textarea>
                                <div className="btn-box">
                                    <button onClick={ () => this.addCard('none', 'One') }>Add Card</button>
                                    <button onClick={ () => this.addCard('none', '') }>✖</button>
                                    <button>Label</button>
                                </div>
                            </div>

                            {
                                this.state.list.map((item, idx) => 
                                <div className={ 'trello-item ' + this.sortCategory(item.label) } key={ idx } onClick={ () => this.setState({ display: 'detail', text: item.title, idx: idx }) }>
                                    <p id={ 'p' + idx }>{ item.title }</p>
                                    <span className={ item.complete ? 'green' : 'red' }><FontAwesomeIcon icon={ faCheckCircle } size="1x" /></span>
                                    <span className="edit" onClick={ this.edit }><FontAwesomeIcon icon={ faEdit } size="1x" /></span>
                                </div>)
                            }
                            <div className="add-item" style={{ display: this.state.addTwo }}>
                                <textarea placeholder="Enter a title for this card..." value={ this.state.txt } onChange={ this.handleChange }></textarea>
                                <div className="btn-box">
                                    <button onClick={ () => this.addCard('none', 'Two') }>Add Card</button>
                                    <button onClick={ () => this.addCard('none', '') }>✖</button>
                                    <button>Label</button>
                                </div>
                            </div>
                            <div className="plus-another" onClick={ () => this.addCard('block', 'Two') }>+ Add another card</div>
                        </div>
                    </li>
                </ul>
            </div>
            {/* // <div className="trello-container" onDrop={ this.drop } onDragOver={ this.dragover }>
            //     <div id="p1" className="one" draggable="true" onDragStart={ this.dragStart }>I am One</div>
            //     <div id="p2" className="two" draggable="true" onDragStart={ this.dragStart }>I am Two</div>
            //     <div id="p3" className="three" draggable="true" onDragStart={ this.dragStart }>I am Three</div>
            // </div> */}
        </>);
    }
}

export default Trello;
