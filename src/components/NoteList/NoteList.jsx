import React, { Component } from 'react';
import CardNote from '../CardNote';
import "./style.css"

class NoteList extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {Array.of("Work", "Work", "Study").map((category, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            {/* <div>{category}</div> */}
                            <CardNote />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default NoteList;
