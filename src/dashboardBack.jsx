import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';


const padding = 0.3;
var popup = false;

class DashboardBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [{ x: -1, y: 0, z: -3, cardType: 0}, { x: 0 + padding, y: 0, z: -3, cardType: 1 }, { x: 1 + padding * 2, y: 0, z: -3, cardType: 2 }, { x: -1, y: 1 + padding, z: -3, cardType: 0 }, { x: 0 + padding, y: 1 + padding, z: -3, cardType: 3 }, { x: 1 + padding * 2, y: 1 + padding, z: -3, cardType: 4 }, { x: -1, y: 2 + padding * 2, z: -3, cardType: 0 }, { x: 0 + padding, y: 2 + padding * 2, z: -3, cardType: 1 }, { x: 1 + padding * 2, y: 2 + padding * 2, z: -3, cardType: 2}],
      widgetData: []
    };
  }


  callNews() {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=69ccb0de73a64ed2b868e8a7f430d4b1")
      .then((result) => {
        return result.json();
      }).then((jsonResult) => {
        console.log(jsonResult);
      })
  }


  render() {
    const callNews = this.callNews();
    return (
      <a-entity rotation={this.props.rot} position={this.props.pos}>
          <Entity primitive="a-plane" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[0].x, y: this.state.grid[0].y+1, z: this.state.grid[0].z }} />
          <Entity primitive="a-plane" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[1].x, y: this.state.grid[1].y+1, z: this.state.grid[1].z }} />
          <Entity primitive="a-plane" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[2].x, y: this.state.grid[2].y+1, z: this.state.grid[2].z }} />
          <Entity primitive="a-plane" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[3].x, y: this.state.grid[3].y+1, z: this.state.grid[3].z }} />
          <Entity primitive="a-plane" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[4].x, y: this.state.grid[4].y+1, z: this.state.grid[4].z }} />
          <Entity primitive="a-plane" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[5].x, y: this.state.grid[5].y+1, z: this.state.grid[5].z }} />
          <Entity primitive="a-plane" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[6].x, y: this.state.grid[6].y+1, z: this.state.grid[6].z }} />
          <Entity primitive="a-plane" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[7].x, y: this.state.grid[7].y+1, z: this.state.grid[7].z }} />
          <Entity primitive="a-plane" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[8].x, y: this.state.grid[8].y+1, z: this.state.grid[8].z }} />

        
        {callNews};
      </a-entity>

    );
  }
}

export default DashboardBack;
