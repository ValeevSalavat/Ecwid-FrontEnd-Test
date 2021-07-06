import React  from 'react';
import { Button,TextField } from '@material-ui/core'
import connect from "react-redux/es/connect/connect";
import actions from './redux/actions'

class SettingsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url:'https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json'
        }
    }
    onButtonClick = (e) => {
        const { data, parseData } = this.props;
        if (data.length > 0) {
            if (confirm('Data not empty. Upload?')) {
                this.props.parseData(this.state.url)
            }
        }
        else parseData(this.state.url)
    }
    handleChange = (event) => {
        this.setState({ url: event.target.value });
    };
    dragOver = (e) => {
        e.preventDefault();
        e.target.classList.add('drag-n-drop__files');
    }
    dragEnter = (e) => {
        e.preventDefault();
    }
    dragLeave = (e) => {
        e.preventDefault();
    }
    fileDrop = (e) => {
        e.preventDefault();
        e.target.classList.remove('drag-n-drop__files');
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
        return (
            <div className="settings">
                    <TextField
                        id="outlined-secondary"
                        label="URL"
                        ref={ this.state.input_text}
                        variant="outlined"
                        color="primary"
                        onChange={this.handleChange}
                        value={this.state.url}
                        onDoubleClick={this.openFile}
                        onDragOver={this.dragOver}
                        onDragEnter={this.dragEnter}
                        onDragLeave={this.dragLeave}
                        onDrop={this.fileDrop}
                        />
                <Button variant="contained" color="primary" onClick={this.onButtonClick}>
                    Get pictures
                </Button>
                
            </div>
        );
    }
}
function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps,actions)(SettingsComponent)