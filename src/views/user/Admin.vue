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
         <el-input v-model="seachAdmin.query" placeholder="请输入手机号">
            <el-button slot="append" icon="el-icon-search" @click="searchAdminPhone"></el-button>
        </el-input>
        </el-col>
        <el-button type="primary" @click="addAdmin">添加</el-button>

        <el-table :data="tableData.records" border style="width: 100%">
          <el-table-column prop="id" label="编号"></el-table-column>
          <el-table-column prop="sysUser" label="用户名"></el-table-column>
          <el-table-column prop="nickName" label="昵称"></el-table-column>
          <el-table-column prop="mobile" label="手机"></el-table-column>
          <el-table-column prop="loginTimes" label="登录次数">  </el-table-column>
          <el-table-column prop="lastTime" label="最后登录时间">  </el-table-column>
          <el-table-column prop="mark" label="状态">
            <template slot-scope="scope">
                    <div v-if="scope.row.mark==0">正常</div>
                    <div v-if="scope.row.mark==1">禁用</div>
              </template>
          </el-table-column>
          <el-table-column prop="" label="操作"> 
             <template slot-scope="scope">
              <el-button type="danger" icon="el-icon-delete" @click="deladmin(scope.row.id)"></el-button>
              </template>
              <!-- <el-button type="danger" icon="el-icon-delete"></el-button> -->
          </el-table-column>
      </el-table>
    </el-card>

      <!-- 添加管理员对话框-->
        <el-dialog title="添加管理员" :visible.sync="dialogFormVisible" width="600px">
            <!-- from 表单 -->
            <el-form>
              <el-form label-width="80px" :model="addtableData">
                  <el-form-item label="用户名">
                    <el-input v-model="addtableData.sysUser"></el-input>
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input v-model="addtableData.sysPwd"></el-input>
                  </el-form-item>
                  <el-form-item label="昵称">
                    <el-input v-model="addtableData.nickName"></el-input>
                  </el-form-item>
                   <el-form-item label="手机号">
                    <el-input v-model="addtableData.mobile"></el-input>
                  </el-form-item>
              </el-form>
          </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible  = false">取 消</el-button>
                <el-button type="primary" @click="addAdminFinish">确 定</el-button>
            </span>
        </el-dialog>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { SysUserSelect,SysuserCurrent,SysUserInsert,SysUserDelect} from "@/api/sysuser.js";
export default {
  data() {
    return {
      aminid:'',
     seachAdmin:{query:''},
      dialogFormVisible: false,
      tableData: [
        {
          id:'',
          sysUser: "",
          nickName:"",
          mobile: '',
          loginTimes:'',
          lastTime:'',
          mark:"",
          sysPwd: '',
        }
      ],
       addtableData: 
        {
          sysUser: "",
          nickName:"",
          mobile: '',
          sysPwd: '',
        }
      
    };
  },
  created() {
    this.Selectadmin();
  },
  methods: {
    async Selectadmin() {
      const a = await SysUserSelect();
      this.tableData=a.data;
      console.log(a);
    },
    // 查询管理员
    async searchAdminPhone() {
       this.Selectadminphone();
    },
     async Selectadminphone() {
        const a = await SysuserCurrent(this.seachAdmin.query);
        this.tableData=a.data;
        console.log(a.data);
     },
      // 操作对话框
    addAdmin() {
        this.dialogFormVisible = true
    },
    //添加用户
    async addAdminFinish(){
         this.addmin();
         this.dialogFormVisible = false
         this.Selectadmin();
    },
    async addmin() {
      //第一种方法
      var admininfo={
        sysUser:this.addtableData.sysUser,
        nickName:this.addtableData.nickName,
        sysPwd:this.addtableData.sysPwd,
        mobile:this.addtableData.mobile,
        }
        const b = await SysUserInsert(admininfo);
      //第二种方法
        // const b = await SysUserInsert({id:this.orderchangetype,ordertype:this.selectValue});
        this.addtableData.records=b.data;
        console.log(b);
     },
     //删除管理员
     //删除用户
     deladmin(id){
       console.log(id);
      //  this.aminid = id 
      // console.log(this.aminid);
      this.delectadmin(id);
    },
    async delectadmin(id) {
        //  console.log(id);
      const a = await SysUserDelect(id);
      alert("已删除")
   
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
