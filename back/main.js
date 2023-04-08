const express = require('express');
const app = express();
const {History} = require('./server.js');
const {Sequelize} = require('sequelize');


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

