<template>
  <div class="el-main">
    <div>
       <!-- 面包屑导航 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
      </el-breadcrumb>
       <div>
        <el-card>   
            <el-col :span="4" style="margin-bottom:15px">
                <el-input v-model="input" placeholder="请输入内容">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="id" label="编号" width="100"></el-table-column>
              <el-table-column prop="title" label="商品名称" width="300"></el-table-column>
              <el-table-column prop="price" label="市场价" width="100"></el-table-column>
              <el-table-column prop="sprice" label="商城价" width="100"></el-table-column>
              <el-table-column prop="inventory" label="库存" width="100"></el-table-column>
              <el-table-column prop="brand" label="品牌" width="100"></el-table-column>
              <el-table-column prop="sell" label="销量" width="100"></el-table-column>
              <el-table-column prop="img" label="商品图片" width="100"></el-table-column>
              <el-table-column prop="classify" label="是否特惠" width="100">
                  <el-form :model="form"> 
                    <el-form-item>
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                </el-form> 
              </el-table-column>
              <el-table-column prop="classify" label="是否新品" width="100">
                  <el-form :model="form"> 
                    <el-form-item>
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                </el-form> 
              </el-table-column>
              <el-table-column prop="" label="操作"> 
                  <el-button type="danger" icon="el-icon-delete"></el-button>
              </el-table-column>
          </el-table>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
     
      tableData: [
        {
          id:12,
          title:"佳能ESO 5D",
          price: "236",
          sprice:136,
          inventory: 100,
          brand:'佳能',
          sell:23,
          img:'',
          ustate:"正常"
        }
      ],form: {
         delivery: true,
        }
   
    };
  }
};
</script>
<style scoped>
.el-main {
  background-color: #fafafa;
}
.el-breadcrumb{
  margin-bottom: 15px;
}
.el-table .cell {
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    line-height: 23px;
    padding-right: 10px;
}


</style>
