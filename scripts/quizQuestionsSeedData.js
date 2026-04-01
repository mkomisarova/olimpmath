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
}
