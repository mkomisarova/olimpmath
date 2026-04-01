/** Solved examples for topic pirmrezinataji — full text from PDF (seed via updateSolvedExamples). */
export default [
  {
    id: 'ex1',
    problem: 'Vai skaitlis a) $2023$; b) $757$ ir pirmskaitlis?',
    solution:
      '**a)** Nē, nav, jo $2023 = 7 \\cdot 289$.\n\n**b)** Jā, ir. Lai pamatotu, ka skaitlis $757$ ir pirmskaitlis, ir jāpārbauda, vai tas dalās ar pirmskaitļiem $2; 3; 5; 7; 11; 13; 17; 23$ (tālāk nav jāpārbauda, jo $29 \\cdot 29 = 841 > 757$):\n- nedalās ar $2$, jo $757$ ir nepāra skaitlis;\n- nedalās ar $3$, jo tā ciparu summa ir $7 + 5 + 7 = 19$;\n- nedalās ar $5$, jo pēdējais cipars ir $7$;\n- nedalās ar $7$, jo $757 = 700 + 57$;\n- nedalās ar $11$, jo $(7 + 7) - 5 = 9$ (dalāmības pazīme ar $11$);\n- nedalās ar $13$, jo $757 = 58 \\cdot 13 + 3$;\n- nedalās ar $17$, jo $757 = 44 \\cdot 17 + 9$;\n- nedalās ar $23$, jo $757 = 32 \\cdot 23 + 21$.',
  },
  {
    id: 'ex2',
    problem: 'Vai naturāla skaitļa ciparu reizinājums var būt $6930$?',
    solution:
      'Nē, nevar. Sadalām skaitli $6930$ pirmreizinātājos: $6930 = 2 \\cdot 3 \\cdot 3 \\cdot 5 \\cdot 7 \\cdot 11$. Tā kā $11$ ir skaitļa $6930$ pirmreizinātājs, tad meklētajam skaitlim būtu jāsatur cipars $11$, bet $11$ nav cipars.',
  },
  {
    id: 'ex3',
    problem:
      'Vai skaitli $203$ var izteikt kā vismaz divu naturālu skaitļu summu tā, lai arī šo skaitļu reizinājums būtu $203$?',
    solution:
      'Skaitlis $203$ ir izsakāms kā $203 = 7 \\cdot 29$, bet reizinātāju summa ir $7 + 29 = 36 < 203$. Tātad reizinātājam $7 \\cdot 29$ vēl jāpiereizina vajadzīgais skaits vieninieku (reizinājums no tā nemainās). Ievērojam, ka $203 - 36 = 167$, tātad skaitli $203$ atbilstoši uzdevuma prasībām varam izteikt šādi:\n$$203 = 7 \\cdot 29 \\cdot \\underbrace{1 \\cdot 1 \\cdot \\ldots \\cdot 1}_{167\\text{ vieninieki}}$$\nun\n$$203 = 7 + 29 + \\underbrace{1 + 1 + \\ldots + 1}_{167\\text{ vieninieki}}$$',
  },
  {
    id: 'ex4',
    problem:
      'Kāds ir mazākais skaitlis $N$, lai reizinājums $1 \\cdot 2 \\cdot 3 \\cdot 4 \\cdot \\ldots \\cdot N$ dalītos ar $2013$?',
    solution:
      'Mazākais iespējamais $N = 61$. Lai vairāku naturālu skaitļu reizinājums dalītos ar kādu naturālu skaitli $A$, starp reizinātājiem vismaz vienu reizi jābūt visiem skaitļa $A$ pirmreizinātājiem vai skaitļiem, kas dalās ar skaitļa $A$ pirmreizinātājiem.\n\nSkaitļa $2013$ sadalījums pirmreizinātājos ir $2013 = 3 \\cdot 11 \\cdot 61$. Lai reizinājums $1 \\cdot 2 \\cdot 3 \\cdot 4 \\cdot \\ldots \\cdot N$ dalītos ar $2013$, tad $N$ ir jābūt vismaz $61$. Ja $N$ būs mazāks nekā $61$, tad neviens no reizinātājiem nedalīsies ar $61$ (tas ir pirmskaitlis, tātad vairāku citu skaitļu reizinājums arī nevar būt $61$), līdz ar to viss reizinājums nedalīsies ar $2013$. Ja $N = 61$, tad reizinājums $1 \\cdot 2 \\cdot 3 \\cdot 4 \\cdot 5 \\cdot 6 \\cdot 7 \\cdot \\ldots \\cdot 60 \\cdot 61$ dalās ar $2013$, jo $3 \\cdot 11 \\cdot 61 = 2013$ un doto reizinājumu varam pārrakstīt kā $2013 \\cdot 1 \\cdot 2 \\cdot 4 \\cdot 6 \\cdot 7 \\cdot 8 \\cdot 9 \\cdot 10 \\cdot 12 \\cdot \\ldots \\cdot 59 \\cdot 60$, kas dalās ar $2013$.',
  },
  {
    id: 'ex5',
    problem: 'Kādu piecu dažādu naturālu skaitļu reizinājums ir $1020$?',
    solution:
      'Skaitli $1020$ kā piecu dažādu skaitļu reizinājumu var iegūt četros veidos:\n$$1020 = 1 \\cdot 4 \\cdot 3 \\cdot 5 \\cdot 17 = 1 \\cdot 2 \\cdot 6 \\cdot 5 \\cdot 17 = 1 \\cdot 2 \\cdot 3 \\cdot 10 \\cdot 17 = 1 \\cdot 2 \\cdot 3 \\cdot 5 \\cdot 34$$\n\nSadalīsim doto skaitli $1020$ pirmreizinātājos: $1020 = 2 \\cdot 2 \\cdot 3 \\cdot 5 \\cdot 17$. Tas sastāv no pieciem reizinātājiem un divi no tiem ir vienādi ($2$ un $2$), kas neatbilst uzdevuma nosacījumiem. Tā kā pirmskaitļus sīkāk reizinātājos sadalīt nevar, tad, lai iegūtu $1020$ sadalījumu piecu dažādu naturālo skaitļu reizinājumā, jāatrod vēl kāds naturāls skaitlis, ar kuru reizinot atrasto reizinājumu, tā vērtība nemainīsies. Tāds skaitlis ir $1$.\n\nSkaitli $1020$ esam izteikuši kā sešu naturālu skaitļu reizinājumu: $1020 = 1 \\cdot 2 \\cdot 2 \\cdot 3 \\cdot 5 \\cdot 17$. Tā kā divi reizinātāji ir skaitlis $2$, tad viens no tiem ir jāpiereizina kādam no pārējiem skaitļiem. Tā kā reizinot $2$ ar $1$, iegūsim to pašu sadalījumu pirmreizinātājos, tad šis gadījums neder. Atliek vēl $4$ iespējas:\n- $2$ reizina ar $2$, iegūst $1020 = 1 \\cdot 4 \\cdot 3 \\cdot 5 \\cdot 17$;\n- $2$ reizina ar $3$, iegūst $1020 = 1 \\cdot 2 \\cdot 6 \\cdot 5 \\cdot 17$;\n- $2$ reizina ar $5$, iegūst $1020 = 1 \\cdot 2 \\cdot 3 \\cdot 10 \\cdot 17$;\n- $2$ reizina ar $17$, iegūst $1020 = 1 \\cdot 2 \\cdot 3 \\cdot 5 \\cdot 34$.\n\nEsam apskatījuši visas iespējas, tātad nav citu veidu, kā skaitli $1020$ sadalīt piecos dažādos naturālos reizinātājos.',
  },
  {
    id: 'ex6',
    problem:
      'Kādus sešciparu skaitļus, kuriem visi seši cipari ir vienādi, var izteikt kā sešu dažādu pirmskaitļu reizinājumu?',
    solution:
      'Ir divi skaitļi, kas atbilst uzdevuma prasībām: $222222 = 2 \\cdot 3 \\cdot 7 \\cdot 11 \\cdot 13 \\cdot 37$ un $555555 = 3 \\cdot 5 \\cdot 7 \\cdot 11 \\cdot 13 \\cdot 37$.\n\nPamatosim, ka šie ir vienīgie skaitļi, kas atbilst uzdevuma prasībām. Skaitli, kas sastāv no sešiem vienādiem cipariem $a$, var izteikt kā $a \\cdot 111111$. Sadalot šo skaitli reizinātājos, iegūstam, ka\n$$a \\cdot 111111 = a \\cdot 3 \\cdot 7 \\cdot 11 \\cdot 13 \\cdot 37.$$\nŠim skaitlim jau ir $5$ dažādi pirmreizinātāji, tātad reizinātājam $a$ ir jābūt viencipara pirmskaitlim, kas atšķiras no pārējiem reizinātājiem. Vienīgie šādi skaitļi ir $2$ un $5$. Līdz ar to iegūstam skaitļus: $222222 = 2 \\cdot 3 \\cdot 7 \\cdot 11 \\cdot 13 \\cdot 37$ un $555555 = 3 \\cdot 5 \\cdot 7 \\cdot 11 \\cdot 13 \\cdot 37$.',
  },
  {
    id: 'ex7',
    problem:
      'Katru naturālu skaitli vienā vienīgā veidā var sadalīt pirmskaitļu reizinājumā. Par skaitļa **garumu** sauksim tā pirmreizinātāju skaitu (piemēram, skaitļa $330 = 2 \\cdot 3 \\cdot 5 \\cdot 11$ garums ir $4$, skaitļa $25 = 5 \\cdot 5 = 5^2$ garums ir $2$). Kāds lielākais garums var būt četrciparu skaitlim? Atrodi visus četrciparu skaitļus ar lielāko garumu!',
    solution:
      'Skaitlim $8192 = 2^{13}$ garums ir $13$. Ja kādu no pirmreizinātājiem $2$ aizstāsim ar $3$ vai lielāku skaitli, reizinājums būs vismaz $2^{12} \\cdot 3 = 12288$ — vismaz piecciparu skaitlis. Arī $2^{14} > 9999$. Tātad četrciparu skaitlim lielākais garums ir $13$, un ir tikai viens tāds skaitlis, tas ir skaitlis $8192$.',
  },
  {
    id: 'ex8',
    problem:
      'Ar kādu mazāko naturālo skaitli jāreizina skaitlis $315$, lai reizinājumā iegūtu skaitli, kas ir a) kāda naturāla skaitļa kvadrāts; b) kāda naturāla skaitļa kubs?',
    solution:
      'Vispirms sadalām skaitli $315$ pirmreizinātājos: $315 = 3 \\cdot 3 \\cdot 5 \\cdot 7$.\n\n**a)** Mazākais skaitlis ir $35$. Ja skaitlis ir naturāla skaitļa kvadrāts, tad visi tajā ietilpstošie pirmskaitļi sastopami pāra skaita reižu. Tātad skaitlis $315$ vēl jāreizina vismaz ar vienu skaitli $5$ un vismaz vienu skaitli $7$; tātad mazākais skaitlis, ar kuru reizinot skaitli $315$, iegūsim naturāla skaitļa kvadrātu, ir $5 \\cdot 7 = 35$, un iegūtais reizinājums ir $11025 = 105 \\cdot 105$.\n\n**b)** Mazākais skaitlis ir $3675$. Ja skaitlis ir naturāla skaitļa kubs, tad visi tajā ietilpstošie pirmskaitļi sastopami $3, 6, 9, \\ldots$ reizes. Tātad mazākais skaitlis, ar kuru reizinot $315$, iegūsim šādu situāciju, ir $3 \\cdot 5 \\cdot 5 \\cdot 7 \\cdot 7 = 3675$, un iegūtais reizinājums ir $1157625 = 105 \\cdot 105 \\cdot 105$.',
  },
  {
    id: 'ex9',
    problem:
      'Pierādīt, ka skaitlis $1234567891011\\ldots175176$ (pēc kārtas uzrakstīti visi naturālie skaitļi no $1$ līdz $176$) nav naturāla skaitļa kvadrāts!',
    solution:
      'Ievērojam, ka dotais skaitlis:\n- dalās ar $8$, jo skaitļa pēdējo trīs ciparu veidotais skaitlis $176 = 160 + 16$ dalās ar $8$ (dalāmības pazīme ar $8$);\n- nedalās ar $16$, jo skaitļa pēdējo četru ciparu veidotais skaitlis $5176 = 5000 + 176 = 5 \\cdot 8 \\cdot 125 + 16 \\cdot 11$ nedalās ar $16$ (dalāmības pazīme ar $16$).\n\nTātad dotā skaitļa sadalījumā pirmreizinātājos pirmskaitlis $2$ ietilpst ar nepāra pakāpi $3$. Taču, ja skaitlis ir naturāla skaitļa kvadrāts, tad katrs pirmskaitlis tā sadalījumā pirmreizinātājos ietilpst ar pāra pakāpi. Tātad dotais skaitlis nav naturāla skaitļa kvadrāts.',
  },
  {
    id: 'ex10',
    problem:
      'Dots, ka $x$ un $y$ ir tādi naturāli skaitļi, ka $x \\cdot y = 10^{12}$. Vai var būt, ka ne $x$, ne $y$ savā pierakstā nesatur ciparu $0$?',
    solution:
      'Pamatosim, ka tas nav iespējams.\n\nIzmantojot pakāpju īpašības, iegūstam, ka $x \\cdot y = 10^{12} = (2 \\cdot 5)^{12} = 2^{12} \\cdot 5^{12}$.\n\nSkatāmies, kāds var būt $x$ un $y$. Tā kā $x$ un $y$ reizinājums ir pakāpju reizinājumi, kur bāzes ir pirmskaitļi (tātad tos sīkāk pirmreizinātājos sadalīt nevar), tad gan $x$, gan $y$ ir izsakāmi kā $2$ un $5$ pakāpju reizinājums.\n\nJa $x$ vai $y$ satur gan reizinātāju $2$, gan reizinātāju $5$, tad šis skaitlis dalās ar $10$, tātad tas beidzas ar $0$. Tātad šis gadījums neder.\n\nAtliek, ka viens no skaitļiem ir $2^{12}$, bet otrs ir $5^{12}$. Bet $2^{12} = 4096$. Tātad arī šis gadījums neder.\n\nCitu veidu, kā izvēlēties $x$ un $y$, nav. Līdz ar to esam pamatojuši, ka nevar būt, ka neviens no skaitļiem nesatur ciparu $0$.',
  },
  {
    id: 'ex11',
    problem:
      'Cik starp pirmajiem $2014$ naturālajiem skaitļiem ir tādu skaitļu $x$, ka skaitlis $x(x + 1)(x + 2)$ dalās ar $87$?',
    solution:
      'Ievērojam, ka $87 = 29 \\cdot 3$. Tā kā $29$ ir pirmskaitlis, tad vienam no skaitļiem $x$, $x + 1$ vai $x + 2$ jādalās ar $29$. No trīs pēc kārtas sekojošiem naturāliem skaitļiem viens noteikti dalās ar $3$, tāpēc dotais reizinājums vienmēr dalās ar $3$.\n\nNo $1$ līdz $2016$ (2016 ir lielākā iespējamā $x + 2$ vērtība) ir $69$ skaitļi, kas dalās ar $29$ (lielākais no tiem ir $2001 = 69 \\cdot 29$). Līdz ar to:\n- $69$ veidos var izvēlēties tādu $x$, kas dalās ar $29$;\n- $69$ veidos var izvēlēties tādu $x$, ka $x + 1$ dalās ar $29$;\n- $69$ veidos var izvēlēties tādu $x$, ka $x + 2$ dalās ar $29$.\n\nTātad pavisam ir $69 + 69 + 69 = 207$ tādi skaitļi $x$, ka $x(x + 1)(x + 2)$ dalās ar $87$.',
  },
  {
    id: 'ex12',
    problem: 'Vai skaitlis $2^{28} - 3^{14}$ ir pirmskaitlis?',
    solution:
      'Nē, tas nav pirmskaitlis.\n\nIzmantojot kvadrātu starpības formulu $a^2 - b^2 = (a - b)(a + b)$, doto skaitli var sadalīt reizinātājos:\n$$2^{28} - 3^{14} = (2^{14} - 3^7)(2^{14} + 3^7).$$\nTātad tas nav pirmskaitlis.',
  },
  {
    id: 'ex13',
    problem: 'Vai skaitlis $2^{16} + 2^9 \\cdot 5^{17} + 5^{34}$ ir pirmskaitlis?',
    solution:
      'Nē, tas nav pirmskaitlis.\n\nIzmantojot summas kvadrāta formulu $(a + b)^2 = a^2 + 2ab + b^2$, doto skaitli var sadalīt reizinātājos:\n$$2^{16} + 2^9 \\cdot 5^{17} + 5^{34} = (2^8)^2 + 2 \\cdot 2^8 \\cdot 5^{17} + (5^{17})^2 = (2^8 + 5^{17})^2.$$\nTātad tas nav pirmskaitlis.',
  },
  {
    id: 'ex14',
    problem: 'Vai skaitlis $3999991$ ir pirmskaitlis?',
    solution:
      'Nē, tas nav pirmskaitlis.\n\nIzmantot kvadrātu starpības formulu, doto skaitli var sadalīt reizinātājos:\n$$3999991 = 4000000 - 9 = 2000^2 - 3^2 = (2000 - 3)(2000 + 3) = 1997 \\cdot 2003.$$\nTātad tas nav pirmskaitlis.',
  },
  {
    id: 'ex15',
    problem: 'Atrisināt vienādojumu $x^2 - y^2 = 61$ naturālos skaitļos!',
    solution:
      'Pārveidojam vienādojumu formā $(x - y)(x + y) = 61$. Tā kā $x$ un $y$ ir naturāli skaitļi (arī $x + y$ ir naturāls skaitlis) un $61$ ir pirmskaitlis, tad iespējami divi gadījumi:\n- $x - y = 1$ un $x + y = 61$, no kā iegūstam, ka $x = 31$ un $y = 30$;\n- $x - y = 61$ un $x + y = 1$, no kā iegūstam, ka $x = 31$ un $y = -30$, bet šis gadījums neder, jo $y$ nav naturāls skaitlis.',
  },
  {
    id: 'ex16',
    problem: 'Atrisināt vienādojumu $xy + x + y = 5$ naturālos skaitļos!',
    solution:
      'Pārveidojam vienādojumu formā:\n$$xy + x + y + 1 = 5 + 1$$\n$$x(y + 1) + (y + 1) = 6$$\n$$(y + 1)(x + 1) = 6.$$\nTā kā $x$ un $y$ ir naturāli skaitļi (arī $x + 1$ un $y + 1$ ir naturāli skaitļi) un $6 = 1 \\cdot 6 = 2 \\cdot 3$, tad iespējami četri gadījumi:\n- $x + 1 = 1$ un $y + 1 = 6$, no kā iegūstam, ka $x = 0$ un $y = 5$ — neder, jo $0$ nav naturāls skaitlis;\n- $x + 1 = 6$ un $y + 1 = 1$, no kā iegūstam, ka $x = 5$ un $y = 0$ — neder, jo $0$ nav naturāls skaitlis;\n- $x + 1 = 2$ un $y + 1 = 3$, no kā iegūstam, ka $x = 1$ un $y = 2$;\n- $x + 1 = 3$ un $y + 1 = 2$, no kā iegūstam, ka $x = 2$ un $y = 1$.\n\nLīdz ar to vienādojumam ir divi atrisinājumi $x = 1, y = 2$ un $x = 2, y = 1$.',
  },
  {
    id: 'ex17',
    problem:
      'Ar cik nullēm beidzas reizinājums $10 \\cdot 11 \\cdot 12 \\cdot \\ldots \\cdot 29 \\cdot 30$?',
    solution:
      'Ievērojam, ka reizinājuma pēdējais cipars būs $0$, ja, reizinot divus skaitļus, tajos būs reizinātājs $5$ un $2$. Dotais reizinājums satur sešus pirmreizinātājus $5$ (reizinātājos $10; 15; 20; 25; 30$) un vairāk nekā sešus pirmreizinātājus $2$. Tātad reizinājums beidzas ar sešām nullēm.',
  },
  {
    id: 'ex18',
    problem:
      'Kāds ir mazākais naturālais skaitlis, kuru, reizinot ar $2$, iegūst naturāla skaitļa kvadrātu, bet, reizinot ar $3$, iegūst naturāla skaitļa kubu?',
    solution:
      'Meklējamo skaitli uzrakstīsim formā $n = 2^a \\cdot 3^b \\cdot P$, kur $a$ un $b$ ir veseli nenegatīvi skaitļi, $P$ ir naturāls skaitlis, kas nedalās ne ar $2$, ne $3$.\n\nIzmantojot pakāpju īpašību $a^{m+n} = a^m \\cdot a^n$, iegūstam $2n = 2^{a+1} \\cdot 3^b \\cdot P$ ir naturāla skaitļa kvadrāts, tātad $a + 1$ un $b$ ir pāra skaitļi. Skaitlis $3n = 2^a \\cdot 3^{b+1} \\cdot P$ ir naturāla skaitļa kubs, tātad $a$ un $b + 1$ dalās ar $3$. Mazākie $a$ un $b$, kas apmierina šos nosacījumus, ir $a = 3$ un $b = 2$. Ņemot $P = 1$ (mazāko iespējamo $P$ vērtību), iegūstam $n = 2^3 \\cdot 3^2 = 72$. Pārbaudām, ka $2 \\cdot 72 = 144 = 12^2$ un $3 \\cdot 72 = 216 = 6^3$.\n\nTātad mazākais naturālais skaitlis ar minēto īpašību ir $72$.',
  },
  {
    id: 'ex19',
    problem: 'Vai ir tāds skaitlis, kuram ir tieši $2025$ dažādi naturāli dalītāji?',
    solution:
      'Jā, eksistē, piemēram, skaitlis $2^{2024}$. Skaitļa dalītāji ir $1; 2^1; 2^2; 2^3; 2^4; \\ldots; 2^{2023}; 2^{2024}$.',
  },
  {
    id: 'ex20',
    problem: 'Kāds ir mazākais naturālais skaitlis, kuram ir tieši $12$ dažādi naturāli dalītāji?',
    solution:
      'Ievērojam, ka $12 = 12 \\cdot 1 = 6 \\cdot 2 = 4 \\cdot 3 = 3 \\cdot 2 \\cdot 2$.\n\nNo skaitļa dalītāju skaita formulas $d = (k_1 + 1) \\cdot (k_2 + 1) \\cdot \\ldots \\cdot (k_m + 1)$ izriet, ka skaitli, kuram ir tieši $12$ dalītāji, var uzrakstīt vienā no sekojošām formām:\n$$p_1^{11}, \\quad p_1^5 \\cdot p_2, \\quad p_1^3 \\cdot p_2^2, \\quad p_1^2 \\cdot p_2 \\cdot p_3.$$\nKatrā veidā mazāko skaitli iegūsim, ja ņemsim $p_1 = 2$, $p_2 = 3$, $p_3 = 5$. Attiecīgi iegūstam skaitļus:\n$$2^{11} = 2048, \\quad 2^5 \\cdot 3 = 96, \\quad 2^3 \\cdot 3^2 = 72, \\quad 2^2 \\cdot 3 \\cdot 5 = 60.$$\nTātad mazākais skaitlis, kuram ir tieši $12$ dažādi naturāli dalītāji, ir $60$.',
  },
  {
    id: 'ex21',
    problem:
      'Pierādīt, ka ir bezgalīgi daudz tādu veselu skaitļu $a$, $b$, $c$ un $d$ četrinieku $(a; b; c; d)$, ka $24^a \\cdot 25^b \\cdot 27^c \\cdot 30^d = 1$.',
    solution:
      'Sadalām skaitļus $24$, $25$, $27$ un $30$ pirmreizinātājos:\n$$24 = 2^3 \\cdot 3, \\quad 25 = 5^2, \\quad 27 = 3^3, \\quad 30 = 2 \\cdot 3 \\cdot 5.$$\nTad, izmantojot pakāpju īpašības $(a^m)^n = a^{mn}$ un $(a \\cdot b)^n = a^n \\cdot b^n$, doto vienādību varam pārrakstīt kā\n$$2^{3a} \\cdot 3^a \\cdot 5^{2b} \\cdot 3^{3c} \\cdot 2^d \\cdot 3^d \\cdot 5^d = 1$$\n$$2^{3a+d} \\cdot 3^{a+3c+d} \\cdot 5^{2b+d} = 2^0 \\cdot 3^0 \\cdot 5^0.$$\nNo šejienes iegūstam lineāru vienādojumu sistēmu:\n$$\\begin{cases} 3a + d = 0 \\\\ a + 3c + d = 0 \\\\ 2b + d = 0 \\end{cases}$$\nNo pirmā vienādojuma izsakot $d = -3a$ un ievietojot otrajā un trešajā vienādojumā, iegūstam\n$$\\begin{cases} d = -3a \\\\ 3c = 2a \\\\ 2b = 3a \\end{cases}$$\nNo iegūtās sistēmas otrā vienādojuma redzams, ka $2a$ dalās ar $3$, tātad $a$ dalās ar $3$; no trešā vienādojuma redzams, ka $3a$ dalās ar $2$, tātad $a$ dalās ar $2$. Tātad $a = 6k$, kur $k$ ir vesels skaitlis. Tad iegūto sistēmu varam pārrakstīt šādi:\n$$b = 9k, \\quad c = 4k, \\quad d = -18k.$$\nEsam atraduši, ka $a = 6k$, $b = 9k$, $c = 4k$, $d = -18k$, kur $k$ ir vesels skaitlis. Tā kā $k$ var būt jebkurš vesels skaitlis, tad der visi skaitļu četrinieki $(6k; 9k; 4k; -18k)$ — tātad ir bezgalīgi daudz tādu četrinieku.',
  },
  {
    id: 'ex22',
    problem:
      'Zināms, ka naturālam skaitlim $A$ ir tieši $62$ naturāli dalītāji. Pierādīt, ka $A$ nedalās ar $36$.',
    solution:
      'Pieņemsim pretējo, ka $A$ dalās ar $36$. Tā kā $36 = 2^2 \\cdot 3^2$, tad skaitli $A$ var uzrakstīt formā $A = 2^k \\cdot 3^m \\cdot p_1^{s_1} \\cdots p_r^{s_r}$, kur $k \\geq 2$ un $m \\geq 2$. Skaitlim $A$ ir $(k + 1)(m + 1)(s_1 + 1)(s_2 + 1) \\cdots (s_r + 1)$ dalītāji; turklāt $k + 1 \\geq 3$ un $m + 1 \\geq 3$. Taču skaitli $62 = 31 \\cdot 2$ nevar sadalīt reizinājumā, kurā divi reizinātāji ir lielāki nekā $2$. Tātad pieņēmums ir aplams. Līdz ar to esam pierādījuši, ka skaitlis $A$ nedalās ar $36$.',
  },
  {
    id: 'ex23',
    problem:
      'Skaitļa $A$ naturālo dalītāju skaits ir $d$. Ar cik dažādiem pirmskaitļiem var dalīties skaitlis $A$, ja zināms, ka $d$ ir pirmskaitlis?',
    solution:
      'Uzrakstām skaitļa $A$ sadalījumu pirmreizinātājos:\n$$A = p_1^{k_1} p_2^{k_2} \\cdots p_m^{k_m},$$\nkur $k_1, k_2, \\ldots, k_m$ ir naturāli skaitļi un $p_1, p_2, \\ldots, p_m$ ir dažādi pirmskaitļi.\n\nSkaitļa $A$ dalītāju skaits $d = (k_1 + 1)(k_2 + 1) \\cdots (k_m + 1)$. Tā kā $k_j + 1 \\geq 2$, tad secinām, ka $m = 1$, pretējā gadījumā $d$ būtu divu tādu naturālu skaitļu reizinājums, kas abi ir lielāki nekā $1$, līdz ar to $d$ nebūtu pirmskaitlis.\n\nTātad $A = p^n$, kur $p$ ir pirmskaitlis, turklāt $n$ ir naturāls skaitlis (nevar būt $n = 0$, jo tad $d = 1$ nav pirmskaitlis). Tātad ir tikai viens pirmskaitlis, ar kuru dalās $A$.',
  },
  {
    id: 'ex24',
    problem:
      'Dots nepāra skaitlis $A$, kuram ir nepāra skaits naturālu dalītāju. Pierādīt, ka, $A$ dalot ar $4$, iegūst atlikumu $1$.',
    solution:
      'Uzrakstām skaitļa $A$ sadalījumu pirmreizinātājos:\n$$A = p_1^{k_1} p_2^{k_2} \\cdots p_r^{k_r}.$$\nSkaitļa $A$ dalītāju skaits ir $(k_1 + 1)(k_2 + 1) \\cdots (k_r + 1)$. Lai $A$ būtu nepāra skaits dalītāju, nepieciešams, lai katrs no reizinātājiem $k_j + 1$ būtu nepāra skaitlis. Secinām, ka $k_j$ ir jābūt pāra skaitļiem, tas ir, $k_j = 2l_j$, kur $j = 1, 2, \\ldots, r$, un līdz ar to $A$ ir naturāla skaitļa kvadrāts:\n$$A = p_1^{2l_1} p_2^{2l_2} \\cdots p_r^{2l_r} = (p_1^{l_1} p_2^{l_2} \\cdots p_r^{l_r})^2.$$\nTātad $A = n^2$, kur $n = p_1^{l_1} p_2^{l_2} \\cdots p_r^{l_r}$ ir naturāls skaitlis.\n\nTurklāt, tā kā $A$ ir nepāra skaitlis, tad arī $n$ ir nepāra skaitlis.\n\nAtliek ievērot, ka nepāra skaitļa kvadrāts, dalot ar $4$, dod atlikumu $1$: ja $n = 2m + 1$, tad\n$$n^2 = (2m + 1)^2 = 4m^2 + 4m + 1 = 4(m^2 + m) + 1$$\ndod atlikumu $1$, dalot ar $4$.',
  },
]
