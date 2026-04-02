/** Extra MCQs (q7–q16) for the five new topics — merged without overwriting existing quiz docs. */
export const additionalNewTopicQuizQuestionsByTopic = {
  'induktivi-spriedumi': [
    {
      id: 'q7',
      question: 'Ko nozīmē indukcija matemātikā?',
      options: [
        'Loģisks slēdziens no vispārinājuma uz atsevišķiem gadījumiem',
        'Loģisks slēdziens, pārejot no atsevišķiem gadījumiem uz vispārinājumu',
        'Pierādījums ar pretrunu',
        'Skaitļu secīga pārbaude',
      ],
      correct: 1,
    },
    {
      id: 'q8',
      question: 'Kāds ir skaitļa $1^2 + 2^2 + 3^2 + \\cdots + 99^2$ pēdējais cipars?',
      options: ['$1$', '$5$', '$0$', '$9$'],
      correct: 2,
    },
    {
      id: 'q9',
      question:
        'Kādu mazāko pozitīvu vērtību var iegūt, pierakstot $+$ vai $-$ priekšā skaitļiem $1, 2, 3, \\ldots, 2018$?',
      options: ['$0$', '$1$', '$2$', '$3$'],
      correct: 1,
    },
    {
      id: 'q10',
      question:
        'Kāda ir $\\dfrac{1}{1 \\cdot 2} + \\dfrac{1}{2 \\cdot 3} + \\cdots + \\dfrac{1}{99 \\cdot 100}$?',
      options: ['$\\dfrac{98}{100}$', '$\\dfrac{99}{100}$', '$\\dfrac{1}{100}$', '$1$'],
      correct: 1,
    },
    {
      id: 'q11',
      question: 'Vai var atrast $2019$ dažādus naturālus skaitļus, kuru apgriezto lielumu summa ir $1$?',
      options: [
        'Nē, tas nav iespējams',
        'Jā, sākot no $\\frac{1}{2}+\\frac{1}{3}+\\frac{1}{6}=1$ un dalot',
        'Jā, bet tikai ar pirmskaitļiem',
        'Nav zināms',
      ],
      correct: 1,
    },
    {
      id: 'q12',
      question: 'Kāda ir lielākā summa, kuru nevar samaksāt ar $7$ un $13$ centu pastmarkām?',
      options: ['$69$', '$70$', '$71$', '$72$'],
      correct: 2,
    },
    {
      id: 'q13',
      question:
        'Kādas četras pēc kārtas sekojošas naturālas skaitļu grupas summa ir $0$, ja katram liek $+$ vai $-$?',
      options: [
        '$+n-(n+1)+(n+2)-(n+3)=0$',
        '$+n-(n+1)-(n+2)+(n+3)=0$',
        '$-n+(n+1)+(n+2)-(n+3)=0$',
        '$+n+(n+1)-(n+2)-(n+3)=0$',
      ],
      correct: 1,
    },
    {
      id: 'q14',
      question:
        'Izmantojot $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$, kā sauc šo pārveidojumu?',
      options: ['Dalīšana daļās', 'Teleskopiskā summa', 'Aritmētiskā progresija', 'Induktīvā pāreja'],
      correct: 1,
    },
    {
      id: 'q15',
      question: 'Vai var samaksāt $72$ centus ar $7$ un $13$ centu pastmarkām?',
      options: [
        'Nē',
        'Jā: $1 \\cdot 7 + 5 \\cdot 13 = 72$',
        'Jā: $2 \\cdot 7 + 4 \\cdot 13 = 66 \\neq 72$',
        'Nav iespējams noteikt',
      ],
      correct: 1,
    },
    {
      id: 'q16',
      question: 'Kādai problēmu kopai ir raksturīgs induktīvās spriešanas paņēmiens?',
      options: [
        'Tiek aplūkots viens specifisks gadījums',
        'Tiek aplūkota problēmu virkne, risinot citu pēc citas',
        'Tiek izmantota tikai algebra',
        'Tiek pieņemts pretējais un iegūta pretruna',
      ],
      correct: 1,
    },
  ],
  'matematiskas-indukcijas-metode': [
    {
      id: 'q7',
      question: 'Kādi ir matemātiskās indukcijas metodes trīs galvenie soļi?',
      options: [
        'Pieņēmums, aprēķins, secinājums',
        'Indukcijas bāze, induktīvais pieņēmums, induktīvā pāreja',
        'Definīcija, teorēma, pierādījums',
        'Pārbaude, vispārinājums, piemērs',
      ],
      correct: 1,
    },
    {
      id: 'q8',
      question:
        'Pierādot ar indukciju, ka $P(n)$ ir patiess visiem naturāliem $n$, ko pierāda induktīvajā pārejā?',
      options: [
        'Ka $P(1)$ ir patiess',
        'Ka $P(k)$ ir patiess',
        'Ka no $P(k)$ patiesuma izriet $P(k+1)$ patiesums',
        'Ka $P(n)$ ir patiess visiem pāra $n$',
      ],
      correct: 2,
    },
    {
      id: 'q9',
      question:
        'Kāda ir summa $1 \\cdot 4 + 2 \\cdot 7 + 3 \\cdot 10 + \\cdots + n(3n+1)$?',
      options: ['$n(n+1)$', '$n^2(n+1)$', '$n(n+1)^2$', '$n^2(n+1)^2$'],
      correct: 2,
    },
    {
      id: 'q10',
      question: 'Vai $1^3 + 2^3 + \\cdots + n^3 = (1 + 2 + \\cdots + n)^2$?',
      options: [
        'Nē, šī vienādība nav patiesa',
        'Jā, to var pierādīt ar matemātiskās indukcijas metodi',
        'Tikai ja $n$ ir pāra skaitlis',
        'Tikai ja $n \\leq 10$',
      ],
      correct: 1,
    },
    {
      id: 'q11',
      question: 'Vai $7^n + 3^{n+1}$ dalās ar $4$ visiem naturāliem $n$?',
      options: ['Nē', 'Jā, un to pierāda ar indukciju', 'Tikai ja $n$ ir nepāra', 'Tikai ja $n > 2$'],
      correct: 1,
    },
    {
      id: 'q12',
      question:
        'Kāda indukcijas bāze nepieciešama, ja induktīvajā pārejā no diviem iepriekšējiem locekļiem izriet nākamais?',
      options: ['Tikai $n = 1$', 'Tikai $n = 2$', 'Gan $n = 1$, gan $n = 2$', 'Gan $n = 1$, $n = 2$, gan $n = 3$'],
      correct: 2,
    },
    {
      id: 'q13',
      question:
        'Ja $x_{n+2} = 5x_{n+1} - 6x_n$, $x_1 = 1$, $x_2 = 5$, kāds ir vispārīgais loceklis?',
      options: ['$x_n = 2^n - 3^n$', '$x_n = 3^n - 2^n$', '$x_n = 5^n - 6^n$', '$x_n = n \\cdot 3^n$'],
      correct: 1,
    },
    {
      id: 'q14',
      question: 'Kādam mērķim klasiskā veidā lieto matemātiskās indukcijas metodi?',
      options: [
        'Tikai vienādību pierādīšanai',
        'Vienādību, dalāmības un rekurentu virkņu formulu pierādīšanai',
        'Tikai skaitļu teorijā',
        'Tikai ģeometrijā',
      ],
      correct: 1,
    },
    {
      id: 'q15',
      question: 'Ar kā aksiomu ir saistīta matemātiskās indukcijas metode?',
      options: [
        'Eiklīda ģeometrijas aksiomu',
        'Aritmētikas aksiomu',
        'Varbūtību teorijas aksiomu',
        'Loģikas aksiomu',
      ],
      correct: 1,
    },
    {
      id: 'q16',
      question:
        'Kāds ir $a_{50}$ virknei, kurai $a_1 + a_2 + \\cdots + a_n = n^2 a_n$ un $a_1 = 1000$?',
      options: ['$\\dfrac{20}{51}$', '$\\dfrac{40}{51}$', '$\\dfrac{2}{51}$', '$\\dfrac{1000}{51}$'],
      correct: 1,
    },
  ],
  'piemers-pretpiemers': [
    {
      id: 'q7',
      question:
        'Ja jautājums ir „Vai eksistē tāds skaitlis, kam...?" un atbilde ir JĀ, ko jādara risinājumā?',
      options: [
        'Jāpierāda ar vispārīgiem spriedumiem',
        'Pietiek parādīt vienu piemēru',
        'Jāpārbauda visi gadījumi',
        'Jāpierāda ar indukciju',
      ],
      correct: 1,
    },
    {
      id: 'q8',
      question:
        'Ja jautājums ir „Vai visiem naturāliem skaitļiem...?" un atbilde ir NĒ, ko jādara risinājumā?',
      options: [
        'Jāpierāda ar indukciju',
        'Pietiek parādīt vienu pretpiemēru',
        'Jāpārbauda vismaz $10$ gadījumi',
        'Jāpierāda ar vispārīgiem spriedumiem',
      ],
      correct: 1,
    },
    {
      id: 'q9',
      question: 'Vai skaitļa kvadrāts noteikti ir lielāks nekā pats skaitlis?',
      options: ['Jā, vienmēr', 'Nē, pretpiemērs ir $\\frac{1}{2}$', 'Nē, pretpiemērs ir $5$', 'Jā, ja skaitlis ir naturāls'],
      correct: 1,
    },
    {
      id: 'q10',
      question: 'Vai eksistē pirmskaitlis, kas dalās ar $3$?',
      options: [
        'Nē, pirmskaitļi nedalās ar $3$',
        'Jā, piemēram, $3$',
        'Jā, piemēram, $6$',
        'Nē, $3$ nav pirmskaitlis',
      ],
      correct: 1,
    },
    {
      id: 'q11',
      question: 'Vai visi skaitļi, kas dalās ar $6$, dalās arī ar $12$?',
      options: [
        'Jā, vienmēr',
        'Nē, pretpiemērs ir $6$',
        'Nē, pretpiemērs ir $24$',
        'Jā, jo $12 = 2 \\cdot 6$',
      ],
      correct: 1,
    },
    {
      id: 'q12',
      question: 'Ko sauc par pretpiemēru?',
      options: [
        'Piemēru, kas pierāda apgalvojumu',
        'Piemēru, kas parāda, ka vispārīgs apgalvojums nav patiess',
        'Kļūdainu risinājumu',
        'Apgalvojumu, kas ir pretrunīgs',
      ],
      correct: 1,
    },
    {
      id: 'q13',
      question: 'Vai divu skaitļu summa noteikti ir lielāka nekā katrs no saskaitāmajiem?',
      options: [
        'Jā, summa vienmēr ir lielāka',
        'Nē, pretpiemērs ir $0 + 5 = 5$',
        'Nē, pretpiemērs ir $3 + 2 = 5$',
        'Jā, ja abi saskaitāmie ir pozitīvi',
      ],
      correct: 1,
    },
    {
      id: 'q14',
      question:
        'Ja jautājums ir „Kāds ir lielākais...?", kas obligāti jāiekļauj risinājumā?',
      options: [
        'Tikai jāatrod lielākā vērtība',
        'Jāatrod lielākā vērtība un jāparāda piemērs, un jāpierāda, ka lielāka nav iespējama',
        'Pietiek ar vienu piemēru',
        'Jāpārbauda visi gadījumi',
      ],
      correct: 1,
    },
    {
      id: 'q15',
      question: 'Vai visi pirmskaitļi ir nepāra?',
      options: [
        'Jā, pēc definīcijas',
        'Nē, pretpiemērs ir $2$',
        'Nē, pretpiemērs ir $4$',
        'Jā, jo pirmskaitļi nedalās ar $2$',
      ],
      correct: 1,
    },
    {
      id: 'q16',
      question: 'Vai $9 \\cdot x$ un $11 \\cdot x$ kur $x$ ir naturāls skaitlis vienmēr ir dažādi?',
      options: [
        'Jā, vienmēr',
        'Nē, ja $x = 0$',
        'Nē, jo $0$ nav naturāls skaitlis, bet jā visiem naturāliem $x$',
        'Nav iespējams noteikt',
      ],
      correct: 2,
    },
  ],
  polinomi: [
    {
      id: 'q7',
      question: 'Ko sauc par polinoma sakni?',
      options: [
        'Polinoma augstākās pakāpes koeficientu',
        'Mainīgā vērtību, ar kuru polinoma vērtība ir nulle',
        'Polinoma brīvo locekli',
        'Polinoma pakāpi',
      ],
      correct: 1,
    },
    {
      id: 'q8',
      question:
        'Ja $\\frac{p}{q}$ (nesaīsināma daļa) ir polinoma $a_n x^n + \\cdots + a_0$ sakne, tad...',
      options: [
        '$p$ dalās ar $a_n$ un $q$ dalās ar $a_0$',
        '$q$ dalās ar $a_n$ un $p$ dalās ar $a_0$',
        '$p$ un $q$ abi dalās ar $a_n$',
        '$p$ un $q$ abi dalās ar $a_0$',
      ],
      correct: 1,
    },
    {
      id: 'q9',
      question:
        'Ja polinoma koeficients pie augstākās pakāpes ir $1$, tad visas racionālās saknes ir...',
      options: [
        'Brīvā locekļa kvadrātsaknes',
        'Veseli skaitļi, kas ir brīvā locekļa dalītāji',
        'Tikai $\\pm 1$',
        'Noteikti pozitīvi skaitļi',
      ],
      correct: 1,
    },
    {
      id: 'q10',
      question: 'Kādas varētu būt polinoma $x^3 - 5x + 4$ veselās saknes?',
      options: ['$\\pm 1, \\pm 2, \\pm 4$', '$\\pm 1, \\pm 3, \\pm 5$', '$\\pm 2, \\pm 4, \\pm 8$', '$\\pm 1, \\pm 4, \\pm 8$'],
      correct: 0,
    },
    {
      id: 'q11',
      question: 'Kāda ir polinoma $x^3 - 5x + 4$ vienīgā vesela sakne?',
      options: ['$x = -1$', '$x = 2$', '$x = 1$', '$x = 4$'],
      correct: 2,
    },
    {
      id: 'q12',
      question: 'Ja $x = a$ ir polinoma $P(x)$ sakne, tad...',
      options: ['$P(x) = (x + a) \\cdot Q(x)$', '$P(x) = (x - a) \\cdot Q(x)$', '$P(x) = a \\cdot Q(x)$', '$P(x) = (x - a) + Q(x)$'],
      correct: 1,
    },
    {
      id: 'q13',
      question: 'Kādas ir polinoma $2x^3 + x^2 - 13x + 6$ trīs racionālās saknes?',
      options: [
        '$x = 1, x = -2, x = 3$',
        '$x = 2, x = -3, x = \\frac{1}{2}$',
        '$x = -1, x = 3, x = \\frac{1}{2}$',
        '$x = 2, x = 3, x = -\\frac{1}{2}$',
      ],
      correct: 1,
    },
    {
      id: 'q14',
      question: 'Kāds ir rezultāts, dalot $6x^3 + x^2 + 7x + 6$ ar $2x^2 - x + 3$?',
      options: ['$3x - 2$', '$3x + 2$', '$2x + 3$', '$x + 3$'],
      correct: 1,
    },
    {
      id: 'q15',
      question: 'Kādas ir vienādojuma $x^3 - 3x + 2 = 0$ saknes?',
      options: [
        '$x = 1, x = 2, x = -3$',
        '$x_1 = x_2 = 1, x_3 = -2$',
        '$x = -1, x = 2, x = 1$',
        '$x_1 = x_2 = -1, x_3 = 2$',
      ],
      correct: 1,
    },
    {
      id: 'q16',
      question: 'Kādas ir vienādojuma $x^4 - 3x^3 + x^2 + 3x - 2 = 0$ saknes?',
      options: [
        '$x = 1, x = -1, x = 2, x = -2$',
        '$x_1 = x_2 = 1, x_3 = 2, x_4 = -1$',
        '$x = 1, x = 2, x = 3, x = -1$',
        '$x_1 = x_2 = -1, x_3 = 2, x_4 = 1$',
      ],
      correct: 1,
    },
  ],
  'invariantu-metode': [
    {
      id: 'q7',
      question: 'Kas ir invariants?',
      options: [
        'Lielums, kas mainās katrā gājienā',
        'Lielums, kas paliek nemainīgs kādā norisē',
        'Pirmais loceklis virknē',
        'Skaitlis, kas dalās ar visiem pirmskaitļiem',
      ],
      correct: 1,
    },
    {
      id: 'q8',
      question: 'Kādos uzdevumos visbiežāk lieto invariantu metodi?',
      options: [
        'Kad jāatrod maksimālā vērtība',
        'Kad jāpierāda, ka kādu rezultātu NAV iespējams iegūt',
        'Kad jārisina vienādojumu sistēma',
        'Kad jāpierāda vienādība ar indukciju',
      ],
      correct: 1,
    },
    {
      id: 'q9',
      question:
        'Sākumā bija $10$ papīra gabali. Tos griež $5$ vai $7$ daļās. Vai var iegūt $999$ gabalus?',
      options: [
        'Jā, tas ir iespējams',
        'Nē, jo kopējais skaits vienmēr ir pāra skaitlis',
        'Nē, jo kopējais skaits vienmēr dalās ar $5$',
        'Nav iespējams noteikt',
      ],
      correct: 1,
    },
    {
      id: 'q10',
      question:
        'Uz tāfeles ir $1, 2, \\ldots, 10$. Katrā gājienā diviem skaitļiem pieskaita $1$. Vai var iegūt $10$ vienādus skaitļus?',
      options: [
        'Jā, tas ir iespējams',
        'Nē, jo skaitļu summa vienmēr ir pāra',
        'Nē, jo skaitļu summa vienmēr ir nepāra',
        'Nē, jo skaitļu summa dalās ar $10$',
      ],
      correct: 2,
    },
    {
      id: 'q11',
      question:
        'Mājā ir $2016$ spoki. Noķer $33$ uzrodas $48$, vai noķer $17$ uzrodas $14$. Vai var palikt $1$ spoks?',
      options: [
        'Jā',
        'Nē, jo spoku skaits vienmēr ir pāra',
        'Nē, jo spoku skaits vienmēr dalās ar $3$',
        'Nē, jo spoku skaits vienmēr dalās ar $6$',
      ],
      correct: 2,
    },
    {
      id: 'q12',
      question: 'Kādi var būt invarianti uzdevumos?',
      options: [
        'Tikai paritāte',
        'Tikai dalāmība ar $3$',
        'Summa, paritāte, dalāmība, periodiskums un citi',
        'Tikai skaitļu summa',
      ],
      correct: 2,
    },
    {
      id: 'q13',
      question:
        'No skaitļa $24$ ar operācijām (reizināt ar $2$, dalīt ar $2$, pierakstīt galā to pašu) var iegūt $2015$?',
      options: [
        'Jā',
        'Nē, jo $24$ dalās ar $3$, bet $2015$ nedalās',
        'Nē, jo $24$ ir pāra, bet $2015$ ir nepāra',
        'Nav iespējams noteikt',
      ],
      correct: 1,
    },
    {
      id: 'q14',
      question:
        'Bezgalīgā virknē, kur katrs loceklis ir divu iepriekšējo summas pēdējais cipars (sākot $1, 2, \\ldots$), kāda ir paritāšu grupa, kas periodiski atkārtojas?',
      options: ['$(p, n, p)$', '$(n, n, p)$', '$(n, p, n)$', '$(p, p, n)$'],
      correct: 2,
    },
    {
      id: 'q15',
      question:
        'Vai tas, ka invariants piemīt sākotnējam un gala lielumam, pierāda, ka galarezultāts ir sasniedzams?',
      options: [
        'Jā, tas ir pietiekams nosacījums',
        'Nē, tas vien nepierāda sasniedzamību',
        'Jā, ja invariants ir paritāte',
        'Nē, tikai ja invariants ir dalāmība',
      ],
      correct: 1,
    },
    {
      id: 'q16',
      question:
        'Rindā $2015$ vieninieki. Atļauts nodzēst $a$ un $b$ un uzrakstīt $\\frac{a+b}{4}$. Vai var iegūt skaitli, kas mazāks par $0.0001$?',
      options: [
        'Jā, tas ir iespējams',
        'Nē, jo apgriezto lielumu summa nepalielinās un sākumā ir $2015$',
        'Nē, jo visi skaitļi paliek veseli',
        'Nē, jo skaitļu skaits samazinās',
      ],
      correct: 1,
    },
  ],
}
