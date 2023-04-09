<template>
  <div>
    <button @click="handleClick">跳转到 Editor 页面</button>

    <CommentArea></CommentArea>
    <HistoryRecord></HistoryRecord>

  </div>
</template>

<script>
import CommentArea from "./CommentArea.vue"
import HistoryRecord from "./HistoryRecord.vue"
export default {
  components: {
    CommentArea,
    HistoryRecord
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
