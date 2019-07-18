import { GraphQLDateTime } from 'graphql-iso-date'

import userResolvers from './user'
import messageResolvers from './message'
import assetResolvers from './asset'

const customScalarResolver = {
  Date: GraphQLDateTime,
}

export default [
  customScalarResolver,
  assetResolvers,
  userResolvers,
  messageResolvers,
]
