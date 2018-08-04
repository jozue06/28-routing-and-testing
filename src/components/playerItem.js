import React from 'react';

class PlayerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {},
    };

  }

  //   handleRemove(e) {
  //     this.props.remove(this.props.player.id);
  //   }

  render() {
  
    console.log('#2 render the player item', this.props.player);

    return <li className="player">
      <h3>Player: {this.props.player.playerName} </h3>
      <h4>Position:{this.props.player.position} </h4>
    </li>;
  }
}

export default PlayerItem;