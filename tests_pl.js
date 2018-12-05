/* eslint-disable */
var tests = [
  {

    id: 0,

    name:           'Filozofia',
    description:    'Odkryj, gdzie znajdujesz się pośród wielu filozoficznych dychotomii, od egoizmu i altruizmu do sceptycyzmu i absolutyzmu.',
    preamble:       'Będziesz musiał odpowiedzieć na serię pytań. Pytania zadane będą w formie twierdzenia lub scenariusza. Dla każdego z nich powinieneś wybrać czy zgadzasz się z nim lub nie. Staraj się odpowiadać tak szczerze, jak to możliwe.',
    results:        'Twoje wyniki są przedstawione poniżej:',

    btnClass:       'btn-a51344',

    testType:       AGREE,
    resultsType:    BARS,

    scales: [
      {
        a: {
          text: 'Materializm',
          path: 'https://i.ibb.co/XjtG3g8/materialism.png',
          color: '#c4eeb2'
        },
        b: {
          text: 'Spirytualizm',
          path: 'https://i.ibb.co/DYZkgPV/spiritualism.png',
          color: '#f7b9c4'
        },
        param: 'm'
      },
      {
        a: {
          text: 'Egoizm',
          path: 'https://i.ibb.co/VqNpmVk/egoism.png',
          color: '#b6a8d8'
        },
        b: {
          text: 'Altruizm',
          path: 'https://i.ibb.co/6t9tygg/altruism.png',
          color: '#fff5bf'
        },
        param: 'e'
      },
      {
        a: {
          text: 'Idealizm',
          path: 'https://i.ibb.co/rmTfrvq/idealism.png',
          color: '#ffe081'
        },
        b: {
          text: 'Pragmatyzm',
          path: 'https://i.ibb.co/3TSTpG5/pragmatism.png',
          color: '#7474c7'
        },
        param: 'i'
      },
      {
        a: {
          text: 'Hedonizm',
          path: 'https://i.ibb.co/YW8nMkB/hedonism.png',
          color: '#f99ba4'
        },
        b: {
          text: 'Ascetyzm',
          path: 'https://i.ibb.co/TmTS99G/asceticism.png',
          color: '#9be18c'
        },
        param: 'h'
      },
      {
        a: {
          text: 'Nihilizm',
          path: 'https://i.ibb.co/PFH7jw9/nihilism.png',
          color: '#86989c'
        },
        b: {
          text: 'Moralizm',
          path: 'https://i.ibb.co/YDWs0Mt/moralism.png',
          color: '#fcead7'
        },
        param: 'n'
      },
      {
        a: {
          text: 'Racjonalizm',
          path: 'https://i.ibb.co/txNkzJg/rationalism.png',
          color: '#ffd1b3'
        },
        b: {
          text: 'Romantycyzm',
          path: 'https://i.ibb.co/KDKZGyQ/romanticism.png',
          color: '#8ac5bb'
        },
        param: 'r'
      },
      {
        a: {
          text: 'Sceptycyzm',
          path: 'https://i.ibb.co/26FttkZ/skepticism.png',
          color: '#a2bcd4'
        },
        b: {
          text: 'Absolutyzm',
          path: 'https://i.ibb.co/QFVfmyr/absolutism.png',
          color: '#ffe4bf'
        },
        param: 's'
      }
    ],

    instruction:    'Jak bardzo zgadzasz/nie zgadzasz się z poniższym stwierdzeniem?',
    questions: [
      {
        text: 'Wolałbym znaleźć prawdziwą miłość niż być zamożnym.',
        effects: [-10, -5, 0, 0, 0, 0, 0]
      },
      {
        text: 'Wolałbym otrzymać drogi samochód niż uratować życie głodującego dziecka.',
        effects: [0, 10, 0, 5, 0, 0, 0]
      },
      {
        text: 'Wolę otrzymywać pieniądze zamiast prezentów.',
        effects: [0, 0, -10, 0, 0, 5, 0]
      },
      {
        text: 'Wolałbym być w związku seksualnym bez intymności niż być w intymnym związku bez seksu.',
        effects: [5, 0, 0, 10, 0, 0, 0]
      },
      {
        text: 'Życie nie ma sensu samo w sobie.',
        effects: [0, 0, 0, 0, 10, 0, 0]
      },
      {
        text: 'Świat bez kolorów jest ciemniejszy niż świat bez porządku.',
        effects: [0, 0, 0, 0, 0, -10, 0]
      },
      {
        text: 'Społeczeństwo zawsze będzie potrzebowało silnej władzy.',
        effects: [0, 0, 0, 0, 0, 0, -10]
      },
      {
        text: 'Wierzę w jakąś formę duchowego życia po śmierci.',
        effects: [-10, 0, 0, 0, -5, 0, 0]
      },
      {
        text: 'Gdybym miał wybierać, uratowałbym siebie zamiast bliskiej mi osoby.',
        effects: [0, 10, 0, 5, 0, 0, 0]
      },
      {
        text: 'Cel zwykle uświęca środki.',
        effects: [0, 5, -10, 0, 0, 0, 0]
      },
      {
        text: 'Wolałbym wieść życie pełne osobistych przyjemności niż ustatkować się i mieć dzieci.',
        effects: [5, 5, 0, 10, 0, 0, 0]
      },
      {
        text: 'Życie jest cierpieniem i jest fundamentalnie bez znaczenia.',
        effects: [0, 0, 0, 0, 10, 0, 0]
      },
      {
        text: 'Przy podejmowaniu decyzji, fundamentalne przyczyny są zawsze ważniejsze niż konsekwencje.',
        effects: [0, 0, 5, 0, 0, 10, 0]
      },
      {
        text: 'Nadzwyczajne tezy wymagają nadzwyczajnych dowodów.',
        effects: [0, 0, 0, 0, 0, 5, 10]
      },
      {
        text: 'Życie to coś więcej niż materializm.',
        effects: [-10, 0, 0, 0, 0, 0, 0]
      },
      {
        text: 'Większość ludzi jest naturalnie samolubna.',
        effects: [0, 10, 0, 0, 0, 0, 0]
      },
      {
        text: 'Powinniśmy dążyć do utopijnego społeczeństwa.',
        effects: [0, 0, 10, 0, 0, 0, 0]
      },
      {
        text: 'Czasem musimy cierpieć w teraźniejszości abyśmy mogli mieć lepszą przyszłość.',
        effects: [0, 0, -5, -10, 0, 0, 0]
      },
      {
        text: 'Żadne działanie nie jest samo w sobie moralne lub niemoralne.',
        effects: [0, 0, 0, 0, 10, 0, 0]
      },
      {
        text: 'Rozsądek jest ważniejszy niż emocje.',
        effects: [0, 0, 0, 0, 0, 10, 0]
      },
      {
        text: 'Głupcem jest ten, kto daje wiarę tezie niepopartej dowodami.',
        effects: [0, 0, 0, 0, 0, 5, 10]
      },
      {
        text: 'Moje samopoczucie umysłowe jest dla mnie ważniejsze niż dobra materialne.',
        effects: [-10, 0, 0, 0, 0, 0, 0]
      },
      {
        text: 'Bezinteresowność jest cnotą.',
        effects: [0, -10, 0, 0, 0, 0, 0]
      },
      {
        text: 'Nasze społeczeństwo jest fundamentalnie wadliwe i potrzebuje radykalnych reform.',
        effects: [0, 0, 10, 0, 0, 0, 0]
      },
      {
        text: 'Wolę przyjaźnie które pomagają mi rozwijać się jako osoba od takich które są ekscytujące.',
        effects: [0, 0, 0, -10, 0, 0, 0]
      },
      {
        text: 'Moralność jest fundamentem wszystkiego co robimy.',
        effects: [0, 0, 0, 0, -10, 0, 0]
      },
      {
        text: 'Bez muzyki, życie byłoby bezwartościowe.',
        effects: [0, 0, 0, 0, 0, -10, 0]
      },
      {
        text: 'Istnieje wszechwiedząca, wszechmocna i absolutna istota.',
        effects: [-5, 0, 0, 0, -5, 0, -10]
      },
      {
        text: 'Świadomość jest niematerialna.',
        effects: [-10, 0, 0, 0, 0, 0, 0]
      },
      {
        text: 'Mój własny dobrobyt jest ważniejszy niż szczęście tych, którzy mnie otaczają.',
        effects: [0, 10, 0, 5, 0, 0, 0]
      },
      {
        text: 'Ludzie, którzy ciągle dążą do sukcesu muszą dopasować się do zmieniających się czasów.',
        effects: [0, 0, -10, 0, 0, 0, 0]
      },
      {
        text: 'Proste życie bez doczesnych dóbr jest cnotliwe.',
        effects: [-5, 0, 0, -10, -5, 0, 0]
      },
      {
        text: 'Nie liczymy się w perspektywie istnienia wszechświata.',
        effects: [0, 0, 0, 0, 10, 0, 0]
      },
      {
        text: 'Społeczeństwo bez małżeństwa byłoby lepsze niż społeczeństwo bez rozwodów.',
        effects: [0, 0, 5, 5, 5, -10, 0]
      },
      {
        text: 'Nasze społeczeństwo nas określa.',
        effects: [0, 0, 0, 0, 0, 0, -10]
      },
      {
        text: 'Dusza i materia to dwie oddzielne rzeczy.',
        effects: [-10, 0, 0, 0, 0, 0, 0]
      },
      {
        text: 'Zwykle przedkładam swoją rodzinę, społeczność i bliskich nad moje osobiste cele.',
        effects: [0, -10, 0, -5, 0, 0, 0]
      },
      {
        text: 'Rewolucja jest czasami przydatna dla społeczeństwa.',
        effects: [0, 0, 10, 0, 0, 0, 0]
      },
      {
        text: 'Ludzie mają prawo próbować osiągać jak najwięcej przyjemności.',
        effects: [0, 5, 0, 10, 0, 0, 0]
      },
      {
        text: 'Życie to rozpacz.',
        effects: [0, 0, 0, 0, 10, 0, 0]
      },
      {
        text: 'Rozwijanie umysłu bez rozwijania serca to nie żaden rozwój.',
        effects: [0, 0, 0, 0, 0, -10, 0]
      },
      {
        text: 'Ludzie posiadają wolną wolę.',
        effects: [0, 0, 0, 0, -5, -5, -10]
      },
      {
        text: 'Dobre jest podążanie za sławą, bogactwem i władzą.',
        effects: [10, 10, 0, 5, 0, 0, 0]
      },
      {
        text: 'Wolałbym żyć sam w luksusach niż z przyjaciółmi i rodziną w biedzie.',
        effects: [5, 10, 0, 0, 0, 0, 0]
      },
      {
        text: 'Rozwój społeczny powinien być dokonywany powoli i w małych krokach.',
        effects: [0, 0, -10, 0, 0, 0, 0]
      },
      {
        text: 'Przyjemność jest najwyższą wartością.',
        effects: [0, 0, 0, 10, 0, 0, 0]
      },
      {
        text: 'Nie obchodzi mnie moralność.',
        effects: [0, 0, 0, 0, 10, 0, 0]
      },
      {
        text: 'Głupie jest pozwalanie, aby emocje wpływały na decyzje.',
        effects: [0, 0, 0, 0, 0, 10, 0]
      },
      {
        text: 'Nic nie może zostać udowodnione ze stuprocentową pewnością.',
        effects: [0, 0, -5, 0, 0, 0, 10]
      },
      {
        text: 'Życie w sławie i bogactwie jest dla mnie bardziej pożądane niż szczęśliwe i znaczące życie.',
        effects: [10, 5, 0, 5, 0, 0, 0]
      },
      {
        text: 'Bądź życzliwy, każdy wokół ciebie prowadzi trudną walkę.',
        effects: [0, -10, 0, 0, 0, 0, 0]
      },
      {
        text: 'Świat idei jest lepszy od świata fizycznego.',
        effects: [0, 0, 10, 0, 0, -5, 0]
      },
      {
        text: 'Skromne życie jest lepsze.',
        effects: [0, 0, -5, -10, 0, 0, 0]
      },
      {
        text: 'Wyrażanie moralności jest bardziej rzeczowe niż emocjonalne.',
        effects: [0, 0, 0, 0, -10, 0, 0]
      },
      {
        text: 'Badania naukowe są ważniejsze niż sztuka i muzyka.',
        effects: [0, 0, 0, 0, 0, 10, 0]
      },
      {
        text: 'Wolałbym żyć w bogatym, niemorlanym społeczeństwie niż w biednym społeczeństwie z moralnością i tożsamością.',
        effects: [10, 5, 0, 5, 10, 0, 0]
      },
      {
        text: 'Powinniśmy skupić się na poprawianiu życia naszej społeczości.',
        effects: [0, -10, 0, 0, 0, 0, 0]
      },
      {
        text: 'Nasze idee pochodzą z rzeczywistości.',
        effects: [0, 0, 10, 0, 0, 0, 0]
      },
      {
        text: 'Naszym podstawowym celem powinno być podążanie za pasjami i przyjemnościami.',
        effects: [0, 5, 0, 10, 5, -10, 0]
      },
      {
        text: 'Różnica między "dobrem" a "złem" wychodzi poza granice ludzkiej natury.',
        effects: [0, 0, 0, 0, -10, 0, 0]
      },
      {
        text: 'Głównym celem ludzkości jest podążanie za wiedzą.',
        effects: [0, 0, 0, 0, 0, 10, 0]
      },
      {
        text: 'Ludzie posiadają duszę.',
        effects: [-10, 0, 0, 0, 0, 0, -10]
      },
      {
        text: 'Jednostka powinna zawsze działać w zgodzie z własnym interesem.',
        effects: [0, 10, 0, 0, 0, 0, 0]
      },
      {
        text: 'Każdy ma swoją rolę w społeczeństwie.',
        effects: [0, 0, 10, 0, 0, 0, 0]
      },
      {
        text: 'Jest sposób na życie który jest moralnie właściwy.',
        effects: [0, 0, 0, -5, -10, 0, 0]
      },
      {
        text: 'Poddawanie się silnym emocjom i strachowi jest niemądre.',
        effects: [0, 0, -5, -5, 0, 10, 0]
      },
      {
        text: 'Wszechświat jest poddany uniwersalnym i podstawowym prawom.',
        effects: [10, 0, 5, 0, 0, 0, -10]
      },
      {
        text: 'Ludzie nie mogą być bezinteresowni.',
        effects: [0, 10, 0, 0, 0, 0, 0]
      },
      {
        text: 'Wyniosłe ideały jak sprawiedliwość i wolność mają dla mnie dużą wartość.',
        effects: [0, 0, 10, 0, 0, 0, 0]
      },
      {
        text: 'Władza zawsze musi być wyśmiewana.',
        effects: [0, 0, 10, 0, 0, 0, 10]
      },
      {
        text: 'Bez wiary w Boga nie możemy być spełnieni.',
        effects: [-5, 0, 0, 0, -10, 0, -10]
      },
      {
        text: 'Emocje nie mogą być ignorowane przy podejmowaniu decyzji.',
        effects: [0, 0, 0, 0, 0, -10, 0]
      },
      {
        text: 'Nie jesteśmy w stanie doświadczyć prawdziwej rzeczywistości.',
        effects: [-10, 0, -5, 0, 0, 0, 10]
      },
      {
        text: 'Powinniśmy pomagać potrzebującym w naszym społeczeństwie.',
        effects: [0, -10, 0, 0, 0, 0, 0]
      }
    ],

    markers: [
      {
        name: 'Platonizm',
        path: 'https://i.ibb.co/nbyn1gf/platonism.png',
        scales: [
          {
            scale: 0,
            bar: 1,
            min: 0.6
          },
          {
            scale: 2,
            bar: 0,
            min: 0.6
          }
        ]
      },
      {
        name: 'Arystotelianizm',
        path: 'https://i.ibb.co/tmFbrjB/aristotelianism.png',
        scales: [
          {
            scale: 0,
            bar: 0,
            min: 0.6
          },
          {
            scale: 2,
            bar: 1,
            min: 0.6
          }
        ]
      },
      {
        name: 'Stoicyzm',
        path: 'https://i.ibb.co/5WzmpWb/stoicism.png',
        scales: [
          {
            scale: 2,
            bar: 1,
            min: 0.6
          },
          {
            scale: 3,
            bar: 1,
            min: 0.6
          }
        ]
      },
      {
        name: 'Epikurianizm',
        path: 'https://i.ibb.co/hRt7gWW/epicureanism.png',
        scales: [
          {
            scale: 1,
            bar: 1,
            min: 0.6
          },
          {
            scale: 4,
            bar: 0,
            min: 0.6
          }
        ]
      },
      {
        name: 'Obiektywizm',
        path: 'https://i.ibb.co/q9jRYcn/objectivism.png',
        scales: [
          {
            scale: 0,
            bar: 0,
            min: 0.6
          },
          {
            scale: 1,
            bar: 0,
            min: 0.6
          }
        ]
      },
      {
        name: 'Humanizm',
        path: 'https://i.ibb.co/QK7s8Sw/humanism.png',
        scales: [
          {
            scale: 1,
            bar: 1,
            min: 0.6
          },
          {
            scale: 5,
            bar: 1,
            min: 0.6
          }
        ]
      },
      {
        name: 'Hobbesjanizm',
        path: 'https://i.ibb.co/k90bqZY/hobbesian.png',
        scales: [
          {
            scale: 0,
            bar: 0,
            min: 0.6
          },
          {
            scale: 5,
            bar: 0,
            min: 0.6
          }
        ]
      },
      {
        name: 'Monoteizm',
        path: 'https://i.ibb.co/qYwgtsX/monotheism.png',
        scales: [
          {
            scale: 0,
            bar: 1,
            min: 0.6
          },
          {
            scale: 4,
            bar: 1,
            min: 0.6
          }
        ]
      },
      {
        name: 'Nietzscheanizm',
        path: 'https://i.ibb.co/r4j9vqf/nietzschean.png',
        scales: [
          {
            scale: 4,
            bar: 0,
            min: 0.6
          },
          {
            scale: 5,
            bar: 1,
            min: 0.6
          }
        ]
      },
      {
        name: 'Rosseauianizm',
        path: 'https://i.ibb.co/7Kyn5vm/rousseauian.png',
        scales: [
          {
            scale: 1,
            bar: 0,
            min: 0.6
          },
          {
            scale: 5,
            bar: 1,
            min: 0.6
          }
        ]
      }
    ]

  }
];
