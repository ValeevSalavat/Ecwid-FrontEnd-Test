const addPicture = (picture_url) => {
    return {
        type: "ADD_PICTURES",
        picture_url
    }
}
const removePicture = (picture_url)=>{
    return {
        type: "REMOVE_PICTURE",
        picture_url
    }
}
const changePosition = (urlBefore,urlAfter)=>{
    return {
        type: "CHANGE_POSITION",
        urlBefore,
        urlAfter
    }
}
const parseData = (url) => {
    return {
        type: "PARSE_DATA",
        url
    }
}
const setData = (data) => {
    return {
        type: "SET_DATA",
        data
    }
}
const renderPicture = (input) => {
    return {
        type: "RENDER_PICTURE",
        input
    }
}
module.exports = {addPicture,removePicture,changePosition,parseData,renderPicture,setData};