import { GraphQLDateTime } from 'graphql-iso-date'

import assetResolvers from './asset'
import keyResolvers from './key'
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
  keyResolvers,
  messageResolvers,
  trackerResolvers,
  uploadResolvers,
  userResolvers,
]
