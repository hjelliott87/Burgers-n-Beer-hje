module.exports = function(sequelize, DataTypes) {
    var Resturants = sequelize.define("Restaurants", {
      // Giving the Resturant model a name of type STRING
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50]
        }
      },
      category: {
        type: DataTypes.STRING,
        defaultValue: "Restaurant"
      },
      hh: {
        type: DataTypes.TEXT,
      },
      time: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50]
        }
      },
      rating: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 10]
        }
      },
      review: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    });
    return Resturants;
  };
