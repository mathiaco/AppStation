import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       y: this.props.y
    };
  }
changePosition(){
    this.setState({
        y: this.state.y+1
    })
}

  render () {
    return (
        <Entity text={{value: 'Hello, A-Frame React!', align: 'center'}} 
        position={{x: 0, y: this.state.y, z: -1}}
        events={{click: this.changePosition.bind(this)}}
/>
    );
  }
}

export default Dashboard;
