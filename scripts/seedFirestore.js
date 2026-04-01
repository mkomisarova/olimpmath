import admin from 'firebase-admin'
import serviceAccount from './serviceAccount.json' with { type: 'json' }

const topicData = {
  topicId: 'dalamiba',
  slug: 'dalamiba',
  displayName: 'Skaitļu dalāmība',
  subject: 'skaitlu_teorija',
  order: 1,
  theory: {
    sections: [
      {
        title: 'Skaitļu dalāmība',
        content:
          'Ja $a$ un $b$ ir veseli skaitļi, tad ne vienmēr, dalot $a$ ar $b$, dalījumā iegūst veselu skaitli. Ja dalījums ir vesels skaitlis, tad saka, ka $a$ dalās ar $b$, pretējā gadījumā saka, ka $a$ nedalās ar $b$.\n\n**Definīcija.** Ja $b \\neq 0$ un $a : b = k$, kur $a, b, k$ – veseli skaitļi, tad saka, ka $a$ dalās ar $b$.\n\nPiemēram, $15$ dalās ar $3$, bet $15$ nedalās ar $2$.\n\n> **Iegaumē!** Ja tiek runāts par skaitļu dalāmību, tad runa ir tikai par veseliem skaitļiem.\n\n**Definīcija.** Par divu vai vairāku skaitļu **lielāko kopīgo dalītāju (LKD)** sauc lielāko skaitli, ar ko dalās šie skaitļi.\n\nPiemēram, $\\text{LKD}(8; 12; 16) = 4$.',
      },
      {
        title: 'Dalāmības pazīmes',
        content:
          'Noskaidrot, vai viens vesels skaitlis dalās ar otru, tikai ar definīcijas palīdzību bieži vien ir neparocīgi un laikietilpīgi. Šo uzdevumu atvieglo skaitļu dalāmības pazīmes.',
        table: [
          {
            rule: 'Skaitlis dalās ar $2$, ja tā pēdējais cipars ir pāra (0, 2, 4, 6 vai 8).',
            example: '$2026$ dalās ar $2$, jo tā pēdējais cipars ir pāra.',
          },
          {
            rule: 'Skaitlis dalās ar $3$, ja tā ciparu summa dalās ar $3$.',
            example:
              '$2025$ dalās ar $3$, jo $2+0+2+5=9$ dalās ar $3$. $2026$ nedalās ar $3$, jo $2+0+2+6=10$ nedalās ar $3$.',
          },
          {
            rule: 'Skaitlis dalās ar $4$, ja tā pēdējo divu ciparu veidotais skaitlis dalās ar $4$.',
            example: '$2024$ dalās ar $4$, jo $24$ dalās ar $4$.',
          },
          {
            rule: 'Skaitlis dalās ar $5$, ja tā pēdējais cipars ir $0$ vai $5$.',
            example: '$2025$ dalās ar $5$, jo tā pēdējais cipars ir $5$.',
          },
          {
            rule: 'Skaitlis dalās ar $6$, ja tas dalās gan ar $2$, gan ar $3$.',
            example: '$2022$ dalās ar $6$. $2025$ nedalās ar $6$, jo tas nedalās ar $2$.',
          },
          {
            rule: 'Skaitlis dalās ar $8$, ja tā pēdējo trīs ciparu veidotais skaitlis dalās ar $8$.',
            example:
              '$12800$ dalās ar $8$, jo $800$ dalās ar $8$. $2025$ nedalās ar $8$, jo $025$ nedalās ar $8$.',
          },
          {
            rule: 'Skaitlis dalās ar $9$, ja tā ciparu summa dalās ar $9$.',
            example: '$2025$ dalās ar $9$, jo $2+0+2+5=9$.',
          },
          {
            rule: 'Skaitlis dalās ar $10$, ja tā pēdējais cipars ir $0$.',
            example: '$150$ dalās ar $10$.',
          },
          {
            rule: 'Skaitlis dalās ar $11$, ja tā ciparu summas, kas atrodas nepāra pozīcijās, un ciparu summas, kas atrodas pāra pozīcijās, starpība dalās ar $11$.',
            example:
              '$108647$ dalās ar $11$, jo $(1+8+4)-(0+6+7)=0$. $2025$ nedalās ar $11$, jo $(2+2)-(0+5)=-1$.',
          },
        ],
      },
      {
        title: 'Citas dalāmības pazīmes',
        content:
          '- Skaitlis dalās ar $10^n$, ja tā pēdējo $n$ ciparu veidotais skaitlis dalās ar $10^n$.\n- Skaitlis dalās ar $2^n$, ja tā pēdējo $n$ ciparu veidotais skaitlis dalās ar $2^n$.\n- Skaitlis dalās ar $5^n$, ja tā pēdējo $n$ ciparu veidotais skaitlis dalās ar $5^n$.\n\nKombinējot iepriekš dotās pazīmes, var iegūt pazīmes dalāmībai ar citiem skaitļiem. Piemēram, skaitlis dalās ar $12$, ja tas dalās ar $3$ un $4$.\n\n**Definīcija.** Par **savstarpējiem pirmskaitļiem** sauc skaitļus, kam lielākais kopīgais dalītājs ir $1$.\n\n**Teorēma.** Ja $b$ un $c$ ir savstarpēji pirmskaitļi un $a$ dalās ar $b$ un $a$ dalās ar $c$, tad $a$ dalās ar $bc$.\n\n> **Uzmanību!** Ja skaitlis dalās ar $2$ un $6$, mēs nevaram apgalvot, ka tas dalās arī ar $12$. Piemēram, $18$ dalās gan ar $2$, gan ar $6$, bet $18$ nedalās ar $12$. Tāpēc ir ļoti svarīgi, lai reizinātāji būtu savstarpēji pirmskaitļi.',
      },
    ],
  },
  solvedExamples: [
    {
      id: 'ex1',
      problem:
        'Vienādi burti apzīmē vienādus ciparus, dažādi – dažādus. Zināms, ka trīsciparu skaitlis $\\overline{ASS}$ dalās ar $5$, bet nedalās ar $4$. Vai skaitlis $\\overline{OLA}$ var dalīties ar $5$?',
      solution:
        'Tā kā skaitlis $\\overline{ASS}$ dalās ar $5$, tad $S = 0$ vai $S = 5$.\n\n1. Ja $S = 0$, tad iegūstam skaitli $\\overline{A00}$, kas dalās ar $4$ — pretruna ar doto. Tātad $S \\neq 0$.\n2. Ja $S = 5$, tad, lai $\\overline{OLA}$ dalītos ar $5$, vajag $A = 0$ vai $A = 5$. Tā kā dažādiem burtiem atbilst dažādi cipari, $A \\neq 5$. Tātad $A = 0$, bet tad $\\overline{ASS}$ nebūtu trīsciparu skaitlis. Pretruna.\n\nSecinājums: skaitlis $\\overline{OLA}$ **nevar** dalīties ar $5$.',
    },
    {
      id: 'ex2',
      problem:
        'Dots naturāls skaitlis, kas dalās ar $99$ un kura pēdējais cipars nav $0$. Pierādi, ka, uzrakstot šī skaitļa ciparus pretējā secībā, arī iegūst skaitli, kas dalās ar $99$.',
      solution:
        'Ja skaitlis dalās ar $99$, tas dalās gan ar $9$, gan ar $11$.\n\n- **Dalāmība ar 9:** Ciparu summa nemainās, pārrakstot ciparus pretējā secībā, tāpēc iegūtais skaitlis arī dalās ar $9$.\n- **Dalāmība ar 11:** Pārrakstot ciparus pretējā secībā, pāra un nepāra pozīciju ciparu summas apmainās vietām, tāpēc starpība mainās zīmi: $(a - b) \\to (b - a)$. Ja $a - b$ dalījās ar $11$, tad arī $b - a$ dalās ar $11$.\n\nTā kā $9$ un $11$ ir savstarpēji pirmskaitļi un iegūtais skaitlis dalās ar abiem, tas dalās arī ar $99$. $\\blacksquare$',
    },
    {
      id: 'ex3',
      problem:
        'Kādi cipari var būt burtu $a$ un $b$ vietā, lai piecciparu skaitlis $\\overline{a543b}$ dalītos ar $36$?',
      solution:
        'Lai $\\overline{a543b}$ dalītos ar $36 = 4 \\cdot 9$, tam jādalās gan ar $4$, gan ar $9$.\n\n**Dalāmība ar 4:** Pēdējo divu ciparu skaitlim $\\overline{3b}$ jādalās ar $4$, tāpēc $b = 2$ (jo $32 : 4 = 8$) vai $b = 6$ (jo $36 : 4 = 9$).\n\n**Dalāmība ar 9:**\n- Ja $b = 2$: ciparu summa $= a + 5 + 4 + 3 + 2 = 14 + a$. Der $a = 4$, jo $18$ dalās ar $9$.\n- Ja $b = 6$: ciparu summa $= a + 5 + 4 + 3 + 6 = 18 + a$. Der $a = 9$, jo $27$ dalās ar $9$ (un $a = 0$ neder, jo $a$ ir pirmais cipars).\n\nAtbilde: $(a, b) = (4, 2)$ vai $(a, b) = (9, 6)$.',
    },
    {
      id: 'ex4',
      problem:
        'Kāda ir mazākā iespējamā ciparu summa desmitciparu skaitlim, kas dalās ar $33$?',
      solution:
        'Atbilde ir $\\mathbf{6}$, piemēram, skaitlim $3300000000$.\n\nPierādīsim, ka ciparu summa nevar būt $3$. Lai skaitlis dalītos ar $33$, tam jādalās ar $3$ un $11$. Apzīmēsim nepāra pozīciju ciparu summu ar $a$, pāra — ar $b$. Dalāmībai ar $11$ vajadzīgs, lai $a - b$ dalītos ar $11$.\n\n- Ja $a - b = 0$: ciparu summa $a + b = 2a$ ir pāra — nevar būt $3$.\n- Ja $|a - b| \\geq 11$: tad $a \\geq 11$, un ciparu summa $> 11$ — nevar būt $3$.\n\nTātad ciparu summa nevar būt $3$, un mazākā iespējamā vērtība ir $\\mathbf{6}$.',
    },
    {
      id: 'ex5',
      problem:
        'Rindā viens aiz otra (bez tukšumiem) ir uzrakstīti pēc kārtas sekojoši naturāli skaitļi no $1$ līdz $N$. Kāds ir mazākais iegūtais skaitlis, kas dalās ar a) $9$; b) $24$?',
      solution:
        '**a)** Skaitlis dalās ar $9$, ja tā ciparu summa dalās ar $9$. Pārbaudot: $1+2+\\cdots+8 = 36$, kas dalās ar $9$. Tātad mazākais skaitlis ir $\\mathbf{12345678}$.\n\n**b)** Lai skaitlis dalītos ar $24 = 8 \\cdot 3$, tam jādalās ar $8$ un $3$.\n\nPārbaudām: skaitļa $123456$ pēdējo trīs ciparu skaitlis ir $456 = 8 \\cdot 57$, tāpēc tas dalās ar $8$. Ciparu summa $1+2+3+4+5+6 = 21$ dalās ar $3$. Tā kā $3$ un $8$ ir savstarpēji pirmskaitļi, $123456$ dalās ar $24$. Tātad mazākais skaitlis ir $\\mathbf{123456}$.',
    },
    {
      id: 'ex6',
      problem:
        'Karlīna uzrakstīja divus skaitļus, kuru pierakstā nav izmantots cipars $0$. Katru ciparu viņa aizstāja ar burtu. Viens skaitlis $\\text{DUBĻUNNN}$ dalās ar $104$. Pierādi, ka otrais skaitlis $\\text{BURBUĻVANNA}$ nedalās ar $56$.',
      solution:
        'Tā kā $\\text{DUBĻUNNN}$ dalās ar $104 = 8 \\cdot 13$, tas dalās ar $8$. Tāpēc $\\overline{NNN} = 111N$ dalās ar $8$. Tā kā $\\gcd(111, 8) = 1$, tad $N$ dalās ar $8$. Vienīgais cipars, kas nav $0$ un dalās ar $8$, ir $N = 8$.\n\nJa $\\text{BURBUĻVANNA}$ dalītos ar $56 = 8 \\cdot 7$, tad tas dalītos ar $8$, un $\\overline{NNA} = \\overline{88A} = 880 + A$ dalītos ar $8$. Tā kā $880$ dalās ar $8$, tad $A$ dalītos ar $8$. Bet $A \\neq 0$ un $A \\neq 8$ (cipari ir atšķirīgi), tāpēc tas nav iespējams. Pretruna. $\\blacksquare$',
    },
  ],
}

