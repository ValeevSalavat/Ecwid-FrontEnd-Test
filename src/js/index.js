import '../style/style.scss'
import './data.json'
import Vue from 'vue'
import MainPictureGalleryComponent from '../js/MainPictureGalleryComponent.vue'
const API_URL = "https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json"


new Vue({
    render:h=>h(MainPictureGalleryComponent),
    data:{
        API_URL:'asdasd'
    }
})
.$mount('#pictureGallery')
