import { gql } from 'apollo-server-express'

import assetSchema from './asset'
import keySchema from './key'
import messageSchema from './message'
import trackerSchema from './tracker'
import uploadSchema from './upload'
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
  keySchema,
  messageSchema,
  trackerSchema,
  uploadSchema,
  userSchema,
]
