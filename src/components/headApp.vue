<template>
  <div class="headerContent">
    <div class="menuContent">
      <el-menu :default-active="defaultActive" mode="horizontal" background-color="#fff" text-color="#409eff"
        active-text-color="#fff">
        <el-menu-item v-for="item in getheaderList" :key="item.index" @click="handleClick(item)">{{
          item.title
        }}</el-menu-item>
      </el-menu>
    </div>
    <div class="userContent">
      <el-dropdown @command="handleLogin">
        <i class="el-icon-user"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="Information">个人信息</el-dropdown-item>
          <el-dropdown-item command="setting">设置</el-dropdown-item>
          <el-dropdown-item command="quit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import rules from '../router/requireRules.js'

export default {
  data() {
    return {
      defaultActive: "1",
    };
  },
  computed: {
    getheaderList() {
      return rules.map((item, index) => ({
        siderList: item.children,
        index: index,
        title: item.title,
        path: item.path,
        label: item.title,
      }))
    }
  },
  mounted() {
  },
  methods: {
    handleClick(e) {
      this.$router.push(e.path)
      this.$store.commit('changeSiderMenuList', e.siderList.map(item => ({
        title: item.title,
        path: item.path,
        label: item.title,
      })))
      console.log(e)
    },
    handleLogin(e) {
      switch (e) {
        case 'quit':
          localStorage.removeItem('token')
          this.$store.commit('changeUserInfo', {})
          this.$store.commit('changeLogin', false)
          this.$router.push('/login')
      }
    }
  },
};
</script>

<style lang='sass' scoped>
.headerContent
  background-color: #fff
  margin: 5px 10px 5px 10px
.menuContent
  display: inline-block
  width: 95%
.userContent
  float: right
  height: 95px
  width: 5%
  font-size: 25px
  background-color: #fff
  border-bottom: solid 1px #e6e6e6;
.el-icon-user
  font-size: 25px
  padding-top: 33px
.el-header .el-menu-item
  font-size: 25px
.el-menu--horizontal>.el-menu-item
  height: 95px
  line-height: 100px
.el-menu--horizontal>.el-menu-item:hover
  border-radius: 10px
  border-bottom: 0px
.el-menu--horizontal>.el-menu-item.is-active
  border-radius: 10px
  border-bottom: 0px
  background-color: #409eff !important
</style>