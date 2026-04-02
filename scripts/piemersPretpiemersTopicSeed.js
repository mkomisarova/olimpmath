/** Firestore topic document: piemers-pretpiemers */
export default {
  displayName: 'Piemērs un pretpiemērs',
  slug: 'piemers-pretpiemers',
  subject: 'kombinatorika',
  order: 3,
  theory: {
    sections: [
      {
        title: 'Piemērs un pretpiemērs',
        content:
          'Matemātikā ir noteikti kritēriji tam, kādi spriedumi ir un kādi spriedumi nav pieļaujami dažādu apgalvojumu pamatošanā. Lielākajai daļai uzdevumu risinājumu ir jāsatur vispārīgs pamatojums (nevis daži piemēri), kas garantē, ka mūsu atrastā atbilde tiešām ir pareiza. Taču daļa uzdevumu ir tādi, kuros pietiek parādīt tikai vienu piemēru, lai uzdevums būtu pilnībā atrisināts.\n\nIr apgalvojumi, kas kaut ko apgalvo par vienu objektu (skaitli, priekšmetu, figūru) — tos sauc par **atsevišķiem apgalvojumiem**, un ir apgalvojumi, kas kaut ko apgalvo par kādu objektu kopu — tos sauc par **vispārīgiem apgalvojumiem**.\n\nPiemēram, apgalvojums „skaitlis $14$ dalās ar $2$" ir atsevišķs apgalvojums, bet apgalvojums „visi naturāli skaitļi, kuru pēdējais cipars ir $4$, dalās ar $2$" ir vispārīgs apgalvojums.\n\nJa jautājums ir uzdots par kādu vienu objektu un atbilde ir **„jā"**, tad pietiek parādīt vienu piemēru, kam piemīt prasītās īpašības. Ja jautājums ir uzdots par kādu objektu kopu un atbilde ir **„nē"**, tad pietiek parādīt vienu piemēru, kam uzdevumā minētās īpašības nepiemīt. To sauc par **pretpiemēru**.',
      },
      {
        title: 'Uzdevumu veidu struktūra',
        content:
          '**Vai ir...? Vai eksistē...? Vai iespējams...? Vai var gadīties...?**\n- **JĀ** → Pietiek parādīt vienu piemēru, kurā visas uzdevuma prasības izpildās.\n- **NĒ** → Nepieciešams pierādījums, kas balstās uz vispārīgiem spriedumiem. Ar dažiem piemēriem nepietiek!\n\n**Vai visiem...? Vai katram...? Vai noteikti...? Vai vienmēr...?**\n- **JĀ** → Nepieciešams pierādījums, kas balstās uz vispārīgiem spriedumiem. Ar dažiem piemēriem nepietiek!\n- **NĒ** → Pietiek parādīt vienu pretpiemēru.\n\n**Kāds var būt...? Cik...? Atrisini!**\n→ Jāatrod VISAS iespējamās vērtības un jāpierāda, ka citu iespēju nav.\n\n**Kāds ir lielākais (mazākais)...?**\n→ Jāatrod lielākā (mazākā) iespējamā vērtība, jāparāda piemērs un jāpierāda, ka vēl lielāka (mazāka) vērtība nav iespējama.',
      },
    ],
  },
  solvedExamples: [
    {
      id: 'ex1',
      problem: 'Vai skaitļa kvadrāts noteikti ir lielāks nekā pats skaitlis?',
      solution:
        '**Nē.** Kā pretpiemērs der gan $1$, jo $1^2 = 1$, kas nav lielāks kā pats skaitlis $1$, gan $\\dfrac{1}{2}$, jo $\\left(\\dfrac{1}{2}\\right)^2 = \\dfrac{1}{4}$, kas nav lielāka kā $\\dfrac{1}{2}$. (Taču pietiek parādīt tikai vienu piemēru.)',
    },
    {
      id: 'ex2',
      problem:
        'Vai $*$ vietā var ierakstīt kādu ciparu, lai skaitlis $12{*}3$ dalītos ar $3$?',
      solution:
        '**Jā**, piemēram, $0$, tad iegūstam skaitli $1203$, kura ciparu summa ir $1 + 2 + 0 + 3 = 6$, kas dalās ar $3$, tātad arī pats skaitlis dalās ar $3$.',
    },
    {
      id: 'ex3',
      problem: 'Vai eksistē tāds pirmskaitlis, kas dalās ar $3$?',
      solution:
        '**Jā**, piemēram, $3$, jo tas ir pirmskaitlis un tas dalās ar $3$. (Šis ir vienīgais pirmskaitlis, kas dalās ar $3$.)',
    },
    {
      id: 'ex4',
      problem: 'Vai divu skaitļu summa noteikti ir lielāka nekā katrs no šiem diviem saskaitāmajiem?',
      solution:
        '**Nē.** Kā pretpiemērs der $0 + 5 = 5$, jo šo divu skaitļu summa ir $5$, kas nav lielāka kā katrs no saskaitāmajiem, jo $5$ nav lielāks kā $5$.',
    },
    {
      id: 'ex5',
      problem: 'Vai visi skaitļi, kas dalās ar $5$, dalās arī ar $10$?',
      solution:
        '**Nē.** Kā pretpiemērs der $25$, jo tas dalās ar $5$, bet ar $10$ nedalās.',
    },
    {
      id: 'ex6',
      problem:
        'Vai, reizinot divus pāra skaitļus, noteikti iegūst skaitli, kuram visi cipari ir pāra?',
      solution:
        '**Nē.** Kā pretpiemērs der $12 \\cdot 8 = 96$, kam viens cipars ir nepāra.',
    },
    {
      id: 'ex7',
      problem: 'Vai visi pirmskaitļi ir nepāra skaitļi?',
      solution: '**Nē.** Kā pretpiemērs der $2$, kas ir vienīgais pāra pirmskaitlis.',
    },
    {
      id: 'ex8',
      problem:
        'Vai var atrast tādu divciparu skaitli, kuram desmitu cipars ir divas reizes lielāks nekā vienu cipars un kurš dalās ar $9$?',
      solution:
        '**Jā**, piemēram, $63$, jo tā pirmais cipars ir divas reizes lielāks nekā pēdējais un $63 : 9 = 7$.',
    },
    {
      id: 'ex9',
      problem:
        'Vai $x$ un $y$ vietā var ierakstīt tādus naturālus skaitļus, lai vienādība $2x + 3y = 26$ ir patiesa?',
      solution:
        '**Jā**, piemēram, $x = 7$, $y = 4$, jo $2 \\cdot 7 + 3 \\cdot 4 = 14 + 12 = 26$.',
    },
    {
      id: 'ex10',
      problem:
        'Zināms, ka $x$ un $y$ ir tādi naturāli skaitļi, ka ir patiesa vienādība $3x + 5y = 33$. Vai noteikti $x > 5$?',
      solution:
        '**Nē.** Kā pretpiemērs der $x = 1$, jo tad, izvēloties $y = 6$, varam iegūt patiesu vienādību $3 \\cdot 1 + 5 \\cdot 6 = 3 + 30 = 33$.',
    },
    {
      id: 'ex11',
      problem:
        'Vai $x$ un $y$ vietā var ierakstīt pa vienam ciparam tā, lai skaitlis $\\overline{12x3y}$ dalītos ar $6$?',
      solution:
        '**Jā.** Kā piemēri der gan $x = 1$ un $y = 2$, jo $12132 : 6 = 2022$, gan $x = 0$ un $y = 6$, jo $12036 : 6 = 2006$. (Taču pietiek parādīt tikai vienu piemēru.)',
    },
    {
      id: 'ex12',
      problem:
        'Vai noteikti deviņciparu skaitlis, kura pierakstā izmantoti deviņi atšķirīgi cipari, dalās ar $3$?',
      solution:
        '**Nē**, piemēram, $123456790$ nedalās ar $3$, jo tā ciparu summa $1 + 2 + 3 + 4 + 5 + 6 + 7 + 9 + 0 = 37$ nedalās ar $3$.\n\n*Ievēro!* Šajā uzdevumā vārds „noteikti" nozīmē, ka jautājums uzdots par pilnīgi visiem tādiem deviņciparu skaitļiem, kuru pierakstā izmantoti deviņi atšķirīgi cipari. Tātad, ja uzdevumā minētā īpašība (dalās ar $3$) nepiemīt kādam no šiem skaitļiem, pietiek parādīt vienu tādu pretpiemēru.',
    },
    {
      id: 'ex13',
      problem:
        'Vai eksistē tādi divi dažādi trīsciparu naturāli skaitļi $A$ un $B$, ka trim skaitļiem $A$, $B$ un $A + B$ ciparu summas ir vienādas?',
      solution:
        '**Jā**, piemēram, var izvēlēties $A = 900$ un $B = 333$, tad $A + B = 900 + 333 = 1233$, un ciparu summa visiem trim skaitļiem $900$, $333$ un $1233$ ir $9$.\n\n*Ievēro!* Šajā uzdevumā kaut kas tiek prasīts par vienu gadījumu — par to, vai var atrast divus tādus skaitļus, kam izpildās minētās īpašības. Tātad, ja atbilde ir „jā", pietiek parādīt vienu piemēru.',
    },
    {
      id: 'ex14',
      problem:
        'Vienā gadā bija tikpat trešdienu, cik piektdienu. Vai noteikti šajā gadā bija arī tikpat ceturtdienu?',
      solution:
        '**Nē**, ne obligāti. Īsajā gadā ir $365$ dienas jeb $52$ pilnas nedēļas un viena diena. Ja $1.$ janvāris ir ceturtdiena, tad arī $31.$ decembris ir ceturtdiena un ceturtdienu skaits gada laikā būs par vienu lielāks nekā trešdienu un piektdienu skaits.\n\n*Ievēro!* Šajā uzdevumā vārds „noteikti" nozīmē, ka jautājums uzdots par pilnīgi visiem tādiem gadiem, kuros trešdienu ir tikpat, cik piektdienu. Tātad, ja var atrast kaut vienu tādu pretpiemēru, kuram prasītais neizpildās, tad nevaram apgalvot, ka prasītais izpildās visos gadījumos.',
    },
    {
      id: 'ex15',
      problem:
        'Jānim kabatā ir $14$ centi. Zināms, ka kabatā ir $5$ monētas. Vai vienmēr ir iespējams šīs kabatas saturu sadalīt divās kaudzītēs tā, lai katrā kaudzītē būtu pa $7$ centiem?',
      solution:
        '**Nē**, vienmēr nav iespējams sadalīt divās kaudzītēs tā, lai katrā kaudzītē būtu pa $7$ centiem, jo var gadīties, ka kabatā ir viena $10$ centu monēta un četras viena centa monētas.\n\n*Ievēro!* Šajā uzdevumā vārds „vienmēr" nozīmē, ka jautājums uzdots par pilnīgi visiem tādiem gadījumiem, kad kabatā ir $5$ monētas, kuru vērtība ir $14$ centi. Tātad, ja atbilde ir „nē", pietiek parādīt vienu pretpiemēru.',
    },
  ],
}
