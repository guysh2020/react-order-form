import React, { Component } from 'react';
import logo from './Mask.svg';
import './App.css';

import ItemsList from './components/itemsList';
import InteractiveList from './components/list'
import { Paper } from '@material-ui/core';

// const styles = {
//   paperContainer: {
//       width: 1275 + 'px',
//       height: 785 + 'px',
//       backgroundImage: `url(${logo})`
//   }
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 3, idea: "first idea", group: "tamar, haim" },
        { id: 7, idea: "second idea", group: "guy, yaron" },
        { id: 8, idea: "third idea", group: "gil, shimon" }
      ],
    }
  }


}

export default App;
