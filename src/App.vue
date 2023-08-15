<template>
  <div id="app">
    <layoutAppVue />
  </div>
</template>

<script>
import { mapState } from "vuex";
import layoutAppVue from './components/layoutApp.vue';
export default {
  name: "App",
  components: {
    layoutAppVue
  },
  computed: {
    ...mapState(["showRouterview"]),
  },
  data() {
    return {
      showPage: false,
    };
  },
  methods: {},
};
</script>

<style lang='sass' scoped>
#app
  font-family: Avenir, Helvetica, Arial,
  -serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  height: 100vh
</style>
