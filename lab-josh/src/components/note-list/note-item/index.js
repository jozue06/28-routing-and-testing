import React from 'react';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
    };
    this.deleteNote = this.deleteNote.bind(this);
  }

    deleteNote(e) {
      console.log('this state?', this.props.id);
      e.preventDefault();
      this.props.deleteNote(this.props.id);
    }

  render() {

    console.log('#2 render the note item', this.props.note);

    return <li className="note">
      <h3>Note: {this.props.note.noteName} </h3>
      <h4>Content:{this.props.note.content} </h4>
      <button onClick={this.deleteNote} > x </button>
    </li>;
  }
}