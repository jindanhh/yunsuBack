<template>
  <div class="el-main">
    <div>
       <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
            <el-breadcrumb-item>客户取消订单</el-breadcrumb-item>
        </el-breadcrumb>
    <div>
    <el-card>   
       <el-col :span="4" style="margin-bottom:15px">
         <el-input v-model="seathgoods.query"  placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search" @click="searchlist"></el-button>
        </el-input>
        </el-col>
        <el-table :data="tableData"  border style="width: 100%" >      
          <el-table-column label="编号" width="60" prop="id">
            <template slot-scope="scope">
                 <div>{{scope.row.id}}</div>          
             </template>
          </el-table-column>
          
          <el-table-column  label="订单详情" width="420">
            <div class="cell" v-for="(item,index) in tableData" :key="index">
                <!-- <template slot-scope="scope"> -->
                <div class="pros"  v-for="(itemGoods,index) in item.listOrderdetail" :key="index">
                    <div class="imgs"><img @src="itemGoods.goodsImg"/></div>
                    <div class="title">{{itemGoods.goodsName}}</div>
                    <div class="price">{{itemGoods.price}}</div>
                    <div class="nums">{{itemGoods.buynum}}</div>
                </div> 
                <!-- </template> -->
            </div>
          </el-table-column>

            <el-table-column prop="orderid,addtime" label="订单信息" width="220">
                      <template slot-scope="scope">
                              <div class="cell">
                                  <div >订单号：{{scope.row.orderid}} </div>
                                  <div >下单时间：{{ scope.row.addtime }}</div>
                              </div>
                      </template>
            </el-table-column>
  
          <el-table-column prop="billnum,totalprice" label="订单金额" > 
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
          <el-table-column label="支付状态" prop="ordertype" width="100">
            <template slot-scope="scope">
                    <div v-if="scope.row.ordertype==4">客户已取消</div>
              </template>
          </el-table-column>
          <el-table-column prop="" label="操作"> 
            <template slot-scope="scope">
                   <el-button type="primary" size="mini" icon="el-icon-edit"  @click="exitorder(scope.row.id)"></el-button>
                   <!-- <el-button type="danger" icon="el-icon-delete" circle></el-button> -->
              </template>

          </el-table-column>
      </el-table>
    </el-card>
      <!-- 操作修改订单状态对话框-->
        <el-dialog title="修改订单状态" :visible.sync="dialogFormVisible" width="600px">
            <!-- from 表单 -->
            <el-form>
              <el-form-item label="订单状态" :label-width="formLabelWidth">
                <el-select v-model="selectValue" placeholder="请选择订单状态"  @change="choose()">
                  <el-option  v-for="item in selectArr" :key="item.id" :label="item.name" :value="item.id" >
                 </el-option>
                </el-select>
            
              </el-form-item>
          </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible  = false">取 消</el-button>
                <el-button type="primary" @click="changeOrdertype">确 定</el-button>
            </span>
        </el-dialog>
      
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { OrderTypeSelect,OrderIdSelect,UpDateOrder } from "@/api/order.js";
export default {
  data() {
    return {
      listOrderdetail:[ ],
      orderchangetype:'',
      tableData: [ ],
      seathgoods:{ query:'',},
      // 操作对框框是否显示
      dialogFormVisible: false,
      formLabelWidth: '120px',
      selectValue:this.value,
      selectArr: [
          {name: '待支付', id: 1},
          {name: '待发货', id: 2},
          {name: '已发货', id: 3},
          {name: '用户取消', id: 4},
          {name: '后台取消', id: 5},
          {name: '退款', id: 6},
          {name: '订单完成', id: 0},
    ]
    };
  },
  created() { 
    this.GorderSelect();
  },
  methods: {
    //查询所有订单
    async GorderSelect() {
      const a = await OrderTypeSelect(4);
      this.tableData=a.data;
      // for(var i = 0;i< this.tableData.length;i++){
      //    console.log(this.tableData[i]);
      //     this.listOrderdetail = a.data[i].listOrderdetail
      // }
      // console.log(a.data);
      // console.log(a.data[0].listOrderdetail);
      // console.log(a.data[0].listOrderdetail[0].goodsName);
    },
     // 操作对话框
    exitOrder() {
        this.operationVisible = true
    },
    // 查询列表
    async searchlist() {
       this.SelectOrderId();
    },
     async SelectOrderId() {
        const a = await OrderIdSelect(this.seathgoods.query);
        this.tableData=a.data;
        console.log(a);
     },
     //改变订单状态
     exitorder(id){
        console.log(id);
        this.dialogFormVisible = true,
        this.orderchangetype=id
     },

     async changeOrdertype(){
         this.ChangeOrderId();
          this.dialogFormVisible  = false
         this.GorderSelect();
     },
 
    choose(){
       console.log(this.selectValue);
    },

    async ChangeOrderId() {
      //第一种方法
      // var order={
      //   id:this.orderchangetype,
      //   ordertype:this.selectValue
      //   }
      //   const b = await UpDateOrder(order);
      //第二种方法
        const b = await UpDateOrder({id:this.orderchangetype,ordertype:this.selectValue});
        this.tableData=b.data;
        console.log(b);
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
