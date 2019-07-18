import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    assets: [Asset!]
    asset(id: ID!): Asset
  }

  extend type Mutation {
    createAsset(type: String!, identifier: String!, serial: String): Asset!
    deleteAsset(id: ID!): Boolean!
    addTracker(id: ID!, serial: String!): Asset!
  }

  type Asset {
    id: ID!
    type: String!
    identifier: String!
    tracker: Tracker
  }
`
