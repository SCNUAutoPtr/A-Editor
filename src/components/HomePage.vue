<template>
  <div>
    <button @click="handleClick">跳转到 Editor 页面</button>
    <FileList></FileList>

  </div>
</template>

<script>
import FileList from "./FileList.vue";
export default {
  components: {
    FileList
  },
  data() {
    return {
    }
  },
  methods: {
    handleClick() {
      this.$router.push('/editor')
    },
  }
}
</script>

<style scoped></style>


