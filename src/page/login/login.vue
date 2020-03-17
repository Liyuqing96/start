<template>
    <div class="login-wrapper">
        <headers :goback = 'true' login = "密码登录">
        </headers>
        <div class="login-wrap">
            <div class="input-wrap">
                <input v-model="phone" placeholder="账号" type="text" maxlength="32"/>
                <input v-model="password" placeholder="密码" type="password" maxlength="32"/>
                <div class="verify-code">
                    <input v-model="verifyCode" placeholder="验证码" type="text" maxlength="6" />
                    <div class="tip right">看不清<br><span>换一张</span></div>
                    <img class="right" :src="codeImg"/>
                </div>
            </div>
            <p class="login_tips">
                温馨提示：未注册过的账号，登录时将自动注册
            </p>
            <p class="login_tips">
                注册过的用户可凭账号密码登录
            </p>
            <div class="sign-in">
                登录
            </div>
        </div>
    </div>
</template>

<script>
import headers from '../../components/head/headers'
import { mapState } from 'vuex'

export default {
    data(){
        return {
            phone: '',
            password: '',
            verifyCode: '',
            codeImg: null
        }
    },
    computed: {
      
    },
    components: {
        headers,
    },
    created(){
    }
}
</script>

<style lang="less" scoped>
.login-wrapper {
    .login-wrap{
        padding: 3.34rem 1em 0 1em;
    }
    .input-wrap {
        margin: 1rem 0;
        input {
            width: 100%;
            height: 4rem;
            border: none;
            border-bottom: 0.083rem solid #ccc;
        }  
        .verify-code {
            border-bottom: 0.083rem solid #ccc;
            input {
                border: none;
                width: 60%;
            }
            .tip {
                margin-top: 0.25rem;
                span {
                    display: inline-block;
                    line-height: 2rem;
                    color: #ff8479;
                }
            }
        }  
    }
    .login_tips {
        line-height: 2rem;
    }
    .sign-in {
        margin-top: 2rem;
        width: 100%;
        height: 3.3rem;
        line-height: 3.3rem;
        color: #fff;
        background: #333;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        border-radius: 4px;
    }
}
</style>