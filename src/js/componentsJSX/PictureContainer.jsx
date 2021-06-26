import React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
 
// const Bounce = styled.div`animation: 2s ${keyframes`${fadeIn}`} infinite`;
 
export default class PictureContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json",
            picturesItems: null,
            bufferOnePictureItem:null,
            bufferPictureItems:null
        };
        
    }
    
    componentWillMount() {
        fetch("https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    data: data.galleryImages
                });
                 this.renderContainer()
            })
            .catch(() => {
                this.setState({
                    picturesItems:<div className="container_nodata">Sorry...url was broken</div>
                })
            });
    }
    renderContainer = () => {
        let massive = [];
        this.state.data.map(item => {
            massive.push(
                    <img key={this.state.data.indexOf(item)}
                    src={item.url}
                    className="picture_item picture_fixed"
                    onDoubleClick={this.doubleClick_deletePicture}
                    onDragStart={this.dragStart}
                    onDragEnd={this.dragEnd}
                ></img>
            )
        });
        this.setState({
            picturesItems: massive
        })
    }
    componentDidMount() {
        // console.log(document.querySelector(".container"));
    }
    doubleClick_deletePicture=(e)=>{
        let newState = this.state.picturesItems.filter(item => {
           return item.props.src != e.target.currentSrc
        });
        this.setState({
            picturesItems:newState
        })
    }
    dragStart = (e) => {
        e.target.classList.add('picture_item-selected');
        document.querySelector(".container").childNodes.forEach(item => {
            item.classList.remove("picture_fixed");
            item.classList.add("picture_noFixed");
        });
        let newState = this.state.picturesItems.filter(item => {
            return item.props.src != e.target.src;
        })
        this.setState({
            bufferPictureItems: newState,
            bufferOnePictureItem:e.target
        })
    }
    dragEnd=(e)=>{
        e.target.classList.remove('picture_item-selected');
        document.querySelector(".container").childNodes.forEach(item => {
            item.classList.remove("picture_noFixed");
            item.classList.add("picture_fixed");
        });
    }
    dragOver = (e) => {
        e.preventDefault();
        let currentElement = e.target;

        const isMoveable = this.state.bufferOnePictureItem !== currentElement &&
            currentElement.classList.contains(`picture_item`);
        if (!isMoveable) {
            return;
        }
        const nextElement = (currentElement === this.state.bufferOnePictureItem.nextElementSibling) ?
            currentElement.nextElementSibling :
            currentElement;
        
        e.target.parentNode.insertBefore(this.state.bufferOnePictureItem,nextElement);
    }
    render() {
        return (
            <div className="container" onDragOver={this.dragOver}>
                {this.state.picturesItems}
            </div>
        );
    }
}