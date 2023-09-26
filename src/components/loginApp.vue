<template>
    <div id="app">
        <Particles id="tsparticles" :options="options" />
        <div class="fromContent">
            <div class="textContent">活动管理系统用户登录</div>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm"
                v-if="showRegister">
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model.number="ruleForm.userName" style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" style="width:300px" autocomplete="off"
                        @keyup.13="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-link type="primary" @click="register">注册账号</el-link>
            </el-form>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm"
                v-else>
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model.number="ruleForm.userName" style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" style="width:300px" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" style="width:300px" autocomplete="off"
                        v-no.native:keyup.13="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                <el-link type="primary" @click="register">已有账号去登录</el-link>
            </el-form>
        </div>
    </div>
</template>
<script>
import { Message } from 'element-ui'
import axios from 'axios'

export default {
    data() {
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            options: {
                background: {
                    color: {
                        value: '#409EFF'
                    }
                },
                fpsLimit: 20,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'push'
                        },
                        onHover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        resize: true
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40
                        },
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: '#ffffff'
                    },
                    links: {
                        color: '#ffffff',
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    collisions: {
                        enable: true
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: 'bounce',
                        random: false,
                        speed: 6,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 80
                    },
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    }
                },
                detectRetina: true
            },
            ruleForm: {
                userName: '',
                password: '',
                checkPass: ''
            },
            showRegister: true,
            rules: {
                password: { required: true, message: '请输入用户名', trigger: 'blur' },
                userName: { required: true, message: '请输入密码', trigger: 'blur' },
                checkPass: [{ validator: validatePass2, trigger: 'blur' }],
            }
        }
    },
    methods: {
        submitForm() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    axios.post('/api/user/login', this.ruleForm).then(res => {
                        if (res.data.code === '-1') {
                            Message.error(res.data.error)
                        } else {
                            Message.success('登录成功')
                            this.$router.push('/')
                            this.$store.commit('changeLogin', true)
                            this.$store.commit('changeUserInfo', res.data)
                        }
                    })
                } else {
                    return false;
                }
            });
        },
        register() {
            this.showRegister = !this.showRegister
            this.$refs.ruleForm.clearValidate()
        }
    }
}
</script>
<style lang="sass" scoped>
.demo-ruleForm
 color: #fff
.textContent 
    font-size: 25px
    margin-bottom: 10px
.fromContent
    border-radius: 20px
    padding-top: 30px
    width: 400px
    height: 300px
    position: fixed
    left: 38%
    top: 33%
    background-color: #a0cfff
    opacity: 0.8
/deep/  .el-form-item__content
    width: 300px
/deep/ .el-form-item__label 
    color:#303133
</style>