import React, { Component } from 'react';
import NoteList from "./components/NoteList";
import FormCreate from "./components/FormCreate";
import "./assets/app.css";
import CategoryList from './components/CategoryList/CategoryList';

class App extends Component {

  constructor() {
    super();

    this.state = {
      notes: [],
      categoryList: ["Work", "Sports"],
    };
  }

  addCategory(category) {
    let newCatList = [...this.state.categoryList,category];
    let newState = {...this.state, categoryList:newCatList};
    this.setState(newState)
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
        <main className="conteudo-principal">
          <CategoryList 
            addCategory={this.addCategory.bind(this)}
            categories={this.state.categoryList}
          />
          <NoteList 
            notes={this.state.notes} 
            deleteNote={this.deleteNote.bind(this)}
            />
        </main>
      </section>
    );
  }
}

export default App;
