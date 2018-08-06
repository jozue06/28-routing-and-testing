import React from 'react';

import Header from '../app/header.js';
import Footer from '../app/footer.js';
import Style from '../style/styles.js';
import NoteForm from '../note-create-form/index.js';
import NoteItem from '../note-list/note-item/index.js';



class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };

    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      // if the key exists in localStorage
    
        console.log('hidratedd')
        // get the key's value from localStorage
        let value = localStorage.getItem(key);
        

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ notes: [...this.state.notes]  });
          console.log('from storage  -->', [...this.state.nots])
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    
  }

  componentDidMount() {
    console.log('mlkjasdfteeeee')
    this.hydrateStateWithLocalStorage();
 }

  addNote(note) {
    this.state.notes.push(note);
    this.setState({ notes: [...this.state.notes] });
  }

  deleteNote(id) {
    const deletedNote = this.state.notes.find(note => {
      return note.id = id; });
    const noteIndex = this.state.notes.indexOf(deletedNote);
    this.state.notes.splice(noteIndex, 1);
    this.setState({ notes: [...this.state.notes] });
  }

  render() {

    return (
      <div>
      
        <Style.Wrapper>
          <NoteForm addNote={this.addNote} />
          {this.state.notes.map((note) => <NoteItem id={note.id} note={note} deleteNote={this.deleteNote} />)
        }
        </Style.Wrapper>
        <Footer />
      </div>
    );
  }
}


export default Dashboard;