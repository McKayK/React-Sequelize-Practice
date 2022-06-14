const { default: axios } = require("axios");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "postgres://lccnnxlgqsxkal:0a01af33881220ca2d9bb4ef696b602e71a937bc45c176edab2dfff034d0b822@ec2-34-198-186-145.compute-1.amazonaws.com:5432/d1cusffnv7c28v",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = {
  getStuff: (req, res) => {
    sequelize
      .query(
        `
        SELECT * FROM test
    `
      )
      .then((dbRes) => {
        console.log(dbRes[0]);
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => console.log(err));
  },
};
