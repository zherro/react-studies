import React, { Component } from 'react';
import NoteList from "./components/NoteList";
import FormCreate from "./components/FormCreate";
import "./assets/app.css";

class App extends Component {

  constructor() {
    super();

    this.state = {
      notes: []
    };
  }

  createNote(title, text) {
    let newNote = {title, text};
    let newNoteList = [...this.state.notes,newNote]
    let newState = {
      notes: newNoteList
    }
    this.setState(newState)
  }

  render() {
    return (
      <section className="conteudo">
        <FormCreate createNote={this.createNote.bind(this)} />
        <NoteList notes={this.state.notes}/>
      </section>
    );
  }
}

export default App;
