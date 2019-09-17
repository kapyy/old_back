<template>
  <div class="moveBg">
    <video style="width:100%"  ref="video1" id='video1'  loop="loop" autoplay>
      <source src="../assets/大树.mp4" type="video/mp4">
    </video>
    <img class="bg" src="../assets/大树-mengceng.png"   usemap="#planetmap" alt="">
      <map name="planetmap" id="planetmap">
      <area shape="rect" coords="50,60,190,270" href ="/#/long" alt="Venus" />
      <area shape="rect" coords="230,188,370,400" href ="www.souhu.com" alt="Mercury" />
      <area shape="rect" coords="20,320,160,530" href ="www.bilibili.com" alt="Sun" />
    </map>
  </div>
</template>


<script>
  export default {
    name: 'moveBg',
    data() {
      return {

      }
    },
    methods: {
      go() {
        this.$router.push({
          path: 'long'
        })

      }
    },
    mounted() {

    },


  }

</script>

<style lang='less' scoped>
  .moveBg {
    width: 100%;
    height: 100%;
  }

  video#video1 {

    position: fixed;
    left: 0;
    top: 0;
    // width: 100%;
    height: 100%;

    width: auto;

    height: auto;

    z-index: -100;

    // background: url(polina.jpg) no-repeat; 

    background-size: cover;
  }
  .bg{
    width: 100%;
    height: 100%;
    position: fixed;
    opacity: 0;
    left: 0;
  }

  .box{
    width: 100px;
    height: 100px;

  }

</style>
