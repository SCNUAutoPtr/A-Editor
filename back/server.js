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

    // 导出History
    //暴露htmldata
  module.exports = History,htmldata;

