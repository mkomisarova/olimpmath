/** Firestore topic document: nevienadibu-pieradisana */
export default {
  displayName: 'Nevienādību pierādīšana',
  slug: 'nevienadibu-pieradisana',
  subject: 'algebra',
  order: 4,
  theory: {
    sections: [
      {
        title: 'Nevienādību risināšana un pierādīšana',
        content:
          'Skolas kursā galvenais uzsvars tiek likts uz nevienādību risināšanu, bet matemātikas olimpiādēs nevienādības ir jāpierāda. Svarīgi ir saprast atšķirību starp nevienādību risināšanu un pierādīšanu.\n\n**Atrisināt nevienādību** nozīmē atrast visus tās atrisinājumus un pierādīt, ka citu atrisinājumu nav. Visu nevienādības atrisinājumu apvienojumu sauc par šīs nevienādības **atrisinājumu kopu**.\n\n**Pierādīt nevienādību** ar vienu vai vairākiem mainīgajiem nozīmē pamatot, ka nevienādība ir patiesa pie jebkurām pieļaujamajām mainīgo vērtībām.\n\nDivas nevienādības sauc par **ekvivalentām**, ja tām ir viena un tā pati atrisinājumu kopa.\n\nBieži vien nevienādības pierāda, izmantojot ekvivalentus pārveidojumus. Tādējādi iegūst nevienādību, kuras patiesums ir acīmredzams vai viegli noskaidrojams ar elementāru spriedumu palīdzību.',
      },
      {
        title: 'Nevienādību ekvivalenti pārveidojumi',
        content:
          '- Nevienādības kādu pusi aizstāj ar tai identisku izteiksmi.\n- Nevienādības abām pusēm pieskaita vienu un to pašu skaitli vai izteiksmi, kas nemaina nevienādības definīcijas apgabalu.\n- Nevienādības abas puses reizina vai dala ar vienu un to pašu **pozitīvu** skaitli (vai izteiksmi, kas ir pozitīva visām mainīgo vērtībām).\n- Nevienādības abas puses reizina vai dala ar vienu un to pašu **negatīvu** skaitli (vai izteiksmi, kas ir negatīva visām mainīgo vērtībām) — **mainot nevienādības zīmi**.\n- Nevienādības abas puses kāpina kvadrātā vai velk kvadrātsakni, ja definīcijas apgabalā dotās nevienādības abas puses ir nenegatīvas.\n- Nevienādības abas puses kāpina $m$-tajā pakāpē vai velk $m$-tās pakāpes sakni, kur $m$ ir naturāls nepāra skaitlis.\n- Nevienādības abas puses kāpina $m$-tajā pakāpē vai velk $m$-tās pakāpes sakni, kur $m$ ir naturāls pāra skaitlis un definīcijas kopā dotās nevienādības abas puses ir nenegatīvas.',
      },
      {
        title: 'Pilno kvadrātu atdalīšana',
        content:
          'Viens no ekvivalento pārveidojumu veidiem ir **pilno kvadrātu atdalīšana**. Lai atdalītu pilno kvadrātu, izmanto saīsinātās reizināšanas formulas:\n$$( a + b)^2 = a^2 + 2ab + b^2$$\n$$(a - b)^2 = a^2 - 2ab + b^2$$\n$$(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$$\n\nBieži vien tikai ar formulu izmantošanu nepietiek, tāpēc jāizmanto arī spriedumi. Visbiežāk izmantotie ir šādi:\n- ja $A$ ir algebriska izteiksme, tad $A^2 \\geq 0$;\n- ja $A_1, A_2, \\ldots, A_n$ ir algebriskas izteiksmes, tad $A_1^2 + A_2^2 + \\cdots + A_n^2 \\geq 0$;\n- ja $A_1, A_2, \\ldots, A_n$ ir algebriskas izteiksmes un $c_1, c_2, \\ldots, c_n$ ir nenegatīvas izteiksmes, tad $c_1 A_1^2 + c_2 A_2^2 + \\cdots + c_n A_n^2 \\geq 0$.\n\n**Piezīme.** $A_1^2 + A_2^2 + \\cdots + A_n^2 = 0$ tad un tikai tad, ja $A_1 = A_2 = \\cdots = A_n = 0$.',
      },
    ],
  },
  solvedExamples: [
    {
      id: 'ex1',
      problem: 'Pierādīt nevienādību $x^2 + 8x + y^2 - 2y + 17 \\geq 0$.',
      solution:
        'Veicam ekvivalentus pārveidojumus:\n$$x^2 + 8x + 16 + y^2 - 2y + 1 \\geq 0$$\n$$(x^2 + 2 \\cdot 4x + 4^2) + (y^2 - 2y \\cdot 1 + 1^2) \\geq 0$$\n$$(x + 4)^2 + (y - 1)^2 \\geq 0.$$\n\nTā kā skaitļa kvadrāts ir nenegatīvs, tad pēdējās nevienādības kreisajā pusē ir divu nenegatīvu skaitļu summa, kas arī ir nenegatīvs skaitlis. Tātad pēdējā nevienādība ir patiesa. Tā kā tika veikti ekvivalenti pārveidojumi, tad arī dotā nevienādība ir patiesa visiem reāliem skaitļiem $x$ un $y$.',
    },
    {
      id: 'ex2',
      problem: 'Pierādīt nevienādību $x^2 - xy + y^2 \\geq 0$.',
      solution:
        '**1. atrisinājums.** Reizinām nevienādības abas puses ar $2$ un veicam ekvivalentus pārveidojumus:\n$$2x^2 - 2xy + 2y^2 \\geq 0$$\n$$(x^2 - 2xy + y^2) + x^2 + y^2 \\geq 0$$\n$$(x - y)^2 + x^2 + y^2 \\geq 0.$$\n\nTā kā skaitļa kvadrāts ir nenegatīvs, tad pēdējās nevienādības kreisajā pusē ir trīs nenegatīvu skaitļu summa, kas arī ir nenegatīvs skaitlis. Tātad pēdējā nevienādība ir patiesa. Tā kā tika veikti ekvivalenti pārveidojumi, tad arī dotā nevienādība ir patiesa visiem reāliem skaitļiem $x$ un $y$.\n\n**2. atrisinājums.** Veicam ekvivalentus pārveidojumus:\n$$x^2 - xy + y^2 = \\left(x^2 - 2 \\cdot x \\cdot \\frac{1}{2}y + \\frac{1}{4}y^2\\right) + \\frac{3}{4}y^2 = \\left(x - \\frac{1}{2}y\\right)^2 + \\frac{3}{4}y^2.$$\n\nTā kā skaitļa kvadrāts ir nenegatīvs, tad $\\left(x - \\dfrac{1}{2}y\\right)^2 \\geq 0$ un $\\dfrac{3}{4}y^2 \\geq 0$. Divu nenegatīvu skaitļu summa ir nenegatīva, tāpēc $\\left(x - \\dfrac{1}{2}y\\right)^2 + \\dfrac{3}{4}y^2 \\geq 0$. Tā kā tika veikti ekvivalenti pārveidojumi, tad arī dotā nevienādība ir patiesa visiem reāliem skaitļiem $x$ un $y$.',
    },
    {
      id: 'ex3',
      problem:
        'Pierādīt, ka pozitīviem skaitļiem $a$, $b$ un $c$ izpildās nevienādība $a + \\dfrac{bc}{a} \\geq \\dfrac{4bc}{b+c}$.',
      solution:
        'Abas nevienādības puses reizinām ar pozitīvu izteiksmi $a(b+c)$:\n$$a^2(b+c) + bc(b+c) \\geq 4abc$$\n$$a^2b + a^2c + b^2c + bc^2 - 4abc \\geq 0$$\n$$a^2b - 2abc + bc^2 + a^2c - 2abc + b^2c \\geq 0$$\n$$b(a^2 - 2ac + c^2) + c(a^2 - 2ab + b^2) \\geq 0$$\n$$b(a-c)^2 + c(a-b)^2 \\geq 0.$$\n\nTā kā skaitļa kvadrāts ir nenegatīvs un $b > 0$, $c > 0$, tad $b(a-c)^2 \\geq 0$ un $c(a-b)^2 \\geq 0$. Divu nenegatīvu skaitļu summa ir nenegatīva, tāpēc pēdējā iegūtā nevienādība ir patiesa. Tā kā tika veikti ekvivalenti pārveidojumi, tad arī dotā nevienādība ir patiesa visiem pozitīviem skaitļiem $a$, $b$ un $c$.',
    },
    {
      id: 'ex4',
      problem: 'Pierādīt, ka $2x^4 + 1 \\geq 2x^3 + x^2$.',
      solution:
        'Veicam ekvivalentus pārveidojumus:\n$$2x^4 + 1 - 2x^3 - x^2 \\geq 0$$\n$$x^4 - 2x^3 + x^2 + x^4 - 2x^2 + 1 \\geq 0$$\n$$x^2(x^2 - 2x + 1) + (x^2 - 1)^2 \\geq 0$$\n$$x^2(x-1)^2 + (x^2 - 1)^2 \\geq 0.$$\n\nTā kā skaitļa kvadrāts ir nenegatīvs, tad $x^2(x-1)^2 \\geq 0$ un $(x^2-1)^2 \\geq 0$. Divu nenegatīvu skaitļu summa ir nenegatīva, tāpēc pēdējā iegūtā nevienādība ir patiesa. Tā kā tika veikti ekvivalenti pārveidojumi, tad arī dotā nevienādība ir patiesa visiem reāliem skaitļiem $x$.',
    },
    {
      id: 'ex5',
      problem: 'Pierādīt, ka $x^2 + 2xy + 3y^2 + 2x + 6y + 3 \\geq 0$.',
      solution:
        'Veicam ekvivalentus pārveidojumus:\n$$x^2 + 2xy + y^2 + 2(x+y) + 2y^2 + 4y + 3 \\geq 0$$\n$$\\left((x+y)^2 + 2(x+y) + 1\\right) + 2(y^2 + 2y + 1) \\geq 0$$\n$$(x + y + 1)^2 + 2(y+1)^2 \\geq 0.$$\n\nTā kā skaitļa kvadrāts ir nenegatīvs, tad $(x+y+1)^2 \\geq 0$ un $2(y+1)^2 \\geq 0$. Divu nenegatīvu skaitļu summa ir nenegatīva, tāpēc pēdējā iegūtā nevienādība ir patiesa. Tā kā tika veikti ekvivalenti pārveidojumi, tad arī dotā nevienādība ir patiesa visiem reāliem skaitļiem $x$ un $y$.',
    },
  ],
}
