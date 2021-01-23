<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
        <el-button type="primary" class="curry" @click ="addcurry">添加分类</el-button>
        <tree-table :data="CategoriesData" :columns="columns" :tree-type="true" :selection-type="false" :expand-type="false" show-index index-text="#" border>
             <template slot="isOK">
                <i class="el-icon-success" style="color: green"></i>
            </template>
            <template slot="operation" slot-scope="scope">
                <el-button type="primary" size="mini" disabled>
                    <i class="el-icon-edit"></i>
                    编辑
                </el-button>
                <el-button type="danger" size="mini" @click="dalete(scope.row)">
                    <i class="el-icon-delete"></i>
                    删除
                </el-button>
            </template> 
        </tree-table>
        <!-- 对话框 -->
        <el-dialog title="添加分类" :visible.sync="curryVisible" width="30%" @close="cancel">
            <el-form ref="curryform" :model="cuttyform" label-width="80px" :rules="curryrules">
                <el-form-item label="上级分类">
                  <!-- 级联选择器 -->
                    <el-cascader style="width:100%" clearable v-model="cuttyform.superior" expandTrigger='hover' :options="curryoptions" :props="curryprops" @change="addregulationsChange"></el-cascader>
                </el-form-item>
                <el-form-item label="分类名称" prop="cname">
                    <el-input v-model="cuttyform.cname"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="addculist">确 定</el-button>
            </span>
        </el-dialog>
    </el-card>
  </div>
</template>

<script>
import { CatSelectAll,GoodsCatDelect,GoodsCatOne } from '@/api/goods.js'
export default {
    data() {
        return {
            CategoriesData:[],
            columns:[
                {label:'分类名称',prop:'goodsCatName'},
                {label:'是否有效',type:'template',template: 'isOK'},
                {label:'操作',type:'template',template: 'operation'}
            ],
            curryVisible: false,
            cuttyform:{
                superior:[],
                cname:''
            },
            curryrules:{
                cname:[
                    {required: true, message: '请输入分类名称', trigger: 'blur'}
                ]
            },
            curryoptions:[],
            curryprops:{
                label:'goodsCatName',
                children:'listTwo',
                checkStrictly: true
            }
        }
    },
    created() {
        this.getList();
    },
    methods:{
        async getList() {
            const data = await CatSelectAll()
            // console.log(data);
            this.CategoriesData = data.data
            this.curryoptions = data.data
        },
        addcurry() {
            this.curryVisible = true;
        },
        addculist() {
            this.$refs.curryform.validate(async vali=>{
                if(!vali)return this.$message.error('请输入信息')
                const addlop = {
                    Cat: this.cuttyform.superior.length + 1,
                    goodsCatName:this.cuttyform.cname
                }
                const data = await GoodsCatOne(addlop)
                this.$message.success('添加一级分类成功')
                this.curryVisible = false
                this.getList();
            })
        },
        addregulationsChange() {
            console.log('111');
            console.log(this.cuttyform.superior);
        },
        async dalete(status) {
            const list = {
                Cat: 1,
                id: status.id
            }
            const data = await GoodsCatDelect(list)
            this.$message.success('删除成功！')
            this.getList();
        },
        cancel() {
            this.$refs.curryform.resetFields()
            this.curryVisible = false
        }
    }
}
</script>

<style lang="less" scope>
.curry {
    margin-bottom: 20px;
}
</style>