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
    createAsset: async (parent, { serial, identifier, type }, { models }) => {
      const asset = await models.Asset.create({
        identifier,
        type,
      })

      if (serial) {
        const tracker =
          (await models.Tracker.findOne({ where: { serial } })) ||
          (await models.Tracker.create({ serial }))

        await models.Asset.upsert(
          { id: asset.dataValues.id, trackerId: tracker.dataValues.id },
          { returning: true },
        )
      }

      return asset
    },

    deleteAsset: async (parent, { id }, { models }) => {
      return await models.Asset.destroy({ where: { id } })
    },

    addTracker: async (parent, { id, serial }, { models }) => {
      const tracker =
        (await models.Tracker.findOne({ where: { serial } })) ||
        (await models.Tracker.create({
          serial,
        }))

      await models.Asset.upsert(
        { id, trackerId: tracker.dataValues.id },
        { returning: true },
      )

      return await models.Asset.findByPk(id)
    },
  },

  Asset: {
    tracker: async (asset, args, { models }) => {
      console.log('here')
      return (
        (await models.Tracker.findOne({
          where: {
            id: asset.id,
          },
        })) || null
      )
    },
  },
}
