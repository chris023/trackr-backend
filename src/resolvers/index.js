import { GraphQLDateTime } from 'graphql-iso-date'

import assetResolvers from './asset'
import fileResolvers from './file'
import messageResolvers from './message'
import trackerResolvers from './tracker'
import userResolvers from './user'

const customScalarResolver = {
  Date: GraphQLDateTime,
}

export default [
  customScalarResolver,
  assetResolvers,
  fileResolvers,
  messageResolvers,
  trackerResolvers,
  userResolvers,
]
