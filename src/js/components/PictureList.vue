<template>
    <div class="picture-gallary__container">
      <PictureListItem 
        v-bind:item="item"
        v-bind:widthFilter="widthFilter"
        v-bind:heightFilter="heightFilter"
        v-for="item of this.objectList"
        :key="item.url"
      />
    </div>
</template>

<script>
import PictureListItem from './PictureListItem.vue'

export default { 
   props:{
     objectList:{
    //    type:Array,
    //    required:true
     },
     widthFilter:{
        type:Number
     },
     heightFilter:{
        type:Number
     }
   },
    components:{
       PictureListItem
    },  
}
</script>