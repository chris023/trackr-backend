import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    trackers: [Tracker!]
    tracker(id: ID!): Tracker
  }

  type Tracker {
    id: ID!
    longitude: String!
    latitude: String!
    asset: Asset
  }
`
