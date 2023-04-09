<template>
     <div class="search-box">
    
    <form action="/search" method="get">
    
    <input type="text" id="search" name="q" placeholder="请输入您想检索的内容...">
    
    <button type="submit"><i class="fas fa-search"></i>搜索</button>
    
    <div class="search-box"></div>
        
    </form>
      
    </div>
    
    </template>
    
    <script>
    
    export default {
    
    data() {
    
    return {
    
    searchText: '',
    
    };
    
    },
    
    methods: {
    
    search() {
    
    // 进行搜索
    
    },
    
    },
    
    };
    
    </script>
    
    <style>
      
    .search-box {
      
      display: flex; 
      
      align-items: center; 
      
      margin: 20px 0; 
      
      background-color: #f5f5f5; 
      
      border-radius: 10px; 
      
      padding: 10px;
      
      }
      
      .search-box form {
      
      display: flex;
      
      align-items: center;
      
      justify-content: center;
      
      width: 100%;
      
      }
      
      .search-box input[type="text"] {
      
      flex: 1;
      
      border: none;
      
      background-color: white;
      
      padding: 8px;
      
      font-size: 16px;
      
      color: #333;
      
      }
      
      .search-box button[type="submit"] {
      
      background-color: transparent;
      
      border: none;
      
      font-size: 20px;
      
      color: #000000;
      
      cursor: pointer;
      
      transition: transform 0.2s;
      
      }
      
      .search-box button[type="submit"]:hover {
      
      transform: scale(1.2);
      
      }
      
      .search-box i {
      
      margin-right: 8px;
      
      }
      
    </style>