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
        <el-form ref="addform" :model="subList" label-width="80px" :rules="overRules">
          <el-tabs :tab-position="tabPosition" v-model="active" :before-leave="leavechange">
            <el-tab-pane label="基本信息" name="0">
              <!-- 1. -->
              <el-form-item label="商品分类" prop="value">
                <!-- 级联选择器-->
                <el-cascader v-model="subList.value" :options="options" :props="goodsprops" @change="handleChange"></el-cascader>
              </el-form-item>
              <el-form-item label="商品名称" prop="goodsName">
                <el-input v-model="subList.goodsName"></el-input>
              </el-form-item>
              <el-form-item label="副标题">
                <el-input v-model="subList.subTitle"></el-input>
              </el-form-item>
              <el-form-item label="市场价" prop="goodsPrice">
                <el-input v-model="subList.goodsPrice" type="number"></el-input>
              </el-form-item>
              <el-form-item label="商城价" prop="shopPrice">
                <el-input v-model="subList.shopPrice" type="number"></el-input>
              </el-form-item>
              <el-form-item label="品牌">
                <el-input v-model="subList.brand"></el-input>
              </el-form-item>
              <el-form-item label="库存">
                <el-input v-model="subList.goodsNum" type="number"></el-input>
              </el-form-item>
              <el-form-item label="初始销量">
                <el-input v-model="subList.hit" type="number"></el-input>
              </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="主要参数" name="1">
              <!-- 2 -->
              <el-form-item label="主要参数">
                <el-input type="textarea" :rows="4" placeholder="请输入主要参数，每组数据已｜分割" v-model="subList.mainParams"> </el-input>
              </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="商品图片" name="2">
               <div class="zhutu">主图</div>
              <!-- <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload> -->
              <!-- <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove"
                :file-list="fileList" list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload> -->
             <!-- <div>只能上传jpg/png格式文件，且不超过 1M，最佳尺寸：800px*800px</div> -->
            </el-tab-pane>
            <el-tab-pane label="商品内容" name="3">
              <!-- 4 -->
              <!-- 富文本编辑器 -->
              <quill-editor v-model="subList.content"></quill-editor>
              <el-button type="primary" class="btnclass" @click="addShop">添加商品</el-button>
            </el-tab-pane>
            <el-tab-pane label="参数详情" name="4">5</el-tab-pane>
        </el-tabs>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { CatSelectAll,GoodsInsert } from '@/api/goods.js'
export default {
  data() {
    return {
      active: 0,
      tabPosition: 'left',
      // 
      subList:{
        // 级联选择器的值
        value:[],
        // 商品名称
        goodsName:'',
        // 副标题
        subTitle:'',
        // 商品价格
        goodsPrice:0,
        // 商城价格
        shopPrice:0,
        // 品牌
        brand:'',
        // 库存
        goodsNum:0,
        // 初始销量
        hit:0,
        // 商品参数
        mainParams:'',
        // 商品内容（详情）
        content:''
      },
      // 级联选择器数组
      options:[{
                    cat_id:'174',
                    goodsCatName:'计算机设备',
                    listTwo:[
                        {
                        cat_id:'150',
                        goodsCatName:'计算机',
                        listTwo:[{
                            cat_id:'160',
                            goodsCatName:'台式计算机',
                        }]
                        }
                    ]
                },
                {
                    cat_id:'175',
                    goodsCatName:'办公设备',
                    listTwo:[
                        {
                        cat_id:'151',
                        goodsCatName:'传真/通讯',
                        listTwo:[{
                            cat_id:'161',
                            goodsCatName:'传真机',
                        }]
                        }
                    ]
                }],
      // 显示规则
      goodsprops:{
        expandTrigger: 'hover',
        label:'goodsCatName',
        value:'cat_id',
        children:'listTwo'
      },
      // from表单规则
      overRules:{
        value:[
          {required: true, message: '请选择商品分类', trigger: 'blur'}
        ],
        goodsName:[
          {required: true, message: '请输入商品名称', trigger: 'blur'}
        ],
        goodsPrice:[
          {required: true, message: '请输入价格', trigger: 'blur'}
        ],
        shopPrice:[
          {required: true, message: '请输入价格', trigger: 'blur'}
        ]
      }
    }
  },
  created () {
    // this.getshopList()
  },
  methods:{
    // async getshopList() {
    //     const {data: res} = await CatSelectAll()
    //     console.log(res);
    //     this.options = res
    // },
    handleChange() {
      if(this.subList.value.length !== 3) {
        return this.subList.value.length = []
      }
    },
    leavechange(activeName, oldActiveName) {
      if(oldActiveName === '0' && this.subList.value.length != 3){
        this.$message.error('请选择商品分类')
        return false
      }
    },
    // 添加商品
    // async addShop() {
    //   const data = await GoodsInsert(this.subList)
    //   console.log(data);
    // }
    addShop() {
      this.$refs.addform.validate(async vali=>{
        if(!vali) return this.$message.error('请填写必要表单')
        const data = await GoodsInsert(this.subList)
        if(data.statusCode != 200) return this.$message.error('添加失败')
        this.$message.success('添加成功')
      })
    }
  },
  // 计算属性
  computed:{
      getID() {
          if(this.subList.value.length === 2){
            return this.subList.value[1]
          }
      }
  }

}
</script>

<style lang="less" scope>
.el-card__body {
  padding: 30px;
}
.btnclass {
  margin-top: 20px;
}
.ql-editor {
  height: 300px;
}
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
.zhutu {
  color: #000;
  font-weight: 700;
}
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