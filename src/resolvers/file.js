import aws from 'aws-sdk'

export default {
  Query: {
    uploads: (parent, args) => {},
  },
  Mutation: {
    singleUpload: (parent, { file, saveAs }) => {
      return file.then(file => {
        //Contents of Upload scalar: https://github.com/jaydenseric/graphql-upload#class-graphqlupload
        //file.stream is a node stream that contains the contents of the uploaded file
        //node stream api: https://nodejs.org/api/stream.html

        const s3 = new aws.S3({
          accessKeyId: process.env.S3_ID,
          secretAccessKey: process.env.S3_SECRET,
          region: 'us-east-2',
        })

        const params = {
          Bucket: 'theotracker',
          Key: 'some-key',
          Body: file.stream,
        }

        s3.upload(params, (err, data) => {
          console.log(err, data)
        })
        return file
      })
    },
  },
}
