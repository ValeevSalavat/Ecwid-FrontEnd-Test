import '../style/style.scss'    
import React from 'react';
import ReactDOM from 'react-dom';

import { Route,NavLink, HashRouter } from 'react-router-dom';

import PictureContainer from './componentsJSX/PictureContainer'
import { Button ,ButtonGroup} from '@material-ui/core';
import SettingsComponent from './componentsJSX/SettingsComponent';
import About from './componentsJSX/About';

import { createStore}  from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './componentsJSX/redux/rootReducer'

const store = createStore(rootReducer)


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div className="menu">
                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Button><NavLink to="/settings" className="menu__btn-route">Setting</NavLink></Button>
                        <Button><NavLink to="/gallery" className="menu__btn-route">Gallery</NavLink></Button>
                        <Button><NavLink to="/about" className="menu__btn-route">About</NavLink></Button>
                    </ButtonGroup>
            </div>
            <div className="content">
                <Route path="/settings" component={ SettingsComponent}></Route>
                <Route path="/gallery" component={ PictureContainer}></Route>
                <Route path="/about" component={ About}></Route>
            </div>
        </HashRouter>
     </Provider>
   
,
document.getElementById("pictureGallery"));