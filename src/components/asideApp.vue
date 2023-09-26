<template>
  <div style="height: 100%;">
    <el-aside class="asideApp" :width="$store.state.sierbarIsCollapse ? '65px' : '200px'">
      <el-menu default-active="1" class="el-menu-vertical-demo" :collapse-transition="false" :collapse="$store.state.sierbarIsCollapse">
        <el-menu-item v-for="(item, index) in $store.state.siderList" :key="index" @click="click(item)">
          <i class="el-icon-s-order"></i>
          <span slot="title">{{ item.label }}</span>
        </el-menu-item>
      </el-menu>
      <span class="showCollapse" @click="handleShowCollapse">
        {{ $store.state.sierbarIsCollapse ? '》' : '《' }} </span>
    </el-aside>
  </div>
</template>

<script>

export default {
  data() {
    return {
      asideWidth: '200px'
    };
  },
  methods: {
    handleClose() { },
    handleOpen() { },
    click(item) {
      this.$router.push(item.path);
    },
    handleShowCollapse() {
      const Collapse = this.$store.state.sierbarIsCollapse
      this.$store.commit('changeCollapse',(!Collapse))
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