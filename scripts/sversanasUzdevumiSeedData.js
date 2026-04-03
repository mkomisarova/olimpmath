/** Firestore topic document: sversanas-uzdevumi + quiz questions */

export const sversanasTopicData = {
  topicId: 'sversanas-uzdevumi',
  displayName: 'Svēršanas uzdevumi',
  slug: 'sversanas-uzdevumi',
  subject: 'kombinatorika',
  order: 1,
  theory: {
    sections: [
      {
        title: 'Ievads svēršanas uzdevumos',
        content: `Svēršanas uzdevumos galvenokārt izmantosim sviras svarus. Svariem ir divi svaru kausi. Svēršanā **neizmantosim** atsvarus. Svari **neparādīs** ķermeņu masu. Mēs varēsim tikai redzēt, vai abi svaru kausi ir līdzsvarā.\n\nAplūkosim uzdevumus, kuros, izmantojot doto informāciju, galvenokārt tiks prasīts atrast vienu (vai vairākus) no pārējiem objektiem atšķirīgu objektu. Šo uzdevumu atrisinājumi lielākoties balstās uz loģisku spriedumu ceļā izveidotām objektu grupēšanas metodēm.\n\n*Iegaumē!* Ja uzdevumā ir jautājums „Kā…?", tad atrisinājumā ir jāapskata, kā rīkoties **pilnīgi visās** iespējamajās situācijās, lai panāktu prasīto rezultātu. Nepietiek apskatīt tikai vienu vai dažus „labvēlīgākos" gadījumus.`,
      },
    ],
  },
  solvedExamples: [
    {
      id: 'ex1',
      grades: [5, 6, 7, 8],
      problem:
        'Dotas 20 pēc ārējā izskata vienādas monētas, bet visas to masas ir dažādas. Kā, izmantojot sviras svarus bez atsvariem, ar 28 svēršanām atrast gan pašu vieglāko, gan pašu smagāko monētu?',
      solution:
        'Sadalām monētas pa pāriem un salīdzinām katra pāra monētas – nosakām vieglāko un smagāko monētu katrā pārī. Pēc katras svēršanas vieglāko monētu liekam vienā kaudzītē, bet smagāko – otrā kaudzītē. Tā kā ir $20 : 2 = 10$ pāri, tad ir veiktas 10 svēršanas. Skaidrs, ka visvieglākā monēta jāmeklē starp vieglākajām, bet vissmagākā – starp smagākajām. Apskatām katru kaudzīti atsevišķi.\n\nNo kaudzītes, kurā ir vieglākās monētas, paņemam divas un salīdzinām tās, vieglāko atstājam svaros un salīdzinām ar nākamo, atkal svaros atstājot vieglāko. Tā turpinām, kamēr visas atlikušās monētas no šīs kaudzītes ir nosvērtas. Pēdējās svēršanas vieglākā monēta ir pati vieglākā no visām. Kopā tika veiktas 9 svēršanas.\n\nAnaloģiski no kaudzītes, kurā ir smagākās monētas, atrod pašu smagāko no visām – svaros visu laiku jāatstāj smagākā monēta, bet vieglākā jāmet prom. Kopā tika veiktas 9 svēršanas.\n\nLīdz ar to ar $10 + 9 + 9 = 28$ svēršanām esam atraduši gan pašu vieglāko, gan pašu smagāko monētu.',
    },
    {
      id: 'ex2',
      grades: [5, 6, 7, 8],
      problem:
        'Dotas 9 pēc ārējā izskata vienādas monētas, no kurām viena ir viltota – tā ir vieglāka nekā citas. Kā ar divām svēršanām uz sviras svariem bez atsvariem atrast viltoto monētu, ja zināms, ka visu īsto monētu masas ir vienādas?',
      solution:
        'Sadalām šīs monētas trīs kaudzītēs pa 3 monētām katrā. Skaidrs, ka viltotā monēta atrodas vienā no šīm kaudzītēm. Pirmajā svēršanā salīdzinām divas no šīm kaudzītēm.\n\n(A) Ja viena kaudzīte ir vieglāka nekā otra, tad viltotā (vieglākā) monēta ir šajā kaudzītē.\n(B) Ja abām kaudzītēm ir vienāda masa, tad viltotā monēta ir trešajā, nesvērtajā kaudzītē.\n\nTālāk apskatīsim tikai to kaudzīti, kurā ir viltotā monēta. Otrajā svēršanas reizē uz svaru kausiem liekam pa vienai monētai no šīs kaudzītes.\n\n(A) Ja viens svaru kauss ir vieglāks nekā otrs, tad uz tā atrodas viltotā monēta.\n(B) Ja abi svaru kausi ir līdzsvarā, tad viltotā monēta ir tā, kas šajā svēršanas reizē netika svērta.',
    },
    {
      id: 'ex3',
      grades: [5, 6, 7, 8],
      problem:
        'Zināms, ka no 80 monētām viena ir viltota – tā ir vieglāka nekā pārējās, kurām visām ir vienāda masa. Kā ar četrām svēršanām uz sviras svariem bez atsvariem atrast viltoto monētu?',
      solution:
        'Sadalām monētas trīs kaudzītēs: divas kaudzītes pa 27 monētām katrā un viena kaudzīte, kurā ir 26 monētas.\n\nPirmajā svēršanā salīdzinām kaudzītes, kurās ir pa 27 monētām.\n(A) Ja viens svaru kauss ir vieglāks nekā otrs, tad uz tā atrodas viltotā monēta.\n(B) Ja abi svaru kausi ir līdzsvarā, tad viltotā monēta ir tajā kaudzītē, kas atradās malā.\n\nTālāk apskatīsim tikai to kaudzīti, kurā ir viltotā monēta. (Ja viltotā monēta atradās kaudzītē, kurā bija 26 monētas, tad šai kaudzītei pievienojot vienu „īsto" monētu no citas kaudzītes, arī iegūstam kaudzīti ar 27 monētām.)\n\nSadalām 27 monētas trīs vienādās kaudzītēs pa 9 monētām katrā un otrajā svēršanā salīdzinām divas no šīm kaudzītēm. Atrodam to deviņu monētu kaudzīti, kurā atrodas viltotā monēta.\n\nPirms trešās svēršanas atkal kaudzīti sadalām trīs vienādās kaudzītēs pa trim monētām katrā un salīdzinām divas no šīm kaudzītēm. Nosakām, kurā trīs monētu kaudzītē atrodas viltotā monēta.\n\nCeturtajā svēršanas reizē uz svaru kausiem liekam pa vienai monētai. Ja viens svaru kauss ir vieglāks nekā otrs, tad uz tā atrodas viltotā monēta; ja abi svaru kausi ir līdzsvarā, tad viltotā monēta ir tā, kas palika malā.',
    },
    {
      id: 'ex4',
      grades: [5, 6, 7, 8],
      problem:
        'Dotas 25 pēc ārējā izskata vienādas monētas. Zināms, ka 24 monētu masas ir vienādas savā starpā, bet vienas monētas masa ir citāda. Kā ar divām svēršanām uz sviras svariem bez atsvariem noskaidrot, vai atšķirīgā monēta ir vieglāka vai smagāka nekā pārējās? (Pašu monētu atrast nav nepieciešams.)',
      solution:
        'Uzliekam uz katra svaru kausa 8 monētas.\n\n(A) Ja pirmajā svēršanā svari nav līdzsvarā, tad atšķirīgā monēta ir atradusies uz svariem. Otrajā svēršanā salīdzinām vieglākā kausa 8 monētas ar jebkurām 8 malā palikušajām (parastajām) monētām.\n- Ja svaru kausi ir līdzsvarā, tad atšķirīgā monēta pirmajā svēršanā ir bijusi uz „smagākā" kausa un ir smagāka nekā citas monētas.\n- Ja svaru kausi nav līdzsvarā, tad atšķirīgā monēta pirmajā svēršanā ir bijusi uz „vieglākā" kausa un ir vieglāka nekā citas monētas.\n\n(B) Ja kausi ir līdzsvarā, tad atšķirīgā monēta palikusi malā. Otrajā svēršanā salīdzinām malā palikušās 9 monētas ar jebkurām 9 jau svērtajām (parastajām) monētām.\n- Ja svaru kauss ar 9 parastajām monētām nosveras uz leju, tad atšķirīgā monēta ir vieglāka nekā pārējās.\n- Ja svaru kauss ar 9 parastajām monētām nosveras uz augšu, tad atšķirīgā monēta ir smagāka nekā pārējās.',
    },
    {
      id: 'ex5',
      grades: [5, 6, 7, 8],
      problem:
        'Grozā ir 16 akmeņi – 15 parasti, 1 radioaktīvs. Tie visi izskatās vienādi. Ir dota ierīce, ar kuras palīdzību var noteikt, vai starp apskatāmajiem akmeņiem ir vai nav radioaktīvais akmens (ar ierīci var pārbaudīt arī vairākus akmeņus reizē, bet ierīce nenorāda, kurš tieši ir radioaktīvais akmens). Kā ar 4 pārbaudēm atrast radioaktīvo akmeni?',
      solution:
        'Sākumā sadalām visus 16 akmeņus divās kaudzītēs pa 8 akmeņiem katrā un pārbaudām vienu kaudzīti. Neatkarīgi no pārbaudes rezultāta, varēs pateikt, kurā kaudzītē ir meklētais akmens.\n\nPēc tam to kaudzīti, kurā ir radioaktīvais akmens, atkal sadala divās daļās pa 4 akmeņiem katrā un pārbauda vienu no tām.\n\nTālāk kaudzīti, kurā ir meklētais akmens, atkal sadala divās daļās pa 2 akmeņiem katrā un atkal pārbauda vienu no tām.\n\nBeidzot pārbauda vienu no diviem akmeņiem, no kuriem viens ir radioaktīvais akmens, un noskaidro, kurš tieši tas ir.\n\nTā ar 4 pārbaudēm esam atraduši radioaktīvo akmeni: $16 \\to 8 \\to 4 \\to 2 \\to 1$.',
    },
    {
      id: 'ex6',
      grades: [5, 6, 7, 8],
      problem:
        'No 7 monētām vienai monētai masa ir mazāka nekā pārējām. Kā ar divām svēršanām var noskaidrot, kura ir vieglākā monēta?',
      solution:
        'Katrā svaru kausā ieliekam 3 monētas.\n\n(A) Ja svaru kausi nav līdzsvarā, tad vieglākā monēta atrodas uz „vieglākā" svaru kausa. Otrajā svēršanā katrā svaru kausā ieliekam pa vienai monētai no „vieglākā" kausa.\n- Ja svaru kausi ir līdzsvarā, tad vieglākā monēta ir tā, kas palika malā.\n- Ja svaru kausi nav līdzsvarā, tad vieglākā monēta atrodas uz „vieglākā" kausa.\n\n(B) Ja svaru kausi ir līdzsvarā, tad vieglākā monēta ir tā, kas nebija uz svariem.',
    },
    {
      id: 'ex7',
      grades: [5, 6, 7, 8],
      problem:
        'Dotas 13 pēc ārējā izskata vienādas monētas. No tām 12 monētas ir ar vienādu masu, bet viena – ar atšķirīgu. Doti arī sviras svari bez atsvariem. Kā, izmantojot divas svēršanas, noskaidrot, vai atšķirīgā monēta ir vieglāka vai smagāka nekā pārējās? (Pašu monētu atrast nav nepieciešams.)',
      solution:
        'Katrā svaru kausā ieliekam 6 monētas.\n\n(A) Ja pirmajā svēršanā svari nav līdzsvarā, tad atšķirīgā monēta ir atradusies uz svariem. Otrajā svēršanā katrā svaru kausā ieliekam pa trīs monētām no „vieglākā" kausa.\n- Ja svaru kausi ir līdzsvarā, tad atšķirīgā monēta pirmajā svēršanā ir bijusi uz „smagākā" kausa un ir smagāka nekā citas monētas.\n- Ja svaru kausi nav līdzsvarā, tad atšķirīgā monēta pirmajā svēršanā ir bijusi uz „vieglākā" kausa un ir vieglāka nekā citas monētas.\n\n(B) Ja svaru kausi ir līdzsvarā, tad atšķirīgā monēta ir tā, kas nebija uz svariem. Otrajā svēršanā salīdzinot to ar kādu no svērtajām monētām, noskaidrojam, vai tā ir vieglāka vai smagāka nekā pārējās monētas.',
    },
    {
      id: 'ex8',
      grades: [9, 10, 11, 12],
      problem:
        'Doti 16 akmeņi ar dažādām masām. Pierādiet, ka ar 18 svēršanām uz sviru svariem bez atsvariem var atrast pašu smagāko un otru smagāko akmeni!',
      solution:
        'Lai atrastu vissmagāko akmeni, ir nepieciešamas 15 svēršanas – rīkojamies pēc klasiskās olimpiskās shēmas: sākumā sadalām visus akmeņus pāros un katrā pārī atrodam smagāko akmeni (8 svēršanas), tad šos 8 atrastos akmeņus sadalām četros pāros un katrā no tiem atrodam smagāko akmeni (4 svēršanas), pēc tam atrastos četrus akmeņus sadalām divos pāros un katrā pārī atrodam smagāko akmeni (2 svēršanas), visbeidzot salīdzinām pēdējos divus akmeņus (1 svēršana). Tātad ar 15 svēršanām jau esam atraduši pašu smagāko akmeni.\n\nVēl jāatrod otrs smagākais akmens. Otrs smagākais akmens var būt tikai kāds no tiem četriem akmeņiem, kas tika salīdzināts ar pašu smagāko akmeni. Smagākais akmens no četriem akmeņiem atrodams ar 3 svēršanām: salīdzinām divus akmeņus (1 svēršana), smagāko atstājam svaros un to salīdzinām ar vienu no nesvērtajiem akmeņiem (1 svēršana), atkal svaros atstājot smagāko, tad šo pašu darbību atkārtojam vēlreiz (1 svēršana).\n\nTas nozīmē, ka ar $15 + 3 = 18$ svēršanām var atrast pašu smagāko un otro smagāko akmeni no 16 akmeņu kaudzes. $\\blacksquare$',
    },
    {
      id: 'ex9',
      grades: [9, 10, 11, 12],
      problem:
        'Dotas 5 pēc ārējā izskata vienādas bumbas, kuru masas ir 1000 g, 1001 g, 1002 g, 1004 g un 1007 g. Doti arī elektroniskie svari, kas rāda masu gramos. Kā ar trīs svēršanām atrast bumbu, kuras masa ir 1000 g?',
      solution:
        'Pirmajā svēršanā uz svariem liekam divas bumbas un noskaidrojam to kopējo masu. Otrajā svēršanā uz svariem liekam citas divas, vēl nesvērtas bumbas. Katrā no šīm divām svēršanās iegūstam vienu no iespējamiem svaru rādījumiem. Summas, kas satur 1000 g bumbu, ir: 2001, 2002, 2004, 2007.\n\n- Ja abās svēršanās nav iegūts neviens no šiem rezultātiem, tad 1000 g bumba ir tā, kas netika svērta.\n- Ja vienā no svēršanās ir iegūts kāds no šiem rezultātiem, tad 1000 g bumba atrodas attiecīgajā pārī. Trešajā svēršanā nosveram vienu no šī pāra bumbām. Ja svari rāda 1000 g, tad meklētā bumba ir uz svariem; ja citu skaitli, tad 1000 g bumba ir otra šī pāra bumba.',
    },
    {
      id: 'ex10',
      grades: [9, 10, 11, 12],
      problem:
        'Dotas 4 pēc ārējā izskata vienādas monētas, kuru masas ir 1 g, 2 g, 3 g un 4 g. Kā ar četrām svēršanām uz sviras svariem bez atsvariem noskaidrot katras monētas masu?',
      solution:
        'Vispirms uz katra svaru kausa uzliekam pa 2 monētām (1 svēršana).\n\n- Ja pirmajā svēršanā svari atrodas līdzsvarā, tad šādu svaru stāvokli izsaka tikai vienādība $1 + 4 = 2 + 3$. Ar divām svēršanām nosakām abas smagākās monētas pāros $(1, 4)$ un $(2, 3)$. Ceturtajā svēršanā salīdzinām šīs smagākās monētas savā starpā — noskaidrojam, kura ir 3 g, kura – 4 g. Monēta, kas pirmajā svēršanā atradās uz viena kausa ar 4 g monētu, sver 1 g, bet tā monēta, kas atradās uz viena kausa ar 3 g monētu, sver 2 g.\n\n- Ja pirmajā svēršanā svari nav līdzsvarā, tad ir divas iespējas: vai nu $1 + 2 < 3 + 4$, vai $1 + 3 < 2 + 4$. Otrajā svēršanā salīdzinām abas monētas no smagākā pāra – smagākā no tām ir 4 g. Trešajā svēršanā salīdzina vieglākā pāra monētas – vieglākā no tām ir 1 g. Ceturtajā svēršanā salīdzina atlikušās divas monētas: vieglākā ir 2 g, bet smagākā – 3 g.',
    },
    {
      id: 'ex11',
      grades: [9, 10, 11, 12],
      problem:
        'Četru pēc ārējā izskata vienādu monētu masas veido ģeometrisko progresiju, kas nav konstanta. Atrast smagāko monētu, veicot divas svēršanas uz sviru svariem bez atsvariem!',
      solution:
        'Apzīmējam monētu masas ar $a, aq, aq^2, aq^3$, kur $q > 1$. Pirmajā svēršanā uz katra svaru kausa novietojam divas monētas. Pamatosim, ka smagākā monēta noteikti atradīsies kausā, kas nosveras uz leju. Iespējami trīs gadījumi:\n- $aq^3 + aq^2 > aq + a$, jo $aq^3 > aq$ un $aq^2 > a$;\n- $aq^3 + aq > aq^2 + a$, jo $aq^3 > aq^2$ un $aq > a$;\n- $aq^3 + a > aq + aq^2$, jo ekvivalenti pārveidojot, iegūstam patiesu nevienādību $q^3 - q^2 - q + 1 > 0$ jeb $(q+1)(q-1)^2 > 0$.\n\nTātad smagākā monēta atrodas tajā kausā, kas nosveras uz leju. Otrajā svēršanā salīdzinām abas monētas no šī kausa un atrodam smagāko. Ar divām svēršanām esam atraduši smagāko monētu.',
    },
  ],
}

