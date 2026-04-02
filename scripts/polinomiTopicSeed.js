/** Firestore topic document: polinomi */
export default {
  displayName: 'Polinoma sakņu noteikšana',
  slug: 'polinomi',
  subject: 'algebra',
  order: 3,
  theory: {
    sections: [
      {
        title: 'Polinomi un to saknes',
        content:
          'Par **$n$-tās pakāpes polinomu** sauc algebrisku izteiksmi $a_n x^n + a_{n-1}x^{n-1} + \\cdots + a_1 x + a_0$, kur $x$ ir mainīgais, $n$ ir vesels nenegatīvs skaitlis un $a_n, \\ldots, a_1, a_0$ — patvaļīgi reāli skaitļi ($a_n \\neq 0$).\n\nJa koeficienti $a_n, \\ldots, a_1, a_0$ ir veseli skaitļi, tad polinomu sauc par **polinomu ar veseliem koeficientiem**.\n\nMainīgā vērtību, ar kuru polinoma vērtība ir nulle, sauc par **polinoma sakni**.',
      },
      {
        title: 'Polinoma racionālās saknes',
        content:
          'Dažreiz nav nepieciešams atrast visas polinoma saknes, bet ir jāatrod tikai viena vai dažas no tām. Nākamo teorēmu var izmantot, lai noskaidrotu polinoma racionālās saknes.\n\n**Teorēma.** Ja daļa $\\dfrac{p}{q}$ ($p$ un $q$ ir veseli skaitļi) nav saīsināma un tā ir sakne polinomam $P(x) = a_n x^n + a_{n-1}x^{n-1} + \\cdots + a_1 x + a_0$ ar veseliem koeficientiem ($a_n \\neq 0$), tad $q$ ir skaitļa $a_n$ dalītājs un $p$ ir skaitļa $a_0$ dalītājs.\n\nŠī teorēma ļauj atrast polinoma racionālās saknes ar pārbaudes palīdzību. Racionālu skaitļu vispār ir bezgalīgi daudz, bet teorēma ļauj no tiem atlasīt galīgu skaitu „kandidātu", kurus pēc tam pārbauda, ievietojot polinomā.\n\n**Secinājums.** Ja polinoma visi koeficienti ir veseli skaitļi un koeficients pie locekļa ar augstāko pakāpi ir $1$, tad šī polinoma visas racionālās saknes ir veseli skaitļi, kas ir brīvā locekļa dalītāji.',
      },
      {
        title: 'Polinomu dalīšana',
        content:
          'Lai uzsvērtu, kāda ir polinoma pakāpe, lieto pierakstu $P_n(x)$, kur apakšējais indekss apzīmē polinoma pakāpi.\n\nPar divu polinomu $Q_m(x)$ un $P_n(x)$ **dalījumu** sauc tādu polinomu $S_k(x)$, kuru reizinot ar $P_n(x)$ iegūst polinomu $Q_m(x)$, tas ir, $Q_m(x) : P_n(x) = S_k(x)$, ja $P_n(x) \\cdot S_k(x) = Q_m(x)$.\n\nDalīt polinomu $Q_m(x)$ ar $P_n(x)$ var tikai tad, ja $m \\geq n$, turklāt $k = m - n$.\n\nJa $m \\geq n$ un, polinomus dalot, iegūst polinomu $S_k(x)$ un dalīšanas atlikumu $R(x)$, tad dalīšanas rezultātu var izteikt šādi:\n$$Q_m(x) = P_n(x) \\cdot S_k(x) + R(x).$$\n\nPolinoma kādas saknes uzminēšana ļoti noder augstāku pakāpju vienādojumu risināšanā, jo ļauj vienādojuma izteiksmi sadalīt reizinātājos. Ja $x = a$ ir polinoma $P(x)$ sakne, tad polinomu var pārveidot formā $P(x) = (x - a) \\cdot Q(x)$, kur polinoma $Q(x)$ pakāpe ir mazāka nekā polinoma $P(x)$ pakāpe.',
      },
    ],
  },
  solvedExamples: [
    {
      id: 'ex1',
      problem: 'Atrast polinoma $P(x) = x^3 - 5x + 4$ veselās saknes.',
      solution:
        'Tā kā koeficients pie $x^3$ ir $1$, tad polinoma veselās saknes var būt tikai brīvā locekļa $4$ dalītāji, tas ir, saknes varētu būt $\\pm 1; \\pm 2; \\pm 4$. Aprēķinot atbilstošās polinoma vērtības:\n- $P(1) = 1 - 5 + 4 = 0$, tātad $x = 1$ ir polinoma sakne;\n- $P(-1) = -1 + 5 + 4 = 8 \\neq 0$, tātad $x = -1$ nav polinoma sakne;\n- $P(2) = 8 - 10 + 4 = 2 \\neq 0$, tātad $x = 2$ nav polinoma sakne;\n- $P(-2) = -8 + 10 + 4 = 6 \\neq 0$, tātad $x = -2$ nav polinoma sakne;\n- $P(4) = 64 - 20 + 4 \\neq 0$, tātad $x = 4$ nav polinoma sakne;\n- $P(-4) = -64 + 20 + 4 \\neq 0$, tātad $x = -4$ nav polinoma sakne.\n\nLīdz ar to esam ieguvuši, ka polinomam ir tikai viena vesela sakne $x = 1$.',
    },
    {
      id: 'ex2',
      problem: 'Atrast polinoma $P(x) = 2x^3 + x^2 - 13x + 6$ racionālās saknes.',
      solution:
        'Tā kā koeficients pie $x^3$ ir $2$ un brīvais loceklis ir $6$, tad iespējamās $q$ vērtības ir $\\pm 1; \\pm 2$ un iespējamās $p$ vērtības ir $\\pm 1; \\pm 2; \\pm 3; \\pm 6$. Tātad $\\dfrac{p}{q}$ vērtības jeb polinoma racionālās saknes varētu būt $\\pm 1; \\pm 2; \\pm 3; \\pm 6; \\pm \\dfrac{1}{2}; \\pm \\dfrac{3}{2}$. Pārbaudot:\n- $P(2) = 16 + 4 - 26 + 6 = 0$, tātad $x = 2$ ir polinoma sakne;\n- $P(-3) = -54 + 9 + 39 + 6 = 0$, tātad $x = -3$ ir polinoma sakne;\n- $P\\!\\left(\\dfrac{1}{2}\\right) = 2 \\cdot \\dfrac{1}{8} + \\dfrac{1}{4} - \\dfrac{13}{2} + 6 = 0$, tātad $x = \\dfrac{1}{2}$ ir polinoma sakne;\n- pārējās vērtības nav polinoma saknes.\n\nLīdz ar to esam ieguvuši, ka polinomam ir trīs racionālas saknes $x = 2$, $x = -3$ un $x = \\dfrac{1}{2}$.',
    },
    {
      id: 'ex3',
      problem: 'Izdalīt polinomu $6x^3 + x^2 + 7x + 6$ ar polinomu $2x^2 - x + 3$.',
      solution:
        '**1. atrisinājums** (dalīšana rakstos):\n$$-(6x^3 + x^2 + 7x + 6) : (2x^2 - x + 3) = 3x + 2$$\n$$\\underline{6x^3 - 3x^2 + 9x}$$\n$$4x^2 - 2x + 6$$\n$$\\underline{4x^2 - 2x + 6}$$\n$$0$$\n\n**2. atrisinājums** (ekvivalenti pārveidojumi):\n$$\\frac{6x^3 + x^2 + 7x + 6}{2x^2 - x + 3} = \\frac{3x(2x^2 - x + 3) + 4x^2 - 2x + 6}{2x^2 - x + 3} = 3x + \\frac{2(2x^2 - x + 3)}{2x^2 - x + 3} = 3x + 2.$$',
    },
    {
      id: 'ex4',
      problem: 'Izdalīt polinomu $2x^4 + 5x^3 - 6x^2 + x - 4$ ar polinomu $x^2 - 2x + 2$.',
      solution:
        '**1. atrisinājums** (dalīšana rakstos):\n$$-(2x^4 + 5x^3 - 6x^2 + x - 4) : (x^2 - 2x + 2) = 2x^2 + 9x + 8$$\n$$\\underline{2x^4 - 4x^3 + 4x^2}$$\n$$9x^3 - 10x^2 + x - 4$$\n$$\\underline{9x^3 - 18x^2 + 18x}$$\n$$8x^2 - 17x - 4$$\n$$\\underline{8x^2 - 16x + 16}$$\n$$-x - 20$$\n\nDalījums ir $2x^2 + 9x + 8$ ar atlikumu $-x - 20$.\n\n**2. atrisinājums** (ekvivalenti pārveidojumi):\n$$\\frac{2x^4 + 5x^3 - 6x^2 + x - 4}{x^2 - 2x + 2} = 2x^2 + \\frac{9x^3 - 10x^2 + x - 4}{x^2 - 2x + 2}$$\n$$= 2x^2 + 9x + \\frac{8x^2 - 17x - 4}{x^2 - 2x + 2} = 2x^2 + 9x + 8 + \\frac{-x - 20}{x^2 - 2x + 2}.$$',
    },
    {
      id: 'ex5',
      problem: 'Atrisināt vienādojumu $x^3 - 3x + 2 = 0$.',
      solution:
        '**1. atrisinājums.** Uzminam, ka $x = 1$ ir vienādojuma sakne, jo $1^3 - 3 \\cdot 1 + 2 = 1 - 3 + 2 = 0$.\n\nLai sadalītu vienādojuma kreisās puses izteiksmi reizinātājos, dalām to ar binomu $x - 1$:\n$$x^3 - 3x + 2 = (x - 1)(x^2 + x - 2).$$\n\nTātad doto vienādojumu varam pārrakstīt formā:\n$$(x - 1)(x^2 + x - 2) = 0.$$\n\nKatru reizinātāju pielīdzinot nullei, iegūstam, ka $x - 1 = 0$ vai $x^2 + x - 2 = 0$. Lineārā vienādojuma sakne ir $x = 1$ un kvadrātvienādojuma saknes ir $x = -2$ un $x = 1$.\n\nLīdz ar to dotā vienādojuma saknes ir $x_1 = x_2 = 1$ un $x_3 = -2$.\n\n*Piezīme.* No teorēmas secinājuma varēja secināt, ka veselās saknes varētu būt tikai skaitļi $\\pm 1$ un $\\pm 2$.\n\n**2. atrisinājums.** Izmantojam grupēšanas paņēmienu:\n$$x^3 - 3x + 2 = x^2(x-1) + x(x-1) - 2(x-1) = (x-1)(x^2 + x - 2).$$\nTālāk tāpat kā 1. atrisinājumā.',
    },
    {
      id: 'ex6',
      problem: 'Atrisināt vienādojumu $x^4 - 3x^3 + x^2 + 3x - 2 = 0$.',
      solution:
        'Uzminam, ka $x = 1$ ir vienādojuma sakne, jo $1 - 3 + 1 + 3 - 2 = 0$.\n\nLai sadalītu vienādojuma kreisās puses izteiksmi reizinātājos, dalām to ar binomu $x - 1$:\n$$(x^4 - 3x^3 + x^2 + 3x - 2) : (x - 1) = x^3 - 2x^2 - x + 2.$$\n\nTātad doto vienādojumu varam pārveidot formā:\n$$(x - 1)(x^3 - 2x^2 - x + 2) = 0.$$\n\nKatru reizinātāju pielīdzinot nullei, iegūstam, ka $x - 1 = 0$ vai $x^3 - 2x^2 - x + 2 = 0$. Lineārā vienādojuma sakne ir $x = 1$, bet trešās pakāpes vienādojumu risinām ar grupēšanas paņēmienu:\n$$x^2(x - 2) - (x - 2) = 0,$$\n$$(x - 2)(x^2 - 1) = 0.$$\n\nTātad $x = 2$ un $x = \\pm 1$.\n\nLīdz ar to dotā vienādojuma saknes ir $x_1 = x_2 = 1$, $x_3 = 2$ un $x_4 = -1$.\n\n*Piezīmes.* 1. No teorēmas secinājuma var secināt, ka veselās saknes varētu būt tikai skaitļi $\\pm 1$ un $\\pm 2$. 2. Dotā vienādojuma kreiso pusi var sadalīt reizinātājos, ņemot vērā uzminēto sakni $x = 1$:\n$$x^4 - 3x^3 + x^2 + 3x - 2 = x^3(x-1) - 2x^2(x-1) - x(x-1) + 2(x-1) = (x-1)(x^3 - 2x^2 - x + 2).$$',
    },
  ],
}
