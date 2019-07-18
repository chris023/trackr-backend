const asset = (sequelize, DataTypes) => {
  const Asset = sequelize.define('asset', {
    type: {
      type: DataTypes.Array(DataTypes.ENUM('crate')),
    },
    id: {
      type: DataTypes.STRING,
    },
  })

  Asset.associate = models => {
    Asset.hasOne(models.tracker)
  }

  return Asset
}

export default asset
