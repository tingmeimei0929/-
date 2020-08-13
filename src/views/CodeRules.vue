<template>
    <el-container>
        <el-header class="header">
            <div class="meta">
                <img src="data:image/png;base64,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">
                <h3>小米账号使用手册</h3>
            </div>
            <div class="search">
                <input type="text" placeholder="搜索遇到的问题">
                <span><button class="btn">搜索</button></span>
            </div>
        </el-header>
        <el-container class="body">
            <el-aside>
                <el-menu>
                    <el-submenu index="1">
                        <template slot="title">简介</template>
                        <el-menu-item-group>
                            <template slot="title">什么是小米账号</template>
                        </el-menu-item-group>
                    </el-submenu>
                     <el-submenu index="2">
                        <template slot="title">新人指南</template>
                        <el-menu-item-group title="1">
                            <template slot="title">注册</template>
                            <el-menu-item index="2-1">如何注册小米账号</el-menu-item>
                            <el-menu-item index="2-2">已被他人注册过小米账号的手机号，如何注册新账号</el-menu-item>
                            <el-menu-item index="2-3">什么是二次号</el-menu-item>
                            <el-menu-item index="2-4">能否合并微信和手机号注册的两个账号</el-menu-item>
                            <el-menu-item index="2-5">一个手机号可以注册绑定几个小米账号</el-menu-item>
                        </el-menu-item-group>
                          <el-menu-item-group title="2">
                            <template slot="title">登录</template>
                            <el-menu-item index="2-1">如何注册小米账号</el-menu-item>
                            <el-menu-item index="2-2">已被他人注册过小米账号的手机号，如何注册新账号</el-menu-item>
                            <el-menu-item index="2-3">什么是二次号</el-menu-item>
                            <el-menu-item index="2-4">能否合并微信和手机号注册的两个账号</el-menu-item>
                            <el-menu-item index="2-5">一个手机号可以注册绑定几个小米账号</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main></el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'CodeRules',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../assets/scss/codeRules.scss');
</style>
