/** Firestore: topic vienādojumi-veselos-skaitļos + quiz */

export const vienadojumiVeselosSkaitlosTopicId = 'vienādojumi-veselos-skaitļos'

export const vienadojumiVeselosSkaitlosTopicData = {
  displayName: 'Vienādojumi veselos skaitļos',
  slug: 'vienādojumi-veselos-skaitļos',
  subject: 'skaitlu_teorija',
  order: 1,
  theory: {
    sections: [
      {
        title: 'Ievads un dalāmības īpašības',
        content: `Dažreiz, lai pamatotu, ka nav iespējams atrast tādus skaitļus, kam izpildās uzdevumā prasītās īpašības, ir izdevīgi izmantot dalāmības īpašības.

*Atceries!* Ja $b \\neq 0$ un $a : b = k$, kur $a, b, k$ – veseli skaitļi, tad saka, ka $a$ dalās ar $b$ (apzīmē $a \\vdots b$). Pretējā gadījumā saka, ka $a$ nedalās ar $b$.

Piemēram, 15 dalās ar 3, bet 15 nedalās ar 2.

*Iegaumē!* Ja tiek runāts par skaitļu dalāmību, tad runa ir tikai par veseliem skaitļiem.

**Dalāmības īpašības** (Visi tālāk minētie skaitļi ir veseli.)

- Ja katrs no vairākiem saskaitāmajiem dalās ar $n$, tad to visu summa dalās ar $n$.
- Ja divi skaitļi dalās ar $n$, tad arī to starpība dalās ar $n$.
- Ja kaut viens no vairākiem naturāliem skaitļiem dalās ar $n$, tad to visu reizinājums dalās ar $n$.
- Ja vairāku skaitļu summa un visi skaitļi, izņemot vienu, dalās ar $n$, tad arī šis pēdējais skaitlis dalās ar $n$.

Uzdevumos izmantosim ideju: **ja vienādības labā puse dalās ar $n$, tad arī vienādības kreisajai pusei jādalās ar $n$ (un otrādi).**

*Atceries!* Naturālie skaitļi: $1, 2, 3, 4, \\ldots$; veselie skaitļi: $\\ldots, -2, -1, 0, 1, 2, 3, \\ldots$

*Iegaumē!* Ja uzdevumā ir jautājums „Vai var…?", „Vai iespējams…?" un atbilde ir:
- „JĀ", tad risinājumā jāparāda piemērs, kurā visas uzdevuma prasības ir izpildītas;
- „NĒ", tad ar dažu atsevišķu piemēru apskatīšanu nepietiek, bet ir vajadzīgs pierādījums, kas balstās uz vispārīgiem spriedumiem.

*Iegaumē!* Ja uzdevumā ir jautājums „Kāds var būt...?"; „Cik...?", tad uzdevuma risinājumam jāsastāv no divām daļām:
1. jāaplūko visi iespējamie gadījumi un atbildē jāuzrāda visas atrastās vērtības;
2. jāpamato, ka citu vērtību nav.`,
      },
      {
        title: 'Vienādojumi veselos skaitļos — īpašā skaitļa metode',
        content: `Apskatīsim algebriskus vienādojumus ar veseliem koeficientiem, kuriem atrisinājums jāmeklē veselo vai naturālo skaitļu kopā. Uzdevumos izmantosim ideju: **ja var pierādīt, ka vienādojuma abas puses, dalot ar kādu šim vienādojumam īpaši izvēlētu skaitli, noteikti dod dažādus atlikumus, tad vienādojumam nav atrisinājuma.**

*Ievēro!* Ja vienādojuma abas puses dalās ar kādu skaitli, tad no tā nevar secināt, ka vienādojumam ir atrisinājums veselos skaitļos.

**Daži īpašā skaitļa izvēles principi:**

- Izvēlamies tikai pirmskaitļus vai to pakāpes.
- Sākam ar maziem skaitļiem $2; 3; 4; 5; 7; 8; 9; 11; \\ldots$
- Izvēlamies skaitļus, kas ir vienādojuma koeficientu dalītāji.
- Vienādojumos, kuros parādās skaitļu $k$-tās pakāpes, izvēlamies skaitļus $k^2$ un visus pirmskaitļus, kas izsakāmi formā $mk + 1$. Piemēram, vienādojumos, kas saistīti ar skaitļu kubiem, sākotnējie īpašie skaitļi ir $9; 7; 13; 19; \\ldots$
- Vienādojumos, kuri satur veselu skaitļu kvadrātus, parasti izdevīgi aplūkot atlikumus, dalot ar 4, 8 vai 16, dažreiz ar 3.
- Jācenšas izvēlēties tādu skaitli, lai iespējami daudziem saskaitāmajiem būtu pēc iespējas mazāk dažādu iespējamu atlikumu.

Ja vienādojums satur mainīgos $x_1, x_2, \\ldots, x_n$, tad par tā atrisinājumu sauc skaitļu komplektu $(a_1, a_2, \\ldots, a_n)$ ar šādu īpašību: ievietojot vienādojumā $x_i$ vietā $a_i$, iegūst patiesu skaitlisku vienādību.

Atrisināt vienādojumu nozīmē atrast visus vienādojuma atrisinājumus un pierādīt, ka citu atrisinājumu bez atrastajiem nav.`,
      },
    ],
  },
  solvedExamples: [
    {
      id: 'ex1',
      grades: [5, 6, 7, 8],
      problem: 'Vai var atrast tādus naturālus skaitļus $x$ un $y$, ka $6 \\cdot x + 16 \\cdot y = 2015$?',
      solution:
        'Ievērojam, ka dotā vienādojuma kreisās puses izteiksmes vērtība ir pāra skaitlis (dalās ar 2), bet labajā pusē ir nepāra skaitlis (nedalās ar 2). Tā kā pāra skaitlis nevar būt vienāds ar nepāra skaitli, tad nevar atrast tādus naturālus skaitļus $x$ un $y$, lai dotā vienādība būtu patiesa.',
    },
    {
      id: 'ex2',
      grades: [5, 6, 7, 8],
      problem: 'Vai var atrast tādus veselus skaitļus $x$ un $y$, ka a) $12 \\cdot x - 8 \\cdot y = 2$; b) $11 \\cdot x - 7 \\cdot y = 2$?',
      solution:
        'a) Nē, nevar atrast. Gan 12, gan 8 dalās ar 4, tātad arī $12 \\cdot x$ un $8 \\cdot y$ dalās ar 4, kā arī to starpība dalās ar 4. Tā kā vienādības kreisā puse dalās ar 4, tad ar 4 ir jādalās arī vienādības labajai pusei, taču skaitlis 2 ar 4 nedalās.\n\nb) Jā, piemēram, der $x = 4$ un $y = 6$, jo $11 \\cdot 4 - 7 \\cdot 6 = 44 - 42 = 2$.',
    },
    {
      id: 'ex3',
      grades: [5, 6, 7, 8],
      problem:
        'Pa sienu rāpo mušas un zirnekļi. Cik mušas un cik zirnekļi rāpo pa šo sienu, ja pavisam kopā ir 80 kājas?',
      solution:
        'Mušai ir sešas kājas, bet zirneklim ir astoņas kājas. Mušu skaitu uz sienas apzīmēsim ar $m$, bet zirnekļu skaitu – ar $z$. Tad no uzdevuma nosacījumiem izriet, ka $6 \\cdot m + 8 \\cdot z = 80$ jeb $3 \\cdot m + 4 \\cdot z = 40$. Tā kā vienādojuma labā puse dalās ar 4, tad arī vienādojuma kreisai pusei jādalās ar 4, bet tas nozīmē, ka $m$ dalās ar 4. Tā kā pa sienu rāpo gan mušas, gan zirnekļi, tad $m > 0$, un tā kā kopā ir ne vairāk kā 80 kājas, tad $m < 14$. Tātad $m$ var pieņemt trīs dažādas vērtības:\n- Ja $m = 4$, tad $z = 7$;\n- ja $m = 8$, tad $z = 4$;\n- ja $m = 12$, tad $z = 1$.\n\nLīdz ar to pa sienu rāpo vai nu 7 zirnekļi un 4 mušas, vai 4 zirnekļi un 8 mušas, vai 1 zirneklis un 12 mušas.',
    },
    {
      id: 'ex4',
      grades: [5, 6, 7, 8],
      problem:
        'Kādus naturālus skaitļus var ievietot $x$ un $y$ vietā, lai iegūtu patiesu vienādību $5 \\cdot x + 2 \\cdot y = 30$?',
      solution:
        'Doto vienādojumu pārveidojam par $2 \\cdot y = 30 - 5 \\cdot x$. Tā kā vienādojuma labā puse dalās ar 5, tad arī $2 \\cdot y$ jādalās ar 5. Skaitlis 2 ar 5 nedalās, tātad $y$ jādalās ar 5.\n\nJa $y = 5$, tad $x = 4$; ja $y = 10$, tad $x = 2$; ja $y \\geq 15$, tad $x \\leq 0$, kas nav naturāls skaitlis.\n\nLīdz ar to vai nu $x = 4$ un $y = 5$, vai $x = 2$ un $y = 10$.',
    },
    {
      id: 'ex5',
      grades: [5, 6, 7, 8],
      problem:
        'Tabulā, kuras izmēri ir $3 \\times 3$ rūtiņas, katrā rūtiņā ierakstīts naturāls skaitlis. Vai var būt, ka vienā rindā ierakstīto skaitļu summa ir 2015, vienā kolonnā ierakstīto skaitļu summa ir 2016, bet pārējās rindās un kolonnās visas ierakstīto skaitļu summas dalās ar 3?',
      solution:
        'Nē, tā nevar būt. Apzīmēsim pārējās rindās un kolonnās ierakstīto skaitļu summas attiecīgi ar $r, R, k, K$, bet visu tabulā ierakstīto skaitļu summu ar $S$. Tad $S = 2015 + r + R$ (skaitot pa rindām) un $S = 2016 + k + K$ (skaitot pa kolonnām). Tātad\n$$2015 + r + R = 2016 + k + K.$$\nTā kā vienādības labā puse dalās ar 3 (jo katrs saskaitāmais dalās ar 3), tad ar 3 ir jādalās arī kreisajai pusei, bet tā nav, jo $r$ un $R$ dalās ar 3, bet 2015 – nedalās.',
    },
    {
      id: 'ex6',
      grades: [9, 10, 11, 12],
      problem: 'Pierādīt, ka vienādojumam $x^2 + y^2 = 2015$ nav atrisinājuma naturālos skaitļos!',
      solution:
        'Naturāla skaitļa kvadrāts, dalot ar 4, var dot tikai atlikumu 0 vai 1. Tāpēc $x^2 + y^2$, dalot ar 4, var dot tikai atlikumu 0, 1 vai 2. Taču skaitlis 2015 dod atlikumu 3, dalot ar 4. Tāpēc dotajam vienādojumam nav atrisinājuma naturālos skaitļos.',
    },
    {
      id: 'ex7',
      grades: [9, 10, 11, 12],
      problem: 'Atrisināt veselos skaitļos vienādojumu $5x^2 - 2y^2 = 4$.',
      solution:
        'Pārrakstām vienādojumu formā $5x^2 = 2y^2 + 4$. Apskatām labās puses izteiksmi pēc moduļa 5:\n\n| $y \\pmod{5}$ | $2y^2 + 4 \\pmod{5}$ |\n|---|---|\n| 0 | 4 |\n| 1 | 1 |\n| 2 | 2 |\n| 3 | 2 |\n| 4 | 1 |\n\nEsam ieguvuši, ka $2y^2 + 4$ nekad nedalās ar 5, bet $5x^2$ vienmēr dalās ar 5. Tātad dotajam vienādojumam nav atrisinājuma veselos skaitļos.',
    },
    {
      id: 'ex8',
      grades: [9, 10, 11, 12],
      problem: 'Pierādīt, ka vienādojumam $(x - y)^2 = 6xy + 7$ nav atrisinājuma naturālos skaitļos!',
      solution:
        '**1. atrisinājums.** Pārveidojam doto vienādojumu formā $x^2 + y^2 = 8xy + 7$. Gan $x^2$, gan $y^2$ pēc moduļa 4 var pieņemt tikai vērtības 0 un 1, tāpēc kreisā puse pēc moduļa 4 var pieņemt tikai vērtības 0, 1 vai 2, bet $8xy + 7 \\equiv 3 \\pmod{4}$. Tātad dotajam vienādojumam nav atrisinājuma naturālos skaitļos.\n\n**2. atrisinājums.** Pārveidojam: $(x + y)^2 = 10xy + 7$. Kreisajā pusē ir kvadrāts, kura pēdējais cipars var būt tikai $0, 1, 4, 5, 6, 9$, bet labās puses pēdējais cipars ir 7. Tātad abas puses nevar būt vienādas.\n\n**3. atrisinājums.** Pēc moduļa 5: $(x+y)^2$ var dot atlikumus 0, 1 vai 4, bet $10xy + 7 \\equiv 2 \\pmod{5}$. Tātad dotajam vienādojumam nav atrisinājuma naturālos skaitļos.',
    },
    {
      id: 'ex9',
      grades: [9, 10, 11, 12],
      problem: 'Atrisināt naturālos skaitļos vienādojumu $7^x + 8^y = 13^z$.',
      solution:
        'Apskatīsim doto vienādojumu pēc moduļa 3. Tā kā $7 \\equiv 1 \\pmod{3}$, $8 \\equiv -1 \\pmod{3}$ un $13 \\equiv 1 \\pmod{3}$, tad iegūstam $1^x + (-1)^y \\equiv 1 \\pmod{3}$. Kreisās puses vērtība ir 0 vai 2, bet labās puses vērtība ir 1 — pretruna. Tātad dotajam vienādojumam nav atrisinājuma naturālos skaitļos.',
    },
    {
      id: 'ex10',
      grades: [9, 10, 11, 12],
      problem:
        'Pierādīt, ka neeksistē tādi naturāli skaitļi $x$, $y$ un $z$, ka izpildās vienādība $6^x + 13^y = 29^z$.',
      solution:
        'Apskatīsim doto vienādojumu pēc moduļa 7. Tā kā $6 \\equiv -1 \\pmod{7}$, $13 \\equiv -1 \\pmod{7}$ un $29 \\equiv 1 \\pmod{7}$, tad iegūstam $(-1)^x + (-1)^y \\equiv 1 \\pmod{7}$. Kreisās puses vērtība ir 0 vai $\\pm 2$, bet labās puses vērtība ir 1 — pretruna. Tātad dotajam vienādojumam nav atrisinājuma naturālos skaitļos. $\\blacksquare$',
    },
    {
      id: 'ex11',
      grades: [9, 10, 11, 12],
      problem: 'Atrisināt veselos skaitļos vienādojumu $x^2 + 8z = 2y^2 + 3$.',
      solution:
        'Apskatām doto vienādojumu pēc moduļa 8. Veselu skaitļu kvadrāti, dalot ar 8, var dot tikai atlikumus 0, 1 vai 4:\n\n| $a \\pmod{8}$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |\n|---|---|---|---|---|---|---|---|---|\n| $a^2 \\pmod{8}$ | 0 | 1 | 4 | 1 | 0 | 1 | 4 | 1 |\n\nKreisā puse $x^2 + 8z$ pēc moduļa 8 var dot tikai atlikumus 0, 1 vai 4. Savukārt $2y^2$ pēc moduļa 8 var dot tikai atlikumus 0 vai 2, tātad $2y^2 + 3$ pēc moduļa 8 var dot tikai atlikumus 3 vai 5. Tātad nav tādu veselu $x$ un $y$ vērtību, pie kurām abas puses dotu vienādu atlikumu. Dotajam vienādojumam nav atrisinājuma veselos skaitļos.',
    },
  ],
}

