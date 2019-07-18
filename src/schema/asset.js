import { gql } from 'apollo-server-express'
import tracker from '../models/tracker'

export default gql`
  extend type Query {
    assets: [Asset!]
    asset(id: ID!): Asset
  }

  extend type Mutation {}

  type Asset {
    id: ID!
    type: String!
    tracker: Tracker
  }
`
