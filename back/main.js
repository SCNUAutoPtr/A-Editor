const express = require('express');
const app = express();
const {History} = require('./server.js');
const {Sequelize} = require('sequelize');

const bodyParser = require('body-parser');
const app1 = bodyParser.urlencoded({ extended: false });
const mysql = require("mysql");
const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "******",
    database: "test_db",
  });



app.put('back/server.js',async(req,res)=>{
    const {id}  = req.params
    const {content,author,versiontitle}= req.body

    try {
        // 找到对应的文章
        const article =  await Article.findbyPk(id)
        if (!article) {
            return res.status(404).json({
                message: 'Article not found'
            })
        }
        // 创建新的版本
        const newVersion = await History.create({
            content: content,
            author : author,
            versiontitle : versiontitle,
        })
        res.json(newVersion)
    }
    catch (error){
        console.error(error);
            res,status(500).json({
                message: 'Server error'
            });
        }

   
})  


//提交以及更新文章内容

  
  app1.post('/submit/', (req, res) => {
    const htmlData = req.body.htmldata;
    const id = req.body.id;
    const sql = 'INSERT INTO html_data (null,id,html_data) VALUES (id,id_f,html_data);'
  
  
    db.query(sql, htmlData, (err, result) => {
      if (err) throw err;
      return res.send({ state: 0, message: err });
      // console.log('插入数据库成功');
      return res.send({ state: 1, message: '插入数据库成功' });
    });
  });
  
  
  app1.post('/update/', (req, res) => {
    const htmlData = req.body.htmldata;
    const id = req.body.id;
    const sql = 'UPDATE html_data set html_data = htmldata WHERE id_f = id;'
  
  
    db.query(sql, htmlData, (err, result) => {
      if (err) throw err
      return res.send({ state: 0, message: err });
      // console.log('更新成功');
      return res.send({ state: 1, message: '更新成功' });
    });
  });
  

