<template>
    <div class="picture-gallary">
        <nav class="nav__settigs">
            <a href="#" class="nav__logo">logo</a>
            <Settings v-on:filterPictures="filterPictures"/>
        </nav>
        <PictureList v-bind:objectList="this.filtredObjectList"
                     v-bind:widthFilter="this.widthFilter"
                     v-bind:heightFilter="this.heightFilter"/>
    </div>
</template>

<script>
import Settings from './components/Settings.vue'
import PictureList from './components/PictureList.vue'

//const jsonFile = require('./data.json');

export default {
    props:{
    },
    name:'PictureGallery',
    data(){
        return{
            navClassName:'nav',
            objectList:[],
            filtredObjectList:[], 
            widthFilter:0,
            heightFilter:0,
            API_PATH: require('./data.json').galleryImages
            // API_URL:'https://gitcdn.link/repo/ValeevSalavat/Ecwid-FrontEnd-Test/main/src/js/data.json?token=AFCG6EKK5NCCSTYQFGUDISDAONGSO'
        }
    },
    components:{
        Settings,
        PictureList
    },
    methods:{
      makeGetRequest(URL,callback){
        let xhr;
        if(window.XMLHttpRequest){
          xhr=new XMLHttpRequest();
        }
        else if (window.ActiveXObject){
          xhr = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xhr.onreadystatechange=function(){
          if(xhr.readyState==4){
            callback(xhr.responseText);
          }
        }
        // console.log(xhr);
        xhr.open('GET',URL,true);
        xhr.onreadystatechange=false;
        xhr.send();
      },
      fetch_URL(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            reject(new Error('timeout'));
            },5000);
    
            this.makeGetRequest(this.API_URL,(goods)=>{
            this.goods=JSON.parse(goods);
            console.log(goods);
            resolve(JSON.parse(goods));
            });
        });
      },
      readJSON(){
       // console.log(jsonFile);
        // console.log(this.API_PATH);
        this.API_PATH.forEach(element => {
            this.objectList.push(element);
            this.filtredObjectList.push(element);
        });
        console.log(this.objectList);
      },
      filterPictures(width,height){
        console.log(width,height);
        /*
        if(width == 0 && height == 0){
          this.filtredObjectList=this.objectList;
        }
        else{
          this.filtredObjectList.map(item=>{
            item.width > width &&
            item.height > height
          });
        }*/
      },
        filterPicturesWidth(width){
            // this.$emit('filterPicturesWidth',this.width);
            console.log(width);
        },
        filterPicturesHeight(height){
            // this.$emit('filterPicturesHeight',this.height);
        }
    },
    mounted(){
        // this.fetch_URL();
        this.readJSON();
    },
    updated(){
    }
}
</script>