<template>
  <div  ref="long">
    <swiper :options="swiperOption" style="height:100%">
      <swiper-slide>
        <div class="box">
          <img src="../assets/下拉页面/1.jpg" alt="">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          <img src="../assets/下拉页面/2.jpg" alt="">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          <img src="../assets/下拉页面/3.jpg" alt="">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          <img src="../assets/下拉页面/4.jpg" alt="">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          <img src="../assets/下拉页面/5.jpg" alt="">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          <img src="../assets/下拉页面/6.jpg" alt="">
          <img @click="gohome" class="home" src="../assets/下拉页面/btn-4@3x.jpg" alt="">
        </div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <musice></musice>
  </div>
</template>


<script>
  import 'swiper/dist/css/swiper.css'
  import musice from './components/musice'

  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  import {
    setTimeout
  } from 'timers';

  export default {
    name: 'lastBanner',
    data() {
      return {
        swiperOption: {
          direction: 'vertical',
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          height: window.innerHeight
        }


      }
    },
    components: {
      swiper,
      swiperSlide,
      musice
    },
    methods: {
      handleScroll() {

      },
      gohome(){
          this.$router.push('/')

      }
    }


  }

</script>
<style>
  /* html {
    height: 1877px !important;

  } */

</style>

<style lang='less' scoped>
  .box {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      
    }
    .home{
    position: absolute;
    bottom: 0;
    left: 0;
    height:40px ;
    width: 100%;
    }
  }
 

</style>
