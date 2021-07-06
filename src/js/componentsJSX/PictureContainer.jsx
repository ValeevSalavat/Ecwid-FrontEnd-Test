import React from 'react';
import connect from 'react-redux/es/connect/connect';
import actions from './redux/actions'
 
 class PictureContainer extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            picturesItems: null,
            bufferOnePictureItem:null,
            bufferPictureItems: null,
            loaded: false,
            error:null
        };
     }
    componentDidMount() {
        if (this.props.data.length > 0) {
            this.setState({loaded:true})
            this.renderContainer()
        }
        else {
            this.setState({
                picturesItems:<div className="gallary__picture-item gallery__no-picture">No data</div>
            })
        }
    }
    componentDidUpdate(newProps) {
        if (newProps.data.length != this.props.data.length) {
            this.renderContainer();
            return false;
        }
    }
    renderContainer = () => {
         const { data } = this.props;
            this.setState({
                picturesItems: data.map(item => {
                    return <img key={data.indexOf(item)}
                        src={item.url}
                        className="gallery__picture-item"
                        onDoubleClick={this.doubleClick_deletePicture}
                        onDragStart={this.dragStart}
                        onDragEnd={this.dragEnd}
                    ></img>
                }),
                loaded: false
            })
    }
    doubleClick_deletePicture = (e) => {
        this.props.removePicture(e.target.currentSrc)
    }
    dragStart = (e) => {
        e.target.classList.add('gallery__picture-item-selected');
        document.querySelector(".gallery").childNodes.forEach(item => {
            item.classList.add("gallery__noFixed");
        });
        let newState = this.state.picturesItems.filter(item => {
            return item.props.src != e.target.src;
        })
        this.setState({
            bufferPictureItems: newState,
            bufferOnePictureItem: e.target
        })
    }
    dragEnd=(e)=>{
        e.target.classList.remove('gallery__picture-item-selected');
        document.querySelector(".gallery").childNodes.forEach(item => {
            item.classList.remove("gallery__noFixed");
        });
    }
    dragOver = (e) => {
        e.preventDefault();
        if (this.props.data.length > 0 && e.dataTransfer.files.length==0) {
            let currentElement = e.target;

            const isMoveable = this.state.bufferOnePictureItem !== currentElement &&
                currentElement.classList.contains(`gallery__picture-item`);
            if (!isMoveable) {
                return;
            }
            const nextElement = (currentElement === this.state.bufferOnePictureItem.nextElementSibling) ?
                currentElement.nextElementSibling :
                currentElement;
            
            this.props.changePosition(this.state.bufferOnePictureItem.src, nextElement.src);
            e.target.parentNode.insertBefore(this.state.bufferOnePictureItem,nextElement);
        }
    }
    dragEnter = (e) => {e.preventDefault();}
    dragLeave = (e) => {e.preventDefault();}
    fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files
        Object.keys(files).forEach(key => {
            switch (files[key].type) {
                case "image/png":
                    this.props.addPicture(URL.createObjectURL(files[key]));
                break;
                
                case "application/json":
                let reader = new FileReader();
                    reader.readAsText(files[key]);
                    reader.onload = () => {
                        this.props.setData(JSON.parse(reader.result));
                    }
                    break;
                default: alert("Type of file non supported")
                    break;
            }
        })
            
    }
    render() {
         const { loaded,picturesItems } = this.state;
            return (
                <div className="gallery"
                    onDragOver={this.dragOver}
                    onDragEnter={this.dragEnter}
                    onDragLeave={this.dragLeave}
                    onDrop={this.fileDrop}>
                    {(loaded) ? <div className="gallery__no-picture">Loading...</div> : picturesItems  }
                </div>
            );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps,actions)(PictureContainer)