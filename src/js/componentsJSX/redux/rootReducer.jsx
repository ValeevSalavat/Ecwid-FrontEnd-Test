import { combineReducers } from 'redux'
import update from 'react-addons-update';
const initialData = {
    data: {}
}

const rootReducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_PICTURES":
            let newObject = [{
                url: action.picture_url,
                width: '',
                height: ''
            }]
            return (state.data.length > 0) ? update(state, {
                data: {
                    $push: newObject
                }
            }) : update(state, {
                data: {
                    $set: newObject
                }
            })
        break;
        case "REMOVE_PICTURE":
            let new_array = state.data.filter(item => {
                            return item.url != action.picture_url
                        })
            return update(state, {
                data: {
                    $set: new_array
                }
            })
        break;
        case "PARSE_DATA":
            state.data = {}
            fetch(action.url)
            .then((response) => {return response.json();})
                .then((data) => {
                    state.data=data.galleryImages
            })
            .catch((e) => {
                console.log(e);
                alert("URL is not correct");
            });
            return state;
            break;
        case "SET_DATA":
            return (state.data.length > 0) ? update(state, {
                data: {
                    $merge: action.data.galleryImages
                }
            }) : update(state, {
                data: {
                    $set: action.data.galleryImages
                }
            })
        break;
        case "RENDER_PICTURE": 
            return update(state, {
                picturesItem: {
                    $set: action.input
                }
            })
        break;
        case "CHANGE_POSITION":
            const { urlBefore, urlAfter } = action;
            let afterIndex = -1;
            const noBeforeData = state.data.filter(item => {
                return item.url != urlBefore
            });
            
            const beforeData = state.data.filter(item => {
                if (item.url == urlAfter) afterIndex = noBeforeData.indexOf(item) 
                return item.url === urlBefore
            });
            noBeforeData.splice(afterIndex, 0, beforeData[0])
            
            return update(state, {
                data: {
                    $set: noBeforeData
                }
            })
        break;
        default:
            return state;
        break;
    }
}
export default rootReducer

