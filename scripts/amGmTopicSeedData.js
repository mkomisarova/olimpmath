/** Firestore topic: am-gm */

export const amGmTopicData = {
  displayName: 'Aritmētiski ģeometriskā nevienādība',
  slug: 'am-gm',
  subject: 'algebra',
  order: 5,
  theory: {
    sections: [
      {
        title: 'AM-GM nevienādība',
        content:
          '**Aritmētiski ģeometriskā nevienādība (AM-GM)** apgalvo, ka divu nenegatīvu reālu skaitļu $a$ un $b$ aritmētiskais vidējais nav mazāks par to ģeometrisko vidējo:\n$$\\frac{a + b}{2} \\geq \\sqrt{ab}$$\nkur vienādība izpildās tad un tikai tad, ja $a = b$.\n\n**Vispārīgā forma** $n$ skaitļiem $a_1, a_2, \\ldots, a_n \\geq 0$:\n$$\\frac{a_1 + a_2 + \\cdots + a_n}{n} \\geq \\sqrt[n]{a_1 \\cdot a_2 \\cdots a_n}$$\nvienādība izpildās tad un tikai tad, ja $a_1 = a_2 = \\cdots = a_n$.',
      },
      {
        title: 'AM-GM pierādījums diviem skaitļiem',
        content:
          'Pierādījums diviem skaitļiem $a, b \\geq 0$:\n\nTā kā $(\\sqrt{a} - \\sqrt{b})^2 \\geq 0$, tad\n$$a - 2\\sqrt{ab} + b \\geq 0$$\n$$a + b \\geq 2\\sqrt{ab}$$\n$$\\frac{a+b}{2} \\geq \\sqrt{ab}.$$\nVienādība izpildās tad un tikai tad, ja $\\sqrt{a} = \\sqrt{b}$, tas ir, $a = b$.',
      },
      {
        title: 'AM-GM pielietojumi',
        content:
          'AM-GM nevienādību bieži izmanto šādos gadījumos:\n\n**1. Izteiksmes minimuma/maksimuma atrašana.** Ja zināma reizinājuma vai summas vērtība, var atrast otras izteiksmes ekstrēmo vērtību.\n\n**2. Nevienādību pierādīšana.** Sarežģītas nevienādības reducē uz AM-GM.\n\n**3. Noderīgi speciālie gadījumi:**\n- $a + \\dfrac{1}{a} \\geq 2$ visiem $a > 0$ (vienādība pie $a = 1$)\n- $a + b \\geq 2\\sqrt{ab}$ visiem $a, b \\geq 0$\n- $\\dfrac{a}{b} + \\dfrac{b}{a} \\geq 2$ visiem $a, b > 0$\n\n**Stratēģija:** Lai lietotu AM-GM, cenšas uzrakstīt izteiksmi kā summu vai reizinājumu, kur zināma viena no tām un jānovērtē otra.',
      },
    ],
  },
  solvedExamples: [
    {
      id: 'ex1',
      problem: 'Pierādīt, ka visiem $a, b > 0$ izpildās $a + b \\geq 2\\sqrt{ab}$.',
      solution:
        'Tā kā $(\\sqrt{a} - \\sqrt{b})^2 \\geq 0$, tad\n$$a - 2\\sqrt{ab} + b \\geq 0,$$\no kā izriet $a + b \\geq 2\\sqrt{ab}$. Vienādība izpildās tad un tikai tad, ja $\\sqrt{a} = \\sqrt{b}$, tas ir, $a = b$. $\\blacksquare$',
    },
    {
      id: 'ex2',
      problem: 'Pierādīt, ka visiem $a > 0$ izpildās $a + \\dfrac{1}{a} \\geq 2$.',
      solution:
        'Pēc AM-GM nevienādības\n$$a + \\frac{1}{a} \\geq 2\\sqrt{a \\cdot \\frac{1}{a}} = 2\\sqrt{1} = 2.$$\nVienādība izpildās tad un tikai tad, ja $a = \\dfrac{1}{a}$, tas ir, $a = 1$. $\\blacksquare$',
    },
    {
      id: 'ex3',
      problem: 'Dots, ka $x + y = 1$, kur $x, y > 0$. Atrast izteiksmes $xy$ lielāko iespējamo vērtību.',
      solution:
        'Pēc AM-GM nevienādības\n$$\\frac{x + y}{2} \\geq \\sqrt{xy},$$\ntātad $\\sqrt{xy} \\leq \\dfrac{x+y}{2} = \\dfrac{1}{2}$, no kā $xy \\leq \\dfrac{1}{4}$.\n\nVienādība izpildās tad un tikai tad, ja $x = y$, tas ir, $x = y = \\dfrac{1}{2}$. Tātad lielākā iespējamā $xy$ vērtība ir $\\mathbf{\\dfrac{1}{4}}$.',
    },
    {
      id: 'ex4',
      problem: 'Pierādīt, ka visiem $a, b, c > 0$ izpildās $\\dfrac{a}{b} + \\dfrac{b}{c} + \\dfrac{c}{a} \\geq 3$.',
      solution:
        'Pēc AM-GM nevienādības trim skaitļiem\n$$\\frac{\\dfrac{a}{b} + \\dfrac{b}{c} + \\dfrac{c}{a}}{3} \\geq \\sqrt[3]{\\frac{a}{b} \\cdot \\frac{b}{c} \\cdot \\frac{c}{a}} = \\sqrt[3]{1} = 1,$$\ntātad $\\dfrac{a}{b} + \\dfrac{b}{c} + \\dfrac{c}{a} \\geq 3$.\n\nVienādība izpildās tad un tikai tad, ja $\\dfrac{a}{b} = \\dfrac{b}{c} = \\dfrac{c}{a}$, tas ir, $a = b = c$. $\\blacksquare$',
    },
    {
      id: 'ex5',
      problem: 'Dots, ka $a, b, c > 0$ un $abc = 1$. Pierādīt, ka $a + b + c \\geq 3$.',
      solution:
        'Pēc AM-GM nevienādības\n$$\\frac{a + b + c}{3} \\geq \\sqrt[3]{abc} = \\sqrt[3]{1} = 1,$$\ntātad $a + b + c \\geq 3$.\n\nVienādība izpildās tad un tikai tad, ja $a = b = c = 1$. $\\blacksquare$',
    },
    {
      id: 'ex6',
      problem: 'Atrast izteiksmes $x^2 + \\dfrac{4}{x^2}$ mazāko vērtību, ja $x \\neq 0$.',
      solution:
        'Apzīmējam $a = x^2$ un $b = \\dfrac{4}{x^2}$. Tad $a, b > 0$ un pēc AM-GM\n$$x^2 + \\frac{4}{x^2} = a + b \\geq 2\\sqrt{ab} = 2\\sqrt{x^2 \\cdot \\frac{4}{x^2}} = 2\\sqrt{4} = 4.$$\nVienādība izpildās tad un tikai tad, ja $x^2 = \\dfrac{4}{x^2}$, tas ir, $x^4 = 4$, $x = \\pm\\sqrt{2}$.\n\nTātad mazākā vērtība ir $\\mathbf{4}$.',
    },
    {
      id: 'ex7',
      problem: 'Pierādīt, ka visiem reāliem $x$ izpildās $e^x \\geq 1 + x$.',
      solution:
        'Ievērojam, ka funkcija $f(x) = e^x - 1 - x$ ir nepārtraukta un diferencējama. $f\'(x) = e^x - 1 = 0$ tad un tikai tad, ja $x = 0$. Tā kā $f\'\'(0) = e^0 = 1 > 0$, tad $x = 0$ ir minimums. $f(0) = e^0 - 1 - 0 = 0$. Tātad $f(x) \\geq 0$ visiem $x$, tas ir, $e^x \\geq 1 + x$. $\\blacksquare$\n\n**Piezīme.** Šo nevienādību var pierādīt arī, izmantojot AM-GM: $e^x \\cdot 1 \\geq \\left(\\dfrac{e^x + 1}{2}\\right)^2$... (alternatīvs ceļš).',
    },
  ],
}

