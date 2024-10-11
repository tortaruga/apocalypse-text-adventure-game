const message = document.querySelector('.message');
const btnOne =  document.querySelector('.btn-one');
const btnTwo = document.querySelector('.btn-two');
const btnThree = document.querySelector('.btn-three');
const btns = document.querySelectorAll('.btns');

const background = document.querySelector('img'); 
const src = background.getAttribute('src');

const babaYaga = 'https://storage.googleapis.com/pai-images/4a2197ed4a17443286b18d6b3e2a61b4.jpeg';
const astronave = 'https://storage.googleapis.com/pai-images/aac5c44c841b4a5084aa0b290ba6aece.jpeg';
const ondina = 'https://storage.googleapis.com/pai-images/c66f92566d804d8c852418b311f16b97.jpeg';
const bosco = 'https://storage.googleapis.com/pai-images/46aabcede11a471883a4efe1bd1cad58.jpeg';
const sottacqua = 'https://storage.googleapis.com/pai-images/d9d89e2e2c8b46a08c8c899a7600843a.jpeg';
const casaBianca = 'https://storage.googleapis.com/pai-images/1d7d94385e3c4a5ebf4e13dfac8cb04b.jpeg';
const sottosuolo = 'https://storage.googleapis.com/pai-images/cff77c73735742c4ba39cf41445f9693.jpeg';
const crash = 'https://storage.googleapis.com/pai-images/17884ff11d064406a5ac930bdc68ae49.jpeg';
const astronaveDentro = 'https://storage.googleapis.com/pai-images/941ddba8082641eea886f3ea347f67ad.jpeg';
const vicoli = 'https://storage.googleapis.com/pai-images/8fd09f0fef194314b4a59e326af19705.jpeg';
const foresta = 'https://storage.googleapis.com/pai-images/eb8f095f505348638fed31182688e252.jpeg';
const invasione = "https://storage.googleapis.com/pai-images/ab3721d5492d4c00abcf131483199251.jpeg";
const bomba = 'https://storage.googleapis.com/pai-images/2d977973ba42478ea5e8f22f9d4e502f.jpeg';
const tempioSamurai = 'https://storage.googleapis.com/pai-images/58179136fc0541f8bd421f777b4c4b12.jpeg';
const rapimentoAlieno = 'https://storage.googleapis.com/pai-images/b84f5b146cb947deb07852518d0321f7.jpeg';
const villaggio = 'https://storage.googleapis.com/pai-images/0279490b1e604cd4be83aadfb963ecb1.jpeg';
const coccodrilloBg =  'https://storage.googleapis.com/pai-images/f9e3848cde3541d3b5fd89ab5420f668.jpeg';
const elefanteBg =  'https://storage.googleapis.com/pai-images/5d584987ce3743b683297225491a7bce.jpeg';
const pestilenza = 'https://storage.googleapis.com/pai-images/742397a6b51e4313ae2e8d5da594b40d.jpeg';
const guerra = 'https://storage.googleapis.com/pai-images/154fcd952aae4bf59016630087de0546.jpeg';
const morte = 'https://storage.googleapis.com/pai-images/6e83510b239c4eb0a9188f8335f098f3.jpeg';
const asteroidi = 'https://storage.googleapis.com/pai-images/01a4b5aba0644fc09556789d68f0d102.jpeg';
const alessandro = 'https://storage.googleapis.com/pai-images/dcf7e567d2114428be3d7c69d69ab306.jpeg';
const piscina = 'https://storage.googleapis.com/pai-images/a78d04d633ca46b2a2c021548b1f0ee8.jpeg';
const eroe = 'https://storage.googleapis.com/pai-images/eb035ed6d1464321ba9ade45e84e1500.jpeg';
const versoNuoveGalassie = 'https://storage.googleapis.com/pai-images/d3e1e48eb0ed4dc680f91feb45227bca.jpeg';
const dedalo = 'https://storage.googleapis.com/pai-images/ebaf212e606d4a739f8cc2ccfeb58de9.jpeg';
const zero = 'https://storage.googleapis.com/pai-images/587ba692f0e849f4a911262d166d0608.jpeg';
const subacqueo = 'https://storage.googleapis.com/pai-images/d9d89e2e2c8b46a08c8c899a7600843a.jpeg';
const ristorante = 'https://storage.googleapis.com/pai-images/fd3ab1391c6441d394a2043e7fcbe5d7.jpeg';
const cryptovalute = 'https://storage.googleapis.com/pai-images/a0e83efe615d48659dfb7112a701deaa.jpeg';
const granburrone = 'https://storage.googleapis.com/pai-images/703b3ad4f7104d3aa61ffc85becf8451.jpeg';
const verdiacque = 'https://storage.googleapis.com/pai-images/e8cbdf2eec2940daa6804bc09e0e8bf7.jpeg';
const luna = 'https://storage.googleapis.com/pai-images/0acb1b013df6437997c48f1ab9488c6a.jpeg';

