<template>
    <div class="settings">
        <select name="selector" class="settings__selector" v-model="selectorFlag">
           <option value="selector-url">URL</option>
           <option value="selector-pc">PC</option>
        </select>
        <input v-if="selectorFlag=='selector-url'" type="text" placeholder="Enter URL:" id="settings__input" v-model="urlPath">
        <input v-else-if="selectorFlag=='selector-pc'" type="text" placeholder="Enter path with pictures on your PC:" id="settings__input" v-model="urlPath">
        <div class="settings__filter">
            <input type="text" id="setting__filter-w" placeholder="Width filter">
            <input type="text" id="setting__filter-h" placeholder="Heidth filter">
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
            this.$emit('WriteUrlPath',urlPath)
        }
    },
    updated(){
        // console.log(this.selectorFlag);
    }
}
</script> 