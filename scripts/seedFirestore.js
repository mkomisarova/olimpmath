import admin from 'firebase-admin'
import serviceAccount from './serviceAccount.json' with { type: 'json' }
import pirmSolvedExamplesFromPdf from './pirmrezinatajiPdfSolvedExamples.js'
import dirichletSolvedExamplesFromPdf from './dirichletPdfSolvedExamples.js'
import virknesSolvedExamplesFromPdf from './virknesPdfSolvedExamples.js'
import skaitlapierakstsSolvedExamplesFromPdf from './skaitlapierakstsPdfSolvedExamples.js'
import skaitlapierakstsTopicDoc from './skaitlapierakstsTopicSeed.js'
import induktiviSpriedumiTopicSeed from './induktiviSpriedumiTopicSeed.js'
import matematiskasIndukcijasMetodeTopicSeed from './matematiskasIndukcijasMetodeTopicSeed.js'
import piemersPretpiemersTopicSeed from './piemersPretpiemersTopicSeed.js'
import polinomiTopicSeed from './polinomiTopicSeed.js'
import invariantuMetodeTopicSeed from './invariantuMetodeTopicSeed.js'
import { quizQuestionsByTopic } from './quizQuestionsSeedData.js'
import { additionalNewTopicQuizQuestionsByTopic } from './additionalNewTopicQuizSeed.js'
import { newInvariantiExamples, newVirknesExamples } from './appendExamplesSeedData.js'
import nevienadibuPieradisanaTopicSeed from './nevienadibuPieradisanaTopicSeed.js'
import { kongruencesQuiz, kongruencesTopicData } from './kongruencesSeedData.js'
import { skaitlaPierakstsPapildinajumi } from './skaitlapierakstsPapildinajumiSeedData.js'
import {
  vienadojumiVeselosSkaitlosQuiz,
  vienadojumiVeselosSkaitlosTopicData,
  vienadojumiVeselosSkaitlosTopicId,
} from './vienadojumiVeselosSkaitlosSeedData.js'

const newTopicIdsForExtraQuiz = [
  'induktivi-spriedumi',
  'matematiskas-indukcijas-metode',
  'piemers-pretpiemers',
  'polinomi',
  'invariantu-metode',
]

const topicsToSeed = [
  { id: 'skaitlapieraksts', data: skaitlapierakstsTopicDoc },
  { id: 'induktivi-spriedumi', data: induktiviSpriedumiTopicSeed },
  { id: 'matematiskas-indukcijas-metode', data: matematiskasIndukcijasMetodeTopicSeed },
  { id: 'piemers-pretpiemers', data: piemersPretpiemersTopicSeed },
  { id: 'polinomi', data: polinomiTopicSeed },
  { id: 'invariantu-metode', data: invariantuMetodeTopicSeed },
]

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
  const topicOrder = [
    'dalamiba',
    'pirmrezinataji',
    'dirichlet',
    'virknes',
    'skaitlapieraksts',
    'induktivi-spriedumi',
    'matematiskas-indukcijas-metode',
    'piemers-pretpiemers',
    'polinomi',
    'invariantu-metode',
  ]
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

/** Adds q7–q16 (or any listed ids) only for ids not already present — does not overwrite. */
async function seedNewExamplesAndTopic(db) {
  const virknesRef = db.collection('topics').doc('virknes')
  const virknesDoc = await virknesRef.get()
  const existingExamples = virknesDoc.data()?.solvedExamples || []
  await virknesRef.update({
    solvedExamples: [...existingExamples, ...newVirknesExamples],
  })
  console.log('Appended examples ex10–ex12 to virknes')

  const invariantiRef = db.collection('topics').doc('invariantu-metode')
  const invariantiDoc = await invariantiRef.get()
  const existingInvarianti = invariantiDoc.data()?.solvedExamples || []
  await invariantiRef.update({
    solvedExamples: [...existingInvarianti, ...newInvariantiExamples],
  })
  console.log('Appended examples ex18–ex22 to invariantu-metode')

  await db.collection('topics').doc('nevienadibu-pieradisana').set(nevienadibuPieradisanaTopicSeed, { merge: false })
  console.log('Topic document set: nevienadibu-pieradisana')
}

async function seedKongruences(db) {
  await db.collection('topics').doc('kongruences').set(kongruencesTopicData, { merge: false })
  console.log('Topic document set: kongruences')
  for (const q of kongruencesQuiz) {
    await db.collection('topics').doc('kongruences').collection('quizQuestions').doc(q.id).set(q)
  }
  console.log('Quiz questions seeded for: kongruences')
}

async function seedVienādojumiVeselosSkaitļos(db) {
  await db.collection('topics').doc(vienadojumiVeselosSkaitlosTopicId).set(vienadojumiVeselosSkaitlosTopicData, { merge: false })
  console.log(`Topic document set: ${vienadojumiVeselosSkaitlosTopicId}`)
  for (const q of vienadojumiVeselosSkaitlosQuiz) {
    await db
      .collection('topics')
      .doc(vienadojumiVeselosSkaitlosTopicId)
      .collection('quizQuestions')
      .doc(q.id)
      .set(q)
  }
  console.log(`Quiz questions seeded for: ${vienadojumiVeselosSkaitlosTopicId}`)
}

async function seedSkaitlaPierakstsPapildinajumi(db) {
  const ref = db.collection('topics').doc('skaitlapieraksts')
  const snap = await ref.get()
  const existing = snap.data()?.solvedExamples || []
  await ref.update({
    solvedExamples: [...existing, ...skaitlaPierakstsPapildinajumi],
  })
  console.log('Appended solved examples to skaitlapieraksts')
}

async function seedNewTopicQuizzes(db) {
  for (const topicId of newTopicIdsForExtraQuiz) {
    const questions = additionalNewTopicQuizQuestionsByTopic[topicId]
    if (!questions?.length) {
      console.warn(`seedNewTopicQuizzes: no data for ${topicId}`)
      continue
    }
    const existingSnap = await db.collection('topics').doc(topicId).collection('quizQuestions').get()
    const existingIds = new Set(existingSnap.docs.map((d) => d.id))
    for (const question of questions) {
      if (existingIds.has(question.id)) {
        continue
      }
      await db.collection('topics').doc(topicId).collection('quizQuestions').doc(question.id).set(question)
    }
    console.log(`Quiz questions seeded for: ${topicId}`)
  }
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
    await seedNewTopicQuizzes(db)
    await seedNewExamplesAndTopic(db)
    await seedKongruences(db)
    await seedVienādojumiVeselosSkaitļos(db)
    await seedSkaitlaPierakstsPapildinajumi(db)

    console.log('Solved examples updated successfully')
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

seed()
