const { Sequelize, DataTypes } = require("sequelize");

(async () => {
  let sequelize = new Sequelize("test", "root", "123456", {
    host: "localhost",
    dialect: "mysql",
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });

  // define Model
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      job: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  //
  await sequelize.sync({ force: true });

  // add
  // const tony = await User.create({
  //   name: "tony",
  //   job: "test",
  // });

  // console.log(tony.toJSON());

  // // update
  // tony.name = "tony222";
  // await tony.save();
  // console.log(tony.toJSON());

  // select
  const u = await User.findOne({
    where: {
      name: "tony222",
    },
  });
  console.log(u.toJSON());

  // del
  // const res = await User.destroy({
  //   where: {
  //     id: 1,
  //   },
  // });
  // console.log(res);
})();
