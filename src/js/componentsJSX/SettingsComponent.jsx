import React  from 'react';
import ReactDOM from 'react-dom';
// import ButtonGroup from 'material-ui/styles/ButtonGroup'
import { Button, ButtonGroup } from '@material-ui/core'

export default class SettingsComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    onButtonClick = (e) => {
        console.log(e);
        
    }
    render() {
        return (
            <div className="settings">
                <input type="text" />URL
                <div>
                    <img src="" alt="" />
                    <div>-</div>
                </div>
                <div>
                    <img src="" alt="" />
                    <div>-</div>
                </div>
            </div>
        );
    }
}