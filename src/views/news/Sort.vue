<template>
  <div class="el-main">
    <div>
       <!-- 面包屑导航 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
            <el-breadcrumb-item>分类管理</el-breadcrumb-item>
      </el-breadcrumb>
       <div>
        <el-card>   
            <el-col :span="4" style="margin-bottom:15px">
                <el-button type="primary">添加分类</el-button>
            </el-col>
            <el-table :data="tableData"  border style="width: 100%">
              <el-table-column prop="id" label="序号" width="100"></el-table-column>
              <el-table-column prop="title" label="分类名称" width="300"></el-table-column>
              <el-table-column prop="classify" label="是否有效" width="300"></el-table-column>
              <el-table-column prop="" label="操作"> 
                  <el-button type="danger" icon="el-icon-delete"></el-button>
              </el-table-column>
          </el-table>
           <!-- <tree-table :data="CategoriesData" :columns="columns" :selection-type="false" :expand-type="false" show-index index-text="#" border>
                <template slot-scope="scope" slot="isOK">
                    <i class="el-icon-success" v-if="scope.row.cat_deleted === false" style="color: lightgreen"></i>
                    <i class="el-icon-error" v-else style="color: red"></i>
                </template>
              
            </tree-table> -->
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
          title:"行业动态",
          classify: "",
          num:136,
          titleimg: '',
          compile:'5746',
          come:'123',
          time:2019-12-31,
          ustate:"正常"
        }
      ],
      columns:[
        {label:'分类名称',prop:'cat_name'},
        {label:'是否有效',
        prop:'at_deleted',
        // 表示，将当前列定义为模版
        type: 'template',
        // 表示当前这一列使用模版名称
        template: 'isOK'},
        {
            label:'排序',
            prop:'cat_level',
            type:'template',
            template:'level'
        },
        {
            label:'操作',
            type:'template',
            template:'operation'
        }
      ],
   
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
