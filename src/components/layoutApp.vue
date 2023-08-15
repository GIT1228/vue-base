<template>
  <div>
    <el-container>
      <el-header class="headApp" height="11vh">
        <headAppVue />
      </el-header>
      <el-container class="bodyApp">
        <asideAppVue />
        <el-main>
          <div class="mianClass">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import asideAppVue from "./asideApp.vue";
import headAppVue from "./headApp.vue";

export default {
  components: {
    headAppVue,
    asideAppVue,
  },
}
</script>

<style lang='sass' scoped>
  
.el-main
  padding: 0px 10px 10px 0px
.bodyApp
  height: 89vh
.mianClass 
  width: 100%;
  height: 100%;
  background-color: #fff;
.el-header 
  padding: 0px;
  box-sizing: border-box;
  flex-shrink: 0;

</style>