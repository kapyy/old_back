<template>
  <div class="long" ref="long2">
    <div class="main">
      <div style="height:172px;width:100%"></div>
      <div class="animate">
        <div class="title">
          <img src="../assets/生命之园/word-1.png" alt="">
        </div>
        <div class="animate-box ">

          <div class="top">
            <div class="top-top">
              <div class="img-box  animated fadeInLeft"> <img src="../assets/生命之园/01.jpg" alt=""></div>
              <div class="img-box  animated fadeInLeft"> <img src="../assets/生命之园/02.jpg" alt=""></div>
            </div>

            <div class="top-top ">
              <div class="img-box animated fadeInRight"> <img src="../assets/生命之园/03.jpg" alt=""></div>
              <div class="img-box animated fadeInRight"> <img src="../assets/生命之园/04.jpg" alt=""></div>
            </div>
          </div>
          <!-- <div class="bottom">
            <div class="left animated fadeInLeft"> <img src="../assets/生命之园/06.jpg" alt="">
            </div>
            <div class="rigth animated fadeInRight"> <img src="../assets/生命之园/07.jpg" alt="">
            </div>
          </div> -->
        </div>
      </div>
      <div class="animate2">
        <img class='word he  animated fadeInLeft' src="../assets/生命之园/word2-2.png" alt="">
        <img class='gonyuan' src="../assets/生命之园/word2-1.png" alt="">
        <img class=' word zhong  animated fadeInRight' src="../assets/生命之园/word2-3.png" alt="">
        <div class="shuimo">
          <div class="shuimo1">
            <img src="../assets/生命之园/shuimu.gif" alt="">
          </div>

        </div>
      </div>
      <div v class="swiper1  animated fadeInLeft">
        <div class="title  tttt">
          <img src="../assets/生命之园/word-3.png" alt="">
        </div>
        <mySwiper :pro='swiper1' :autoPlay="this.swiperIndex==1"></mySwiper>
      </div>
      <div class="animate3">
        <div class="title">
          <img src="../assets/生命之园/word-4.png" alt="">
        </div>
        <div class="top">
          <div class="box">
            <div class="numbox" >
              <span class="tip">约</span>
              <span class="num"> {{num1}}</span>
              <span class="tip">株</span>
            </div>
            <div class='xo'  >
              <span>生态植物</span>
            </div>
            <div class="bar bar1" :style="'width:'+width1+'px'"></div>
          </div>
          <div class="box" >
            <div class="numbox">
              <span class="tip">约</span>
              <span class="num"> {{num2}}</span>
              <span class="tip">个/cm³</span>
            </div>
            <div class='xo'>
              <span>负氧离子“森浴”</span>
            </div>
            <div class="bar bar2" :style="'width:'+width2+'px'"></div>
          </div>
        </div>
        <div class="top">
          <div class="box" >
            <div class="numbox"  style="">
              <span class="tip">约</span>
              <span class="num">{{ parseInt(num3)}}</span>
              <span class="tip">m</span>
            </div>
            <div class='xo'  style="">
              <span>花之瀑布</span>
            </div>
            <div class="bar bar3" :style="'width:'+width3+'px'"></div>
          </div>
          <div class="box">
            <div class="numbox">
              <span class="tip">约</span>

              <span class="num" style="letter-spacing:10px;" > {{parseInt(num4)}}</span>
              <span class="tip">h</span>

            </div>
            <div class='xo'>
              <span>跨越六层绿色植物景观</span>
            </div>
            <div class="bar bar4" :style="'width:'+width4+'px'"></div>
          </div>
        </div>

      </div>
      <div class="swiper1  animated fadeInLeft">
        <mySwiper :pro='swiper2' :autoPlay="this.swiperIndex==2"></mySwiper>
      </div>
      <div class="swiper1  animated fadeInLeft">
        <div class="title">
          <img style="width:260px" src="../assets/生命之园/word-5.png" alt="">
        </div>
        <mySwiper :pro='swiper3' :autoPlay="this.swiperIndex==3"></mySwiper>
      </div>
      <div class="swiper1  animated fadeInLeft">
        <div class="title">
          <img style="width:160px" src="../assets/生命之园/word-6.png" alt="">
        </div>
        <mySwiper :pro='swiper4' :autoPlay="this.swiperIndex==4"></mySwiper>
      </div>
      <div class="swiper1  animated fadeInLeft">
        <div class="title">
          <img style="width:160px" src="../assets/生命之园/word-7.png" alt="">
        </div>
        <mySwiper :pro='swiper5' :autoPlay="this.swiperIndex==5"></mySwiper>
      </div>

    </div>
    <div class="footer">
      <div class='footer-left' @click="go('/')">
      </div>
      <div class='footer-right' @click="go('/long')">
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
    name: 'long2',
    data() {
      return {
        doAnimate: false,
        autoPlayIndex: 0,
        swiper1: {
          list: [

            {
              imgSrc: require("../assets/生命之园/lunbo1-2.jpg")
            }
          ],
        },
        swiper1_show: false,
        swiper2: {
          list: [{
              imgSrc: require("../assets/生命之园/lunbo2-1.jpg")
            },
            {
              imgSrc: require("../assets/生命之园/lunbo2-2.jpg")
            },
            {
              imgSrc: require("../assets/生命之园/lunbo2-3.jpg")
            }
          ],
          // autoPlay: true
        },
        swiper2_show: false,
        swiper3: {
          list: [{
              imgSrc: require("../assets/生命之园/lunbo3-1.jpg")
            },
            {
              imgSrc: require("../assets/生命之园/lunbo3-2.jpg")
            },
            {
              imgSrc: require("../assets/生命之园/lunbo3-3.jpg")
            }
          ],
        },
        swiper3_show: false,
        swiper4: {
          list: [
            {
              imgSrc: require("../assets/生命之园/lunbo4-2.jpg")
            },
            {
              imgSrc: require("../assets/生命之园/lunbo4-3.jpg")
            }
          ],
        },
        swiper5: {
          list: [{
              imgSrc: require("../assets/生命之园/lunbo5-1.jpg")
            },
            {
              imgSrc: require("../assets/生命之园/lunbo5-2.jpg")
            },
            {
              imgSrc: require("../assets/生命之园/lunbo5-3.jpg")
            }
          ],
        },
        swiper4_show: false,
        swiperIndex: 0,
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
        done: false



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

        this.done = true
        this.time1 = setInterval(() => {
          if (self.num1 < 70000) {
            self.num1 += 200
            self.width1 += 0.3
          } else {
            clearInterval(this.time1)
          }
        }, 5)
        this.time2 = setInterval(() => {
          if (self.num2 < 1500) {
            self.num2 += 30
            self.width2 += 1.8
          } else {
            clearInterval(this.time2)
          }
        }, 25)

        this.time3 = setInterval(() => {
          if (self.num3 < 25) {
            self.num3 += 0.1
            self.width3 += 1
          } else {
            clearInterval(this.time3)
          }
        }, 5)
        this.time4 = setInterval(() => {
          if (self.num4 < 42) {
            self.num4 +=  0.2
            self.width4 += .5
          } else {
            clearInterval(this.time4)
          }
        }, 5)
      },
      handleScroll() {

        this.scrollTo = document.documentElement.scrollTop || document.body.scrollTop
        let scrollTo = this.scrollTo
        console.log(scrollTo)
        if (scrollTo > 400) {
          this.swiperIndex = 1
          if (!this.done) {
            this.tesst()
          }
        }
        if (scrollTo > 1082 & scrollTo < 1200) {
          this.swiperIndex = 2
        }
        if (scrollTo > 1200 && scrollTo < 1500) {
          this.swiperIndex = 3
        }
        if (scrollTo > 1500 && scrollTo < 1600) {
          this.swiperIndex = 4
        }
        if (scrollTo > 1600) {
          this.swiperIndex = 5
        }
      }
    },
    mounted() {
      window.scrollTo(0, 0)
      let self = this
      // let a=setInterval(()=>{
      //   self.swiperIndex++
      //   if( self.swiperIndex==6){
      //     clearInterval(a)
      //   }
      // },1000)
      document.body.addEventListener('touchmove', this.handleScroll, false)

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
  .long {
    width: 100%;
    // height: 2612px;
    padding-bottom: 31px;
    background-image: url(../assets/生命之园/bg-2.jpg);
    background-size: 100% 100%;
    position: relative;
    top: 0;

    .main {

      .animate {
        // height: 400px;
        z-index: 99;
        position: relative;

        .title {
          padding: 27px 0;

          img {
            width: 278px;
          }

        }

        .animate-box {
          width: 100%;

          overflow: hidden;

          .top {
            // height: 100px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-content: flex-start;

            .img-box {
              height: 102px;

              img {
                height: 100%;
                width: 100%;
              }

            }




          }

          .bottom {
            // height: 100px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-content: flex-start;

            div {
              height: 100%;

              img {
                height: 100%;
                width: 100%;
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

            // width: 33.3%;
            img {
              width: 100%;
              height: 100%;
              // height: 100%;
            }
          }

          .img-small-left {
            width: 32.2%;
          }

          .img-small-center {
            width: 38.6%;
          }

          .img-small-right {
            width: 29.2%;
          }

          .img-big {
            width: 100%;

            img {
              width: 100%;
            }
          }
        }

      }

      .animate2 {
        width: 100%;
        height: 375px;
        // top: -80px;
        background-image: url(../assets/生命之园/shine.jpg);
        background-size: 100% 100%;
        position: relative;
        margin-top: -90px;
        display: flex;
        justify-content: center;

        .shuimo {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 10;
          // background: red;
          opacity: 0.2;

          .shuimo1 {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 5px;
            left: 0;

            img {
              height: 100%;
              width: 100%;
              ;
            }

          }

          .shuimo2 {
            width: 180px;
            height: 180px;
            position: absolute;
            top: 250px;
            left: 60px;

            img {
              height: 100%;
              width: 100%;
              ;
            }

          }
        }

        .gonyuan {
          width: 14px;
          height: 238px;
          margin-top: 124px
        }

        .word {
          margin-top: 174px
        }

        .he {
          width: 15px;
          height: 33px;
        }

        .zhong {
          width: 23px;
          height: 42px;
          margin-top: 167px;
          position: relative;
          left: -10px;
          top: 2px;

        }


      }

      .animate3 {
        overflow: hidden;

        .title {
          padding: 27px 0;

          img {
            width: 278px;
          }

        }

        .top {
          width: 100%;
          height: 120px;
          display: flex;
          padding: 0 10px
        }

        .box {
          width: 50%;
          height: 100%;
          padding-left: 8px;
          .numbox {
            height: 31px;
            font-size: 31px;
            font-family: PingFangSC-Light;
            font-weight: 100;
            color: #0ffe01;
            line-height: 31px;
            text-align: left;
            .tip{
              font-size: 31px;
              font-size: 10px;
              color: #fff;

            }
          }
          .xo {
            font-size: 10px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 17px;
            letter-spacing: 1px;
            text-align: left;
            margin: 10px 0;

          }

          .bar {
            // max-width: 100px;
            height: 5px;
            background: #43FB27;
          }

          .bar1 {
            max-width: 137px;
          }

          .bar2 {
            max-width: 95px;
          }

          .bar3 {
            max-width: 89px;
          }

          .bar4 {
            max-width: 135px;
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

  .tttt {
    margin-top: 20px;
    border-top: 2px solid #fff;
  }

</style>
