/** Appended solved examples for virknes + invariantu-metode (see seedNewExamplesAndTopic). */

export const newVirknesExamples = [
  {
    id: 'ex10',
    grades: [5, 6, 7, 8, 9],
    problem:
      'Skaitļu virknes pirmais loceklis ir $11$, bet katrs nākamais ir vienāds ar iepriekšējā skaitļa kvadrāta ciparu summu. Kāds skaitlis šajā virknē ir $2018.$ vietā?',
    solution:
      'Pamatosim, ka virknes $2018.$ vietā ir skaitlis $13$. Aprēķinām dažus nākamos virknes locekļus:\n- virknes $2.$ loceklis ir $4$, jo $11^2 = 121$ un $1 + 2 + 1 = 4$;\n- virknes $3.$ loceklis ir $7$, jo $4^2 = 16$ un $1 + 6 = 7$;\n- virknes $4.$ loceklis ir $13$, jo $7^2 = 49$ un $4 + 9 = 13$;\n- virknes $5.$ loceklis ir $16$, jo $13^2 = 169$ un $1 + 6 + 9 = 16$;\n- virknes $6.$ loceklis ir $13$, jo $16^2 = 256$ un $2 + 5 + 6 = 13$.\n\nLīdz ar to virknes sākums ir $11; 4; 7; \\mathbf{13}; 16; \\mathbf{13}; 16; \\ldots$ Tā kā katrs nākamais virknes loceklis ir atkarīgs tikai no viena iepriekšējā, tad, līdzko parādās kāds šajā virknē jau iepriekš bijis skaitlis, izveidojas periods. Redzam, ka, sākot ar ceturto locekli, virkne ir periodiska: pāra vietās visi locekļi ir $13$, bet nepāra — $16$. Tā kā $2018$ ir pāra skaitlis, tad šajā vietā virknē ir skaitlis $\\mathbf{13}$.',
  },
  {
    id: 'ex11',
    grades: [5, 6, 7, 8],
    problem:
      'Virknē $1; 7; 8; 5; 3; 8; \\ldots$ katrs skaitlis, sākot ar trešo, ir divu iepriekšējo skaitļu summas pēdējais cipars. Vai šajā virknē var pēc kārtas būt skaitļi $2; 4; 6$?',
    solution:
      'Pamatosim, ka tas nav iespējams. Pāra skaitļus virknē apzīmējam ar $p$, nepāra — ar $n$. Ja diviem iepriekšējiem virknes locekļiem ir vienāda paritāte (abi ir pāra skaitļi vai abi ir nepāra skaitļi), tad nākamais virknes loceklis būs pāra skaitlis, savukārt, ja diviem iepriekšējiem virknes locekļiem ir atšķirīgas paritātes, tad nākamais virknes loceklis būs nepāra skaitlis. Tad iegūstam virkni $n; n; p; n; n; p; n; \\ldots$, bet skaitļiem $2; 4; 6$ atbilst secība $p; p; p$, tātad tas nav iespējams.',
  },
  {
    id: 'ex12',
    grades: [5, 6, 7, 8],
    problem:
      'Naturālu skaitļu virknes $7; 14; 17; \\ldots$ katrs nākamais loceklis tiek iegūts, iepriekšējā locekļa kvadrāta ciparu summai pieskaitot skaitli $1$. Kāds ir šīs virknes $1002.$ loceklis?',
    solution:
      'Pamatosim, ka virknes $1002.$ loceklis ir $8$. Aprēķinām dažus nākamos virknes locekļus:\n- virknes $4.$ loceklis ir $20$, jo $17^2 = 289$ un $2 + 8 + 9 + 1 = 20$;\n- virknes $5.$ loceklis ir $5$, jo $20^2 = 400$ un $4 + 0 + 0 + 1 = 5$;\n- virknes $6.$ loceklis ir $8$, jo $5^2 = 25$ un $2 + 5 + 1 = 8$;\n- virknes $7.$ loceklis ir $11$, jo $8^2 = 64$ un $6 + 4 + 1 = 11$;\n- virknes $8.$ loceklis ir $5$, jo $11^2 = 121$ un $1 + 2 + 1 + 1 = 5$.\n\nLīdz ar to virknes sākums ir $7; 14; 17; 20; \\mathbf{5}; \\mathbf{8}; \\mathbf{11}; \\mathbf{5}; \\mathbf{8}; \\mathbf{11}; \\ldots$ Tā kā katrs nākamais virknes loceklis ir atkarīgs tikai no viena iepriekšējā, tad, līdzko parādās kāds šajā virknē jau iepriekš bijis skaitlis, izveidojas periods. Ievērojam, ka virknē skaitļu grupa $(5, 8, 11)$ atkārtojas tikai sākot ar $5.$ locekli. Tāpēc pēdējais pilnais periods pirms $1002.$ virknes locekļa beidzas pie $1000.$ virknes locekļa, jo $4 + 3 \\cdot 332 = 1000$. Tā kā $1002 - 1000 = 2$, tad $1002.$ loceklis ir periodā otrais, tātad tas ir $\\mathbf{8}$.',
  },
]

