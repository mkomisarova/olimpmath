/** Firestore topic document: invariantu-metode */
export default {
  displayName: 'Invariantu metode',
  slug: 'invariantu-metode',
  subject: 'kombinatorika',
  order: 4,
  theory: {
    sections: [
      {
        title: 'Invariants un invariantu metode',
        content:
          '**Invariants** — tas, kas paliek nemainīgs (kādā norisē, kādos apstākļos).\n\nPiemēram:\n- mašīnas braukšanas ātrums visā ceļa posmā nav nemainīgs lielums, jo, uzsākot braucienu, tās ātrums ir nulle, bet kaut kādā ceļa posmā tas ir nemainīgs jeb invariants;\n- pulksteņa rādītāja spicā gala attālums līdz centram, kur tas ir piestiprināts, ir nemainīgs jeb invariants, bet spicā gala attālums līdz skaitlim 12, pulksteņa rādītājiem kustoties, nav nemainīgs.\n\nInvariantu metode bieži ir lietojama tādu uzdevumu risināšanā, kuros tiek aplūkots kāds process — noteiktu darbību izpilde ar dotajiem lielumiem, un ir jāpierāda, ka no sākotnējiem datiem norādīto rezultātu **NAV** iespējams iegūt.',
      },
      {
        title: 'Invariantu metodes plāns',
        content:
          'Uzdevuma risinājumā var rīkoties pēc šāda plāna:\n\nAtrast piemērotu īpašību, kura\n1. piemīt sākumā dotajiem lielumiem;\n2. ir invarianta, tas ir, saglabājas, veicot pieļaujamās darbības;\n3. nepiemīt tam lielumam, kas būtu jāiegūst galarezultātā.\n\nInvariants atkarībā no uzdevuma var būt, piemēram, elementu skaits, summa, starpība, reizinājums, paritāte (būt pāra vai nepāra skaitlim), dalāmība ar $3$, dalāmība ar $4$, periodiskums.\n\n> **Iegaumē!** Ja uzdevumā ir jautājums „Vai var...?", „Vai iespējams...?" un atbilde ir **„JĀ"**, tad risinājumā jāparāda piemērs, kurā visas uzdevuma prasības ir izpildītas; **„NĒ"**, tad ar dažu atsevišķu piemēru apskatīšanu, kuros neizdodas panākt vēlamo, nepietiek, bet ir vajadzīgs pierādījums, kas balstās uz vispārīgiem spriedumiem.',
      },
      {
        title: 'Paritāte kā invariants',
        content:
          'Viens no biežāk izmantotajiem invariantiem ir **paritāte** — tas, vai skaitlis ir pāra vai nepāra.\n\nNoderīgi fakti:\n- pāra $+$ pāra $=$ pāra;\n- nepāra $+$ nepāra $=$ pāra;\n- pāra $+$ nepāra $=$ nepāra.\n\nJa sākumstāvoklī kāds lielums ir pāra, un katrs atļautais gājiens nemaina tā paritāti, tad šis lielums vienmēr paliks pāra. Ja prasītais gala rezultāts ir nepāra skaitlis, tad tas nav sasniedzams.',
      },
      {
        title: 'Dalāmība un atlikumi kā invarianti',
        content:
          'Dažreiz par invarianto īpašību var izvēlēties, piemēram, īpašību „dalīties ar $3$", „dalot ar $3$, dot atlikumu $1$", „dalīties ar $4$" utt.\n\n**Iegaumē dalāmības pazīmes:**\n- skaitlis dalās ar $2$ (vai $5$), ja tas beidzas ar pāra ciparu (ar $0$ vai $5$);\n- skaitlis dalās ar $3$ (vai $9$), ja tā ciparu summa dalās ar $3$ (vai $9$);\n- skaitlis dalās ar $11$, ja tā ciparu summas, kas atrodas pāra pozīcijās, un ciparu summas, kas atrodas nepāra pozīcijās, starpība dalās ar $11$.\n\nAtlikums, ko iegūst, dalot naturālu skaitli ar $3$ (vai $9$), ir vienāds ar atlikumu, ko iegūst, dalot ar $3$ (vai $9$) šī skaitļa ciparu summu.',
      },
      {
        title: 'Svarīga piezīme par invariantu metodi',
        content:
          'Gadījumos, kad zināms, ka kāda īpašība piemīt sākotnējam lielumam, saglabājas izpildāmo gājienu rezultātā un piemīt arī beigās vajadzīgajam rezultātam, tad šī informācija vien vēl **neļauj secināt**, vai vajadzīgais beigu rezultāts iegūstams no sākotnējā lieluma, izpildot pieļautos gājienus. Tādos gadījumos uzdevuma risināšanai jāmeklē citi ceļi — varbūt citi invarianti, varbūt veids, kā iegūt vajadzīgo galarezultātu.\n\nJa izdodas atrast īpašību, kas:\n- piemīt sākumā dotajiem lielumiem,\n- ir invarianta,\n- piemīt tiem lielumiem, kuri jāiegūst galarezultātā,\n\ntad no tā vien vēl **nevar secināt**, ka galarezultātā vajadzīgos lielumus tiešām varēs iegūt.',
      },
    ],
  },
  solvedExamples: [
    {
      id: 'ex1',
      problem:
        'Sākumā bija $10$ papīra gabali. Dažus no tiem sagrieza vai nu $5$, vai $7$ daļās. Visus iegūtos gabalus sajauca un dažus no tiem atkal sagrieza vai nu $5$, vai $7$ daļās. Vai, tādā veidā turpinot, var iegūt tieši $999$ papīra gabalus?',
      solution:
        'Aplūkosim, kā izmainās kopējais gabalu skaits, atkarībā no tā, cik daļās tiek sagriezts viens gabals.\n\nJa papīra gabalu sagriež:\n- **5 daļās**, tad kopējais gabalu skaits palielinās par $4$ (par pāra skaitli), tātad tas bija pāra skaitlis un paliek pāra skaitlis;\n- **7 daļās**, tad kopējais gabalu skaits palielinās par $6$ (par pāra skaitli), tātad tas bija pāra skaitlis un paliek pāra skaitlis.\n\nIevērojam, ka sākumā bija doti $10$ papīra gabali — pāra skaitlis. Tātad kopējais papīra gabalu skaits vienmēr būs pāra skaitlis. Tā kā $999$ ir nepāra skaitlis, tad tieši $999$ papīra gabalus iegūt nevarēs.\n\n**INVARIANTS** — kopējais papīra gabalu skaits vienmēr ir pāra skaitlis.',
    },
    {
      id: 'ex2',
      problem:
        'Uz tāfeles uzrakstīti skaitļi $1; 2; 3; \\ldots; 10$. Vienā gājienā var izvēlēties jebkurus divus no tiem un abiem pieskaitīt pa vieniniekam. Vai, atkārtojot šādus gājienus, var panākt, lai visi skaitļi kļūtu vienādi?',
      solution:
        'Sākumā doto skaitļu summa ir nepāra skaitlis:\n$$1 + 2 + 3 + \\cdots + 10 = 55.$$\n\nKatrā gājienā, pieskaitot pa vieniniekam diviem skaitļiem, visu skaitļu summa palielinās par $2$ (par pāra skaitli). Pie nepāra skaitļa pieskaitot pāra skaitli, iegūst nepāra skaitli. Tātad visu skaitļu summa pēc katra gājiena paliek nepāra skaitlis.\n\nBeigās prasīts iegūt desmit vienādus skaitļus, bet desmit vienādu skaitļu summa $10 \\cdot x$ ir pāra skaitlis. Tātad nevar panākt, lai visi skaitļi kļūtu vienādi.\n\n**INVARIANTS** — visu skaitļu summa vienmēr ir nepāra skaitlis.',
    },
    {
      id: 'ex3',
      problem:
        'Pamestā mājā dzīvo $2016$ spoki. Spoku ķērājs vienā reizē var noķert vai nu tieši $33$, vai tieši $17$ spokus, bet tad uzreiz uzrodas attiecīgi vai nu $48$, vai $14$ jauni spoki. Vai iespējams, ka kādā brīdī šajā mājā būs tieši viens spoks?',
      solution:
        'Aplūkosim, kā izmainās kopējais spoku skaits:\n- Noķer $33$, uzrodas $48$: kopējais spoku skaits palielinās par $15$.\n- Noķer $17$, uzrodas $14$: kopējais spoku skaits samazinās par $3$.\n\nIevērojam, ka kopējais spoku skaits izmainās par skaitli, kas dalās ar $3$.\n\nSākumā bija $2016$ spoki — skaitlis, kas dalās ar $3$, jo $2 + 0 + 1 + 6 = 9$ dalās ar $3$. Ja pie skaitļa, kas dalās ar $3$, pieskaita vai no tā atņem skaitli, kas dalās ar $3$, vienmēr iegūst skaitli, kas dalās ar $3$, jo $3k \\pm 3m = 3(k \\pm m)$.\n\nTātad kopējais spoku skaits pēc katra ķēriena dalās ar $3$. Tā kā skaitlis $1$ nedalās ar $3$, tad nav iespējams, ka kādā brīdī mājā būs tieši viens spoks.\n\n**INVARIANTS** — kopējais spoku skaits vienmēr dalās ar $3$.',
    },
    {
      id: 'ex4',
      problem:
        'Uz tāfeles rindā uzrakstīti skaitļi $1, 2, 3, \\ldots, 2014$. Vienā gājienā atļauts nodzēst jebkurus divus blakus esošus skaitļus un to vietā uzrakstīt šo skaitļu starpību. Vai iespējams, ka, veicot atļautos gājienus, uz tāfeles paliek tikai viens vienīgs skaitlis $0$?',
      solution:
        'Izmantojot aritmētiskās progresijas locekļu summas formulu, aprēķinām uz tāfeles uzrakstīto skaitļu summu:\n$$1 + 2 + \\cdots + 2014 = \\frac{(1 + 2014) \\cdot 2014}{2} = 2015 \\cdot 1007.$$\nŠī summa ir nepāra skaitlis.\n\nJa tiek nodzēsti divi blakus esoši skaitļi $a$ un $b$, $a > b$, un to vietā uzrakstīta šo skaitļu starpība $(a - b)$, tad uz tāfeles uzrakstīto skaitļu summa samazinās par $(a + b) - (a - b) = 2b$, tas ir, par pāra skaitli.\n\nJa visu sākumā doto skaitļu summa ir nepāra skaitlis, bet, nodzēšot divus blakus esošus skaitļus, uz tāfeles uzrakstīto skaitļu summa samazinās par pāra skaitli, tad, katrreiz atņemot no nepāra skaitļa pāra skaitli, iegūsim nepāra skaitli. Līdz ar to skaitli $0$ nevar iegūt, jo nulle ir pāra skaitlis.\n\n**INVARIANTS** — skaitļu summa ir nepāra skaitlis.',
    },
    {
      id: 'ex5',
      problem:
        'Uz displeja ekrāna uzrakstīta burtu virkne $XXOXOO$. Burtu grupu $XO$ var aizstāt ar $OOXXOO$, bet burtu grupu $OOX$ var aizstāt ar burtu $X$. Vai, izpildot šādas operācijas, var iegūt burtu virkni $OXOXOXOXOXOXOXO$?',
      solution:
        'Aplūkosim burtu $X$ un burtu $O$ skaita starpību.\n\nSākumā virknē $XXOXOO$ šī burtu skaita starpība ir $(X \\text{ skaits}) - (O \\text{ skaits}) = 3 - 3 = 0$, bet beigu virknē $OXOXOXOXOXOXOXO$ tā ir $7 - 8 = -1$.\n\nIzdarot aizvietošanas:\n- $XO \\to OOXXOO$: $X$ skaits mainās $1 \\to 2$, $O$ skaits mainās $1 \\to 4$, starpība mainās par $-2$;\n- $OOX \\to X$: $X$ skaits mainās $1 \\to 1$, $O$ skaits mainās $2 \\to 0$, starpība mainās par $+2$.\n\nRedzam, ka ar katru pieļaujamo operāciju starpība starp burtu $X$ skaitu un burtu $O$ skaitu mainās par pāra skaitli. Tā kā sākotnējā burtu virknē šī starpība ir $0$ (pāra skaitlis), tad tā nevar beigu virknē kļūt vienāda ar nepāra skaitli $(-1)$.\n\n**INVARIANTS** — $X$ un $O$ skaita starpība virknēs, ko var iegūt uz ekrāna, ir pāra skaitlis.',
    },
    {
      id: 'ex6',
      problem:
        'Ar naturālu skaitli drīkst izdarīt šādas operācijas: a) reizināt ar $2$; b) dalīt ar $2$, ja skaitlis ir pāra skaitlis; c) pierakstīt galā to pašu skaitli (piemēram, ar šo operāciju no skaitļa $2015$ var iegūt skaitli $20152015$). Vai ar šīm operācijām, izdarot tās vairākas reizes, no skaitļa $24$ var iegūt skaitli $2015$?',
      solution:
        'Izpētīsim vispirms abus skaitļus. Skaitlim $24$ izpildās īpašība „dalās ar $3$", bet skaitlim $2015$ šī īpašība nepiemīt.\n\nPierādīsim: ja kāds skaitlis dalās ar $3$, tad skaitlis, kas no tā tiek iegūts ar šajā uzdevumā pieļaujamajām operācijām, arī dalīsies ar $3$. Tiešām:\n- **a)** ja $n$ dalās ar $3$, tad arī $2n$ dalās ar $3$;\n- **b)** ja pāra skaitlis $2n$ dalās ar $3$, tad $n$ dalās ar $3$;\n- **c)** ja skaitļa $\\overline{n}$ ciparu summa dalās ar $3$, tad arī jauniegūtā skaitļa $\\overline{nn}$ ciparu summa dalās ar $3$, jo tā ir divreiz lielāka nekā sākotnējā skaitļa ciparu summa. Tātad arī pats jauniegūtais skaitlis $\\overline{nn}$ dalās ar $3$.\n\nTā kā uzdevumā dotais skaitlis $24$ dalās ar $3$, tad arī skaitļi, kurus var iegūt no $24$, dalās ar $3$. Bet skaitlis $2015$ ar $3$ nedalās, tātad ar uzdevumā dotajām operācijām skaitli $2015$ nevarēs iegūt.\n\n**INVARIANTS** — visi iegūtie skaitļi dalās ar $3$.',
    },
    {
      id: 'ex7',
      problem:
        'Uz tāfeles ir uzrakstīti cipari $2, 3, 4, 5$. Atļauts izvēlēties dažus no tiem un sastādīt no tiem skaitli $A$. Pēc tam skaitli $A$ reizina ar $13$, un ciparus, kurus iegūst reizināšanas rezultātā, uzraksta uz tāfeles izvēlēto ciparu vietā. Vai ar aprakstīto operāciju palīdzību var panākt, ka uz tāfeles būs uzrakstīti cipari $2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7$?',
      solution:
        'Izmantosim, ka naturāls skaitlis, dalot to ar $3$, dod tādu pašu atlikumu, kādu dod šī skaitļa ciparu summa, dalot to ar $3$.\n\nJa vienas operācijas izpildes sākumā izvēlēto ciparu summa, dalot ar $3$, dod atlikumu $r$, tad tādu pašu atlikumu $r$ dod arī no šiem cipariem izveidotais skaitlis $A$. Tā kā $13A = A + 12A$ un $12A$ dalās ar $3$, tad tādu pašu atlikumu $r$, dalot ar $3$, dod arī jauniegūtais skaitlis $13A$; tātad tādu pašu atlikumu $r$, dalot ar $3$, dod arī to ciparu summa, kurus operācijas izpildes beigās uzraksta uz tāfeles. Tātad operācijas izpildes gaitā nemainās uz tāfeles uzrakstīto ciparu summas atlikums, dalot to ar $3$.\n\nSākumā uzrakstīto ciparu summa ir $2 + 3 + 4 + 5 = 14$, un tā dod atlikumu $2$, dalot ar $3$.\n\nBet galarezultātā prasītās virknes ciparu summa ir $2(2 + 3 + 4 + 5 + 6 + 7) = 2 \\cdot 27 = 54$; tā dod atlikumu $0$, dalot ar $3$. Tā kā atlikumi ir dažādi, tad prasīto ciparu virkni nevar iegūt.\n\n**INVARIANTS** — uz tāfeles esošo ciparu summa, dalot to ar $3$, dod atlikumu $2$.',
    },
    {
      id: 'ex8',
      problem:
        'Bezgalīgu skaitļu virkni $1; 2; 3; 5; 8; 3; 1; 4; 5; 9; 4; 3; 7; 0; 7; 7; \\ldots$ veido pēc šāda likuma: pirmie divi skaitļi ir $1$ un $2$, bet katrs nākamais skaitlis, sākot ar trešo, ir divu iepriekšējo skaitļu summas pēdējais cipars. Vai šajā skaitļu virknē kaut kur blakus atrodas skaitļi $2$ un $4$?',
      solution:
        'Pāra skaitļus apzīmēsim ar $p$, bet nepāra skaitļus — ar $n$. Ievērojam, ka $n + n = p$; $n + p = n$; $p + n = n$; $p + p = p$.\n\nTā kā virknes locekļus nosaka divu iepriekšējo skaitļu summas pēdējais cipars, tad paritāšu virkne veidojas šādi:\n$$n; p; n; n; p; n; n; p; n; n; p; n; \\ldots$$\n\nŠajā virknē periodiski atkārtojas grupa $(n; p; n)$. Virknē nekur blakus neatrodas divi pāra skaitļi, tātad šajā virknē nekur blakus neatradīsies skaitļi $2$ un $4$.\n\n**INVARIANTS** — virknē periodiski atkārtojas grupa $(n; p; n)$.',
    },
    {
      id: 'ex9',
      problem:
        'Rindā uzrakstīti $2015$ vieninieki. Atļauts nodzēst jebkurus divus uzrakstītus skaitļus $a$ un $b$ un to vietā uzrakstīt vienu jaunu skaitli $\\dfrac{a+b}{4}$. Tā turpina, kamēr paliek uzrakstīts viens skaitlis. Vai var gadīties, ka tas ir mazāks nekā $0{,}0001$?',
      solution:
        'Pieņemsim, ka tiek nodzēsti skaitļi $a$ un $b$ un to vietā uzrakstīts skaitlis $\\dfrac{a+b}{4}$.\n\nPierādīsim, ka\n$$\\frac{1}{a} + \\frac{1}{b} \\geq \\frac{1}{\\frac{a+b}{4}}, \\quad (1)$$\ntas ir, katra gājiena rezultātā visu uzrakstīto skaitļu apgriezto lielumu summa nepalielinās.\n\nVeicot ekvivalentus pārveidojumus, pakāpeniski iegūstam:\n$$\\frac{a+b}{ab} \\geq \\frac{4}{a+b}$$\n$$(a+b)^2 \\geq 4ab$$\n$$a^2 + 2ab + b^2 \\geq 4ab$$\n$$a^2 - 2ab + b^2 \\geq 0$$\n$$(a-b)^2 \\geq 0.$$\n\nPēdējā nevienādība ir patiesa, jo izteiksmes kvadrāts vienmēr ir nenegatīvs. Tā kā tika veikti ekvivalenti pārveidojumi, tad arī nevienādība $(1)$ ir patiesa.\n\nSākumā visu uzrakstīto skaitļu apgriezto lielumu summa ir $2015 \\cdot \\dfrac{1}{1} = 2015$; tātad arī beigās tā nav lielāka kā $2015$. Ja beigās palikušo vienīgo skaitli apzīmējam ar $x$, tad šī summa ir $\\dfrac{1}{x}$; tāpēc $\\dfrac{1}{x} \\leq 2015$ un $x \\geq \\dfrac{1}{2015} > \\dfrac{1}{10000} = 0{,}0001$. Tātad beigās uz tāfeles uzrakstītais skaitlis nevar būt mazāks kā $0{,}0001$.\n\n**INVARIANTS** — visu ierakstīto skaitļu apgriezto lielumu summa vienmēr lielāka vai vienāda ar $2015$.',
    },
    {
      id: 'ex10',
      problem:
        'Uz tāfeles uzrakstīts skaitlis $2016$. Ar vienu gājienu tam var vai nu pieskaitīt $12$, vai atņemt $18$. Vai, daudzkārt izdarot šādus gājienus, var iegūt skaitli $1000$?',
      solution:
        'Sākumā dotais skaitlis $2016$ dalās ar $3$. Gan $12$, gan $18$ arī dalās ar $3$. Ja skaitlim, kas dalās ar $3$, pieskaita vai no tā atņem skaitli, kas dalās ar $3$, tad atkal iegūst skaitli, kas dalās ar $3$, jo $3k \\pm 3m = 3(k \\pm m)$. Tātad uz tāfeles visu laiku parādīsies tikai tādi skaitļi, kas dalās ar $3$.\n\nBet beigās iegūstamais skaitlis $1000$ ar $3$ nedalās (jo $1 + 0 + 0 + 0 = 1$ nedalās ar $3$). Tātad to nevar iegūt ar norādītajām darbībām.\n\n**INVARIANTS** — visi iegūtie skaitļi dalās ar $3$.\n\n*Piezīme.* Jānīša risinājums, kurš pamanīja, ka paritāte saglabājas, ir kļūdains, jo no tā, ka arī mērķa skaitlim $1000$ ir tāda pati paritāte, vēl neizriet, ka to var sasniegt — jāmeklē citi invarianti.',
    },
    {
      id: 'ex11',
      problem:
        'Niknajam jūras laupītājam Smuidrim ir četras kaudzes ar zelta monētām. Viņš māk vienu kaudzi sadalīt $3$ vai $5$ mazākās kaudzēs. Vai, atkārtoti izpildot šādas darbības, Smuidris varēs iegūt tieši $2015$ kaudzes?',
      solution:
        'Ievērojam, ka sākumā bija $4$ kaudzes — pāra skaitlis.\n\nJa vienu kaudzi sadala:\n- **3 daļās**, tad kopējais kaudžu skaits palielinās par $2$ (par pāra skaitli), tātad tas paliek pāra skaitlis;\n- **5 daļās**, tad kopējais kaudžu skaits palielinās par $4$ (par pāra skaitli), tātad tas paliek pāra skaitlis.\n\nTātad kopējais kaudžu skaits vienmēr būs pāra skaitlis. Tā kā $2015$ ir nepāra skaitlis, tad tieši $2015$ kaudzes iegūt nevarēs.',
    },
    {
      id: 'ex12',
      problem:
        'Bagātajai Austrumu princesei Smuidrai zem gultas ir $6$ lādes. Sākumā lādēs ir attiecīgi $1, 5, 0, 0, 2, 3$ zelta monētas. Katru stundu viņa izvēlas $2$ lādes un katrā no tām pieliek klāt $1$ monētu. Vai, atkārtoti izpildot šādas darbības, var panākt, ka kādā brīdī visās lādēs būs vienāds skaits monētu?',
      solution:
        'Sākumā lādēs esošo monētu kopējais skaits ir nepāra skaitlis:\n$$1 + 5 + 0 + 0 + 2 + 3 = 11.$$\n\nKatrā stundā, pieliekot pa vienai monētai katrā no divām izvēlētajām lādēm, visu monētu kopējais skaits palielinās par $2$ (par pāra skaitli). Pie nepāra skaitļa pieskaitot pāra skaitli, iegūst nepāra skaitli. Tātad visu monētu kopējais skaits pēc katras stundas paliek nepāra skaitlis.\n\nBeigās prasīts iegūt, ka visās lādēs ir vienāds monētu skaits, bet sešu vienādu skaitļu summa ir pāra skaitlis. Tātad nevar panākt, ka visās lādēs ir vienāds monētu skaits.',
    },
    {
      id: 'ex13',
      problem:
        'Sensenos laikos saimnieciskajam Gotfrīdam bija $99$ aitas un $21$ kamielis. Bagdādē par $4$ kamieļiem pretī varēja saņemt $8$ aitas, bet Damaskā par $5$ aitām pretī varēja saņemt $3$ kamieļus. Vai, atkārtoti mainot dzīvniekus tikai šajās divās pilsētās, Gotfrīds varēja iegūt tieši $2015$ mājlopus?',
      solution:
        'Ievērojam, ka sākumā kopējais mājlopu skaits ir $99 + 21 = 120$ — pāra skaitlis.\n\nAplūkojam, kā izmainās kopējais mājlopu skaits:\n- ja par $4$ kamieļiem pretī saņem $8$ aitas, tad kopējais mājlopu skaits palielinās par $4$ (par pāra skaitli), tātad paliek pāra skaitlis;\n- ja par $5$ aitām pretī saņem $3$ kamieļus, tad kopējais mājlopu skaits samazinās par $2$ (par pāra skaitli), tātad paliek pāra skaitlis.\n\nTātad kopējais mājlopu skaits vienmēr būs pāra skaitlis. Tā kā $2015$ ir nepāra skaitlis, tad tieši $2015$ mājlopus iegūt nevarēs.',
    },
    {
      id: 'ex14',
      problem:
        'Autoservisā „Šrotiņš" ir $39$ mašīnas. Naskais Maigonis katra mēneša $20.$ datumā vai nu pārdod $7$ restaurētas mašīnas un to vietā nopērk $16$ vecas mašīnas, vai arī $19$ mašīnas nodod metāllūžņos un to vietā nopērk $4$ vecas mašīnas. Vai iespējams, ka „Šrotiņā" kāda mēneša $21.$ datumā būs tieši $2015$ mašīnas?',
      solution:
        'Ievērojam, ka sākumā mašīnu skaits ir $39$, kas dalās ar $3$.\n\nAplūkosim, kā izmainās kopējais mašīnu skaits:\n- ja pārdod $7$ un nopērk $16$, tad kopējais mašīnu skaits palielinās par $9$ (kas dalās ar $3$);\n- ja $19$ nodod metāllūžņos un nopērk $4$, tad kopējais mašīnu skaits samazinās par $15$ (kas dalās ar $3$).\n\nJa pie skaitļa, kas dalās ar $3$, pieskaita vai no tā atņem skaitli, kas dalās ar $3$, vienmēr iegūst skaitli, kas dalās ar $3$. Tātad kopējais mašīnu skaits pēc katras darbības dalās ar $3$.\n\nSkaitļa $2015$ ciparu summa ir $2 + 0 + 1 + 5 = 8$, kas nedalās ar $3$, tātad arī pats skaitlis $2015$ nedalās ar $3$. Tātad nav iespējams, ka „Šrotiņā" kāda mēneša $21.$ datumā būs tieši $2015$ mašīnas.',
    },
    {
      id: 'ex15',
      problem:
        'Regulāra astoņstūra virsotnēs pēc kārtas uzrakstīti skaitļi $7, 15, 3, 17, 1, 9, 5, 11$. Ar skaitļiem atļauts veikt šādas darbības: pieskaitīt kādam skaitlim divus skaitļus, kas atrodas blakus virsotnēs; atņemt no skaitļa divkāršotu pretējā virsotnē uzrakstīto skaitli, ja starpība ir pozitīva. Vai, atkārtoti izpildot šīs darbības, var panākt, ka vienā no virsotnēm būs ierakstīts skaitlis $2014$?',
      solution:
        'Visi skaitļi, kas uzrakstīti regulārā astoņstūra virsotnēs, sākumā ir nepāra skaitļi. Ievērojam, ka:\n1. nepāra skaitlim pieskaitot divus nepāra skaitļus, iegūst nepāra skaitli;\n2. no nepāra skaitļa atņemot divkāršotu nepāra skaitli, iegūst nepāra skaitli.\n\nTātad gan pēc pirmās, gan pēc otrās darbības astoņstūra virsotnē atkal būs ierakstīts nepāra skaitlis. Līdz ar to visi skaitļi, kas atrodas astoņstūra virsotnēs, vienmēr paliek nepāra. Bet skaitlis $2014$ ir pāra skaitlis, tātad skaitli $2014$ iegūt nevarēs.\n\n**INVARIANTS** — visi skaitļi astoņstūra virsotnēs vienmēr ir nepāra.',
    },
    {
      id: 'ex16',
      problem:
        'Ar naturālu skaitli atļauts veikt šādas darbības: pieskaitīt $6$; dalīt ar $4$, ja skaitlis dalās ar $4$; mainīt vietām skaitļa ciparus (skaitļa sākumā nedrīkst atrasties nulle). Vai, atkārtoti izpildot šīs darbības, no skaitļa $30$ var iegūt skaitli $2015$?',
      solution:
        'Skaitlim $30$ izpildās īpašība „dalās ar $3$", bet skaitlim $2015$ šī īpašība neizpildās.\n\nPierādīsim: ja kāds skaitlis dalās ar $3$, tad skaitlis, kas no tā tiek iegūts ar uzdevumā dotajām darbībām, arī dalās ar $3$. Ievērojam, ka:\n- ja skaitlis $n$ dalās ar $3$, tad arī $(n + 6)$ dalās ar $3$;\n- ja pāra skaitlis $4n$ dalās ar $3$, tad arī skaitlis $n$ dalās ar $3$;\n- „mainīt vietām skaitļa ciparus" — izriet no dalāmības pazīmes ar $3$ (ja skaitlis $n$ dalās ar $3$, tad arī tā ciparu summa dalās ar $3$, bet summa nemainās, ja maina saskaitāmo secību).\n\nTātad, ja dotais skaitlis dalās ar $3$, tad pēc atļauto darbību izpildes arī jauniegūtais skaitlis dalīsies ar $3$. Skaitlis $2015$ ar $3$ nedalās, tātad ar atļautajām darbībām skaitli $2015$ iegūt nevar.\n\n**INVARIANTS** — visi iegūtie skaitļi dalās ar $3$.',
    },
    {
      id: 'ex17',
      problem:
        'Ar naturālu skaitli atļauts izdarīt šādas darbības: pieskaitīt skaitlim tā ciparu summu; atņemt no skaitļa tā ciparu summu. Vai, atkārtoti izpildot šīs darbības, no skaitļa $139$ var iegūt skaitli a) $63$; b) $193$?',
      solution:
        '**a)** Skaitli $63$ var iegūt šādi:\n$$139 \\xrightarrow{-13} 126 \\xrightarrow{-9} 117 \\xrightarrow{-9} 108 \\xrightarrow{-9} 99 \\xrightarrow{-18} 81 \\xrightarrow{-9} 72 \\xrightarrow{-9} 63.$$\n\n**b)** Atlikums, ko iegūst, dalot naturālu skaitli ar $9$, ir vienāds ar atlikumu, ko iegūst, dalot ar $9$ šī skaitļa ciparu summa. Tāpēc naturāla skaitļa un tā ciparu summas starpība noteikti dalīsies ar $9$. Kaut vienu reizi izpildot atņemšanu, visi turpmāk iegūstamie skaitļi dalīsies ar $9$.\n\nTā kā $193$ nedalās ar $9$, tad skaitli $193$ varētu iegūt tikai tad, ja skaitlim visu laiku pieskaitīs tā ciparu summu. Tātad skaitļi pārveidosies šādi:\n$$139 \\xrightarrow{+13} 152 \\xrightarrow{+8} 160 \\xrightarrow{+7} 167 \\xrightarrow{+14} 181 \\xrightarrow{+10} 191 \\xrightarrow{+11} 202 \\to \\ldots$$\nVisi tālāk iegūstamie skaitļi ir lielāki nekā $193$, tātad skaitli $193$ nevarēs iegūt.',
    },
  ],
}
