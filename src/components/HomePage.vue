<template>
<div>
  <button @click="handleClick">跳转到 Editor 页面</button>

</div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$router.push('/editor')
    },
  }
}
</script>

<style scoped>




</style>