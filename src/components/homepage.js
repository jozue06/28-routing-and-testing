import React from 'react';
import B from './styledComps.js';
class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <B.Title>Welcome to my wonderful homepage</B.Title>
    </div>;
  }
}

export default Homepage;