<template>
    <div>
      <button @click="handleClick">跳转到 Show 页面</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleClick() {
        this.$router.push('/show')
      }
    }
  }
  </script>
  