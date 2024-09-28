module.exports = (sequelize, Sequelize) => {
    const Shop = sequelize.define("shop", {
      address: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.STRING
      }
    })
    
    return Shop;
  }