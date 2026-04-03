export const skaitlaPierakstsPapildinajumi = [
  {
    id: 'ex_sp1',
    grades: [5, 6],
    problem:
      'Divu naturālu skaitļu pierakstā izmantoti tikai cipari 2, 3, 7 un 8. Vai var gadīties, ka viens skaitlis ir tieši trīs reizes lielāks nekā otrs skaitlis?',
    solution:
      'Ja skaitļa pēdējais cipars ir 2, 3, 7 vai 8, tad trīs reizes lielāka skaitļa pēdējais cipars ir attiecīgi 6, 9, 1 vai 4, bet pēc uzdevuma nosacījumiem nevienu no šiem cipariem nevar izmantot skaitļu pierakstā. Tātad uzdevumā prasītais nav iespējams.',
  },
  {
    id: 'ex_sp2',
    grades: [5, 6],
    problem:
      'Atrodi vislielāko piecciparu skaitli, kuram ceturtais cipars (desmitu cipars) ir lielāks nekā piektais cipars (vienu cipars), trešais cipars lielāks nekā ceturtā un piektā cipara summa, otrais cipars ir lielāks nekā trešā, ceturtā un piektā cipara summa, bet pirmais cipars ir lielāks nekā visu pārējo ciparu summa!',
    solution:
      'Meklētais piecciparu skaitlis ir 95210. Pamatosim, ka vēl lielāku skaitli nevar iegūt. Tā kā jāmeklē vislielākais skaitlis, tad pirmajam ciparam jābūt iespējami lielam, tas ir, 9. Tātad pārējo četru ciparu summa nedrīkst pārsniegt 8. Visiem cipariem jābūt dažādiem, jo katrs cipars ir lielāks nekā tam sekojošo ciparu summa. Tūkstošu cipars nevar būt lielāks kā 5, jo jau $8 - 6 = 2$, ko nevar izteikt kā trīs dažādu ciparu summu. Tātad, lai atrastu lielāko piecciparu skaitli, tūkstošu ciparam jābūt 5 un tas nozīmē, ka simtu, desmitu un vienu cipars attiecīgi var būt tikai 2, 1 un 0. Līdz ar to lielākais piecciparu skaitlis, kam izpildās prasītās īpašības, ir 95210.',
  },
  {
    id: 'ex_sp3',
    grades: [5, 6],
    problem:
      'Vai ir tāds naturāls četrciparu skaitlis ar šādu īpašību: ja skaitļa pēdējo ciparu pārceļ uz skaitļa sākumu, tad iegūst četrciparu skaitli, kas ir 6 reizes mazāks nekā sākotnējais skaitlis?',
    solution:
      'Nē, nav tāds skaitlis. Apzīmēsim sākotnējo četrciparu skaitli ar $x$, bet iegūto četrciparu skaitli ar $y$. Tādā gadījumā $6 \\cdot y = x$. Tā kā vienādojuma kreisajā pusē iegūstam pāra skaitli, tad $x$ ir pāra skaitlis. Tātad $x$ pēdējais cipars ir pāra cipars. Tas nevar būt 0, jo tad $y$ nebūtu četrciparu skaitlis. Tātad četrciparu skaitļa $x$ pēdējā cipara mazākā iespējamā vērtība ir 2 un tas nozīmē, ka $y$ pirmais cipars nav mazāks par 2. Pat tādā gadījumā, ja mēs izvēlētos pašu mazāko četrciparu skaitli ar šādu īpašību, tas ir, skaitli 2000, to reizinot ar 6, jau iegūst piecciparu skaitli, bet $x$ ir četrciparu skaitlis, tātad tas nav iespējams.',
  },
  {
    id: 'ex_sp4',
    grades: [5, 6],
    problem:
      'Ziemeļbriedis Rūdolfs zina, ka 1) viņa numurs ir sešciparu skaitlis, kas vienādi lasāms gan no kreisās, gan no labās puses; 2) tas dalās ar 3; 3) nosvītrojot pirmo un pēdējo ciparu, iegūst četrciparu skaitli, kura visi pirmreizinātāji ir vienādi ar 11. Kāds numurs var būt piešķirts Rūdolfam?',
    solution:
      'Sāksim risinājumu ar 3) nosacījumu. Tā kā $11 \\cdot 11 = 121$ ir trīsciparu skaitlis un $11 \\cdot 11 \\cdot 11 \\cdot 11 = 14641$ ir piecciparu skaitlis, tad vienīgā iespēja, ka iegūts četrciparu skaitlis, ir $11 \\cdot 11 \\cdot 11 = 1331$. Tad, izmantojot 1) nosacījumu, meklēto sešciparu skaitli varam pierakstīt $\\overline{a1331a}$. No 2) nosacījuma šim skaitlim jādalās ar 3. Skaitlis dalās ar 3, ja tā ciparu summa dalās ar 3. Tātad $a + 1 + 3 + 3 + 1 + a = 8 + 2a$ jādalās ar 3. Ja $a = 2$, tad $8 + 2a = 12$, kas dalās ar 3; ja $a = 5$, tad $8 + 2a = 18$, kas dalās ar 3; ja $a = 8$, tad $8 + 2a = 24$, kas dalās ar 3. Pārējiem ciparu vērtībām $8 + 2a$ nedalās ar 3. Tātad Rūdolfam var būt piešķirts vai nu numurs 213312, vai 513315, vai 813318.',
  },
  {
    id: 'ex_sp5',
    grades: [5, 6],
    problem:
      'Pierādi, ka, uzrakstot vienu otram galā divus naturālus divciparu skaitļus, iegūst lielāku skaitli nekā šos pašus divciparu skaitļus sareizinot!',
    solution:
      'Pirmo divciparu skaitli apzīmēsim ar $\\overline{ab}$, bet otro – ar $\\overline{cd}$. Uzrakstot šos skaitļus vienu otram galā, iegūsim skaitli $\\overline{abcd}$, kas ir lielāks nekā četrciparu skaitlis, kuram pēdējie divi cipari ir nulles, tas ir, $\\overline{ab00}$. Skaitli, kuram pēdējie divi cipari ir nulles, varam izteikt kā $\\overline{ab00} = \\overline{ab} \\cdot 100$, bet divciparu skaitļa reizinājums ar trīsciparu skaitli ir lielāks nekā divu divciparu skaitļu reizinājums $\\overline{ab} \\cdot \\overline{cd}$. Līdz ar to esam pierādījuši, ka $\\overline{abcd} > \\overline{ab} \\cdot \\overline{cd}$.',
  },
  {
    id: 'ex_sp6',
    grades: [7, 8],
    problem:
      'Zelmas dzīvokļa numurs ir divciparu skaitlis un tam piemīt šāda īpašība: saskaitot tā ciparu summu un tā ciparu reizinājumu, atkal iegūst šo pašu skaitli. Atrodi visus tādus divciparu skaitļus, kam piemīt šāda īpašība!',
    solution:
      'Apzīmējot meklētos divciparu skaitļus ar $\\overline{ab}$, iegūstam vienādojumu $(a + b) + ab = 10a + b$ jeb $ab - 9a = 0$. Iznesot $a$ pirms iekavām, iegūstam $a \\cdot (b - 9) = 0$. Reizinājums ir vienāds ar 0, ja kāds no reizinātājiem ir vienāds ar 0. Tā kā $a \\neq 0$, jo tas ir divciparu skaitļa pirmais cipars, tad $b - 9 = 0$ jeb $b = 9$, bet $a$ var būt jebkurš nenulles cipars. Tātad minētā īpašība piemīt visiem divciparu skaitļiem, kuru vienu cipars ir 9, tas ir, 19, 29, 39, 49, 59, 69, 79, 89, 99.',
  },
  {
    id: 'ex_sp7',
    grades: [7, 8],
    problem:
      'Leonards izvēlējās patvaļīgu trīsciparu skaitli, pareizināja to ar 2 un tam galā pierakstīja sākotnējo skaitli. Vai viņa iegūtais skaitlis noteikti dalās ar 23?',
    solution:
      'Jā, noteikti dalās. Apzīmējam sākotnējo skaitli ar $\\overline{abc}$. Skaitlim $2 \\cdot \\overline{abc}$ pierakstīt galā $\\overline{abc}$ ir tas pats, kas skaitli $2 \\cdot \\overline{abc}$ reizināt ar 1000 un tad tam pieskaitīt $\\overline{abc}$. Tātad iegūstam skaitli $2 \\cdot \\overline{abc} \\cdot 1000 + \\overline{abc} = 2001 \\cdot \\overline{abc}$. Tā kā reizinātājs 2001 dalās ar 23 ($2001 : 23 = 87$), tātad arī iegūtais skaitlis $2001 \\cdot \\overline{abc}$ noteikti dalās ar 23.',
  },
  {
    id: 'ex_sp8',
    grades: [7, 8],
    problem:
      'Dots, ka $A$ un $B$ ir naturāli divciparu skaitļi. Skaitli $X$ iegūst, pierakstot skaitlim $A$ galā skaitli $B$; skaitli $Y$ iegūst, pierakstot skaitlim $B$ galā skaitli $A$. Zināms, ka $X - Y$ dalās ar 91. Pierādi, ka $A = B$.',
    solution:
      'Apzīmējam $A = \\overline{ab}$, $B = \\overline{cd}$, tad $X = \\overline{abcd}$, bet $Y = \\overline{cdab}$. Līdz ar to\n$$X - Y = \\overline{abcd} - \\overline{cdab} = \\overline{ab} \\cdot 100 + \\overline{cd} - \\overline{cd} \\cdot 100 - \\overline{ab} = 99\\overline{ab} - 99\\overline{cd} = 99 \\cdot (\\overline{ab} - \\overline{cd}).$$\nNo uzdevumā dotā $99 \\cdot (\\overline{ab} - \\overline{cd})$ dalās ar 91. Tā kā skaitļu 99 un 91 lielākais kopīgais dalītājs ir 1, tad $(\\overline{ab} - \\overline{cd})$ dalās ar 91. Ievērojam, ka $\\overline{ab} - \\overline{cd} \\leq 89$. Tāpēc vienīgā iespēja, ka $\\overline{ab} - \\overline{cd} = 0$ jeb $\\overline{ab} = \\overline{cd}$, kas arī bija jāpierāda. $\\blacksquare$',
  },
  {
    id: 'ex_sp9',
    grades: [7, 8],
    problem:
      'Četrciparu skaitlim pārlika ciparus citā secībā. Pierādi, ka sākotnējā un iegūtā skaitļa starpība dalās ar 9.',
    solution:
      'Apzīmējam četrciparu skaitli ar $\\overline{abcd} = 1000a + 100b + 10c + d$. Vienādības labajā pusē sadalām saskaitāmos:\n$$\\overline{abcd} = (999a + 99b + 9c) + (a + b + c + d).$$\nUzrakstām citu četrciparu skaitli, kas sastāv no šiem pašiem cipariem, un līdzīgā veidā sadalām saskaitāmajos, kur viens no saskaitāmajiem ir visu četru ciparu summa $(a + b + c + d)$. Aprēķinot abu šo skaitļu starpību, ievērojam, ka saskaitāmie $(a + b + c + d)$ saīsinās. Katrs no atlikušajiem saskaitāmajiem dalās ar 9, jo katrs saskaitāmais satur kādu no reizinātājiem 9, 99, 999. Tā kā katrs no saskaitāmajiem dalās ar 9, tad arī aprēķinātā starpība dalās ar 9. $\\blacksquare$',
  },
]

