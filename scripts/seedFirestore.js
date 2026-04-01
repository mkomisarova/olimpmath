import admin from 'firebase-admin'
import serviceAccount from './serviceAccount.json' with { type: 'json' }
import pirmSolvedExamplesFromPdf from './pirmrezinatajiPdfSolvedExamples.js'

async function updateSolvedExamples(db) {
  await db.collection('topics').doc('pirmrezinataji').update({
    solvedExamples: pirmSolvedExamplesFromPdf,
  })
  console.log('Updated solvedExamples for pirmrezinataji')
}

const dirichletSolvedExamples = [
  {
    id: "ex1",
    problem: "Pulciņā ir $13$ skolēni. Pierādīt, ka no tiem var atrast divus, kas dzimuši vienā un tajā pašā mēnesī!",
    solution: "Ja katrā mēnesī būtu dzimis ne vairāk kā viens skolēns, visos $12$ mēnešos kopā būtu $\\leq 12$ skolēni — pretruna. Pēc Dirihlē principa noteikti ir mēnesis ar $\\geq 2$ skolēniem. $\\blacksquare$"
  },
  {
    id: "ex2",
    problem: "Doti naturāli skaitļi no $1$ līdz $8$. Pierādīt, ka izvēloties jebkurus $5$, var atrast divus, kuru summa ir $9$.",
    solution: "Grupas: $\\{1,8\\}, \\{2,7\\}, \\{3,6\\}, \\{4,5\\}$ — $4$ grupas. Ja katrā būtu $\\leq 1$ skaitlis, kopā $\\leq 4$ — pretruna ar $5$ skaitļiem. Kādā grupā ir $2$ skaitļi, kuru summa $= 9$. $\\blacksquare$"
  },
  {
    id: "ex3",
    problem: "Izliekta $100$-stūra virsotnes sanumurētas ar $1$ līdz $100$. Katrai malai aprēķina galu numuru starpību. Pierādīt, ka vismaz divām malām starpības ir vienādas!",
    solution: "Iespējamās starpību vērtības: $1, 2, \\ldots, 99$ — $99$ grupas (būri). Malas: $100$ (truši). Pēc Dirihlē principa $\\geq 2$ malas dod vienādas starpības. $\\blacksquare$"
  },
  {
    id: "ex4",
    problem: "Sniegbaltīte uzdāvināja $7$ rūķīšiem pa $5$ konfektēm no $3$ veidiem (katrs saņēma $\\geq 1$ no katra veida). Pierādīt, ka $2$ rūķīši saņēma vienādus komplektus!",
    solution: "$5$ kā trīs naturālu skaitļu summa: $3+1+1$ vai $2+2+1$ — $2$ veidi. Ņemot vērā, kurš veids ir lielākais, iegūstam $6$ dažādus iespējamos komplektus. $7$ rūķīši, $6$ iespējas — pēc Dirihlē principa $2$ rūķīši saņēma vienādus komplektus. $\\blacksquare$"
  },
  {
    id: "ex5",
    problem: "Taisne nokrāsota $10$ krāsās. Pierādīt, ka var atrast $2$ punktus vienā krāsā, kuru attālums (cm) ir vesels skaitlis!",
    solution: "Izvēlamies $11$ punktus ar veseliem savstarpējiem attālumiem. $11$ punkti, $10$ krāsas — pēc Dirihlē principa $\\geq 2$ punkti ir vienā krāsā, un to attālums ir vesels skaitlis. $\\blacksquare$"
  },
  {
    id: "ex6",
    problem: "Pierādīt, ka starp jebkuriem $6$ naturāliem skaitļiem, kas nedalās ar $10$, var atrast divus, kuru summa vai starpība dalās ar $10$.",
    solution: "1) Ja divi skaitļi beidzas ar vienādu ciparu — starpība dalās ar $10$.\n2) Pretējā gadījumā — $5$ grupas: $\\{1,9\\}, \\{2,8\\}, \\{3,7\\}, \\{4,6\\}, \\{5\\}$. $6$ skaitļi, $5$ grupas — pēc Dirihlē principa divi nonāk vienā grupā, to summa dalās ar $10$. $\\blacksquare$"
  },
  {
    id: "ex7",
    problem: "Pierādīt, ka no jebkuriem $8$ naturāliem skaitļiem var izvēlēties divus, kuru starpība dalās ar $7$.",
    solution: "Atlikumi dalot ar $7$: $0,1,2,3,4,5,6$ — $7$ grupas. $8$ skaitļi, $7$ grupas — pēc Dirihlē principa $2$ skaitļi dod vienādus atlikumus, to starpība dalās ar $7$. $\\blacksquare$"
  },
  {
    id: "ex8",
    problem: "$36$ skulptūras ar masām $490, 495, \\ldots, 665$ kg. Vai var aizvest ar $7$ automašīnām (kravnesība $3$ t)?",
    solution: "$36 = 7 \\cdot 5 + 1$, tāpēc pēc Dirihlē principa vismaz vienā automašīnā $\\geq 6$ skulptūras. Sešu vieglāko masa: $490+495+500+505+510+515 = 3015$ kg $> 3000$ kg. Prasības nav izpildāmas. $\\blacksquare$"
  },
  {
    id: "ex9",
    problem: "$3$ uzdevumi, $100$ skolēni. Pierādīt, ka $\\geq 13$ skolēni atrisināja vienādus uzdevumus!",
    solution: "No $3$ uzdevumiem var izveidot $2^3 = 8$ dažādus komplektus. Ja katru atrisinātu $\\leq 12$ skolēni, kopā $\\leq 96 < 100$. Pretruna. $\\blacksquare$"
  },
  {
    id: "ex10",
    problem: "Rūtiņu virsotnēs atzīmēti $16$ balti punkti ($4 \\times 4$ režģis). Vai var nokrāsot tieši $7$ punktus melnus tā, lai nekādi $3$ vienādas krāsas punkti nebūtu uz vienas taisnes?",
    solution: "Nē. Ja $7$ melni, paliek $9$ balti. Punkti izvietoti $4$ rindās — pēc Dirihlē principa kādā rindā $\\geq 3$ balti punkti, kas atrodas uz vienas taisnes. Pretruna. $\\blacksquare$"
  },
  {
    id: "ex11",
    problem: "Maisiņā $10$ sarkanas, $10$ dzeltenas, $10$ zaļas lentes. $8$ meitenes katra izvēlas vienu. a) Vai noteikti $4$ izvēlējās vienādu krāsu? b) Vai noteikti $3$ vienādu krāsu? c) Kāds mazākais skaits lenšu, lai noteikti $4$ vienādas?",
    solution: "**a)** Nē — var gadīties $1+1+6$.\n\n**b)** Jā. Ja katras krāsas $\\leq 2$, kopā $\\leq 6 < 8$. Pretruna.\n\n**c)** $10$ lentes. Ar $9$ var gadīties $3+3+3$ — nepietiek. Ar $10$ pēc Dirihlē principa ($10 = 3 \\cdot 3 + 1$) noteikti $\\geq 4$ vienādas krāsas."
  },
  {
    id: "ex12",
    problem: "Ēdnīcā $2$ zupas, $2$ pamatēdieni, $2$ deserti; $200$ skolēni (katrs ēd $\\geq 1$ ēdienu). Kāds lielākais skaits skolēnu noteikti pasūtīja vienādo?",
    solution: "Iespējamie komplekti: $3 \\cdot 3 \\cdot 3 - 1 = 26$ (atņemam gadījumu kad neko neēd). Ja katru izvēlējās $\\leq 7$ skolēni, kopā $\\leq 7 \\cdot 26 = 182 < 200$. Pretruna. Tātad $\\geq 8$ skolēni pasūtīja vienādo. Augšējā robeža $8$ ir sasniedzama: $18 \\cdot 8 + 8 \\cdot 7 = 200$. Atbilde: $\\mathbf{8}$."
  },
  {
    id: "ex13",
    problem: "Pierādīt, ka starp jebkuriem $78$ trīsciparu skaitļiem var atrast $4$ ar vienādām ciparu summām!",
    solution: "Iespējamās ciparu summas: $1$ līdz $27$ — $27$ grupas. Grupas ar summām $1, 2, 26, 27$ satur attiecīgi $1, 3, 3, 1$ skaitļus — kopā $\\leq 8$. Atlikušajās $23$ grupās jāizvieto $\\geq 70$ skaitļi. Tā kā $70 = 3 \\cdot 23 + 1$, pēc Dirihlē principa kādā grupā $\\geq 4$ skaitļi. $\\blacksquare$"
  },
  {
    id: "ex14",
    problem: "Sporta zālē $32$ cilvēki, visi $\\geq 21$ gadu veci. Pierādīt: vai $2$ cilvēki ir $> 30$ gadus veci, vai $4$ cilvēki ar vienādu vecumu!",
    solution: "Grupas pēc vecuma: $\\{21\\}, \\{22\\}, \\ldots, \\{30\\}, \\{> 30\\}$ — $11$ grupas.\n\n1) Ja pēdējā grupā $\\geq 2$ — prasītais izpildās.\n2) Ja pēdējā grupā $\\leq 1$, atlikušajās $10$ grupās $\\geq 31$ cilvēki. $31 = 3 \\cdot 10 + 1$ — pēc Dirihlē principa kādā grupā $\\geq 4$ cilvēki ar vienādu vecumu. $\\blacksquare$"
  }
]

