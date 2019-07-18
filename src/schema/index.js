import { gql } from 'apollo-server-express'

import assetSchema from './asset'
import messageSchema from './message'
import trackerSchema from './tracker'
import userSchema from './user'

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`

export default [
  linkSchema,
  assetSchema,
  messageSchema,
  trackerSchema,
  userSchema,
]
