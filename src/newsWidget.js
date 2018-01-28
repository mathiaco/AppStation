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
            news: [{
                title: "NEWS HEAD",
                description: "DESCRIPTION",
                urlToImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv"
            },
            {
                title: "NEWS HEAD",
                description: "DESCRIPTION",
                urlToImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv"

            },
            {
                title: "NEWS HEAD",
                description: "DESCRIPTION",
                urlToImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv"
            },
            {
                title: "NEWS HEAD",
                description: "DESCRIPTION",
                urlToImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv"
            },
            {
                title: "NEWS HEAD",
                description: "DESCRIPTION",
                urlToImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv"
            },
            {
                title: "NEWS HEAD",
                description: "DESCRIPTION",
                urlToImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv"
            },
            {
                title: "NEWS HEAD",
                description: "DESCRIPTION",
                urlToImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv"
            },
            {
                title: "NEWS HEAD",
                description: "DESCRIPTION",
                urlToImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv"
            },
            {
                title: "NEWS HEAD",
                description: "DESCRIPTION",
                urlToImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv"

            },
            {
                title: "NEWS HEAD",
                description: "DESCRIPTION",
                urlToImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNZeN2-cBHJGkeu5Y5o_km0yQJf01HbeF0hcJlFNTgU4b56tv"

            }]
        };
    }
    objToArr(Obj) {
        var tempArr = [];
        for (var key in Obj) {
            if (Obj.hasOwnProperty(key)) {
                tempArr.push(Obj.key)
            }
        }
        return tempArr;
    }

    componentWillMount() {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=69ccb0de73a64ed2b868e8a7f430d4b1")
            .then((result) => {
                return result.json();
            }).then((jsonResult) => {
                console.log(jsonResult.articles)
                this.setState({
                    news: jsonResult.articles
                })
            })
    }
    render() {
        return (
            <a-entity>
                <Entity primitive="a-plane" src="https://technologydenmark.dk/wp-content/uploads/2016/03/whitebg.png" rotation=" 0 0" height="1" width="1" position={{ x: this.props.x, y: this.props.y + 1, z: this.props.z - 0.01 }} />
                <Entity primitive="a-plane" src={this.state.news[this.props.newsNumber].urlToImage} rotation=" 0 0" height="0.5" width="1" position={{ x: this.props.x, y: this.props.y + 1.35, z: this.props.z }} />
                <Entity primitive="a-text" color="black" height="0.5" width="1" value={this.state.news[this.props.newsNumber].title} position={{ x: this.props.x - 0.5, y: this.props.y + 1, z: this.props.z }} />

            </a-entity>
        );
    }
}

export default NewsWidget;
