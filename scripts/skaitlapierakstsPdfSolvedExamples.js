/** Solved examples for topic skaitlapieraksts — seed via updateSolvedExamples. */
export default [
  {
    id: 'ex1',
    problem:
      'Divu naturālu skaitļu pierakstā izmantoti tikai cipari $2$, $3$, $7$ un $8$. Vai var gadīties, ka viens skaitlis ir tieši trīs reizes lielāks nekā otrs skaitlis?',
    solution:
      'Ja skaitļa pēdējais cipars ir $2$, $3$, $7$ vai $8$, tad trīs reizes lielāka skaitļa pēdējais cipars ir attiecīgi $6$, $9$, $1$ vai $4$, bet pēc uzdevuma nosacījumiem nevienu no šiem cipariem nevar izmantot skaitļu pierakstā. Tātad uzdevumā prasītais nav iespējams.',
  },
  {
    id: 'ex2',
    problem:
      'Atrodi vislielāko piecciparu skaitli, kuram ceturtais cipars (desmitu cipars) ir lielāks nekā piektais cipars (vienu cipars), trešais cipars lielāks nekā ceturtā un piektā cipara summa, otrais cipars ir lielāks nekā trešā, ceturtā un piektā cipara summa, bet pirmais cipars ir lielāks nekā visu pārējo ciparu summa!',
    solution:
      'Meklētais piecciparu skaitlis ir $95210$. Pamatosim, ka vēl lielāku skaitli nevar iegūt. Tā kā jāmeklē vislielākais skaitlis, tad pirmajam ciparam jābūt iespējami lielam, tas ir, $9$. Tātad pārējo četru ciparu summa nedrīkst pārsniegt $8$. Visiem cipariem jābūt dažādiem, jo katrs cipars ir lielāks nekā tam sekojošo ciparu summa. Tūkstošu cipars nevar būt lielāks kā $5$, jo jau $8 - 6 = 2$, ko nevar izteikt kā trīs dažādu ciparu summu. Tātad, lai atrastu lielāko piecciparu skaitli, tūkstošu ciparam jābūt $5$ un tas nozīmē, ka simtu, desmitu un vienu cipars attiecīgi var būt tikai $2$, $1$ un $0$. Līdz ar to lielākais piecciparu skaitlis, kam izpildās prasītās īpašības, ir $95210$.',
  },
  {
    id: 'ex3',
    problem:
      'Vai ir tāds naturāls četrciparu skaitlis ar šādu īpašību: ja skaitļa pēdējo ciparu pārceļ uz skaitļa sākumu, tad iegūst četrciparu skaitli, kas ir $6$ reizes mazāks nekā sākotnējais skaitlis?',
    solution:
      'Nē, nav tāds skaitlis. Apzīmēsim sākotnējo četrciparu skaitli ar $x$, bet iegūto četrciparu skaitli ar $y$. Tādā gadījumā $6 \\cdot y = x$. Tā kā vienādojuma kreisajā pusē iegūstam pāra skaitli, tad $x$ ir pāra skaitlis. Tātad $x$ pēdējais cipars ir pāra cipars. Tas nevar būt $0$, jo tad $y$ nebūtu četrciparu skaitlis. Tātad četrciparu skaitļa $x$ pēdējā cipara mazākā iespējamā vērtība ir $2$ un tas nozīmē, ka $y$ pirmais cipars nav mazāks par $2$. Pat tādā gadījumā, ja mēs izvēlētos pašu mazāko četrciparu skaitli ar šādu īpašību, tas ir, skaitli $2000$, to reizinot ar $6$, jau iegūst piecciparu skaitli, bet $x$ ir četrciparu skaitlis, tātad tas nav iespējams.',
  },
  {
    id: 'ex4',
    problem:
      'Ziemeļbriedis Rūdolfs zina, ka 1) viņa numurs ir sešciparu skaitlis, kas vienādi lasāms gan no kreisās, gan no labās puses; 2) tas dalās ar $3$; 3) nosvītrojot pirmo un pēdējo ciparu, iegūst četrciparu skaitli, kura visi pirmreizinātāji ir vienādi ar $11$. Kāds numurs var būt piešķirts Rūdolfam?',
    solution:
      'Sāksim ar 3) nosacījumu. Tā kā $11 \\cdot 11 = 121$ ir trīsciparu skaitlis un $11 \\cdot 11 \\cdot 11 \\cdot 11 = 14641$ ir piecciparu skaitlis, tad vienīgā iespēja, ka iegūts četrciparu skaitlis, ir $11 \\cdot 11 \\cdot 11 = 1331$. Tad, izmantojot 1) nosacījumu, meklēto sešciparu skaitli varam pierakstīt $\\overline{a1331a}$. No 2) nosacījuma šim skaitlim jādalās ar $3$. Skaitlis dalās ar $3$, ja tā ciparu summa dalās ar $3$. Tātad $a + 1 + 3 + 3 + 1 + a = 8 + 2 \\cdot a$ jādalās ar $3$. Ja cipars $a$ ir $0, 1, 3, 4, 6, 7$ vai $9$, tad $8 + 2 \\cdot a$ nedalās ar $3$; ja $a = 2$, tad $8 + 2 \\cdot a = 12$, kas dalās ar $3$; ja $a = 5$, tad $8 + 2 \\cdot a = 18$, kas dalās ar $3$; ja $a = 8$, tad $8 + 2 \\cdot a = 24$, kas dalās ar $3$. Tātad Rūdolfam var būt piešķirts vai nu numurs $213312$, vai $513315$, vai $813318$.',
  },
  {
    id: 'ex5',
    problem:
      'Pierādi, ka, uzrakstot vienu otram galā divus naturālus divciparu skaitļus, iegūst lielāku skaitli nekā šos pašus divciparu skaitļus sareizinot!',
    solution:
      'Pirmo divciparu skaitli apzīmēsim ar $\\overline{ab}$, bet otro apzīmēsim ar $\\overline{cd}$. Uzrakstot šos skaitļus vienu otram galā, iegūsim skaitli $\\overline{abcd}$, kas ir lielāks nekā četrciparu skaitlis, kuram pēdējie divi cipari ir nulles, tas ir, $\\overline{ab00}$. Skaitli, kuram pēdējie divi cipari ir nulles, varam izteikt kā $\\overline{ab00} = \\overline{ab} \\cdot 100$, bet divciparu skaitļa reizinājums ar trīsciparu skaitli ir lielāks nekā divu divciparu skaitļu reizinājums $\\overline{ab} \\cdot \\overline{cd}$. Līdz ar to esam pierādījuši, ka $\\overline{abcd} > \\overline{ab} \\cdot \\overline{cd}$.',
  },
  {
    id: 'ex6',
    problem:
      'Zelmas dzīvokļa numurs ir divciparu skaitlis un tam piemīt šāda īpašība: saskaitot tā ciparu summu un tā ciparu reizinājumu, atkal iegūst šo pašu skaitli. Atrodi visus tādus divciparu skaitļus, kam piemīt šāda īpašība!',
    solution:
      'Apzīmējot meklēto divciparu skaitli ar $\\overline{ab}$, iegūstam vienādojumu $(a + b) + ab = 10a + b$ jeb $ab - 9a = 0$. Tā kā $a \\neq 0$ (jo tas ir divciparu skaitļa pirmais cipars), tad, abas vienādības puses dalot ar $a$, iegūstam, ka $b - 9 = 0$ jeb $b = 9$. Tā kā $a$ var būt jebkurš nenulles cipars, tad uzdevumā dotā īpašība piemīt visiem divciparu skaitļiem, kuru vienu cipars ir $9$, tas ir, $19, 29, 39, 49, 59, 69, 79, 89, 99$.',
  },
  {
    id: 'ex7',
    problem:
      'Leonards izvēlējās patvaļīgu trīsciparu skaitli, pareizināja to ar $2$ un tam galā pierakstīja sākotnējo skaitli. Vai viņa iegūtais skaitlis noteikti dalās ar $23$?',
    solution:
      'Jā, noteikti dalās. Apzīmējam sākotnējo skaitli ar $\\overline{abc}$. Skaitlim $2 \\cdot \\overline{abc}$ pierakstīt galā $\\overline{abc}$ ir tas pats, kas skaitli $2 \\cdot \\overline{abc}$ reizināt ar $1000$ un tad tam pieskaitīt $\\overline{abc}$. Tātad iegūstam skaitli\n$$2 \\cdot \\overline{abc} \\cdot 1000 + \\overline{abc} = 2001 \\cdot \\overline{abc}.$$\nTā kā reizinātājs $2001$ dalās ar $23$ ($2001 : 23 = 87$), tātad arī iegūtais skaitlis $2001 \\cdot \\overline{abc}$ noteikti dalās ar $23$.',
  },
  {
    id: 'ex8',
    problem:
      'Četrciparu skaitlim pārlika ciparus citā secībā. Pierādi, ka sākotnējā un iegūtā skaitļa starpība dalās ar $9$.',
    solution:
      'Apzīmējam četrciparu skaitli ar $\\overline{abcd} = 1000a + 100b + 10c + d$. Vienādības labās puses summu uzrakstām citādāk:\n$$\\overline{abcd} = (999a + 99b + 9c) + (a + b + c + d).$$\nUzrakstām citu četrciparu skaitli, kas sastāv no šiem pašiem cipariem, un līdzīgā veidā sadalām saskaitāmajos, kur viens no saskaitāmajiem ir visu četru ciparu summa $(a + b + c + d)$. Aprēķinot abu šo skaitļu starpību, ievērojam, ka saskaitāmie $(a + b + c + d)$ saīsinās. Katrs no atlikušajiem saskaitāmajiem dalās ar $9$, jo katrs saskaitāmais satur kādu no reizinātājiem $9$, $99$, $999$ un, ja viens no reizinātājiem dalās ar $9$, tad arī reizinājums dalās ar $9$. Tā kā katrs no saskaitāmajiem dalās ar $9$, tad arī aprēķinātā starpība dalās ar $9$.',
  },
  {
    id: 'ex9',
    problem:
      'Skaitļi $A$ un $B$ ir naturāli divciparu skaitļi. Skaitli $X$ iegūst, pierakstot skaitlim $A$ galā skaitli $B$; skaitli $Y$ iegūst, pierakstot skaitlim $B$ galā skaitli $A$. Zināms, ka $X - Y$ dalās ar $91$. Pierādi, ka $A = B$.',
    solution:
      'Apzīmējam $A = \\overline{ab}$, $B = \\overline{cd}$, tad $X = \\overline{abcd}$, bet $Y = \\overline{cdab}$. Līdz ar to\n$$X - Y = \\overline{abcd} - \\overline{cdab} = \\overline{ab} \\cdot 100 + \\overline{cd} - \\overline{cd} \\cdot 100 - \\overline{ab} = 99 \\cdot \\overline{ab} - 99 \\cdot \\overline{cd} = 99 \\cdot (\\overline{ab} - \\overline{cd}).$$\nNo uzdevumā dotā $99 \\cdot (\\overline{ab} - \\overline{cd})$ dalās ar $91$. Tā kā skaitļu $99$ un $91$ lielākais kopīgais dalītājs ir $1$, tad $(\\overline{ab} - \\overline{cd})$ dalās ar $91$. Ievērojam, ka $\\overline{ab} - \\overline{cd} \\leq 89$ (jo $89$ iegūst, ja atņem no lielākā divciparu skaitļa mazāko divciparu skaitli). Tāpēc vienīgā iespēja, ka $\\overline{ab} - \\overline{cd} = 0$ jeb $\\overline{ab} = \\overline{cd}$, kas arī bija jāpierāda.',
  },
  {
    id: 'ex10',
    problem:
      'Skaitlim $2016201620172017$ izsvītroja vienu vai vairākus ciparus tā, ka iegūtais skaitlis dalās ar $3$. Kādu lielāko skaitli varēja iegūt?',
    solution:
      'Lielākais skaitlis, kādu var iegūt, ir $201620162017017$. Pamatosim, ka lielāku skaitli nevar iegūt. Lai iegūtu lielāko skaitli, jāizsvītro pēc iespējas mazāk cipari. Lai skaitlis dalītos ar $3$, tā ciparu summai jādalās ar $3$. Dotā skaitļa ciparu summa ir $38$. Vienīgā iespēja izsvītrot vienu ciparu, lai iegūtā skaitļa ciparu summa un tātad arī pats skaitlis dalītos ar $3$, ir izsvītrot ciparu $2$. No četriem skaitļiem, ko var iegūt, izsvītrojot divnieku ($16201620172017$, $201601620172017$, $201620160172017$, $201620162017017$), lielākais ir $201620162017017$.',
  },
  {
    id: 'ex11',
    problem:
      'Skaitlim $201720182019$ izsvītroja vienu vai vairākus ciparus tā, ka iegūtais skaitlis dalās ar $9$. Kādu lielāko skaitli varēja iegūt?',
    solution:
      'Lielākais skaitlis, kādu var iegūt, ir $2012012019$. Pamatosim, ka lielāku skaitli nevar iegūt. Lai iegūtu lielāko skaitli, jāizsvītro pēc iespējas mazāk cipari. Lai skaitlis dalītos ar $9$, tā ciparu summai jādalās ar $9$. Dotā skaitļa ciparu summa ir $33$. Nav iespējams izsvītrot vienu ciparu, lai iegūtā skaitļa ciparu summa dalītos ar $9$. Vienīgā iespēja izsvītrot divus ciparus, lai iegūtā skaitļa ciparu summa un tātad arī pats skaitlis dalītos ar $9$, ir izsvītrot ciparus $7$ un $8$.',
  },
  {
    id: 'ex12',
    problem:
      'Piecciparu skaitļa, kas dalās ar $13$, pirmais cipars ir vienāds ar ceturto, bet otrais — ar piekto. Kāds ir šī skaitļa trešais cipars? Atrodi visas iespējamās vērtības un pamato, ka citu nav!',
    solution:
      'Doto piecciparu skaitli varam uzrakstīt kā $\\overline{abcab}$. Pārveidojam šo skaitli:\n$$\\overline{abcab} = \\overline{ab} \\cdot 1000 + c \\cdot 100 + \\overline{ab} = 1001 \\cdot \\overline{ab} + 100c.$$\nTā kā $1001$ dalās ar $13$ ($1001 : 13 = 77$), tad, lai viss skaitlis dalītos ar $13$, arī saskaitāmajam $100c$ jādalās ar $13$. Tā kā $100$ un $13$ ir savstarpēji pirmskaitļi, tad $c$ jādalās ar $13$, tas iespējams tikai tad, kad $c = 0$.',
  },
  {
    id: 'ex13',
    problem:
      'Ja no piecciparu skaitļa, kam pirmais cipars vienāds ar ceturto, bet otrais — ar piekto, atņem vieninieku, tad iegūtais skaitlis dalās ar $11$. Kāds var būt sākotnējā piecciparu skaitļa trešais cipars? Atrodi visus iespējamos variantus un pamato, ka citu nav!',
    solution:
      'Doto piecciparu skaitli varam uzrakstīt kā $\\overline{abcab}$. Pārveidojam šo skaitli:\n$$\\overline{abcab} - 1 = \\overline{ab} \\cdot 1000 + c \\cdot 100 + \\overline{ab} - 1 = \\overline{ab} \\cdot 1001 + 100c - 1 = \\overline{ab} \\cdot 1001 + 99c + c - 1.$$\nTā kā $1001$ dalās ar $11$ ($1001 : 11 = 91$) un $99$ dalās ar $11$, tad, lai viss skaitlis dalītos ar $11$, arī $c - 1$ jādalās ar $11$. Tas iespējams tikai tad, ja $c = 1$.',
  },
]
