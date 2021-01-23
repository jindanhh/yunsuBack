<template>
  <div class="el-main">
    <div>
       <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>系统管理员</el-breadcrumb-item>
            <el-breadcrumb-item>管理员列表</el-breadcrumb-item>
        </el-breadcrumb>
    <div>
    <el-card>   
       <el-col :span="4" style="margin-bottom:15px">
         <el-input v-model="input" placeholder="请输入手机号">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        </el-col>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="id" label="编号">43</el-table-column>
          <el-table-column prop="uname" label="用户名"></el-table-column>
          <el-table-column prop="unickname" label="昵称"></el-table-column>
          <el-table-column prop="moible" label="手机"></el-table-column>
          <el-table-column prop="number" label="登录次数">  </el-table-column>
          <el-table-column prop="time" label="最后登录时间">  </el-table-column>
          <el-table-column prop="ustate" label="状态"></el-table-column>
          <el-table-column prop="" label="操作"> 
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </el-table-column>
      </el-table>
    </el-card>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getBannerList } from "@/api/list.js";
export default {
  data() {
    return {
     
      tableData: [
        {
          id:12,
          uname: "zhang",
          unickname:"admin",
          moible: 13265895656,
          number:23,
          time:2019-12-31,
          ustate:"正常"
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
