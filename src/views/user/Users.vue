<template>
  <div class="el-main">
    <div>
       <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
    <div>
    <el-card>   
       <el-col :span="4" style="margin-bottom:15px">
         <el-input v-model="seachUsers.query" placeholder="请输入手机号">
            <el-button slot="append" icon="el-icon-search"  @click="searchphone"></el-button>
        </el-input>
        </el-col>
        <el-table :data="tableData.records" border style="width: 100%">
          <el-table-column prop="id" label="用户id"></el-table-column>
          <el-table-column prop="uname" label="用户名"></el-table-column>
          <el-table-column prop="mobile" label="手机号"></el-table-column>
          <el-table-column prop="addtime" label="注册时间">  </el-table-column>
          <el-table-column prop="mark" label="用户状态">
              <template slot-scope="scope">
                    <div v-if="scope.row.mark==0">正常</div>
                    <div v-if="scope.row.mark==1">禁用</div>
              </template>
          </el-table-column>
          <el-table-column prop="" label="操作"> 
             <template slot-scope="scope">
              <el-button type="danger" icon="el-icon-delete" @click="deluser(scope.row.id)"></el-button>
              </template>
          </el-table-column>
      </el-table>
    </el-card>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { UsersSelectList,UserCurrent,UsersDelect } from "@/api/user.js";
export default {
  data() {
    return {
      seachUsers:{ query:'',},
      userid:0,
      tableData: [
        {
          id:'',
          uname: "",
          mobile: '',
          addtime:'',
          ustate:"",
          mark:""
        }
      ],
   
    };
  },
  created() {
    this.Selectuser();
  },
  methods: {
    //查询所有用户
    async Selectuser() {
      const a = await UsersSelectList();
      this.tableData=a.data;
      console.log(a.data);
    },
    // 查询列表
    async searchphone() {
       this.Selectuserphone();
    },
     async Selectuserphone() {
        const a = await UserCurrent(this.seachUsers.query);
        this.tableData=a.data;
        console.log(a.data);
     },
     //删除用户
     deluser(id){
      this.delectuser(id);
      // console.log(this.userid);
       this.Selectuser();
    },
    async delectuser(id) {
      const a = await UsersDelect(id);
    },
  },
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
