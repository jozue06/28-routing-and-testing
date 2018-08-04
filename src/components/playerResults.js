import React from 'react';
import Reddit from '../components/styledReddit.js';
import Results from './playerItem.js';

class PlayerResults extends React.Component {
  constructor(props) {
    super(props);
    this.showTable = this.showTable.bind(this);
  }


  showTable() {
    console.log('showtable', this.state);

    return this.props.players;
  }

  render() {
    return (
      <Reddit.Wrapper>
        <div>
          <ul>
            <Reddit.Text>
              {this.showTable()}
            </Reddit.Text>
          </ul>
        </div>
      </Reddit.Wrapper>
    );
  }
}

export default PlayerResults;