<template>
    <div class="el-main">
     
       <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
            <el-breadcrumb-item>列表管理</el-breadcrumb-item>
        </el-breadcrumb>
      <!-- 表单 -->
      <el-card>  
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
             <el-form-item label="分类" prop="region">
                <el-cascader
                    v-model="value"  :options="options" :props="{ expandTrigger: 'hover'}" >
                </el-cascader>
            </el-form-item>

            <el-form-item label="标题" prop="title">
                <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>

           <el-form-item label="副标题" prop="subTitle">
                <el-input v-model="ruleForm.subTitle"></el-input>
            </el-form-item>
            
            <el-form-item label="简介" prop="summary">
                <el-input type="textarea" v-model="ruleForm.summary"></el-input>
            </el-form-item>

           <el-form-item label="标题图片" prop="img">
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <div data-v-3507dccf="" class="el-upload__tip">只能上传jpg/png格式文件，且不超过 1M，最佳尺寸：350px*350px</div>
            </el-form-item>
            

            <el-form-item label="初始访问量" prop="num">
                <el-input v-model="ruleForm.num"></el-input>
            </el-form-item>

           <el-form-item label="详情" prop="content">
                <el-input type="textarea" v-model="ruleForm.content"></el-input>
            </el-form-item>
              <el-form-item label="编辑" prop="summary">
                <el-input v-model="ruleForm.summary"></el-input>
            </el-form-item>

              <el-form-item label="来源" prop="source">
                <el-input v-model="ruleForm.source"></el-input>
            </el-form-item>

              <el-form-item label="添加时间" prop="addtime">
                <el-input v-model="ruleForm.time"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
            </el-form-item> 
        </el-form>
     </el-card>  

  </div>
</template>
<script>
import axios from "axios";
import { NewsUpdate } from "@/api/News.js";
  export default {
    data() {
      return {
        imageUrl: '',  //上传图片
        value: [],  //分类
        ruleForm: {
          title: '',
          subTitle:'',
          summary:'',
          img:'',
          type: [],
          source: '',
          num:0,
          content:'',
          addtime:''
        },
        rules: {
          name: [
            { required: true, message: '请输入标题', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
         
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
        options: [{
          value: 'xinwen',
          label: '新闻',
          children: [{
            value: 'gongsixinwen',
            label: '公司新闻'
          }, {
            value: 'hangyedongtai',
            label: '行业动态',
          }]
        }, {
          value: 'tongzhi',
          label: '通知',
          children: [{
            value: 'zuixintongzhi',
            label: '最新通知'
          }]
        }]
      };
    },
  created() {
    // this.NewsListSelect();
  },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.NewsListSelect();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      async NewsListSelect() {
         var admininfo={
        title:this.ruleForm.title,
        summary:this.ruleForm.summary,
        img:this.ruleForm.img,
        source:this.ruleForm.source,
        num:this.ruleForm.num,
        content:this.ruleForm.content,
        addtime:this.ruleForm.addtime,
        }
        const a = await NewsUpdate(admininfo);
        this.tableData=a.data;
        console.log(a);
     },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //   图片上传
     handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
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
/* 图片上传 */

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
     border: 1px dashed #d9d9d9;
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
/* input宽度 */
.el-input {
  width:700px
}

</style>