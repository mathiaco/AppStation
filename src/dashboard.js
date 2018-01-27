import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
const padding = 0.3;
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [{ x: -1, y: 0, z: -3 }, { x: 0 + padding, y: 0, z: -3 }, { x: 1 + padding*2, y: 0, z: -3 }, { x: -1, y: 1 + padding, z: -3 }, {  x: 0 + padding, y: 1 + padding, z: -3 }, {x: 1 + padding*2, y: 1 + padding, z: -3 }, { x: -1, y: 2 + padding*2, z: -3 }, {  x: 0 + padding, y: 2 + padding*2, z: -3 }, {x: 1 + padding*2, y: 2 + padding*2, z: -3 }]
    };
  }

  generateDashboard() {
    return this.state.grid.map(function (item, i) {
      return <Entity primitive="a-plane" src="#groundTexture" rotation=" 0 0" height="1" width="1" key={i} position={{ x: item.x, y: item.y+1, z: item.z }} />
    })
  }
  render() {
    const generateDashboard = this.generateDashboard();
    return (
      <a-entity>
        {generateDashboard};
      </a-entity>

    );
  }
}

export default Dashboard;
