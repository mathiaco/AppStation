import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';


const padding = 0.3;
var popup = false;

class DashboardFront extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [{ x: -1, y: 0, z: -3, cardType: 0 }, { x: 0 + padding, y: 0, z: -3, cardType: 1 }, { x: 1 + padding * 2, y: 0, z: -3, cardType: 2 }, { x: -1, y: 1 + padding, z: -3, cardType: 0 }, { x: 0 + padding, y: 1 + padding, z: -3, cardType: 3 }, { x: 1 + padding * 2, y: 1 + padding, z: -3, cardType: 4 }, { x: -1, y: 2 + padding * 2, z: -3, cardType: 0 }, { x: 0 + padding, y: 2 + padding * 2, z: -3, cardType: 1 }, { x: 1 + padding * 2, y: 2 + padding * 2, z: -3, cardType: 2 }],
      widgetData: [],
      bitcoin: { quote: { trade_price: 0 } },
      tesla: { quote: { trade_price: 0 } },
      EUR: { quote: { trade_price: 0 } },
      Soccer: { Name: "", Goals: 0 },
      Weather: {
        name:"Montreal",
        main: {
          temp: 0
        },
        weather: [{
          main: "none"
        }]

      }


    };
  }
  componentWillMount() {
    fetch("http://conu.astuce.media/api/finance/security/details/quote.json?internalSymbol=BTCBTSP").then((result) => {
      return result.json();

    }).then((jsonResult) => {
      console.log(jsonResult.quote);
      this.setState({ bitcoin: jsonResult[0] })
    }
      )
    fetch("http://conu.astuce.media/api/finance/security/details/quote.json?internalSymbol=TSLA_XNGS").then((result) => {
      return result.json();
    }).then((jsonResult) => {
      this.setState({ tesla: jsonResult[0] })
    }
      )
    fetch("http://conu.astuce.media/api/finance/security/details/quote.json?internalSymbol=EURUSD").then((result) => {
      return result.json();
    }).then((jsonResult) => {
      this.setState({ EUR: jsonResult[0] })
    }
      )

    fetch("http://conu.astuce.media/api/sports/football/team/stats.json?Coverage=Event&LevelOfDetail=High&Affiliation=17435833f1ed42848320a80f013bbb3f&Event=180120-swa-liv").then((result) => {
      return result.json();
    }).then((jsonResult) => {
      console.log(jsonResult);
      this.setState({ Soccer: jsonResult.Results[0] })
    }
      )
    fetch("http://api.openweathermap.org/data/2.5/weather?id=6077243&appid=d0808000979691341736803c6a538437&units=metric").then((result) => {
      return result.json();
    }).then((jsonResult) => {
      console.log(jsonResult);
      this.setState({ Weather: jsonResult })
    }
      )

  }

  render() {
    return (
      <a-entity rotation={this.props.rot} position={this.props.pos}>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[0].x, y: this.state.grid[0].y + 1, z: this.state.grid[0].z - 0.01 }} />
          <Entity primitive="a-plane" src="https://tctechcrunch2011.files.wordpress.com/2014/02/bitcoin-perfecthue.jpg?fit=1%2C1" rotation=" 0 0" height="0.5" width="1" position={{ x: this.state.grid[0].x, y: this.state.grid[0].y + 1.35, z: this.state.grid[0].z }} />
          <Entity primitive="a-text" color="black" height="0.2" width="4" value={this.state.bitcoin.quote.trade_price} position={{ x: this.state.grid[0].x - 0.5, y: this.state.grid[0].y + 0.8, z: this.state.grid[0].z }} />
        </a-entity>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[1].x, y: this.state.grid[1].y + 1, z: this.state.grid[1].z - 0.01 }} />
          <Entity primitive="a-plane" src="https://tctechcrunch2011.files.wordpress.com/2014/02/bitcoin-perfecthue.jpg?fit=1%2C1" rotation=" 0 0" height="0.5" width="1" position={{ x: this.state.grid[1].x, y: this.state.grid[1].y + 1.35, z: this.state.grid[1].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="4" value={this.state.bitcoin.quote.trade_price} position={{ x: this.state.grid[1].x - 0.5, y: this.state.grid[1].y + 0.8, z: this.state.grid[1].z }} />
        </a-entity>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[2].x, y: this.state.grid[2].y + 1, z: this.state.grid[2].z - 0.01 }} />
          <Entity primitive="a-plane" src="https://tctechcrunch2011.files.wordpress.com/2014/02/bitcoin-perfecthue.jpg?fit=1%2C1" rotation=" 0 0" height="0.5" width="1" position={{ x: this.state.grid[2].x, y: this.state.grid[2].y + 1.35, z: this.state.grid[2].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="4" value={this.state.bitcoin.quote.trade_price} position={{ x: this.state.grid[2].x - 0.5, y: this.state.grid[2].y + 0.8, z: this.state.grid[2].z }} />
        </a-entity>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[3].x, y: this.state.grid[3].y + 1, z: this.state.grid[3].z - 0.01 }} />
          <Entity primitive="a-plane" src="https://tctechcrunch2011.files.wordpress.com/2014/02/bitcoin-perfecthue.jpg?fit=1%2C1" rotation=" 0 0" height="0.5" width="1" position={{ x: this.state.grid[3].x, y: this.state.grid[3].y + 1.35, z: this.state.grid[3].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="4" value={this.state.bitcoin.quote.trade_price} position={{ x: this.state.grid[3].x - 0.5, y: this.state.grid[3].y + 0.8, z: this.state.grid[3].z }} />
        </a-entity>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[4].x, y: this.state.grid[4].y + 1, z: this.state.grid[4].z - 0.01 }} />
          <Entity primitive="a-plane" src="https://tctechcrunch2011.files.wordpress.com/2014/02/bitcoin-perfecthue.jpg?fit=1%2C1" rotation=" 0 0" height="0.5" width="1" position={{ x: this.state.grid[4].x, y: this.state.grid[4].y + 1.35, z: this.state.grid[4].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="4" value={this.state.bitcoin.quote.trade_price} position={{ x: this.state.grid[4].x - 0.5, y: this.state.grid[4].y + 0.8, z: this.state.grid[4].z }} />
        </a-entity>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[5].x, y: this.state.grid[5].y + 1, z: this.state.grid[5].z - 0.01 }} />
          <Entity primitive="a-plane" src="https://tctechcrunch2011.files.wordpress.com/2014/02/bitcoin-perfecthue.jpg?fit=1%2C1" rotation=" 0 0" height="0.5" width="1" position={{ x: this.state.grid[5].x, y: this.state.grid[5].y + 1.35, z: this.state.grid[5].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="4" value={this.state.bitcoin.quote.trade_price} position={{ x: this.state.grid[5].x - 0.5, y: this.state.grid[5].y + 0.8, z: this.state.grid[5].z }} />
        </a-entity>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[6].x, y: this.state.grid[6].y + 1, z: this.state.grid[6].z - 0.01 }} />
          <Entity primitive="a-plane" src="https://tctechcrunch2011.files.wordpress.com/2014/02/bitcoin-perfecthue.jpg?fit=1%2C1" rotation=" 0 0" height="0.5" width="1" position={{ x: this.state.grid[6].x, y: this.state.grid[6].y + 1.35, z: this.state.grid[6].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="4" value={this.state.bitcoin.quote.trade_price} position={{ x: this.state.grid[6].x - 0.5, y: this.state.grid[6].y + 0.8, z: this.state.grid[6].z }} />
        </a-entity>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[7].x, y: this.state.grid[7].y + 1, z: this.state.grid[7].z - 0.01 }} />
          <Entity primitive="a-plane" src="https://web.cms.weatherbug.com/CMSPages/GetFile.aspx?guid=586ecaba-7079-476b-ad5f-65275b1f17f2" rotation=" 0 0" height="0.5" width="1" position={{ x: this.state.grid[7].x, y: this.state.grid[7].y + 1.35, z: this.state.grid[7].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="4" value={this.state.Weather.name} position={{ x: this.state.grid[7].x - 0.5, y: this.state.grid[7].y + 1, z: this.state.grid[7].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="4" value={this.state.Weather.main.temp} position={{ x: this.state.grid[7].x - 0.5, y: this.state.grid[7].y + .8, z: this.state.grid[7].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="4" value={this.state.Weather.weather[0].main} position={{ x: this.state.grid[7].x - 0.5, y: this.state.grid[7].y + 0.6, z: this.state.grid[7].z }} />
        </a-entity>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[8].x, y: this.state.grid[8].y + 1, z: this.state.grid[8].z - 0.01 }} />
          <Entity primitive="a-plane" src="https://cdn.images.dailystar.co.uk/dynamic/122/photos/522000/900x738/1009522.jpg" rotation=" 0 0" height="0.5" width="1" position={{ x: this.state.grid[8].x, y: this.state.grid[8].y + 1.35, z: this.state.grid[8].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="4" value={this.state.Soccer.Name} position={{ x: this.state.grid[8].x - 0.5, y: this.state.grid[8].y + 1, z: this.state.grid[8].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="4" value={this.state.Soccer.Code} position={{ x: this.state.grid[8].x - 0.5, y: this.state.grid[8].y + 0.6, z: this.state.grid[8].z }} />
        </a-entity>
      </a-entity>

    );
  }
}

export default DashboardFront;
