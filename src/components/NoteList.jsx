import React, { Component } from 'react';
import CardNote from './CardNote';

class NoteList extends Component {
    render() {
        return (
            <ul>
                {Array.of("Work", "Work", "Study").map(category => {
                    return (
                        <li>
                            <div>{category}</div>
                            <CardNote />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default NoteList;
