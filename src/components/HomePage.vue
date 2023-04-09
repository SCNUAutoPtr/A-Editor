<template>
<div>
  <button @click="handleClick">跳转到 Editor 页面</button>

  <CommentArea></CommentArea>

</div>
</template>

<script>
import CommentArea from "./CommentArea.vue"
export default {
  components:{CommentArea},
  data(){
    return{
    }
  },
  methods: {
    handleClick() {
      this.$router.push('/editor')
    },
  }
}
</script>

<style scoped>




</style>