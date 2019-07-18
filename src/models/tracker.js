const tracker = (sequelize, DataTypes) => {
  const Tracker = sequelize.define('tracker', {
    latitude: {
      type: DataTypes.DOUBLE,
    },
    longitude: {
      type: DataTypes.DOUBLE,
    },
  })

  Tracker.associate = models => {
    Tracker.belongsTo(models.Asset)
  }

  return Tracker
}

export default tracker
