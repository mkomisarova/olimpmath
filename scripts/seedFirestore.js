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
import { sversanasQuiz, sversanasTopicData } from './sversanasUzdevumiSeedData.js'
import {
  kvadrataAtdalisanaTopicData,
  kvadrataMovedExampleIds,
  pilnoKvadratuSectionTitle,
} from './kvadrataAtdalisanaSeedData.js'
import {
  videjaisAritmetiskaisGeometriskaisQuiz,
  videjaisAritmetiskaisGeometriskaisTopicData,
} from './videjaisAritmetiskaisGeometriskaisSeedData.js'
import { virknesNewExamples, virknesNewSections } from './virknesPapildinajumiSeedData.js'
import { amGmQuiz, amGmTopicData } from './amGmTopicSeedData.js'

const AMGM_SECTION_TITLE =
  'Nevienādība starp vidējo aritmētisko un vidējo ģeometrisko (AM-GM)'

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

async function updateSolvedExamplesForTopic(db, topicId, solvedExamples) {
  const ref = db.collection('topics').doc(topicId)
  const snap = await ref.get()
  const existing = snap.data()?.solvedExamples || []
  if (existing.length === solvedExamples.length) {
    console.log(`solvedExamples already up to date for ${topicId}, skipping`)
    return
  }
  await ref.update({ solvedExamples })
  console.log(`Updated solvedExamples for ${topicId}`)
}

async function updateSolvedExamples(db) {
  await updateSolvedExamplesForTopic(db, 'pirmrezinataji', pirmSolvedExamplesFromPdf)
  await updateSolvedExamplesForTopic(db, 'dirichlet', dirichletSolvedExamplesFromPdf)
  await updateSolvedExamplesForTopic(db, 'virknes', virknesSolvedExamplesFromPdf)
  await updateSolvedExamplesForTopic(db, 'skaitlapieraksts', skaitlapierakstsSolvedExamplesFromPdf)
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
    if (!quizQuestionsByTopic[topicId]) {
      console.warn('No quiz data found for topic:', topicId)
      continue
    }
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
  const virknesAlreadySeeded = existingExamples.some((e) => e.id === 'ex10')
  if (virknesAlreadySeeded) {
    console.log('[seedNewExamplesAndTopic] Already seeded, skipping.')
  } else {
    await virknesRef.update({
      solvedExamples: [...existingExamples, ...newVirknesExamples],
    })
    console.log('Appended examples ex10–ex12 to virknes')
  }

  const invariantiRef = db.collection('topics').doc('invariantu-metode')
  const invariantiDoc = await invariantiRef.get()
  const existingInvarianti = invariantiDoc.data()?.solvedExamples || []
  const invariantiAlreadySeeded = existingInvarianti.some((e) => e.id === 'ex18')
  if (invariantiAlreadySeeded) {
    console.log('[seedNewExamplesAndTopic] Already seeded, skipping.')
  } else {
    await invariantiRef.update({
      solvedExamples: [...existingInvarianti, ...newInvariantiExamples],
    })
    console.log('Appended examples ex18–ex22 to invariantu-metode')
  }

  const n = nevienadibuPieradisanaTopicSeed
  await db.collection('topics').doc('nevienadibu-pieradisana').set(
    {
      displayName: n.displayName,
      slug: n.slug,
      subject: n.subject,
      order: n.order,
      theory: n.theory,
    },
    { merge: true },
  )
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
  const alreadySeeded = existing.some((e) => e.id === 'ex_sp1')
  if (alreadySeeded) {
    console.log('[seedSkaitlaPierakstsPapildinajumi] Already seeded, skipping.')
    return
  }
  await ref.update({
    solvedExamples: [...existing, ...skaitlaPierakstsPapildinajumi],
  })
  console.log('Appended solved examples to skaitlapieraksts')
}

