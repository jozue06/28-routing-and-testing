import React from 'react';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
    };

  }

    handleRemove(e) {
      this.props.remove(this.props.note.id);
    }

  render() {

    console.log('#2 render the player item', this.props.note);

    return <li className="note">
      <h3>Note: {this.props.note.noteName} </h3>
      <h4>Content:{this.props.note.content} </h4>
    </li>;
  }
}