export const vienadojumiVeselosSkaitlosQuiz = [
  {
    id: 'q1',
    question: 'Vai vienādojumam $6x + 16y = 2015$ ir atrisinājums naturālos skaitļos?',
    options: [
      'Jā, jo 6 un 16 dalās ar 2',
      'Nē, jo kreisā puse ir pāra, bet labā — nepāra',
      'Jā, piemēram, $x = 1, y = 1$',
      'Nē, jo 2015 ir pirmskaitlis',
    ],
    correct: 1,
  },
  {
    id: 'q2',
    question: 'Vai vienādojumam $12x - 8y = 2$ ir atrisinājums veselos skaitļos?',
    options: [
      'Jā, jo $x = 1, y = 1$ der',
      'Nē, jo kreisā puse dalās ar 4, bet 2 — nedalās',
      'Jā, jo 12 un 8 ir pāra skaitļi',
      'Nē, jo $12 > 8$',
    ],
    correct: 1,
  },
  {
    id: 'q3',
    question: 'Kādus atlikumus var dot naturāla skaitļa kvadrāts, dalot ar 4?',
    options: ['0, 1, 2 vai 3', 'Tikai 1', '0 vai 1', '1 vai 2'],
    correct: 2,
  },
  {
    id: 'q4',
    question: 'Kāpēc $x^2 + y^2 = 2015$ nav atrisinājuma naturālos skaitļos?',
    options: [
      'Jo 2015 ir nepāra',
      'Jo $x^2 + y^2$ pēc moduļa 4 var dot atlikumu 0, 1 vai 2, bet 2015 dod atlikumu 3',
      'Jo $x^2 + y^2$ vienmēr ir pāra',
      'Jo 2015 nedalās ar 5',
    ],
    correct: 1,
  },
  {
    id: 'q5',
    question: 'Kādu īpašo skaitli lietderīgi izvēlēties, analizējot vienādojumus ar kubiem?',
    options: ['4 vai 16', '2 vai 5', '9, 7, 13 vai 19', 'Tikai 2'],
    correct: 2,
  },
  {
    id: 'q6',
    question: 'Vai vienādojumam $7^x + 8^y = 13^z$ ir atrisinājums naturālos skaitļos?',
    options: [
      'Jā, jo visi trīs ir naturāli skaitļi',
      'Nē, ko var pierādīt, aplūkojot vienādojumu pēc moduļa 3',
      'Jā, jo $x = y = z = 1$ der',
      'Nē, jo 13 ir pirmskaitlis',
    ],
    correct: 1,
  },
  {
    id: 'q7',
    question: 'Kādus atlikumus var dot vesela skaitļa kvadrāts, dalot ar 8?',
    options: ['0, 1, 2, 3, 4', '0, 1 vai 4', 'Tikai 0 vai 4', '1, 4 vai 5'],
    correct: 1,
  },
  {
    id: 'q8',
    question: 'Ko nozīmē „atrisināt vienādojumu veselos skaitļos"?',
    options: [
      'Atrast vienu piemēru, kas der',
      'Pierādīt, ka nav atrisinājuma',
      'Atrast visus atrisinājumus un pierādīt, ka citu nav',
      'Pārbaudīt dažas vērtības',
    ],
    correct: 2,
  },
  {
    id: 'q9',
    question: 'Kādu atlikumu dod $8xy + 7$, dalot ar 4?',
    options: ['0', '1', '2', '3'],
    correct: 3,
  },
  {
    id: 'q10',
    question: 'Vai $6^x + 13^y = 29^z$ ir atrisinājums naturālos skaitļos?',
    options: [
      'Jā, jo visi koeficienti ir pozitīvi',
      'Nē, ko var pierādīt pēc moduļa 7, jo kreisā puse ir 0 vai $\\pm 2$, bet labā — 1',
      'Jā, piemēram, $x = y = z = 2$',
      'Nē, jo 29 ir pirmskaitlis',
    ],
    correct: 1,
  },
]
