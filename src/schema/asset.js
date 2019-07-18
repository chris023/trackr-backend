import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    assets: [Asset!]
    asset(id: ID!): Asset
  }

  type Asset {
    id: ID!
    type: String!
    tracker: Tracker
  }
`
