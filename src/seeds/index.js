import seedUsers from './Users'
import seedTrackers from './Trackers'

const seed = models => {
  seedUsers(models, new Date())
  seedTrackers(models)
}

export default seed
