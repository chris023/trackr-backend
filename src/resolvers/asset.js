export default {
  Query: {
    assets: async (parent, args, { models }) => {
      return await models.Asset.findAll()
    },
    asset: async (parent, { id }, { models }) => {
      return await models.Asset.findById(id)
    },
  },

  Mutation: {
    createAsset: async (parent, { identifier, type }, { models }) => {
      const asset = await models.Asset.create({
        identifier,
        type,
      })

      return asset
    },

    deleteAsset: async (parent, { id }, { models }) => {
      return await models.Asset.destroy({ where: { id } })
    },
  },

  Asset: {
    tracker: async (tracker, args, { models }) => {
      return (
        (await models.Tracker.findOne({
          where: {
            trackerId: tracker.id,
          },
        })) || null
      )
    },
  },
}
