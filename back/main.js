const express = require('express');
const app = express();
const {History,Article} = require('./server.js');
const bodyParser = require('body-parser');
const { version } = require('core-js');
const app1 = bodyParser.urlencoded({ extended: false });



// 创建历史版本
app.put('/back/server.js',async(req,res)=>{
    const {id}  = req.params
    const {content,author,versiontitle}= req.body

    try {
        // 找到对应的文章
        const article =  await Article.findByPk(id)
        if (!article) {
            return res.status(404).json({
                message: 'Article not found'
            })
        }
        // 创建新的版本
        const newVersion = await History.createHistorys({
            content: content,
            author : author,
            versiontitle : versiontitle,
        })

        res.send(newVersion)
    }
    catch (error){
        console.error(error);
            res.status(500).json({
                message: 'Server error'
            });
        }

   
})  

//删除历史版本
app.delete('/back/server.js', async(req,res) =>{
    const {id1} = req.params
   
    try {
        //找到对应文章
        const articleid = await History.findByPk(id1)
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
  //查找全部历史版本,接受的是文章的id2
  app.get('/back/server.js' , async(req,res)=>{
        const {id2 , id3} = req.params
    try {
        const version = await Article.findByPk(id3)
        if (id2 != null) { // 返回特定某一历史版本
            const history = await History.findAll({
                where : {
                    ID : id2,
                    ArticleId : id3
                }
            })
            res.send(history)
        }
        else{ //返回全部历史版本
            const versionarticle = await version.getHistorys({
                where : {
                    ArticleId : id3
                }
            })
            res.send(versionarticle)
        }
        
    } catch (error) {
        console.error(error)
        res.status(500).json({
            status : error,
            message : 'server error'
        })
    }
  })





//提交以及更新文章内容

  
app1.post('back/server.js', async(req, res) => {
    const htmldata = req.body.htmldata;
    const id = req.body.id;
    const new_data = await article.create({
        id: null,
        ArticleId: id,
        html_data: htmldata,
    })

        if (!new_content)
        return res.send({ state: 0, message: err });
        // console.log('插入数据库成功');
        return res.send({ state: 1, message: '插入数据库成功' });
    });



app1.post('back/server.js', async(req, res) => {
    const htmldata = req.body.htmldata;
    const id = req.body.id;
    const update_data = await article.update({html_data: htmldata},
                                            {where: {ArticleId: id}});
                      

    if (! update_data)
    return res.send({ state: 0, message: err });
    // console.log('更新成功');
    return res.send({ state: 1, message: '更新成功' });
  });
  

