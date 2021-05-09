import React, { Component } from 'react';
import NoteList from "./components/NoteList";
import FormCreate from "./components/FormCreate";

class App extends Component {
  render() {
    return (
      <section>
        <FormCreate />
        <NoteList />
      </section>
    );
  }
}

export default App;
