import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.scss'    
import './data.json'
import Settings from './components/SettingsComponent'
const API_URL = "https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json"

ReactDOM.render(
    <Settings></Settings>
,
document.getElementById("pictureGallery"));