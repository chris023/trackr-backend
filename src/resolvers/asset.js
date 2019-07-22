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

        await models.Tracker.upsert(
          { id: tracker.dataValues.id, assetId: asset.dataValues.id },
          { returning: true },
        )
      }

      return asset
    },

    deleteAsset: async (parent, { id }, { models }) => {
      return await models.Asset.destroy({ where: { id } })
    },

    addTracker: async (asset, { id, serial }, { models }) => {
      const tracker =
        (await models.Tracker.findOne({ where: { serial } })) ||
        (await models.Tracker.create({
          serial,
        }))

      await models.Tracker.upsert(
        { assetId: asset.id, id: tracker.dataValues.id },
        { returning: true },
      )

      return await models.Asset.findByPk(id)
    },
  },

  Asset: {
    tracker: async (asset, args, { models }) => {
      return (
        (await models.Tracker.findOne({
          where: {
            assetId: asset.id,
          },
        })) || null
      )
    },
  },
}
