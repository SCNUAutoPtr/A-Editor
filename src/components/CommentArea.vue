<template>
    <div>
      <div>
        <div class="comment_card">
          <!-- <div class="chat-header">评论区</div> -->
          <div class="chat-window">
            <!-- 添加滚动条 -->
              <el-scrollbar>
              <ul class="message-list">
                <div>
                  <span v-for="(comment) in com_list" :key="comment">
                    <div>
                      <!-- {{ comment }} -->
                      <div class="content_card">
                        <div class="body">
                          <span class="text">{{comment}}</span>
                            <div class="footer">
                        <div>
                          <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M16 10H16.01M12 10H12.01M8 10H8.01M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z"></path> </g></svg>18</div>
                          <div><svg fill="#000000" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-2.5 0 32 32"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path fill="#000000" d="M0 10.284l0.505 0.36c0.089 0.064 0.92 0.621 2.604 0.621 0.27 0 0.55-0.015 0.836-0.044 3.752 4.346 6.411 7.472 7.060 8.299-1.227 2.735-1.42 5.808-0.537 8.686l0.256 0.834 7.63-7.631 8.309 8.309 0.742-0.742-8.309-8.309 7.631-7.631-0.834-0.255c-2.829-0.868-5.986-0.672-8.686 0.537-0.825-0.648-3.942-3.3-8.28-7.044 0.11-0.669 0.23-2.183-0.575-3.441l-0.352-0.549-8.001 8.001zM1.729 10.039l6.032-6.033c0.385 1.122 0.090 2.319 0.086 2.334l-0.080 0.314 0.245 0.214c7.409 6.398 8.631 7.39 8.992 7.546l-0.002 0.006 0.195 0.058 0.185-0.087c2.257-1.079 4.903-1.378 7.343-0.836l-13.482 13.481c-0.55-2.47-0.262-5.045 0.837-7.342l0.104-0.218-0.098-0.221-0.031 0.013c-0.322-0.632-1.831-2.38-7.498-8.944l-0.185-0.215-0.282 0.038c-0.338 0.045-0.668 0.069-0.981 0.069-0.595 0-1.053-0.083-1.38-0.176z"> </path> </g></svg>7</div>
                          <div><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" fill="#323232"></path> <path opacity="0.1" d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" fill="#323232"></path> <path opacity="0.1" d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" fill="#323232"></path> <path d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" stroke-width="2"></path> <path d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" stroke-width="2"></path> <path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" stroke-width="2"></path> <path d="M8.7207 10.6397L15.0001 7.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.70605 13.353L15 16.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>2</div>
                        </div>
                          </div>
                      </div></div>
                    </div>
                  </span>
                </div>
              </ul>
            </el-scrollbar>
            </div>
  
            <div class="chat-input">
                <input id="content" type="text" class="message-input" @keyup.enter="sendComment(); empty();" placeholder="Type your message here">
                <button class="send-button" @click="sendComment(); empty();">
                  <div class="svg-wrapper" style="float: left;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                  </div>
                  <div style="float:right">Send</div>
                </button>
            </div>
          </div>
  
      </div>
    </div>
  </template>
  
<script>
  export default {
    data(){
      return{
        com_list:[],
      }
    },
    methods: {
      sendComment(){
        var cont = document.getElementById("content").value
        // 添加评论
        if (cont !== ""){
            this.com_list.push(cont);
        }
      },
      empty(){
        // 每次发送评论后清空输入框
        document.getElementById("content").value=""
      }
    }
  }
  </script>
  
  <style scoped>
  /* 评论框 */
  .comment_card {
  width: 22%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 26px;
  overflow: hidden;
  /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); */
  height: 60%;
  float: right;
  margin:20px;
  
  }
  
  .chat-header {
  background-color: #333;
  color: #fff;
  padding: 10px;
  font-size: 18px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  }
  
  .chat-window {
  height: 80vh;
  overflow-y: scroll;
  
  }
  .chat-window::-webkit-scrollbar {
    display: none;
  }
  
  .message-list {
  list-style: none;
  margin: 0;
  padding: 0;
  scrollbar-width: none;
  
  }
  
  .chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ccc;
  background-color: #f5f5f5;
  }
  
  .message-input {
  flex: 1;
  margin-right: 8px;
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 5px;
  font-size: 14px;
  }
  
  .send-button {
  border: none;
  outline: none;
  background-color: #333;
  color: #fff;
  font-size: 14px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  transition:background-color 0.5s,box-shadow 0.2s,color 0.4s;
  
  }
  
  .send-button:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  }
  
  .svg-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    margin-right: 0.6em;
  }
  .send-button svg {
    width: 18px;
    height: 18px;
    fill: white;
    transition: all 0.4s;
  }
  .send-button:hover svg {
    transform: rotate(45deg);
  }
  
  
  /* 评论区的内容 */
  .content_card {
  position: relative;
  background-color: #f5f5f5;
  padding: 1em;
  z-index: 5;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;border-radius: 10px;
  /* max-width: 300px; */
  transition: 200ms ease-in-out;
  width: 84%;
  height: 60px;
  margin: 20px auto;
  }
  
  .username {
  color: #C6E1ED;
  font-size: 0.85em;
  font-weight: 600;
  }
  
  .body {
  display: flex;
  flex-direction: column;
  }
  
  .body .text {
  margin: 0 10px 0 0;
  white-space: pre-line;
  color: #000;
  font-size: 1.1em;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 4px;
  }
  
  .footer {
  position: relative;
  width: 100%;
  color: #9fa4aa;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  margin-top: 20px;
  }
  
  .footer div {
  margin-right: 1rem;
  height: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  }
  
  .footer svg {
  margin-right: 4px;
  height: 100%;
  stroke: #9fa4aa;
  }
  
  .viewer span {
  height: 20px;
  width: 20px;
  background-color: rgb(28, 117, 219);
  margin-right: -6px;
  border-radius: 50%;
  border: 1px solid #fff;
  display: grid;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 8px;
  color: #fff;
  padding: 2px;
  }
  
  .viewer span svg {
  stroke: #fff;
  }
  
  
  
  
  </style>