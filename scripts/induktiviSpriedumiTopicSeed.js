/** Firestore topic document: induktivi-spriedumi */
export default {
  displayName: 'Induktīvi spriedumi',
  slug: 'induktivi-spriedumi',
  subject: 'kombinatorika',
  order: 2,
  theory: {
    sections: [
      {
        title: 'Induktīvā spriešana',
        content:
          "**Indukcija** (no latīņu valodas 'inductio' – uzvedināšana, ierosināšana) – loģisks slēdziens, pārejot no atsevišķiem gadījumiem uz vispārinājumu.\n\n**Induktīvā spriešana** – spriešanas paņēmiens, kurā secinājumi tiek iegūti, balstoties uz vairāku eksperimentu vai vērojumu laikā gūtiem rezultātiem. Šādā veidā iegūtos spriedumus sauc par **induktīviem spriedumiem**.\n\nDomāšanas un spriešanas procesā tiek izteikti dažādi apgalvojumi. Tie var būt patiesi, aplami vai tādi, kuru patiesumu nav iespējams novērtēt.\n\nPieņemsim, ka kādam sportistam ir uzdevums aizlēkt tālumā 7 metrus. Ja viņš ir starptautiskas klases sporta meistars tāllēkšanā, tas viņam sevišķas grūtības nesagādās; ja turpretī viņš ar tāllēkšanu iepriekš nav nodarbojies, tad mēģinājums veikt uzdevumu uzreiz nevar beigties citādi kā ar neveiksmi. Lai izpildītu šo atsevišķo uzdevumu, sportists trenēsies un vispirms aizlēks tālumā 3 m, pēc tam 4 m, 5 m, 6 m, un tikai tad ķersies pie sākotnējā uzdevuma – aizlēkt 7 m tālu.\n\nLīdzīga situācija bieži gadās arī matemātikā: lai atrisinātu kādu atsevišķu problēmu, tiek aplūkota problēmu virkne. Risinot citu pēc citas šīs virknes problēmas, galu galā izdodas saprast, kā risināt vispārīgo problēmu, un tā mēs nonākam pie interesējošās problēmas atrisinājuma.",
      },
    ],
  },
  solvedExamples: [
    {
      id: 'ex1',
      problem:
        'Atrast skaitļa $1^2 + 2^2 + \\cdots + 99^2$ pēdējo ciparu!',
      solution:
        'Lai atrastu dotās summas pēdējo ciparu, sagrupējam saskaitāmos un nosakām katras grupas summas pēdējo ciparu šādā veidā:\n- $10^2 + 20^2 + \\cdots + 90^2$ pēdējais cipars ir $0$, jo katra saskaitāmā pēdējais cipars ir $0$ un pavisam ir $9$ šādi saskaitāmie.\n- $1^2 + 11^2 + 21^2 + \\cdots + 91^2$ pēdējais cipars ir $0$, jo katra saskaitāmā pēdējais cipars ir $1^2 = 1$ un pavisam ir $10$ šādi saskaitāmie: $1 \\cdot 10 = 10$.\n- Līdzīgi $2^2 + 12^2 + 22^2 + \\cdots + 92^2$ pēdējais cipars ir $0$, jo katra saskaitāmā pēdējais cipars ir $2^2 = 4$ un pavisam ir $10$ šādi saskaitāmie.\n- Tāpat secinām, ka arī visas pārējās saskaitāmo grupas ir $10$ tādu skaitļu summas, kur visu saskaitāmo pēdējie cipari ir vienādi un visas summas pēdējais cipars ir $0$.\n\nIr $10$ grupas, katrai no tām summas pēdējais cipars ir $0$, tātad uzdevumā dotā skaitļa pēdējais cipars ir $\\mathbf{0}$.',
    },
    {
      id: 'ex2',
      problem:
        'Uz tāfeles rindā uzrakstīti skaitļi $1; 2; 3; \\ldots; 2017; 2018$. Kā katram no tiem pierakstīt priekšā „$+$" vai „$-$" zīmi tā, lai iegūtajai izteiksmei būtu vismazākā iespējamā pozitīvā vērtība?',
      solution:
        'Tā kā visi uz tāfeles uzrakstītie skaitļi ir naturāli, tad rezultāts noteikti būs vesels skaitlis. Mazākais pozitīvais veselais skaitlis ir $1$. Ja parādīsim, ka var iegūt vērtību $1$, tad uzdevums būs atrisināts.\n\nApskatām četrus pēc kārtas esošus naturālus skaitļus $n; n+1; n+2; n+3$. Ievērojam, ka katram no tiem var pierakstīt priekšā „$+$" vai „$-$" zīmi tā, lai iegūtu summu $0$:\n$$+n - (n+1) - (n+2) + (n+3) = 0$$\n\nSagrupējam skaitļus no $1$ līdz $2016$ grupās pa četri tā, lai katrā grupā esošo skaitļu summa būtu $0$, bet skaitļiem $2017$ un $2018$ priekšā liekam attiecīgi „$-$" vai „$+$":\n$$\\underbrace{+1 - 2 - 3 + 4}_{=0} + \\underbrace{+5 - 6 - 7 + 8}_{=0} + \\ldots + \\underbrace{+2013 - 2014 - 2015 + 2016}_{=0} - 2017 + 2018 = 1.$$\n\nLīdz ar to esam parādījuši, kā salikt zīmes, lai iegūtu summu $1$.',
    },
    {
      id: 'ex3',
      problem:
        'Pierādīt, ka\n$$\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\frac{1}{3 \\cdot 4} + \\ldots + \\frac{1}{2019 \\cdot 2020} = \\frac{2019}{2020}.$$',
      solution:
        'Ievērojam, ka visiem naturāliem skaitļiem $n$ izpildās vienādība $\\dfrac{1}{n(n+1)} = \\dfrac{1}{n} - \\dfrac{1}{n+1}$. Tāpēc pierādāmās vienādības kreisās puses izteiksmi var pārveidot formā:\n$$\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\frac{1}{3 \\cdot 4} + \\ldots + \\frac{1}{2019 \\cdot 2020} = \\left(\\frac{1}{1} - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\cdots + \\left(\\frac{1}{2019} - \\frac{1}{2020}\\right)$$\n\nIevērojam, ka šajā izteiksmē parādās pretēji skaitļi, kuru summa ir $0$, līdz ar to pēc vienkāršošanas paliek tikai divi saskaitāmie $\\dfrac{1}{1}$ un $-\\dfrac{1}{2020}$, tātad\n$$\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\frac{1}{3 \\cdot 4} + \\ldots + \\frac{1}{2019 \\cdot 2020} = \\frac{1}{1} - \\frac{1}{2020} = \\frac{2019}{2020},$$\nkas arī bija jāpierāda.',
    },
    {
      id: 'ex4',
      problem:
        'Vai var atrast tādus $2019$ dažādus naturālus skaitļus $a_1, a_2, \\ldots, a_{2019}$, ka $\\dfrac{1}{a_1} + \\dfrac{1}{a_2} + \\ldots + \\dfrac{1}{a_{2019}} = 1$?',
      solution:
        'Ievērojam, ka $\\dfrac{1}{2} + \\dfrac{1}{3} + \\dfrac{1}{6} = 1$. Parādīsim, kā no $n$ saskaitāmajiem var iegūt $(n+1)$ saskaitāmo. Dalām vienādības $\\dfrac{1}{2} + \\dfrac{1}{3} + \\dfrac{1}{6} = 1$ abas puses ar $2$:\n$$\\frac{1}{4} + \\frac{1}{6} + \\frac{1}{12} = \\frac{1}{2}.$$\nPēc tam abām iegūtās vienādības pusēm pieskaitām $\\dfrac{1}{2}$:\n$$\\frac{1}{4} + \\frac{1}{6} + \\frac{1}{12} + \\frac{1}{2} = 1.$$\nEsam ieguvuši četrus dažādus saskaitāmos, kuru summa ir $1$.\n\nAtkal dalot iegūtās vienādības abas puses ar $2$ un pieskaitot $\\dfrac{1}{2}$, palielinām saskaitāmo skaitu par $1$, tas ir, iegūstam piecus dažādus saskaitāmos, kuru summa ir $1$:\n$$\\frac{1}{8} + \\frac{1}{12} + \\frac{1}{24} + \\frac{1}{4} + \\frac{1}{2} = 1.$$\n\nŠādi turpinot, iegūsim $2019$ dažādus saskaitāmos, kuru summa ir $1$ un tie visi būs dažādi.',
    },
    {
      id: 'ex5',
      problem:
        'Ir pieejams neierobežots daudzums $7$ un $13$ centu pastmarku, kuras izmanto pasta sūtījumu apmaksāšanai. Diemžēl dažas summas nav iespējams apmaksāt tikai ar šīm pastmarkām (piemēram, ja sūtījums maksā $6$, $8$ vai $25$ centus). Kāda ir lielākā summa, kuru nav iespējams apmaksāt, izmantojot tikai šīs pastmarkas?',
      solution:
        'Parādīsim, ka $71$ centu nav iespējams precīzi apmaksāt ar $7$ un $13$ centu pastmarkām. Šajā summā ir ne vairāk kā piecas $13$ centu pastmarkas. Aplūkosim, kāda summa atkarībā no izmantoto $13$ centu pastmarku skaita būtu jāapmaksā ar $7$ centu pastmarkām.\n\n| $13$ centu pastmarku skaits | Summa ar $13$ cent. | Summa ar $7$ cent. |\n|---|---|---|\n| $0$ | $0$ | $71$ |\n| $1$ | $13$ | $58$ |\n| $2$ | $26$ | $45$ |\n| $3$ | $39$ | $32$ |\n| $4$ | $52$ | $19$ |\n| $5$ | $65$ | $6$ |\n\nNevienā no variantiem atlikusī summa nav $7$ daudzkārtnis, tātad šo summu nav iespējams apmaksāt ar $7$ centu pastmarkām. Tātad $71$ centu nav iespējams precīzi apmaksāt ar $7$ un $13$ centu pastmarkām.\n\nPierādīsim, ka visas summas, kas ir lielākas nekā $71$ cents, ir iespējams samaksāt. Ievērojam, ja varam apmaksāt $n$ centus, tad, pievienojot klāt vienu $7$ centu pastmarku, varēsim apmaksāt arī $n + 7$ centus. Tātad mums jāparāda, ka var apmaksāt $72$, $73$, $74$, $75$, $76$, $77$ un $78$ centus:\n\n| Summa | Kā apmaksāt |\n|---|---|\n| $72$ | $1 \\cdot 7 + 5 \\cdot 13$ |\n| $73$ | $3 \\cdot 7 + 4 \\cdot 13$ |\n| $74$ | $5 \\cdot 7 + 3 \\cdot 13$ |\n| $75$ | $7 \\cdot 7 + 2 \\cdot 13$ |\n| $76$ | $9 \\cdot 7 + 1 \\cdot 13$ |\n| $77$ | $11 \\cdot 7$ |\n| $78$ | $6 \\cdot 13$ |\n\nTā kā visas summas no $72$ līdz $78$ ir apmaksājamas un katrai no tām, pievienojot $7$ centu pastmarkas, iegūstam visas lielākās summas, tad lielākā summa, ko nevar apmaksāt, ir $\\mathbf{71}$ cents.\n\n**Piezīme.** Lielākās summas atrašanai var izmantot arī faktu: ja $a$ un $b$ ir savstarpēji pirmskaitļi, tad lielākais skaitlis, ko nevar izteikt ar $a$ un $b$, ir $ab - a - b$. Šajā gadījumā $7 \\cdot 13 - 7 - 13 = 91 - 20 = 71$.',
    },
  ],
}
