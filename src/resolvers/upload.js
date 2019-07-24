import aws from 'aws-sdk'
import uuid from 'uuidv4'
import s3fileupload from '../models/s3fileupload'

const s3 = new aws.S3({
  signatureVersion: 'v4',
  region: 'us-east-2',
  accessKeyId: process.env.S3_ID,
  secretAccessKey: process.env.S3_SECRET,
})

const Bucket = 'theotracker'

export default {
  Query: {
    uploads: async (parent, args, { models }) => {
      return await models.S3FileUpload.findAll()
    },
    upload: async (parent, { s3Key }, { models }) => {
      return await models.S3FileUpload.findByPk(s3Key)
    },
    getUploadUrl: async (parent, { s3Key }, context) => {
      return await s3.getSignedUrl('getObject', {
        Bucket,
        Key: s3Key,
        Expires: 30, //seconds,
      })
    },
  },
  Mutation: {
    singleUpload: async (parent, { file }, { models }) => {
      const { filename, stream, mimetype } = await file

      const id = uuid()

      const params = {
        Bucket,
        Key: id,
        Body: stream,
      }

      await s3.upload(params, (err, data) => {
        console.log(err, data)
      })

      const s3fileupload = await models.S3FileUpload.create({
        s3Key: id,
        filename,
      })

      return s3fileupload
    },
  },
}