export const amGmQuiz = [
  {
    id: 'q1',
    question: 'Ko apgalvo AM-GM nevienādība diviem nenegatīviem skaitļiem $a$ un $b$?',
    options: [
      '$\\frac{a+b}{2} \\leq \\sqrt{ab}$',
      '$\\frac{a+b}{2} \\geq \\sqrt{ab}$',
      '$\\frac{a+b}{2} = \\sqrt{ab}$',
      '$a + b \\geq ab$',
    ],
    correct: 1,
  },
  {
    id: 'q2',
    question: 'Kad AM-GM nevienādībā $\\frac{a+b}{2} \\geq \\sqrt{ab}$ iestājas vienādība?',
    options: ['Vienmēr', 'Ja $a + b = 1$', 'Ja $a = b$', 'Ja $ab = 1$'],
    correct: 2,
  },
  {
    id: 'q3',
    question: 'Kāda ir izteiksmes $a + \\frac{1}{a}$ mazākā vērtība, ja $a > 0$?',
    options: ['$1$', '$\\frac{1}{2}$', '$2$', '$4$'],
    correct: 2,
  },
  {
    id: 'q4',
    question: 'Dots $x + y = 10$, $x, y > 0$. Kāda ir lielākā iespējamā $xy$ vērtība?',
    options: ['$20$', '$25$', '$50$', '$100$'],
    correct: 1,
  },
  {
    id: 'q5',
    question: 'Kā AM-GM nevienādību lieto, lai atrastu izteiksmes minimumu?',
    options: [
      'Zināma summa → novērtē reizinājumu no augšas',
      'Zināms reizinājums → novērtē summu no apakšas',
      'Abi iepriekšējie',
      'Tikai veseliem skaitļiem',
    ],
    correct: 2,
  },
  {
    id: 'q6',
    question: 'Pierādot $\\frac{a}{b} + \\frac{b}{a} \\geq 2$, kāda metode tiek izmantota?',
    options: ['Pilno kvadrātu atdalīšana', 'AM-GM nevienādība', 'Indukcija', 'Pretrunas pierādījums'],
    correct: 1,
  },
  {
    id: 'q7',
    question: 'Dots $abc = 8$, $a,b,c > 0$. Kāda ir mazākā $a+b+c$ vērtība?',
    options: ['$3$', '$4$', '$6$', '$8$'],
    correct: 2,
  },
  {
    id: 'q8',
    question: 'Kāda ir AM-GM nevienādības vispārīgā forma $n$ skaitļiem?',
    options: [
      '$\\frac{a_1+\\cdots+a_n}{n} \\geq \\sqrt[n]{a_1 \\cdots a_n}$',
      '$\\frac{a_1+\\cdots+a_n}{n} \\leq \\sqrt[n]{a_1 \\cdots a_n}$',
      '$a_1+\\cdots+a_n \\geq n$',
      '$a_1 \\cdots a_n \\geq n$',
    ],
    correct: 0,
  },
  {
    id: 'q9',
    question: 'Kāda ir izteiksmes $x^2 + \\frac{4}{x^2}$ mazākā vērtība?',
    options: ['$2$', '$4$', '$6$', '$8$'],
    correct: 1,
  },
  {
    id: 'q10',
    question: 'Ja $a + b + c = 9$ un $a,b,c > 0$, kāda ir lielākā $abc$ vērtība?',
    options: ['$9$', '$18$', '$27$', '$81$'],
    correct: 2,
  },
]
