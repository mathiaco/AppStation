import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './widget.js'


const padding = 0.3;
var popup = false;
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [{ x: -1, y: 0, z: -3 }, { x: 0 + padding, y: 0, z: -3 }, { x: 1 + padding*2, y: 0, z: -3 }, { x: -1, y: 1 + padding, z: -3 }, {  x: 0 + padding, y: 1 + padding, z: -3 }, {x: 1 + padding*2, y: 1 + padding, z: -3 }, { x: -1, y: 2 + padding*2, z: -3 }, {  x: 0 + padding, y: 2 + padding*2, z: -3 }, {x: 1 + padding*2, y: 2 + padding*2, z: -3 }],
      widgetData: []
  };
  }
 generateDashboard() {
    return this.state.grid.map(function (item, i) {
      return <Widget key={i} /*widgetData={widgetData[i]}*/ x={item.x} y={item.y} z={item.z}/>
    })}
    
  callNews(){
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=69ccb0de73a64ed2b868e8a7f430d4b1")
    .then((result)=> {
      return result.json();
    }).then((jsonResult) => {
      console.log(jsonResult);
  })
  }

      
  render() {
    const generateDashboard = this.generateDashboard();
    const callNews = this.callNews();
    return (
      <a-entity rotation={this.props.rot} position={this.props.pos}>
        {generateDashboard};
        {callNews};
      </a-entity>

    );
  }
}

export default Dashboard;