const virknesSolvedExamples = [
  {
    id: "ex1",
    problem: "Naturālu skaitļu virknē pirmais loceklis ir $61$, katru nākamo iegūst, ciparu reizinājumam pieskaitot $13$. Aprēķināt $2025.$ locekli.",
    solution: "Virkne: $61, 19, 22, 17, 20, 13, 16, 19, \\ldots$ Periodiska sākot ar $2.$ locekli, periods $(19, 22, 17, 20, 13, 16)$, $T=6$. $2025 = 6 \\cdot 337 + 3$, bet periods sākas no $2.$ locekļa, tāpēc $2025.$ loceklis ir perioda $2.$ elements. Atbilde: $\\mathbf{22}$."
  },
  {
    id: "ex2",
    problem: "Virkne $1; 1; 2; 5; 9; 6; \\ldots$, katrs loceklis = divu iepriekšējo kvadrātu summas pēdējais cipars. a) Vai $2026.$ loceklis pāra vai nepāra? b) Kāds ir $2026.$ loceklis?",
    solution: "**a)** Paritāšu periods ir $3$: $n,n,p,n,n,p,\\ldots$ Tā kā $2026$ nedalās ar $3$ — **nepāra**.\n\n**b)** Pilnā virkne periodiska sākot ar $2.$ locekli, $T=12$. $1 + 12 \\cdot 168 = 2017$, $2026 - 2017 = 9$. Perioda $9.$ elements ir $\\mathbf{1}$."
  },
  {
    id: "ex3",
    problem: "Virkne $a_1=6$, $a_{n+1} = a_n/2$ ja pāra, $5a_n - 1$ ja nepāra. Kuriem $n$ izpildās $a_n = n$?",
    solution: "Virkne: $6, 3, 14, 7, 34, 17, 84, 42, 21, 104, 52, 26, 13, 64, 32, 16, 8, 4, 2, 1, 4, 2, 1, \\ldots$ Sākot ar $18.$ locekli atkārtojas $(4, 2, 1)$. Pārbaudām: $a_{13} = 13$ ✓ un $a_{16} = 16$ ✓. Tālāk neviens neatbilst. Atbilde: $\\mathbf{n = 13}$ un $\\mathbf{n = 16}$."
  },
  {
    id: "ex4",
    problem: "Virkne $1; 8; 8; 64; 192; 432; \\ldots$ — katrs loceklis sākot ar $3.$ ir divu iepriekšējo nenulles ciparu reizinājums. Kāds ir $2025.$ loceklis?",
    solution: "$9.$ un $10.$ loceklis: $5040$ un $4200$. $19.$ un $20.$ loceklis: $5040$ un $4200$. Periodiska sākot ar $9.$ locekli, $T = 10$. $2025 = 8 + 10 \\cdot 201 + 7$ — nākamā perioda $7.$ elements. Atbilde: $\\mathbf{3780}$."
  },
  {
    id: "ex5",
    problem: "Cik dažādos veidos skaitli $n$ var izteikt kā divnieku un trijnieku summu? Aprēķināt a) $n=14$; b) $n=22$.",
    solution: "Rekurence: $a_n = a_{n-2} + a_{n-3}$, $a_2=a_3=a_4=1$.\n\n| $n$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| $a_n$ | 1 | 1 | 1 | 2 | 2 | 3 | 4 | 5 | 7 | 9 | 12 | 16 | 21 |\n\na) $\\mathbf{21}$ veids. b) $a_{22} = \\mathbf{200}$ veidi."
  },
  {
    id: "ex6",
    problem: "No mājām līdz dzīvoklim ir $12$ pakāpieni. Ar vienu soli var pārkāpt $1$, $2$ vai $3$ pakāpienus. Cik dažādos veidos var uzkāpt?",
    solution: "$a_n = a_{n-1} + a_{n-2} + a_{n-3}$, $a_1=1, a_2=2, a_3=4$.\n\n| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| $a_n$ | 1 | 2 | 4 | 7 | 13 | 24 | 44 | 81 | 149 | 274 | 504 | 927 |\n\nAtbilde: $\\mathbf{927}$ veidi."
  },
  {
    id: "ex7",
    problem: "Cik dažādos veidos taisnstūri $2 \\times 12$ var sagriezt taisnstūros $1 \\times 2$?",
    solution: "$a_n = a_{n-1} + a_{n-2}$, $a_1=1, a_2=2$.\n\n| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| $a_n$ | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 | 89 | 144 | 233 |\n\nAtbilde: $\\mathbf{233}$ veidi."
  },
  {
    id: "ex8",
    problem: "Rindā $10$ krēsli ar skolēniem. Katrs var palikt vai apsēsties blakus esošajā krēslā. Cik dažādi izvietojumi iespējami?",
    solution: "$a_n = a_{n-1} + a_{n-2}$, $a_1=1, a_2=2$.\n\n| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |\n|---|---|---|---|---|---|---|---|---|---|---|\n| $a_n$ | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 | 89 |\n\nAtbilde: $\\mathbf{89}$ izvietojumi."
  },
  {
    id: "ex9",
    problem: "Skaitļi satur tikai ciparus $1, 2, 3$, un cipari $1$ un $3$ nav blakus. Cik ir desmitciparu šādu skaitļu?",
    solution: "$a_n = 2a_{n-1} + a_{n-2}$, $a_1=3, a_2=7$.\n\n| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |\n|---|---|---|---|---|---|---|---|---|---|---|\n| $a_n$ | 3 | 7 | 17 | 41 | 99 | 239 | 577 | 1393 | 3363 | 8119 |\n\nAtbilde: $\\mathbf{8119}$ skaitļi."
  },
  {
    id: "ex10",
    problem: "Cik veidos rindā var iestādīt $7$ kokus — liepas, ozolus, priedes un egles — tā, lai nekur blakus nebūtu divi skuju koki?",
    solution: "$k_n = 2k_{n-1} + 4k_{n-2}$, $k_1=4, k_2=12$.\n\n| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 |\n|---|---|---|---|---|---|---|---|\n| $k_n$ | 4 | 12 | 40 | 128 | 416 | 1344 | 4352 |\n\nAtbilde: $\\mathbf{4352}$ veidi."
  }
]

async function seed() {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })

    const db = admin.firestore()

    await db.collection('topics').doc('dirichlet').update({ solvedExamples: dirichletSolvedExamples })
    await db.collection('topics').doc('virknes').update({ solvedExamples: virknesSolvedExamples })
    await updateSolvedExamples(db)

    console.log('Solved examples updated successfully')
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

seed()
