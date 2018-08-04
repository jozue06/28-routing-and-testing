import React from 'react';
import uuidv4 from 'uuid/v4';

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: '',
      position: 0,
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
    this.props.addPlayers(this.state);
    console.log('# 1.1 plaasss?', this.state);
  }


  render() {
    return <form onSubmit={this.handleSubmit}>
      <input type="text" name="playerName" placeholder="Player Name" onChange={this.handleChange} />
      <input type="number" name="position" placeholder="position" onChange={this.handleChange} />
      <input type="submit" value="Add" />
    </form>;
  }
}

export default PlayerForm;