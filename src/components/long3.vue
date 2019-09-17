<template>
  <div class="long3" ref="long" :style="longStyle">
    <div class="main">
      <div :style="topHeight"></div>
      <div class="animate animated fadeInLeft">
        <!-- <img  style="width:100%" s src="../assets/03-bigpic.jpg" alt=""> -->

        <div class="animate-box">
          <div class="left">
            <div class="animated fadeInLeft">
              <img src="../assets/未来之园/01.jpg" alt="">
            </div>
          </div>
          <div class="right">
            <div class="right-top  animated fadeInRight">
              <img src="../assets/未来之园/02.jpg" alt="">

            </div>
            <div class="right-botton ">
              <div class=" animated fadeInRight">
                <img src="../assets/未来之园/03.jpg" alt="">

              </div>
              <div class=" animated fadeInRight">
                <img src="../assets/未来之园/04.jpg" alt="">
              </div>

            </div>
          </div>

        </div>

      </div>
      <div class="swiperLiset">
        <div v class="swiper1 ">
          <div class="title">
            <img style="width:194px" src="../assets/未来之园/word-1.png" alt="">
          </div>
          <div class="img1 imgbox ">
            <img src="../assets/未来之园/pic-1.jpg" alt="">
          </div>
        </div>
        <div v class="swiper1  ">
          <div class="title">
            <img style="width:238px" src="../assets/未来之园/word-2.png" alt="">
          </div>
          <div class="img2 imgbox ">
            <img src="../assets/未来之园/pic-2.jpg" alt="">
          </div>
        </div>

        <div class="swiper1 ">
          <div class="title">
            <img style="width:274px" src="../assets/未来之园/word-3.png" alt="">
          </div>
          <div class="img3 imgbox ">
            <img src="../assets/未来之园/pic-3.jpg" alt="">
          </div>
        </div>
        <div class="swiper1  ">
          <div class="title">
            <img style="width:280px" src="../assets/未来之园/word-4.png" alt="">
          </div>
          <div class="img4 imgbox ">
            <img src="../assets/未来之园/pic-4.jpg" alt="">
          </div>
        </div>
        <div class="swiper1  ">
          <div class="title">
            <img style="width:225px" src="../assets/未来之园/word-5.png" alt="">
          </div>
          <div class="imgpp ">
            <img src="../assets/未来之园/pic-5.jpg" alt="">
            <img src="../assets/未来之园/pic-6.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class='footer-left' @click="go('/')">
      </div>
      <div class='footer-right' @click="go('/long2')">
      </div>
    </div>
    <musice></musice>
  </div>
</template>


<script>
  import musice from './components/musice'

  import mySwiper from './components/swiper'
  import {
    setTimeout,
    setInterval,
    clearInterval
  } from 'timers';

  export default {
    name: 'long3',
    data() {
      return {
        longStyle: {
          height: '2000px'
        },
        topHeight: {
          height: '260px'

        },
        doAnimate: false,
        autoPlayIndex: 0,
        swiper1: {
          list: [{
            imgSrc: require("../assets/未来之园/pic-1.jpg")
          }],
        },
        swiper1_show: false,
        swiper2: {
          list: [{
            imgSrc: require("../assets/未来之园/pic-2.jpg")
          }],
          // autoPlay: true
        },
        swiper2_show: false,
        swiper3: {
          list: [{
            imgSrc: require("../assets/未来之园/pic-3.jpg")
          }],
        },
        swiper3_show: false,
        swiper4: {
          list: [{
            imgSrc: require("../assets/未来之园/pic-4.jpg")
          }],
        },
        swiper5: {
          list: [{
            imgSrc: require("../assets/未来之园/pic-5.jpg")
          }],
        },
        swiper4_show: false,
        swiperIndex: 1,
        scrollTo: 0,
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        width1: 0,
        width2: 0,
        width3: 0,
        width4: 0,
        time1: undefined,
        time2: undefined,
        time3: undefined,
        time4: undefined,


      }
    },
    components: {
      mySwiper,
      musice
    },
    methods: {
      go(i) {
        this.$router.push(i)
        // location.href=i
      },
      tesst() {
        let self = this

        if (this.time1 !== undefined && this.time1 !== undefined & this.time !== undefined & this.time4 !== undefined) {
          return
        }
        this.time1 = setInterval(() => {
          if (self.num1 < 70000) {
            self.num1 += 100
            self.width1 += 1
          } else {
            clearInterval(this.time1)
          }
        }, 50)
        this.time2 = setInterval(() => {
          if (self.num2 < 1500) {
            self.num2 += 5
            self.width2 += 0.5

          } else {
            clearInterval(this.time2)
          }
        }, 50)

        this.time3 = setInterval(() => {
          if (self.num3 < 25) {
            self.num3 += 0.1
            self.width3 += 1
          } else {
            clearInterval(this.time3)
          }
        }, 50)
        this.time4 = setInterval(() => {
          if (self.num4 < 6000) {
            self.num4 += 10
            self.width4 += 0.3

          } else {
            clearInterval(this.time4)
          }
        }, 50)
      },
      handleScroll() {

        this.scrollTo = document.documentElement.scrollTop || document.body.scrollTop
        let scrollTo = this.scrollTo
        if (scrollTo > 600) {
          this.tesst()
        }
      }
    },
    mounted() {
      window.scrollTo(0, 0)
      document.body.addEventListener('touchmove', this.handleScroll, false),
        this.longStyle.height = window.screen.width * 4.896 + 'px'
      this.topHeight.height = window.screen.width * 0.7 + 'px'
    },
  }

</script>
<style>
  /* html {
    height: 1877px !important;

  } */
  body {
    overflow: scroll
  }

</style>

<style lang='less' scoped>
  .long3 {
    width: 100%;
    padding-bottom: 31px;
    background-image: url(../assets/未来之园/bg.jpg);
    background-size: 100% 100%;
    top: 0;
    position: relative;

    .main {

      .animate {
        // height: 400px;
        z-index: 1;
        position: relative;

        .title {
          padding: 27px 0;

          img {
            width: 278px;
          }

        }

        .animate-box {
          width: 100%;
          // height: 200px;
          overflow: hidden;
          display: flex;
          justify-content: center;

          .left {
            width: 32%;
            // height: 100%s;

            >div {
              height: 100%;

              img {
                height: 100%;

              }

            }
          }

          .right {
            width: 68%;

            .right-botton {
              display: flex;
            }
          }

          img {
            width: 100%;
            display: block;
          }

        }

      }

      .swiperLiset {
        display: none;
        margin: 25px;
        border: 1px solid rgb(50, 187, 274);

        .imgbox {
          width: 100%;

          img {
            width: 100%;
          }
        }

        .imgpp {
          display: flex;
          height: 132px;

          img {
            height: 100%;
            width: 50%;
            display: block
          }
        }
      }

      .swiper1 {
        .title {
          width: 100%;
          padding: 20px 0;

          img {
            width: 200px;
          }
        }
      }

    }
  }

  .log {
    position: fixed;
    width: 100px;
    height: 100px;
    background: #fff;
    top: 200px
  }

  .footer {
    position: absolute;
    width: 100%;
    height: 41px;
    bottom: 0;

    background-image: url(../assets/btn-3@3x.jpg);
    background-size: 100% 100%;
    display: flex;

    div {
      height: 100%;
      width: 50%;
    }
  }

</style>
