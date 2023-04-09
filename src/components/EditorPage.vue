<template>
    <div>
      <button @click="handleClick">跳转到 Show 页面</button>

    <SearchLabel></SearchLabel>
    <CommentArea></CommentArea>

    </div>
  </template>
  
  <script>
  import SearchLabel from './SearchLabel.vue';
  import CommentArea from "./CommentArea.vue"
  export default {
    components:{SearchLabel,CommentArea},
    data(){
      return{
      }
    },
    methods: {
      handleClick() {
        this.$router.push('/show')
      }
    }
  }
  </script>
