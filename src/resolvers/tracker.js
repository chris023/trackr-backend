export default {
  Query: {
    trackers: async (parent, args, { models }) => {
      return await models.Tracker.findAll()
    },
    tracker: async (parent, { id }, { models }) => {
      return await models.Tracker.findById(id)
    },
  },

  Mutation: {
    createTracker: async (parent, { serial }, { models }) => {
      const tracker = await models.Tracker.create({
        serial,
      })

      return tracker
    },

    updateTracker: async (
      parent,
      { serial, latitude, longitude, battery },
      { models },
    ) => {
      const tracker = await models.Tracker.update(
        { latitude, longitude, battery },
        { where: { serial } },
      )
    },

    deleteTracker: async (parent, { id }, { models }) => {
      return await models.Tracker.destroy({ where: { id } })
    },
  },

  Tracker: {
    asset: async (tracker, args, { models }) => {
      return await models.Asset.findOne({
        where: {
          id: tracker.assetId,
        },
      })
    },
  },
}
