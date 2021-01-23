<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
        <el-button type="primary">添加分类</el-button>
        <tree-table :data="CategoriesData" :columns="columns" :selection-type="false" :expand-type="false" show-index index-text="#" border>
            <template slot-scope="scope" slot="isOK">
                <i class="el-icon-success" v-if="scope.row.cat_deleted === false" style="color: lightgreen"></i>
                <i class="el-icon-error" v-else style="color: red"></i>
            </template>
            <template slot="level" slot-scope="scope">
                <el-tag v-if="scope.row.cat_level === 0" size="mini">一级</el-tag>
                <el-tag v-else-if="scope.row.cat_level === 1" type="success" size="mini">二级</el-tag>
                <el-tag v-else-if="scope.row.cat_level === 2" type="warning" size="mini">三级</el-tag>
            </template>
            <template slot="operation" slot-scope="scope">
                <el-button type="primary" size="mini" @click="editput(scope.row)">
                    <i class="el-icon-edit"></i>
                    编辑
                </el-button>
                <el-button type="danger" size="mini" @click="daleteshop(scope.row)">
                    <i class="el-icon-delete"></i>
                    删除
                </el-button>
            </template>
        </tree-table>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>