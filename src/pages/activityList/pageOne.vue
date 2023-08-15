<template>
  <div>
    <h1>这是页面1</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: {

      }
    }
  },
  methods: {
    click() {
      this.a.c = 2
      this.$forceUpdate()
    }
  }
}
</script>
