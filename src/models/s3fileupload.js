const s3fileupload = (sequelize, DataTypes) => {
  const S3FileUpload = sequelize.define('s3fileupload', {
    s3Key: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    filename: {
      type: DataTypes.STRING,
    },
  })

  S3FileUpload.associate = models => {
    S3FileUpload.belongsTo(models.User)
  }

  return S3FileUpload
}

export default s3fileupload
