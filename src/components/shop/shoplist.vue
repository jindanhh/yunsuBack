<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
        <el-input placeholder="请输入商品名称或编号" v-model="quer.query" class="input-with-select" clearable @clear="userlist">
            <el-button slot="append" icon="el-icon-search" @click="userlist"></el-button>
        </el-input>
        <!-- tab表格 -->
       <el-table :data="tableList" style="width: 100%" stripe border>
          <el-table-column prop="itemNum" label="编号" width="60"></el-table-column>
          <el-table-column prop="goodsName" label="商品名称" width="300"></el-table-column>
          <el-table-column prop="goodsPrice" label="市场价"></el-table-column>
          <el-table-column prop="shopPrice" label="商城价"></el-table-column>
          <el-table-column prop="goodsNum" label="库存"></el-table-column>
          <el-table-column prop="brand" label="品牌"></el-table-column>
          <el-table-column prop="hit" label="销量" width="80"></el-table-column>
          <el-table-column prop="bigimg" label="商品图片" width="150">
            <template slot-scope="scope">
              <!-- <img :src="scope.row.bigimg" width="40" height="40" class="head_pic"/> -->
              <img :src="'http://192.168.1.3:8889/yunsu'+scope.row.bigimg" width="40" height="40" class="head_pic"/>
            </template>
          </el-table-column>
          <el-table-column prop="saleNum" label="是否特惠">
             <template slot-scope="scope">
              <el-switch v-model="scope.row.saleNum" active-color="#13ce66" @change="switchState(scope.row)"></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="shopNew" label="是否新品">
             <template slot-scope="scope">
              <el-switch v-model="scope.row.shopNew" active-color="#13ce66"></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="操作" widtn="300">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit(scope.row)"></el-button>
              <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteut(scope.row.id)"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
         <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="quer.current" :page-sizes="[10, 20, 50, 100]" :page-size="quer.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="listTotal">
        </el-pagination>
    </el-card>

  </div>
</template>

<script>
import { GoodsSelects,GoodsDetect } from '@/api/goods.js'
export default {
  data() {
    return {
      tableList:[],
      quer:{
        query:'',
        current:1, 
        size:10
      },
      listTotal:0
    }
  },
  created() {
    this.getList();
  },
  methods:{
    async getList() {
      const data = await GoodsSelects(this.quer)
      // console.log(data);
      if(data.statusCode !== 200)return this.$message.error('获取商品列表失败')
      this.tableList = data.data.records
      this.listTotal = data.data.total
    },
    handleSizeChange(newsize) {
      this.quer.size = newsize
      this.getList()
    },
    handleCurrentChange(newcurrent) {
      this.quer.current = newcurrent
      this.getList()
    },
    async deleteut(id) {
      const data = await GoodsDetect(id)
      if(data.statusCode !== 200) return this.$message.error('删除失败')
      this.$message.success('删除成功')
      this.getList();
    },
     // 监听开关switch状态变化
    switchState (status) {
      console.log(status);
    },
    userlist(){
      this.getList();
    },
    edit(status) {
      this.$router.push({
        path:'/edit',
        query:{
          row:status
        }
      })
    }
  }
}
</script>

<style lang="less" scope>
.input-with-select {
    width: 230px;
}
.el-table {
  margin-top: 20px;
}
</style>