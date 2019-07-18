const asset = (sequelize, DataTypes) => {
  const Asset = sequelize.define('asset', {
    type: {
      type: DataTypes.ENUM('crate'),
    },
    identifier: {
      type: DataTypes.STRING,
    },
  })

  Asset.associate = models => {
    Asset.hasOne(models.Tracker)
  }

  return Asset
}

export default asset
