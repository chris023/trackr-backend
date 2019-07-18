const tracker = (sequelize, DataTypes) => {
  const Tracker = sequelize.define('tracker', {
    history: {
      type: DataTypes.array,
    },
    latitude: {
      type: DataTypes.DOUBLE,
    },
    longitude: {
      type: DataTypes.DOUBLE,
    },
  })

  Tracker.associate = models => {
    Tracker.belongsTo(models.asset)
  }

  return Tracker
}

export default tracker
