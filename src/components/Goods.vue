<template>
   <div class="goods" style="width:inherit;scroll:auto;">
       <el-table :data="goodList" style="width:100%">
           <el-table-cloumn prop="img" label="商品图片" width="300"></el-table-cloumn>
           <el-table-cloumn prop="name" label="商品名称" width="300"></el-table-cloumn>
           <el-table-cloumn prop="price" label="单价" width="200"></el-table-cloumn>
           <el-table-cloumn prop="操作">
               <template slot-scope="scope">
                   <el-button size="mini"
                              type="primary"
                              icon="el-icon-plus"
                              @click="addToCart(scope.row)">
                        加入购物车
                   </el-button>
               </template>
           </el-table-cloumn>
       </el-table>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Goods',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'tableData',
      'totalNum'
    ])
  },
  methods: {
    ...mapActions(['addToCart'])
  }
}
</script>

<style lang="scss" scoped>
@import url('../assets/scss/goods.scss')
</style>
