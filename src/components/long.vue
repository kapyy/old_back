<template>
  <div class="long" ref="long" @touchend='handleScroll'>
          <musice></musice>

    <div class="main">
      <div style="height:182px;width:100%"></div>
      <div class="animate">
        <div class="title">
          <img src="../assets/word-1.png" alt="">
        </div>
        <div class="animate-box">

          <div class="animate-box-top">
            <div class="animate-box-top-left  animated fadeInLeft">
                <img class="animateImg" src="../assets/01.jpg" alt="">
            </div>
            <div class="animate-box-top-right">
              <div class="animate-box-top-right-top">
                <div class=" animated fadeInLeft"> <img class="animateImg" src="../assets/02.jpg" alt=""></div>
                 <div class=" animated fadeInLeft"><img class="animateImg" src="../assets/03.jpg" alt=""></div> 
              </div>
              <div class="animate-box-top-right-bottom animated fadeInLeft">
                <img class="animateImg" src="../assets/04.jpg" alt="">

              </div>
            </div>

          </div>

          <div class="img-big   animated fadeInLeft">

            <img src="../assets/07.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="swiper1  animated fadeInLeft">
        <div class="title">
          <img src="../assets/word-2.png" alt="">
        </div>
        <mySwiper :pro='swiper1' :autoPlay="this.swiperIndex==1"></mySwiper>
      </div>
      <div class="swiper1  animated fadeInLeft">
        <div class="title">
          <img src="../assets/word-3.png" alt="">
        </div>
        <mySwiper :pro='swiper2' :autoPlay="this.swiperIndex==2"></mySwiper>
      </div>
      <div class="swiper1  animated fadeInLeft">
        <div class="title">
          <img style="width:288px" src="../assets/word-4.png" alt="">
        </div>
        <mySwiper :pro='swiper3' :autoPlay="this.swiperIndex==3"></mySwiper>
      </div>
      <div class="swiper1  animated fadeInLeft">
        <div class="title">
          <img style="width:270px" src="../assets/word-5.png" alt="">
        </div>
        <mySwiper :pro='swiper4' :autoPlay="this.swiperIndex==4"></mySwiper>
      </div>
    </div>
    <div class="footer">
      <div class='footer-left' @click="go('/')">
      </div>
      <div class='footer-right' @click="go('/long3')">
      </div>
    </div>
  </div>
</template>
<script>
  import musice from './components/musice'
  import mySwiper from './components/swiper'
  import {
    setTimeout
  } from 'timers';
  export default {
    name: 'long',
    data() {
      return {
        doAnimate: false,
        autoPlayIndex: 0,
        swiper1: {
          list: [{
              imgSrc: require("../assets/第一个动态相册A.jpg")
            },
            {
              imgSrc: require("../assets/第一个动态相册C.jpg")
            },
          ],
          autoPlay: true
        },
        swiper1_show: false,
        swiper2: {
          list: [{
              imgSrc: require("../assets/第二个相册A.jpg")
            }
          ],
        },
        swiper2_show: false,
        swiper3: {
          list: [{
              imgSrc: require("../assets/第三个相册A.jpg")
            },
            {
              imgSrc: require("../assets/第三个相册B.jpg")
            },
            {
              imgSrc: require("../assets/第三个相册C.jpg")
            },
            {
              imgSrc: require("../assets/第三个相册D.jpg")
            }
          ],
        },
        swiper3_show: false,
        swiper4: {
          list: [{
              imgSrc: require("../assets/第四个相册 A.jpg")
            },
            {
              imgSrc: require("../assets/第四个相册 B.jpg")
            },
            {
              imgSrc: require("../assets/第四个相册 C.jpg")
            }
          ],
        },
        swiper4_show: false,
        swiperIndex: 1,
        scrollTo: 0,
        test: 0
      }
    },
    components: {
      mySwiper,
      musice
    },
    methods: {
      go(i) {
        this.$router.push(i)
      },
      next() {
        location.href = i
      },
      handleScroll() {
        setTimeout(() => {
          this.scrollTo = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
          let scrollTo = this.scrollTo
          console.log(scrollTo)
          if (scrollTo > 20 && scrollTo < 510) {
            this.swiperIndex = 1
            this.swiper1_show = true
          }
          if (scrollTo > 501 && scrollTo < 810) {
            this.swiperIndex = 2
            this.swiper1_show = true
            this.swiper2_show = true
          }
          if (scrollTo > 810 && scrollTo < 910) {
            this.swiperIndex = 3
            this.swiper1_show = true

            this.swiper2_show = true
            this.swiper3_show = true
          }
          if (scrollTo > 910) {
            this.swiperIndex = 4
            this.swiper1_show = true
            this.swiper2_show = true
            this.swiper3_show = true
            this.swiper4_show = true
          }

        }, 100)


      }
    },
    mounted() {
      window.scrollTo(0, 0)

      this.$refs.long.addEventListener('touchmove', this.handleScroll)
      // window.addEventListener('scroll', this.handleScroll)

    },
  }

</script>
<style>
  /* html {
    height: 1877px !important;

  } */

</style>

<style lang='less' scoped>
  .long {
    width: 100%;
    background-image: url(../assets/bg-1.jpg);
    background-size: 100% 100%;
    position: relative;
    top: 0;
    .main {
      .bar{
        height: 15px;
        width: 100%;
        background: #fff;
      }
      .animate {
        .title {
          padding: 27px 0;
          img {
            width: 278px;
          }
        }
        .animate-box {
          .animate-box-top {
            width: 100%;
            display: flex;
            .animateImg{
              width: 100%;
            }
            .animate-box-top-left{
              width: 46.4%;
            }
            .animate-box-top-right{
              width: 53.6%;
              .animate-box-top-right-top{
                display:flex;
              }
            }
          }
          .animated {
            animation-duration: 0.5s
          }

          img {
            display: block;

          }

          .img-small {
            img {
              width: 100%;
              height: 100%;
            }
          }

      
          .img-big {
            width: 100%;

            img {
              width: 100%;
            }
          }
        }

      }

      .swiper1 {
        .title {
          width: 100%;
          // padding: 20px 0;
          height: 75px;
          display: flex;
          justify-content: center;
          align-items: center;
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
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 41px;
    background-image: url(../assets/btn-3@3x.jpg);
    background-size: 100% 100%;
    display: flex;

    div {
      height: 100%;
      width: 50%;
    }
  }

</style>
