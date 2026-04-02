/** Firestore: topic kongruences + quiz questions */

export const kongruencesTopicData = {
  displayName: 'Kongruences',
  slug: 'kongruences',
  subject: 'skaitlu_teorija',
  order: 1,
  theory: {
    sections: [
      {
        title: 'Kongruences jēdziens',
        content: `Viens no pazīstamākajiem veselo skaitļu iedalījumiem ir to dalījums pāra un nepāra skaitļos. Katrs vesels skaitlis ir vai nu pāra, vai nepāra, taču neviens nav vienlaikus gan pāra, gan nepāra skaitlis. Tā visi veselie skaitļi tiek sadalīti divās klasēs: skaitļi, kas dalās ar 2 (pāra skaitļi), un skaitļi, kas nedalās ar 2 (nepāra skaitļi).

Ja dalītāju 2 aizvieto ar 3, tad līdzīgi var runāt par skaitļiem, kas dalās vai nedalās ar 3. Tomēr izrādās, ka lietderīgāk ir veselos skaitļus sadalīt klasēs atkarībā no tā, kādu atlikumu tie dod, dalot ar 3. Arī pāra un nepāra skaitļus var uztvert kā skaitļus, kas, dalot ar 2, dod attiecīgi atlikumu 0 vai 1. Ja nomainām 2 ar 3, tad veselos skaitļus mēs sadalām trīs klasēs – šķirojot gadījumus, vai skaitlis, dalot ar 3, dod atlikumu 0, 1 vai 2.

**Teorēma par dalīšanu ar atlikumu.** Ja $a$ ir vesels skaitlis un $b$ ir naturāls skaitlis, tad noteikti var atrast tādus veselus skaitļus $q$ un $r$, ka $a = b \\cdot q + r$, turklāt $0 \\leq r < b$.

*Iegaumē!* Atlikums nekad nav mazāks kā 0 un vienmēr ir mazāks nekā skaitlis, ar kuru dala, tas ir, dalot ar $b$, atlikumam var būt vērtības $0, 1, 2, \\ldots, b - 1$.

**Definīcija.** Doti veseli skaitļi $a$ un $b$ un naturāls skaitlis $m \\geq 2$. Skaitļi $a$ un $b$ ir kongruenti pēc moduļa $m$ un pieraksta $a \\equiv b \\pmod{m}$ vai $a \\equiv_m b$, ja $a$ un $b$, dalot tos ar $m$, dod vienādu atlikumu.

**Piemēri:**
- $7 \\equiv 3 \\pmod{2}$, jo gan 7, gan 3, dalot ar 2, dod atlikumu 1
- $17 \\equiv 73 \\pmod{14}$, jo gan 17, gan 73, dalot ar 14, dod atlikumu 3
- $71 \\equiv 8 \\pmod{9}$, jo gan 71, gan 8, dalot ar 9, dod atlikumu 8
- $-2 \\equiv 4 \\pmod{3}$, jo gan $-2$, gan 4, dalot ar 3, dod atlikumu 1
- $-6 \\equiv 85 \\pmod{7}$, jo gan $-6$, gan 85, dalot ar 7, dod atlikumu 1

Bieži vien, lai pārbaudītu, vai skaitļi ir kongruenti pēc kāda moduļa, ir ērti lietot tālāk doto teorēmu.

**Teorēma.** $a \\equiv b \\pmod{m}$ tad un tikai tad, ja starpība $a - b$ dalās ar $m$.

**Piemēri:**
- $7 \\equiv 3 \\pmod{2}$, jo starpība $7 - 3 = 4$ dalās ar 2
- $17 \\equiv 73 \\pmod{14}$, jo starpība $17 - 73 = -56$ dalās ar 14
- $71 \\equiv 8 \\pmod{9}$, jo starpība $71 - 8 = 63$ dalās ar 9
- $-2 \\equiv 4 \\pmod{3}$, jo starpība $-2 - 4 = -6$ dalās ar 3
- $-6 \\equiv 85 \\pmod{7}$, jo starpība $-6 - 85 = -91$ dalās ar 7`,
      },
      {
        title: 'Kongruenču īpašības',
        content: `Lai kongruences jēdzienu varētu lietot dažādu uzdevumu risināšanā, var izmantot kongruenču īpašības, kas ļauj daudzus aprēķinus veikt ievērojami vienkāršāk.

1. Ja $a$, dalot ar $m$, dod atlikumu $r$, tad $a \\equiv r \\pmod{m}$.
2. Ja $a \\equiv b \\pmod{m}$, tad $ka \\equiv kb \\pmod{m}$, kur $k$ ir jebkurš vesels skaitlis.
3. Ja $a \\equiv b \\pmod{m}$, tad $a^n \\equiv b^n \\pmod{m}$, kur $n$ ir jebkurš naturāls skaitlis.
4. Ja $a \\equiv b \\pmod{m}$ un $c \\equiv d \\pmod{m}$, tad:
   - $a + c \\equiv b + d \\pmod{m}$,
   - $a - c \\equiv b - d \\pmod{m}$,
   - $ac \\equiv bd \\pmod{m}$.
5. Visiem veseliem $a$ izpildās kongruence $a \\equiv a \\pmod{m}$ (refleksivitāte).
6. Ja $a \\equiv b \\pmod{m}$, tad $b \\equiv a \\pmod{m}$ (simetrija).
7. Ja $a \\equiv b \\pmod{m}$ un $b \\equiv c \\pmod{m}$, tad $a \\equiv c \\pmod{m}$ (transitivitāte).

Uzdevumos par veselu skaitļu pakāpēm ar mainīgu vai lielu kāpinātāju var noderēt nākamā teorēma.

**Teorēma.** Virkne $x_n = a^n$ pēc moduļa $m$ ir periodiska.

Perioda garumu un tajā ietilpstošos skaitļus var atrast, rakstot pēc kārtas skaitļus $a^n$ pēc moduļa $m$. Tiklīdz virknē $a^n \\pmod{m}$ parādās kāds jau bijis skaitlis, ir atrasts periods. Perioda garums nepārsniedz $m$.

Tā kā kongruence pēc moduļa $m$ sadala visus veselos skaitļus $m$ klasēs, kur katrā klasē ietilpst skaitļi, kas dod vienādus atlikumus pēc moduļa $m$, tad īpašību, kas jāpierāda visiem veseliem skaitļiem, pietiek pierādīt katras klases skaitļiem atsevišķi.`,
      },
    ],
  },
  solvedExamples: [
    {
      id: 'ex1',
      grades: [9, 10, 11, 12],
      problem: 'Kādu atlikumu var iegūt, vesela skaitļa kvadrātu dalot ar 3?',
      solution:
        'Ievērojam, ka veselu skaitli $n$, dalot ar 3, var iegūt atlikumu 0, 1 vai 2:\n- ja $n \\equiv 0 \\pmod{3}$, tad $n^2 \\equiv 0^2 \\equiv 0 \\pmod{3}$;\n- ja $n \\equiv 1 \\pmod{3}$, tad $n^2 \\equiv 1^2 \\equiv 1 \\pmod{3}$;\n- ja $n \\equiv 2 \\pmod{3}$, tad $n^2 \\equiv 2^2 \\equiv 4 \\equiv 1 \\pmod{3}$.\n\nTātad vesela skaitļa kvadrātu, dalot ar 3, var iegūt atlikumu 0 vai 1.\n\n*Piezīmes:*\n1. Uzdevumu varēja atrisināt arī aplūkojot gadījumus $n = 3k$, $n = 3k + 1$ un $n = 3k + 2$, kur $k$ – vesels skaitlis.\n2. Aplūkotajā risinājumā pēdējos divus gadījumus varēja apvienot, ievērojot, ka $2 \\equiv -1 \\pmod{3}$, tas ir, ja $n \\equiv \\pm 1 \\pmod{3}$, tad $n^2 \\equiv (\\pm 1)^2 \\equiv 1 \\pmod{3}$.',
    },
    {
      id: 'ex2',
      grades: [9, 10, 11, 12],
      problem: 'Kādu atlikumu dod skaitlis $3^{50}$, dalot to ar 7?',
      solution:
        'Virkne $3^n$, $n = 0, 1, 2, \\ldots$, ir periodiska pēc moduļa 7, apskatīsim šīs virknes pirmos locekļus:\n- ja $n = 0$, tad $3^0 \\equiv 1 \\pmod{7}$;\n- ja $n = 1$, tad $3^1 \\equiv 3 \\pmod{7}$;\n- ja $n = 2$, tad $3^2 \\equiv 9 \\equiv 2 \\pmod{7}$;\n- ja $n = 3$, tad $3^3 \\equiv 3^2 \\cdot 3 \\equiv 2 \\cdot 3 \\equiv 6 \\pmod{7}$;\n- ja $n = 4$, tad $3^4 \\equiv 3^3 \\cdot 3 \\equiv 6 \\cdot 3 \\equiv 18 \\equiv 4 \\pmod{7}$;\n- ja $n = 5$, tad $3^5 \\equiv 3^4 \\cdot 3 \\equiv 4 \\cdot 3 \\equiv 12 \\equiv 5 \\pmod{7}$;\n- ja $n = 6$, tad $3^6 \\equiv 3^5 \\cdot 3 \\equiv 5 \\cdot 3 \\equiv 15 \\equiv 1 \\pmod{7}$.\n\nRedzam, ka virkne $3^n \\pmod{7}$ ir periodiska ar perioda garumu 6.\n\nTā kā $3^6 \\equiv 1 \\pmod{7}$, tad secinām, ka\n$$3^{50} \\equiv 3^{6 \\cdot 8 + 2} \\equiv 3^2 \\equiv 2 \\pmod{7}.$$\nTātad skaitlis $3^{50}$ dod atlikumu 2, dalot ar 7.',
    },
    {
      id: 'ex3',
      grades: [9, 10, 11, 12],
      problem:
        'Trīs veselu skaitļu kvadrātu summa dalās ar 9. Pierādiet, ka var izvēlēties divus no šiem kvadrātiem tā, ka to starpība dalās ar 9.',
      solution:
        'Vispirms noskaidrosim, ar ko var būt kongruenti veselu skaitļu kvadrāti pēc moduļa 9:\n\n| $n \\pmod{9}$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |\n|---|---|---|---|---|---|---|---|---|---|\n| $n^2 \\pmod{9}$ | 0 | 1 | 4 | 0 | 7 | 7 | 0 | 4 | 1 |\n\nTātad veselu skaitļu kvadrāti pēc moduļa 9 var būt kongruenti ar 0, 1, 4 vai 7. Pārbaudām, ka trīs dažādi atlikumi nevar dot summā skaitli, kas dalās ar 9:\n- $0 + 1 + 4 \\equiv 5 \\not\\equiv 0 \\pmod{9}$;\n- $0 + 1 + 7 \\equiv 8 \\not\\equiv 0 \\pmod{9}$;\n- $0 + 4 + 7 \\equiv 2 \\not\\equiv 0 \\pmod{9}$;\n- $1 + 4 + 7 \\equiv 3 \\not\\equiv 0 \\pmod{9}$.\n\nTātad vismaz divi no atlikumiem ir vienādi, bet tas nozīmē, ka šo kvadrātu starpība dalās ar 9. $\\blacksquare$',
    },
    {
      id: 'ex4',
      grades: [9, 10, 11, 12],
      problem: 'Vai var atrast tādus divus veselus skaitļus, kuru kubu summa, dalot ar 7, dod atlikumu 3?',
      solution:
        'Vispirms noskaidrosim, ar ko var būt kongruenti veselu skaitļu kubi pēc moduļa 7:\n- ja $n \\equiv 0 \\pmod{7}$, tad $n^3 \\equiv 0 \\pmod{7}$;\n- ja $n \\equiv 1 \\pmod{7}$, tad $n^3 \\equiv 1 \\pmod{7}$;\n- ja $n \\equiv 2 \\pmod{7}$, tad $n^3 \\equiv 8 \\equiv 1 \\pmod{7}$;\n- ja $n \\equiv 3 \\pmod{7}$, tad $n^3 \\equiv 27 \\equiv -1 \\pmod{7}$;\n- ja $n \\equiv 4 \\equiv -3 \\pmod{7}$, tad $n^3 \\equiv (-3)^3 \\equiv 1 \\pmod{7}$;\n- ja $n \\equiv 5 \\equiv -2 \\pmod{7}$, tad $n^3 \\equiv (-2)^3 \\equiv -1 \\pmod{7}$;\n- ja $n \\equiv 6 \\equiv -1 \\pmod{7}$, tad $n^3 \\equiv (-1)^3 \\equiv -1 \\pmod{7}$.\n\nTātad veselu skaitļu kubi ir kongruenti ar $0$ vai $\\pm 1$ pēc moduļa 7. Divu veselu skaitļu kubu summa pēc moduļa 7 var pieņemt tikai vērtības $-2, -1, 0, 1, 2$. Tā kā $3 \\equiv -4 \\pmod{7}$ neparādās starp šīm vērtībām, tad divu veselu skaitļu kubu summa nevar dot atlikumu 3, dalot ar 7.',
    },
    {
      id: 'ex5',
      grades: [9, 10, 11, 12],
      problem:
        'Pierādīt: ja trīs veselu skaitļu kubu summa dalās ar 9, tad šo skaitļu reizinājums dalās ar 3.',
      solution:
        'Vispirms noskaidrosim, ar ko var būt kongruenti veselu skaitļu kubi pēc moduļa 9:\n\n| $n \\pmod{9}$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |\n|---|---|---|---|---|---|---|---|---|---|\n| $n^3 \\pmod{9}$ | 0 | 1 | $-1$ | 0 | 1 | $-1$ | 0 | 1 | $-1$ |\n\nPieņemsim pretējo, ka doto trīs skaitļu reizinājums nedalās ar 3; tad neviens no šiem skaitļiem nedalās ar 3, līdz ar to katra skaitļa kubs ir kongruents ar 1 vai $-1$ pēc moduļa 9. Secinām, ka visu doto skaitļu kubu summa pēc moduļa 9 ir pierakstāma formā $\\pm 1 \\pm 1 \\pm 1$.\n\nIevērosim, ka tas ir nepāra skaitlis, kas pēc absolūtās vērtības nepārsniedz 3, tātad nevar būt kongruents ar 0 pēc moduļa 9. Taču tā ir pretruna ar to, ka doto skaitļu kubu summa dalās ar 9. Līdz ar to pieņēmums bijis aplams un doto skaitļu reizinājums dalās ar 3. $\\blacksquare$',
    },
    {
      id: 'ex6',
      grades: [9, 10, 11, 12],
      problem:
        'Pierādīt apgalvojumu: ja $p > 3$ ir pirmskaitlis, tad skaitlis $p^2$, dalot ar 24, dod atlikumu 1.',
      solution:
        'Ievērosim, ka $24 = 8 \\cdot 3$. Tā kā 8 un 3 ir savstarpēji pirmskaitļi, tad pietiekami parādīt, ka visiem pirmskaitļiem $p \\geq 5$ izpildās kongruences $p^2 \\equiv 1 \\pmod{8}$ un $p^2 \\equiv 1 \\pmod{3}$, jo tas nozīmēs, ka $p^2 - 1$ dalās gan ar 8, gan ar 3, tātad $p^2 - 1$ dalās ar $8 \\cdot 3 = 24$.\n\n1) Pamatosim, ka $p^2 \\equiv 1 \\pmod{8}$. Tā kā visi pirmskaitļi $p \\geq 5$ ir nepāra skaitļi, tad pēc moduļa 8 šāds skaitlis $p$ var pieņemt tikai vērtības 1, 3, 5 vai 7.\n\n| $p \\pmod{8}$ | 1 | 3 | 5 | 7 |\n|---|---|---|---|---|\n| $p^2 \\pmod{8}$ | 1 | $9 \\equiv 1$ | $25 \\equiv 1$ | $49 \\equiv 1$ |\n\n2) Pamatosim, ka $p^2 \\equiv 1 \\pmod{3}$. Neviens pirmskaitlis $p \\geq 5$ nedalās ar 3, tātad $p$ var pieņemt tikai vērtības $\\pm 1$ pēc moduļa 3:\n\n| $p \\pmod{3}$ | 1 | 2 |\n|---|---|---|\n| $p^2 \\pmod{3}$ | 1 | $4 \\equiv 1$ |\n\nSecinām, ka visiem pirmskaitļiem $p > 3$ skaitlis $p^2 - 1$ dalās gan ar 8, gan ar 3, tātad $p^2 - 1$ dalās ar 24, kas nozīmē, ka $p^2$, dalot ar 24, dod atlikumu 1. $\\blacksquare$',
    },
    {
      id: 'ex7',
      grades: [9, 10, 11, 12],
      problem:
        'Atrast skaitļu $3^3 - 3,\\ 5^5 - 5,\\ 7^7 - 7,\\ \\ldots,\\ 2015^{2015} - 2015$ lielāko kopīgo dalītāju!',
      solution:
        'Ievērosim, ka $3^3 - 3 = 24$, tātad meklētais lielākais kopīgais dalītājs $d$ nevar būt lielāks kā 24. Pamatosim, ka visi skaitļi dalās ar 24, līdz ar to būs pierādīts, ka $d = 24$. Ievērosim, ka $24 = 8 \\cdot 3$ un visi apskatāmie skaitļi ir formā $n^n - n = n(n^{n-1} - 1)$, turklāt $n = 2k + 1$ ir nepāra.\n\n1) Pamatosim, ka visi skaitļi dalās ar 3.\n- Ja $n$ dalās ar 3, tad arī $n(n^{n-1} - 1)$ dalās ar 3.\n- Ja $n$ nedalās ar 3, tad $n \\equiv \\pm 1 \\pmod{3}$, līdz ar to $n^{n-1} - 1 \\equiv (\\pm 1)^{2k} - 1 \\equiv 0 \\pmod{3}$.\n\n2) Pamatosim, ka visi skaitļi dalās ar 8. Tā kā $(\\pm 1)^2 \\equiv 1 \\pmod{8}$ un $(\\pm 3)^2 \\equiv 9 \\equiv 1 \\pmod{8}$, tad $n^2 \\equiv 1 \\pmod{8}$ un\n$$n^{n-1} - 1 \\equiv (n^2)^k - 1 \\equiv 1^k - 1 \\equiv 0 \\pmod{8}.$$\nTātad reizinājums $n(n^{n-1} - 1)$ dalās ar 8.\n\nEsam pierādījuši, ka katrs $n^n - n$ dalās gan ar 3, gan ar 8, tātad lielākais kopīgais dalītājs ir $\\mathbf{24}$. $\\blacksquare$',
    },
  ],
}

