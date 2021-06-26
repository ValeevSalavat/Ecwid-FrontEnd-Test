import React  from 'react';
import ReactDOM from 'react-dom';
// import ButtonGroup from 'material-ui/styles/ButtonGroup'
import { Button, ButtonGroup } from '@material-ui/core'

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        
    }
    onButtonClick = (e) => {
        console.log(e);
        
    }
    render() {
        return (
            <div className="menu">
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button>Gallуry</Button>
                    <Button>Edit</Button>
                </ButtonGroup>
            </div>
        );
    }
}