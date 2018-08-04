import React from 'react';
import ReactDOM from 'react-dom';
import Style from './components/style/styles.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Landing from './components/landing/index.js';
import Dashboard from './components/dashboard/index.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Notes N Stuff'
    };
  }

  render() {
    return <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Landing</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
        <Style.Title>{this.state.title}</Style.Title>
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard" component={Dashboard} />


      </div>
    </Router>;
  }
}

let root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);