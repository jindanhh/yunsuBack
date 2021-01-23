<template>
  <div class="el-main">
    <div>
       <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
            <el-breadcrumb-item>待付款</el-breadcrumb-item>
        </el-breadcrumb>
    <div>
    <el-card>   
       <el-col :span="4" style="margin-bottom:15px">
         <el-input v-model="input" placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        </el-col>
        <el-table :data="tableData"  border style="width: 100%">
         
          <el-table-column label="编号" width="60" prop="id"></el-table-column>
          <el-table-column prop="listOrderdetail" label="订单详情" width="380">
          
            <div class="cell">
                    <template slot-scope="scope">
                    <div class="pros">
                        <div class="imgs">
                          <img @src="1">
                        </div>
                        <div class="title">{{scope.row.listOrderdetail.goodsName}}</div>
                        <div class="price">¥1870.00</div>
                        <div class="nums">1</div>
                    </div> 
                    </template>
            </div>
          </el-table-column>

            <el-table-column prop="orderid,addtime" label="订单信息" width="280">
                          <template slot-scope="scope">
                              <div class="cell">
                                  <div >订单号：{{scope.row.orderid}} </div>
                                  <div >下单时间：{{ scope.row.addtime }}</div>
                              </div>
                      </template>
            </el-table-column>
  
          <el-table-column prop="billnum,totalprice" label="订单金额" width="180"> 
            <template slot-scope="scope">
                <div class="cell">
                    <div>商品数量：{{ scope.row.billnum }}</div>
                    <div>商品总价：¥{{ scope.row.totalprice }}.00</div>
                    <div>订单金额：¥{{ scope.row.totalprice }}.00</div>
                </div>
            </template>
          </el-table-column>
          <el-table-column label="收货人信息" prop="linkman,mobile,province,city,county,address"  width="280">
              <template slot-scope="scope">
                    {{scope.row.linkman}}{{scope.row.mobile}}{{scope.row.province}}{{scope.row.city}}{{scope.row.county}}{{scope.row.address}}
              </template>
          </el-table-column>
          <el-table-column label="支付状态" prop="ordertype" width="180">
            <template slot-scope="scope">
                    <div v-if="scope.row.ordertype==2">待发货</div>
              </template>
          </el-table-column>
          <el-table-column prop="" label="操作"> 
            <el-button type="primary" size="mini" icon="el-icon-edit"  @click="dialogFormVisible  = true"></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </el-table-column>
      </el-table>
    </el-card>
      <!-- 操作修改订单状态对话框-->
        <el-dialog title="修改订单状态" :visible.sync="dialogFormVisible" width="600px">
            <!-- from 表单 -->
            <el-form :model="form">
              <el-form-item label="订单状态" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择订单状态">
                   <el-option label="待支付" value="daipay"></el-option>
                      <el-option label="待发货" value="daigoods"></el-option>
                      <el-option label="已发货" value="yigoods"></el-option>
                      <el-option label="后台取消" value="backcancel"></el-option>
                      <el-option label="用户取消" value="usercancel"></el-option>
                      <el-option label="退款" value="refund"></el-option>
                      <el-option label="订单完成" value="orderfinfish"></el-option>
                </el-select>
              </el-form-item>
          </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible  = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible  = false">确 定</el-button>
            </span>
        </el-dialog>
      
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { OrderTypeSelect } from "@/api/order.js";
export default {
  data() {
    return {
      tableData: [ 
      ],
      // 操作对框框是否显示
       dialogFormVisible: false,
        form: {
        region: '',
      },
      formLabelWidth: '120px'
   
    };
  },
  created() {
    // this.getBanner();
    this.GorderSelect();
  },
  methods: {
    async GorderSelect() {
      const a = await OrderTypeSelect(2);
      this.tableData=a.data;
      console.log(a);
    },
     // 操作对话框
    exitOrder() {
        this.operationVisible = true
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
.pros{
    display: flex;
}
.pros .imgs{
    width: 80px;
}
img {
    max-width: 100%;
    height: auto;
    width: auto;
}
.pros .title{
    flex: 1;
    padding-left: 10px;
}
.pros .price {
    width: 80px;
}
.pros .nums{
    width: 50px;
    text-align: center;
}
</style>
