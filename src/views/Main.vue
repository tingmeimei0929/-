<template>
  <div>
    <navHeader></navHeader>
    <main class="main">
      <div class="container">
        <div class="swiper-container"
             v-swiper:mySwiper="swiperOption">
          <div class="swiper-warp">
            <div class="swiper-slide"
                 v-for="(item,index) in swipeInfo"
                 :key="index">
              <a :href="item.href"><img :src="item.imgSrc"></a>
            </div>
            <!-- 上一页 -->
            <div class="swiper-button-prev"></div>
            <!-- 下一页 -->
            <div class="swiper-button-next"></div>
            <!-- 分页 -->
            <div class="swiper-pagination"></div>
            <ul class="category-item">
              <li><a>手机 电话卡 <i class="el-icon-aliqianjinxiayige"></i></a></li>
              <li><a>电视 盒子 <i class="el-icon-aliqianjinxiayige"></i></a></li>
              <li><a>笔记本 显示器 平板 <i class="el-icon-aliqianjinxiayige"></i></a></li>
              <li><a>家电 插线板 <i class="el-icon-aliqianjinxiayige"></i></a></li>
              <li><a>出行 穿戴<i class="el-icon-aliqianjinxiayige"></i></a></li>
              <li><a>智能 路由器 <i class="el-icon-aliqianjinxiayige"></i></a></li>
              <li><a>电源 配件 <i class="el-icon-aliqianjinxiayige"></i></a></li>
              <li><a>健康 儿童 <i class="el-icon-aliqianjinxiayige"></i></a></li>
              <li><a>耳机 音箱 <i class="el-icon-aliqianjinxiayige"></i></a></li>
              <li><a>生活 箱包 <i class="el-icon-aliqianjinxiayige"></i></a></li>
            </ul>
            <div class="category-info"></div>
          </div>

        </div>
      </div>
    </main>
    <navFooter></navFooter>
  </div>
</template>
    
<script>
import navHeader from '../components/Header'
import navFooter from '../components/Footer'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import '../node_modules/swiper/css/swiper.css'
export default {
  name: "Main",
  components: {
    navHeader,
    navFooter,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      swipeInfo: [
        {
          imgSrc: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a7c2a3fec92ad95435f8ab8d8407db6c.jpg?thumb=1&w=2452&h=920&f=webp&q=90",
          href: "https://www.mi.com/a/h/15490.html"
        },
        {
          href: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e882fcbdcafc352dde03c741836399b.jpg?thumb=1&w=2452&h=920&f=webp&q=90",
          href: "https://www.mi.com/a/h/15490.html"
        },
        {
          href: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/400f15aedf3b2981c462e8811e88d384.jpg?w=2452&h=920",
          imgSrc: ""
        },
        {
          href: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f306ce6727f8166fd97730c5876bfadc.jpg?thumb=1&w=2452&h=920&f=webp&q=90",
          imgSrc: ""
        },
        {
          href: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b5bc9a947319a1d7424cb209c632b7d.jpg?thumb=1&w=2452&h=920&f=webp&q=90",
          imgSrc: ""
        }
      ],
      swiperOption: {
        //分页器设置 
        pagination: {
          el: ".swiper-pagination",
          // clickable: true,
          // type: "bullets"
        }
      }
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.mySwiper)
    this.mySwiper.slideTo(3, 1000, false)
  }

}
</script>
  
<style lang="scss" scoped>
@import url("../assets/scss/main.scss");
.main {
  position: relative;
  width: 100%;

  .container {
    position: relative;
    width: 1226px;
    margin-left: auto;
    margin-right: auto;

    .swiper-container {
      width: 1226px;
      height: 460px;

      img {
        width: 1226px;
        height: 460px;
      }
      .swiper-warp {
        position: relative;

        .category-item {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 999;
          display: block;
          float: left;
          width: 234px;
          border: 0;
          padding: 20px 0;
          font-size: 14px;
          background-color: rgba(105, 101, 101, 0.6);

          li {
            width: 234px;
            height: 42px;
            line-height: 42px;
            padding-left: 30px;
            display: inline-block;
            position: relative;
            text-align: start;

            a {
              color: #fff;
              cursor: pointer;

              i {
                position: absolute;
                right: 20px;
              }
            }
          }

          li:hover {
            background-color: #ff6700;
          }
        }
      }
    }
  }
}
</style>