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

  deleteNote(index) {
    let noteList = this.state.notes;
    noteList.splice(index, 1);
    this.setState({notes:noteList});
  }

  render() {
    return (
      <section className="conteudo">
        <FormCreate createNote={this.createNote.bind(this)} />
        <NoteList 
          notes={this.state.notes} 
          deleteNote={this.deleteNote.bind(this)}
          />
      </section>
    );
  }
}

export default App;
