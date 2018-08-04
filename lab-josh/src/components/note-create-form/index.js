import React from 'react';
import uuidv4 from 'uuid/v4';

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteName: '',
      content: '',
      id: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    const change = e.target.value;
    this.setState({ [e.target.name]: change, id: uuidv4() });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNote(this.state);
    document.getElementById('form').reset();
  }


  render() {
    return <form id="form" onSubmit={this.handleSubmit}>
      <input type="text" name="noteName" placeholder="Note Title" onChange={this.handleChange} />
      <input type="text" name="content" placeholder="text" onChange={this.handleChange} />
      <input type="submit" value="Add" />
    </form>;
  }
}