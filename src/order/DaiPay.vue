<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="id" label="编号" width="100"> </el-table-column>
    <el-table-column prop="orderdetail" label="订单详情" width="680"> </el-table-column>
    <el-table-column prop="orderinfo" label="订单信息" width="180"> </el-table-column>
    <el-table-column prop="ordermoney" label="订单金额" width="180"> </el-table-column>
    <el-table-column prop="address" label="收货人信息" width="280"> </el-table-column>
    <el-table-column prop="pay" label="支付状态" width="180"> </el-table-column>
    <el-table-column prop="" label="操作"> </el-table-column>
  </el-table>
</template>

<script>
// import axios from "axios"
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        }
      ],
     
    };
  },created() {
    this.a()
  },methods: {
     a(){
        this.$http.post('/Orders/UidSelect',{
          params:{
            ordertype: 1
          }
        }).then((res)=>{
          console.log(res);
        }).catch((error)=>{
          console.log("请求失败");
        })
    }
  },
};
</script>
<style lang=""></style>
