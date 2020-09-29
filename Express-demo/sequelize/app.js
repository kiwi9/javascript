const { Sequelize, Model, DataTypes } = require("sequelize");

// 测试用，sqlite 内存模式
const sequelize = new Sequelize("sqlite::memory:");

// 模型定义的两种方式：1 继承Model
class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user",
  }
);

// 模型定义的两种方式：2 define
const Goods = sequelize.define("goods", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

(async () => {
  // 同步数据库
  await sequelize.sync();
  // 添加数据
  const tony = await User.create({
    username: "tony",
    age: 99,
  });

  const iphonex = await Goods.create({
    name: "iphone",
    price: 8666,
  });

  console.log(tony.toJSON());
  console.log(iphonex.toJSON());
})();
