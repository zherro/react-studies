import React, { Component } from 'react';
import NoteList from "./components/NoteList";
import FormCreate from "./components/FormCreate";
import "./assets/app.css";

class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <FormCreate />
        <NoteList />
      </section>
    );
  }
}

export default App;
