import { gql } from 'apollo-server-express'

import assetSchema from './asset'
import userSchema from './user'
import messageSchema from './message'

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

export default [linkSchema, assetSchema, userSchema, messageSchema]
