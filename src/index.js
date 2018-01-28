import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import DashboardFront from './dashboardFront.jsx'
import DashboardBack from './dashboardBack.jsx'
import NewsDashboard from './newsDashboard.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      y: 1,
    };
  }

  changePosition() {
    this.setState({
      y: this.state.y + 1
    })
  }
  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render() {
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" />
          <img id="office" src="https://ucarecdn.com/c867b423-f74a-4977-8851-ae3bd92b3ebe/" />
        </a-assets>

        <Entity primitive="a-sky" radius="10" src="#office" />
        <DashboardFront key={1}  pos="0 0 1"/>
        <NewsDashboard key={12} rot=" 0 70 0" pos="0 0 1.5" />
        <DashboardBack key={13} rot=" 0 -70 0" pos="0 0 1.5" />

        <Entity id="box"
          geometry={{ primitive: 'box' }}
          material={{ color: this.state.color, opacity: 0.6 }}
          events={{ click: this.changePosition.bind(this) }}>
        </Entity>

        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{ property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150 }} />
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#sceneContainer'));
