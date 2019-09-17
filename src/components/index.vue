<template>
  <div style="height:100%" @touchend='play' @click='play'>
    <loader v-if='loader' @over='over'></loader>
    <div class="imgBox" v-show='shwoBox==1'>
      <img :key='i' v-for="(i,index) in 120" style="bg" :src="animationImag1[index].img" v-show="index == imgIndex">
    </div>
    <v-touch class="imgBox" v-show='shwoBox==2'>
      <img :key='i' v-for="(i,index) in 36" style="bg" :src="animationImag2[index].img" v-show="index == imgIndex">
    </v-touch>
    <v-touch class="imgBox" v-show='shwoBox==3'  @swipeup="go1('/#/lastBanner')">
      <img :key='i' v-for="(i,index) in 36" style="bg" :src="animationImag3[index].img" v-show="index == imgIndex" usemap="#planetmap" >
       <map name="planetmap" id="planetmap">
        <area shape="rect" coords="50,60,190,370" @click="go('/#/long')" alt="Venus" />
        <area shape="rect" coords="230,188,370,500" @click="go('/#/long2')" alt="Mercury" />
        <area shape="rect" coords="20,320,160,630" @click="go('/#/long3')" alt="Sun" />
      </map>
      <!-- <div class="xiala" v-show="showXiala">
         <img src="../assets/xiala.gif" alt="">
      </div> -->
    </v-touch>
    <musice></musice>
  </div>
</template>


<script>
  import loader from './components/loader'
  import musice from './components/musice'
  import {
    setTimeout,
    setInterval,
    clearInterval
  } from 'timers';

  export default {
    name: 'index',
    components: {
      loader,
      musice
    },
    data() {
      return {
        time: 0,
        all: 11,
        num: 20,
        loader: true,
        animationImag1: [],
        animationImag2: [],
        animationImag3: [],
        imgIndex: 0,
        shwoBox: 0,
        timer:undefined,
        showXiala:true

      }
    },
    methods: {
      go(i){
        location.href=i
      },
      go1(i){
         if(this.showXiala){
            location.href=i
      }
      },
      play() {
 
      },
      mp4_1() {
        this.shwoBox = 1
        this.imgIndex = 0
        let self = this
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            self.imgIndex++
            if (self.imgIndex == 120) {
              clearInterval(this.timer)
              self.mp4_3()
            }
          },
          66.66)
      },
      mp4_2() {
        this.shwoBox = 2
        this.imgIndex = 0
        let self = this
        this.timer = setInterval(() => {
            self.imgIndex++
            if (self.imgIndex == 36) {
              clearInterval(this.timer)
              self.over()
              self.mp4_1()
            }
          },
          83.66)
      },
      mp4_3() {
        this.shwoBox = 3
        this.imgIndex = 0
        let self = this
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            self.imgIndex++
            if (self.imgIndex == 36) {
              self.imgIndex = 0
            }
          },
          66.66)
      },
      over() {
        this.loader = false 
      },
      touchUp() {
        this.mp4_3()
      },
      myFunction() {
      },

    },
    beforeCreate() {
    },
    mounted() {
      window.onload = () => {
        this.mp4_2()
      }
      if(document.readyState == "complete"){
          this.over()
          this.showXiala=true
          this.mp4_3()
      }
    },
    created() {
      for (let i = 0; i < 36; i++) {
        this.animationImag2.push({
          img: require("../assets/序列/move2/movie2_000" + i + ".jpg")
        })
      }
      for (let i = 0; i < 120; i++) {
        this.animationImag1.push({
          img: require("../assets/序列/movie1/movie1_000" + i + ".jpg")
        })
      }
  

      for (let i = 0; i < 36; i++) {
        this.animationImag3.push({
          img: require("../assets/序列/movie3/movie3_000" + i + ".jpg")
        })
      }

    },
    destroyed(){
        console.log('destroyed')
        clearInterval(this.timer)

    },
 


  }

</script>

<style lang='less' scoped>
  .bg {
    width: 100%;
    
    // height: 100%;
  }

  .imgBox {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      display: block
    }
  }

  .xiala {
    position: absolute;
    bottom: 10px;
    left: 49%;
    width: 10px;

  }

</style>
