import admin from 'firebase-admin'
import serviceAccount from './serviceAccount.json' with { type: 'json' }
const pirmSolvedExamples = [
  {
    id: "ex1",
    problem: "Vai skaitlis a) $2023$; b) $757$ ir pirmskaitlis?",
    solution: "**a)** Nē. $2023 = 7 \\cdot 289$.\n\n**b)** Jā. Jāpārbauda dalāmība ar $2; 3; 5; 7; 11; 13; 17; 23$ (jo $29^2 = 841 > 757$):\n- nedalās ar $2$ (nepāra skaitlis)\n- nedalās ar $3$ (ciparu summa $7+5+7=19$)\n- nedalās ar $5$ (pēdējais cipars $7$)\n- nedalās ar $7$: $757 = 700 + 57$\n- nedalās ar $11$: $(7+7)-5=9$\n- nedalās ar $13$: $757 = 58 \\cdot 13 + 3$\n- nedalās ar $17$: $757 = 44 \\cdot 17 + 9$\n- nedalās ar $23$: $757 = 32 \\cdot 23 + 21$\n\nTātad $757$ ir pirmskaitlis."
  },
  {
    id: "ex2",
    problem: "Vai naturāla skaitļa ciparu reizinājums var būt $6930$?",
    solution: "Nē. Sadalām: $6930 = 2 \\cdot 3 \\cdot 3 \\cdot 5 \\cdot 7 \\cdot 11$. Tā kā $11$ ir pirmreizinātājs, meklētajam skaitlim būtu jāsatur cipars $11$, bet $11$ nav cipars."
  },
  {
    id: "ex3",
    problem: "Vai skaitli $203$ var izteikt kā vismaz divu naturālu skaitļu summu tā, lai arī šo skaitļu reizinājums būtu $203$?",
    solution: "$203 = 7 \\cdot 29$, bet $7 + 29 = 36 < 203$. Reizinājumam jāpievieno $203 - 36 = 167$ vieninieki:\n$$203 = 7 \\cdot 29 \\cdot \\underbrace{1 \\cdot 1 \\cdots 1}_{167} \\quad \\text{un} \\quad 203 = 7 + 29 + \\underbrace{1 + 1 + \\cdots + 1}_{167}$$"
  },
  {
    id: "ex4",
    problem: "Kāds ir mazākais skaitlis $N$, lai reizinājums $1 \\cdot 2 \\cdot 3 \\cdots N$ dalītos ar $2013$?",
    solution: "$2013 = 3 \\cdot 11 \\cdot 61$. Lielākais pirmreizinātājs ir $61$, tāpēc $N \\geq 61$. Ja $N = 61$, reizinājumā ietilpst $3$, $11$ un $61$. Tātad mazākais $N = \\mathbf{61}$."
  },
  {
    id: "ex5",
    problem: "Par skaitļa **garumu** sauksim tā pirmreizinātāju skaitu. Kāds lielākais garums var būt četrciparu skaitlim? Atrodi visus šādus skaitļus!",
    solution: "Skaitlim $8192 = 2^{13}$ garums ir $13$. Aizstājot kādu $2$ ar $3$, iegūstam vismaz $2^{12} \\cdot 3 = 12288$ — piecciparu skaitli. Arī $2^{14} > 9999$. Tātad lielākais garums ir $\\mathbf{13}$, vienīgais skaitlis ir $\\mathbf{8192}$."
  },
  {
    id: "ex6",
    problem: "Kādu piecu dažādu naturālu skaitļu reizinājums ir $1020$?",
    solution: "$1020 = 2 \\cdot 2 \\cdot 3 \\cdot 5 \\cdot 17$. Pievienojam $1$ un apvienojam vienu $2$ ar citu reizinātāju. Četras iespējas:\n- $1020 = 1 \\cdot 4 \\cdot 3 \\cdot 5 \\cdot 17$\n- $1020 = 1 \\cdot 2 \\cdot 6 \\cdot 5 \\cdot 17$\n- $1020 = 1 \\cdot 2 \\cdot 3 \\cdot 10 \\cdot 17$\n- $1020 = 1 \\cdot 2 \\cdot 3 \\cdot 5 \\cdot 34$"
  },
  {
    id: "ex7",
    problem: "Kādus sešciparu skaitļus, kuriem visi seši cipari ir vienādi, var izteikt kā sešu dažādu pirmskaitļu reizinājumu?",
    solution: "$a \\cdot 111111 = a \\cdot 3 \\cdot 7 \\cdot 11 \\cdot 13 \\cdot 37$. Vajadzīgs viencipara pirmskaitlis $a \\notin \\{3,7\\}$. Der $a=2$ un $a=5$:\n$$222222 = 2 \\cdot 3 \\cdot 7 \\cdot 11 \\cdot 13 \\cdot 37$$\n$$555555 = 3 \\cdot 5 \\cdot 7 \\cdot 11 \\cdot 13 \\cdot 37$$"
  },
  {
    id: "ex8",
    problem: "Ar kādu mazāko naturālo skaitli jāreizina $315$, lai iegūtu a) naturāla skaitļa kvadrātu; b) kubu?",
    solution: "$315 = 3^2 \\cdot 5 \\cdot 7$.\n\n**a)** Jāreizina ar $5 \\cdot 7 = \\mathbf{35}$. Iegūstam $11025 = 105^2$.\n\n**b)** Jāreizina ar $3 \\cdot 5^2 \\cdot 7^2 = \\mathbf{3675}$. Iegūstam $105^3$."
  },
  {
    id: "ex9",
    problem: "Pierādīt, ka skaitlis $1234567891011\\ldots175176$ nav naturāla skaitļa kvadrāts.",
    solution: "Skaitlis dalās ar $8$ (jo $176 = 8 \\cdot 22$), bet nedalās ar $16$ (jo $5176$ nedalās ar $16$). Tātad $2$ kāpinātājs ir $3$ — nepāra. Kvadrātā visiem kāpinātājiem jābūt pāra. Pretruna. $\\blacksquare$"
  },
  {
    id: "ex10",
    problem: "Dots, ka $x$ un $y$ ir naturāli skaitļi, $x \\cdot y = 10^{12}$. Vai var būt, ka ne $x$, ne $y$ nesatur ciparu $0$?",
    solution: "$10^{12} = 2^{12} \\cdot 5^{12}$. Gan $x$, gan $y$ izsakāmi kā $2$ un $5$ pakāpju reizinājumi. Ja kāds satur gan $2$, gan $5$ kā reizinātājus, tas dalās ar $10$ un beidzas ar $0$. Atliek $x = 2^{12}$ un $y = 5^{12}$, bet $2^{12} = 4096$ — arī satur $0$. Pretruna. $\\blacksquare$"
  },
  {
    id: "ex11",
    problem: "Cik starp pirmajiem $2014$ naturālajiem skaitļiem ir tādu $x$, ka $x(x+1)(x+2)$ dalās ar $87$?",
    solution: "$87 = 29 \\cdot 3$. No trim pēc kārtas skaitļiem viens noteikti dalās ar $3$. Vajadzīgs, lai vismaz viens dalītos ar $29$. No $1$ līdz $2016$ ir $69$ skaitļi, kas dalās ar $29$. Katrs dod $3$ derīgas $x$ vērtības (kur $x$, $x+1$ vai $x+2$ dalās ar $29$). Tātad $69 \\cdot 3 = \\mathbf{207}$."
  },
  {
    id: "ex12",
    problem: "Vai skaitlis $2^{28} - 3^{14}$ ir pirmskaitlis?",
    solution: "Nē. Izmantojot kvadrātu starpības formulu:\n$$2^{28} - 3^{14} = (2^{14})^2 - (3^7)^2 = (2^{14} - 3^7)(2^{14} + 3^7)$$\nTātad tas sadalās reizinātājos un nav pirmskaitlis."
  },
  {
    id: "ex13",
    problem: "Vai skaitlis $2^{16} + 2^9 \\cdot 5^{17} + 5^{34}$ ir pirmskaitlis?",
    solution: "Nē. Izmantojot summas kvadrāta formulu $(a+b)^2 = a^2 + 2ab + b^2$:\n$$2^{16} + 2^9 \\cdot 5^{17} + 5^{34} = (2^8)^2 + 2 \\cdot 2^8 \\cdot 5^{17} + (5^{17})^2 = (2^8 + 5^{17})^2$$\nTātad tas ir pilns kvadrāts un nav pirmskaitlis."
  },
  {
    id: "ex14",
    problem: "Vai skaitlis $3999991$ ir pirmskaitlis?",
    solution: "Nē:\n$$3999991 = 4000000 - 9 = 2000^2 - 3^2 = (2000-3)(2000+3) = 1997 \\cdot 2003$$"
  },
  {
    id: "ex15",
    problem: "Atrisināt vienādojumu $x^2 - y^2 = 61$ naturālos skaitļos.",
    solution: "$(x-y)(x+y) = 61$. Tā kā $61$ ir pirmskaitlis un $x+y > x-y > 0$, tad:\n$$x - y = 1 \\quad \\text{un} \\quad x + y = 61$$\nNo kā $x = 31$, $y = 30$. (Otrais gadījums $x-y=61$, $x+y=1$ dod $y < 0$ — neder.)"
  },
  {
    id: "ex16",
    problem: "Atrisināt vienādojumu $xy + x + y = 5$ naturālos skaitļos.",
    solution: "Pārveidojam: $(x+1)(y+1) = 6$. Tā kā $x, y$ ir naturāli skaitļi, $x+1 \\geq 2$ un $y+1 \\geq 2$. Iespējas: $(x+1, y+1) = (2,3)$ vai $(3,2)$, iegūstam $\\mathbf{x=1, y=2}$ un $\\mathbf{x=2, y=1}$."
  },
  {
    id: "ex17",
    problem: "Ar cik nullēm beidzas reizinājums $10 \\cdot 11 \\cdot 12 \\cdots 29 \\cdot 30$?",
    solution: "Nulles rodas no $2 \\cdot 5$ pāriem. Reizinājumā ietilpst skaitļi $10, 15, 20, 25, 30$ — tie dod $6$ pirmreizinātājus $5$ (jo $25 = 5^2$ dod divus). Pirmreizinātāju $2$ ir vairāk nekā $6$. Tātad reizinājums beidzas ar $\\mathbf{6}$ nullēm."
  },
  {
    id: "ex18",
    problem: "Kāds ir mazākais naturālais skaitlis, kuru reizinot ar $2$ iegūst kvadrātu, bet reizinot ar $3$ iegūst kubu?",
    solution: "Rakstām $n = 2^a \\cdot 3^b \\cdot P$. No $2n$ — kvadrāts: $a+1$ un $b$ pāra. No $3n$ — kubs: $a$ un $b+1$ dalās ar $3$. Mazākās vērtības: $a=3$, $b=2$. Tātad $n = 2^3 \\cdot 3^2 = \\mathbf{72}$. Pārbaude: $2 \\cdot 72 = 144 = 12^2$, $3 \\cdot 72 = 216 = 6^3$. $\\checkmark$"
  },
  {
    id: "ex19",
    problem: "Vai ir tāds skaitlis, kuram ir tieši $2025$ dažādi naturāli dalītāji?",
    solution: "Jā. Piemēram, $2^{2024}$. Tā dalītāji ir $1, 2, 2^2, \\ldots, 2^{2024}$ — pavisam $2025$ dalītāji."
  },
  {
    id: "ex20",
    problem: "Kāds ir mazākais naturālais skaitlis, kuram ir tieši $12$ dažādi naturāli dalītāji?",
    solution: "$12 = 12 = 6 \\cdot 2 = 4 \\cdot 3 = 3 \\cdot 2 \\cdot 2$. Iespējamās formas un mazākie skaitļi:\n- $p^{11}$: $2^{11} = 2048$\n- $p_1^5 \\cdot p_2$: $2^5 \\cdot 3 = 96$\n- $p_1^3 \\cdot p_2^2$: $2^3 \\cdot 3^2 = 72$\n- $p_1^2 \\cdot p_2 \\cdot p_3$: $2^2 \\cdot 3 \\cdot 5 = 60$\n\nMazākais ir $\\mathbf{60}$."
  },
  {
    id: "ex21",
    problem: "Pierādīt, ka ir bezgalīgi daudz veselu skaitļu $a,b,c,d$ četrinieku, ka $24^a \\cdot 25^b \\cdot 27^c \\cdot 30^d = 1$.",
    solution: "Sadalām pirmreizinātājos un iegūstam sistēmu:\n$$\\begin{cases} 3a + d = 0 \\\\ a + 3c + d = 0 \\\\ 2b + d = 0 \\end{cases}$$\nRisinājums: $a = 6k,\\ b = 9k,\\ c = 4k,\\ d = -18k$ jebkuram veselam $k$. Tā kā $k$ var būt jebkurš vesels skaitlis, četrinieku ir bezgalīgi daudz. $\\blacksquare$"
  },
  {
    id: "ex22",
    problem: "Naturālam skaitlim $A$ ir tieši $62$ naturāli dalītāji. Pierādīt, ka $A$ nedalās ar $36$.",
    solution: "Ja $A$ dalās ar $36 = 2^2 \\cdot 3^2$, tad $A = 2^k \\cdot 3^m \\cdot \\ldots$ ar $k \\geq 2$, $m \\geq 2$. Dalītāju skaits $(k+1)(m+1)\\cdots$ ar $k+1 \\geq 3$ un $m+1 \\geq 3$. Bet $62 = 31 \\cdot 2$ nevar būt reizinājums ar diviem reizinātājiem $\\geq 3$. Pretruna. $\\blacksquare$"
  },
  {
    id: "ex23",
    problem: "Skaitļa $A$ dalītāju skaits $d$ ir pirmskaitlis. Ar cik dažādiem pirmskaitļiem var dalīties $A$?",
    solution: "Ja $A = p_1^{k_1} \\cdots p_m^{k_m}$, tad $d = (k_1+1)\\cdots(k_m+1)$. Tā kā katrs $k_j + 1 \\geq 2$ un $d$ ir pirmskaitlis, reizinājumā var būt tikai viens reizinātājs $\\geq 2$. Tāpēc $m = 1$ — $A$ dalās ar tieši $\\mathbf{1}$ pirmskaitli."
  },
  {
    id: "ex24",
    problem: "Dots nepāra skaitlis $A$ ar nepāra skaitu naturālu dalītāju. Pierādīt, ka $A \\div 4$ dod atlikumu $1$.",
    solution: "Nepāra dalītāju skaits nozīmē, ka visi kāpinātāji $k_j$ ir pāra, tāpēc $A = n^2$ kādam naturālam $n$. Tā kā $A$ ir nepāra, arī $n$ ir nepāra: $n = 2m+1$. Tad:\n$$A = n^2 = (2m+1)^2 = 4m^2 + 4m + 1 = 4(m^2+m) + 1$$\nTātad $A$ dalot ar $4$ dod atlikumu $1$. $\\blacksquare$"
  }
]

