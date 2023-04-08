const express = require('express');
const app = express();
const {History} = require('./server.js');
const {Sequelize} = require('sequelize');

const bodyParser = require('body-parser');
const app1 = bodyParser.urlencoded({ extended: false });




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

  
  app1.post('/submit/', async(req, res) => {
    const htmlData = req.body.htmldata;
    const id = req.body.id;
    const new_data = await html_data.create({
      id: null,
      id_f : id,
      html_data : htmldata,
  })
  
      if (!new_content);
      return res.send({ state: 0, message: err });
      // console.log('插入数据库成功');
      return res.send({ state: 1, message: '插入数据库成功' });
    });
  
  
  
  app1.post('/update/', async(req, res) => {
    const htmlData = req.body.htmldata;
    const id = req.body.id;
    const update_data = await html_data.update({id_f:id,html_data:htmldata},
                                              {where :{id_f:id}});
                        
  
      if (! update_data)
      return res.send({ state: 0, message: err });
      // console.log('更新成功');
      return res.send({ state: 1, message: '更新成功' });
    });

  

