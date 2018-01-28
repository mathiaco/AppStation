import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class NewsWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

  };
  }

  render() {
    return (
    <a-entity>
        <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.props.x, y: this.props.y+1, z: this.props.z - 0.01 }} />
          <Entity primitive="a-plane" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv" rotation=" 0 0" height="0.5" width="1" position={{ x: this.props.x, y: this.props.y+1.35, z: this.props.z }} />
          <Entity primitive="a-text" color="black" height="0.2" width="1" value="LOL" position={{ x: this.props.x-0.4, y: this.props.y+1, z: this.props.z }} />
            <Entity primitive="a-text"  color="black" height="0.3" width="1" value="DESCRIPTION" position={{ x: this.props.x-0.4, y: this.props.y+0.8, z: this.props.z }} />

    </a-entity>
    );
  }
}

export default NewsWidget;
