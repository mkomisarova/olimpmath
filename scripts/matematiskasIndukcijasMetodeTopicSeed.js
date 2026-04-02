/** Firestore topic document: matematiskas-indukcijas-metode */
export default {
  displayName: 'Matemātiskās indukcijas metode',
  slug: 'matematiskas-indukcijas-metode',
  subject: 'algebra',
  order: 2,
  theory: {
    sections: [
      {
        title: 'Matemātiskās indukcijas metode',
        content:
          'Jau skolas kursā 10. klasē tiek apgūta matemātiskās indukcijas metode jeb matemātiskās indukcijas princips, kas ir viens no biežāk lietotajiem un svarīgākajiem pierādījumu veidiem. Tas parasti tiek izmantots, lai pierādītu, ka kāds izteikums ir patiess visām naturālām $n$ vērtībām.\n\n**Indukcija** (no latīņu valodas „inductio" – uzvedināšana, ierosināšana) – loģisks slēdziens, pārejot no atsevišķiem gadījumiem uz vispārīgu secinājumu, no atsevišķiem faktiem uz vispārinājumu.\n\n**Induktīvā spriešana** – spriešanas paņēmiens, kurā secinājumi tiek iegūti, balstoties uz vairāku eksperimentu vai vērojumu laikā gūtiem rezultātiem. Šādā veidā iegūtos spriedumus sauc par induktīviem spriedumiem.\n\nDomāšanas un spriešanas procesā tiek izteikti dažādi apgalvojumi. Tie var būt patiesi, aplami vai tādi, kuru patiesumu nav iespējams novērtēt.\n\nMatemātiskās indukcijas metode ir viena no aritmētikas aksiomām, tāpēc tās patiesums nav jāpierāda. Pēc būtības indukcijas aksioma apgalvo, ka katru naturālo skaitli var iegūt, atkārtoti pieskaitot skaitlim $0$ vieninieku.\n\nLietojot matemātiskās indukcijas metodi uzdevumu risināšanā, rīkojas pēc šāda plāna:\n1. pārbauda, vai apskatāmā īpašība piemīt kopas pirmajam elementam (**indukcijas bāze**);\n2. pieņem, ka šī īpašība ir spēkā $k$-tajam elementam (**induktīvais pieņēmums**);\n3. pierāda, ka tad tā ir patiesa arī $(k+1)$-jam elementam (**induktīvā pāreja**);\n4. secina: tā kā no izteikuma patiesuma jebkuram elementam $n = k$ izriet, ka tas ir patiess elementam $n = k+1$, un tā kā izteikums ir patiess pirmajam elementam, tad izteikums ir patiess jebkuram naturālam elementam $n$.\n\nMatemātiskās indukcijas metodes ilustrācija — iedomāsimies, ka rindā ir salikti bezgalīgi daudzi domino kauliņi. Ja krīt pirmais kauliņš, tad nokrīt arī otrais, tas savukārt nogāz nākamo utt. Šim procesam turpinoties, visi kauliņi tiek nogāzti.\n\nKlasiskā veidā matemātiskās indukcijas metodi lieto:\n- vienādību pierādīšanā;\n- dalāmības pierādīšanā (tas ir, lai pamatotu dalīšanas atlikuma vai kāda cita invarianta saglabāšanos);\n- rekurentas virknes vispārīgā locekļa formulas pierādīšanā.\n\nDažreiz vajag izmantot citu induktīvā sprieduma shēmu — nevis pamatojam, ka no iepriekšējā loģiski izriet nākamais, bet gan — no diviem iepriekšējiem izriet nākamais. Tas ļauj rakstīt vairāk induktīvos pieņēmumus, bet tad arī induktīvo bāzi vajag plašāku — jāpamato gan $n = 1$, gan $n = 2$.',
      },
    ],
  },
  solvedExamples: [
    {
      id: 'ex1',
      problem:
        'Pierādīt, ka katram naturālam $n$ ir patiesa vienādība\n$$1 \\cdot 4 + 2 \\cdot 7 + 3 \\cdot 10 + \\cdots + n \\cdot (3n+1) = n(n+1)^2.$$',
      solution:
        'Izmantosim matemātiskās indukcijas metodi.\n\n**Indukcijas bāze.** Ja $n = 1$, tad $1 \\cdot 4 = 1 \\cdot 2^2$ jeb $4 = 4$. ✓\n\n**Induktīvais pieņēmums.** Pieņemsim, ka vienādība izpildās, ja $n = k$, tas ir,\n$$1 \\cdot 4 + 2 \\cdot 7 + 3 \\cdot 10 + \\cdots + k \\cdot (3k+1) = k(k+1)^2.$$\n\n**Induktīvā pāreja.** Pierādīsim, ka vienādība ir spēkā arī tad, ja $n = k+1$, tas ir,\n$$1 \\cdot 4 + 2 \\cdot 7 + 3 \\cdot 10 + \\cdots + (k+1) \\cdot (3k+4) = (k+1)(k+2)^2.$$\n\nPārveidojam vienādības kreisās puses izteiksmi:\n$$\\underbrace{1 \\cdot 4 + 2 \\cdot 7 + 3 \\cdot 10 + \\cdots + k \\cdot (3k+1)}_{\\text{induktīvais pieņēmums}} + (k+1)(3k+4)$$\n$$= k(k+1)^2 + (k+1)(3k+4) = (k+1)\\bigl(k(k+1) + 3k + 4\\bigr)$$\n$$= (k+1)(k^2 + 4k + 4) = (k+1)(k+2)^2.$$\n\n**Secinājums.** Tā kā vienādība ir patiesa, ja $n = 1$, un no tā, ka vienādība ir spēkā, ja $n = k$, izriet, ka vienādība ir spēkā arī $n = k+1$, secinām, ka vienādība ir spēkā visām naturālām $n$ vērtībām.',
    },
    {
      id: 'ex2',
      problem:
        'Pierādīt, ka visām naturālām $n$ vērtībām izpildās\n$$1^3 + 2^3 + 3^3 + \\cdots + n^3 = (1 + 2 + 3 + \\cdots + n)^2.$$',
      solution:
        'Izmantojot aritmētiskās progresijas pirmo $n$ locekļu summas formulu, iegūstam, ka $1 + 2 + \\cdots + n = \\dfrac{n(n+1)}{2}$. Tātad pietiek pierādīt, ka visām naturālām $n$ vērtībām izpildās\n$$1^3 + 2^3 + 3^3 + \\cdots + n^3 = \\frac{n^2(n+1)^2}{4}.$$\n\nIzmantosim matemātiskās indukcijas metodi.\n\n**Indukcijas bāze.** Ja $n = 1$, tad $1^3 = \\dfrac{1^2 \\cdot 2^2}{4}$ jeb $1 = 1$. ✓\n\n**Induktīvais pieņēmums.** Pieņemsim, ka vienādība izpildās, ja $n = k$, tas ir,\n$$1^3 + 2^3 + 3^3 + \\cdots + k^3 = \\frac{k^2(k+1)^2}{4}.$$\n\n**Induktīvā pāreja.** Pierādīsim, ka vienādība ir spēkā arī tad, ja $n = k+1$, tas ir,\n$$1^3 + 2^3 + 3^3 + \\cdots + (k+1)^3 = \\frac{(k+1)^2(k+2)^2}{4}.$$\n\nPārveidojam vienādības kreisās puses izteiksmi:\n$$\\underbrace{1^3 + 2^3 + 3^3 + \\cdots + k^3}_{\\text{induktīvais pieņēmums}} + (k+1)^3$$\n$$= \\frac{k^2(k+1)^2}{4} + (k+1)^3 = \\frac{(k+1)^2}{4}\\bigl(k^2 + 4(k+1)\\bigr) = \\frac{(k+1)^2(k+2)^2}{4}.$$\n\n**Secinājums.** Tā kā vienādība ir patiesa, ja $n = 1$, un no tā, ka vienādība ir spēkā, ja $n = k$, izriet, ka vienādība ir spēkā arī $n = k+1$, secinām, ka vienādība ir spēkā visām naturālām $n$ vērtībām.',
    },
    {
      id: 'ex3',
      problem: 'Pierādīt, ka visām naturālām $n$ vērtībām $7^n + 3^{n+1}$ dalās ar $4$.',
      solution:
        'Izmantosim matemātiskās indukcijas metodi.\n\n**Indukcijas bāze.** Ja $n = 1$, tad $7^1 + 3^2 = 16$, kas dalās ar $4$. ✓\n\n**Induktīvais pieņēmums.** Pieņemsim, ka apgalvojums ir patiess, ja $n = k$, tas ir, $7^k + 3^{k+1} \\vdots 4$.\n\n**Induktīvā pāreja.** Pierādīsim, ka apgalvojums ir patiess arī tad, ja $n = k+1$, tas ir, $7^{k+1} + 3^{k+2} \\vdots 4$.\n\nPārveidojam izteiksmi:\n$$7^{k+1} + 3^{k+2} = 7 \\cdot 7^k + 3 \\cdot 3^{k+1} = 7 \\cdot (\\underbrace{7^k + 3^{k+1}}_{\\vdots\\, 4}) - \\underbrace{4}_{\\vdots\\, 4} \\cdot 3^{k+1}.$$\n\nTā kā katrs saskaitāmais dalās ar $4$, tad arī summa dalās ar $4$.\n\n**Secinājums.** Tā kā apgalvojums ir patiess, ja $n = 1$, un no tā, ka apgalvojums ir patiess, ja $n = k$, izriet, ka apgalvojums ir patiess arī $n = k+1$, secinām, ka apgalvojums ir patiess visām naturālām vērtībām.',
    },
    {
      id: 'ex4',
      problem:
        'Pierādīt, ka katram naturālam $n$ izteiksme $3n^5 + 5n^4 - 8n$ dalās ar $10$.',
      solution:
        'Izmantosim matemātiskās indukcijas metodi.\n\n**Indukcijas bāze.** Ja $n = 1$, tad $3 + 5 - 8 = 0$, kas dalās ar $10$. ✓\n\n**Induktīvais pieņēmums.** Pieņemsim, ja $n = k$, tad $3k^5 + 5k^4 - 8k$ dalās ar $10$.\n\n**Induktīvā pāreja.** Pierādīsim, ja $n = k+1$, tad $3(k+1)^5 + 5(k+1)^4 - 8(k+1)$ dalās ar $10$.\n\nVeicam ekvivalentus pārveidojumus:\n$$3(k+1)^5 + 5(k+1)^4 - 8(k+1)$$\n$$= 3(k^5 + 5k^4 + 10k^3 + 10k^2 + 5k + 1) + 5(k^4 + 4k^3 + 6k^2 + 4k + 1) - 8(k+1)$$\n$$= 3k^5 + 20k^4 + 50k^3 + 60k^2 + 27k$$\n$$= (3k^5 + 5k^4 - 8k) + 5k(3k^3 + 10k^2 + 12k + 7).$$\n\nSaskaitāmais $3k^5 + 5k^4 - 8k$ dalās ar $10$ pēc induktīvā pieņēmuma.\n\nSaskaitāmais $5k(3k^3 + 10k^2 + 12k + 7)$ dalās ar $5$, jo satur reizinātāju $5$, un dalās ar $2$, jo:\n- ja $k$ ir pāra skaitlis, tad reizinātājs $k$ dalās ar $2$;\n- ja $k$ ir nepāra skaitlis, tad reizinātājs $3k^3 + 10k^2 + 12k + 7$ ir pāra skaitlis un tas dalās ar $2$.\n\nTā kā katrs saskaitāmais dalās ar $10$, tad arī summa dalās ar $10$.\n\n**Secinājums.** No matemātiskās indukcijas metodes izriet, ka katram naturālam $n$ izteiksme $3n^5 + 5n^4 - 8n$ dalās ar $10$.',
    },
    {
      id: 'ex5',
      problem:
        'Virkne $(x_n)$ dota rekurenti ar formulu $x_{n+2} = 5x_{n+1} - 6x_n$ un $x_1 = 1$, $x_2 = 5$. Pierādīt, ka virknes vispārīgais loceklis ir formā $x_n = 3^n - 2^n$.',
      solution:
        'Izmantosim matemātiskās indukcijas metodi.\n\n**Indukcijas bāze.** Ja $n = 1$, tad $x_1 = 3^1 - 2^1 = 1$. ✓ Ja $n = 2$, tad $x_2 = 3^2 - 2^2 = 9 - 4 = 5$. ✓\n\n**Induktīvais pieņēmums.** Pieņemsim, ka formula ir spēkā, ja $n = k$ un $n = k+1$, tas ir,\n$$x_k = 3^k - 2^k \\quad \\text{un} \\quad x_{k+1} = 3^{k+1} - 2^{k+1}.$$\n\n**Induktīvā pāreja.** Pierādīsim, ka formula ir spēkā arī tad, ja $n = k+2$, tas ir, $x_{k+2} = 3^{k+2} - 2^{k+2}$.\n\nIzmantojot induktīvo pieņēmumu, iegūstam:\n$$x_{k+2} = 5x_{k+1} - 6x_k = 5(3^{k+1} - 2^{k+1}) - 6(3^k - 2^k)$$\n$$= 5 \\cdot 3^{k+1} - 5 \\cdot 2^{k+1} - 6 \\cdot 3^k + 6 \\cdot 2^k$$\n$$= 15 \\cdot 3^k - 10 \\cdot 2^k - 6 \\cdot 3^k + 6 \\cdot 2^k = 9 \\cdot 3^k - 4 \\cdot 2^k = 3^{k+2} - 2^{k+2}.$$\n\n**Secinājums.** Tā kā formula ir patiesa, ja $n = 1$ un $n = 2$, un no tā, ka formula ir spēkā, ja $n = k$ un $n = k+1$, izriet, ka formula ir spēkā arī $n = k+2$, secinām, ka formula ir spēkā visām naturālām $n$ vērtībām.',
    },
    {
      id: 'ex6',
      problem:
        'Skaitļu virknei $(a_n)$ visiem $n > 1$ ir spēkā sakarība $a_1 + a_2 + \\cdots + a_n = n^2 a_n$. Aprēķināt $a_{50}$, ja zināms, ka $a_1 = 1000$.',
      solution:
        'Ievērojam, ka no dotās vienādības izriet, ka\n$$a_n = \\frac{a_1 + a_2 + \\cdots + a_{n-1}}{n^2 - 1}. \\quad (*)$$\n\nPierādīsim formulu\n$$a_n = a_1 \\cdot \\frac{2^2}{2^2-1} \\cdot \\frac{3^2}{3^2-1} \\cdots \\frac{(n-1)^2}{(n-1)^2-1} \\cdot \\frac{1}{n^2-1}$$\nvispārīgā veidā, izmantojot matemātiskās indukcijas metodi.\n\n**Indukcijas bāze.** Ja $n = 2$, tad $a_2 = a_1 \\cdot \\dfrac{1}{2^2 - 1} = \\dfrac{a_1}{3}$. ✓\n\n**Induktīvais pieņēmums.** Pieņemsim, ka formula ir spēkā arī, ja $n = k$.\n\n**Induktīvā pāreja.** No vienādības $(*)$ pie $n = k+1$ iegūstam $a_{k+1} = \\dfrac{a_1 + a_2 + \\cdots + a_k}{(k+1)^2 - 1}$. No uzdevumā dotās vienādības izriet $a_1 + a_2 + \\cdots + a_k = k^2 a_k$, tātad\n$$a_{k+1} = \\frac{k^2 a_k}{(k+1)^2 - 1}.$$\nIzmantojot induktīvo pieņēmumu, iegūstam vajadzīgo.\n\nPārveidojam pierādīto vienādību:\n$$a_n = a_1 \\cdot \\frac{2^2 \\cdot 3^2 \\cdots (n-1)^2}{(2^2-1)(3^2-1)\\cdots((n-1)^2-1)(n^2-1)}.$$\n\nIzmantojot formulu $x^2 - y^2 = (x-y)(x+y)$:\n$$a_n = a_1 \\cdot \\frac{2^2 \\cdot 3^2 \\cdots (n-1)^2}{(1 \\cdot 2 \\cdots (n-2)(n-1)) \\cdot (3 \\cdot 4 \\cdots n(n+1))} = a_1 \\cdot \\frac{2}{n(n+1)}.$$\n\nIevietojot skaitliskās vērtības: $a_{50} = 1000 \\cdot \\dfrac{2}{50 \\cdot 51} = \\dfrac{40}{51}$.',
    },
  ],
}
