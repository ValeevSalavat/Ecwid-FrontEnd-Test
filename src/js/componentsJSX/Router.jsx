import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu'
import PictureContainer from './PictureContainer'

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/gallery' component="PictureContainer" render={() => {
                    <div>asdasdasd</div>
                }}></Route>
            </Switch>
        );
    }
}