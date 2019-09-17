<template>
  <div class="musice" @click="play()">
      <img v-if="on" src="../../assets/music_on@3x.png" alt="">
      <img v-else src="../../assets/music_off@3x.png" alt="">
    
  </div>
</template>


<script>


  export default {
    name: 'musice',
    data() {
      return {
        on: true
      }
    },
    props: {
  
    },
    methods: {
      play(){
        if(!this.on){
          var audio = document.getElementById('xxx');
          audio.play();
        }else{
          var audio = document.getElementById('xxx');
          audio.pause();
        }
      
        this.on=!this.on
      }
    },
    mounted() {


    },
    watch: {


    }


  }

</script>
<style lang="less" scoped>
 .musice{
   position: fixed;
   top: 15px;
   right: 15px;
    width: 25px;
    height: 25px;
    z-index: 999;
    img{
      width: 100%;
      height: 100%;
    }
 }

</style>
