export default {
  Query: {
    assets: async (parent, args, { models }) => {
      return await models.Assets.findAll()
    },
    asset: async (parent, { id }, { models }) => {
      return await models.Assets.findById(id)
    },
  },

  Asset: {
    tracker: async (tracker, args, { models }) => {
      return await models.Tracker.findAll({
        where: {
          trackerId: tracker.id,
        },
      })
    },
  },
}
