<template>
  <div class="footer">
    <div class="container">
      <div class="footer-title">
        <a href="//www.mi.com/static/fast/"><i class="el-icon-aligongju"></i>预约维修服务</a>
        <a href="//www.mi.com/service/exchange#back"><i class="el-icon-ali7tiantuihuanhuo"></i>7天无理由退货</a>
        <a href="//www.mi.com/service/exchange#back"><i class="el-icon-ali15tianwuliyoutuihuo"></i>15天免费换货</a>
        <a href="//www.mi.com/service/buy/Postal%20policy"><i class="el-icon-aliliwu"></i>满99元包邮</a>
        <a href="//www.mi.com/static/maintainlocation/"
           class="last-title"><i class="el-icon-aliding_wei"></i>520余家售后网点</a>
      </div>
      <div class="footer-links">
        <div class="links-left">
          <dl class="col-links">
            <dt>帮助中心</dt>
            <dl><a href="">账户管理</a></dl>
            <dl><a href="">购物指南</a></dl>
            <dl><a href="">订单操作</a></dl>
          </dl>
          <dl class="col-links">
            <dt>服务支持</dt>
            <dl><a href="">售后政策</a></dl>
            <dl><a href="">自助服务</a></dl>
            <dl><a href="">相关下载</a></dl>
          </dl>
          <dl class="col-links">
            <dt>线下门店</dt>
            <dl><a href="">小米之家</a></dl>
            <dl><a href="">服务网点</a></dl>
            <dl><a href="">授权体验店</a></dl>
          </dl>
          <dl class="col-links">
            <dt>关于小米</dt>
            <dl><a href="">了解小米</a></dl>
            <dl><a href="">加入小米</a></dl>
            <dl><a href="">投资者关系</a></dl>
            <dl><a href="">企业社会责任</a></dl>
            <dl><a href="">廉洁举报</a></dl>
          </dl>
          <dl class="col-links">
            <dt>关注我们</dt>
            <dl><a href="">新浪微博</a></dl>
            <dl><a href="">官方微信</a></dl>
            <dl><a href="">联系我们</a></dl>
            <dl><a href="">公益基金会</a></dl>
          </dl>
          <dl class="col-links">
            <dt>特色服务</dt>
            <dl><a href="">F码通道</a></dl>
            <dl><a href="">礼物码</a></dl>
            <dl><a href="">防伪查询</a></dl>
          </dl>
        </div>
        <div class="links-right">
          <h2>400-100-5678</h2>
          <p>8:00-18:00(仅收市话费)</p>
          <button><i class="el-icon-alixinxi"></i>人工服务</button>
          <div>关注小米:<i class="el-icon-aliweibo"></i><i class="el-icon-aliweixin"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "Footer",
  data () {
    return {

    };
  }
};
</script>
  
<style lang="scss" scoped>
@import url("../assets/scss/footer.scss");
.footer {
  position: relative;
  background-color: #ffffff;
  width: 100%;

  .container {
    position: relative;
    width: 1226px;
    margin-left: auto;
    margin-right: auto;

    .footer-title {
      height: 80px;
      width: inherit;
      border-bottom: 1px solid #e0e0e0;

      a {
        display: block;
        margin: 27px 0;
        width: 19.8%;
        height: 25px;
        line-height: 25px;
        float: left;
        color: #616161;
        font-size: 16px !important;
        border-right: 1px solid #e0e0e0;

        &.last-title {
          border-right: 1px solid transparent;
        }
        &:hover {
          cursor: pointer;
          color: #ff6700;
        }
        i {
          font-size: 24px;
          margin: 0 4px;
        }
      }
    }

    .footer-links {
      position: relative;
      width: inherit;
      height: 200px;

      .links-left {
        margin: 40px 0;
        width: 975px;
        height: 200px;
        float: left;
        display: flex;
        flex-direction: row;
        .col-links {
          height: 112px;
          flex: 1;

          dt {
            font-size: 14px;
            color: #424242;
            margin-bottom: 20px;
          }

          dl {
            color: #424242;
            font-size: 12px;
            margin: 10px 0 0;

            a {
              color: #424242;
            }

            a:hover {
              cursor: pointer;
              color: #ff6700;
            }
          }
        }
      }
      .links-right {
        margin: 40px 0;
        width: 251px;
        height: 112px;
        float: right;
        border-left: 1px solid #e0e0e0;

        h2 {
          font-size: 22px;
          color: #ff6700;
        }
        p {
          font-size: 12px;
          margin-bottom: 5px;
        }
        button {
          border: 1px solid #ff6700;
          color: #ff6700;
          width: 118px;
          height: 28px;
          line-height: 28px;
          font-size: 12px;
          background-color: #fff;

          i {
            font-size: 12px;
            margin-right: 5px;
          }
        }
        div {
          font-size: 12px;
          margin-top: 10px;
          i {
            padding-left: 5px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>