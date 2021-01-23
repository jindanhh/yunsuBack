<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加商品</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 上部分 -->
        <el-steps :active="active - 0" finish-status="success" :space="200" align-center>
          <el-step title="基本信息"></el-step>
          <el-step title="商品参数"></el-step>
          <el-step title="商品图片"></el-step>
          <el-step title="商品内容"></el-step>
          <el-step title="详细参数"></el-step>
        </el-steps>
        <!-- 左部分 -->
        <el-form ref="form" :model="subList" label-width="80px">
          <el-tabs :tab-position="tabPosition" v-model="active">
            <el-tab-pane label="基本信息" name="0">
              <!-- 1. -->
              <el-form-item label="商品分类">
                <!-- 级联选择器-->
                <el-cascader v-model="value" :options="options" :props="{ expandTrigger: 'hover' }" @change="handleChange"></el-cascader>
              </el-form-item>
              <el-form-item label="商品名称">
                <el-input v-model="subList.shopname"></el-input>
              </el-form-item>
              <el-form-item label="副标题">
                <el-input v-model="subList.subtitle"></el-input>
              </el-form-item>
              <el-form-item label="市场价">
                <el-input v-model="subList.name"></el-input>
              </el-form-item>
              <el-form-item label="商城价">
                <el-input v-model="subList.name"></el-input>
              </el-form-item>
              <el-form-item label="品牌">
                <el-input v-model="subList.name"></el-input>
              </el-form-item>
              <el-form-item label="库存">
                <el-input v-model="subList.name"></el-input>
              </el-form-item>
              <el-form-item label="初始销量">
                <el-input v-model="subList.name"></el-input>
              </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="主要参数" name="1">
              <!-- 2 -->
              <el-form-item label="主要参数">
                <el-input type="textarea" :rows="4" placeholder="请输入主要参数，每组数据已｜分割" v-model="textarea"> </el-input>
              </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="商品图片" name="2">
              3
            </el-tab-pane>
            <el-tab-pane label="商品内容" name="3">4</el-tab-pane>
            <el-tab-pane label="参数详情" name="4">5</el-tab-pane>
        </el-tabs>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
data() {
  return {
    active: 0,
    tabPosition: 'left',
    // 
    subList:{
      shopname:'',
      subtitle:''
    }
  }
}
}
</script>

<style lang="less" scope>
.el-steps {
  margin-left: 200px;
  margin-bottom: 20px;
  .el-step__title {
    font-size: 14px;
  }
}
.el-card__body {
  min-height: 300px;
}
.el-tabs {
  margin: 15px;
}
</style>