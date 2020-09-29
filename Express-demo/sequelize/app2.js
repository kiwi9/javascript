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

  await sequelize.sync({ force: true });

  const tony = await User.create({
    name: "tony",
    job: "test",
  });

  console.log(tony.toJSON());
})();
