import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    uploads: [File]
    upload(s3Key: String!): String!
    getUploadUrl(s3Key: String!): String!
  }

  extend type Mutation {
    singleUpload(file: Upload!, saveAs: String): File!
  }

  type File {
    s3Key: String!
    filename: String!
  }
`
