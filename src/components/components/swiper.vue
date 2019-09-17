<template>
  <div class="Swiper">
    <Swiper  v-if="modalShow" ref="swiper" :autoPlay='autoPlay' :interval='5000' :showIndicator='false'>
      <Slide v-for="(i,index) in pro.list" :key="index">
        <div class="img-box">
          <img :src="i.imgSrc" alt="">
        </div>
      </Slide>
    </Swiper>
    <div class="meng"
    > </div>
  </div>
</template>


<script>
  import {
    Swiper,
    Slide
  } from 'vue-swiper-component';
import { setTimeout } from 'timers';

  export default {
    name: 'mySwiper',
    data() {
      return {
        modalShow:true
      }
    },
    components: {
      Swiper,
      Slide
    },
    props: {
      pro: {
        type: Object,
        default: () => {}
      },
      autoPlay: true
    },
    methods: {

    },
    mounted() {



    },
    watch: {
      autoPlay(newName, oldName) {
        if(newName===true){
          setTimeout(()=>{
           this.$refs.swiper.nextSlide()
          },25)
        }
      }

    }


  }

</script>
<style lang="less" scoped>
  .Swiper {
    position: relative;
    .title {
      .title_img {
        // width: 179px;
      }
    }

    .wh_content {
      // overflow:visible
    }

    .img-box {
      // height: 218px;
      width: 100%;
      height: 218px;

      img {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  .meng{
    // background: #123;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 10;
  }

</style>
