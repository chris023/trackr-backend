import seedUsers from './Users'

const seed = models => {
  seedUsers(new Date(), models)
}

export default seed
