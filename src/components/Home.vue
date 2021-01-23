<template>
    <el-container class="worldbox">
      <!-- 大左侧 -->
        <el-aside :width="isfold?'64px':'230px'">
          <!-- 小上侧 -->
          <el-header class="header" :width="isfold?'64px':'230px'">
            <img class="xzimg fl" src="../assets/src/xiazai.png" alt="">
            <span class="fl" :style="isfold?'display:none':'display:block'">商城后台管理</span> 
          </el-header>
          <!-- 小左侧 -->
          <el-aside :width="isfold?'64px':'230px'" class="asidex">
            <!-- collapse-transition	是否开启折叠动画	boolean	—	true -->
            <!-- unique-opened	是否只保持一个子菜单的展开 -->
            <el-menu background-color="rgb(38, 50, 56)" router text-color="#fff" active-text-color="#fff" default-active="1" :collapse-transition="false" :unique-opened="true" :collapse="isfold">
              <!-- 订单管理 -->
              <el-submenu index="1+''">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>订单管理</span>
                </template>
                <el-menu-item index="daiPay">
                  <template>
                    <i class="el-icon-s-unfold"></i>
                    <span>待付款</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="deliver">
                  <template>
                    <i class="el-icon-s-unfold"></i>
                    <span>待发货</span> 
                  </template>
                </el-menu-item>
                <el-menu-item index="cancellation">
                  <template>
                    <i class="el-icon-s-unfold"></i>
                    <span>客户取消订单</span> 
                  </template>
                </el-menu-item>
                <el-menu-item index="completed">
                  <template>
                    <i class="el-icon-s-unfold"></i>
                    <span>已完成订单</span> 
                  </template>
                </el-menu-item>
                <el-menu-item index="allorders">
                  <template>
                    <i class="el-icon-s-unfold"></i>
                    <span>所有订单</span> 
                  </template>
                </el-menu-item>
              </el-submenu>
              <!--商品管理  -->
              <el-submenu index="2+''">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>商品管理</span>
                </template>
                <el-menu-item index="productlist">
                  <template>
                    <i class="el-icon-s-unfold"></i>
                    <span>商品列表</span> 
                  </template>
                </el-menu-item>
                <el-menu-item index="addproduct">
                  <template>
                    <i class="el-icon-s-unfold"></i>
                    <span>添加商品</span> 
                  </template>
                </el-menu-item>
                <el-menu-item index="classification">
                  <template>
                    <i class="el-icon-s-unfold"></i>
                    <span>商品分类</span> 
                  </template>
                </el-menu-item>
              </el-submenu>
               <!--新闻资讯  -->
              <el-submenu index="3+''">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>新闻资讯</span>
                </template>
                <el-menu-item index="newlist">
                  <template>
                    <i class="el-icon-s-unfold"></i>
                    <span>列表管理</span> 
                  </template>
                </el-menu-item>
                <el-menu-item index="addnews">
                  <template>
                    <i class="el-icon-s-unfold"></i>
                    <span>添加内容</span> 
                  </template>
                </el-menu-item>
                <el-menu-item index="sort">
                  <template>
                    <i class="el-icon-s-unfold"></i>
                    <span>分类管理</span> 
                  </template>
                </el-menu-item>
              </el-submenu>
              <!-- 用户管理 -->
              <el-submenu index="4+''">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item index="users">
                  <template>
                    <i class="el-icon-s-unfold"></i>
                    <span>用户列表</span> 
                  </template>
                </el-menu-item>
              </el-submenu>
              <!-- 系统管理员 -->
              <el-submenu index="5+''">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>系统管理员</span>
                </template>
                <el-menu-item index="admin">
                  <template>
                    <i class="el-icon-s-unfold"></i>
                    <span>管理员列表</span> 
                  </template>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-aside>
        </el-aside>
        <!-- 大右侧 -->
        <el-container class="bigyou">
            <el-header class="bigheader">
              <i class="el-icon-s-fold" @click="fold"></i>
              <i class="iconfont icon-iconfonticon2" @click="signout"></i>
            </el-header>
            <el-main>
              <router-view></router-view>
            </el-main>
            <el-footer class="bigfooter">
              <a href=""><span class="qians">政采商城接口版本 V3.0</span><span>技术支持：云速网络</span></a>
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
      isfold: false
    }
  },
  created() {
  },
  methods:{
    fold() {
      this.isfold = !this.isfold
    },
    signout() {
      this.$router.push('/login')
    }
  }
  }

</script>

<style lang="less" scope>
.el-menu {
  border-right: 0!important;
}
.el-aside {
    height: 100%;
    .header{
      height: 47px!important;
      background-color: #252b38;
      color: #fff;
      font-size: 18px;
      line-height: 47px;
      border-bottom:1px solid rgba(0,0,0,.125);
      .xzimg{
        width: 30px;
        height: 30px;
        vertical-align: middle;
        margin-top: 7px;
        margin-right: 5px;
      }
    }
    .asidex {
      background-color: rgb(38, 50, 56);
    }
}
.worldbox {
  height: 100%;

}
.el-submenu__title {
  background-color: rgb(38, 50, 56);
  color: #fff;
}
.bigyou{
  .bigheader{
    height: 47px!important;
    line-height: 47px;
    border-bottom:1px solid rgba(0,0,0,.125);
    display: flex;
    justify-content:space-between;
    align-items:center;
    > i {
      font-size: 22px;
      color: #797979;
    }
  }
  .bigfooter{
    height: 35px!important;
    line-height: 35px;
    border-top:1px solid rgba(0,0,0,.125);
    text-align: center;
    a{
      color: #606266;
      font-size: 14px;
    }
  }
}
.bigfooter a:hover {
  color: #409eff;
}
.qians {
  margin-right: 25px;
}
</style>