const topicsToSeed = [
  topicData,
  {
    "topicId": "pirmrezinataji",
    "displayName": "Skaitļa sadalīšana pirmreizinātājos",
    "slug": "pirmrezinataji",
    "subject": "skaitlu_teorija",
    "order": 2,
    "theory": {
      "sections": [
        {
          "title": "Pirmskaitļi un salikti skaitļi",
          "content": "**Definīcija.** Par **pirmskaitli** sauc naturālu skaitli, kuram ir tieši divi dažādi dalītāji.\n\nTā kā skaitlis $1$ dalās tikai ar $1$ (tam ir tikai viens dalītājs), tad $1$ **nav** pirmskaitlis.\n\nPirmskaitļu ir bezgalīgi daudz. Mazākie pirmskaitļi:\n$$2;\\ 3;\\ 5;\\ 7;\\ 11;\\ 13;\\ 17;\\ 19;\\ 23;\\ 29;\\ 31;\\ 37;\\ 41;\\ 43;\\ 47;\\ \\ldots$$\n\nSkaitlis $2$ ir vienīgais pāra pirmskaitlis.\n\n**Definīcija.** Par **saliktu skaitli** sauc skaitli, kuram ir vairāk nekā divi dalītāji. Piemēram, skaitlis $6$ ir salikts skaitlis, jo tas dalās ar $1; 2; 3$ un $6$.\n\n**Kā noteikt, vai skaitlis ir pirmskaitlis?** Lai pamatotu, ka dotais skaitlis $n$ ir pirmskaitlis, ir jāpārbauda, vai tas dalās ar visiem pirmskaitļiem $p$, kam $p^2 \\leq n$.\n\nPiemēram, lai pamatotu, ka $43$ ir pirmskaitlis, jāpārbauda dalāmība ar $2; 3; 5$ (tālāk nav nepieciešams, jo $7^2 = 49 > 43$). Tā kā $43$ nedalās ne ar vienu no tiem, tad tas ir pirmskaitlis.\n\n**Piezīme (10.–12. klase).** Ja $p$ ir pirmskaitlis un $(a \\cdot b) \\vdots p$, tad $a \\vdots p$ vai $b \\vdots p$."
        },
        {
          "title": "Pirmreizinātāji un aritmētikas pamatteorēma",
          "content": "**Definīcija.** Pirmskaitļus, kuru reizinājums ir dotais skaitlis, sauc par šī skaitļa **pirmreizinātājiem**.\n\nPiemēram, skaitļa $20$ pirmreizinātāji ir $2; 2$ un $5$, jo $20 = 2 \\cdot 2 \\cdot 5$.\n\nLai skaitli sadalītu pirmreizinātājos, skaitlis jāsadala reizinātājos tā, lai katrs no reizinātājiem būtu pirmskaitlis. Piemēram, $36 = 2 \\cdot 18$ **nav** sadalījums pirmreizinātājos, jo $18$ nav pirmskaitlis.\n\n**Aritmētikas pamatteorēma.** Katru naturālu skaitli $n > 1$ vienā vienīgā veidā var izteikt kā pirmskaitļu reizinājumu (reizinātāju secību neņem vērā).\n\nJebkuru naturālo skaitli $n > 1$ var uzrakstīt **kanoniskā formā**:\n$$n = p_1^{k_1} \\cdot p_2^{k_2} \\cdot p_3^{k_3} \\cdot \\ldots \\cdot p_m^{k_m}$$\nkur $p_1, p_2, \\ldots, p_m$ ir dažādi pirmskaitļi un $k_1, k_2, \\ldots, k_m$ ir naturāli skaitļi."
        },
        {
          "title": "Pakāpes un dalītāju skaits",
          "content": "**Kvadrāti un kubi.** Lai skaitlis būtu kāda naturāla skaitļa kvadrāts, tad katra tā pirmreizinātāja kāpinātājam jābūt pāra skaitlim. Lai skaitlis būtu kubs, kāpinātājam jādalās ar $3$. Vispārīgi — lai skaitlis būtu $n$-tā pakāpe, katram kāpinātājam jādalās ar $n$.\n\nPiemēram, $2^{10} \\cdot 7^4 \\cdot 13^{60}$ ir naturāla skaitļa kvadrāts, jo $2^{10} \\cdot 7^4 \\cdot 13^{60} = (2^5 \\cdot 7^2 \\cdot 13^{30})^2$.\n\n**Teorēma par dalītāju skaitu (10.–12. klase).** Naturālam skaitlim $n = p_1^{k_1} \\cdot p_2^{k_2} \\cdot \\ldots \\cdot p_m^{k_m}$ dažādo naturālo dalītāju skaits ir:\n$$(k_1 + 1)(k_2 + 1) \\cdots (k_m + 1)$$\n\nPiemēram, skaitlim $12 = 2^2 \\cdot 3$ ir $(2+1)(1+1) = 6$ dalītāji: $1; 2; 3; 4; 6; 12$."
        }
      ]
    },
    "solvedExamples": [
      {
        "id": "ex1",
        "problem": "Vai skaitlis a) $2023$; b) $757$ ir pirmskaitlis?",
        "solution": "**a)** Nē. $2023 = 7 \\cdot 289$.\n\n**b)** Jā. Jāpārbauda dalāmība ar $2; 3; 5; 7; 11; 13; 17; 23$ (jo $29^2 = 841 > 757$):\n- nedalās ar $2$ (nepāra skaitlis)\n- nedalās ar $3$ (ciparu summa $7+5+7=19$)\n- nedalās ar $5$ (pēdējais cipars $7$)\n- nedalās ar $7$: $757 = 700 + 57$\n- nedalās ar $11$: $(7+7)-5=9$\n- nedalās ar $13$: $757 = 58 \\cdot 13 + 3$\n- nedalās ar $17$: $757 = 44 \\cdot 17 + 9$\n- nedalās ar $23$: $757 = 32 \\cdot 23 + 21$\n\nTātad $757$ ir pirmskaitlis."
      },
      {
        "id": "ex2",
        "problem": "Vai naturāla skaitļa ciparu reizinājums var būt $6930$?",
        "solution": "Nē. Sadalām: $6930 = 2 \\cdot 3 \\cdot 3 \\cdot 5 \\cdot 7 \\cdot 11$. Tā kā $11$ ir pirmreizinātājs, meklētajam skaitlim būtu jāsatur cipars $11$, bet $11$ nav cipars."
      },
      {
        "id": "ex3",
        "problem": "Vai skaitli $203$ var izteikt kā vismaz divu naturālu skaitļu summu tā, lai arī šo skaitļu reizinājums būtu $203$?",
        "solution": "$203 = 7 \\cdot 29$, bet $7 + 29 = 36 < 203$. Reizinājumam jāpievieno $203 - 36 = 167$ vieninieki (tie nemaina reizinājumu):\n$$203 = 7 \\cdot 29 \\cdot \\underbrace{1 \\cdot 1 \\cdots 1}_{167} \\quad \\text{un} \\quad 203 = 7 + 29 + \\underbrace{1 + 1 + \\cdots + 1}_{167}$$"
      },
      {
        "id": "ex4",
        "problem": "Kāds ir mazākais skaitlis $N$, lai reizinājums $1 \\cdot 2 \\cdot 3 \\cdots N$ dalītos ar $2013$?",
        "solution": "$2013 = 3 \\cdot 11 \\cdot 61$. Lielākais pirmreizinātājs ir $61$, tāpēc $N \\geq 61$. Ja $N = 61$, tad reizinājumā ietilpst $3$, $11$ un $61$, tātad tas dalās ar $2013$. Tātad mazākais $N = \\mathbf{61}$."
      },
      {
        "id": "ex5",
        "problem": "Par skaitļa **garumu** sauksim tā pirmreizinātāju skaitu. Kāds lielākais garums var būt četrciparu skaitlim? Atrodi visus šādus skaitļus!",
        "solution": "Skaitlim $8192 = 2^{13}$ garums ir $13$. Ja kādu no reizinātājiem $2$ aizstājam ar $3$, iegūstam vismaz $2^{12} \\cdot 3 = 12288$ — piecciparu skaitli. Arī $2^{14} > 9999$. Tātad lielākais garums ir $\\mathbf{13}$ un vienīgais šāds skaitlis ir $\\mathbf{8192}$."
      },
      {
        "id": "ex6",
        "problem": "Kādu piecu dažādu naturālu skaitļu reizinājums ir $1020$?",
        "solution": "$1020 = 2 \\cdot 2 \\cdot 3 \\cdot 5 \\cdot 17$. Tā kā divi reizinātāji ir vienādi, pievienojam $1$ un apvienojam vienu $2$ ar kādu citu reizinātāju. Četras iespējas:\n- $1020 = 1 \\cdot 4 \\cdot 3 \\cdot 5 \\cdot 17$\n- $1020 = 1 \\cdot 2 \\cdot 6 \\cdot 5 \\cdot 17$\n- $1020 = 1 \\cdot 2 \\cdot 3 \\cdot 10 \\cdot 17$\n- $1020 = 1 \\cdot 2 \\cdot 3 \\cdot 5 \\cdot 34$"
      },
      {
        "id": "ex7",
        "problem": "Kādus sešciparu skaitļus, kuriem visi seši cipari ir vienādi, var izteikt kā sešu dažādu pirmskaitļu reizinājumu?",
        "solution": "Skaitli ar sešiem vienādiem cipariem $a$ var izteikt kā $a \\cdot 111111 = a \\cdot 3 \\cdot 7 \\cdot 11 \\cdot 13 \\cdot 37$. Jau ir $5$ dažādi pirmreizinātāji, tāpēc $a$ jābūt viencipara pirmskaitlim, kas atšķiras no $3, 7, 11, 13, 37$. Der tikai $a = 2$ un $a = 5$:\n$$222222 = 2 \\cdot 3 \\cdot 7 \\cdot 11 \\cdot 13 \\cdot 37$$\n$$555555 = 3 \\cdot 5 \\cdot 7 \\cdot 11 \\cdot 13 \\cdot 37$$"
      },
      {
        "id": "ex8",
        "problem": "Ar kādu mazāko naturālo skaitli jāreizina $315$, lai iegūtu a) naturāla skaitļa kvadrātu; b) kubu?",
        "solution": "$315 = 3^2 \\cdot 5 \\cdot 7$.\n\n**a)** Lai visi kāpinātāji būtu pāra, jāreizina vēl ar $5 \\cdot 7 = \\mathbf{35}$. Iegūstam $315 \\cdot 35 = 11025 = 105^2$.\n\n**b)** Lai visi kāpinātāji dalītos ar $3$, jāreizina ar $3 \\cdot 5^2 \\cdot 7^2 = \\mathbf{3675}$. Iegūstam $315 \\cdot 3675 = 105^3$."
      },
      {
        "id": "ex9",
        "problem": "Pierādīt, ka skaitlis $1234567891011\\ldots175176$ nav naturāla skaitļa kvadrāts.",
        "solution": "Skaitlis dalās ar $8$ (jo $176 = 8 \\cdot 22$), bet nedalās ar $16$ (jo $5176 = 5000 + 176$ nedalās ar $16$). Tātad pirmskaitļa $2$ kāpinātājs sadalījumā pirmreizinātājos ir $3$ — nepāra skaitlis. Bet naturāla skaitļa kvadrātā visiem kāpinātājiem jābūt pāra. Pretruna. $\\blacksquare$"
      },
      {
        "id": "ex10",
        "problem": "Kāds ir mazākais naturālais skaitlis, kuram ir tieši $12$ dažādi naturāli dalītāji?",
        "solution": "$12 = 12 \\cdot 1 = 6 \\cdot 2 = 4 \\cdot 3 = 3 \\cdot 2 \\cdot 2$. Iespējamās formas un mazākie skaitļi ($p_1=2, p_2=3, p_3=5$):\n- $p^{11}$: $2^{11} = 2048$\n- $p_1^5 \\cdot p_2$: $2^5 \\cdot 3 = 96$\n- $p_1^3 \\cdot p_2^2$: $2^3 \\cdot 3^2 = 72$\n- $p_1^2 \\cdot p_2 \\cdot p_3$: $2^2 \\cdot 3 \\cdot 5 = 60$\n\nMazākais ir $\\mathbf{60}$."
      }
    ]
  },
  {
    "topicId": "dirichlet",
    "displayName": "Dirihlē princips",
    "slug": "dirichlet",
    "subject": "kombinatorika",
    "order": 1,
    "theory": {
      "sections": [
        {
          "title": "Dirihlē princips — pamata versija",
          "content": "**1. teorēma (Dirihlē princips).** Ja vairāk nekā $n$ objekti jāsadala $n$ grupās, tad noteikti būs tāda grupa, kurā atradīsies vismaz $2$ objekti.\n\n**Pierādījums.** Pieņemsim pretējo — nevienā grupā nav vairāk kā viens objekts. Tad kopā nav izvietoti vairāk kā $n$ objekti, bet jāizvieto vairāk nekā $n$. Pretruna. $\\blacksquare$\n\nBieži formulē arī šādi: ja vairāk nekā $n$ truši jāizvieto $n$ būros, tad vismaz vienā būrī nonāks vismaz $2$ truši.\n\n> **Galvenais padoms.** Lietojot Dirihlē principu, galvenais ir izdomāt, kas katrā uzdevumā būs **\"būri\"** un kas — **\"truši\"**."
        },
        {
          "title": "Dirihlē princips — vispārinājums",
          "content": "**2. teorēma (Dirihlē princips, vispārinājums).** Ja vairāk nekā $m \\cdot n$ objekti jāsadala $n$ grupās, tad noteikti būs grupa, kurā atradīsies vismaz $(m + 1)$ objekts.\n\n**Pierādījums.** Ja katrā grupā būtu ne vairāk kā $m$ objekti, tad kopā būtu ne vairāk kā $m \\cdot n$ objekti — pretruna. $\\blacksquare$\n\n**Teorēma par starpības dalīšanos.** Starpība $(a - b)$ dalās ar $n$ tad un tikai tad, ja $a$ un $b$ dod vienādus atlikumus, dalot ar $n$."
        }
      ]
    },
    "solvedExamples": [
      {
        "id": "ex1",
        "problem": "Pulciņā ir $13$ skolēni. Pierādīt, ka no tiem var atrast divus, kas dzimuši vienā un tajā pašā mēnesī!",
        "solution": "**1. atrisinājums.** Ja katrā mēnesī būtu dzimis ne vairāk kā viens skolēns, tad visos $12$ mēnešos kopā būtu dzimuši ne vairāk kā $12$ skolēni — pretruna.\n\n**2. atrisinājums.** $13$ skolēni jāsadala $12$ grupās (mēnešos). Pēc Dirihlē principa noteikti ir mēnesis ar vismaz $2$ skolēniem."
      },
      {
        "id": "ex2",
        "problem": "Doti naturāli skaitļi no $1$ līdz $8$. Pierādīt, ka, izvēloties jebkurus $5$ no tiem, varēs atrast divus, kuru summa ir $9$.",
        "solution": "Sadalām skaitļus $4$ grupās: $\\{1,8\\}$, $\\{2,7\\}$, $\\{3,6\\}$, $\\{4,5\\}$. Katrs no $5$ izvēlētajiem ietilpst kādā grupā. Ja katrā grupā būtu ne vairāk kā viens skaitlis, kopā būtu $\\leq 4$ skaitļi — pretruna. Tātad kādā grupā ir $2$ skaitļi, kuru summa ir $9$."
      },
      {
        "id": "ex3",
        "problem": "Izliekta $100$-stūra virsotnes sanumurētas ar skaitļiem no $1$ līdz $100$. Katrai malai aprēķina tās galu numuru starpību. Pierādīt, ka vismaz divām malām šīs starpības ir vienādas!",
        "solution": "Iespējamās starpības: $1; 2; \\ldots; 99$ — pavisam $99$ dažādas vērtības (\"būri\"). Malas ir $100$ (\"truši\"). Pēc Dirihlē principa vismaz divas malas dod vienādas starpības."
      },
      {
        "id": "ex4",
        "problem": "Sniegbaltīte uzdāvināja katram no $7$ rūķīšiem pa $5$ konfektēm no $3$ veidiem, katrs saņēma vismaz vienu katra veida konfekti. Pierādīt, ka ir divi rūķīši ar vienādiem konfekšu komplektiem!",
        "solution": "Skaitli $5$ kā trīs naturālu skaitļu summu var izteikt tikai $2$ veidos: $3+1+1$ un $2+2+1$. Ņemot vērā, kurš konfektes veids ir $3$ vai $1$ eksemplārā, iegūstam $6$ dažādus iespējamos komplektus. Tā kā ir $7$ rūķīši un $6$ iespējas, pēc Dirihlē principa divi rūķīši saņēma vienādus komplektus."
      },
      {
        "id": "ex5",
        "problem": "Pierādīt, ka starp jebkuriem $6$ naturāliem skaitļiem, kas nedalās ar $10$, var atrast divus, kuru summa vai starpība dalās ar $10$.",
        "solution": "1) Ja divi skaitļi beidzas ar vienādu ciparu, to starpība dalās ar $10$.\n2) Ja visi pēdējie cipari ir dažādi, sadalām skaitļus grupās: $\\{1,9\\}$, $\\{2,8\\}$, $\\{3,7\\}$, $\\{4,6\\}$, $\\{5\\}$. Ir $6$ skaitļi un $5$ grupas — pēc Dirihlē principa divi nonāk vienā grupā, un to summa dalās ar $10$."
      },
      {
        "id": "ex6",
        "problem": "Pierādīt, ka no jebkuriem $8$ naturāliem skaitļiem var izvēlēties divus, kuru starpība dalās ar $7$.",
        "solution": "Dalot ar $7$, iespējami $7$ atlikumi: $0;1;2;3;4;5;6$. Ir $8$ skaitļi un $7$ iespējamie atlikumi. Pēc Dirihlē principa divi skaitļi dod vienādus atlikumus, un to starpība dalās ar $7$."
      },
      {
        "id": "ex7",
        "problem": "Mākslinieku darbnīcā izgatavotas $36$ skulptūras ar masām $490, 495, 500, \\ldots, 665$ kg. Vai visas var aizvest ar $7$ automašīnām, kuru kravnesība ir $3$ tonnas?",
        "solution": "Nē. Pēc Dirihlē principa ($36 = 7 \\cdot 5 + 1$) vismaz vienā automašīnā jāiekrauj $\\geq 6$ skulptūras. Sešu vieglāko kopējā masa:\n$$490+495+500+505+510+515 = 3015 \\text{ kg} > 3000 \\text{ kg}$$\nTātad prasības nav izpildāmas."
      },
      {
        "id": "ex8",
        "problem": "Profesora Cipariņa olimpiādē bija $3$ uzdevumi, piedalījās $100$ skolēni. Pierādīt, ka vismaz $13$ skolēni izrēķināja vienus un tos pašus uzdevumus!",
        "solution": "No $3$ uzdevumiem var izveidot $2^3 = 8$ dažādus atrisināto uzdevumu komplektus. Ja katru komplektu atrisinātu $\\leq 12$ skolēni, kopā būtu $\\leq 12 \\cdot 8 = 96 < 100$ skolēni. Pretruna. Tātad vismaz $13$ skolēni atrisināja vienādus uzdevumus."
      }
    ]
  },
  {
    "topicId": "virknes",
    "displayName": "Virknes",
    "slug": "virknes",
    "subject": "algebra",
    "order": 1,
    "theory": {
      "sections": [
        {
          "title": "Rekurentas virknes",
          "content": "Skaitļus, kas veido virkni, sauc par **virknes locekļiem**.\n\nViens no virkņu uzdošanas veidiem ir **rekurentā definīcija** — norādot pirmo locekli (vai dažus pirmos) un formulu, ar kuras palīdzību jebkuru locekli var iegūt no iepriekšējiem.\n\nVienkāršākie piemēri:\n- **Aritmētiskā progresija:** $a_{n+1} = a_n + d$\n- **Ģeometriskā progresija:** $b_{n+1} = b_n \\cdot q$\n- **Fibonači virkne:** $F_1 = F_2 = 1$, $F_{n+2} = F_n + F_{n+1}$, iegūstam $1; 1; 2; 3; 5; 8; 13; 21; \\ldots$"
        },
        {
          "title": "Periodiskas rekurentas virknes",
          "content": "**Definīcija.** Virkne $a_1, a_2, a_3, \\ldots$ ir **periodiska**, ja eksistē tāds skaitlis $T$, ka $a_n = a_{n+T}$ visiem naturāliem $n$. Skaitli $T$ sauc par **perioda garumu**.\n\nPiemēram, virkne $1; 2; 3; 1; 2; 3; \\ldots$ ir periodiska ar periodu $T = 3$.\n\nVirkne ir **periodiska sākot no kādas vietas**, ja sakarība $a_n = a_{n+T}$ izpildās visiem $n \\geq n_0$.\n\n**Galvenais princips:**\n- Ja rekurentā virkne atkarīga tikai no **viena** iepriekšējā locekļa un divi locekļi sakrīt — virkne kļūst periodiska.\n- Ja atkarīga no **diviem** iepriekšējiem un sakrīt divi blakus esoši pāri — virkne kļūst periodiska.\n- Vispārīgi: ja atkarīga no $k$ iepriekšējiem un sakrīt divas $k$ blakus esoši locekļu grupas — virkne kļūst periodiska."
        },
        {
          "title": "Induktīvās konstrukcijas ar rekurentām virknēm",
          "content": "Daudzos uzdevumos, kur jāsaskaita objektu skaits atkarībā no parametra $n$, var veidot rekurentu virkni $a_1, a_2, a_3, \\ldots$, kur $a_i$ ir meklēto objektu skaits parametram $i$.\n\nMetode:\n1. Aprēķina dažas pirmās vērtības $a_1, a_2, (a_3)$\n2. Atrod rekurentu sakarību — kā $a_n$ izsakās caur iepriekšējiem locekļiem\n3. Ar sakarību aizpilda tabulu līdz vajadzīgajai vērtībai\n\nPiemēram, skaitli $n$ kā **divnieku un trijnieku summu** var izteikt $a_n$ veidos, kur $a_n = a_{n-2} + a_{n-3}$:\n\n| $n$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |\n|---|---|---|---|---|---|---|---|---|---|\n| $a_n$ | 1 | 1 | 1 | 2 | 2 | 3 | 4 | 5 | 7 |"
        }
      ]
    },
    "solvedExamples": [
      {
        "id": "ex1",
        "problem": "Naturālu skaitļu virknē pirmais loceklis ir $61$, katru nākamo iegūst, iepriekšējā skaitļa visu ciparu reizinājumam pieskaitot $13$. Aprēķināt šīs virknes $2025.$ locekli.",
        "solution": "Aprēķinām pirmos locekļus: $61, 19, 22, 17, 20, 13, 16, 19, 22, 17, 20, 13, 16, \\ldots$\n\nVirkne ir periodiska sākot ar $2.$ locekli, periods ir $(19, 22, 17, 20, 13, 16)$, garums $T = 6$.\n\n$2025 = 6 \\cdot 337 + 3$. Tā kā periods sākas no $2.$ locekļa, $2025.$ loceklis ir perioda $2.$ nevis $3.$ elements. Atbilde: $\\mathbf{22}$."
      },
      {
        "id": "ex2",
        "problem": "Dota virkne $1; 1; 2; 5; 9; 6; \\ldots$, kur katrs loceklis ir divu iepriekšējo kvadrātu summas pēdējais cipars. a) Vai $2026.$ loceklis ir pāra vai nepāra? b) Kāds ir $2026.$ loceklis?",
        "solution": "**a)** Paritāšu virkne: $n; n; p; n; n; p; \\ldots$ — periods $3$. Tā kā $2026$ nedalās ar $3$, $2026.$ loceklis ir **nepāra**.\n\n**b)** Turpinot: $1; 1; 2; 5; 9; 6; 7; 5; 4; 1; 7; 0; 9; 1; 2; 5; \\ldots$ Virkne periodiska sākot ar $2.$ locekli, perioda garums $12$. Tā kā $1 + 12 \\cdot 168 = 2017$ un $2026 - 2017 = 9$, tad $2026.$ loceklis ir perioda $9.$ elements. Atbilde: $\\mathbf{1}$."
      },
      {
        "id": "ex3",
        "problem": "Naturālu skaitļu virknes $1; 8; 8; 64; 192; 432; \\ldots$ katrs loceklis, sākot ar trešo, ir divu iepriekšējo locekļu **nenulles ciparu reizinājums**. Kāds ir $2025.$ loceklis?",
        "solution": "Turpinot virkni, iegūstam, ka $9.$ un $10.$ loceklis ir $5040$ un $4200$, un $19.$ un $20.$ arī ir $5040$ un $4200$. Tātad virkne periodiska sākot ar $9.$ locekli, perioda garums $T = 10$.\n\n$2025 = 8 + 10 \\cdot 201 + 7$, tātad $2025.$ loceklis ir nākamā perioda $7.$ elements. Atbilde: $\\mathbf{3780}$."
      },
      {
        "id": "ex4",
        "problem": "No mājām līdz dzīvoklim ir $12$ pakāpieni. Ar vienu soli var pārkāpt $1$, $2$ vai $3$ pakāpienus. Cik dažādos veidos var uzkāpt?",
        "solution": "Apzīmējam ar $a_n$ veidu skaitu uz $n$-to pakāpienu. Rekurence: $a_n = a_{n-1} + a_{n-2} + a_{n-3}$, ar $a_1=1$, $a_2=2$, $a_3=4$.\n\n| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| $a_n$ | 1 | 2 | 4 | 7 | 13 | 24 | 44 | 81 | 149 | 274 | 504 | 927 |\n\nAtbilde: $\\mathbf{927}$ veidi."
      },
      {
        "id": "ex5",
        "problem": "Cik dažādos veidos taisnstūri $2 \\times 12$ var sagriezt taisnstūros $1 \\times 2$?",
        "solution": "Apzīmējam ar $a_n$ veidu skaitu taisnstūrim $2 \\times n$. Rekurence: $a_n = a_{n-1} + a_{n-2}$, ar $a_1=1$, $a_2=2$.\n\n| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n| $a_n$ | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 | 89 | 144 | 233 |\n\nAtbilde: $\\mathbf{233}$ veidi."
      }
    ]
  }
]

async function seed() {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })

    const db = admin.firestore()

    for (const topic of topicsToSeed) {
      await db.collection('topics').doc(topic.topicId).set(topic, { merge: false })
      console.log(`Seeded: ${topic.topicId}`)
    }

    console.log('Topic seeded successfully')
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

seed()