export const sversanasQuiz = [
  {
    id: 'q1',
    question:
      'Kāda ir galvenā atšķirība starp sviras svariem un elektroniskajiem svariem svēršanas uzdevumos?',
    options: [
      'Sviras svari parāda precīzu masu, elektroniskie – tikai salīdzina',
      'Sviras svari tikai parāda, vai kausi ir līdzsvarā; elektroniskie rāda masu gramos',
      'Sviras svari izmanto atsvarus, elektroniskie – nē',
      'Nav atšķirības',
    ],
    correct: 1,
  },
  {
    id: 'q2',
    question:
      'Cik svēršanas nepieciešamas, lai atrastu viltoto (vieglāko) monētu no 9 vienādām monētām, dalot tās grupās pa 3?',
    options: ['1', '3', '2', '4'],
    correct: 2,
  },
  {
    id: 'q3',
    question: 'Ja no 27 monētām viena ir vieglāka, dalot tās pa 9, cik svēršanas pietiek?',
    options: ['2', '3', '4', '5'],
    correct: 1,
  },
  {
    id: 'q4',
    question:
      'Kāpēc svēršanas uzdevumos monētas bieži dala trīs vienādās grupās (nevis divās)?',
    options: [
      'Jo trīs ir lielāks skaitlis nekā divi',
      'Jo dalīšana trīs grupās ļauj ar vienu svēršanu izslēgt $\\frac{2}{3}$ no monētām, nevis $\\frac{1}{2}$',
      'Jo sviras svariem ir trīs kausi',
      'Jo trīs ir pirmskaitlis',
    ],
    correct: 1,
  },
  {
    id: 'q5',
    question: 'Ja svēršanā abi kausi ir līdzsvarā, kur atrodas viltotā monēta?',
    options: ['Uz kreisā kausa', 'Uz labā kausa', 'Tā, kura netika svērta (palika malā)', 'Nevar noteikt'],
    correct: 2,
  },
  {
    id: 'q6',
    question: 'Cik svēršanas nepieciešamas, lai atrastu vissmagāko akmeni no 16 akmeņiem ar dažādām masām?',
    options: ['8', '16', '15', '12'],
    correct: 2,
  },
  {
    id: 'q7',
    question:
      'Ja no 7 monētām viena ir vieglāka un pirmajā svēršanā (3 pret 3) kausi ir līdzsvarā, kur ir vieglākā monēta?',
    options: ['Uz kreisā kausa', 'Uz labā kausa', 'Tā, kas netika svērta', 'Nevar noteikt ar vienu svēršanu'],
    correct: 2,
  },
  {
    id: 'q8',
    question: 'Cik svēršanas kopā nepieciešamas, lai atrastu gan vissmagāko, gan otro smagāko akmeni no 16 akmeņiem?',
    options: ['16', '20', '18', '15'],
    correct: 2,
  },
  {
    id: 'q9',
    question: 'Četru monētu masas ir ģeometriskā progresijā ar $q > 1$. Pirmajā svēršanā liek pa 2 monētām katrā kausā. Kurā kausā noteikti ir smagākā monēta?',
    options: ['Vieglākajā kausā', 'Smagākajā kausā', 'Nevar noteikt', 'Abos vienādi'],
    correct: 1,
  },
  {
    id: 'q10',
    question: "Kāds ir pareizs spriedums uzdevumā „Kā...?' svēršanas uzdevumos?",
    options: [
      'Pietiek parādīt vienu veidu, kā atrast meklēto',
      'Jāapskata tikai labvēlīgākie gadījumi',
      'Jāapskata visas iespējamās situācijas un jāparāda, kā rīkoties katrā no tām',
      'Jāpierāda, ka meklētais nav atrodams',
    ],
    correct: 2,
  },
]

