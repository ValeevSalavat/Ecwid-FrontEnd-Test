<template>
    <div class="picture-gallary__settings">
        <select name="selector" class="picture-gallary__settings-selector" v-model="selectorFlag">
           <option value="selector-url">URL</option>
           <option value="selector-pc">PC</option>
        </select>
        <input v-if="selectorFlag=='selector-url'" type="text" placeholder="Enter URL:" id="settings__input" v-model="urlPath">
        <input v-else-if="selectorFlag=='selector-pc'" type="text" placeholder="Enter path with pictures on your PC:" id="settings__input" v-model="urlPath">
        <div class="picture-gallary__settings-filter">
            <input type="text" id="setting__filter-w" placeholder="Width filter"
                   v-on:filterPictures="$emit('filterPicturesWidth',12)">
            <input type="text" id="setting__filter-h" placeholder="Heidth filter"
                   v-on:filterPictures="$emit('filterPicturesHeight',23)">
        </div>
    </div>   
</template>

<script>
export default {
    props:{
        // cssClassName:String
    },
    data(){
        return{
            selectorFlag:'selector-url', // selector-url or selector-pc
            urlPath:''
        }
    },
    methods:{
        WriteUrlPath(){
            this.$emit('WriteUrlPath',this.urlPath)
        },
        filterPicturesWidth(){
            this.$emit('filterPicturesWidth',this.width);
        },
        filterPicturesHeight(){
            this.$emit('filterPicturesHeight',this.height);
        }
    },
    updated(){
        // console.log(this.selectorFlag);
        // console.log(this.);
        this.filterPictures;
    }
}
</script> 