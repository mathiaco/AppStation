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
      bitcoin: {Quote: {Trade_price:0}},
      tesla: {Quote: {Trade_price:0}},
      EUR: {Quote: {Trade_price:0}},
    };
  }
  componentWillMount(){
   fetch("http://conu.astuce.media/api/finance/security/details/quote.json?internalSymbol=BTCBTSP").then((result)=> {
     return result.json();
   }).then((jsonResult) => {
 this.setState({bitcoin: jsonResult})}
   )
   fetch("http://conu.astuce.media/api/finance/security/details/quote.json?internalSymbol=TSLA_XNGS").then((result)=> {
     return result.json();
   }).then((jsonResult) => {
 this.setState({tesla: jsonResult})}
   )
   fetch("http://conu.astuce.media/api/finance/security/details/quote.json?internalSymbol=EURUSD").then((result)=> {
     return result.json();
   }).then((jsonResult) => {
 this.setState({EUR: jsonResult})}
   )
  

}

  render() {
    return (
      <a-entity rotation={this.props.rot} position={this.props.pos}>
        <a-entity>
          <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[0].x, y: this.state.grid[0].y + 1, z: this.state.grid[0].z- 0.01 }} />
          <Entity primitive="a-plane" src="https://tctechcrunch2011.files.wordpress.com/2014/02/bitcoin-perfecthue.jpg?fit=1%2C1" rotation=" 0 0" height="0.5" width="1" position={{ x: this.state.grid[0].x, y: this.state.grid[0].y + 1.35, z: this.state.grid[0].z }} />
          <Entity primitive="a-text" color="black" height="0.5" width="10" value={this.state.bitcoin.Quote.Trade_price}position={{ x: this.state.grid[0].x , y: this.state.grid[0].y + 0.8, z: this.state.grid[0].z }} />
        </a-entity>
        <Entity primitive="a-plane" src="https://cdn.pixabay.com/photo/2017/01/20/17/20/euro-1995423__340.jpg" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[1].x, y: this.state.grid[1].y + 1, z: this.state.grid[1].z }} />
        <Entity primitive="a-plane" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAADCCAMAAACYEEwlAAAAwFBMVEX////lGDcAAAAPDw/kACPjABnlCjDkACjlFDX2xMnlHDnkACb++vr4zdHkACvzrrTqYnDvjpfsbnrmLkf87e/63uD0s7nzqbDjAB7oTV741dj85+nyoqniAAD4z9LwlJzwmqK5ubmIiIji4uLr6+ugoKDjABPpWGdBQUG+vr7teIOvr685OTmRkZH2wMXS0tJbW1t6enrpUmPnPFHraHXtfIfuhY9tbW0VFRUfHx8vLy8+Pj5jY2OYmJhOTk7X19cpisHwAAAEwUlEQVR4nO3a63aaSgAFYEQYUVFTjYp6zImgeCEGta2etGny/m91uIkIw8VVlSxmfz/amMzEmR2yBQnHAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAjKn2aZrL5cS2XJqmNpXzXtL9aMvZdvOLp3t5V2fmNO8l3pS8VH8ft1tevG/V9Z+Z689aPWxe/Cw+1mbea72VD2+HqhH7w9ZMY7twh23vura7WfLl7UTzH8rT6VRz09A06+NTJWjGgee1yPxicPY1NQ31ffHf8cifWJ9Sjw/ePg5rw5T9sYUkTw7lQA2WLfwnZ7gfnLxtl3mv9IY+vY3zb4f1zHhxHyzd/zbGbP1edgZYORT5FWL6y9okv3W3qDq7L3v/Gs7nPje8lcFHnmu8gxnPq96HE3f7LuvXwrXh34r8y+Axjoe6dhbC8csmAxEEBULgX/JeTF4WpxSKem6UTg2EYOS9mLwEmtHvReYEmpFPH11Ufgjs9mKgGdntxUAzstuLgWZktxcDzchwL/rNyP/OeyF58prRv6Ziksoz34t+Mxb2DcVMvGZkuhe9ZuQXeS8jX04zst2LXjM677szzGlGtnvRa0bGe9FpRtZ70b5Ly3wvOs3Iei86zch6LzrNyHwvWs2IXrSbkfletJuR+V60m5H5XrSbMe8VfAUM33c5YfqttSOG/poXAAAAAACK4LWaxev5JDnDrFH4meQhVePpqNENT3l8skdEPk332Ej3SJ/6IArplFpoFlHSpowjSx+NFZrAlFZ4SnVsfVp/yBjCOHUf45ipQ72UTumFZvWUlBlkHnmmUcocKZw0xzUE+1u1s4XArZopi6p8i51aT82guYvMGpDkDenRAy8lBEmPHvaXhSDXpeRnKMXPHaSl0OxE3/2Qa0mxS3oj+jzJIRBlGJ1yWQhcV09KgQiRmgpY6UTyHbfhIyL1d1Kei4FZZ0idUDbkhSARKnFH66wLQ+C6NSF2UUInphU9w3bN5/6Am/5j6cdTzKxGu0M36FPHOyFItd2Aok1L7fIQOK41KNVopF241hK/S8XOILZB/oITAslY9a7LQ7iO/o1DiL5qJEAIHEJwIATuq4cgZxCeU7gQxmKacTU8xztPSJjyHJ5yWQgt+sXJyTjry2S2EL5Vks7+StQLgbRrh1Lln/CUy0LopZ361q8bAtdMPk0v6ZEDoYAhDBNP00sK5RsULwRuKMQfDESnzS9gCJy8V0Rq/Yj6nHolMEpo08r1QiDURTVvE4LlkS7uzw4SXk2dK5arhED2o27UaN+8VQjX46z/KiE0/6V+7RkhIAQHQuAQguMGIcj9Vpp+zC2TXp+itSIJIcyfYu/wnL0W3/tI6Aj1FGPaW7vyXhQqNCThPKFE4m+mnO3q3iG8iiknZ80ftFlC4u2RuBBiSZWz0XfvhIfkuz2SQDljek6+3rg8BPF8U/cvxu9JF9OEcjeJ66cdPZeGoPw8H33FEBRCiJDh1WGlN+n3UQhROpRC6I7jhvvToiGICcP159DonrP0mBAE+wmyhlBtryxZRnf38weaefuVNvwndfDZxMizDnfxo9uRoKv2eub0Oz8t+2u76JscAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX9n/AZGKWgtLAwoAAAAASUVORK5CYII=" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[2].x, y: this.state.grid[2].y + 1, z: this.state.grid[2].z }} />
        <Entity primitive="a-plane" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[3].x, y: this.state.grid[3].y + 1, z: this.state.grid[3].z }} />
        <Entity primitive="a-plane" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[4].x, y: this.state.grid[4].y + 1, z: this.state.grid[4].z }} />
        <Entity primitive="a-plane" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[5].x, y: this.state.grid[5].y + 1, z: this.state.grid[5].z }} />
        <Entity primitive="a-plane" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[6].x, y: this.state.grid[6].y + 1, z: this.state.grid[6].z }} />
        <Entity primitive="a-plane" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[7].x, y: this.state.grid[7].y + 1, z: this.state.grid[7].z }} />
        <Entity primitive="a-plane" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv" rotation=" 0 0" height="1" width="1" position={{ x: this.state.grid[8].x, y: this.state.grid[8].y + 1, z: this.state.grid[8].z }} />      </a-entity>

    );
  }
}

export default DashboardFront;
