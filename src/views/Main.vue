<template>
  <div>
    <navHeader></navHeader>
    <main class="main">
      <div class="container">
        <div class="home-row">
          <div class="home-left">
            <ul class="home-ul .clearfix">
              <li><a href="https://www.mi.com/seckill/"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48">小米秒杀</a></li>
              <li class="li-after"><a href="https://qiye.mi.com/"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48">企业团购</a></li>
              <li class="li-after"><a href="https://www.mi.com/order/fcode"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48">F码通道</a></li>
            </ul>
            <ul class="home-ul clearfix">
              <li><a href="https://www.mi.com/mimobile/"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48">米粉卡</a></li>
              <li class="li-after"><a href="https://huanxin.mi.com/"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48">以旧换新</a></li>
              <li class="li-after"><a href="https://recharge.10046.mi.com/"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48">话费充值</a></li>
            </ul>
          </div>
          <ul class="home-right">
            <li><a href="http://www.mi.com/redminote8"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340"></a></li>
            <li><a href="https://item.mi.com/product/10000203.html?selected=10000203"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fbff319c7dd00e75c9758acf248d3784.jpg?w=632&h=340"></a></li>
            <li><a href="https://www.mi.com/shouhuan4/"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340"></a></li>
          </ul>
        </div>
      </div>
    </main>

    <navFooter></navFooter>
  </div>
</template>
    
<script>
import navHeader from '../components/Header'
import navFooter from '../components/Footer'

export default {
  name: "Main",
  components: {
    navHeader,
    navFooter,
  },
  data () {
    return {


    }
  },
  methods: {

  }
}
</script>
  
<style lang="scss" scoped>
@import url("../assets/scss/main.scss");
</style>