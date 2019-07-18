const tracker = (sequelize, DataTypes) => {
  const Tracker = sequelize.define('tracker', {
    serial: {
      type: DataTypes.STRING,
    },
    latitude: {
      type: DataTypes.DOUBLE,
    },
    longitude: {
      type: DataTypes.DOUBLE,
    },
    battery: {
      type: DataTypes.DOUBLE,
    },
  })

  Tracker.associate = models => {
    Tracker.belongsTo(models.Asset)
  }

  return Tracker
}

export default tracker
