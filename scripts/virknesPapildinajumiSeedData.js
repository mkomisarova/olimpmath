/** Append to Firestore topic virknes: rekurentas virknes theory + examples */

export const virknesNewSections = [
  {
    title: 'Rekurentas virknes',
    content: `Viens no virkņu uzdošanas veidiem ir definēt to rekurenti, tas ir, norādot virknes pirmo locekli vai dažus pirmos locekļus (sākuma nosacījumus) un formulu, ar kuras palīdzību jebkuru virknes locekli var iegūt no iepriekšējā vai dažiem iepriekšējiem virknes locekļiem. Vienkāršākie šādu rekurentu virkņu piemēri ir aritmētiskā progresija ($a_{n+1} = a_n + d$) un ģeometriskā progresija ($b_{n+1} = b_n \\cdot q$).

Cits tipisks un labi pazīstams rekurentas virknes piemērs ir Fibonači skaitļu virkne $F_n$, kuru definē ar sakarībām $F_1 = F_2 = 1$ un $F_{n+2} = F_n + F_{n+1}$, tas ir, virknes pirmie divi locekļi ir vienādi ar 1, bet katrs nākamais ir iegūstams kā divu iepriekšējo locekļu summa. Aprēķinot arī nākamos virknes locekļus, iegūstam virkni $1; 1; 2; 3; 5; 8; 13; 21; \\ldots$

No otras puses, lai aprēķinātu šādā veidā definētas virknes, teiksim, 2018. locekli, būtu vispirms jāaprēķina visi iepriekšējie virknes locekļi. Tādēļ reizēm ir izdevīgi rekurenti definētai virknei atrast vispārīgā locekļa formulu, kas būtu atkarīga tikai no locekļa kārtas numura. Reizēm tas ir vienkārši (piemēram, ja virkne ir rekurenti definēta ar $a_1 = 2$ un $a_n = 2a_{n-1}$, tad virknes vispārīgā locekļa formula ir $a_n = 2^n$), reizēm – kā Fibonači virknes gadījumā – tas ir grūtāk, taču iespējami.

Ir uzdevumi, kurus iespējams atrisināt, ja izdodas parādīt, ka uzdevuma atbilde ir rekurentas virknes loceklis, turklāt šai virknei var atrast gan rekurences sakarību, gan sākuma nosacījumus. Bieži vien tie ir uzdevumi, kuros tiek prasīts noteikt kādu objektu skaitu, kas atkarīgi no parametra $n$, turklāt:
- ir iespējams parādīt, kā šos objektus var iegūt no tāda paša veida objektiem, taču ar mazāku parametra $n$ vērtību;
- ja parametra $n$ vērtība ir maza (piemēram, $n = 0$, $n = 1$ vai $n = 2$), tad ir viegli saskaitīt vajadzīgā veida objektus.

Dažkārt uzdevumos ir izdevīgi apskatāmo problēmu sadalīt vairākās „apakšproblēmās", tas ir, meklējamos objektus sadalīt vairākos tipos tā, lai viena tipa objektu skaitu būtu viegli aprakstīt ar rekurences sakarībām.`,
  },
]

