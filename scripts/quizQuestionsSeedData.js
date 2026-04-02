/** MCQ quiz questions per topic — used by seedQuizQuestions in seedFirestore.js */
export const quizQuestionsByTopic = {
  dalamiba: [
    {
      id: 'q1',
      question: 'Ar ko noteikti dalās skaitlis, ja tā ciparu summa dalās ar $9$?',
      options: ['Ar $2$', 'Ar $6$', 'Ar $9$', 'Ar $99$'],
      correct: 2,
    },
    {
      id: 'q2',
      question: 'Kāds ir $\\text{LKD}(12; 18; 24)$?',
      options: ['$3$', '$6$', '$12$', '$24$'],
      correct: 1,
    },
    {
      id: 'q3',
      question: 'Vai skaitlis $2026$ dalās ar $3$?',
      options: [
        'Jā, jo $2+0+2+6=10$ dalās ar $3$',
        'Nē, jo $2+0+2+6=10$ nedalās ar $3$',
        'Jā, jo pēdējais cipars ir $6$',
        'Nē, jo $2026$ ir pāra skaitlis',
      ],
      correct: 1,
    },
    {
      id: 'q4',
      question:
        'Skaitlis dalās ar $6$, ja tas dalās ar $2$ un $3$. Kāpēc nevar teikt, ka skaitlis dalās ar $2 \\cdot 6 = 12$, ja tas dalās ar $2$ un $6$?',
      options: [
        'Jo $2$ un $6$ nav savstarpēji pirmskaitļi',
        'Jo $6$ nav pirmskaitlis',
        'Jo $2 \\cdot 6 = 12$ ir pārāk liels',
        'Jo dalāmības pazīme ar $12$ neeksistē',
      ],
      correct: 0,
    },
    {
      id: 'q5',
      question: 'Skaitlis $\\overline{a543b}$ dalās ar $4$. Kādas var būt $b$ vērtības?',
      options: ['$b = 0$ vai $b = 4$', '$b = 2$ vai $b = 6$', '$b = 1$ vai $b = 5$', '$b = 3$ vai $b = 7$'],
      correct: 1,
    },
    {
      id: 'q6',
      question: 'Kāda ir mazākā iespējamā ciparu summa desmitciparu skaitlim, kas dalās ar $33$?',
      options: ['$3$', '$4$', '$6$', '$9$'],
      correct: 2,
    },
  ],
  pirmrezinataji: [
    {
      id: 'q1',
      question: 'Kādi ir skaitļa $20$ dažādie pirmreizinātāji?',
      options: ['$1; 2; 4; 5; 10; 20$', '$2$ un $5$', '$2; 2$ un $5$', '$4$ un $5$'],
      correct: 1,
    },
    {
      id: 'q2',
      question:
        'Lai pārbaudītu, vai skaitlis $n$ ir pirmskaitlis, ar kādiem pirmskaitļiem $p$ jāpārbauda dalāmība?',
      options: [
        'Ar visiem pirmskaitļiem līdz $n$',
        'Ar visiem pirmskaitļiem, kam $p \\leq \\sqrt{n}$',
        'Tikai ar $2$, $3$ un $5$',
        'Ar visiem naturāliem skaitļiem līdz $n$',
      ],
      correct: 1,
    },
    {
      id: 'q3',
      question: 'Kādus skaitļus iegūst, sadalot skaitli $20$ pirmreizinātājos?',
      options: ['$1; 2; 4; 5; 10; 20$', '$2; 5$', '$2; 2; 5$', '$4; 5$'],
      correct: 2,
    },
    {
      id: 'q4',
      question:
        'Lai skaitlis $n = p_1^{k_1} \\cdot p_2^{k_2}$ būtu naturāla skaitļa kvadrāts, kādiem jābūt kāpinātājiem $k_1$ un $k_2$?',
      options: [
        'Abiem jābūt nepāra skaitļiem',
        'Abiem jābūt pāra skaitļiem',
        'Vismaz vienam jābūt pāra skaitlim',
        'Abiem jābūt vienādiem',
      ],
      correct: 1,
    },
    {
      id: 'q5',
      question: 'Cik dažādu naturālu dalītāju ir skaitlim $12 = 2^2 \\cdot 3$?',
      options: ['$4$', '$5$', '$6$', '$8$'],
      correct: 2,
    },
    {
      id: 'q6',
      question: 'Skaitlim $A$ ir tieši $p$ dalītāji, kur $p$ ir pirmskaitlis. Ar cik dažādiem pirmskaitļiem dalās $A$?',
      options: [
        'Ar $p$ pirmskaitļiem',
        'Ar $p - 1$ pirmskaitļiem',
        'Ar tieši $1$ pirmskaitli',
        'Ar $2$ pirmskaitļiem',
      ],
      correct: 2,
    },
  ],
  dirichlet: [
    {
      id: 'q1',
      question: 'Ko apgalvo Dirihlē princips savā pamata versijā?',
      options: [
        'Ja $n$ objekti jāsadala $n$ grupās, kādā grupā būs $2$ objekti',
        'Ja vairāk nekā $n$ objekti jāsadala $n$ grupās, kādā grupā būs vismaz $2$ objekti',
        'Ja $n+1$ objekti jāsadala $n+1$ grupās, kādā grupā būs $2$ objekti',
        'Ja $n$ objekti jāsadala $n-1$ grupās, visās grupās būs tieši $1$ objekts',
      ],
      correct: 1,
    },
    {
      id: 'q2',
      question: 'Pulciņā ir $13$ skolēni. Kāpēc noteikti divi dzimuši vienā mēnesī?',
      options: [
        'Jo $13 > 12$ un gadā ir $12$ mēneši',
        'Jo $13$ ir nepāra skaitlis',
        'Jo $13$ ir pirmskaitlis',
        'Jo katrs mēnesis ir unikāls',
      ],
      correct: 0,
    },
    {
      id: 'q3',
      question:
        'Kāds ir minimālais nepieciešamais cilvēku skaits, lai garantētu, ka vismaz $2$ cilvēkiem dzimšanas diena sakrīt (ņemot vērā arī $29.$ februāri)?',
      options: ['$365$', '$366$', '$367$', '$368$'],
      correct: 2,
    },
    {
      id: 'q4',
      question:
        'Dirihlē principa vispārinājums: ja vairāk nekā $m \\cdot n$ objekti jāsadala $n$ grupās, tad noteikti ir grupa ar vismaz cik objektiem?',
      options: ['$m$ objektiem', '$m + 1$ objektiem', '$n$ objektiem', '$m \\cdot n$ objektiem'],
      correct: 1,
    },
    {
      id: 'q5',
      question: 'No $8$ naturāliem skaitļiem var izvēlēties divus, kuru starpība dalās ar $7$. Kāpēc?',
      options: [
        'Jo $8 > 7$ un ir tikai $7$ iespējamie atlikumi, dalot ar $7$',
        'Jo $8$ dalās ar $4$',
        'Jo $7$ ir pirmskaitlis',
        'Jo $8 - 7 = 1$',
      ],
      correct: 0,
    },
    {
      id: 'q6',
      question:
        'Profesora Cipariņa olimpiādē bija $3$ uzdevumi un $100$ skolēni. Cik ir dažādi iespējamie atrisināto uzdevumu komplekti?',
      options: ['$6$', '$7$', '$8$', '$9$'],
      correct: 2,
    },
  ],
  virknes: [
    {
      id: 'q1',
      question: 'Kā sauc skaitļus, kas veido virkni?',
      options: ['Virknes elementi', 'Virknes locekļi', 'Virknes dalītāji', 'Virknes saskaitāmie'],
      correct: 1,
    },
    {
      id: 'q2',
      question: 'Kāda ir Fibonači virknes rekurences formula?',
      options: [
        '$F_{n+1} = F_n \\cdot F_{n-1}$',
        '$F_{n+2} = F_{n+1} - F_n$',
        '$F_{n+2} = F_n + F_{n+1}$',
        '$F_{n+1} = 2F_n$',
      ],
      correct: 2,
    },
    {
      id: 'q3',
      question: 'Virkne $1; 2; 3; 1; 2; 3; 1; 2; 3; \\ldots$ ir periodiska. Kāds ir tās perioda garums?',
      options: ['$1$', '$2$', '$3$', '$6$'],
      correct: 2,
    },
    {
      id: 'q4',
      question: 'Rekurenta virkne ir atkarīga tikai no viena iepriekšējā locekļa. Kad tā kļūst periodiska?',
      options: [
        'Kad pirmais loceklis ir $0$',
        'Kad divi locekļi sakrīt',
        'Kad locekļi kļūst lielāki par $100$',
        'Kad perioda garums ir $1$',
      ],
      correct: 1,
    },
    {
      id: 'q5',
      question: 'Rekurenta virkne ir atkarīga no diviem iepriekšējiem locekļiem. Kad tā kļūst periodiska?',
      options: [
        'Kad viens loceklis atkārtojas',
        'Kad divi blakus esoši locekļu pāri sakrīt',
        'Kad virkne sasniedz nulli',
        'Kad perioda garums ir $2$',
      ],
      correct: 1,
    },
    {
      id: 'q6',
      question: 'Virkni $a_n$ definē ar $a_n = a_{n-2} + a_{n-3}$, $a_2 = a_3 = a_4 = 1$. Kāda ir $a_7$ vērtība?',
      options: ['$3$', '$4$', '$5$', '$6$'],
      correct: 0,
    },
  ],
  skaitlapieraksts: [
    {
      id: 'q1',
      question: 'Cik ciparu ir kopā?',
      options: ['$8$', '$9$', '$10$', '$11$'],
      correct: 2,
    },
    {
      id: 'q2',
      question: 'Kurš no šiem skaitļiem NAV naturāls skaitlis?',
      options: ['$1$', '$0$', '$100$', '$999$'],
      correct: 1,
    },
    {
      id: 'q3',
      question: 'Kā izsaka divciparu skaitli $\\overline{ab}$ algebriskā formā?',
      options: ['$a + b$', '$a \\cdot b$', '$10a + b$', '$100a + b$'],
      correct: 2,
    },
    {
      id: 'q4',
      question: 'Kāds ir skaitļa $\\overline{abcab}$ algebriskais pieraksts?',
      options: [
        '$1001 \\cdot \\overline{ab} + 100c$',
        '$100 \\cdot \\overline{ab} + 1001c$',
        '$\\overline{ab} + 100c + \\overline{ab}$',
        '$1000 \\cdot \\overline{abc} + \\overline{ab}$',
      ],
      correct: 0,
    },
    {
      id: 'q5',
      question:
        'Leonards pareizina trīsciparu skaitli $\\overline{abc}$ ar $2$ un pieraksta galā sākotnējo skaitli. Ar ko vienāds iegūtais skaitlis?',
      options: [
        '$2000 \\cdot \\overline{abc} + \\overline{abc}$',
        '$2001 \\cdot \\overline{abc}$',
        '$200 \\cdot \\overline{abc} + \\overline{abc}$',
        '$2 \\cdot \\overline{abc} + 1000$',
      ],
      correct: 1,
    },
    {
      id: 'q6',
      question: 'Četrciparu skaitlim pārliek ciparus citā secībā. Ar ko noteikti dalās abu skaitļu starpība?',
      options: ['Ar $3$', 'Ar $7$', 'Ar $9$', 'Ar $11$'],
      correct: 2,
    },
  ],
  'induktivi-spriedumi': [
    {
      id: 'q1',
      question:
        'Kā pareizi raksturo **induktīvu spriedumu**?',
      options: [
        'Secinājumu, kas iegūts, vispārīgi pierādot formulas patiesumu visiem $n$',
        'Secinājumu, kas balstās uz vairākiem eksperimentiem vai novērojumiem un var būt nepilnīgs',
        'Tikai pierādījumu, kas izmanto matemātisko indukciju',
        'Tikai skaitļu dalāmības pārbaudi',
      ],
      correct: 1,
    },
    {
      id: 'q2',
      question: 'Vai induktīvs spriedums vienmēr garantē apgalvojuma patiesumu visos gadījumos?',
      options: [
        'Jā, jo tas balstās uz daudziem piemēriem',
        'Nē, jo no dažiem gadījumiem uz vispārīgu secinājumu pārejot var rasties kļūdas',
        'Jā, ja izmantoti vismaz pieci piemēri',
        'Nē, jo induktīvi spriedumi vispār nav pieļaujami',
      ],
      correct: 1,
    },
    {
      id: 'q3',
      question:
        'Teikums „visi naturāli skaitļi, kuru pēdējais cipars ir $4$, dalās ar $2$" ir:',
      options: [
        'Atsevišķs apgalvojums par vienu skaitli',
        'Vispārīgs apgalvojums par skaitļu kopu',
        'Definīcija par pāra skaitli',
        'Tikai piemērs, nevis apgalvojums',
      ],
      correct: 1,
    },
    {
      id: 'q4',
      question:
        'Kā sauc slēdzienu, pārejot no atsevišķiem gadījumiem uz vispārīgu secinājumu?',
      options: ['Dedukcija', 'Indukcija (induktīvais spriedums)', 'Pierādījums no pretējā', 'Analītisks aprēķins'],
      correct: 1,
    },
    {
      id: 'q5',
      question:
        'Ja uzdevumā jāpierāda vienādība visiem $n$, vai pietiek atrast $10$ piemērus, kuriem tā izpildās?',
      options: [
        'Jā, jo $10$ piemēri ir pietiekami liels skaits',
        'Nē, parasti ir vajadzīgs vispārīgs pierādījums (piemēram, MI)',
        'Jā, ja piemēri ir pēc kārtas $1,2,\\ldots,10$',
        'Nē, vienmēr pietiek ar vienu piemēru',
      ],
      correct: 1,
    },
    {
      id: 'q6',
      question:
        'Kurš no apgalvojumiem ir **atsevišķs** (par vienu objektu)?',
      options: [
        '„Katrs naturāls skaitlis dalās ar $1$"',
        '„Skaitlis $14$ dalās ar $2$"',
        '„Visi pirmskaitļi ir nepāra skaitļi"',
        '„Katram $n$ izpildās kāda formula"',
      ],
      correct: 1,
    },
  ],
  'matematiskas-indukcijas-metode': [
    {
      id: 'q1',
      question: 'Kas ir **indukcijas bāze** matemātiskās indukcijas pierādījumā?',
      options: [
        'Pārbaude, ka apgalvojums ir patiess sākuma gadījumam (piemēram, $n=1$)',
        'Pieņēmums, ka apgalvojums ir patiess visiem $n \\le k$',
        'Pēdējais solis, kur pierāda formulu $n=k+2$',
        'Tikai rekurences formula',
      ],
      correct: 0,
    },
    {
      id: 'q2',
      question: 'Ko dara **induktīvā pāreja**?',
      options: [
        'Pierāda, ka no patiesuma pie $n=k$ izriet patiesums pie $n=k+1$',
        'Aizstāj $n$ ar $n+1$ formulā bez pamatojuma',
        'Pārbauda tikai vienu lielu $n$',
        'Pierāda, ka formula ir patiesa visiem reāliem $x$',
      ],
      correct: 0,
    },
    {
      id: 'q3',
      question:
        'Ja izmanto **stiprinātu** indukciju (no diviem iepriekšējiem izriet nākamais), tad bāze parasti ir:',
      options: [
        'Tikai $n=1$',
        'Vismaz divi sākuma gadījumi (piemēram, $n=1$ un $n=2$)',
        'Tikai $n=0$',
        'Nav vajadzīga bāze',
      ],
      correct: 1,
    },
    {
      id: 'q4',
      question: 'Matemātiskās indukcijas metodi tipiski izmanto, lai pierādītu, ka apgalvojums ir patiess:',
      options: [
        'Visiem reāliem skaitļiem $x$',
        'Visām naturālām $n$ vērtībām (vai sākot no kāda $n_0$)',
        'Tikai pirmskaitļiem',
        'Tikai skaitļiem līdz $100$',
      ],
      correct: 1,
    },
    {
      id: 'q5',
      question:
        'Ja indukcijas bāze ir pareiza un induktīvā pāreja ir pareiza, tad secinājums ir:',
      options: [
        'Apgalvojums patiess visiem veseliem $n$',
        'Apgalvojums patiess visām naturālām $n$ (attiecīgajā apgabalā), uz ko attiecas pierādījums',
        'Apgalvojums patiess tikai $n=1$',
        'Apgalvojums var būt aplams',
      ],
      correct: 1,
    },
    {
      id: 'q6',
      question: 'Kurš no šiem **nav** tipisks MI pielietojums?',
      options: [
        'Vienādību pierādīšana',
        'Dalāmības pierādīšana',
        'Tieša ģeometriskā figūras uzzīmēšana bez aprēķina',
        'Rekurentas formulas pierādīšana',
      ],
      correct: 2,
    },
  ],
  'piemers-pretpiemers': [
    {
      id: 'q1',
      question:
        'Jautājums „Vai eksistē tāds naturāls skaitlis $n$, ka ...?" un atbilde „Jā" — ko parasti pietiek parādīt?',
      options: [
        'Pilnu pierādījumu visiem $n$',
        'Vienu piemēru, kas apmierina nosacījumus',
        'Tikai pretpiemēru',
        'Tikai tabulu ar visiem $n$ līdz $1000$',
      ],
      correct: 1,
    },
    {
      id: 'q2',
      question:
        'Jautājums „Vai **katram** naturālam $n$ ...?" un atbilde „Nē" — ko parasti pietiek parādīt?',
      options: [
        'Vienu pretpiemēru (konkrētu $n$, kuram neizpildās)',
        'Tikai vienu piemēru, kur izpildās',
        'Pierādījumu, ka neeksistē neviena $n$',
        'Nekā — ar piemēriem nepietiek',
      ],
      correct: 0,
    },
    {
      id: 'q3',
      question:
        'Jautājums „Vai **katram** naturālam $n$ ...?" un atbilde „Jā" — kāds pierādījums parasti ir nepieciešams?',
      options: [
        'Pietiek ar $5$ piemēriem',
        'Vispārīgs pierādījums (ne tikai atsevišķi piemēri)',
        'Tikai viens piemērs',
        'Tikai zīmējums',
      ],
      correct: 1,
    },
    {
      id: 'q4',
      question: 'Kas ir **pretpiemērs**?',
      options: [
        'Piemērs, kas apstiprina vispārīgu apgalvojumu',
        'Konkrēts gadījums, kas apgāž vispārīgu „visi/katram" tipa apgalvojumu',
        'Tikai nepareiza atbilde uzdevumā',
        'Jebkurš piemērs ar skaitli $0$',
      ],
      correct: 1,
    },
    {
      id: 'q5',
      question:
        '„Vai divu pirmskaitļu summa var būt pirmskaitlis?" — atbildei „Jā" pietiek ar:',
      options: [
        'Vienu piemēru, piemēram, $2+3=5$',
        'Pierādījumu visiem pirmskaitļu pāriem',
        'Tikai pretpiemēru',
        'Definīciju bez piemēra',
      ],
      correct: 0,
    },
    {
      id: 'q6',
      question:
        '„Vai **visi** kvadrāti ir lielāki par $1$?" — kā pareizi pamato atbildi „Nē"?',
      options: [
        'Parādot, ka $1^2$ nav lielāks par $1$',
        'Parādot, ka $2^2 > 1$',
        'Pierādot formulu visiem $n$',
        'Nevar pamatot ar pretpiemēru',
      ],
      correct: 0,
    },
  ],
  polinomi: [
    {
      id: 'q1',
      question:
        'Ja $\\dfrac{p}{q}$ (saīsināta daļa) ir racionāla sakne polinomam ar **veseliem** koeficientiem, tad parasti:',
      options: [
        '$p$ dalās ar augstākās pakāpes koeficientu un $q$ ar brīvo locekli',
        '$p$ dalās ar $a_0$ un $q$ dalās ar $a_n$',
        '$p$ un $q$ ir pirmskaitļi',
        '$p=q=1$',
      ],
      correct: 1,
    },
    {
      id: 'q2',
      question:
        'Ja moniska polinoma ($a_n=1$) visi koeficienti ir veseli, tad visas **racionālās** saknes ir:',
      options: [
        'Tikai skaitļi $0$ un $1$',
        'Veseli skaitļi, kas ir $a_0$ dalītāji',
        'Tikai pozitīvi skaitļi',
        'Neeksistē',
      ],
      correct: 1,
    },
    {
      id: 'q3',
      question: 'Polinoma **sakne** ir tāda $x$ vērtība, ka:',
      options: [
        '$P(x)$ ir maksimālais',
        '$P(x)=0$',
        '$P(x)=1$',
        '$P(x)$ ir pāra skaitlis',
      ],
      correct: 1,
    },
    {
      id: 'q4',
      question:
        'Dalot polinomu $Q(x)$ ar $P(x)$, iegūst $Q(x)=P(x)S(x)+R(x)$. Ko nozīmē $R(x)$?',
      options: ['Dalījums', 'Atlikums', 'Pakāpe', 'Galvenais koeficients'],
      correct: 1,
    },
    {
      id: 'q5',
      question:
        'Ja $x=a$ ir polinoma $P(x)$ sakne, tad $P(x)$ var izteikt kā:',
      options: [
        '$P(x)=(x+a)Q(x)$',
        '$P(x)=(x-a)Q(x)$',
        '$P(x)=Q(x)/(x-a)$',
        '$P(x)=Q(x)+a$',
      ],
      correct: 1,
    },
    {
      id: 'q6',
      question:
        'Lai pārbaudītu iespējamās **veselās** saknes polinomam ar veseliem koeficientiem un $a_n=1$, pietiek pārbaudīt:',
      options: [
        'Visus veselus skaitļus no $-1000$ līdz $1000$',
        'Tikai $a_0$ dalītājus (un to pretējos)',
        'Tikai pirmskaitļus līdz $|a_0|$',
        'Tikai pozitīvus skaitļus',
      ],
      correct: 1,
    },
  ],
  'invariantu-metode': [
    {
      id: 'q1',
      question: 'Invariantu metodē **invariants** ir lielums, kas:',
      options: [
        'Mainās pēc katra gājiena',
        'Saglabājas (vai mainās paredzētā veidā), veicot atļautās darbības',
        'Vienmēr ir $0$',
        'Ir tikai skaitļu summa',
      ],
      correct: 1,
    },
    {
      id: 'q2',
      question:
        'Ja sākumā skaitļu summa ir nepāra un katrā gājienā summa mainās par pāra skaitli, tad summa paliek:',
      options: ['Pāra', 'Nepāra', 'Vienmēr $0$', 'Nevar zināt'],
      correct: 1,
    },
    {
      id: 'q3',
      question:
        'Ja „vai var panākt..." un atbilde ir **„Nē"**, tad pietiek ar dažiem nejaušiem mēģinājumiem?',
      options: [
        'Jā, ja neizdodas $10$ reizes',
        'Nē, parasti vajag invariantu vai citu vispārīgu argumentu',
        'Jā, vienmēr',
        'Tikai tad, ja uzdevums par šahu',
      ],
      correct: 1,
    },
    {
      id: 'q4',
      question: 'Paritāte (pāra/nepāra) bieži ir noderīga kā:',
      options: ['Dalījums', 'Invariants', 'Pirmskaitlis', 'Kvadrāts'],
      correct: 1,
    },
    {
      id: 'q5',
      question:
        'Ja no sākuma stāvokļa var iegūt tikai skaitļus, kas dalās ar $3$, bet mērķis nedalās ar $3$, tad:',
      options: [
        'Mērķis noteikti sasniedzams',
        'Mērķis nav sasniedzams ar atļautajām darbībām',
        'Vienmēr var panākt mērķi, ja mēģināt ilgi',
        'Invarianti neeksistē',
      ],
      correct: 1,
    },
    {
      id: 'q6',
      question:
        'Ja kāda īpašība piemīt sākumā, saglabājas un piemīt arī vēlamajam galarezultātam, vai no tā izriet, ka rezultāts **noteikti** sasniedzams?',
      options: [
        'Jā, tas pietiek',
        'Nē — var būt vajadzīgi papildu argumenti (ceļš uz mērķi nav garantēts)',
        'Tikai tad, ja ir $2$ gājieni',
        'Jā, ja izmantota paritāte',
      ],
      correct: 1,
    },
  ],
}
