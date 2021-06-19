<template>
    <img class="picture-gallary__item" 
         :v-if="item.width > widthFilter"
         :src="item.url"
         v-on:click="this.test"/>
</template>

<script>
export default { 
   props:{
     item:{
        type:Object,
        // required:true 
     },
     widthFilter:{
        type:Number
     },
     heightFilter:{
        type:Number
     }
   },
   methods:{
      test(){
         console.log(this);
      }
   }
}
</script>