const dirichletSolvedExamples = [
  {
    id: "ex1",
    problem: "Pulciņā ir $13$ skolēni. Pierādīt, ka no tiem var atrast divus, kas dzimuši vienā un tajā pašā mēnesī!",
    solution: "Ja katrā mēnesī būtu dzimis ne vairāk kā viens skolēns, visos $12$ mēnešos kopā būtu $\\leq 12$ skolēni — pretruna. Pēc Dirihlē principa noteikti ir mēnesis ar $\\geq 2$ skolēniem. $\\blacksquare$"
  },
  {
    id: "ex2",
    problem: "Doti naturāli skaitļi no $1$ līdz $8$. Pierādīt, ka izvēloties jebkurus $5$, var atrast divus, kuru summa ir $9$.",
    solution: "Grupas: $\\{1,8\\}, \\{2,7\\}, \\{3,6\\}, \\{4,5\\}$ — $4$ grupas. Ja katrā būtu $\\leq 1$ skaitlis, kopā $\\leq 4$ — pretruna ar $5$ skaitļiem. Kādā grupā ir $2$ skaitļi, kuru summa $= 9$. $\\blacksquare$"
  },
  {
    id: "ex3",
    problem: "Izliekta $100$-stūra virsotnes sanumurētas ar $1$ līdz $100$. Katrai malai aprēķina galu numuru starpību. Pierādīt, ka vismaz divām malām starpības ir vienādas!",
    solution: "Iespējamās starpību vērtības: $1, 2, \\ldots, 99$ — $99$ grupas (būri). Malas: $100$ (truši). Pēc Dirihlē principa $\\geq 2$ malas dod vienādas starpības. $\\blacksquare$"
  },
  {
    id: "ex4",
    problem: "Sniegbaltīte uzdāvināja $7$ rūķīšiem pa $5$ konfektēm no $3$ veidiem (katrs saņēma $\\geq 1$ no katra veida). Pierādīt, ka $2$ rūķīši saņēma vienādus komplektus!",
    solution: "$5$ kā trīs naturālu skaitļu summa: $3+1+1$ vai $2+2+1$ — $2$ veidi. Ņemot vērā, kurš veids ir lielākais, iegūstam $6$ dažādus iespējamos komplektus. $7$ rūķīši, $6$ iespējas — pēc Dirihlē principa $2$ rūķīši saņēma vienādus komplektus. $\\blacksquare$"
  },
  {
    id: "ex5",
    problem: "Taisne nokrāsota $10$ krāsās. Pierādīt, ka var atrast $2$ punktus vienā krāsā, kuru attālums (cm) ir vesels skaitlis!",
    solution: "Izvēlamies $11$ punktus ar veseliem savstarpējiem attālumiem. $11$ punkti, $10$ krāsas — pēc Dirihlē principa $\\geq 2$ punkti ir vienā krāsā, un to attālums ir vesels skaitlis. $\\blacksquare$"
  },
  {
    id: "ex6",
    problem: "Pierādīt, ka starp jebkuriem $6$ naturāliem skaitļiem, kas nedalās ar $10$, var atrast divus, kuru summa vai starpība dalās ar $10$.",
    solution: "1) Ja divi skaitļi beidzas ar vienādu ciparu — starpība dalās ar $10$.\n2) Pretējā gadījumā — $5$ grupas: $\\{1,9\\}, \\{2,8\\}, \\{3,7\\}, \\{4,6\\}, \\{5\\}$. $6$ skaitļi, $5$ grupas — pēc Dirihlē principa divi nonāk vienā grupā, to summa dalās ar $10$. $\\blacksquare$"
  },
  {
    id: "ex7",
    problem: "Pierādīt, ka no jebkuriem $8$ naturāliem skaitļiem var izvēlēties divus, kuru starpība dalās ar $7$.",
    solution: "Atlikumi dalot ar $7$: $0,1,2,3,4,5,6$ — $7$ grupas. $8$ skaitļi, $7$ grupas — pēc Dirihlē principa $2$ skaitļi dod vienādus atlikumus, to starpība dalās ar $7$. $\\blacksquare$"
  },
  {
    id: "ex8",
    problem: "$36$ skulptūras ar masām $490, 495, \\ldots, 665$ kg. Vai var aizvest ar $7$ automašīnām (kravnesība $3$ t)?",
    solution: "$36 = 7 \\cdot 5 + 1$, tāpēc pēc Dirihlē principa vismaz vienā automašīnā $\\geq 6$ skulptūras. Sešu vieglāko masa: $490+495+500+505+510+515 = 3015$ kg $> 3000$ kg. Prasības nav izpildāmas. $\\blacksquare$"
  },
  {
    id: "ex9",
    problem: "$3$ uzdevumi, $100$ skolēni. Pierādīt, ka $\\geq 13$ skolēni atrisināja vienādus uzdevumus!",
    solution: "No $3$ uzdevumiem var izveidot $2^3 = 8$ dažādus komplektus. Ja katru atrisinātu $\\leq 12$ skolēni, kopā $\\leq 96 < 100$. Pretruna. $\\blacksquare$"
  },
  {
    id: "ex10",
    problem: "Rūtiņu virsotnēs atzīmēti $16$ balti punkti ($4 \\times 4$ režģis). Vai var nokrāsot tieši $7$ punktus melnus tā, lai nekādi $3$ vienādas krāsas punkti nebūtu uz vienas taisnes?",
    solution: "Nē. Ja $7$ melni, paliek $9$ balti. Punkti izvietoti $4$ rindās — pēc Dirihlē principa kādā rindā $\\geq 3$ balti punkti, kas atrodas uz vienas taisnes. Pretruna. $\\blacksquare$"
  },
  {
    id: "ex11",
    problem: "Maisiņā $10$ sarkanas, $10$ dzeltenas, $10$ zaļas lentes. $8$ meitenes katra izvēlas vienu. a) Vai noteikti $4$ izvēlējās vienādu krāsu? b) Vai noteikti $3$ vienādu krāsu? c) Kāds mazākais skaits lenšu, lai noteikti $4$ vienādas?",
    solution: "**a)** Nē — var gadīties $1+1+6$.\n\n**b)** Jā. Ja katras krāsas $\\leq 2$, kopā $\\leq 6 < 8$. Pretruna.\n\n**c)** $10$ lentes. Ar $9$ var gadīties $3+3+3$ — nepietiek. Ar $10$ pēc Dirihlē principa ($10 = 3 \\cdot 3 + 1$) noteikti $\\geq 4$ vienādas krāsas."
  },
  {
    id: "ex12",
    problem: "Ēdnīcā $2$ zupas, $2$ pamatēdieni, $2$ deserti; $200$ skolēni (katrs ēd $\\geq 1$ ēdienu). Kāds lielākais skaits skolēnu noteikti pasūtīja vienādo?",
    solution: "Iespējamie komplekti: $3 \\cdot 3 \\cdot 3 - 1 = 26$ (atņemam gadījumu kad neko neēd). Ja katru izvēlējās $\\leq 7$ skolēni, kopā $\\leq 7 \\cdot 26 = 182 < 200$. Pretruna. Tātad $\\geq 8$ skolēni pasūtīja vienādo. Augšējā robeža $8$ ir sasniedzama: $18 \\cdot 8 + 8 \\cdot 7 = 200$. Atbilde: $\\mathbf{8}$."
  },
  {
    id: "ex13",
    problem: "Pierādīt, ka starp jebkuriem $78$ trīsciparu skaitļiem var atrast $4$ ar vienādām ciparu summām!",
    solution: "Iespējamās ciparu summas: $1$ līdz $27$ — $27$ grupas. Grupas ar summām $1, 2, 26, 27$ satur attiecīgi $1, 3, 3, 1$ skaitļus — kopā $\\leq 8$. Atlikušajās $23$ grupās jāizvieto $\\geq 70$ skaitļi. Tā kā $70 = 3 \\cdot 23 + 1$, pēc Dirihlē principa kādā grupā $\\geq 4$ skaitļi. $\\blacksquare$"
  },
  {
    id: "ex14",
    problem: "Sporta zālē $32$ cilvēki, visi $\\geq 21$ gadu veci. Pierādīt: vai $2$ cilvēki ir $> 30$ gadus veci, vai $4$ cilvēki ar vienādu vecumu!",
    solution: "Grupas pēc vecuma: $\\{21\\}, \\{22\\}, \\ldots, \\{30\\}, \\{> 30\\}$ — $11$ grupas.\n\n1) Ja pēdējā grupā $\\geq 2$ — prasītais izpildās.\n2) Ja pēdējā grupā $\\leq 1$, atlikušajās $10$ grupās $\\geq 31$ cilvēki. $31 = 3 \\cdot 10 + 1$ — pēc Dirihlē principa kādā grupā $\\geq 4$ cilvēki ar vienādu vecumu. $\\blacksquare$"
  }
]

