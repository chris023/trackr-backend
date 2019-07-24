import uuid from 'uuidv4'

const createTrackers = async models => {
  const numTrackersToGenerate = 25

  for (let i = 0; i < numTrackersToGenerate; i++) {
    await models.Tracker.create({
      serial: uuid(),
      latitude: 29.25 + Math.random() * 2,
      longitude: -93 + Math.random() * 2,
      battery: (Math.random() * 100).toFixed(2),
    })
  }
}

export default createTrackers
