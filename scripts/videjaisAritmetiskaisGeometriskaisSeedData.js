/** Firestore topic: videjais-aritmetiskais-geometriskais (AM-GM) */

export const videjaisAritmetiskaisGeometriskaisTopicData = {
  topicId: 'videjais-aritmetiskais-geometriskais',
  displayName: 'Nevienādība starp vidējo aritmētisko un vidējo ģeometrisko',
  slug: 'videjais-aritmetiskais-geometriskais',
  subject: 'algebra',
  order: 1,
  theory: {
    sections: [
      {
        title: 'Nevienādība starp vidējo aritmētisko un vidējo ģeometrisko (AM-GM)',
        content: `Iespējams, pati pazīstamākā un biežāk lietotā ir nevienādība starp vidējo aritmētisko un vidējo ģeometrisko. Bieži to saīsināti apzīmē kā $A \\geq G$ (angliski: AM-GM, arithmetic mean – geometric mean).

**Definīcija.** Par $n$ skaitļu $a_1, a_2, \\ldots, a_n$ vidējo aritmētisko sauc lielumu $\\dfrac{a_1 + a_2 + \\cdots + a_n}{n}$.

**Definīcija.** Par $n$ nenegatīvu skaitļu $a_1, a_2, \\ldots, a_n$ vidējo ģeometrisko sauc lielumu $\\sqrt[n]{a_1 \\cdot a_2 \\cdot \\ldots \\cdot a_n}$.

**Nevienādība starp vidējo aritmētisko un vidējo ģeometrisko.**
Ja $a_1, a_2, \\ldots, a_n$ ir nenegatīvi skaitļi, tad
$$\\frac{a_1 + a_2 + \\cdots + a_n}{n} \\geq \\sqrt[n]{a_1 \\cdot a_2 \\cdot \\ldots \\cdot a_n},$$
tas ir, skaitļu vidējais aritmētiskais ir lielāks vai vienāds ar šo skaitļu vidējo ģeometrisko, turklāt vienādība ir tad un tikai tad, ja visi skaitļi ir vienādi.

**Secinājumi:**
- Ja $n = 2$, tad nevienādība apgalvo, ka $\\dfrac{x + y}{2} \\geq \\sqrt{xy}$ nenegatīviem skaitļiem $x$ un $y$.
- Ja $n = 3$, tad nevienādība apgalvo, ka $\\dfrac{x + y + z}{3} \\geq \\sqrt[3]{xyz}$ nenegatīviem skaitļiem $x$, $y$ un $z$.
- Dažreiz novērtējumu ir ērti lietot formā $a_1 + a_2 + \\cdots + a_n \\geq n \\cdot \\sqrt[n]{a_1 \\cdot a_2 \\cdot \\ldots \\cdot a_n}$.
- Pozitīviem skaitļiem $x$ un $y$ izpildās nevienādība $\\dfrac{x}{y} + \\dfrac{y}{x} \\geq 2$, tas ir, skaitļa un tam apgrieztā skaitļa summa ir vismaz 2.
- Ja $x$ ir pozitīvs skaitlis, tad $x + \\dfrac{1}{x} \\geq 2$.

*Ievēro!* Uzdevuma, kurā jāatrod lielākā (mazākā) vērtība, atrisinājumam jāsastāv no divām daļām:
1. jāatrod vislielākā (vismazākā) vērtība un jāparāda piemērs, kurā izpildās visas prasības;
2. jāpierāda, ka lielāku (mazāku) vērtību iegūt nevar.`,
      },
    ],
  },
  solvedExamples: [
    {
      id: 'ex1',
      grades: [9, 10, 11, 12],
      problem: 'Pierādīt, ka $3a^8 + 5b^8 \\geq 8a^3b^5$, ja $a$ un $b$ – pozitīvi skaitļi!',
      solution:
        'Izmantojot nevienādību starp vidējo aritmētisko un vidējo ģeometrisko, iegūstam\n$$3a^8 + 5b^8 = a^8 + a^8 + a^8 + b^8 + b^8 + b^8 + b^8 + b^8 \\geq 8 \\cdot \\sqrt[8]{a^8 \\cdot a^8 \\cdot a^8 \\cdot b^8 \\cdot b^8 \\cdot b^8 \\cdot b^8 \\cdot b^8} = 8a^3b^5.$$\n$\\blacksquare$',
    },
    {
      id: 'ex2',
      grades: [9, 10, 11, 12],
      problem: 'Pierādīt, ka $a^{11} - 3a^5 + a^4 + 1 \\geq 0$, ja $a$ ir nenegatīvs skaitlis!',
      solution:
        'Pietiek pierādīt dotajai nevienādībai ekvivalentu nevienādību $a^{11} + a^4 + 1 \\geq 3a^5$.\n\nNo nevienādības starp vidējo aritmētisko un vidējo ģeometrisko izriet vajadzīgais:\n$$a^{11} + a^4 + 1 \\geq 3 \\cdot \\sqrt[3]{a^{11} \\cdot a^4 \\cdot 1} = 3 \\cdot \\sqrt[3]{a^{15}} = 3a^5.$$\n$\\blacksquare$',
    },
    {
      id: 'ex3',
      grades: [9, 10, 11, 12],
      problem: 'Pierādīt, ka $(1 + ab)(1 + ac)(1 + bc) \\geq 8abc$, ja $a$, $b$ un $c$ ir pozitīvi skaitļi!',
      solution:
        'No nevienādības starp vidējo aritmētisko un vidējo ģeometrisko izriet, ka\n$$1 + ab \\geq 2\\sqrt{ab}; \\quad 1 + ac \\geq 2\\sqrt{ac}; \\quad 1 + bc \\geq 2\\sqrt{bc}.$$\nSareizinot iegūtās nevienādības (to drīkst darīt, jo katras nevienādības abas puses ir pozitīvas), iegūstam\n$$(1 + ab)(1 + ac)(1 + bc) \\geq 2\\sqrt{ab} \\cdot 2\\sqrt{ac} \\cdot 2\\sqrt{bc} = 8\\sqrt{a^2b^2c^2} = 8abc.$$\n$\\blacksquare$',
    },
    {
      id: 'ex4',
      grades: [9, 10, 11, 12],
      problem:
        'Pierādīt, ka pozitīviem skaitļiem $a$, $b$ un $c$ izpildās nevienādība $\\dfrac{1}{a} + \\dfrac{1}{b} + \\dfrac{1}{c} \\geq \\dfrac{9}{a + b + c}$.',
      solution:
        'Reizinot abas nevienādības puses ar $a + b + c > 0$, iegūstam\n$$(a + b + c)\\left(\\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c}\\right) \\geq 9.$$\nNovērtēsim nevienādības kreisās puses izteiksmi:\n$$(a + b + c)\\left(\\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c}\\right) = 3 + \\left(\\frac{a}{b} + \\frac{b}{a}\\right) + \\left(\\frac{b}{c} + \\frac{c}{b}\\right) + \\left(\\frac{a}{c} + \\frac{c}{a}\\right) \\geq 3 + 2 + 2 + 2 = 9,$$\nkas arī bija jāpierāda. $\\blacksquare$',
    },
    {
      id: 'ex5',
      grades: [9, 10, 11, 12],
      problem: 'Pierādīt, ka visiem reāliem skaitļiem $x$ un $y$ pastāv nevienādība $x^2y^2(x^2 + y^2 - 3) \\geq -1$.',
      solution:
        'Ja $x = 0$ vai $y = 0$, tad $0 \\geq -1$ un nevienādība ir patiesa.\n\nJa $x \\neq 0$ un $y \\neq 0$, tad, dalot nevienādības abas puses ar $x^2y^2 > 0$, iegūstam\n$$x^2 + y^2 - 3 \\geq -\\frac{1}{x^2y^2};$$\n$$x^2 + y^2 + \\frac{1}{x^2y^2} \\geq 3.$$\nNevienādības kreisās puses izteiksmei lietojam nevienādību starp vidējo aritmētisko un vidējo ģeometrisko:\n$$x^2 + y^2 + \\frac{1}{x^2y^2} \\geq 3 \\cdot \\sqrt[3]{x^2 \\cdot y^2 \\cdot \\frac{1}{x^2y^2}} = 3.$$\n$\\blacksquare$',
    },
    {
      id: 'ex6',
      grades: [9, 10, 11, 12],
      problem: 'Pierādīt, ka $a - d + \\dfrac{1}{a-b} + \\dfrac{1}{b-c} + \\dfrac{1}{c-d} \\geq 6$, ja $a > b > c > d$.',
      solution:
        'Nevienādības kreisās puses izteiksmei pieskaitām un atņemam vienus un tos pašus saskaitāmos un pēc tam lietojam nevienādību starp vidējo aritmētisko un vidējo ģeometrisko:\n$$a - d + \\frac{1}{a-b} + \\frac{1}{b-c} + \\frac{1}{c-d}$$\n$$= (a-b) + (b-c) + (c-d) + \\frac{1}{a-b} + \\frac{1}{b-c} + \\frac{1}{c-d}$$\n$$= \\left[(a-b) + \\frac{1}{a-b}\\right] + \\left[(b-c) + \\frac{1}{b-c}\\right] + \\left[(c-d) + \\frac{1}{c-d}\\right] \\geq 2 + 2 + 2 = 6.$$\n$\\blacksquare$',
    },
    {
      id: 'ex7',
      grades: [9, 10, 11, 12],
      problem: 'Kādu mazāko vērtību var pieņemt izteiksme $x + \\dfrac{2017}{x}$, ja $x > 0$?',
      solution:
        'No nevienādības starp vidējo aritmētisko un vidējo ģeometrisko izriet, ka\n$$x + \\frac{2017}{x} \\geq 2\\sqrt{x \\cdot \\frac{2017}{x}} = 2\\sqrt{2017}.$$\nŠo vērtību izteiksme sasniedz, ja abi saskaitāmie ir vienādi, tas ir, $x = \\dfrac{2017}{x}$ jeb $x^2 = 2017$ un $x = \\sqrt{2017}$.\n\nTātad mazākā vērtība, ko var pieņemt dotā izteiksme, ir $2\\sqrt{2017}$, un tā tiek sasniegta pie $x = \\sqrt{2017}$.',
    },
  ],
}

