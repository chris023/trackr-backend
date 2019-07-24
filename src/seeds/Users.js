const createUsersWithMessages = async (models, date) => {
  await models.User.create({
    username: 'test123',
    email: 'test123@tracker.com',
    password: 'testtest',
    role: 'ADMIN',
  })

  await models.User.create({
    username: 'theo123',
    email: 'theo123@gmail.com',
    password: 'theotheo',
  })
}

export default createUsersWithMessages
