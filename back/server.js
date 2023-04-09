const {Sequelize, DataTypes} = require('sequelize');
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
  
/*
const htmldata = sequelize.define('htmldata', {
  id: {
    type: Datatypes.INTEGER,
    allowNull: true,
  },
  ArticleId: {
    type: Datatypes.INTEGER,
    allowNull: false,
  },
  html_data: {
    type: Datatypes.LONGTEXT,
    allowNull: false,
  },
});
*/
    


  // 存储文章信息的表
const article = sequelize.define('article', {
  ArticleId: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  html_data: {
    type: DataTypes.LONGTEXT,
    allowNull: false
  },
  article_author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  article_title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  article_category: {
    type: DataTypes.STRING,
    defaultValue: 'My article',
    allowNull: false
  },
  article_label: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'article',
  timestamps: true,
  createdAt: true,
  updatedAt: true
});

// 检擦文章信息的表避免冲突
(async () => {
  await article.sync();
})();

// 导出History
//暴露article
module.exports = History, article;