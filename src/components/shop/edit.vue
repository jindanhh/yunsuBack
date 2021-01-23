<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>编辑商品</el-breadcrumb-item>
      <!-- <p>{{this.$route.query.row}}</p> -->
    </el-breadcrumb>
    <el-card>
        <!-- 上部分 -->
        <el-row class="father">
            <el-steps :active="active - 0" finish-status="success" :space="200" align-center>
            <el-step title="基本信息"></el-step>
            <el-step title="主要参数"></el-step>
            <el-step title="商品图片"></el-step>
            <el-step title="商品内容"></el-step>
            <el-step title="详细参数"></el-step>
            </el-steps>
            <el-button type="primary" class="btnp" @click="saveChanges">保存修改</el-button>
        </el-row>
        <el-form ref="putsformRef" :model="putsubList" label-width="80px" :rules="putrules">
            <el-tabs :tab-position="tabPosition" v-model="active">
                <el-tab-pane label="基本信息" name="0">
                    <!-- prop="jilian" -->
                    <el-form-item label="商品分类">
                        <!-- 级联选择器-->
                        <el-cascader v-model="putsubList.jilian" :options="editoptions" :props="editProps" @change="editChange"></el-cascader>
                    </el-form-item>
                    <el-form-item label="商品名称" prop="goodsName">
                        <el-input v-model="putsubList.goodsName"></el-input>
                    </el-form-item>
                    <el-form-item label="副标题">
                        <el-input v-model="putsubList.subTitle"></el-input>
                    </el-form-item>
                    <el-form-item label="市场价" prop="goodsPrice">
                        <el-input v-model="putsubList.goodsPrice"></el-input>
                    </el-form-item>
                    <el-form-item label="商城价" prop="shopPrice">
                        <el-input v-model="putsubList.shopPrice"></el-input>
                    </el-form-item>
                    <el-form-item label="品牌">
                        <el-input v-model="putsubList.brand"></el-input>
                    </el-form-item>
                    <el-form-item label="库存">
                        <el-input v-model="putsubList.goodsNum"></el-input>
                    </el-form-item>
                    <el-form-item label="初始销量">
                        <el-input v-model="putsubList.hit"></el-input>
                    </el-form-item>
                </el-tab-pane>
                <el-tab-pane label="主要参数" name="1">
                    <!-- 1. -->
                    <el-form-item label="主要参数">
                        <el-input type="textarea" :rows="4" placeholder="请输入主要参数，每组数据已｜分割" v-model="putsubList.mainParams"> </el-input>
                    </el-form-item>
                </el-tab-pane>
                <el-tab-pane label="商品图片" name="2">
                    <!-- 2. -->
                    <!-- <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload> -->
                </el-tab-pane>
                <el-tab-pane label="商品内容" name="3">
                    <!-- 3. -->
                    <quill-editor v-model="putsubList.content"></quill-editor>
                </el-tab-pane>
                <el-tab-pane label="参数详情" name="4">
                </el-tab-pane>
            </el-tabs>
        </el-form>
    </el-card>
  </div>
</template>

<script>
import { CatSelectAll,GoodsUpdate,goodsupdate } from '@/api/goods.js'
export default {
    data() {
        return {
            active: 0,
            tabPosition: 'left',
            // 列表数据
            putsubList:{
                id:'',
                jilian:[],
                goodsName:'',
                subTitle:'',
                goodsPrice:0,
                shopPrice:0,
                brand:'',
                goodsNum:0,
                hit:0,
                mainParams:'',
                content:''
            },
            // 级联选择器所需数据
            editoptions:[
                {
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
                }
            ],
            editProps:{
                expandTrigger: 'hover',
                value:'cat_id',
                label:'goodsCatName',
                children:'listTwo'
            },
            // from规则
            putrules:{
                // jilian:[
                //     {required: true, message: '请选择商品分类', trigger: 'blur'}
                // ],
                goodsName:[
                    {required: true, message: '请输入商品名称', trigger: 'blur'}
                ],
                goodsPrice:[
                    {required: true, message: '请输入市场价', trigger: 'blur'}
                ],
                shopPrice:[
                    {required: true, message: '请输入商城价', trigger: 'blur'}
                ]
            }
        }
    },
    created() {
        // this.getshopList()
        this.putsubList = this.$route.query.row
        // console.log(this.putsubList);
    },
    methods:{
        async getshopList() {
            const data = await CatSelectAll()
            // console.log(data);
        },
        editChange() {
            console.log(this.subList.jilian);
        },
        // 保存修改
        saveChanges() {
            this.$refs.putsformRef.validate(async valid=>{
                if(!valid) return this.$message.error('请填写必填项')
                const data = await goodsupdate(this.putsubList);
                if(data.statusCode != 200) return this.$message.error('修改失败')
                this.$message.success('修改成功')
                this.$router.push('/productlist')
            })
            
        }
    }
}
</script>

<style lang="less" scope> 
.ql-editor {
  height: 300px;
}
.btnp {
    position: absolute;
    right: 30px;
    top: 15px;
}
.el-steps {
  margin-left: 100px;
  margin-bottom: 20px;
  .el-step__title {
    font-size: 14px;
  }
}
</style>