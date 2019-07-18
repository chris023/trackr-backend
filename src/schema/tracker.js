import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    trackers: [Tracker!]
    tracker(id: ID!): Tracker
  }

  extend type Mutation {
    createTracker(serial: String!): Tracker!
    updateTracker(
      serial: String!
      latitude: String!
      longitude: String!
      battery: String!
    ): Tracker!
    deleteTracker(id: ID!): Tracker!
  }

  type Tracker {
    id: ID!
    serial: String!
    longitude: String
    latitude: String
    battery: Float
    asset: Asset
  }
`
