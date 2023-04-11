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
      type: DataTypes.UUID,
      defaultValue: Datatypes.UUIDV4,
      allowNull: false,
    },
  ArticleId : {
      type: DataTypes.UUID,
      references: {
        model: 'Article',
        key: 'articleID',
      }
  },
    author : {
      type : DataTypes.STRING,
      allowNull : false,
    },
    versiontitle : {
      type : DataTypes.STRING,
      allowNull : false,
    },
    cotent : {
      type : DataTypes.STRING,  
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
  



  // 存储文章信息的表
const Article  = sequelize.define(' Article ', {
  ArticleId: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  html_data: {
    type: DataTypes.LONGTEXT,
    // type: DataTypes.BLOB('long'),
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
    allowNull: true
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
  await Article.sync();
})();

// 导出 History
// 暴露 article
module.exports = {History,Article};