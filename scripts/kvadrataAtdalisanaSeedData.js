/** Firestore topic: kvadrata-atdalisana (completing the square) */

export const kvadrataAtdalisanaTopicData = {
  topicId: 'kvadrata-atdalisana',
  displayName: 'Nevienādību pierādīšana — pilno kvadrātu atdalīšana',
  slug: 'kvadrata-atdalisana',
  subject: 'algebra',
  order: 1,
  theory: {
    sections: [
      {
        title: 'Pilno kvadrātu atdalīšanas metode',
        content: `Viena no pirmajām metodēm nevienādību pierādīšanā ir **pilno kvadrātu atdalīšana**. Tā balstās uz faktu, ka jebkura reāla skaitļa kvadrāts ir nenegatīvs:
$$a^2 \\geq 0 \\quad \\text{visiem reāliem } a,$$
turklāt $a^2 = 0$ tad un tikai tad, ja $a = 0$.

Bieži lietotās identitātes:
- $(a + b)^2 = a^2 + 2ab + b^2 \\geq 0$
- $(a - b)^2 = a^2 - 2ab + b^2 \\geq 0$, no kā izriet $a^2 + b^2 \\geq 2ab$
- $(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ac \\geq 0$

Pierādot nevienādību ar šo metodi, mērķis ir pārveidot pierādāmo izteiksmi tā, lai tā būtu pilno kvadrātu summa (vai pozitīvas konstantes reizinājums ar pilno kvadrātu summu), no kā uzreiz izriet, ka tā ir nenegatīva.

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
      problem: 'Pierādīt nevienādību $x^2 + 8x + y^2 - 2y + 17 \\geq 0$.',
      solution:
        'Veicam ekvivalentus pārveidojumus:\n$$x^2 + 8x + 16 + y^2 - 2y + 1 \\geq 0$$\n$$(x^2 + 2 \\cdot 4x + 4^2) + (y^2 - 2y \\cdot 1 + 1^2) \\geq 0$$\n$$(x + 4)^2 + (y - 1)^2 \\geq 0.$$\n\nTā kā skaitļa kvadrāts ir nenegatīvs, tad pēdējās nevienādības kreisajā pusē ir divu nenegatīvu skaitļu summa, kas arī ir nenegatīvs skaitlis. Tātad pēdējā nevienādība ir patiesa. Tā kā tika veikti ekvivalenti pārveidojumi, tad arī dotā nevienādība ir patiesa visiem reāliem skaitļiem $x$ un $y$.',
    },
    {
      id: 'ex2',
      grades: [9, 10, 11, 12],
      problem: 'Pierādīt nevienādību $x^2 - xy + y^2 \\geq 0$.',
      solution:
        '**1. atrisinājums.** Reizinām nevienādības abas puses ar $2$ un veicam ekvivalentus pārveidojumus:\n$$2x^2 - 2xy + 2y^2 \\geq 0$$\n$$(x^2 - 2xy + y^2) + x^2 + y^2 \\geq 0$$\n$$(x - y)^2 + x^2 + y^2 \\geq 0.$$\n\nTā kā skaitļa kvadrāts ir nenegatīvs, tad pēdējās nevienādības kreisajā pusē ir trīs nenegatīvu skaitļu summa, kas arī ir nenegatīvs skaitlis. Tātad pēdējā nevienādība ir patiesa. Tā kā tika veikti ekvivalenti pārveidojumi, tad arī dotā nevienādība ir patiesa visiem reāliem skaitļiem $x$ un $y$.\n\n**2. atrisinājums.** Veicam ekvivalentus pārveidojumus:\n$$x^2 - xy + y^2 = \\left(x^2 - 2 \\cdot x \\cdot \\frac{1}{2}y + \\frac{1}{4}y^2\\right) + \\frac{3}{4}y^2 = \\left(x - \\frac{1}{2}y\\right)^2 + \\frac{3}{4}y^2.$$\n\nTā kā skaitļa kvadrāts ir nenegatīvs, tad $\\left(x - \\dfrac{1}{2}y\\right)^2 \\geq 0$ un $\\dfrac{3}{4}y^2 \\geq 0$. Divu nenegatīvu skaitļu summa ir nenegatīva, tāpēc $\\left(x - \\dfrac{1}{2}y\\right)^2 + \\dfrac{3}{4}y^2 \\geq 0$. Tā kā tika veikti ekvivalenti pārveidojumi, tad arī dotā nevienādība ir patiesa visiem reāliem skaitļiem $x$ un $y$.',
    },
    {
      id: 'ex3',
      grades: [9, 10, 11, 12],
      problem:
        'Pierādīt, ka pozitīviem skaitļiem $a$, $b$ un $c$ izpildās nevienādība $a + \\dfrac{bc}{a} \\geq \\dfrac{4bc}{b+c}$.',
      solution:
        'Abas nevienādības puses reizinām ar pozitīvu izteiksmi $a(b+c)$:\n$$a^2(b+c) + bc(b+c) \\geq 4abc$$\n$$a^2b + a^2c + b^2c + bc^2 - 4abc \\geq 0$$\n$$a^2b - 2abc + bc^2 + a^2c - 2abc + b^2c \\geq 0$$\n$$b(a^2 - 2ac + c^2) + c(a^2 - 2ab + b^2) \\geq 0$$\n$$b(a-c)^2 + c(a-b)^2 \\geq 0.$$\n\nTā kā skaitļa kvadrāts ir nenegatīvs un $b > 0$, $c > 0$, tad $b(a-c)^2 \\geq 0$ un $c(a-b)^2 \\geq 0$. Divu nenegatīvu skaitļu summa ir nenegatīva, tāpēc pēdējā iegūtā nevienādība ir patiesa. Tā kā tika veikti ekvivalenti pārveidojumi, tad arī dotā nevienādība ir patiesa visiem pozitīviem skaitļiem $a$, $b$ un $c$.',
    },
    {
      id: 'ex4',
      grades: [9, 10, 11, 12],
      problem: 'Pierādīt, ka $2x^4 + 1 \\geq 2x^3 + x^2$.',
      solution:
        'Veicam ekvivalentus pārveidojumus:\n$$2x^4 + 1 - 2x^3 - x^2 \\geq 0$$\n$$x^4 - 2x^3 + x^2 + x^4 - 2x^2 + 1 \\geq 0$$\n$$x^2(x^2 - 2x + 1) + (x^2 - 1)^2 \\geq 0$$\n$$x^2(x-1)^2 + (x^2 - 1)^2 \\geq 0.$$\n\nTā kā skaitļa kvadrāts ir nenegatīvs, tad $x^2(x-1)^2 \\geq 0$ un $(x^2-1)^2 \\geq 0$. Divu nenegatīvu skaitļu summa ir nenegatīva, tāpēc pēdējā iegūtā nevienādība ir patiesa. Tā kā tika veikti ekvivalenti pārveidojumi, tad arī dotā nevienādība ir patiesa visiem reāliem skaitļiem $x$.',
    },
    {
      id: 'ex5',
      grades: [9, 10, 11, 12],
      problem: 'Pierādīt, ka $x^2 + 2xy + 3y^2 + 2x + 6y + 3 \\geq 0$.',
      solution:
        'Veicam ekvivalentus pārveidojumus:\n$$x^2 + 2xy + y^2 + 2(x+y) + 2y^2 + 4y + 3 \\geq 0$$\n$$\\left((x+y)^2 + 2(x+y) + 1\\right) + 2(y^2 + 2y + 1) \\geq 0$$\n$$(x + y + 1)^2 + 2(y+1)^2 \\geq 0.$$\n\nTā kā skaitļa kvadrāts ir nenegatīvs, tad $(x+y+1)^2 \\geq 0$ un $2(y+1)^2 \\geq 0$. Divu nenegatīvu skaitļu summa ir nenegatīva, tāpēc pēdējā iegūtā nevienādība ir patiesa. Tā kā tika veikti ekvivalenti pārveidojumi, tad arī dotā nevienādība ir patiesa visiem reāliem skaitļiem $x$ un $y$.',
    },
  ],
}

/** Example ids moved off nevienadibu-pieradisana into kvadrata-atdalisana */
export const kvadrataMovedExampleIds = new Set(['ex1', 'ex2', 'ex3', 'ex4', 'ex5'])

export const pilnoKvadratuSectionTitle = 'Pilno kvadrātu atdalīšana'
