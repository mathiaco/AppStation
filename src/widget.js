import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

  };
  }

  render() {
    return (
    <a-entity>
          <Entity primitive="a-plane" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv" rotation=" 0 0" height="1" width="1" position={{ x: this.props.x, y: this.props.y+1, z: this.props.z }} />
    </a-entity>
    );
  }
}

export default Widget;