export const newInvariantiExamples = [
  {
    id: 'ex18',
    grades: [9, 10, 11, 12],
    problem:
      'Kvadrāts sastāv no $4 \\times 4$ rūtiņām. Četras rūtiņas nokrāsotas melnas tā, ka katrā rindiņā un katrā kolonnā ir tieši viena melna rūtiņa. Vienā gājienā atļauts izvēlēties vienu rindiņu vai vienu kolonnu un mainīt tajā krāsojumu uz pretējo — melnās rūtiņas pārkrāsot baltas, bet baltās — melnas. Vai var gadīties, ka kvadrātā paliek tieši $3$ melnas rūtiņas?',
    solution:
      'Uzdevuma risinājumā gan rindiņas, gan kolonnas sauksim par līnijām.\n\nPieņemsim, ka kādā gājienā tiek izmainīts rūtiņu krāsojums līnijā $t$. Apskatīsim visus gadījumus, kā var izvietot melnās rūtiņas uz līnijas $t$:\n\n| Melno rūtiņu skaits līnijā $t$ pirms gājiena | Melno rūtiņu skaits līnijā $t$ pēc gājiena | Melno rūtiņu skaita izmaiņa |\n|---|---|---|\n| $4$ | $0$ | $-4$ |\n| $3$ | $1$ | $-2$ |\n| $2$ | $2$ | $0$ |\n| $1$ | $3$ | $+2$ |\n| $0$ | $4$ | $+4$ |\n\nSecinām, ka jebkura gājiena rezultātā melno rūtiņu skaits kvadrātā mainās par pāra skaitli. Tā kā uzdevuma sākumā ir $4$ melnās rūtiņas (pāra skaitlis), tad melno rūtiņu skaits nevar kļūt vienāds ar $3$ (nepāra skaitlis). Uzdevums atrisināts.\n\n**INVARIANTS** — melno rūtiņu skaits ir pāra skaitlis.',
  },
  {
    id: 'ex19',
    grades: [9, 10, 11, 12],
    problem:
      'Uz tāfeles ir uzrakstīti cipari $2, 3, 4, 5$. Atļauts izvēlēties dažus no tiem un sastādīt no tiem skaitli $A$. Pēc tam skaitli $A$ reizina ar $13$, un ciparus, kurus iegūst reizināšanas rezultātā, uzraksta uz tāfeles izvēlēto ciparu vietā. (Piemēram, izvēloties ciparus $2, 3, 4$, varam no tiem sastādīt skaitli $A = 324$ un iegūt skaitli $13 \\cdot A = 13 \\cdot 324 = 4212$, pie tam cipars $2$ tiek iegūts divas reizes. Tagad uz tāfeles ir uzrakstīti cipari $1, 2, 2, 4, 5$.) Vai ar aprakstīto operāciju palīdzību var panākt, ka uz tāfeles būs uzrakstīti cipari $2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7$?',
    solution:
      'Izmantosim, ka naturāls skaitlis, dalot to ar $3$, dod tādu pašu atlikumu, kādu dod šī skaitļa ciparu summa, dalot to ar $3$.\n\nJa vienas operācijas izpildes sākumā izvēlēto ciparu summa, dalot ar $3$, dod atlikumu $r$, tad tādu pašu atlikumu $r$ dod arī no šiem cipariem izveidotais skaitlis $A$. Tā kā $13A = A + 12A$ un $12A$ dalās ar $3$, tad tādu pašu atlikumu $r$, dalot ar $3$, dod arī jauniegūtais skaitlis $13A$; tātad tādu pašu atlikumu $r$, dalot ar $3$, dod arī to ciparu summa, kurus operācijas izpildes beigās uzraksta uz tāfeles sākumā izvēlēto ciparu vietā. Tātad operācijas izpildes gaitā nemainās uz tāfeles uzrakstīto ciparu summas atlikums, dalot to ar $3$.\n\nIevērosim, ka sākumā uzrakstīto ciparu summa ir $2 + 3 + 4 + 5 = 14$, un tā dod atlikumu $2$, dalot ar $3$. Tātad visām ciparu virknēm, kas parādās uz tāfeles, ir atlikums $2$, dalot to summu ar $3$.\n\nBet galarezultātā prasītās virknes ciparu summa ir $2(2 + 3 + 4 + 5 + 6 + 7) = 2 \\cdot 27 = 54$; tā dod atlikumu $0$, dalot ar $3$. Tātad prasīto ciparu virkni nevar iegūt. Uzdevums atrisināts.\n\n**INVARIANTS** — uz tāfeles esošo ciparu summa, dalot to ar $3$, dod atlikumu $2$.',
  },
  {
    id: 'ex20',
    grades: [9, 10, 11, 12],
    problem:
      'Bezgalīgu skaitļu virkni $1; 2; 3; 5; 8; 3; 1; 4; 5; 9; 4; 3; 7; 0; 7; 7; \\ldots$ veido pēc šāda likuma: pirmie divi skaitļi ir $1$ un $2$, bet katrs nākamais skaitlis, sākot ar trešo, ir divu iepriekšējo skaitļu summas pēdējais cipars. Vai šajā skaitļu virknē kaut kur blakus atrodas skaitļi $2$ un $4$?',
    solution:
      'Pāra skaitļus apzīmēsim ar $p$, bet nepāra skaitļus — ar $n$.\n\nIevērojam, ka $n + n = n$, $n + p = n$, $p + n = n$, $p + p = p$.\n\nTā kā virknes locekļus nosaka divu iepriekšējo skaitļu summas pēdējais cipars, tad tā veidojas šādi: $n; p; n; n; p; n; n; p; n; n; p; n; \\ldots$\n\nŠajā virknē periodiski atkārtojas grupa $(n; p; n)$. Virknē nekur blakus neatrodas divi pāra skaitļi, tātad šajā virknē nekur blakus neatradīsies skaitļi $2$ un $4$. Uzdevums atrisināts.\n\n**INVARIANTS** — virknē periodiski atkārtojas grupa $(n; p; n)$.',
  },
  {
    id: 'ex21',
    grades: [9, 10, 11, 12],
    problem:
      'Rindā uzrakstīti $2015$ vieninieki. Atļauts nodzēst jebkurus divus uzrakstītus skaitļus $a$ un $b$ un to vietā uzrakstīt vienu jaunu skaitli $\\dfrac{a+b}{4}$. Tā turpina, kamēr paliek uzrakstīts viens skaitlis. Vai var gadīties, ka tas ir mazāks nekā $0{,}0001$?',
    solution:
      'Pieņemsim, ka tiek nodzēsti skaitļi $a$ un $b$ un to vietā uzrakstīts skaitlis $\\dfrac{a+b}{4}$.\n\nPierādīsim, ka\n$$\\frac{1}{a} + \\frac{1}{b} \\geq \\frac{1}{\\frac{a+b}{4}} \\quad (1),$$\ntas ir, katra gājiena rezultātā visu uzrakstīto skaitļu apgriezto lielumu summa nepalielinās.\n\nVeicot ekvivalentus pārveidojumus, pakāpeniski iegūstam:\n$$\\frac{a+b}{ab} \\geq \\frac{4}{a+b}$$\n$$(a+b)^2 \\geq 4ab$$\n$$a^2 + 2ab + b^2 \\geq 4ab$$\n$$a^2 - 2ab + b^2 \\geq 0$$\n$$(a-b)^2 \\geq 0.$$\n\nPēdējā nevienādība ir patiesa, jo izteiksmes kvadrāts vienmēr ir nenegatīvs. Tā kā tika veikti ekvivalenti pārveidojumi, tad arī nevienādība $(1)$ ir patiesa.\n\nSākumā visu uzrakstīto skaitļu apgriezto lielumu summa ir $2015 \\cdot \\dfrac{1}{1} = 2015$; tātad arī beigās tā nav lielāka kā $2015$. Ja beigās palikušo vienīgo skaitli apzīmējam ar $x$, tad šī summa ir $\\dfrac{1}{x}$; tāpēc $\\dfrac{1}{x} \\leq 2015$ un $x \\geq \\dfrac{1}{2015} > \\dfrac{1}{10000} = 0{,}0001$. Tātad beigās uz tāfeles uzrakstītais skaitlis nevar būt mazāks nekā $0{,}0001$. Uzdevums atrisināts.\n\n**INVARIANTS** — visu ierakstīto skaitļu apgriezto lielumu summa vienmēr lielāka vai vienāda ar $2015$.',
  },
  {
    id: 'ex22',
    grades: [9, 10, 11, 12],
    problem:
      'Uz tāfeles uzrakstīts skaitlis $2016$. Ar vienu gājienu tam var vai nu pieskaitīt $12$, vai atņemt $18$. Vai, daudzkārt izdarot šādus gājienus, var iegūt skaitli $1000$?\n\nKurš no risinājumiem ir pareizs?\n\n**Jānīša risinājums.** Sākumā dotais skaitlis ir pāra skaitlis. Gan $12$, gan $18$ arī ir pāra skaitļi. Pāra skaitlim pieskaitot vai no tā atņemot pāra skaitli, iegūst pāra skaitli. Tātad uz tāfeles visu laiku parādīsies tikai pāra skaitļi. Arī beigās iegūstamais skaitlis $1000$ ir pāra skaitlis. Tātad to var iegūt ar norādītajām darbībām.\n\n**Pēterīša risinājums.** Sākumā dotais skaitlis dalās ar $3$. Gan $12$, gan $18$ arī dalās ar $3$. Ja skaitlim, kas dalās ar $3$, pieskaita vai no tā atņem skaitli, kas dalās ar $3$, tad atkal iegūst skaitli, kas dalās ar $3$. Tātad uz tāfeles visu laiku parādīsies tikai tādi skaitļi, kas dalās ar $3$. Bet beigās iegūstamais skaitlis $1000$ ar $3$ nedalās. Tātad to nevar iegūt ar norādītajām darbībām.',
    solution:
      'Pēterīša spriedums ir pareizs, bet Jānīša spriedums ir kļūdains.\n\nJānītis savā risinājumā koncentrējās uz īpašību „būt pāra skaitlim". Viņš atzīmējis, ka šī īpašība piemīt gan visiem skaitļiem, kurus var iegūt, gan arī skaitlim $1000$, par kura iegūšanas iespējām jautāts uzdevumā. Tātad Jānītis konstatējis, ka ar skaitļa paritāti saistīti apsvērumi netraucē skaitļa $1000$ iegūšanai. Bet no tā vēl neizriet, ka $1000$ iegūšanai netraucē nekādi citi apsvērumi! Gluži otrādi, kā to savā risinājumā atradis Pēterītis, dalāmība ar $3$ ir apsvērums, kas parāda, ka $1000$ ar atļautajiem gājieniem nevar iegūt.\n\nSituācija ir apmēram tāda pati, kāda rastos, ja Jānītim un Pēterītim būtu uzdots noskaidrot, vai celiņu cauri džungļiem no Mumbo ciema uz Tumbo ciemu neapdraud nekādas briesmas. Jānītis, ķīmiski analizējot gaisa sastāvu, nekļūdīgi noskaidro, ka celiņa tuvumā nav neviena lauvas, un no tā secina, ka var droši doties ceļā. Turpretī Pēterītis koncentrējas uz jaguāru meklēšanu un konstatē, ka 10 metrus no celiņa guļ vesela jaguāru saime. Kura zēna secinājums ir pareizs, varat saprast paši.',
  },
]