export const videjaisAritmetiskaisGeometriskaisQuiz = [
  {
    id: 'q1',
    question: 'Ko izsaka nevienādība starp vidējo aritmētisko un vidējo ģeometrisko diviem nenegatīviem skaitļiem $x$ un $y$?',
    options: ['$x + y \\geq xy$', '$\\dfrac{x+y}{2} \\geq \\sqrt{xy}$', '$\\sqrt{xy} \\geq \\dfrac{x+y}{2}$', '$x^2 + y^2 \\geq 2xy$'],
    correct: 1,
  },
  {
    id: 'q2',
    question: 'Kad AM-GM nevienādībā iestājas vienādība?',
    options: ['Vienmēr', 'Nekad', 'Tad un tikai tad, ja visi skaitļi ir vienādi', 'Tad un tikai tad, ja visi skaitļi ir nulle'],
    correct: 2,
  },
  {
    id: 'q3',
    question: 'Kāda ir AM-GM nevienādība trim nenegatīviem skaitļiem $x$, $y$, $z$?',
    options: ['$\\dfrac{x+y+z}{3} \\geq \\sqrt[3]{xyz}$', '$\\dfrac{x+y+z}{3} \\leq \\sqrt[3]{xyz}$', '$x + y + z \\geq xyz$', '$\\sqrt[3]{xyz} \\geq x + y + z$'],
    correct: 0,
  },
  {
    id: 'q4',
    question: 'No AM-GM izriet, ka pozitīviem $x$ un $y$: $\\dfrac{x}{y} + \\dfrac{y}{x} \\geq$ ?',
    options: ['1', '2', '4', '$\\sqrt{xy}$'],
    correct: 1,
  },
  {
    id: 'q5',
    question: 'Ja $x > 0$, kāda ir mazākā iespējamā vērtība izteiksmei $x + \\dfrac{1}{x}$?',
    options: ['0', '1', '2', '$\\sqrt{2}$'],
    correct: 2,
  },
  {
    id: 'q6',
    question: 'Kādu mazāko vērtību var pieņemt izteiksme $x + \\dfrac{2017}{x}$ pie $x > 0$?',
    options: ['$\\sqrt{2017}$', '$2\\sqrt{2017}$', '$2017$', '$4034$'],
    correct: 1,
  },
  {
    id: 'q7',
    question: 'Pie kādas $x$ vērtības izteiksme $x + \\dfrac{2017}{x}$ sasniedz minimumu?',
    options: ['$x = 1$', '$x = 2017$', '$x = \\sqrt{2017}$', '$x = \\dfrac{1}{2017}$'],
    correct: 2,
  },
  {
    id: 'q8',
    question: 'Lai pierādītu $3a^8 + 5b^8 \\geq 8a^3b^5$, AM-GM lieto attiecībā uz cik saskaitāmajiem?',
    options: ['2', '4', '6', '8'],
    correct: 3,
  },
  {
    id: 'q9',
    question: 'Kādā veidā AM-GM izmanto nevienādības $(1+ab)(1+ac)(1+bc) \\geq 8abc$ pierādījumā?',
    options: [
      'Lieto tieši visiem sešiem reizinātājiem',
      'Lieto $1 + ab \\geq 2\\sqrt{ab}$ katram reizinātājam atsevišķi un tad reizina',
      'Lieto tikai trim skaitļiem',
      'Neizmanto AM-GM',
    ],
    correct: 1,
  },
  {
    id: 'q10',
    question:
      'Kāda metode tika lietota, lai pierādītu $a - d + \\frac{1}{a-b} + \\frac{1}{b-c} + \\frac{1}{c-d} \\geq 6$?',
    options: [
      'Katram pārim $(t, \\frac{1}{t})$ lietots $t + \\frac{1}{t} \\geq 2$, pēc tam saskaitīts',
      'Lietots Košī-Švarcs',
      'Atdalīti pilnie kvadrāti',
      'Indukcija',
    ],
    correct: 0,
  },
]