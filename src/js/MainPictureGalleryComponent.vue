<template>
    <div>
        <nav class="nav__settigs">
            <a href="#" class="nav__logo">logo</a>
            <Settings/>
        </nav>
        <p>{{this.objectList}}</p>
        <PictureList/>
    </div>
</template>

<script>
import Settings from './components/Settings.vue'
import PictureList from './components/PictureList.vue'
import PictureListItem from './components/PictureListItem.vue'
const jsonFile = require('./data.json');

export default {
    props:{
    },
    name:'PictureGallery',
    data(){
        return{
            navClassName:'nav',
            objectList:'',
            API_URL:'https://gitcdn.link/repo/ValeevSalavat/Ecwid-FrontEnd-Test/main/src/js/data.json?token=AFCG6EKK5NCCSTYQFGUDISDAONGSO'
        
        }
    },
    components:{
        Settings,
        PictureList,
        PictureListItem
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
        // fetch(this.API_URL)
        //     .then(res =>res.json())
        //     .then(json => {
        //         // this.objectList=JSON.parse(json);
        //         console.log(json);
        //     })
      },
      readJSON(){
        console.log(this.API_PATH);
        
        (items)=>{
            console.log(items);
        }
      }
    },
    mounted(){
        this.fetch_URL();
    },
    updated(){
    }
}
</script>