/** Solved examples for topic dirichlet — full text from PDF (seed via updateSolvedExamples). */
export default [
  {
    id: 'ex1',
    problem:
      'Pulciņā ir $13$ skolēni. Pierādīt, ka no tiem var atrast tādus divus, kas dzimuši vienā un tajā pašā mēnesī!',
    solution:
      '**1. atrisinājums.** Ja katrā mēnesī būtu dzimis ne vairāk kā viens skolēns, tad visos mēnešos kopā būtu dzimuši ne vairāk kā $12$ skolēnu, bet pulciņā ir $13$ skolēni. Tātad noteikti ir tāds mēnesis, kurā dzimuši vismaz divi no šī pulciņa skolēniem.\n\n**2. atrisinājums.** Šajā uzdevumā $13$ skolēni ir jāsadala $12$ grupās (mēnešos). Pēc Dirihlē principa noteikti būs mēnesis, kurā ir dzimuši vismaz divi skolēni, kas arī bija jāpierāda.',
  },
  {
    id: 'ex2',
    problem:
      'Doti naturāli skaitļi no $1$ līdz $8$. Pierādīt, ka, izvēloties jebkurus piecus no tiem, varēs atrast tādus divus, kuru summa ir $9$.',
    solution:
      '**1. atrisinājums.** Jebkurš no pieciem izvēlētajiem skaitļiem ietilpst vienā no šādām grupām (grupas veidotas no skaitļiem, kuru summa ir $9$): „$1$ un $8$"; „$2$ un $7$"; „$3$ un $6$"; „$4$ un $5$". Ja katrā grupā būtu ne vairāk kā viens skaitlis, tad visās grupās kopā būtu ne vairāk kā četri skaitļi, bet ir jāizvēlas pieci skaitļi, tātad noteikti ir tāda grupa, kurā ir divi skaitļi, un šo skaitļu summa ir $9$.\n\n**2. atrisinājums.** Jebkurš no pieciem izvēlētajiem skaitļiem ietilpst vienā no šādiem četriem „būriem": „$1$ un $8$"; „$2$ un $7$"; „$3$ un $6$"; „$4$ un $5$". Tāpēc pēc Dirihlē principa vismaz vienā būrī nonāks vismaz $2$ „truši" jeb $2$ skaitļi, kuru summa ir deviņi.',
  },
  {
    id: 'ex3',
    problem:
      'Izliekta $100$-stūra virsotnes kaut kādā secībā sanumurētas ar naturāliem skaitļiem no $1$ līdz $100$, katra virsotne ar citu skaitli. Katrai malai aprēķina tās galu numuru starpību (no lielākā skaitļa atņem mazāko). Pierādīt, ka vismaz divām malām šīs starpības ir vienādas!',
    solution:
      'Ir iespējamas tikai $99$ dažādas starpības: $1; 2; \\ldots; 99$ — tie ir „būri". Ir $100$ malas, kam aprēķinātas starpības — tie ir „truši". Pēc Dirihlē principa vismaz vienā būrī būs vismaz $2$ truši jeb vismaz divām malām šīs starpības ir vienādas.',
  },
  {
    id: 'ex4',
    problem:
      'Sniegbaltīte uzdāvināja katram no $7$ rūķīšiem pa $5$ konfektēm: „Vāverīti", „Margrietiņu" un „Lācīti", pie tam katrs rūķītis saņēma vismaz vienu katra veida konfekti. Pierādīt, ka ir divi tādi rūķīši, kam viņa uzdāvināja vienādus konfekšu komplektus!',
    solution:
      'Ievērojam, ka skaitli $5$ var izteikt kā trīs naturālu skaitļu summu tikai divos veidos: $3 + 1 + 1$ un $2 + 2 + 1$ (ja nav būtiska saskaitāmo secība). Taču, ņemot vērā arī to, kura no konfektēm pirmajā gadījumā dāvināta $3$ eksemplāros un kura no konfektēm otrajā gadījumā — vienā eksemplārā, iegūstam $6$ dažādas iespējas:\n\n| | „Vāverīte" | „Margrietiņa" | „Lācītis" |\n|---|---|---|---|\n| 1. | 3 | 1 | 1 |\n| 2. | 1 | 3 | 1 |\n| 3. | 1 | 1 | 3 |\n| 4. | 1 | 2 | 2 |\n| 5. | 2 | 1 | 2 |\n| 6. | 2 | 2 | 1 |\n\nTā kā ir $7$ rūķīši un $6$ dažādas iespējas, kā uzdāvināt konfektes, tad pēc Dirihlē principa noteikti ir tādi divi rūķīši, kam Sniegbaltīte uzdāvināja vienādus konfekšu komplektus.',
  },
  {
    id: 'ex5',
    problem:
      'Taisne nokrāsota $10$ dažādās krāsās. Pierādīt, ka uz tās var atrast divus punktus, kas nokrāsoti vienā krāsā un starp kuriem attālums centimetros ir vesels skaitlis!',
    solution:
      'Izvēlamies uz taisnes $11$ punktus tā, lai attālums starp katriem diviem no tiem būtu vesels skaitlis. Tā kā ir izvēlēti $11$ punkti un ir $10$ dažādas krāsas, tad pēc Dirihlē principa vismaz divi no šiem punktiem ir vienā krāsā.',
  },
  {
    id: 'ex6',
    problem:
      'Pierādīt, ka starp jebkuriem sešiem naturāliem skaitļiem, kas nedalās ar $10$, var atrast divus tādus, kuru summa vai starpība dalās ar $10$.',
    solution:
      'Apskatām divus iespējamos gadījumus.\n\n1) Ja starp apskatāmajiem skaitļiem ir divi tādi, kam pēdējie cipari vienādi, tad to starpība dalās ar $10$.\n\n2) Ja nav tādu divu skaitļu, kam pēdējie cipari ir vienādi, tad sadalām skaitļus $5$ grupās atbilstoši to pēdējiem cipariem: „$1$ un $9$"; „$2$ un $8$"; „$3$ un $7$"; „$4$ un $6$"; „$5$". Tā kā ir $6$ skaitļi un piecas grupas, tad divi skaitļi noteikti nonāk vienā grupā, to summa dalās ar $10$.',
  },
  {
    id: 'ex7',
    problem:
      'Pierādīt, ka no jebkuriem astoņiem naturāliem skaitļiem var izvēlēties tādus divus, kuru starpība dalās ar $7$.',
    solution:
      'Naturāls skaitlis, dalot ar $7$, var dot septiņus dažādus atlikumus: $0; 1; 2; 3; 4; 5; 6$. Dotos astoņus skaitļus uzskatīsim par „trušiem", savukārt vienā „būrī" ievietosim tos skaitļus, kas dod vienādus atlikumus, dalot ar $7$, tātad ir $7$ „būri". Pēc Dirihlē principa vismaz vienā „būrī" nonāks vismaz divi „truši" jeb vismaz divi skaitļi dod vienādus atlikumus, dalot ar $7$. Šo skaitļu starpība dalās ar $7$.',
  },
  {
    id: 'ex8',
    problem:
      'Mākslinieku darbnīcā izgatavotas $36$ skulptūras, kuru masa ir $490$ kg, $495$ kg, $500$ kg, $\\ldots$, $665$ kg. Vai visas šīs skulptūras var aizvest ar $7$ automašīnām, ja katrai no tām kravnesība ir $3$ tonnas, ar katru automašīnu drīkst veikt tikai vienu reisu un automašīnas nedrīkst pārslogot?',
    solution:
      '**1. atrisinājums.** Pamatosim, ka prasītais nav iespējams. Ja katrā no septiņām automašīnām iekrautu ne vairāk kā $5$ skulptūras, tad kopā pa visām mašīnām būtu izvietotas ne vairāk kā $35$ skulptūras, bet jāizvieto ir $36$ skulptūras. Tātad noteikti ir tāda mašīna, kurā būs jāiekrauj vismaz sešas skulptūras. Taču pat sešu vieglāko skulptūru kopējā masa ir $490 + 495 + 500 + 505 + 510 + 515 = 3015$ kilogrami, tātad ir lielāka par masu, kādu pieļaujams iekraut vienā automašīnā. Tas nozīmē, ka uzdevuma prasības nav izpildāmas.\n\n**2. atrisinājums.** Pamatosim, ka prasītais nav iespējams. Šajā uzdevumā „truši" ir skulptūras, „būri" — automašīnas. Ievērosim, ka $36 = 7 \\cdot 5 + 1$ skulptūras jāsadala pa $7$ automašīnām. Tātad pēc Dirihlē principa vismaz vienā automašīnā jāiekrauj vismaz $6$ skulptūras. Taču pat sešu vieglāko skulptūru kopējā masa ir $490 + 495 + 500 + 505 + 510 + 515 = 3015$ kilogrami, tātad ir lielāka par masu, kādu pieļaujams iekraut vienā automašīnā. Tas nozīmē, ka uzdevuma prasības nav izpildāamas.',
  },
  {
    id: 'ex9',
    problem:
      'Profesora Cipariņa olimpiādē bija $3$ uzdevumi. Tajā piedalījās $100$ skolēni. Pierādīt, ka atradīsies vismaz $13$ skolēni, kas izrēķināja vienus un tos pašus uzdevumus (vai arī neizrēķināja nevienu uzdevumu)! Katrs skolēns katru uzdevumu vai nu izrēķināja, vai neizrēķināja, daļēji risinājumi netika iesniegti.',
    solution:
      'No trīs uzdevumiem var izveidot $8$ dažādus atrisināto uzdevumu „komplektus" (t.sk., neviens atrisināts uzdevums), tabulā ar „+" atzīmēti tie uzdevumi, kuri ir izrēķināti.\n\n| Komplekta nr. | 1. | 2. | 3. | 4. | 5. | 6. | 7. | 8. |\n|---|---|---|---|---|---|---|---|---|\n| 1. uzdevums | | + | | + | | + | | + |\n| 2. uzdevums | | | + | + | | | + | + |\n| 3. uzdevums | | | | | + | + | + | + |\n\nJa katru „komplektu" būtu atrisinājuši ne vairāk kā $12$ skolēni, tad skolēnu kopējais skaits būtu ne vairāk kā $12 \\cdot 8 = 96 < 100$. Tātad ir vismaz $13$ skolēni, kas atrisinājuši vienus un tos pašus uzdevumus.',
  },
  {
    id: 'ex10',
    problem:
      'Rūtiņu virsotnēs atzīmēti $16$ balti punkti (izvietoti $4 \\times 4$ režģī). Vai tieši septiņus punktus var nokrāsot melnus tā, lai nekādi trīs vienā krāsā nokrāsoti punkti neatrastos uz vienas taisnes?',
    solution:
      'Nē, to nevar izdarīt. Ja melnā krāsā nokrāsoti tieši septiņi punkti, tad paliek deviņi balti punkti. Tā kā visi punkti izvietoti četrās rindās, tad pēc Dirihlē principa kādā no šīm rindām būs vismaz trīs balti punkti, bet tas ir pretrunā ar uzdevuma nosacījumiem.',
  },
  {
    id: 'ex11',
    problem:
      'Maisiņā bija $10$ sarkanas, $10$ dzeltenas un $10$ zaļas lentes. Tautas deju kolektīva astoņas meitenes katra izvēlējās vienu lenti no šī maisiņa.\n\na) Vai var apgalvot, ka tieši četras meitenes izvēlējās vienādas krāsas lentes?\n\nb) Vai noteikti ir vismaz trīs meitenes, kas izvēlējās vienādas krāsas lentes?\n\nc) Kāds mazākais skaits lenšu būtu jāizņem no maisiņa, lai varētu apgalvot, ka vismaz četras no tām ir vienā krāsā?',
    solution:
      '**a)** Nē, piemēram, varētu gadīties, ka $1$ meitene izvēlējās sarkanu lenti, $1$ meitene — dzeltenu lenti un $6$ meitenes — zaļu lenti.\n\n**b)** Jā, noteikti. Ja katras krāsas lenti būtu izvēlējušās ne vairāk kā $2$ meitenes, tad kopā būtu ne vairāk kā $2 \\cdot 3 = 6$ meitenes, bet tā ir pretruna ar doto, ka lentes izvēlējās $8$ meitenes. Tātad noteikti ir vismaz $3$ meitenes, kas izvēlējās vienas krāsas lenti.\n\n**c)** Pamatosim, ka mazākais skaits lenšu, kas jāizņem no maisiņa, ir $10$, un ka mazāk izņemt nevar. Ar deviņām (vai mazāk) lentēm nepietiktu, jo tad varētu gadīties, ka no katras krāsas ir pa $3$ lentēm (vai mazāk). Tātad, ja no maisiņa izņemtu $10$ lentes, tad pēc Dirihlē principa noteikti vismaz četras no tām būtu vienā krāsā.',
  },
  {
    id: 'ex12',
    problem:
      'Skolas ēdnīcas pusdienu piedāvājumā ir divas dažādas zupas, divi dažādi pamatēdieni un divi dažādi deserti. Pusdienās aizgāja $200$ skolēni, no katra ēdienu veida (zupa, pamatēdiens, deserts) katrs skolēns izvēlējās ne vairāk kā vienu ēdienu, pie tam nebija tāda skolēna, kurš neēda vispār neko. Kāds ir lielākais skaits skolēnu, kas noteikti pasūtīja vienu un to pašu?',
    solution:
      'Pamatosim, ka lielākais skolēnu skaits, kas noteikti pasūtīja vienu un to pašu, ir $8$. Ievērojam, ka katra veida ēdienu var vai nu neiekļaut komplektā, vai izvēlēties vienu no diviem tā veidiem, tātad katram ēdiena veidam ir $3$ dažādas iespējas. Tā kā katrs skolēns izvēlējās vismaz vienu no piedāvātajiem ēdieniem (neder variants, ka no katra ēdiena veida neizvēlas neko), tad ir iespējams izveidot $3 \\cdot 3 \\cdot 3 - 1 = 26$ dažādus pusdienu komplektus. Ja katru no šiem komplektiem būtu izvēlējušies ne vairāk kā $7$ skolēni, tad pusdienās būtu aizgājuši ne vairāk kā $7 \\cdot 26 = 182$ skolēni, kas ir pretrunā ar uzdevuma nosacījumiem. Tātad noteikti ir $8$ skolēni, kas pasūtīja vienu un to pašu. Nevar apgalvot, ka vairāk kā $8$ skolēni pasūtīja vienu un to pašu, jo ir iespējams, ka pirmos $18$ no $26$ dažādajiem pusdienu komplektiem izvēlējās pa $8$ skolēniem un atlikušos $8$ pusdienu komplektus — pa $7$ skolēniem (tas ir, $18 \\cdot 8 + 8 \\cdot 7 = 200$).\n\n**Piezīme.** Tā kā skolēnu skaits ir $200 = 7 \\cdot 26 + 18$, tad pēc Dirihlē principa noteikti ir $8$ skolēni, kas pasūtīja vienu un to pašu.',
  },
  {
    id: 'ex13',
    problem:
      'Pierādīt, ka starp jebkuriem $78$ trīsciparu skaitļiem var atrast četrus tādus skaitļus, kuru ciparu summas ir vienādas!',
    solution:
      'Pavisam iespējamas $27$ dažādas ciparu summas vērtības. Ievērojam, ka:\n1) ciparu summa $1$ un $27$ katra ir tikai vienam skaitlim ($100$ un $999$),\n2) ciparu summa $2$ un $26$ katra ir tikai trīs skaitļiem ($101; 110; 200$ un $899; 989; 998$).\n\nTātad šajās grupās vairāk skaitļu nevar būt neatkarīgi no tā, kurus $78$ trīsciparu skaitļus izvēlamies. Pieņemsim, ka šīs četras grupas ir maksimāli piepildītas — tajās kopā ievietoti $8$ skaitļi. Tad atlikušajās $23$ grupās jāievieto $78 - 8 = 70$ skaitļi. Ja katrā no šīm $23$ grupām būtu ievietoti ne vairāk kā $3$ skaitļi, tad kopā būtu izvietoti ne vairāk kā $3 \\cdot 23 = 69$ skaitļi — pretruna tam, ka pa grupām jāizvieto $70$ skaitļi. Līdz ar to noteikti ir tāda grupa, kurā ir vismaz četri skaitļi — tie arī ir meklētie četri skaitļi, kuru ciparu summas ir vienādas.\n\n**Piezīme.** Tā kā $70 = 3 \\cdot 23 + 1$, tad pēc Dirihlē principa noteikti ir tāda grupa, kurā ir vismaz četri skaitļi.',
  },
  {
    id: 'ex14',
    problem:
      'Sporta zālē trenējas $32$ cilvēki, kuri visi ir vismaz $21$ gadu veci. Pierādīt, ka no šiem cilvēkiem var atrast divus tādus, kuriem ir vairāk nekā $30$ gadi, vai $4$ tādus, kuru gadu skaits ir vienāds!',
    solution:
      '**1. atrisinājums.** Pieņemam pretējo tam, kas jāpierāda, tas ir, nav divu cilvēku, kuriem ir vairāk nekā $30$ gadi, un nav četru cilvēku, kuriem ir vienāds gadu skaits. Sadalām cilvēkus grupās pēc to gadu skaita: $\\{21\\}; \\{22\\}; \\{23\\}; \\ldots; \\{29\\}; \\{30\\}; \\{\\text{vairāk nekā } 30\\}$. Tad pirmajās $10$ grupās katrā ir ne vairāk kā $3$ cilvēki un pēdējā — ne vairāk kā viens cilvēks. Tātad sporta zālē nav vairāk kā $3 \\cdot 10 + 1 = 31$ cilvēks — pretruna. Tātad pieņēmums ir aplams un esam pierādījuši, ka var atrast divus tādus cilvēkus, kuriem ir vairāk nekā $30$ gadi, vai $4$ tādus, kuru gadu skaits ir vienāds.\n\n**2. atrisinājums.** Sadalām cilvēkus grupās pēc to gadu skaita: $\\{21\\}; \\{22\\}; \\{23\\}; \\ldots; \\{29\\}; \\{30\\}; \\{\\text{vairāk nekā } 30\\}$. Apskatām divus iespējamos gadījumus.\n\n1) Ja pēdējā grupā ir vismaz divi cilvēki, tad prasītais izpildās.\n\n2) Ja pēdējā grupā ir mazāk nekā divi cilvēki, tad pa atlikušajām $10$ grupām jāsadala vismaz $31$ cilvēks. Tā kā ir $10$ grupas un vismaz $31 = 3 \\cdot 10 + 1$ cilvēks, tad pēc Dirihlē principa kādā no šīm grupām ir vismaz $4$ cilvēki, tātad tiem gadu skaits ir vienāds.',
  },
]
