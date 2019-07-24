import { GraphQLDateTime } from 'graphql-iso-date'

import assetResolvers from './asset'
import messageResolvers from './message'
import trackerResolvers from './tracker'
import uploadResolvers from './upload'
import userResolvers from './user'

const customScalarResolver = {
  Date: GraphQLDateTime,
}

export default [
  customScalarResolver,
  assetResolvers,
  messageResolvers,
  trackerResolvers,
  uploadResolvers,
  userResolvers,
]