async function stripAmgmFromNevienadibuPieradisana(db) {
  const ref = db.collection('topics').doc('nevienadibu-pieradisana')
  const doc = await ref.get()
  if (!doc.exists) {
    return
  }
  const data = doc.data()
  const filteredExamples = (data.solvedExamples || []).filter((e) => !e.id.startsWith('ex_amgm'))
  const filteredSections = (data.theory?.sections || []).filter((s) => s.title !== AMGM_SECTION_TITLE)
  await ref.update({ solvedExamples: filteredExamples, 'theory.sections': filteredSections })
  console.log('Stripped AM-GM theory and examples from nevienadibu-pieradisana')
}

async function seedVidejaisAritmetiskaisGeometriskais(db) {
  const topicId = 'videjais-aritmetiskais-geometriskais'
  const ref = db.collection('topics').doc(topicId)
  const docSnap = await ref.get()
  if (docSnap.exists) {
    console.log(`[${topicId}] Already exists, skipping.`)
    return
  }
  await ref.set(videjaisAritmetiskaisGeometriskaisTopicData, { merge: false })
  for (const q of videjaisAritmetiskaisGeometriskaisQuiz) {
    await ref.collection('quizQuestions').doc(q.id).set(q)
  }
  console.log(`Topic and quiz seeded: ${topicId}`)
}

async function seedKvadrataAtdalisana(db) {
  const topicId = 'kvadrata-atdalisana'
  const ref = db.collection('topics').doc(topicId)
  const docSnap = await ref.get()
  if (docSnap.exists) {
    console.log(`[${topicId}] Already exists, skipping.`)
    return
  }
  await ref.set(kvadrataAtdalisanaTopicData, { merge: false })
  const nevRef = db.collection('topics').doc('nevienadibu-pieradisana')
  const nevSnap = await nevRef.get()
  if (!nevSnap.exists) {
    console.log(`Topic seeded: ${topicId} (nevienadibu-pieradisana missing, skipped split cleanup)`)
    return
  }
  const nevData = nevSnap.data()
  const ex = nevData.solvedExamples || []
  const filteredExamples = ex.filter((e) => !kvadrataMovedExampleIds.has(e.id))
  const sec = nevData.theory?.sections || []
  const filteredSections = sec.filter(
    (s) => s.title !== pilnoKvadratuSectionTitle && s.title !== AMGM_SECTION_TITLE,
  )
  if (filteredExamples.length !== ex.length || filteredSections.length !== sec.length) {
    await nevRef.update({
      solvedExamples: filteredExamples,
      'theory.sections': filteredSections,
    })
  }
  console.log(`Topic seeded: ${topicId}; moved square-method content off nevienadibu-pieradisana if present`)
}

async function seedVirknesPapildinajumi(db) {
  const ref = db.collection('topics').doc('virknes')
  const doc = await ref.get()
  const data = doc.data() || {}
  const existingSections = data.theory?.sections || []
  const existingExamples = data.solvedExamples || []

  const sectionAlreadySeeded = existingSections.some((s) => s.title === 'Rekurentas virknes')
  const examplesAlreadySeeded = existingExamples.some((e) => e.id === 'ex_rek1')

  if (sectionAlreadySeeded && examplesAlreadySeeded) {
    console.log('[seedVirknesPapildinajumi] Already seeded, skipping.')
    return
  }

  const updates = {}
  if (!sectionAlreadySeeded) {
    updates['theory.sections'] = [...existingSections, ...virknesNewSections]
  } else {
    console.log('[seedVirknesPapildinajumi] Theory section already seeded, skipping.')
  }
  if (!examplesAlreadySeeded) {
    updates.solvedExamples = [...existingExamples, ...virknesNewExamples]
  } else {
    console.log('[seedVirknesPapildinajumi] Already seeded, skipping.')
  }

  if (Object.keys(updates).length === 0) {
    return
  }

  await ref.update(updates)
  console.log('Appended rekurentas virknes theory section and solved examples to virknes')
}

async function seedSversanasUzdevumi(db) {
  await db.collection('topics').doc('sversanas-uzdevumi').set(sversanasTopicData, { merge: false })
  console.log('Topic document set: sversanas-uzdevumi')
  for (const q of sversanasQuiz) {
    await db
      .collection('topics')
      .doc('sversanas-uzdevumi')
      .collection('quizQuestions')
      .doc(q.id)
      .set(q)
  }
  console.log('Quiz questions seeded for: sversanas-uzdevumi')
}

