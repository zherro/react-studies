import React, { Component } from 'react';
import CardNote from '../CardNote';
import "./style.css"

class NoteList extends Component {

    constructor(){
        super();
        this.state = {notes:[]};
        this._notesBind = this._newNotes.bind(this);
    }

    componentDidMount() {
        this.props.notes.subscribe(this._notesBind);
    }

    componentWillUnmount() {
        this.props.notes.unsubscribe(this._notesBind);
    }


    _newNotes(notes) {
        this.setState({...this.state,notes});
    }

    render() {
        return (
            <ul className="lista-notas">
                {this.state.notes.map((note, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNote 
                                deleteNote={this.props.deleteNote}  
                                index={index} 
                                category={note.category} 
                                title={note.title} 
                                text={note.text} />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default NoteList;