export const virknesNewExamples = [
  {
    id: 'ex_rek1',
    grades: [9, 10, 11, 12],
    problem:
      'Cik dažādos veidos kā divnieku un trijnieku summu var izteikt skaitli a) 14; b) 22? Veidi, kas atšķiras ar saskaitāmo secību, ir uzskatāmi par dažādiem. Piemēram, skaitli 8 var izteikt četros dažādos veidos: $8 = 2+2+2+2 = 2+3+3 = 3+2+3 = 3+3+2$.',
    solution:
      'Ar $a_n$ apzīmējam, cik dažādos veidos skaitli $n$ var izteikt kā divnieku un trijnieku summu. Mēģināsim pakāpeniski noskaidrot šīs vērtības maziem $n$:\n\n| $n$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |\n|---|---|---|---|---|---|---|---|---|---|\n| $a_n$ | 1 | 1 | 1 | 2 | 2 | 3 | 4 | 5 | 7 |\n\nPamatosim, ka katrs skaitlis, sākot ar $n = 5$, ir to divu skaitļu summa, kas atrodas divas un trīs pozīcijas pirms tā: $a_n = a_{n-3} + a_{n-2}$, kur $n \\geq 5$.\n\nSkaitli $n$ var uzrakstīt kā divnieku un trijnieku summu $a_n$ dažādos veidos. Iespējami divi dažādi gadījumi:\n- Ja pēdējais saskaitāmais ir 3, tad pārējo saskaitāmo summa ir $(n - 3)$, un šādu summu skaits ir $a_{n-3}$.\n- Ja pēdējais saskaitāmais ir 2, tad pārējo saskaitāmo summa ir $(n - 2)$, un šādu summu skaits ir $a_{n-2}$.\n\nTā kā katra summa atšķiras ar pēdējo saskaitāmo, tad formula $a_n = a_{n-3} + a_{n-2}$ ir patiesa. Izmantojot rekurences formulu, aizpildām tabulu līdz $n = 22$:\n\n| $n$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | $\\cdots$ | 22 |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| $a_n$ | 1 | 1 | 1 | 2 | 2 | 3 | 4 | 5 | 7 | 9 | 12 | 16 | 21 | $\\cdots$ | 200 |\n\nTātad a) skaitli 14 kā divnieku un trijnieku summu var izteikt **21 veidā**; b) skaitli 22 var izteikt **200 veidos**.',
  },
  {
    id: 'ex_rek2',
    grades: [9, 10, 11, 12],
    problem:
      'No mājām līdz ieejai dzīvoklī ir 12 pakāpieni. Ar vienu soli var pārkāpt 1, 2 vai 3 pakāpienus. Cik dažādos veidos var uzkāpt līdz dzīvoklim no ieejas? (Veidus uzskata par atšķirīgiem, ja atšķiras izdarīto soļu secība, piemēram, kāpt 2; 3; 1 pakāpienus un kāpt 1; 2; 3 pakāpienus ir divi atšķirīgi veidi.)',
    solution:
      'Ar $a_n$ apzīmējam, cik dažādos veidos var nokļūt uz $n$-tā pakāpiena. Iespējami trīs atšķirīgi gadījumi:\n- uz $n$-tā pakāpiena ar vienu soli var nokļūt no $(n-1)$-ā pakāpiena, uz kura var nokļūt $a_{n-1}$ veidos;\n- uz $n$-tā pakāpiena ar vienu soli var nokļūt no $(n-2)$-ā pakāpiena, uz kura var nokļūt $a_{n-2}$ veidos;\n- uz $n$-tā pakāpiena ar vienu soli var nokļūt no $(n-3)$-ā pakāpiena, uz kura var nokļūt $a_{n-3}$ veidos.\n\nCitu variantu nav. Tātad $a_n = a_{n-1} + a_{n-2} + a_{n-3}$. Izmantojot šo sakarību un sākuma vērtības $a_1 = 1$, $a_2 = 2$, $a_3 = 4$:\n\n| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| $a_n$ | 1 | 2 | 4 | 7 | 13 | 24 | 44 | 81 | 149 | 274 | 504 | 927 |\n\nLīdz ar to ir **927 atšķirīgi veidi** uzkāpt līdz dzīvoklim no ieejas.',
  },
  {
    id: 'ex_rek3',
    grades: [9, 10, 11, 12],
    problem:
      'Rindā salikti 10 krēsli, uz katra no tiem sēž pa skolēnam. Skolēniem vienu reizi atļauts piecelties un apsēsties citā secībā, pie tam katrs drīkst apsēsties vai nu uz tā paša krēsla, vai uz cita krēsla tieši blakus šim krēslam. Cik dažādi skolēnu izvietojumi iespējami pēc pārsēšanās?',
    solution:
      'Ar $a_n$ apzīmējam dažādos iespējamos $n$ skolēnu izvietojumus pēc pārsēšanās. Ievērojam, ka $a_1 = 1$ un $a_2 = 2$.\n\nApskatām $n$ skolēnus. Visas pārsēšanās iedalās divās grupās:\n- Pirmais skolēns paliek uz vietas. Tad pārsēžas tikai atlikušie $(n-1)$ skolēni un šādu dažādo izvietojumu skaits ir $a_{n-1}$.\n- Pirmais skolēns pāriet uz otro krēslu. Tad uz pirmo krēslu pāriet skolēns no otrā krēsla. Pārējie $(n-2)$ skolēni pārsēžas „savā starpā" un šādu dažādo izvietojumu skaits ir $a_{n-2}$.\n\nTātad $a_n = a_{n-1} + a_{n-2}$. Izmantojot sākuma nosacījumus un iegūto formulu:\n\n| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |\n|---|---|---|---|---|---|---|---|---|---|---|\n| $a_n$ | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 | 89 |\n\nLīdz ar to iespējami **89 dažādi skolēnu izvietojumi**.',
  },
  {
    id: 'ex_rek4',
    grades: [9, 10, 11, 12],
    problem:
      'Apskatām skaitļus, kas satur tikai ciparus 1, 2, 3 un kuros cipari 1 un 3 neatrodas blakus. Cik ir desmitciparu skaitļu, kas atbilst uzdevuma nosacījumiem?',
    solution:
      'Apskatīsim trīs rekurentas skaitļu virknes. Apzīmējam:\n- $v_n$ — meklēto $n$-ciparu skaitļu skaits, kuru pēdējais cipars ir 1;\n- $d_n$ — meklēto $n$-ciparu skaitļu skaits, kuru pēdējais cipars ir 2;\n- $t_n$ — meklēto $n$-ciparu skaitļu skaits, kuru pēdējais cipars ir 3.\n\nIevērojam, ka $v_1 = d_1 = t_1 = 1$ un:\n- $v_n = v_{n-1} + d_{n-1}$ (beigās pierakstot 1, drīkst sekot tikai 1 vai 2);\n- $d_n = v_{n-1} + d_{n-1} + t_{n-1}$ (beigās pierakstot 2, drīkst sekot 1, 2 vai 3);\n- $t_n = d_{n-1} + t_{n-1}$ (beigās pierakstot 3, drīkst sekot tikai 2 vai 3).\n\nTātad meklēto $n$-ciparu skaitļu skaits ir $a_n = v_n + d_n + t_n$. Tā kā $d_n = a_{n-1}$, tad iegūstam $a_n = 2a_{n-1} + a_{n-2}$.\n\nTā kā $a_1 = 3$ un $a_2 = 7$ (derīgie divciparu skaitļi ir 11, 12, 21, 22, 23, 32, 33):\n\n| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |\n|---|---|---|---|---|---|---|---|---|---|---|\n| $a_n$ | 3 | 7 | 17 | 41 | 99 | 239 | 577 | 1393 | 3363 | 8119 |\n\nTātad pavisam ir **8119 desmitciparu skaitļi**, kas apmierina uzdevuma nosacījumus.',
  },
]