function minGradeForSkaitlaExample(ex) {
  const g = ex?.grades
  if (Array.isArray(g) && g.length > 0) return Math.min(...g)
  return 999
}

function problemKeySkaitla(ex) {
  return (ex?.problem ?? '').trim()
}

async function fixSkaitlaPierakstsDuplicates(db) {
  const ref = db.collection('topics').doc('skaitlapieraksts')
  const snap = await ref.get()
  if (!snap.exists) {
    return
  }
  const raw = snap.data().solvedExamples || []
  if (raw.length === 0) {
    return
  }

  const groups = new Map()
  raw.forEach((ex, idx) => {
    const k = problemKeySkaitla(ex)
    if (!groups.has(k)) groups.set(k, [])
    groups.get(k).push({ ex, idx })
  })

  const winners = []
  for (const arr of groups.values()) {
    arr.sort((A, B) => {
      const ma = minGradeForSkaitlaExample(A.ex)
      const mb = minGradeForSkaitlaExample(B.ex)
      if (ma !== mb) return ma - mb
      return A.idx - B.idx
    })
    const firstInDoc = Math.min(...arr.map((a) => a.idx))
    winners.push({ ex: arr[0].ex, firstInDoc })
  }
  winners.sort((a, b) => a.firstInDoc - b.firstInDoc)

  const deduplicatedArray = winners.map((w, i) => ({
    ...w.ex,
    id: `ex${i + 1}`,
  }))

  const removed = raw.length - deduplicatedArray.length
  await ref.update({ solvedExamples: deduplicatedArray })
  console.log(
    `fixSkaitlaPierakstsDuplicates: removed ${removed} duplicate problem(s), ${deduplicatedArray.length} examples kept`,
  )
}

function sectionTitleMatchesAmgmRemoval(title) {
  if (!title || typeof title !== 'string') return false
  const t = title.toLowerCase()
  return (
    t.includes('am-gm') ||
    t.includes('vidējo nevienādība') ||
    t.includes('aritmētiskā')
  )
}

function exampleMatchesAmgmRemoval(ex) {
  if (!ex) return false
  const id = String(ex.id ?? '')
  if (id.toLowerCase().startsWith('ex_amgm')) return true
  const p = String(ex.problem ?? '').toLowerCase()
  if (p.includes('am-gm')) return true
  return false
}

async function seedAMGMTopic(db) {
  const nevRef = db.collection('topics').doc('nevienadibu-pieradisana')
  const nevSnap = await nevRef.get()
  if (nevSnap.exists) {
    const d = nevSnap.data()
    const sections = d.theory?.sections || []
    const filteredSections = sections.filter((s) => !sectionTitleMatchesAmgmRemoval(s.title))
    const examples = d.solvedExamples || []
    const filteredExamples = examples.filter((e) => !exampleMatchesAmgmRemoval(e))
    if (filteredSections.length !== sections.length || filteredExamples.length !== examples.length) {
      await nevRef.update({
        'theory.sections': filteredSections,
        solvedExamples: filteredExamples,
      })
    }
    console.log('Removed AM-GM content from nevienadibu-pieradisana')
  }

  const amRef = db.collection('topics').doc('am-gm')
  await amRef.set(amGmTopicData, { merge: false })
  console.log('Created am-gm topic')
  for (const q of amGmQuiz) {
    await amRef.collection('quizQuestions').doc(q.id).set(q)
  }
  console.log('Quiz seeded for am-gm')
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
    await seedSversanasUzdevumi(db)
    await seedVirknesPapildinajumi(db)
    await stripAmgmFromNevienadibuPieradisana(db)
    await seedVidejaisAritmetiskaisGeometriskais(db)
    await seedKvadrataAtdalisana(db)
    await fixSkaitlaPierakstsDuplicates(db)
    await seedAMGMTopic(db)

    console.log('Solved examples updated successfully')
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

seed()
