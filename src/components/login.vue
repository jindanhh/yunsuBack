<template>
  <div class="ground">
      <div class="login">
        <h4>自营商城后台管理</h4>
        <el-form ref="loginRefs" :model="sysuser" :rules="rules">
            <el-form-item prop="name">
                <el-input type="text" v-model="sysuser.name" prefix-icon="el-icon-user-solid">
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="sysuser.password" prefix-icon="el-icon-s-goods"></el-input>
            </el-form-item>
            <el-row class="login_btn">
                <el-button type="primary" @click="land">登陆</el-button>
                <el-button type="info" @click="reset">重置</el-button>
            </el-row>
        </el-form>
        <el-row class="wenzi shang">
            <router-link to="#" class="qian">进入政采管理系统</router-link>
        </el-row>
        <el-row class="wenzi xia">
            <router-link to="#" class="shen">@技术支持：河南云速网络科技有限公司</router-link>
        </el-row>
        
      </div>
  </div>
</template>

<script>
import {login} from '@/api/user.js'
export default {
    data() {
        return {
            // 登陆数据
            sysuser:{
                name:'18567600391',
                password:'123456'
            },
            rules:{
                name:[
                    {required: true, message: '请输入用户名', trigger: 'blur'},
                    { min: 5, max: 20, message: "长度在 5 到 20 个字符", trigger: "blur" }
                ],
                password:[
                    {required: true, message: '请输入密码', trigger: 'blur'},
                    { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
                ]
            }
        }
    },
    methods:{
        reset() {
            this.$refs.loginRefs.resetFields();
        },
        land() {
            this.$refs.loginRefs.validate(async vaild=>{
                if(!vaild) return this.$message.error('请正确输入信息')
                const data = await login(this.sysuser)
                // console.log(data);
                if(data.statusCode !== 200)return this.$message.error('登陆失败')
                this.$message.success('登陆成功');
                window.localStorage.setItem("token", data.data)
                this.$router.push('/home')
            })
            
        }
    }
}
</script>

<style lang="less" scope>
.ground {
    height: 100%;
    background: url(../assets/src/beijing.jpg)no-repeat;
    .login{
        width: 500px;
        background-color: #fff;
        padding:3rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        box-sizing: border-box;
        h4{
            text-align: center;
            font-size: 30px;
            font-weight: 400;
        }
    }
}
.login_btn {
    display: flex;
    justify-content:flex-end;
}
.shang {
    margin-top: 170px;
}
.xia {
    margin-top: 10px;
}
.wenzi {
    text-align: center;
}
.qian {
    font-size: 20px;
    color: #a6a9ad;
}
.shen {
    color: #909399;
    font-size: 14px;
}
</style>