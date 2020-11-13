<template>
   <div>
       <navHeader></navHeader>
       <div class="orderMain">
            <navBanner></navBanner>
            <div class="container">
                <div class="title">
                    <a href="">首页</a>
                    <span class="sep">></span>
                    <a href="">{{ msg }}</a>
                </div>
                <div class="content">
                    <div class="left">

                    </div>
                    <div class="right"></div>
                </div>
            </div>
       </div>
   </div>
</template>

<script>
import navHeader from '../components/Header'
import navBanner from '../components/Banner'
export default {
  name: 'Order',
  data () {
    return {

    }
  },
  components: {
    navHeader,
    navBanner
  }
}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/order.scss")
</style>
