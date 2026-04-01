import admin from 'firebase-admin'
import serviceAccount from './serviceAccount.json' with { type: 'json' }
import pirmSolvedExamplesFromPdf from './pirmrezinatajiPdfSolvedExamples.js'
import dirichletSolvedExamplesFromPdf from './dirichletPdfSolvedExamples.js'
import virknesSolvedExamplesFromPdf from './virknesPdfSolvedExamples.js'

async function updateSolvedExamples(db) {
  await db.collection('topics').doc('pirmrezinataji').update({
    solvedExamples: pirmSolvedExamplesFromPdf,
  })
  console.log('Updated solvedExamples for pirmrezinataji')
  await db.collection('topics').doc('dirichlet').update({
    solvedExamples: dirichletSolvedExamplesFromPdf,
  })
  console.log('Updated solvedExamples for dirichlet')
  await db.collection('topics').doc('virknes').update({
    solvedExamples: virknesSolvedExamplesFromPdf,
  })
  console.log('Updated solvedExamples for virknes')
}

async function seed() {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })

    const db = admin.firestore()

    await updateSolvedExamples(db)

    console.log('Solved examples updated successfully')
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

seed()