export const kongruencesQuiz = [
  {
    id: 'q1',
    question: 'Ko nozīmē $a \\equiv b \\pmod{m}$?',
    options: ['$a$ un $b$ dalās ar $m$', '$a$ un $b$, dalot ar $m$, dod vienādu atlikumu', '$a - b = m$', '$a$ dalās ar $b$'],
    correct: 1,
  },
  {
    id: 'q2',
    question: 'Vai $17 \\equiv 3 \\pmod{7}$?',
    options: ['Jā, jo $17 - 3 = 14$ dalās ar 7', 'Nē, jo $17 - 3 = 14$ nedalās ar 7', 'Jā, jo abi dalās ar 7', 'Nē, jo $17 > 3$'],
    correct: 0,
  },
  {
    id: 'q3',
    question: 'Kādas vērtības var pieņemt atlikums, dalot ar $b$?',
    options: ['$1, 2, \\ldots, b$', '$0, 1, 2, \\ldots, b - 1$', '$0, 1, 2, \\ldots, b$', 'Jebkurš vesels skaitlis'],
    correct: 1,
  },
  {
    id: 'q4',
    question: 'Ja $a \\equiv b \\pmod{m}$ un $c \\equiv d \\pmod{m}$, kas izriet?',
    options: ['$a + c \\equiv b + d \\pmod{m}$', '$a + c \\equiv b - d \\pmod{m}$', '$ac \\equiv b + d \\pmod{m}$', '$a \\equiv d \\pmod{m}$'],
    correct: 0,
  },
  {
    id: 'q5',
    question: 'Kādu atlikumu, dalot ar 3, var dot vesela skaitļa kvadrāts?',
    options: ['0, 1 vai 2', 'Tikai 0', '0 vai 1', '1 vai 2'],
    correct: 2,
  },
  {
    id: 'q6',
    question: 'Ar ko ir kongruenti veselu skaitļu kubi pēc moduļa 7?',
    options: ['0, 1, 2, 3, 4, 5 vai 6', '0 vai $\\pm 1$', 'Tikai 0 vai 1', '$\\pm 1$ vai $\\pm 2$'],
    correct: 1,
  },
  {
    id: 'q7',
    question: 'Kāds ir perioda garums virknei $3^n \\pmod{7}$?',
    options: ['3', '7', '6', '4'],
    correct: 2,
  },
  {
    id: 'q8',
    question: 'Kādu atlikumu dod $3^{50}$, dalot ar 7?',
    options: ['1', '3', '4', '2'],
    correct: 3,
  },
  {
    id: 'q9',
    question: 'Ja $p > 3$ ir pirmskaitlis, kādu atlikumu dod $p^2$, dalot ar 24?',
    options: ['0', '1', '3', 'Atkarīgs no $p$'],
    correct: 1,
  },
  {
    id: 'q10',
    question: 'Kāds ir skaitļu $3^3 - 3,\\ 5^5 - 5,\\ 7^7 - 7, \\ldots$ lielākais kopīgais dalītājs?',
    options: ['3', '8', '12', '24'],
    correct: 3,
  },
]
