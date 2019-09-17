<template>
  <div>
    <div class="loader">
          <!-- <img class="bg_img" src="../../assets/loading_bg.jpg" alt=""> -->
          <div class="loader-info">
              <div v-if="this.num<10" class="mum">{{this.num}}0%</div>
              <div v-if="this.num===10"  class="mum">加载完成</div>
          </div>
       
    </div>
  </div>
</template>


<script>
  export default {
    name: 'loader',
    data() {
      return {
        time: 0,

        all: 11,
        num:0,
        mv:1,
      }
    },
    props:{
      Isover:false
    },
    methods: {
      
    },
    mounted() {

      this.mv=setInterval(() => {
        if (this.time == 5) {
          this.time = 0
          if( this.num<9){
            this.num++
          }
        } else {
          this.time++
        }
      }, 200);
     
    },
    watch:{
      over(){

      },

        num(){
          if(this.num==10){
            clearInterval(this.mv)
            this.imgSrc = require("../../assets/loading/05.png")
            this.$emit('over','over')
          }
        }
    }
  }


</script>
<style lang="less" scoped>
  .bg_img{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
  }

  .loader {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;

    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    .loader-info {
      width: 170px;
      margin-top: 180px;
      z-index: 1000;
      font-weight: 500;
      img{
        width: 100%;
      }
      .mum{
        color: #fff;
        font-size: 20px;
        font-weight: 700;
      }
    }

  }


</style>
