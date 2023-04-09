const express = require('express');
const app = express();
const {History} = require('./server.js');
const {Sequelize} = require('sequelize');

const bodyParser = require('body-parser');
const app1 = bodyParser.urlencoded({ extended: false });



// 创建历史版本
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
            res.status(500).json({
                message: 'Server error'
            });
        }

   
})  

//删除历史版本
app.delete('back/server.js', async(req,res) =>{
    const {id1} = req.params
   
    try {
        //找到对应文章
        const articleid = await Article.findbyPk(id1)
        if (!articleid) {
            return res.status(404).json({
                message : "article not found"
            })
        }
        await History.destroy({
            where : {
                ID : id1
            }
        })
        
    } catch (err) {
        console.error(err)
        res.status(500).json({
            message : 'serve err'
        })
    }

})
  //查找历史版本
app.post('back/server.js' , async(req,res)=>{
      const {id2} = req.params
      try {
          const searcharticle = await Article.findbyPk(id2)
          if (!searcharticle) {
              return res.status(404).json({
                  message : "article not found"
              })
          }
          const resultarticle  = await History.findall({
              where : {
                  ID : id2
              }
          }) 
          res.json(resultarticle)
          
      } catch (error) {
          console.error(err)
          res.status(500).json({
              message : 'serve err'
          })
      }
})


//提交以及更新文章内容

  
app1.post('back/server.js', async(req, res) => {
  const htmlData = req.body.htmldata;
  const id = req.body.id;
  const new_data = await html_data.create({
    id: null,
    articleid : id,
    html_data : htmldata,
})

    if (!new_content)
    return res.send({ state: 0, message: err });
    // console.log('插入数据库成功');
    return res.send({ state: 1, message: '插入数据库成功' });
  });



app1.post('back/server.js', async(req, res) => {
  const htmlData = req.body.htmldata;
  const id = req.body.id;
  const update_data = await html_data.update({articleid:id,html_data:htmldata},
                                            {where :{id_f:id}});
                      

    if (! update_data)
    return res.send({ state: 0, message: err });
    // console.log('更新成功');
    return res.send({ state: 1, message: '更新成功' });
  });
  

