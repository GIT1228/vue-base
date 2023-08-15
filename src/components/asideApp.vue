<template>
  <div style="height: 100%;">
    <el-aside class="asideApp" :width="collapse ? '65px' : '200px'">
      <el-menu default-active="1" class="el-menu-vertical-demo" :collapse-transition="false" :collapse="collapse">
        <el-menu-item v-for="(item, index) in $store.state.siderList" :key="index" @click="click(item)">
          <i class="el-icon-s-order"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </el-menu>
      <span class="showCollapse" @click="handleShowCollapse">
        {{ collapse ? '》' : '《' }} </span>
    </el-aside>
  </div>
</template>

<script>

export default {
  data() {
    return {
      collapse: false,
      asideWidth: '200px'
    };
  },
  methods: {
    handleClose() { },
    handleOpen() { },
    click(item) {
      console.log(item)
      this.$router.push(item.path);
    },
    handleShowCollapse() {
      this.collapse = !this.collapse
    }
  },
};
</script>

<style lang='sass' scoped>
.el-aside
  height: 99%
  background-color: #fff
  margin: 0px 5px 0px 10px
.el-aside>.el-menu
  border-right: 0px
.showCollapse
  padding-top: 300px
  float: right
</style>