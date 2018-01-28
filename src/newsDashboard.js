import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import NewsWidget from './newsWidget.js'


const padding = 0.3;
var popup = false;
class NewsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [{ x: -1, y: 0, z: -3 }, { x: 0 + padding, y: 0, z: -3 }, { x: 1 + padding*2, y: 0, z: -3 }, { x: -1, y: 1 + padding, z: -3 }, {  x: 0 + padding, y: 1 + padding, z: -3 }, {x: 1 + padding*2, y: 1 + padding, z: -3 }, { x: -1, y: 2 + padding*2, z: -3 }, {  x: 0 + padding, y: 2 + padding*2, z: -3 }, {x: 1 + padding*2, y: 2 + padding*2, z: -3 }],
      widgetData: []
  };
  }
 generatenewsDashboard() {
    return this.state.grid.map(function (item, i) {
      console.log(i)
      return <NewsWidget key={i} newsNumber={i} /*widgetData={widgetData[i]}*/ x={item.x} y={item.y} z={item.z}/>
    })}
  render() {
    const generatenewsDashboard = this.generatenewsDashboard();
    return (
      <a-entity rotation={this.props.rot} position={this.props.pos}>
        {generatenewsDashboard}
      </a-entity>

    );
  }
}

export default NewsDashboard;
