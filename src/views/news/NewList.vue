<template>
  <div class="el-main">
    <div>
       <!-- 面包屑导航 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
            <el-breadcrumb-item>列表管理</el-breadcrumb-item>
      </el-breadcrumb>
       <div>
        <el-card>   
          <el-col :span="4" style="margin-bottom:15px">
            <el-input v-model="input" placeholder="请输入标题">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            </el-col>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="id" label="编号" width="60"></el-table-column>
              <el-table-column prop="title" label="标题" width="300"></el-table-column>
              <el-table-column prop="classify" label="分类" width="100"></el-table-column>
              <el-table-column prop="num" label="访问量" width="80"></el-table-column>
              <el-table-column prop="titleimg" label="标题图片" width="130"></el-table-column>
              <el-table-column prop="compile" label="编辑" width="150">  </el-table-column>
              <el-table-column prop="come" label="来源" width="150">  </el-table-column>
              <el-table-column prop="state" label="上下线" width="120">
                <el-form :model="form"> 
                    <el-form-item>
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                </el-form> 
              </el-table-column>
              <el-table-column prop="time" label="添加时间" width="180">  </el-table-column>
              <el-table-column prop="" label="操作"> 
                  <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
                  <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
              </el-table-column>
          </el-table>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { NewsSelect } from "@/api/News.js";
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
      ],form: {
         delivery: true,
        }
    };
  },
  created() {
    this.NewsListSelect();
  },
  methods: {
    async NewsListSelect() {
      
      const a = await NewsSelect(0);
      this.tableData=a.data;
      console.log(a);
    }
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
