const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('database', 'root','password',{
    host : "localhost", 
    dialect : "mysql",
    define : {
        freezeTableName : true,
    }
});

// 储存历史版本的表
const History = sequelize.define('History', {
    // Model attributes are defined here
      ID: {
      type: Datatypes.UUID,
      defaultValue: Datatypes.UUIDV4,
      allowNull: false,
    },
  ArticleId : {
      type: Datatypes.UUID,
      references: {
        model: 'Article',
        key: 'articleID',
      }
  },
    author : {
      type : Datatypes.STRING,
      allowNull : false,
    },
    versiontitle : {
      type : Datatypes.STRING,
      allowNull : false,
    },
    cotent : {
      type : Datatypes.STRING,  
      allowNull : false,
    },
  },
  {
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  }
  );


  // 把文章和历史版本关联起来
  Article.hasMany(ArticleVersion);
  ArticleVersion.belongsTo(Article);
  


    // 导出History
  module.exports = History;
