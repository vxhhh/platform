<template>
    <div class="login">
    <el-form class="loginForm" :model="loginForm" ref="loginForm"
             :inline="false" size="normal">
        <el-form-item>
            <div class="loginTitle">登录</div>
        </el-form-item>
        <el-form-item>
            <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-row>
                <el-col class="btn">
                    <el-button type="primary" size="default" width="100px" @click="getHome()">登录</el-button>
                </el-col>
            </el-row>
        </el-form-item>
    </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loginForm:{
                    username: "",
                    password: "",
                },
            };
        },
        methods:{
            getHome(){
                if (this.loginForm.username=="admin"&&this.loginForm.password=="admin"){
                    // console.log(this.loginForm.username)
                    this.$router.push("home")
                }else{
                    alert("账号密码错误")
                }
            }
        }
    };
</script>
<style>
    .login{
        height:800px;
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .loginForm{
        height: 350px;
        width: 400px;
        box-shadow: 0 0 25px #cac6c6;
        border-radius: 10px;
        padding: 20px 35px;
    }
    .loginTitle{
        font-size: 24px;
        font-weight: 600;
        display: flex;
        justify-content:center;
        align-items: center;
        text-align: center;
    }
    .btn{
        display: flex;
        justify-content:center;
        align-items: center;
    }

</style>