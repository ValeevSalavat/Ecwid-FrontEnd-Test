
import '../style/style.scss'    
import './data.json'
import React from 'react';
import ReactDOM from 'react-dom';

import { Route,NavLink, HashRouter } from 'react-router-dom';

import Menu from './componentsJSX/Menu'
import PictureContainer from './componentsJSX/PictureContainer'
import { Button ,ButtonGroup} from '@material-ui/core';
import SettingsComponent from './componentsJSX/SettingsComponent';
import About from './componentsJSX/About';
const API_URL = "https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json"
const API_LOCAL = './data.json'

ReactDOM.render(
    <HashRouter>
         <div className="menu">
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button><NavLink to="/gallery">Gallery</NavLink></Button>
                    <Button><NavLink to="/settings">Setting</NavLink></Button>
                    <Button><NavLink to="/about">About</NavLink></Button>
                </ButtonGroup>
        </div>
        <div className="content">
            <Route path="/gallery" component={ PictureContainer}></Route>
            <Route path="/settings" component={ SettingsComponent}></Route>
            <Route path="/about" component={ About}></Route>
        </div>
    </HashRouter>
   
,
document.getElementById("pictureGallery"));