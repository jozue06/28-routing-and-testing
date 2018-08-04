import React from 'react';

import Header from '../app/header.js';
import Footer from '../app/footer.js';
import Style from '../style/styles.js';
import NoteList from '../note-list/index.js';
import NoteForm from '../note-create-form/index.js';
import NoteItem from '../note-item/index.js';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };

    this.addNote = this.addNote.bind(this);
  }

  addNote(note) {
    this.state.notes.push(note);
    this.setState({ notes: [...this.state.notes] });
    console.log('#1 added note:', this.state.notes);
  }

  render() {

    return (
      <div>
        <Header />
        <Style.Wrapper>
          <NoteForm addNote={this.addNote} />
          {this.state.notes.map((note) => <NoteItem key={note.noteName} note={note} />)}
          <NoteList notes={this.state.notes.id} />
        </Style.Wrapper>
        <Footer />
      </div>
    );
  }
}


export default Dashboard;