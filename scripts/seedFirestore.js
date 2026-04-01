import admin from 'firebase-admin'
import serviceAccount from './serviceAccount.json' with { type: 'json' }
import pirmSolvedExamplesFromPdf from './pirmrezinatajiPdfSolvedExamples.js'
import dirichletSolvedExamplesFromPdf from './dirichletPdfSolvedExamples.js'
import virknesSolvedExamplesFromPdf from './virknesPdfSolvedExamples.js'
import skaitlapierakstsSolvedExamplesFromPdf from './skaitlapierakstsPdfSolvedExamples.js'
import skaitlapierakstsTopicDoc from './skaitlapierakstsTopicSeed.js'
import { quizQuestionsByTopic } from './quizQuestionsSeedData.js'

const topicsToSeed = [{ id: 'skaitlapieraksts', data: skaitlapierakstsTopicDoc }]

async function seedTopics(db) {
  for (const { id, data } of topicsToSeed) {
    await db.collection('topics').doc(id).set(data, { merge: false })
    console.log(`Topic document set: ${id}`)
  }
}

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
  await db.collection('topics').doc('skaitlapieraksts').update({
    solvedExamples: skaitlapierakstsSolvedExamplesFromPdf,
  })
  console.log('Updated solvedExamples for skaitlapieraksts')
}

async function seedQuizQuestions(db) {
  const topicOrder = ['dalamiba', 'pirmrezinataji', 'dirichlet', 'virknes', 'skaitlapieraksts']
  for (const topicId of topicOrder) {
    const questions = quizQuestionsByTopic[topicId]
    for (const question of questions) {
      await db.collection('topics').doc(topicId).collection('quizQuestions').doc(question.id).set(question)
    }
    console.log(`Quiz questions seeded for: ${topicId}`)
  }
}

async function updatePirmrezinatajiQuizQ1(db) {
  await db.collection('topics').doc('pirmrezinataji').collection('quizQuestions').doc('q1').update({
    question: 'Kādi ir skaitļa $20$ dažādie pirmreizinātāji?',
    options: ['$1; 2; 4; 5; 10; 20$', '$2$ un $5$', '$2; 2$ un $5$', '$4$ un $5$'],
    correct: 1,
  })
  console.log('Updated pirmrezinataji quizQuestions q1')
}

async function seed() {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })

    const db = admin.firestore()

    await seedTopics(db)
    await updateSolvedExamples(db)
    await seedQuizQuestions(db)
    await updatePirmrezinatajiQuizQ1(db)

    console.log('Solved examples updated successfully')
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

seed()
