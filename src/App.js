import React, { Component } from 'react';
import NoteList from "./components/NoteList";
import FormCreate from "./components/FormCreate";
import "./assets/app.css";
import CategoryList from './components/CategoryList/CategoryList';
import Categories from './dados/Categories';
import Notes from './dados/Notes';

class App extends Component {

  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new Notes();
  }

  render() {
    return (
      <section className="conteudo">
        <FormCreate 
          categories={this.categories}
          createNote={this.notes.addNote.bind(this.notes)} />
        <main className="conteudo-principal">
          <CategoryList 
            addCategory={this.categories.addCategory.bind(this.categories)}
            categories={this.categories}
          />
          <NoteList 
            notes={this.notes.notes} 
            deleteNote={this.notes.deleteNote.bind(this.notes)}
            />
        </main>
      </section>
    );
  }
}

export default App;