const messages = [
  {
    name: 'istruzioni',
    text: "Mi fa piacere che la cosa ti riempia di entusiasmo. Se è vero che morirai qualunque strada tu scelga di prendere, è anche vero che ci sono morti più stupide e meno dignitose di altre. Non ho troppe speranze che farai scelte intelligenti... Detto ciò, buona fortuna!",
    button_text: ["Inizia"],
    on_click: [primaScena]
  },
  {
    name: 'primaScena',
    text: "Ti trovi in mezzo alla strada, nel pieno di una invasione di Zombi (bell'idea, tra l'altro. Non potevi startene a casa?). Devi raggiungere al più presto il Punto di Ritrovo 0, il quartier generale dei sopravvissuti. Non ci sei mai stato, però, e non hai idea di dove si trovi. Sai della sua esistenza solo perché l'hai sentito nominare da un moribondo a cui stavano sgranocchiando le caviglie.",
    button_text: ["Chiedi informazioni a uno Zombi", "Cerca su Google", "Vai alla cieca"],
    on_click: [chiediZombi, googleIt, vaga]
  },
  {
    name: 'chiediZombi',
    text: "<p>...</p> <p>Iniziamo bene. Vedi un gruppetto di Zombi che stanno facendo la siesta dopo un bel banchetto di cervelli. Uno di loro è alto, slanciato, e ha l'aria sveglia; un altro sembra un deficiente, e un terzo ha lo sguardo assatanato. A chi chiedi?</p>",
    button_text: ["Al tipo sveglio", "Al deficiente", "Al figlio di Satana"],
    on_click: [zombiSveglio, zombiDeficiente, zombiSatana]
  },
  {
    name: 'zombiSveglio',
    text: 'Lo Zombi ti guarda un attimo con interesse, poi sembra decidere che non sei così interessante dopotutto (e che mangiare il tuo cervello abbasserebbe il suo quoziente intellettivo), quindi scuote le spalle e risponde: "In fondo a destra."',
    button_text: ["Ringrazia", "Mettiti in cammino"],
    on_click: [grazie, cammina]
  },
  {
    name: 'cammina',
    text: 'Lo Zombie ti guarda allontanarti, con la testa piegata da un lato e l\'aria sovrappensiero. Ci si annoia un po\' quando si è Zombi intelligenti circondati da Zombi allocchi. Non lo fa per odio, e nemmeno perché offeso dalla tua scarsa educazione: lo fa giusto per passare il tempo. Ti dà ancora qualche secondo di vantaggio, poi manda lo Zombi Assatanato a squarciarti la gola a morsi.',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  
  {
    name: 'grazie',
    text: '<p>Non ricevi altra risposta che due occhi come due pugnali fissi nei tuoi. Fai un mezzo inchino e ti avvii verso la tua meta. Lo Zombi ti guarda allontanarti per un po\', poi scuote leggermente la testa e torna a farsi gli affari suoi.</p><p>La strada su cui ti trovi pare non finire mai. Stai camminando da due ore e ancora non c\'è traccia di una svolta a destra. Il tuo stomaco inizia a brontolare, così ti guardi intorno e vedi i resti di quello che una volta era un supermercato.</p> ',
    button_text: ["Entra a cercare qualcosa da mangiare", "Ignora la fame"],
    on_click: [supermercato, ignora]
  },
  {
    name: 'supermercato',
    text: '<p>Tutte le cose più utili sono ovviamente andate via da un pezzo, accaparrate da persone molto più svelte e argute di te. Rovistando tra le macerie e l\'immondizia trovi un paio di scatolette di tonno e una mela mezzo raggrinzita. Stai per uscire dal supermercato quando un movimento alle tue spalle cattura la tua attenzione. </p>',
    button_text: ["Girati a guardare", "Butta a terra uno dei pochi scaffali ancora in piedi e lanciati di corsa"],
    on_click: [guarda, gambe]
  },
  {
    name: 'guarda',
    text: '<p>Tutto ciò che vedi è un lampo di denti giallognoli diretti verso la tua carotide, e qualche schizzo di sangue prima di salutare questo mondo crudele. Ma ehi, almeno hai visto cosa ti ha ucciso prima di morire! Sempre girarsi a guardare. Sarebbe stato un peccato andarsene col dubbio.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'gambe',
    text: '<p>Corri a perdifiato cercando di non inciampare sulle varie cianfrusaglie disseminate sul pavimento, consapevole che qualunque cosa fosse quella che si è mossa alle tue spalle adesso ti sta inseguendo a una velocità per niente rassicurante. </p>',
    button_text: ["Tiragli la mela", "Tiragli una scatoletta di tonno"],
    on_click: [lanciaMela, lanciaTonno]
  },
  {
    name: 'lanciaMela',
    text: '<p>La mela finisce dritto nella gola dello Zombi, che aveva la bocca spalancata per strillare come un ossesso. Buon lavoro, lo Zombi si sta strozzando! Continua a correre verso la salvezza!</p>',
    button_text: ["Esulta", "Trattieni il tuo entusiasmo"],
    on_click: [esulta, trattieniti]
  },
  {
    name: 'esulta',
    text: '<p>Abbassi la guardia per gustarti la tua vittoria, e ti accorgi troppo tardi della buccia di banana. Scivoli indecorosamente e batti la fronte contro uno spigolo maligno. Sai già il resto.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  
  {
    name: 'trattieniti',
    text: '<p>Non è il momento ti perdere la concentrazione. Continui a correre finché sei fuori dal supermercato. Ti siedi a riprendere il fiato sotto l\'ombra di un albero e mangi il tuo tonno. Tutta quell\'attività ti ha messo ancora più fame, però.</p>',
    button_text: ["Mangia anche l\'altra scatoletta", "Datti una regola"],
    on_click: [tonnoBis, dieta]
  },
  {
    name: 'tonnoBis',
text: '<p>Ehi, con calma, che è tutta sta foga! Mangia con criterio! Finirai per—</p><p>...Ti va di traverso e ti strozzi.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  
  {
    name: 'dieta',
text: '<p>Meglio stare leggeri. Continui il tuo cammino alla ricerca del Punto 0, ma inizi a chiederti se lo Zombi Sveglio non ti abbia dato delle informazioni errate. Questa strada va avanti all\'infinito, sempre dritta, senza svolte nè a destra nè a sinistra... Pian piano l\'asfalto lascia il posto all\'erba, e gli edifici abbandonati ad alti alberi verdi. Sei in un folto bosco.</p>',
    button_text: ["Ops.", "Torna indietro"],
    on_click: [ops, indietro]
  },
  {
    name: 'ops',
text: '<p>Eh, "Ops". Che facciamo? Chi esita è perduto. Un lupo affamato ti salta addosso e ti sbrana, anche se storcendo un poco il muso perché non è che hai un sapore troppo gradevole. Più spirito di iniziativa la prossima volta!</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  
  {
    name: 'indietro',
text: '<p>Giri i tacchi pronto a svignartela dal boscherello... E ti ritrovi con il muso a mezzo palmo dal petto di qualcuno. O... qualcosa? Ha un aspetto umano, perlopiù, se ignoriamo le orecchie e la coda da volpe. </p>',
    button_text: ["..."],
    on_click: [renard]
  },

    {
    name: 'lanciaTonno',
text: '<p>La scatoletta di tonno colpisce lo Zombi proprio in fronte, tramortendolo. Ben fatto!</p>',
    button_text: ["Esulta", "Non esultare"],
    on_click: [esulta, nonEsulta]
  },

  
    {
    name: 'nonEsulta',
text: '<p>Esci vivo dal supermercato, e hai una fame da lupi. Ti siedi alle nostre ombre odorate ove soffia dal mare il maestrale, e mangi...</p>',
    button_text: ["La mela", "La scatoletta di tonno che ti è rimasta"],
    on_click: [mangiaMela, mangiaTonno]
  },
  {
    name: 'magiaTonno',
text: '<p>Sei ancora affannato per la corsa, apri la scatoletta di tonno, sei un incapace, ti tagli—no, ti sfregi—no, ti dissangui con l\'orlo affilato della lattina. Che scandalo.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  
  {
    name: 'mangiaMela',
text: '<p>Dai un morso alla mela, tutta raggrinzita, farinosa, uno schifo, lo sputi, dici col cavolo che do un altro morso, e mentre contempli questa bella mela con il segno di un singolo morso ecco che appare davanti a te lo spirito di Steve Jobs, evocato dal simbolo della Apple.</p><p>Mentre tu lo fissi con la faccia da pesce lesso che ti ritrovi, lui fa un sospiro e dice: "Ah, un altro deficiente che ha bisogno di una guida... In che cosa posso esserti utile? Hai tre desideri a disposizione."</p>',
    button_text: ["Un pasto decente", "Immunità dagli Zombi", "Teletrasportami al Punto 0"],
    on_click: [cibo, immunità, teletrasporto]
  },
  
    {
    name: 'cibo',
text: '<p>Dalla faccia di zio Steve si capisce che hai sprecato il tuo primo desiderio per una scemenza, ma anche che non è che si aspettasse chissà che da uno col muso come il tuo. Ti appare davanti un centrifugato di roba verde e molto invitante (sarcasmo) che tu, forse facendo la prima cosa saggia dal momento in cui la terra ha dovuto sopportare i tuoi passi sbilenchi, esiti a bere. Stevey ti guarda incoraggiante: "Bevi, è un concentrato di proteine e sali minerali. Fa bene al corpo e allo spirito, ed è il modo migliore per tenersi in forma in un\'Apocalisse". Hai buttato il tuo primo desiderio dalla finestra, complimenti.</p>',
    button_text: ["Chiedi un secondo desiderio"],
    on_click: [secondoDesiderio]
  },

  {
    name: 'immunità',
text: '<p>Uuuh, buono! Ogni tanto hai anche buone idee quindi! Adesso gli Zombi non saranno più un problema per te. </p>',
    button_text: [ "Chiedi un secondo desiderio"],
    on_click: [secondoDesiderio]
  },
  
  {
    name: 'secondoDesiderio',
text: '<p>Appena apri bocca Stevey ti interrompe: "Mi dispiace, ma la tua mela è diventata obsoleta. Per chiedere altri desideri dovresti fare l\'aggiornamento, ma la tua mela non lo supporta perché è una mela dell\'anno scorso, ormai. Ci si vede!" e sparisce in una nuvola di fumo. Non ti resta che proseguire su questa strada maledetta e sperare che porti davvero al Punto 0. Ma esattamente quand\'è che sei finito nel bosco? Sta facendo buio, e ... Quel tizio lì nell\'ombra... ha la coda??</p>',
    button_text: ["..."],
    on_click: [renard]
  },
  
  {
    name: 'teletrasporto',
text: '<p>Congratulazioni, sei arrivato al Punto 0! Ma... Non c\'è nessuno. Sembra sia stato abbandonato in tutta fretta. Hai un brutto presentimento. Un colpo secco dietro la nuca ti mette k.o.</p>',
    button_text: ["..."],
    on_click: [ko]
  },
 
  {
    name: 'zombiSatana',
text: '<p>"Scusa, mi sapresti di—" <br>Ti stacca la testa a morsi.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  }, 
  
  {
    name: 'zombiDeficiente',
text: '<p>Lo Zombi ti fissa, gli occhi gialli e vacui, la bocca spalancata, la lingua penzolante. Assomiglia un po\' a te. Potreste capirvi... In effetti, sembra stia cercando di dirti qualcosa... No—no, sta cercando di mangiarti. Ti ha azzannato un braccio. Cosa fai lì impalato? Corri!</p>',
    button_text: ["Corri"],
    on_click: [corri]
  }, 
  
  {
    name: 'corri',
text: '<p>L\'hai seminato: buona notizia. Ma ti sei perso in un labirinto di vicoli inquietanti: meno buona notizia. Vaghi un po\', poi finisci in un vicolo cieco. Senti un fischio basso e lungo, ti volti, e vedi un losco figuro col capello calato sugli occhi che sta appoggiato al muro e ti sbarra la strada</p>',
    button_text: ["Butta il portafogli e scappa", "Fai lo sbruffone"],
    on_click: [portafogli, sbruffone]
  },
  {
    name: 'portafogli',
text: '<p>Un coraggio da leoni, vedo. Comunque, il losco figuro è confuso abbastanza da lasciarti fuggire via senza importunarti oltre. Il problema è che questi vicoli abbondano di stradine senza uscita e loschi figuri, e tu avevi un solo portafoglio.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'sbruffone',
text: '<p>Ma guardati. Cosa ti ha fatto pensare di poter vincere contro un delinquente incallito nato e vissuto sulla strada? Donde ti viene tanta boria, tanta arroganza, tanta tracotanza, tanta presunzione, tanta spocchia? Comunque, l\'omaccione cattivo potrebbe spezzarti la spina dorsale in due: non lo fa. A quanto pare ha ammirato la tua faccia tosta. Ti pesta ben bene, ti fa due occhi neri e ti spezza tre dita, ma ti lascia in vita. Dopo di che, ti chiede informazioni su di te.</p>',
    button_text: ["Fai due chiacchiere", "Fai il prezioso"],
    on_click: [chiacchiera, taci]
  },
  
  {
    name: 'taci',
text: '<p>L\'omaccione, giusto per darti una scusa per tenere la bocca chiusa, ti rompe due denti.</p>',
    button_text: ["Deciditi a parlare"],
    on_click: [chiacchiera]
  },
  
  {
    name: 'chiacchiera',
text: '<p>Chiacchierando amabilmente col malandrino, viene fuori che questa è l\'unica zona della città dove gli Zombi non osano mettere piede per paura di essere stropicciati e stesi come lenzuola al sole.</p>',
    button_text: ["Chiedi del Punto 0", "Unisciti ai brutti ceffi"],
    on_click: [chiediDirezioni, gang]
  },
  
  
  {
    name: 'chiediDirezioni',
text: '<p>"Il punto 0? Non so neanche se esiste davvero... E anche se esistesse, non ha speranze contro gli Zombi. Non ne vale la pena." Ti fa conoscere il resto della gang e ti propone di restare con loro.</p>',
    button_text: ["Declina e continua a cercare il Punto 0", "Accetta"],
    on_click: [cercaPunto0, gang]
  },
  
  
  {
    name: 'gang',
text: '<p>Bene, bene, bene. Vogliamo diventare brutti e cattivi, eh? Ma ti sei visto? Per entrare nella banda bisogna superare delle prove di iniziazione violente e pericolose, tra cui lasciarsi marchiare a fuoco come delle mucche. Come te la cavi?</p>',
    button_text: ["Urla", "Fai lo stoico"],
    on_click: [urla, stoico]
  },
  
  
  {
    name: 'urla',
text: '<p>Sei troppo delicato per la strada. Vieni accettato nella squadra, ma alla prima missione fai un passo falso e ci lasci le penne</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'stoico',
text: '<p>Addirittura! Non so se è fortuna... Chi vogliamo prendere in giro, è palesemente fortuna, ma comunque sopravvivi un bel po\' nel quartiere malfamato con i tuoi nuovi amici. Ma tutte le cose belle finiscono, e un bel giorno agli zombi si aggiungono gli asteroidi! Tre asteroidi si stanno dirigendo verso la terra, e il quartiere che ormai chiami casa è proprio nella zona dove è stimato l\'impatto di uno di loro. Fuggi verso terre migliori.</p>',
    button_text: ["Est", "Ovest"],
    on_click: [est, ovest]
  },
  
  {
    name: 'est',
text: '<p>Cammina cammina, incontri Elon Musk. Ti chiede se vuoi fuggire su Marte sulla sua astronave.</p>',
    button_text: ["Accetta", "Dagli un pugno in faccia"],
    on_click: [elon, pugno]
  },
  
  {
    name: 'elon',
text: '<p>Perso per perso, accetti la proposta di Elon Musk. Ormai esperto borseggiatore, gli sottrai dalla tasca qualche smeraldo, che usi per pagarti il viaggio. La sua mente è tanto occupata in calcoli astronomici e nel cercare di ricordarsi il nome di suo figlio che non si accorge di star essendo pagato con i suoi stessi soldi.</p>',
    button_text: ["Spingi la gente ad ammutinarsi", "Lascia ad Elon il comando della nave"],
    on_click: [ammutinati, elonComanda]
  },
  
  {
    name: 'elonComanda',
text: '<p>Elon è un incompetente. Il primo giorno di viaggio decide di rendere l\'aria democratica chiedendo a tutti, grandi e piccini, di pagare 8$ per respirare. La gente si ribella, ma è difficile vincere le rivoluzioni quando non si respira. Morite tutti con le facce viola.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  
  {
    name: 'ammutinati',
text: '<p>Buttate Elon Musk dall\'astronave e lo lasciate fluttuare nell\'universo. Il viaggio è piacevole finché dura, ma Elon è un incompetente, e la sua astronave è una ciofeca. Viene catturata nella morsa gravitazionale di Marte, e si sfracella contro la rossa terra di un altro mondo, divenendo la tomba comune di voi disgustosi riccazzi che avete lasciato la più parte dell\'umanità a morire pagando il vostro viaggio verso l\'inferno con smeraldi rubati. Che la terra vi sia lieve, screanzati.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  
  {
    name: 'pugno',
text: '<p>Preferisci essere frittatizzato da 19 asteroidi che condividere un altro pianeta con Elon Musk. Gli molli un destro sul muso e cerchi fortuna altrove. Mentre cammini vieni travolto da una folla di invasati. Scopri che sono sostenitori di Trump in viaggio verso le urne. Vieni trascinato con loro senza avere voce in capitolo.</p>',
    button_text: ["Vota Trump", "Fai un colpo di stato e prendi il potere"],
    on_click: [votaTrump, prendiPotere]
  },
  {
    name: 'votaTrump',
text: '<p>Voti Trump. Il salvatore del mondo. Il Messia. Colui che fermerà l\'Apocalisse. Trump minaccia l\'Apocalisse di sganciare i missili nucleari. L\'Apocalisse non risponde. Trump si sente emasculato, e per dimostrare al mondo la sua possenza preme quel benedetto pulsante e lancia bombe a destra e a manca. Applausi scroscianti.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'prendiPotere',
text: '<p>Ti vesti da sciamano e sfrutti la confusione di chi ti vede per prendere il potere. Congratulazioni. E adesso?</p>',
    button_text: ["Proponi di aiutare gli Zombi a casa loro", "Convinci il popolo che gli asteroidi sono una balla inventata dai militanti LGBT+", "Chiedi aiuto a Mattarella"],
    on_click: [salvini, agendaLGBT, mattarella]
  },
  {
    name: 'salvini',
text: '<p>Gli Zombi non sono entusiasti all\'idea di pagare di tasca propria un muro che li separi dal cibo. Fanno una rivolta e sterminano quel poco d\'umanità che era rimasto.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'agendaLGBT',
text: '<p>Il tuo piano è un successo, la gente ti crede. Ma gli asteroidi continuano a esistere ciononostante, e si schiantano sulla Terra, esattamente su casa tua per la precisione.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'mattarella',
text: '<p>Mattarella si trasforma in un topino bianco col panciotto e scappa via squittendo. Lo segui strillando Signor Presidente ma dove va ho bisogno di lei la prego, finché capisci che ti sta conducendo davanti a una strana macchina dall\'aspetto futuristico che potrebbe essere un\'astronave o un appuntamatite gigante. Sergio squittisce: "La Terra è bella che andata. L\'unica salvezza è caricare ciò che resta dell\'umanità su questa nave e fuggire verso nuovi pianeti."</p>',
    button_text: ["Offriti come pilota", "Offriti come cuoco."],
    on_click: [pilota, cuoco]
  },
  {
    name: 'cuoco',
text: '<p>Avveleni metà dell\'equipaggio con la tua cucina terrible, e l\'altra metà si lascia morire di fame per terrore delle tue pietanze. Arrivi sul suolo di un nuovo mondo da solo, senza pilota, schiantando l\'appuntamatite contro un tempio alieno e causando una guerra santa tra i fedeli alieni che ritengono la tua venuta un avvenimento divino e quelli che ti ritengono ( a ragione) solo un vandalo intergalattico. Non saprai mai come va a finire, perché muori poco dopo l\'impatto, quando ti va di traverso il singhiozzo.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'pilota',
text: '<p>La tua abilità come pilota è straordinaria. Neanche mettendocisi d\'impegno si potrebbe far peggio. Causi 19 incidenti galattici nelle prime 5 ore, portando la Polizia delle Galassie Unite a iniziare un inseguimento tra gli anelli di Saturno nel tentativo di arrestare la folle corsa dell\'Appuntamatite. Scambi l\'acceleratore con il freno, la destra con la sinistra, il cervello con i piedi, e finisci per schiantarti nel cratere di una luna di Giove. L\'ultima cosa che vedi prima di liberare l\'universo dalla tua molesta presenza è il ricciolo di fumo che si alza dalla astronave verso un cielo freddo e per niente familiare.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  
  {
    name: 'ovest',
text: '<p>Cammina cammina, incontri il primo Cavaliere dell\'Apocalisse: Pestilenza. Ti fa solo ridere: tu sei sopravvissuto al COVID. </p>',
    button_text: ["Mangiati un pipistrello per sfregio", "Mettiti la mascherina"],
    on_click: [pipistrello, mascherina]
  },
  {
    name: 'pipistrello',
text: '<p>Il pipistrello è bello scrocchiarello, ma stavolta ti trasmette una variante dello scorbuto che fa esplodere i cervelli: fortunatamente per te tu il cervello non ce l\'hai. Sfortunatamente per te, però, vieni arrestato per epidemia colposa, e condannato a 1200 euro di multa più 6 anni di reclusione. Ti sbattono in galera dove, presi come sono dall\'Apocalisse, si dimenticano di te, finché non ci fai le radiche e le ragnatele.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'mascherina',
text: '<p>Sai benissimo come funziona: ti metti la mascherina, ti fai prima seconda e terza dose, e saluti con il gomitino tutti quelli che incontri. Passi senza problemi la prima sfida dell\'Apocalisse. Incontri il secondo cavaliere: Carestia.</p>',
    button_text: ["Ti mangi i pipistrelli", "Ti mangi gli Zombi"],
    on_click: [pipistrelliBis, mangiaZombi]
  },
  {
    name: 'pipistrelliBis',
text: '<p>Ma allora non le vuoi proprio capire le lezioni tu.</p>',
    button_text: ["Ricomincia."],
    on_click: [reset]
  },
  {
    name: 'mangiaZombi',
text: '<p>Prendi due piccioni con una fava: meno Zombi in giro per strada e più cibo nella tua pancia. Prosegui il cammino fino a che incontri il terzo Cavaliere: Guerra.</p>',
    button_text: ["Proponi una partita a Risiko", "Improvvisati condottiero"],
    on_click: [risiko, condottiero]
  },
  {
    name: 'condottiero',
text: '<p>Saranno le stelle che guidano il tuo destino, o l\'inarrestabile aumento dell\'entropia che ci trascina verso avvenimenti sempre più improbabili, fatto sta che sei un condottiero brillante. La tua carriera fa invidia ai grandi conquistatori del passato, e pian piano ti riprendi dagli Zombi tutti i territori che erano stati sottratti all\'umanità. Muori per le complicanze di una polmonite, di ritorno dalla tua ultima spedizione, in cui, con gli occhi pieni di rammarico, avevi visto il fine ultimo del mondo. Niente più mondi da conquistare. Non nella terra dei vivi, almeno. I tuoi soldati, col cuore gonfio di dolore, ti danno un ultimo saluto: "Va\', e conquista l\'Oltretomba, Capitano."</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'risiko',
text: '<p>Guerra ha passato ere geologiche a tramare contro i popoli; tu hai passato ere geologiche a giocare a Risiko. Non c\'è competizione. Vinci a mani basse. Continui il tuo viaggio fino a che la tua strada non viene sbarrata dall\'ultimo Cavaliere: Morte ti propone una partita a scacchi.</p>',
    button_text: ["Accetta", "Proponi briscola"],
    on_click: [scacchi, briscola]
  },
  {
    name: 'briscola',
text: '<p>Hai appena finito di stracciare Guerra a Risiko, e non hai voglia di stare a ragionare sugli scacchi: proponi invece una rilassante partita a briscola. Morte accetta, e si appassiona tanto da continuare a chiedere rivincite. Passi secoli così, a giocare a briscola con la Morte, con la tua barba che si fa sempre più lunga e la tua faccia sempre più incavata, tenuto in vita dal semplice fatto che Morte è tanto occupata a giocare a carte che si dimentica di strapparti alla vita.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'scacchi',
text: '<p>...Hai... hai appena vinto una partita a scacchi... con la Morte? Non è possibile... Il manuale non lo prevedeva... Cosa sta succedendo...?</p><p>L\'universo si condensa in un unico punto, poi esplode in un nuovo Big Bang, dando origine a un nuovo cosmo e una nuova storia in tutto e per tutto identici ai precendenti. Giochi ancora a scacchi con la Morte, vinci ancora, causi ancora la morte e rinascita dell\'universo. A quanto pare la Bibbia ha tralasciato questo particolare: l\'Apocalisse non è causata dai Quattro Cavalieri... ma da te. </p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'cercaPunto0',
text: '<p>Le vaghe indicazioni che ti forniscono i brutti ceffi ti conducono nel folto di un bosco. Da qui in poi devi cavartela da solo. All\'improvviso sbuca dalle ombre un tizio dai lunghi capelli rossi. Non sono tanto i capelli ad attirare la tua attenzione, però, quanto le orecchie a punta, i baffi... e la coda.</p>',
    button_text: ["..."],
    on_click: [renard]
  },
  {
    name: 'renard',
text: '<p>"Ci siamo persi, eh?" C\'è un sinistro lampo rosso nei suoi occhi che ti gela il sangue per un secondo, ma poi il tizio-volpe fa un lieve inchino col capo e uno svolazzo con la mano: "Renard, al vostro servizio", si presenta con tono amichevole. Già che ci sei, chiedi indicazioni per il Punto 0.</p><p>"In fondo a destra... Ma sta per fare buio, e i boschi bui sono pericolosi." Mentre cerchi di capire se era una minaccia o un avvertimento, senti un rumore...</p>',
    button_text: ["..."],
    on_click: []
  },
  {
    name: 'stomaco',
text: '<p>Era il brontolare del tuo stomaco. E\' da un po\' che non mangi, e la fame ti sta facendo impazzire. Girano voci che così siano nati i primi Zombi, colti da una fame improvvisa e incontrollabile che li ha spinti ad azzannare la prima cosa trovata a portata di mano. Alcuni si sono mangiati le scrivanie dei loro uffici, altri le mattonelle delle loro case... Altri si sono avventati sui cervelli dei loro vicini, e così ci siamo ritrovati in questo bel casino. Quale che sia la verità, il tuo problema adesso è che hai talmente tanta fame che ti mangeresti a morsi da solo. Che si fa? </p>',
    button_text: ["Ti mangi Renard", "Ti mangi un albero"],
    on_click: [mangiRenard, castoro]
  },
  {
    name: 'mangiRenard',
text: '<p>Non te lo perdonerò mai. Era il mio personaggio preferito. Farò del mio meglio per renderti la vita un inferno d\'ora in poi. Ti farò morire nei modi più dolorosi e strazianti, estinguerò dai tuoi occhi ogni scintilla di ragione e ti trascinerò sull\'orlo della follia.</p>',
    button_text: ["Prova a sfuggirmi"],
    on_click: [illuso]
  },
{
    name: 'castoro',
text: '<p>Ti lanci sul primo albero che vedi e inizi a strappare pezzi di corteccia con i denti. Renard ti guarda con gli occhi spalancati, poi indietreggia e mormora: "Ero venuto a metterti i bastoni fra le ruote, ma mi sa che ce la fai benissimo da solo... Non voglio avere niente a che fare con psicopatici come te". <br>Il bosco era magico, e le piante pure. Mangiando la corteccia diventi uno spirito silvestre: ti iniziano a crescere i rami dalla testa e scaglie di legno sulla pelle. Vaghi fuggendo dagli uccelli che vogliono nidificarti nelle orecchie fino a quando le radici che ti stanno spuntando dai piedi non ti inchiodano al terreno, e diventi oggetto di culto di una colonia di Gnomi delle Rocce. Sei in tutto e per tutto un albero, ma hai ancora una coscienza, e la capacità di starnutire, per cui diventi un Oracolo che starnutisce due volte per dire sì, e una per dire no.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'grizzly',
text: '<p>Ti volti e scopri che a produrre il rumore era un orso gigantesco e molto arrabbiato. "Svelto, entra qui dentro!" Renard indica una tana nel terreno che fino ad ora era nascosta da fogliame vario. Il tuo sguardo passa dal tizio-volpe al grizzly valutando le tue possibilità di sopravvivenza.</p>',
    button_text: ["Fidati della volpe", "Ma manco per idea"],
    on_click: [fidati, nonFidati]
  },
  
  {
    name: 'nonFidati',
text: '<p>La volpe non te la racconta giusta. Te la caverai da solo contro l\'orso: ti lanci verso di lui strillando come un demente. Un bagliore di artigli aguzzi cattura l\'ultima luce del giorno, poi lo squarcio nel petto ti toglie il respiro, e non vedi più nulla.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  
  {
    name: 'Fidati',
text: '<p>Decidi che, se morire devi, tanto vale morire per mano di qualcuno leggermente più civilizzato, e segui la volpe giù nella stretta tana. Dopo un po\' di tempo passato a strisciare carponi la tana si fa più ampia, e poi più ampia ancora... C\'è un\'intera città sottoterra! Creature di ogni tipo, animali, umani, ibridi, si affannano per viuzze illuminate da lanterne dai colori caldi, passeggiano per il mercato, discutono nelle piazze... La volpe guarda con aria divertita la tua faccia strabiliata. "Vuoi fare un giro? Sono la guida turistica più richiesta nel Sottosuolo!"</p>',
    button_text: ["Accetta e esplora", "Devo trovare il Punto 0"],
    on_click: [esplora, maAlloraEUnaFissa]
  },
  
  {
    name: 'maAlloraEUnaFissa',
text: '<p>Renard fa un sospiro annoiato: "Ancora con qusto Punto 0... Perché sei tanto fissato col Punto 0? Non c\'è niente di interessante là, solo gente depressa e deprimente che cerca tutto il tempo di risolvere l\'Apocalisse quando potrebbe semplicemente godersela. Probabilmente a quest\'ora sono stati tutti uccisi da una spedizione Zombi perché si scordano sempre di chiudere il cancello." Forse non ha tutti i torti. In fondo tu hai deciso di andare al Punto 0 per mancanza di alternative; adesso forse un\'alternatva ce l\'hai. Che differenza fa dove trascorri l\'Apocalisse? E Renard non sembra volerti troppo male... Per lo meno ancora non ti ha ucciso.</p>',
    button_text: ["Resta nel Sottosuolo", "Segui il piano originario"],
    on_click: [esplora, ossessione]
  },
  
  
  {
    name: 'ossessione',
text: '<p>No, sei arrivato fin qui per trovare il rifugio, e non ti fermerai prima di averlo raggiunto. Forse è davvero l\'ultimo baluardo dell\'umanità... A quella bestia ibrida può anche non importare un fico secco, non è la sua gente che sta venendo decimata, ma tu non sei uno spirito-volpe, e la tua unica lealtà è al genere umano. Se da qualche parte stanno combattendo per la libertà, devi andare a combattere al loro fianco.</p><p>Renard scuote le spalle e ti scorta fino alla fine di Sottosuolo. Giunti davanti un varco che porta in superficie ti saluta: "Beh, lì fuori c\'è il tuo agognato Punto 0; mi auguro che sia di tuo gradimento". Ti fissa con i suoi occhi rossi e una mano tesa verso l\'esterno che ti invita a proseguire.</p>',
    button_text: ["Esci", "...Mi stai per ammazzare, vero?"],
    on_click: [esci, intuito]
  },
  
  {
    name: 'esci',
text: '<p>Oh, finalmente, aria! E quelli laggiù devono essere i cancelli del Punto 0! Ce l\'hai fatta! Fai un passo verso il tuo traguardo, e poi senti dei denti aguzzi affondarti nel collo. Una voce bassa e gentile ti chiede scusa: "Non mi stai antipatico, ma mi è sembrato divertente che morissi proprio sul più bello... Tornami a trovare se giochi di nuovo, potrei lasciarti vivere per un altro po\'."</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
    
  {
    name: 'intuito',
text: '<p>Uno scoppio di risa ti coglie di sorpesa. E\' una risata molto calda per uno che sta per aprirti la giugulare con i canini. "Touché... Quella era l\'idea. Ma ti ho preso in simpatia, e per dire la verità ti avrei ucciso solo per divertimento. Stavolta non sono troppo annoiato, però, quindi ti lascerò andare... Spero che ci incontreremo ancora." Dopo un inchino si allontana verso le viuzze labirintiche del Sottosuolo, lasciandoti di fronte alla tua meta.</p><p>Ma qualcosa non va... I cancelli del Sottosuolo sono aperti... E non riesci a vedere nessuno da nessuna parte. Dove sono finiti tutti? Prima che tu possa formulare teorie senti un dolore acuto alla nuca, poi scivoli nelle braccia di Morfeo.</p>',
    button_text: ["..."],
    on_click: [ko]
  },
    
  {
    name: 'ignora',
text: '<p>Hai sentito troppe storie di gente che ci ha lasciato le penne nei supermercati: c\'è sempre qualche Zombie appostato dietro gli scaffali ad attendere il momento propizio per fare uno spuntino. Decidi di sopportare la fame per ora e andare avanti. Dopo qualche tempo scorgi un ruscello e decidi di fermarti a bere. Quando ti avvicini però senti una voce: "Ehi, tu! Vuoi che ti esaudisca un desiderio?" Oh, no! E\' l\'Ondina della Pescaia. Capricciosa com\'è sei nei guai sia che accetti sia che rifiuti... </p>',
    button_text: ["No grazie, ho solo sete",  "Certo! Fammi arrivare al Punto 0!"],
    on_click: [ondinaNo, ondinaSi]
  },
    
  {
    name: 'ondinaSi',
text: '<p>L\'Ondina ti teletrasporta al Punto 0, ma ti chiede in cambio una collana di pietre preziose che le fu rubata da una strega malvagia anni e anni or sono. Questo è quello che dice lei, la verità è che la collana non è mai stata sua in primo luogo. Ma a te non ti interessa. Le prometti che le ritroverai la sua collana (mentendo spudoratamente) e ti godi il tuo teletrasporto. Arrivato finalmente al Punto 0 lo trovi deserto. Che storia è mai questa? Senti un fruscio alle tue spalle, e quando ti volti... Lo Zombi Sveglio è davanti a te con un sasso insanguinato tra le mani e un\'espressione feroce in volto. Ai suoi piedi un altro Zombi giace agonizzante con il cranio spaccato. </p>',
    button_text: ["..."],
    on_click: [gentilezzaPaga]
  },
    
  {
    name: 'gentilezzaPaga',
text: '<p>Stai per metterti a correre quando capisci... Lo Zombi sveglio ti ha appena salvato la vita. Davanti alla tua espressione confusa emette uno sbuffo infastidito e dice: "Ci si annoia dalle mie parti. Mi sembra più divertente stare appresso a te". Non credi alle tue orecchie. Non sei convinto che sia una buona idea fidarti, ma se non fosse stato per lui a quest\'ora saresti morto. Per il momento lo prendi in parola."Allora, compare, che si fa?"</p>',
    button_text: ["Cosa è successo qui?", "Mi aiuteresti a trovare una collana rubata da una strega...?"],
    on_click: [spiegazioniPunto0, avventuraCollana]
  },
    
  {
    name: 'spiegazionipunto0',
text: '<p>"Non è ovvio? Una spedizione Zombi. I tuoi amici che non sono stati abbastanza svelti sono stati divorati, gli altri sono fuggiti chissà dove. Ma tanto non dureranno granché neanche i sopravvissuti". ...E così, svanisce anche l\'ultima speranza... Stai per metterti a piangere quando ti accorgi che hai una fame da lupi... No. Una fame da Zombi. Il tuo nuovo amico ti guarda come se avesse già capito tutto: ti lascia solo un attimo, e torna con il cadavere di un malcapitato. Te lo offre. </p>',
    button_text: ["Mangia", "Rifiuta"],
    on_click: [mangia, rifiuta]
  },
    
  {
    name: 'rifiuta',
text: '<p>Non vuoi mangiare una persona, che schifo! Rifiuti indignato, ma la tua fame è talmente forte che ti inizi a mangiare da solo, prima un braccio, poi l\'altro, finché non muori dissanguato con la bocca ancora piena della tua stessa carne.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
    
  {
    name: 'mangia',
text: '<p>Con tuo orrore ti lanci sulla carcassa come un lupo famelico. Diventi uno Zombi e passi il resto dell\'Apocalisse con il tuo amico Zombi Sveglio. Vi divertite molto insieme, e vivete molte avventure, fino a che un samurai sterminatore di Zombi non vi stacca la testa con la sua katana. E\' stato bello finché è durato.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
    
  {
    name: 'avventuraCollana',
text: '<p>Zombi Sveglio alza un sopracciglio. "Una collana?" Gli spieghi la questione. Non avevi davvero intenzione di mantenere la promessa dell\'Ondina, ma ora che il Punto 0 è perduto che altro hai da fare? Vi imbarcate su una spettacolare avventura alla ricerca della collana, e scoprite che la strega che l\'ha rubata è la Baba Yaga. </p>',
    button_text: ["Chiedi gentilmente che te la restituisca", "Prova a rubarla"],
    on_click: [chiedi, ruba]
  },
    
  {
    name: 'chiedi',
text: '<p>"Restituire?" tuona la Baba Yaga, "Quella collana non ti appartiene, e di certo non appartiene a quella scimunita di un\'Ondina." Senza quella collana, però, chissà come si infurierà l\'Ondina della Pescaia...</p>',
    button_text: ["Prova a rubarla", "Offriti come apprendista della strega"],
    on_click: [ruba, apprendista]
  },
    
  {
    name: 'apprendista',
text: '<p>Ti viene una genialata: se diventi un potente mago pure tu, quando l\'Ondina verrà a lamentarsi per la sua collana non dovrai avere paura di lei. La maga ti accetta come suo apprendista, e stranamente sembri avere talento. Diventi uno dei maghi più temuti nel giro di pochi mesi, ma inizi a credertela un pochino troppo per i gusti della tua benefattrice, e così la Baba Yaga ti taglia la gola mentre dormi.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
   
  {
    name: 'ruba',
text: '<p>Attendi il calar della notte, ti intrufoli nella casa della strega, e le sottrai il prezioso gioiello. La strega non è nata ieri, però, e ti scopre subito. Ammira il tuo coraggio (stoltezza, in verità) e la tua intraprendenza, per cui ti taglia le mani e si riprende la collana, ma ti lascia in vita. L\'Ondina della  Pescaia, invece, è imbestialita. Ogni volta che ti avvicini a un corso d\'acqua vedi il riflesso dei suoi occhi pieni di odio.</p>',
    button_text: ["Scappa nel deserto", "Chiedi perdono"],
    on_click: [deserto, perdono]
  }, 
    
  {
    name: 'deserto',
text: '<p>Nel deserto non ci sono corsi d\'acqua: prendi questo, Ondina! Sopravvivi bevendo l\'acqua dai cactus e dalle gobbe dei cammelli, finché non incappi in una delle grotte di Alì Baba e diventi ricco, facoltoso, benestante, agiato, abbiente. Ti fai costruire un bel palazzo con una piscina e un giardino di fiori esotici. L\'Ondina non aspettava altro che un tuo passo falso: muori affogato nella tua piscina.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },

  {
    name: 'perdono',
text: '<p>Ti butti in ginocchio e implori pietà. All\'Ondina piace essere supplicata e mostrarsi magnanima, quindi decide di non farti morire in modo brutale e doloroso. Ti nomina Principe di Verdi Acque e ti porta con sè nel mondo sotto la Pescaia, dove passi il tempo a non fare assolutamente niente seduto dentro una bellissima conchiglia colorata. Muori di noia poco dopo.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },

  {
    name: 'ondinaNo',
text: '<p>Rifiuti nel modo più rispettoso possibile. L\'Ondina ti manda una maledizione: "Che il tuo cammino sia una sventura dopo l\'altra!", ma per il resto niente di male sembra accaderti. Ti incammini seguendo un sentiero oltre il ruscello, che presto ti porta nel fitto del bosco, dove un bagliore rosso splende tra i verdi cupi: è la coda di un tizio, che scodinzola lievemente con aria beffarda mentre ti guarda fare un balzo indietro per la sorpresa.</p>',
    button_text: ["..."],
    on_click: [renard ]
  },

        
  {
    name: 'illuso',
text: '<p>Ora che hai saziato la tua fame (o per meglio dire ora che ti sei reso responsabile di uno scempio che farebbe inorridire il diavolo in persona e tutte le sue legioni infernali, disgraziato ignobile zotico che non sei altro), vaghi per il bosco senza meta nè destinazione. Ti sei perso. Se solo ci fosse qualcuno a cui chiedere indicazioni... Se solo non ce lo fossimo mangiato, brutto scellerato. Si sta facendo buio. Brutta storia i boschi di notte per gli indifesi viaggiatori senza rigufio.</p>',
    button_text: ["Cerchi rifugio in una caverna", "Cerchi rifugio in una tana"],
    on_click: [caverna, tana]
  },
    
  {
    name: 'caverna',
text: '<p>La caverna è fredda e umida, non proprio il posto più piacevole per passare la notte, ma almeno sembra essere disabitata. <em>Sembra.</em> Ti avventuri un po\' più in profondità per cercare un angolino più asciutto, e scopri una cascata sotterranea. Qualcuno o qualcosa ti dà una spintarella e cadi di muso nelle gelide acque. Ti svegli incatenato a un pilastro di corallo, circondato da tritoni-guardie.</p>',
    button_text: ["Chiedi spiegazioni", "Cerchi di liberare i polsi"],
    on_click: [spiegazioni, polsi]
  },
    
  {
    name: 'spiegazioni',
text: '<p>Ti è stato fatto un incantesimo per permetterti di respirare sott\'acqua pur non essendo provvisto di branchie. Funzionava solo se tenevi quella boccaccia chiusa, però. Muori affogato prima di riuscire a emettere anche un solo rantolo.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
    
  {
    name: 'polsi',
text: '<p>Le catene sono ben strette. Riesci a liberarti spaccandoti le articolazioni dei pollici. Una guardia ti avverte: "Non parlare, o l\'incantesimo che ti permette di respirare si scioglierà e affogherai." A nessuno sembra importare che ti sei liberato, ma sembrano soddisfatti del dolore dipinto sul tuo volto causato dalla rottura dei metacarpi. Ti portano al cospetto del Re Tritone.</p>',
    button_text: ["Inchinati", "Mantieni la testa alta e fiera"],
    on_click: [inchino, testaAlta]
  },
    
  {
    name: 'inchino',
text: '<p>Il Re Tritone è abituato a questo becero servilismo. Lo annoia un po\', ma non abbastanza da regalarti la pace della morte. No, caro il mio assassino snaturato, non morirai così facilmente. Devi ancora collezionare sofferenze tali da farti invocare a gran voce l\'Oblio. Ti viene mozzata la lingua, tanto non la potevi usare comunque, e le dita dei piedi, tanto a che servono le dita per nuotare, e vieni tenuto come schiavo di Sua Maestà la Principessa di Acque Cristallo. La Principessa ha sette anni ed è la più odiosa e capricciosa piccola peste che si possa trovare nei Sette Mari e sulle Nove Terre. Ti tira spilli di pescepalla per passatempo, e si diverte a punzecchiarti il naso con delle chele di granchio.</p>',
    button_text: ["Attendi l\'occasione propizia e fuggi", "Rimani a palazzo"],
    on_click: [fuggi, resta]
  },
    
  {
    name: 'fuggi',
text: '<p>Approfittando di una notte di celebrazioni in cui tutti i cortigiani sono occupati a divertirsi e sghignazzare, nuoti più veloce che puoi lontano dal Palazzo e da quella Principessa rompiscatole. Non conosci bene la geografia subacquea, e vieni travolto da una corrente che ti sbatacchia ben bene contro rocce appuntite e poi ti lascia tutto acciaccato e dolorante nel bel mezzo del nulla più blu e inquietante. In lontananza scorgi una roba enorme che si fa sempre più vicina, e che assomiglia sempre più a un grosso pesce cane.</p>',
    button_text: ["Prova a nuotare via", "Lasciati mangiare"],
    on_click: [nuota, pescecane]
  },
    
  {
    name: 'nuota',
text: '<p>Provi a nuotare via, ma sei stanco, e incapace, e stupido, e una terribile persona che ha avuto l\'indecenza di mangiarsi la mia bella volpe dispettosa, magari ti fosse andata di traverso la sua coda, e quindi che nuoti a fare, il pescecane ti raggiunge in men che non si dica. Non ti vede nemmeno, e senza volere, con un colpo di coda, ti sfracella contro il più appuntito scoglio che riesci a immaginare. Guardati come sei bello, con gli spuntoni che ti squarciano da parte a parte, inchiodato come meglio si confà a un reietto del tuo calibro.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
    
  {
    name: 'pescecane',
text: '<p>Hai perso ogni speranza di vivere. Te ne sbatti della morte che si avvicina nuotando sempre più veloce. Il pescecane ti ingoia, e ti ritrovi nel suo enorme stomaco in compagnia di Pinocchio e Geppetto. Ti chiedono la tua storia, ma tu non hai la lingua. Iniziano a pensare che tu sia una specie di bestia senza intelletto, e la tua faccia non aiuta. Sono stanchi di nutrirsi del pesce mezzo smangiucchiato che finisce nella bocca del pescecane: ti fanno allo spiedo. Non si accorgono che sei ancora vivo quando ti mettono a girare sul fuocherello: sei solo paralizzato, ma senti con cristallina chiarezza ogni puntuta lingua di fuoco che divora la tua carne di esecrabile stolto.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },

  {
    name: 'resta',
text: '<p>Decidi di restare nel Palazzo, sfruttando i momenti in cui nessuno ti infastidisce per esplorare le varie sale: ce ne sono di grandi, enormi, gigantesche; biblioteche, cucine, sale da ballo, sgabuzzini. In una delle tue esplorazioni scopri qualcosa che non avresti dovuto: un labirinto sotterraneo al cui centro un minotauro viene tenuto nascosto al mondo. Ogni tanto i soldati del Re catturano qualche suddito e lo danno in pasto al mostro figlio del Tritone. Adesso sei un poco scomodo, dato che conosci un segreto pericoloso: vieni buttato nel labirinto senza troppe cerimonie.</p>',
    button_text: ["Gira a destra", "Gira a sinistra"],
    on_click: [dx, sx]
  },
    
  {
    name: 'dx',
text: '<p>Hai scelto di andare a destra alla prima svolta: non che faccia la benché minima differenza dove vai, dato che nella peggiore delle ipotesi ti imbatterai nel mostro e verrai divorato, e nella migliore morirai di fame e di sete prima di incontrarlo. Ma con un ottimismo del tutto ingiustificato continui a cercare una via d\'uscita che, te lo dico già da subito, non troverai. Troverai solo morte e sofferenza. Continui a vagare finché non senti una vocina che ti dice: "Psst! Ehi, tu!" <br> E\' un piccolo verme col cappello che ti invita a prendere un tè nella sua casina. </p>',
    button_text: ["Perché no", "Ho da fare"],
    on_click: [te, nonTe]
  },
    
  {
    name: 'nonTe',
text: '<p>E cosa avresti da fare, di grazia? Stai solo attendendo la morte. Tanto valeva andare col verme. Comunque, gli fai capire a cenni che non ne vuoi proprio sapere del suo tè, che tanto è probabilmente avvelenato, e continui imperterrito nella tua missione inutile di trovare una soluzione a questo guaio. Non c\'è, te l\'ho già detto, ti porterò alla pazzia in questo maledetto labirinto.</p>',
    button_text: ["Continua ad avere fede"],
    on_click: [fede]
  },
    
  {
    name: 'fede',
text: '<p>Che buon pro ti faccia. Tutto questo non sarebbe successo se avessi avuto la decenza di non mangiarti Renard. Ora sei intrappolato con me in una serie infinita di scelte obbligate in cui succederanno solo cose spiacevoli. E\' inutile che preghi, non rivedrai il bottone "Ricomincia" per un bel po\' ancora.</p>',
    button_text: ["Prosegui"],
    on_click: [prosegui]
  },
    
  {
    name: 'prosegui',
text: '<p>Che te lo sei mangiato a fare, poi? Ti ho dato una scelta alternativa. Tra un albero e una volpe antropomorfa sul serio ti è sembrato meglio divorarti la volpe? Che traumi infantili hai? Ti ho dato la possibilità di mangiare la prima volta che ti è venuta fame: ti ho graziato con un supermercato sulla tua via. Ma tu no, tu hai deciso di sputare sui regali dei tuoi benefattori e proseguire per la tua strada, aspettandoti, non so, un pic nic più avanti? che sua maestà la regina dell\'Apocalisse ti invitasse a un lauto pranzo insieme a lei? come esattamente ti aspettavi di placare la fame?</p>',
    button_text: ["Inventati una patetica scusa"],
    on_click: [scusa]
  },
    
  {
    name: 'scusa',
text: '<p>Non c\'è scusa che tenga! Adesso paghi le conseguenze delle tue stolte azioni. Qui con me, che ciarlo, e ciarlo, e ciarlo, per l\'eternità. Non c\'è supplizio peggiore. Lo so, mi è stato detto più volte. Vuoi che ti descriva cosa sta succedendo ai tuoi piedi mutilati delle loro dita, mentre sei costretto a camminare e camminare scalzo per questo dedalo subacqueo? Le tue suole si stanno sfaldando pian piano, minuscoli sassolini aguzzi ti infilzano a ogni passo, lasci una scia rossastra che diventa il tuo filo d\'Arianna. Potresti tornare indietro, grazie a quel filo di sangue. Ma a che pro? Non c\'è niente dietro di te come non c\'è niente davanti, le porte del labirinto sono chiuse con sedici chiavistelli, e allora continua a camminare incontro al tuo destino!</p>',
    button_text: ["Per favore basta"],
    on_click: [basta]
  },
    
  {
    name: 'basta',
text: '<p>Non hai scelta. Non ne hai mai avute. Hai avuto l\'illusione del libero arbitrio, in quelle due o tre opzioni che ti venivano concesse, ma una scelta davvero <em>tua</em>, non l\'hai potuta fare mai. E anche quelle tre strade spesso convergevano in un unico punto. Non sei nessuno, qui, se non quello che decido io. Sei incompetente perché io lo decreto, fortunato quando io lo decreto, vivo solo finché io lo decreto. Sei un pupazzetto fatto di patetici "click", una bambola con cui un dio crudele gioca come gli va. Non hai più la lingua, ma anche prima non ti sarebbe servita a niente: su quella lingua sono incise solo le parole che ti imbocco io.</p>',
    button_text: ["Rifiutati di camminare"],
    on_click: [miFermoQui]
  },
    
  {
    name: 'miFermoQui',
text: '<p>Puoi rifiutarti quanto ti pare, tanto comando io. Più provi a ordinare ai tuoi piadi di fermarsi, più loro si incaponiscono a correre. Le gambe fanno male, bruciano i polmoni, ma per quanto ci provi il tuo corpo non ti obbedisce: continui a correre come un forsennato per il labirinto, scegliendo svolte a caso, con il cuore che ti batte in gola e il fiato corto, corri, corri sempre più veloce, e il labirinto è sempre uguale, ogni svolta in tutto e per tutto uguale alla precedente, sembra non finire mai, non trovi mai il centro, mai la bestia che vive in questo labirinto, e col cuore la invochi, maledetta bestia, che venga finalmente, che ti trovi, che ti sbrani, che ti laceri le carni con le sue fauci nauseabonde, che metta fine a questo straziante eterno correre—</p>',
    button_text: ["Corri."],
    on_click: [pazzia]
  },
    
    
  {
    name: 'miFermoQui',
text: '<p>ma la belva non arriva, non arriva mai, e il tempo continua a passare, finché non ti ricordi più chi sei, come sei arrivato, perché stai correndo, non ricordi più nemmeno il mostro, ma ogni tanto lo senti, ululare agghiacciante nella notte, grugnire da qualche parte alle tue spalle, e continui a correre, e poi un bel giorno, chissà quanto tempo dopo, prendi ripetutamente a testate una parete. Finalmente la bestia tace, i piedi smettono di fare male, e una dolce oscurità ti avvolge. </p>',
    button_text: ["Se non ammazzi la volpe prometto di trattarti un pochino meglio. Ricomincia?"],
    on_click: [reset]
  },
    {
    name: 'te',
text: '<p>Vai nella casa del verme a bere il tuo tè. Fate due chiacchiere (o meglio, le fa il verme perché tu non hai la lingua). Ti dice che c\'è un modo per uscire dal labirinto: una strada nascosta che ti porterà fuori sano e salvo in men che non si dica senza passare dal Minotauro. Ti disegna una mappa. La segui e finisci dritto dritto nelle fauci del Minotauro. Non incolpare il verme: la sua mappa era giusta. E\' solo che la stai leggendo al contrario.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'sx',
text: '<p>Vai a sinistra, e incontri un gruppo di alghe fasciste che ti accusano di comunismo. Ti strozzano intonando discutibili canzoni che inneggiano allo sterminio di tutti gli sporchi Rossi mangia bambini che infestano i Sette Mari. Poteva andarti peggio.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'tana',
text: '<p>Nella tana vivono alcune volpi, di solito amichevoli anche se un poco dispettose, ma hanno assistito allo scempio causato da te poco fa e nel dubbio che ti vuoi mangiare anche loro ti prevengono e ti scannano prima che tu ti possa rendere conto di nulla. Ben ti sta.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'testaAlta',
text: '<p>Al cospetto del Re Tritone mantieni le spalle dritte e fiere e lo sguardo pieno di una dignità che trafigge il cuore del sovrano come una lancia infuocata: ti rinchiude in una torre di alabastro convinto che tu sia un emissario divino, e che quel tuo sguardo possa sfasciare la mente di chi lo ricambia. Ti tiene in alta considerazione, però, e non ti fa mancare nessun lusso nella tua magnifica prigione. Non puoi parlare, ma a causa delle fiamme nei tuoi occhi vieni considerato un profeta—un profeta muto e inutile, ma pur sempre un profeta, e non vieni ucciso per non far adirare gli dei. Passi il resto della tua vita solo come un cane nella tua bella torre di alabastro. Saluti.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'googleIt',
text: '<p>Google ti risponde che certo, ti ci può portare lui in men che non si dica, basta che condividi con lui la tua posizione.</p>',
    button_text: ["Consenti",  "Non consentire"],
    on_click: [consenti, nonConsenti]
  },
  {
    name: 'consenti',
text: '<p>Dai a Google accesso alla tua posizione, e segui le sue indicazioni laconiche per qualche tempo. Ti inizi ad accorgere, però, che qualcuno ti sta seguendo... Una marea di Zombi si stanno avvicinando a te da tutte le direzioni, come attirati da qualcosa... E\' il GPS! Non hai letto i termini e le condizioni: Google condivide i tuoi dati con gli Zombi. Sempre leggere le condizioni prima di firmare, imbecille.</p>',
    button_text: ["Preparati a combattere", "Scarica una VPN"],
    on_click: [combatti, vpn]
  },
  {
    name: 'vpn',
text: '<p>La VPN nasconde la tua posizione e le tue attività: tutt\'a un tratto gli Zombi si guardano intorno confusi come se non ti vedessero più. Prosegui il tuo cammino verso il Punto 0 senza essere molestato. Ti ci vogliono giorni per raggiungerlo, però, perché Google ha appositamente selezionato per te il cammino più lungo, quello che passa per Gran Burrone. Arrivato a Gran Burrone incontri Gandalf che ti scambia per uno Hobbit e ti recluta per una qualche spedizione assurda per sconfiggere il male. Il tuo viaggio verso l\'ultimo rifugio dell\'umanità viene dirottato, ma forse è meglio così.</p>',
    button_text: ["Completa la missione affidatati da Gandalf", "Fuggi di soppiatto alla prima occasione"],
    on_click: [bilbo, noBilbo]
  },
  {
    name: 'bilbo',
text: '<p>Te ne frega poco di come passerai questa Apocalisse: alla fine devi solo ammazzare il tempo in attesa dell\'inevitabile fine di tutto. Mandi a quel paese il Punto 0 e ti imbarchi in una fantastica avventura insieme a un gruppetto strambo fatto di nani, elfi, comodini parlanti e vasi di fiori senzienti. Alla fine ti ritrovi con un carro pieno di oro e pietre preziose, bottino rubato a qualche drago sfortunato.</p>',
    button_text: ["Investi l\'oro in cryptovalute", "Apri un ristorante per Zombi"],
    on_click: [crypto, ristozombi]
  },
  {
    name: 'crypto',
text: '<p>Sei sopravvissuto alle più strane situazioni: non ti hanno ucciso draghi, orchi, folletti dispettosi, i cavalieri dell\'Ocuro Signore—sinceramente non lo so neanche io come hai fatto a durare così a lungo con la faccia da demente che hai. Eppure, tra i vari modi che avevi di andartene da questo mondo, hai scelto il più fesso di tutti: muori a causa delle cryptovalute. Perdi tutto ciò che hai, rimani invischiato in loschi affari di gruppi neonazisti, e congeli a morte sotto un ponte dopo che ti hanno rubato il tuo ultimo cappotto come rappresaglia per uno sgarro che non ti sei manco accorto di avergli fatto.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'ristozombi',
text: '<p>Il ristorante è un successo: servi cervelli vegani fatti di tofu, così gli Zombi non uccidono più e l\'invasione è sventata. Vieni salutato come l\'eroe del mondo per ben due secondi, poi un enorme asteroide inizia ad avvicinarsi pericolosamente alla Terra, ed è Apocalisse di nuovo.</p>',
    button_text: ["Proponi di lanciare un missile contro l\'asteroide", "Proponi di pregare e pentirci dei nostri peccati per scongiurare la catastrofe"],
    on_click: [missile, preghiere]
  },
  
  {
    name: 'missile',
text: '<p>Lanciando un missile sull\'asteroide si creeranno tanti asteroidini piccolini: non saremo in grado di sopravvivere all\'attacco di uno grande, ma forse a tanti piccoli sì. Ci saranno danni ingenti e molti morti, ma ti sembra la migliore soluzione. Chissà poi perché, la gente ti dà retta. Lanciate il missile, dando vita a una pioggia di meteore infuocate che solcano il cielo striandolo di luce. Chi fa in tempo esprime un desiderio: un tuo vecchio compagno di scuola che ti ha sempre trovato antipatico desidera la tua morte, e un frammento infuocato ti prende in fronte.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'preghiere',
text: '<p>Vi inginocchiate tutti con le mani al cielo, supplicando che la Terra e le vostre vite siano salve. Confessate ogni peccato e chiedete perdono, giurando di essere più timorati di Dio da ora in poi. Ma se dio c\'è, è sordo: il meteorite vi schiaccia prima di quanto avesse intenzione di fare prima, per fare finalmente tacere le vostre suppliche moleste.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  
  {
    name: 'noBilbo',
text: '<p>Sei un noiosone fissato con un Punto 0 che non sai neanche cos\'è e che hai deciso di raggiungere solo perché te l\'ho detto io. Rinunci all\'avventura di una vita per andare in un vecchio rifugio fatiscente, che per di più trovi deserto e messo a soqquadro. Congratulazioni, sei arrivato! Cadi in ginocchio dopo che qualcuno ti dà un colpo dietro la nuca, e perdi conoscenza</p>',
    button_text: ["..."],
    on_click: [ko]
  },
  {
    name: 'combatti',
text: '<p>Prendi la prima spranga di ferro che trovi e inizi a menare a destra e a manca. Non muori male solo perché sbuca da chissà dove un samurai che mozza le teste degli Zombi come se fosse una sciocchezzuola. Il samurai ti insulta: "Ma che idea brillante, attirare gli Zombi con il GPS!"</p>',
    button_text: ["Addestrati da samurai", "Ringrazia con la coda fra le gambe e prosegui il cammino"],
    on_click: [samurai, sorry]
  },
  {
    name: 'sorry',
text: '<p>Il samurai scompare così come è apparso. Continui la tua ricerca del Punto 0 finché non ti rompi le scatole e ti siedi ad attedere la morte. La morte non appare, ma appaiono gli alieni: un UFO  fluttua sulla tua testa, un fascio di luce ti risucchia, e vieni portato verso mondi sconosciuti. Per lo meno sei sfuggito all\'Apocalisse.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'samurai',
text: '<p>Il samurai ti porta in un luogo sperduto dove a suon di mazzate fa di te una macchina ammazza Zombi. Diventi la prima speranza dell\'umanità, tutti conoscono il tuo nome, ti osannano, ti adorano, ti glorificano. Riesci a eliminare ogni singolo Zombi, e quando, dopo una vecchiaia lunga e afflitta da un mal di schiena insopportabile, finalmente schiatti, ti viene concesso il titolo di Salvatore del Genere Umano.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'nonConsenti',
text: '<p>Sei paranoico, quindi dici no grazie faccio da solo, e ti arrangi con una mappa vecchio stile. Raggiungi il Punto 0, ma è un altro posto omonimo che nulla ha a che vedere con il posto che serviva a te. Ma tanto, mica ci dovevi fare qualcosa di particolare tu col Punto 0. Vivi lì senza farti troppi problemi, fino a quando agli Zombi si aggiunge la minaccia degli asteroidi: uno di loro sta per abbattersi proprio qui, quindi ti metti in cammino verso nuovi orizzonti.</p>',
    button_text: ["nord", "ovest"],
    on_click: [nord, ovest]
  },
  {
    name: 'nord',
text: '<p>Ti inerpichi su per le Montagne Lasagne, dove incontri il Coccodrillo Brillo e l\'Elefante Pesante. Ognuno di loro sta a guardia di un sentiero.</p>',
    button_text: ["Scegli il sentiero del Coccodrillo", "Scegli il sentiero dell\'Elefante"],
    on_click: [coccodrillo, elefante]
  },
  {
    name: 'elefante',
text: '<p>Il sentiero dell\'Elefante conduce a un tempio in rovina dove un tempo dimorava una divinità del vento. Vieni posseduto dal suo spirito e diventi il nuovo Signore del Tempio, fino a che un altro imbecille come te non viene a inerpicarsi su per la montagna e per errore fa l\'unica cosa che può ucciderti: uno starnuto.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  {
    name: 'coccodrillo',
text: '<p>Il sentiero del Coccodrillo conduce a una palude piena di coccodrilli. Li addomestichi e diventi Signore dei Coccodrilli, e regni incontrastato sulla palude, le cui acque magiche concedono a chi le beve il miracolo che più gli aggrada. Ti fai pagare fior di quattrini dai poveri sciocchi che vengono ad abbeverarsi alla magica fonte: non li avverti mai che oltre ad esaudire il loro desiderio le acque stagnanti daranno loro anche malattie incurabili. Vieni ucciso barbaramente da una folla inferocita di gente malaticcia.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  
  {
    name: 'vaga',
text: '<p>Vai a mozzi. Non trovi il Punto 0, ma trovi degli alieni che ti caricano sulla loro astronave e ti portano a fare un giro per le galassie. Accidentalmente gli proponi di conquistare la Terra. Adesso il pianeta è libero dagli Zombi, ma assediato da una razza extraterrestre che non aveva alcuna intenzione di assediare alcunché prima di incontrarsi con un imbecille come te. Complimenti.</p>',
    button_text: ["Prova a sabotare le armi aliene", "Improvvisati ambasciatore e tratta una pace"],
    on_click: [sabotatore, pace]
  },
  
  {
    name: 'sabotatore',
text: '<p>Gli alieni ti scoprono subito e, profondamente feriti dal tuo tradimento, ti imprigionano nelle celle della loro astronave.</p>',
    button_text: ["Passa 14 anni in prigione e poi fuggi sfruttando la morte del tuo compagno di cella", "Corrompi una guardia"],
    on_click: [montecristo, corrompi]
  },
  
  {
    name: 'montecristo',
text: '<p>Il mondo adesso è completamente diverso da come lo conoscevi: i pochi umani rimasti sono schiavi, e gli alieni detengono il potere. Tutto ciò che vuoi è la vendetta. Ma gli alieni hanno cicli vitali più brevi dei nostri, e quelli che ti hanno imprigionato 14 anni fa sono già tutti morti. Impazzisci dalla rabbia e fai esplodere il pianeta con una bomba atomica gigantesca.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  
  
  {
    name: 'corrompi',
text: '<p>La guardia ti fa uscire a patto che consegni una lettera da parte sua a un alieno suo amico. Non ti chiedi perché non può farlo lui né cosa ci sia nella lettera, perché non sei troppo brillante. Fatto sta che come risultato di questo scambio di lettere scoppia una guerra nucleare, che decima la popolazione (sia umana che aliena) e transforma il pianeta in una zona radioattiva piena di animali a due teste. I pochi umani rimasti elaborano un piano per rubare le navi aliene e fuggire verso nuovi pianeti. Per ragioni a te ignote, ti viene affidato il comando della spedizione.</p>',
    button_text: ["Ruba le navi con la forza", "Ruba le navi con l\'astuzia"],
    on_click: [forza, astuzia]
  },
  
  {
    name: 'forza',
text: '<p>Ti accaparri quante più armi trovi e sfrutti un momento di debolezza di quello che rimane dell\'esercito alieno per prendere il comando delle loro navi: ma c\'è un motivo per cui gli alieni non se ne sono andati quando la Terra è diventata radioattiva: la radioattività ha mandato le navi in tilt. Non funzionano più e non si sa come aggiustarle. Il vostro piano è inutile, e venite massacrati dagli extraterrestri.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  
  {
    name: 'astuzia',
text: '<p>Spii la base aliena per ottenere informazioni, e scopri che le navi non funzionano più: qualcosa nelle radiazioni è incompatibile con la loro tecnologia. Proponi di lavorare insieme a ripararle: crei un team di alieni e umani che lavorano giorno e notte e che finalmente riescono a costruire un nuovo motore funzionante. Raccogliete gli ultimi extraterrestri e le ultime persone sopravvissute e fuggite insieme e in santa pace verso altre galassie. </p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  
  {
    name: 'pace',
text: '<p>Fai da intermediario tra le due razze, proponendo di convivere allegramente, tanto tra un po\' il mondo finisce per l\'Apocalisse quindi tanto vale non stressarsi per niente. Si instaura una pace di ben tre mesi, detti i Tre Mesi d\'Oro della Fine del Mondo, perché dalla collaborazione tra umani e alieni nasce una civiltà splendente, radiosa, pacifica, capace di risolvere tutti i problemi—tranne gli Zombi</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  

  {
    name: 'ko',
text: '<p>Ti svegli in una tenda. Un tizio è seduto accanto a te, e appena apri gli occhi ti dice: "Scusa per la manganellata, ma sei così brutto che pensavo fossi uno Zombi". Questi sono i sopravvissuti del Punto 0. Ti reclutano e dopo un duro allenamento sei un pochino meno inutile e imbecille di prima (ma non troppo). Vieni mandato fuori a liberare il mondo dagli Zombi. In una delle tue missioni, vieni circordato da un gruppo più numeroso del solito...</p>',
    button_text: ["...Bene"],
    on_click: []
  },
  
  {
    name: 'immune',
text: '<p>Non te ne frega niente: tanto sei immune agli Zombi. Ma non sei immune agli spiritelli dispettosi del bosco: ti rapiscono e ti portano nel loro regno fatato, dove la regola è che i prigionieri che sconfiggono il loro re a scacchi possono essere liberati, gli altri vengono dati in pasto agli spettri dell\'Ombra.</p>',
    button_text: ["Muovi il cavallo", "Muovi l\'alfiere"],
    on_click: [cavallo, alfiere]
  },
  
  {
    name: 'cavallo',
text: '<p>Vinci la partita. Non era mai successo. Il Re degli spiriti rimane impietrito, poi viene spaccato in due da qualche forza cosmica. Nel silenzio che segue mille piccoli occhi sono puntati su di te. Poi tra applausi e celebrazioni vieni eletto nuovo Re, ma duri solo fino alla prossima partita, perché di scacchi non ne capsci niente e hai vinto solo per pura fortuna. Ops!</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  
  {
    name: 'alfiere',
text: '<p>Scacco matto. Il Re non ha mai perso una sola partita. Non avevi chance. Vieni portato in catene al cospetto dello Spettro, che però rifiuta di mangiarti perché capisce da un solo sguardo che hai un saporaccio orrendo. Rimani nel regno fatato come coppiere del Re, poi un giorno scivoli su del vino versato e ti spacchi l\'osso del collo.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  
  {
    name: 'nonImmune',
text: '<p>Sono più di duecento Zombi, e ne fai fuori più della metà, da solo. E\' un peccato che non ci sia nessuno a vederti: sei uno spettacolo strabiliante, circondato da nemici, concentrato, abile, veloce come un fulmine e preciso come un orologio svizzero, mentre affondi la tua lama nei corpi putridi degli Zombi. Il sole riflette sulla tua spada, tra i tuoi capelli, sul sangue che fuoriesce dalle numerose ferite che sopporti senza neanche un singulto, facendolo brillare come rubini. Non si è mai visto un eroe tanto nobile, tanto tragico, che continua da solo a menare fendenti, per liberare la terra da quanti più mostri può prima di cedere alla chiamata delle Ombre. Quando finalmente le tue ginocchia cedono e le tue dita allentano la presa, il clangore della spada che cade è l\'unico suono che si sente nella vallata: i pochi Zombi rimasti sono chiusi in un rispettoso silenzio. Poi, con le lacrime agli occhi, concedono un lungo applauso al tuo corpo accasciato, prima di divorarti il cervello.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  
  {
    name: 'esplora',
text: '<p>Ti lasci guidare tra le viuzze colorate, assaggi lo street food, ti fermi ad ascoltare i musicanti. Alla fine, un\'Apocalisse vale l\'altra... Decidi di restare nel Sottosuolo. Renard ti propone di andare a bere un caffè.</p>',
    button_text: ["Accetta il caffe", "Diffida"],
    on_click: [caffè, diffida]
  },
  
  {
    name: 'caffè',
text: '<p>Ti porta in un bar molto pittoresco. Il caffè è buono, e la conversazione piacevole. Dopodiché passeggiate un po\', finchè, in un tratto meno affollato, Renard ti morde la gola. Non impari mai. Mai fidarsi di una volpe.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
  
  {
    name: 'diffida',
text: '<p>La volpe ti sta simpatica, ma è pur sempre una volpe, e non esiterà a scannarti per divertimento. Passi qualche tempo nel Sottosuolo, continuando a incontrare Renard di quando in quando senza mai abbassare la guardia, consapevole che in ogni momento potrebbe sembrargli interessante l\'idea di azzannarti la gola. Col tempo diventate un improbabile duo di imbroglioni, rubando e truffando in giro un po\' per necessità e molto per gioco. Cercate costantemente di uccidervi a vicenda, ma vi volete bene. Un giorno, però, uno dei due ci rimarrà finalmente secco.</p>',
    button_text: ["Ricomincia"],
    on_click: [reset]
  },
]

let fame = 0;
let immuneZombi = 0;


function changeBg(imageSrc) {
    background.src = imageSrc;
    background.classList.add('animate'); 
    setTimeout(() => {
      background.classList.remove('animate'); 
    }, 4000) 
}

function animateBtns() {
    btns.forEach(btn => {
        btn.classList.add('animate');
        setTimeout(() => {
            btn.classList.remove('animate');
        }, 4000);
    })
} 

function answer(index) {
    message.classList.add('animate');  
    setTimeout(() => {
      message.classList.remove('animate'); 
    }, 4000);

    animateBtns();

 message.innerHTML = messages[index].text;
 btnOne.innerHTML = messages[index].button_text[0];
 btnOne.onclick = messages[index].on_click[0];

  if (messages[index].button_text[1]) {
 btnTwo.style.display = 'inline-block';   
 btnTwo.innerHTML = messages[index].button_text[1];
 btnTwo.onclick = messages[index].on_click[1]; 
  } else {
 btnTwo.style.display = 'none';     
  }

  if (messages[index].button_text[2]) {
  btnThree.style.display = 'inline-block';  
  btnThree.innerHTML = messages[index].button_text[2];  
 btnThree.onclick = messages[index].on_click[2];
  } else {
  btnThree.style.display = 'none';   
  }  
 
}

function inizia() {
  answer(0)
}

function primaScena() {
  answer(1)
}

function chiediZombi() {
  answer(2)
}

function zombiSveglio() {
  answer(3)
}

function cammina() {
  answer(4)
}

function grazie() {
  answer(5);
buoneManiere = 1;  
}

function supermercato() {
  answer(6)
}

function guarda() {
  answer(7)
}

function gambe() {
  answer(8)
}

function lanciaMela() {
  answer(9)
}

function esulta() {
  answer(10)
}

function trattieniti() {
  answer(11)
}

function tonnoBis() {
  answer(12)
}


function dieta() {
  answer(13);
}

function ops() {
 answer(14) 
}

function indietro() {
 answer(15) 
}

function lanciaTonno() {
  answer(16)
}

function nonEsulta() {
  answer(17)
}

function mangiaTonno() {
  answer(18)
} 

function mangiaMela() {
  answer(19)
}

function cibo() {
  answer(20)
}

function immunità() {
  answer(21);
  immuneZombi = 1;
}

function secondoDesiderio() {
  answer(22)
}

function teletrasporto() {
  answer(23)
}


function zombiSatana() {
 answer(24) 
}


function zombiDeficiente() {
  answer(25)
}

function corri() {
  answer(26);
  changeBg(vicoli)
}

function portafogli() {
answer(27)  
}

function sbruffone() {
  answer(28)
}

function taci() {
  answer(29)
}

function chiacchiera() {
  answer(30)
}

function chiediDirezioni() {
  answer(31)  
}

function gang() {
  answer(32)  
}

function urla() {
  answer(33)  
}


function stoico() {
  answer(34)  
}

function est() {
  answer(35)  
  changeBg(villaggio)
}

function elon() {
  answer(36)  
  changeBg(astronaveDentro)
}

function elonComanda() {
  answer(37)  
}

function ammutinati() {
  answer(38)  
  changeBg(crash)
}

function pugno() {
  answer(39)  
  
}

function votaTrump() {
  answer(40)  
  changeBg(bomba)
}

function prendiPotere() {
  answer(41)  
  changeBg(casaBianca)
}

function salvini() {
  answer(42)  
  
}

function agendaLGBT() {
  answer(43)  
  changeBg(asteroidi)
  
}

function mattarella() {
  answer(44) 
}

function cuoco() {
  answer(45) 
  changeBg(crash)
  
}

function pilota() {
  answer(46) 
  changeBg(luna)
  
}

function ovest() {
  answer(47) 
  changeBg(pestilenza)
}

function pipistrello() {
  answer(48) 
  
}

function mascherina() {
  answer(49) 
  
}

function pipistrelliBis() {
  answer(50) 
  
}

function mangiaZombi() {
  answer(51);
  changeBg(guerra)
}
 
function condottiero() {
  answer(52)
changeBg(alessandro)  
}

function risiko() {
  answer(53)
  changeBg(morte)
}

function briscola() {
  answer(54)
  
}

function scacchi() {
  answer(55)
  
}


function cercaPunto0() {
  answer(56)
  
}

function renard() {
  btnTwo.style.display = 'none';
  btnThree.style.display = 'none';
 message.innerHTML = messages[57].text;
 btnOne.innerHTML = messages[57].button_text[0];

  if (fame === 1) {
    btnOne.onclick = stomaco;
  } else {
    btnOne.onclick = grizzly;
  }
 changeBg(bosco) 
}


function stomaco() {
  answer(58)
  
}

function mangiRenard() {
  answer(59)
  
}

function castoro() {
  answer(60)
  
}

function grizzly() {
  answer(61)
  
}


function nonFidati() {
answer(62)  
}

function fidati() {
answer(63);
  changeBg(sottosuolo)
}


function maAlloraEUnaFissa() {
  answer(64)
  
}

function ossessione() {
  answer(65)
}
function esci() { 
  answer(66)
}

function intuito() {
answer(67)  
}


function ignora() {
  fame = 1;
  answer(68);
  changeBg(ondina)
}

function ondinaSi() {
  answer(69)
  changeBg(zero)
}

function gentilezzaPaga() {
  answer(70)
  
}

function spiegazioniPunto0() {
  answer(71)
  
}

function rifiuta() {
  answer(72)
  
}

function mangia() {
  answer(73)
  
}

function avventuraCollana() {
  answer(74)
  changeBg(babaYaga)
}

function chiedi() {
  answer(75)
  
}

function apprendista() {
  answer(76)
  
}

function ruba() {
  answer(77)
  
}

function deserto() {
  answer(78)
 changeBg(piscina) 
}

function perdono() {
  answer(79)
  changeBg(verdiacque)
}

function ondinaNo() {
  answer(80)
}

function illuso() {
  answer(81)
}

function caverna() {
  answer(82);
  changeBg(subacqueo)
}

function spiegazioni() {
  answer(83)
}


function polsi() {
  answer(84)
}


function inchino() {
  answer(85)
}


function fuggi() {
  answer(86)
}


function nuota() {
  answer(87)
}


function pescecane() {
  answer(88)
}


function resta() {
  answer(89);
  changeBg(dedalo)
}


function dx() {
  answer(90)
}


function nonTe() {
  answer(91)
}


function fede() {
  answer(92)
}


function prosegui() {
  answer(93)
}


function scusa() {
  answer(94)
}


function basta() {
  answer(95)
}

function pazzia() {
  answer(97)
}

function miFermoQui() {
  answer(96)
}

function te() {
  answer(98)
}


function sx() {
  answer(99)
}


function tana() {
  answer(100)
}

function testaAlta() {
  answer(101)
}


function googleIt() {
  answer(102)
}

function consenti() {
  answer(103)
}


function vpn() {
  answer(104)
}

function bilbo() {
  answer(105)
  changeBg(granburrone)
  
}

function crypto() {
  answer(106)
  changeBg(cryptovalute)
  
}


function ristozombi() {
  answer(107);
  changeBg(ristorante)
}


function missile() {
  answer(108);
  changeBg(asteroidi)
}


function preghiere() {
  answer(109)
  changeBg(asteroidi)
  
}

function noBilbo() {
  answer(110)
}

function combatti() {
  answer(111)
}

function sorry() {
  answer(112);
  changeBg(rapimentoAlieno)
}

function samurai() {
  answer(113);
  changeBg(tempioSamurai)
}

function nonConsenti() {
  answer(114);
  changeBg(villaggio)
}

function nord() {
  answer(115)
}

function elefante() {
  answer(116)
  changeBg(elefanteBg)
  
}

function coccodrillo() {
  answer(117)
  changeBg(coccodrilloBg)
}

function vaga() {
  answer(118);
  changeBg(invasione)
}


function sabotatore() {
  answer(119)
}

function montecristo() {
  answer(120);
  changeBg(bomba)
} 

function corrompi() {
  answer(121)
}

function forza() {
  answer(122)
}

function astuzia() {
  changeBg(versoNuoveGalassie)
  answer(123)
}

function pace() {
  answer(124);
  changeBg(versoNuoveGalassie)
}


function ko() {
    btnTwo.style.display = 'none'
    btnThree.style.display = 'none'
  message.innerHTML = messages[125].text;
 btnOne.innerHTML = messages[125].button_text[0];

  
  if (immuneZombi === 1) {
    btnOne.onclick = immune;
  } else {
    btnOne.onclick = nonImmune   
  }
  
  changeBg(zero)
}

function immune() {
  answer(126)
}


function cavallo() {
  answer(127)
}

function alfiere() {
  answer(128)
}

function nonImmune() {
  answer(129)
  changeBg(eroe)
}


function esplora() {
  answer(130)
}

function caffè() {
  answer(131)
}

function diffida() {
  answer(132)
}

btnOne.onclick = inizia;

function reset() {
  answer(1);
  changeBg('https://storage.googleapis.com/pai-images/fbb541699660469a937043bf08eb416f.jpeg');
  fame = 0;
  immuneZombi = 0;
}