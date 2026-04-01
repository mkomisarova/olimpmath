import admin from 'firebase-admin'
import serviceAccount from './serviceAccount.json' with { type: 'json' }
import seedTopic from '../src/data/seedTopic.js'

async function seed() {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })

    const db = admin.firestore()

    await db.collection('topics').doc('dalamiba').set(seedTopic)

    console.log('Topic seeded successfully')
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

seed()