const virknesSolvedExamples = [
  {
    id: "ex1",
    problem: "Naturālu skaitļu virknē pirmais loceklis ir $61$, katru nākamo iegūst, ciparu reizinājumam pieskaitot $13$. Aprēķināt $2025.$ locekli.",
    solution: "Virkne: $61, 19, 22, 17, 20, 13, 16, 19, \\ldots$ Periodiska sākot ar $2.$ locekli, periods $(19, 22, 17, 20, 13, 16)$, $T=6$. $2025 = 6 \\cdot 337 + 3$, bet periods sākas no $2.$ locekļa, tāpēc $2025.$ loceklis ir perioda $2.$ elements. Atbilde: $\\mathbf{22}$."
  },
  {
    id: "ex2",
    problem: "Virkne $1; 1; 2; 5; 9; 6; \\ldots$, katrs loceklis = divu iepriekšējo kvadrātu summas pēdējais cipars. a) Vai $2026.$ loceklis pāra vai nepāra? b) Kāds ir $2026.$ loceklis?",
    solution: "**a)** Paritāšu periods ir $3$: $n,n,p,n,n,p,\\ldots$ Tā kā $2026$ nedalās ar $3$ — **nepāra**.\n\n**b)** Pilnā virkne periodiska sākot ar $2.$ locekli, $T=12$. $1 + 12 \\cdot 168 = 2017$, $2026 - 2017 = 9$. Perioda $9.$ elements ir $\\mathbf{1}$."
  },
  {
    id: "ex3",
    problem: "Virkne $a_1=6$, $a_{n+1} = a_n/2$ ja pāra, $5a_n - 1$ ja nepāra. Kuriem $n$ izpildās $a_n = n$?",
    solution: "Virkne: $6, 3, 14, 7, 34, 17, 84, 42, 21, 104, 52, 26, 13, 64, 32, 16, 8, 4, 2, 1, 4, 2, 1, \\ldots$ Sākot ar $18.$ locekli atkārtojas $(4, 2, 1)$. Pārbaudām: $a_{13} = 13$ ✓ un $a_{16} = 16$ ✓. Tālāk neviens neatbilst. Atbilde: $\\mathbf{n = 13}$ un $\\mathbf{n = 16}$."
  },
  {
    id: "ex4",
    problem: "Virkne $1; 8; 8; 64; 192; 432; \\ldots$ — katrs loceklis sākot ar $3.$ ir divu iepriekšējo nenulles ciparu reizinājums. Kāds ir $2025.$ loceklis?",
    solution: "$9.$ un $10.$ loceklis: $5040$ un $4200$. $19.$ un $20.$ loceklis: $5040$ un $4200$. Periodiska sākot ar $9.$ locekli, $T = 10$. $2025 = 8 + 10 \\cdot 201 + 7$ — nākamā perioda $7.$ elements. Atbilde: $\\mathbf{3780}$."
  },
  {
    id: "ex5",
    problem: "Cik dažādos veidos skaitli $n$ var izteikt kā divnieku un trijnieku summu? Aprēķināt a) $n=14$; b) $n=22$.",
    solution: "Rekurence: $a_n = a_{n-2} + a_{n-3}$, $a_2=a_3=a_4=1$.\n\n| $n$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| $a_n$ | 1 | 1 | 1 | 2 | 2 | 3 | 4 | 5 | 7 | 9 | 12 | 16 | 21 |\n\na) $\\mathbf{21}$ veids. b) $a_{22} = \\mathbf{200}$ veidi."
  },
  {
    id: "ex6",
    problem: "No mājām līdz dzīvoklim ir $12$ pakāpieni. Ar vienu soli var pārkāpt $1$, $2$ vai $3$ pakāpienus. Cik dažādos veidos var uzkāpt?",
    solution: "$a_n = a_{n-1} + a_{n-2} + a_{n-3}$, $a_1=1, a_2=2, a_3=4$.\n\n| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| $a_n$ | 1 | 2 | 4 | 7 | 13 | 24 | 44 | 81 | 149 | 274 | 504 | 927 |\n\nAtbilde: $\\mathbf{927}$ veidi."
  },
  {
    id: "ex7",
    problem: "Cik dažādos veidos taisnstūri $2 \\times 12$ var sagriezt taisnstūros $1 \\times 2$?",
    solution: "$a_n = a_{n-1} + a_{n-2}$, $a_1=1, a_2=2$.\n\n| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| $a_n$ | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 | 89 | 144 | 233 |\n\nAtbilde: $\\mathbf{233}$ veidi."
  },
  {
    id: "ex8",
    problem: "Rindā $10$ krēsli ar skolēniem. Katrs var palikt vai apsēsties blakus esošajā krēslā. Cik dažādi izvietojumi iespējami?",
    solution: "$a_n = a_{n-1} + a_{n-2}$, $a_1=1, a_2=2$.\n\n| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |\n|---|---|---|---|---|---|---|---|---|---|---|\n| $a_n$ | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 | 89 |\n\nAtbilde: $\\mathbf{89}$ izvietojumi."
  },
  {
    id: "ex9",
    problem: "Skaitļi satur tikai ciparus $1, 2, 3$, un cipari $1$ un $3$ nav blakus. Cik ir desmitciparu šādu skaitļu?",
    solution: "$a_n = 2a_{n-1} + a_{n-2}$, $a_1=3, a_2=7$.\n\n| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |\n|---|---|---|---|---|---|---|---|---|---|---|\n| $a_n$ | 3 | 7 | 17 | 41 | 99 | 239 | 577 | 1393 | 3363 | 8119 |\n\nAtbilde: $\\mathbf{8119}$ skaitļi."
  },
  {
    id: "ex10",
    problem: "Cik veidos rindā var iestādīt $7$ kokus — liepas, ozolus, priedes un egles — tā, lai nekur blakus nebūtu divi skuju koki?",
    solution: "$k_n = 2k_{n-1} + 4k_{n-2}$, $k_1=4, k_2=12$.\n\n| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 |\n|---|---|---|---|---|---|---|---|\n| $k_n$ | 4 | 12 | 40 | 128 | 416 | 1344 | 4352 |\n\nAtbilde: $\\mathbf{4352}$ veidi."
  }
]

async function seed() {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })

    const db = admin.firestore()

    await db.collection('topics').doc('pirmrezinataji').update({ solvedExamples: pirmSolvedExamples })
    await db.collection('topics').doc('dirichlet').update({ solvedExamples: dirichletSolvedExamples })
    await db.collection('topics').doc('virknes').update({ solvedExamples: virknesSolvedExamples })

    console.log('Solved examples updated successfully')
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

seed()
