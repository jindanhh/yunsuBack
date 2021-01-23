<template>
    <div class="el-main" style="width:1200px">
     
       <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加商品</el-breadcrumb-item>
        </el-breadcrumb>
      <!-- 表单 -->
      <el-card>  
          <el-steps :active="1" align-center style="margin-botom:20px">
            <el-step title="基本信息"></el-step>
            <el-step title="商品参数"></el-step>
            <el-step title="商品图片"></el-step>
            <el-step title="商品内容"></el-step>
            <el-step title="详细参数"></el-step>
        </el-steps>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
             <el-form-item label="商品分类" prop="region">
                <el-cascader
                    v-model="value"  :options="options" :props="{ expandTrigger: 'hover' }">
                </el-cascader>
            </el-form-item>

            <el-form-item label="商品名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

           <el-form-item label="副标题" prop="fname">
                <el-input v-model="ruleForm.fname"></el-input>
            </el-form-item>

            <el-form-item label="市场价" prop="age"
                :rules="[{ required: true, message: '市场价不能为空'}, { type: 'number', message: '市场价必须为数字值'} ]">
                <el-input type="age" v-model.number="ruleForm.age" autocomplete="off"></el-input>
            </el-form-item>

              <el-form-item label="商城价" prop="age"
                :rules="[{ required: true, message: '商城价不能为空'}, { type: 'number', message: '商城价必须为数字值'} ]">
                <el-input type="age" v-model.number="ruleForm.age" autocomplete="off"></el-input>
            </el-form-item>

           <el-form-item label="品牌" prop="brand">
                <el-input v-model="ruleForm.num"></el-input>
            </el-form-item>

           <el-form-item label="库存" prop="num">
                <el-input v-model="ruleForm.num"></el-input>
            </el-form-item>

            <el-form-item label="初始访问量" prop="num">
                <el-input v-model="ruleForm.num"></el-input>
            </el-form-item>

            <el-form-item label="简介" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>

           <el-form-item label="标题图片" prop="titleimg">
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
            

           <el-form-item label="详情" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
          

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
            </el-form-item> 
        </el-form>
     </el-card>  

  </div>
</template>
<script>
  export default {
    data() {
      return {
        imageUrl: '',  //上传图片
        value: [],  //分类
        ruleForm: {
          name: '',
          fname:'',
          type: [],
          desc: '',
          num:0,
          brand:'',
          age:''
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
          value: 'jisuanji',
          label: '计算机设备',
          children: [{
            value: 'gongsixinwen',
            label: '计算机'
          }, {
            value: 'xianshishebei',
            label: '显示设备',
          } ,{
            value: 'dayinshebei',
            label: '打印设备',
          },{
            value: 'wangluoshebei',
            label: '网络设备',
          },{
            value: 'xinxianquanshebei',
            label: '信息安全设备',
          }]
        }, {
          value: 'bangongshebei',
          label: '办公设备',
          children: [{
            value: 'chuanzhen/tongxun',
            label: '传真/通讯'
          }]
        }]
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
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
.el-steps {
    display: flex;
    margin-bottom: 30px;
}
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


</style>