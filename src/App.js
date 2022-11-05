import Crossword from '@guardian/react-crossword'

import React, {useState} from 'react';
import './App.css';

const words = {
  "english": ["that","foot","seven","(weather) snow","to begin","bed ","body","March","envy","to talk","wine","million","tomato","to awaken","to go up, to come up","no","Rome","kitchen","apple (fruit)","west","clean","lemon","then","to take off","difficult","to close, shut","instead of","To give","eight","eight hundred","building","them","adult","thin, fine","question","sore throat","to bake, to cook","to build, to construct","bus","already","cheese","to smoke","to sign","to show","twenty-two","square","to win","before","to understand","to walk","today","Easter","man ","to sell","knife","to touch","chocolate","to eat","weekend","rich","twenty-seven","train","good afternoon","work (all senses)","spoon","melon","bottom","room","head","whom","ten","north","to fly","never","to be enough","uncle","now","magazine","to ache","woman","to listen","friend","airport","fourteen","to think","soap","thing","pink","bread","mother","to go out, leave","right (hand, direction)","to laugh","to be worth","money","aunt","road, way","port","the same, alike","grandmother","salt","to be born","fame, renown","peach","to finish","to sleep","bath","April","left (hand, direction)","carrot","slow","out, outside","to ask (for)","to do","child","but","to write","To rent out, to let, to hire out something","hunger","till, until, as far as","to sing","half","address","winter","to stay","library","american","tree","to come or arrive","brown","elephant","driver","second","August","to present","to win","beach","strawberry (fruit)","door","arm","eleven","to rain","minimal","behind","there, in that place","full","nine","ear","to feel","year","Tuesday","why","October","red","they, their","Wednesday","Italian","university","opposite, contrary","Sunday","to snow","fast","white","river","dictionary","round, around","plate, dish","skirt","with","house","certain, sure","Sand","different","wife","then","new","young","pleased to meet you","against","gold","meat","modern","island, isle","to cook","third","aeroplane, airplane","to see","plant","January","strange, odd","shower","the","noise, sound","fat ","grey","To decide (on), fix, arrange","to hate, detest or loathe","pear (fruit)","she","month","for","first","town, city","cat","grandfather","head","without","something","spring, the season","to return, go back","to travel","warmth","moon","wolf","hard","glass","sun","restaurant","to read","sauce","yesterday","thirteen","to pay","Saturday","to want","to enter","frequent","to dress","heating","June","To look for","curiously","to weigh","coffee","to drink","February","beer","November","to visit","five","water","to find","thousand","December","minute, moment (units of time)","brother","tooth","animal","summer","sixteen","to be pleasing","three","church","together with","juice","May (month)","carrot","machine","song","black","cake","earth","day","where","easy","last","wall","fifty","this, these","sausage","neither","lake","empty, vacant","yes","a shirt","bedroom","to be","blue","marvellous","all","hotel, inn","fifty","father","cold","near","Spain","to cut","French language","pea (plant and vegetable)","bad","to stop","section, part","rain","throat","clock, watch ","September","headache","far","table","to grow, increase","chair","to use","Hello!","sea","to lose","to study","just, exactly","twenty","elegant","school","twelve","half","thin","east ","post office","ice","television","a frog","to sell","language","nothing","nose","garden","good","to discover","short","good night","since, because, as","in front of","ocean","around","six","fork","girl, young woman","more","two","when","old","cathedral","mouth","bank (financial institution)","open","to open","evening, night","April","to break","to swim","high, tall","midday, noon","dog","fish","headache","hand","official","to cost","age (of a person)","good night","order","I","family","quickly","poor, poor man","to photograph","to taste","black","to become","to play","to have ","lamp, light","Italy","tourist","people","To call","July","long","England","problem","answer, reply, response","week","yours","orange (fruit, tree, colour)","same, equal","world","green","to write","bottle","to believe","doctor","fifteen","(a) few","thief","to go","soon","sister","eye","leg","May (month)","autumn","then","worm","to weep, to cry","to learn","sixth","swimming pool","to wash","Thursday","window","honey","horse","to choose","milk","same, equal","five","hundred","Monday","sky","Friday","onion","short","to buy","bird","really, in fact","centre, center","box","to count","dry","(size) big","good day","hat","under, beneath, underneath","midnight","to change, exchange","luggage, baggage","much, very much, a lot","France","four","always","piece","yellow","To work","name","sofa, divan, settee","eyes","south","grape","here","simple","hello (when answering the phone)","cheerful","we; us"],
  "foreign": ["che","piede","sette","neve","iniziare","letto","corpo","marzo","invidia","parlare","vino","milione","pomodoro","svegliare","salire","no","Roma","cucina","mela","ovest","pulito","limone","poi","togliere","difficile","chiudere","invece","dare","otto","ottocento","edificio","li","adulto","fino","domanda","mal di gola","cuocere","costruire","autobus","gi\u00e0","formaggio","fumare","firmare","mostrare","ventidue","piazza","vincere","prima","capire","passeggiare","oggi","Pasqua","uomo","vendere","coltello","toccare","cioccolata","mangiare","fine settimana","ricco","ventisette","treno","buonasera","lavoro","cucchiaio","melone","fondo","sala","capo","cui","dieci","nord","volare","mai","bastare","zio","ora","rivista","dolere","donna","ascoltare","amico","aeroporto","quattordici","pensare","sapone","cosa","rosa","pane","madre","uscire","destra","ridere","valere","soldi","zia","strada","porto","uguale","nonna","sale","nascere","fama","pesca","finire","dormire","bagno","aprile","sinistra","carota","lento","fuori","chiedere","fare","bambino","ma","scrivere","affittare","fame","fino","cantare","mezzo ","indirizzo","inverno","rimanere","biblioteca","americano","albero","venire","marrone","elefante","autista","secondo","agosto","presentare","vincere","spiaggia","fragola","porta","braccio","undici","piovere","minimale","dietro","l\u00ec","pieno","nove","orecchio","sentire","anno","marted\u00ec","perch\u00e9","ottobre","rosso","loro","mercoled\u00ec","italiano","universit\u00e0","contrario","domenica","nevicare","veloce","bianco","fiume","dizionario","intorno","piatto","gonna","con","casa","certo","arena","differente","moglie","dopo","nuovo","giovane","piacere","contro","oro","carne","moderno","isola","cucinare","terzo","aeroplano","vedere","pianta","gennaio","strano","doccia","la","rumore","grasso","grigio","decidere","odiare","pera","lei","mese","per","primo","citt\u00e0","gatto","nonno","testa","senza","qualcosa","primavera","ritornare","viaggiare","calore","luna","lupo","duro","bicchiere","sole","ristorante","leggere","salsa","ieri","tredici","pagare","sabato","volere","entrare","frequente","vestire","riscaldamento","giugno","cercare","curiosamente","pesare","caff\u00e8","bere","febbraio","birra","novembre","visitare","cinque","acqua","trovare","mille","dicembre","minuto","fratello","dente","animale","estate","sedici","piacere","tre","chiesa","insieme","sugo","maggio","carota","macchina","canzone","nero","torta","terra","giorno","dove","facile","ultimo","muro","cinquanta","questo","salsiccia","neanche","lago","vuoto","s\u00ec","camicia","camera da letto","essere","blu","meraviglioso","tutto","albergo","cinquanta","padre","freddo","vicino","Spagna","tagliare","francese","pisello","malo","fermare","parte","pioggia","gola","orologio","settembre","mal di testa","lontano","tavolo","crescere","sedia","usare","ciao","mare","perdere","studiare","giusto","venti","elegante","scuola","dodici","met\u00e0","magro","est","ufficio postale","ghiaccio","televisione","rana","vendere","lingua","nulla","naso","giardino","buono","scoprire","corto","buonanotte","poich\u00e9","davanti","oceano","circa","sei","forchetta","ragazza","pi\u00f9","due","quando","vecchio","cattedrale","bocca","banca","aperto","aprire","serata","aprile","rompere","nuotare","alto","mezzogiorno","cane","pesce","mal di testa","mano","ufficiale","costare","et\u00e0","buona notte","ordine","io","famiglia","velocemente","povero","fotografare","gustare","nero","divenire","giocare","avere","lampada","Italia","turista","gente","chiamare","luglio","lungo","Inghilterra","problema","risposta","settimana","tuo","arancio","stesso","mondo","verde","scrivere","bottiglia","credere","dottore","quindici","qualche","ladro","andare","presto","sorella","occhio","gamba","maggio","autunno","allora","verme","piangere","imparare","sesto","piscina","lavare","gioved\u00ec","finestra","miele","cavallo","scegliere","latte","stesso","cinque","cento","luned\u00ec","cielo","venerd\u00ec","cipolla","basso","comprare","uccello","davvero","centro","scatola","contare","secco","grande","buon giorno","cappello","sotto","mezzanotte","cambiare","bagaglio","molto","Francia","quattro","sempre","pezzo","giallo","lavorare","nome","divano","occhi","sud","uva","qui","semplice","pronto","allegro","noi"],
  "transliteration": []
}

const words_intermidiate = {
  "english": ["to sing","To work","delicately","to cost","to attract","pride","fifty","May (month)","cake","happy birthday","money","soap","experience","as soon as","century","to drink","song","apple (fruit)","to do","a single hair","to have","sixth","carrot","yellow","communication","shocked, speechless","to learn","daily","dry","romantic, sentimental, emotional","to define or resolve","to stay","south","onion","problem","to snow","just, exactly","double","corkscrew","to write","to follow or pursue","next","black","warmth","short","glass","evening, night","Father Christmas, Santa Claus","to fish","February","fourteen","fat ","cloudy","illness, desease","finger","soon","sea","tray","to be enough","beer","queen (monarch)","otherwise","appear","narrow","to feel","to obtain","a dance","nothing","magazine","April","to decide (on), fix, arrange","child","four","wisdom","to succeed","enjoy","Sister-in-law.","sock","to approach","Monday","after all","where","to return, go back","tourist","to accustom","a frog","kitten","refer to","naturally","this, these","to protect","for","basket","minute, moment (units of time)","far","football","to weigh","fame, renown","strawberry (fruit)","clean","wife","Thursday","seriously","secret","against","infection","to pinch, to nip","fear","vegetarian","lift, elevator","pure","third","rain","orange (fruit, tree, colour)","To sail, to navigate.","to come or arrive","to sign","cat","I","whom","unforgettable","pan, frying pan","to sell","payment","near","miserably","awake","to descend","to eat","instead of","we; us","ugly","basket, waste basket","sixteen","soup","to celebrate","to escape","Spain","funny, comical, amusing","good day","to write","climate","to enter","weak, dim, faint","to go out, leave","January","eight hundred","good afternoon","work (all senses)","infected, septic","nation","to spill","group","October","in spite of","to fight","girl, young woman","blue","pot","trouble, bother","wolf","to speed up something","planet","ancient","room, hall","post office","room","to weep, to cry","kiss","spring, the season","to extend","ten","thief","to contain","american","man ","exceptionally","body","choice","ice","luggage, baggage","to ski","November","to laugh","to fly","good","to kill","to answer, reply or respond","to fear","church","plant","to dream","lagoon","gold","salt","word","thirteen","inevitable","thin, fine","throat","war ","mother","to choose","to meet","really, in fact","a shirt","hard","building","sore throat","fourth","box","open","Friday","lion","blanket","to light","novel","elegant","to confirm","unlucky","to thank","yours","injustice, inequity, unfairness","influence","family","to bark","To call","cooker","bowl","sitting room","unfortunately","to go up, to come up","to extract","she","addition","wide, broad, vast","phone call","to oppose","month","to stop","elephant","ordinary, usual","ear","behind","plate, dish","bald","adult","a painting or picture","head office","to meet","to deny","to burn","Fifty.","magnificently","grape","peril, danger","two","without","French language","train","accident, mishap","sausage","twenty","to flower","thought","France","tree","fault","to abolish","lemon","pocket","spoon","library","Sunday","melon","leg","backache","rock","ability, skill","bath","context","flood, inundation","edition","bottom","to burn","face, confront","reality","(size) big","to bring up, to train, to teach","mouth","to happen","midday, noon","to get engaged","inhibited","health","new","bread","crime, offence, felony, misdemeanour","dish washer","to coincide","whim, fancy, caprice, quirk","varied, various","to travel","to be reunited","machine","honey","difficult","to repair, to fix","when","hole, keyhole","coffee","to offend","to take off (aircraft)","head","to be born","good night","to compress","to open","winter","weekend","peach","to take off","hotel, inn","Rome","but","amusing","sauce","to become","to cough","someone","to finish","eyes","fire","to build, to construct","to find","to come from","mistake, failure","marriage","left (hand, direction)","cider","people","doctor","school","toy","to talk","heating","bellyache","autumn","just, exactly","water","manner, way","east ","piece","(male) German person","to present","already","bottle","bring, carry","tank (for liquid)","the","to begin","To plant, to sow","shower","sky","lorry / truck","marvellous","restaurant","green","white","cloud","to boil","right (hand, direction)","lamp, light","to defend","to discover","to taste","complicated","to count","wine list","to abandon","much, very much, a lot","midnight","foreign, alien","to serve","seven","pig","ocean","england","to produce","lid","March","to deliberate","portuguese","washing machine","act","twelve","Hello!","to die","goat (mammal)","knife","habitual, usual, regular","to exist, to be","to enjoy","To rent out, to let, to hire out something","To last.","swimming pool","fork","to move","uncle","heavy","to light, to ignite","honeymoon","more","thing","signal, sign","to tan","magnificent","to break","red","all","June","language","something","to hate, detest or loathe","grey","to read","even if","to develop","science","with","Wednesday","height, altitude","high, tall","black","Italian","dog, male dog","to stir","same, equal","(anatomy) brain","To look for","to visit","to embrace someone or something","door","to pay","world","accuracy","to swim","quickly","spread","global, worldwide","wine","different","carrot","animal","credit card","to optimize","envy","(a) few","road, way","woman","undeniable","younger","to fold","to dream (of)","under, beneath, underneath","father","crazy, insane","knee","frequent","in front of","to cook","although","cathedral","estimate","wall","(music) band","Five.","good time","television","indignant","fast","brother","to arrive","ideal","slow","pleased to meet you","nine","to show","name","adorable, sweet, lovely","born","armchair","smile","curiously","eleven","abbey","section, part","last","Paradise","here","identical","to ache","west","to be worth","hello (when answering the phone)","million","head","juice","headache","sofa, divan, settee","garden","A credit card","opposite, contrary","April","to examine","age (of a person)","dictionary","safe","beard","Saturday","to mix up","to think","independence","to rain","rich","to study","to lack","to walk","then","to sell","old","island, isle","gradually","official","round, around","history","at present, now","mixed salad","same, equal","August","poor. Poor man","to pull","to complain","so-called","to bake, to cook","embrace, hug","unknown","to cover","to be","kitchen","to degrade","young","bank (financial institution)","ears","marriage","o deduce or infer something","to cause","house","eye","imagination, fantasy","sun","question","hat","twenty-seven","simple","immediately, at once","always","to buy","any","university","to breathe","sink, kitchen sink","cheese","to bite","centre, center","town, city","clock, watch (timekeeping instruments)","window","to become real","to colour","to estimate","period, time, span","whole, entire","to be silent","tomato","to close, shut","to understand","to photograph","today","to play","short","meat","feature","(weather) snow","pea (plant and vegetable)","thin","second","together with","foot","lamb","aeroplane, airplane","nose","appearance, look","minimum, the least","moustache","after dinner","cold","tooth","Europe","A small ring","bed","to divide","December","out, outside","event","very strange","airport","yesterday","Italy","called","earring","headache","year","Easter","across, through","alphabet","week","ache, pain","aunt","half","still, motionless, stationary","to grow, increase","to use","to listen","healthy, sound","to ask (for)","bad","table","till, until, as far as","small town","poverty","first","driver","easy","mixture","shoulder","five","to be pleasing","similar","inferiority","May (month)","To give","lake","pear (fruit)","to see","order","to love, to like","bad, wicked, naughty","illiteracy","to order","guy, dude","milk","to detest, to loathe, to hate","to lose","why","now","boring","cheerful","to exist, to be","noise, sound","system","to touch","neither","to pronounce","river","to take, to hold","uncertain, unsure","raspberry","to wash","bell","fish","brown","to go","United States","port","twenty-two","example","pink","hunger","moon","fisherman","sister ","July","to awaken","wheel","snake","extraordinary","grandfather","answer, reply, response","empty, vacant","full","oven","to explain","instrument","conversation","hand","common sense","bird","Tuesday","in, between","that","friend","fifteen","unnatural","politics","inhabitant","September","to cut","extinction","To pray","certain, sure","to belong to","horse","chocolate","around","them.","neck","then","beach","thousand","no","miracle","to believe","novelty","gap","origin","Sand","to sleep","heater","unjust, unfair, wrong","never","eight","earth","half","knowledge","hairdresser","bedroom","summer","basin","to smoke","then","to wait for","stone","writer","strange, odd","to want","to solve","to satisfy","three","desk","there, in that place","worm","to stew","square","product","to happen or occur","to exchange","ray, beam (of light etc)","yes","since, because, as","darkness, dark","tide","before","windy, breezy","intelligence, intellect","any","chair","freedom","they, their","address","good night","head","arm","daily","skirt","silver","north","to express","to win","day","to compare","bus","long","minimal","modern","London","centimetre","to pull","still, even now","the same, alike","to win","to dress","grandmother","hundred","six","witch, hag"],
  "foreign": ["cantare","lavorare","delicatamente","costare","attirare","orgoglio","cinquanta","maggio","torta","buon compleanno","soldi","sapone","esperienza","appena","secolo","bere","canzone","mela","fare","capello","avere","sesto","carota","giallo","comunicazione","interdetto","imparare","quotidiano","secco","romantico","definire","rimanere","sud","cipolla","problema","nevicare","giusto","doppia","cavatappi","scrivere","seguire","seguente","nero","calore","corto","bicchiere","serata","Babbo Natale","pescare","febbraio","quattordici","grasso","nuvolo","malattia","dito","presto","mare","vassoio","bastare","birra","regina","altrimenti","apparire","angusto","sentire","ottenere","danza","nulla","rivista","aprile","decidere","bambino","quattro","saggezza","farcela","godere","cognata","calza","accostare","luned\u00ec","dopo tutto","dove","ritornare","turista","abituare","rana","micino","riferirsi","naturalmente","questo","proteggere","per","cesta","minuto","lontano","calcio","pesare","fama","fragola","pulito","moglie","gioved\u00ec","seriamente","segreto","contro","infezione","pizzicare","paura","vegetariano","ascensore","puro","terzo","pioggia","arancio","navigare","venire","firmare","gatto","io","cui","indimenticabile","padella","vendere","pagamento","vicino","miserabilmente","sveglio","scendere","mangiare","invece","noi","brutto","cestino","sedici","minestra","celebrare","sfuggire","Spagna","buffo","buon giorno","scrivere","clima","entrare","debole","uscire","gennaio","ottocento","buonasera","lavoro","infetto","nazione","versarsi","gruppo","ottobre","nonostante","pugnare","ragazza","blu","pentola","briga","lupo","accelerare","pianeta","antico","aula","ufficio postale","sala","piangere","bacio","primavera","estendere","dieci","ladro","contenere","americano","uomo","eccezionalmente","corpo","scelta","ghiaccio","bagaglio","sciare","novembre","ridere","volare","buono","uccidere","rispondere","temere","chiesa","pianta","sognarsi","laguna","oro","sale","parola","tredici","inevitabile","fino","gola","guerra","madre","scegliere","incontrare","davvero","camicia","duro","edificio","mal di gola","quarto","scatola","aperto","venerd\u00ec","leone","coperta","illuminare","romanzo","elegante","confermare","sfortunato","ringraziare","tuo","ingiustizia","influenza","famiglia","abbaiare","chiamare","fornello","scodella","soggiorno","purtroppo","salire","estrarre","lei","addizione","ampio","telefonata","opporsi","mese","fermare","elefante","ordinario","orecchio","dietro","piatto","calvo","adulto","quadro","centrale","incontrarsi","negare","ardere","cinquanta","magnificentemente","uva","pericolo","due","senza","francese","treno","accidente","salsiccia","venti","fiorire","pensiero","Francia","albero","colpa","abolire","limone","tasca","cucchiaio","biblioteca","domenica","melone","gamba","mal di schiena","roccia","abilit\u00e0","bagno","contesto","inondazione","edizione","fondo","ardere","affrontare","realt\u00e0","grande","educare","bocca","capitare","mezzogiorno","fidanzarsi","inibito","sanit\u00e0","nuovo","pane","delitto","lavastoviglie","coincidere","capriccio","vario","viaggiare","riunirsi","macchina","miele","difficile","accomodare","quando","buco","caff\u00e8","offendere","decollare","testa","nascere","buonanotte","comprimere","aprire","inverno","fine settimana","pesca","togliere","albergo","Roma","ma","divertente","salsa","diventare","tossire","qualcuno","finire","occhi","fuoco","costruire","trovare","provenire","sbaglio","nozze","sinistra","sidro","gente","dottore","scuola","giocattolo","parlare","riscaldamento","mal di pancia","autunno","giusto","acqua","modo","est","pezzo","tedesco","presentare","gi\u00e0","bottiglia","portare","cisterna","la","iniziare","piantare","doccia","cielo","autocarro","meraviglioso","ristorante","verde","bianco","nube","bollire","destra","lampada","difendere","scoprire","gustare","complesso","contare","carta dei vini","abbandonare","molto","mezzanotte","straniero","servire","sette","maiale","oceano","Inghilterra","produrre","coperchio","marzo","deliberare","portoghese","lavatrice","atto","dodici","ciao","morire","capra","coltello","abituale","esistere","godere","affittare","durare","piscina","forchetta","muovere","zio","pesante","accendere","luna di miele","pi\u00f9","cosa","segnale","abbronzare","magnifico","rompere","rosso","tutto","giugno","lingua","qualcosa","odiare","grigio","leggere","magari","sviluppare","scienza","con","mercoled\u00ec","altezza","alto","nero","italiano","cane","mescolare","stesso","cervello","cercare","visitare","abbracciare","porta","pagare","mondo","accuratezza","nuotare","velocemente","diffusione","mondiale","vino","differente","carota","animale","carta di credito","ottimizzare","invidia","qualche","strada","donna","indubbio","minore","piegare","sognare","sotto","padre","pazzo","ginocchio","frequente","davanti","cucinare","sebbene","cattedrale","stima","muro","gruppo musicale","cinque","buontempo","televisione","indignato","veloce","fratello","addivenire","ideale","lento","piacere","nove","mostrare","nome","adorabile","nato","poltrona","sorriso","curiosamente","undici","abazia","parte","ultimo","Paradiso","qui","identico","dolere","ovest","valere","pronto","milione","capo","sugo","mal di testa","divano","giardino","carta di credito","contrario","aprile","esaminare","et\u00e0","dizionario","salvo","barba","sabato","confondere","pensare","indipendenza","piovere","ricco","studiare","mancare","passeggiare","poi","vendere","vecchio","isola","gradualmente","ufficiale","intorno","storia","attualmente","insalata mista","stesso","agosto","povero","tirare","lamentare","cosiddetto","cuocere","abbraccio","sconosciuto","coprire","essere","cucina","degradare","giovane","banca","orecchie","matrimonio","dedurre","causare","casa","occhio","fantasia","sole","domanda","cappello","ventisette","semplice","subito","sempre","comprare","alcun","universit\u00e0","respirare","lavello","formaggio","mordere","centro","citt\u00e0","orologio","finestra","realizzarsi","colorire","stimare","periodo","intero","tacere","pomodoro","chiudere","capire","fotografare","oggi","giocare","basso","carne","tratto","neve","pisello","magro","secondo","insieme","piede","agnello","aeroplano","naso","aspetto","minimo","baffi","dopocena","freddo","dente","Europa","anellino","letto","dividere","dicembre","fuori","evento","stranissimo","aeroporto","ieri","Italia","chiamasi","orecchino","mal di testa","anno","Pasqua","attraverso","alfabeto","settimana","dolore","zia","mezzo ","immobile","crescere","usare","ascoltare","sano","chiedere","malo","tavolo","fino","cittadina","povert\u00e0","primo","autista","facile","misto","spalla","cinque","piacere","simile","inferiorit\u00e0","maggio","dare","lago","pera","vedere","ordine","amare","cattivo","analfabetismo","ordinare","ragazzo","latte","detestare","perdere","perch\u00e9","ora","noioso","allegro","esistere","rumore","sistema","toccare","neanche","pronunciare","fiume","prendere","insicuro","lampone","lavare","campana","pesce","marrone","andare","Stati Uniti","porto","ventidue","esempio","rosa","fame","luna","pescatore","sorella","luglio","svegliare","ruota","serpente","straordinario","nonno","risposta","vuoto","pieno","forno","spiegare","strumento","conversazione","mano","buonsenso","uccello","marted\u00ec","fra ","che","amico","quindici","innaturale","politica","abitante","settembre","tagliare","estinzione","pregare","certo","appartenere","cavallo","cioccolata","circa","li","collo","dopo","spiaggia","mille","no","miracolo","credere","novit\u00e0","lacuna","origine","arena","dormire","riscaldatore","ingiusto","mai","otto","terra","met\u00e0","conoscenza","parrucchiera","camera da letto","estate","lavandino","fumare","allora","aspettare","pietra","scrivente","strano","volere","risolvere","soddisfare","tre","scrivania","l\u00ec","verme","stufare","piazza","prodotto","avvenire","cambiare","raggio","s\u00ec","poich\u00e9","buio","marea","prima","ventoso","intelligenza","qualsiasi","sedia","libert\u00e0","loro","indirizzo","buona notte","capa","braccio","giornalmente","gonna","argento","nord","esprimere","vincere","giorno","comparare","autobus","lungo","minimale","moderno","Londra","centimetro","tirare","ancora","uguale","vincere","vestire","nonna","cento","sei","strega"],
  "transliteration": []
}

const grid_width = 14;
const grid_height = 14;
const str_language = 'italian';

class Grid {

  constructor(data) {
    this.shuffleData(data);
    this.english_words = [];
    this.foreign_words = [];
    this.english_answer = [];
    this.grid = [];
    this.data = [];
    this.initGrid();
    this.loadData(data);
    this.createCrossword();
    this.adjustNumbers();
  }

  shuffleData(data) {
    let english = [...data.english];
    let foreign = [...data.foreign];
    this.shuffle(data.english);
    for (let i = 0; i < data.english.length; i++) {
      const englishWord = data.english[i];
      const index = english.indexOf(englishWord);
      data.foreign[i] = foreign[index];
    }
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  adjustNumbers() {
    this.data.sort((a, b) => {
      if (a.position.y > b.position.y) return 1;
      else if (a.position.y === b.position.y) {
        if (a.position.x > b.position.x) return 1;
        if (a.position.x === b.position.x) return 0;
        else return -1;
      }
      else return -1;
    });
    let number = 0;
    let previous = {
      number: -1,
      position: { x: -1, y: -1 }
    };
    this.data.forEach(item => {
      let itemNumber;
      if (item.position.x === previous.position.x && item.position.y === previous.position.y) {
        itemNumber = previous.number;
      } else {
        itemNumber = ++number;
      }
      item.id = itemNumber + '-' + item.direction;
      item.number = itemNumber;
      item.humanNumber = itemNumber.toString();
      item.group = [itemNumber + '-' + item.direction];
      previous = item;
    });
    this.data.sort((a, b) => a.number > b.number ? 1 : -1);
  }

  initGrid() {
    this.grid.length = 0;
    for (let i=0; i< grid_height; i++) {
      for (let j=0; j < grid_width; j++) {
        this.grid.push({letter: ' ', status:eCellStatus.eNoLetter, userIp:''});
      }
    }
  }

  loadData(data) {
    // slice creates a new array
    this.english_words = data.english.slice();

    // clean up foreign words
    const foreign_words = [];

    data.foreign.forEach(function (word_or_phrase) {

      if (str_language.toLowerCase() !== 'russian') {
        word_or_phrase = removeDiacritics(word_or_phrase);
      }

      word_or_phrase = word_or_phrase.replace(/\s+/g, '');

      word_or_phrase = word_or_phrase.toUpperCase();

      foreign_words.push(word_or_phrase);
    });

    this.foreign_words = foreign_words;
  }

  createCrossword() {
    let clue_number = 1;

    // move to the first word smaller than the grid
    let start_index;
    for (start_index = 0; start_index < this.foreign_words.length; start_index++) {
      if (this.foreign_words[start_index].length > grid_height) {
        continue;
      }
      break;
    }

    // place first word and the clue
    this.placeWordHorizontal(this.foreign_words[start_index], 0, 0, clue_number);
    this.english_answer.length = 0;
    this.addEnglishAnswer(this.foreign_words[start_index], "h", clue_number)
    clue_number++;

    // iterate the other words
    start_index++;
    let unUsedForeignWordArray = [];
    for (let i = start_index; i < this.foreign_words.length; i++) {
      // skip words bigger then the grid
      if (this.foreign_words[i].length > grid_height) {
        continue;
      }
      // find best match
      let best_match_obj = this.checkGridForMatches(this.foreign_words[i]);
      let word_x = best_match_obj.x_coord;
      let word_y = best_match_obj.y_coord;
      let word_dir = best_match_obj.direction;
      if (word_x !== -1) { // found best match
        let new_clue_number = clue_number;

        // tbd
        //  Word already starts here.
        if ((this.getCellAtPos(word_x, word_y).status === eCellStatus.eHiddenLetter) && (this.getCellAtPos(word_x, word_y).show_number === true)) {
          new_clue_number = this.getCellAtPos(word_x, word_y).clue_number;
        } else {
          clue_number++;
        }

        if (word_dir === 0) {
          this.placeWordHorizontal(this.foreign_words[i], word_x, word_y, new_clue_number);
          this.addEnglishAnswer(this.foreign_words[i], "h", new_clue_number)
        } else {
          this.placeWordVertical(this.foreign_words[i], word_x, word_y, new_clue_number);
          this.addEnglishAnswer(this.foreign_words[i], "v", new_clue_number)
        }
      } else {
        unUsedForeignWordArray.push(this.foreign_words[i]);
      }
    }

    // try again with not matching words
    for (let i = 0; i < unUsedForeignWordArray.length; i++) {
      // find best match
      let best_match_obj = this.checkGridForMatches(unUsedForeignWordArray[i]);
      let word_x = best_match_obj.x_coord;
      let word_y = best_match_obj.y_coord;
      let word_dir = best_match_obj.direction;

      if (word_x !== -1) { // best match found
        let new_clue_number = clue_number;

        //  Word already starts here.
        if ((this.getCellAtPos(word_x, word_y).status === eCellStatus.eHiddenLetter) && (this.getCellAtPos(word_x, word_y).show_number === true)) {
          new_clue_number = this.getCellAtPos(word_x, word_y).clue_number;
        } else {
          clue_number++;
        }
        if (word_dir === 0) {
          this.placeWordHorizontal(unUsedForeignWordArray[i], word_x, word_y, new_clue_number);
          this.addEnglishAnswer(unUsedForeignWordArray[i], "h", new_clue_number)
        } else {
          this.placeWordVertical(unUsedForeignWordArray[i], word_x, word_y, new_clue_number);
          this.addEnglishAnswer(unUsedForeignWordArray[i], "v", new_clue_number)
        }
      }

    }

    // sort the clues
    this.english_answer.sort(function(_a,_b)
    {
      return _a.clue_number - _b.clue_number;
    });
  }

  placeWordHorizontal(_word_or_phrase, _x_start, _y_start, _clue_number) {
    for (let i = 0; i<_word_or_phrase.length; i++) {
      if (i === 0) {
        this.setLetterAtPos(_x_start+i, _y_start, _word_or_phrase.charAt(i), eCellStatus.eHiddenLetter, _clue_number, true, "h");
        continue;
      }
      if (this.getCellStatusAtPos(_x_start+i, _y_start) !== eCellStatus.eHiddenLetter)    {
        this.setLetterAtPos(_x_start+i, _y_start, _word_or_phrase.charAt(i), eCellStatus.eHiddenLetter, _clue_number, false, "h");
      }
    }
    this.addData(_word_or_phrase, _x_start, _y_start, 'across');
  }

  addData(solution, x, y, direction) {
    const index = this.foreign_words.indexOf(solution)
    const clue = this.capitalizeFirstLetter(this.english_words[index]);
    this.data.push({
      clue: clue,
      direction: direction,
      length: solution.length,
      position: { x: x, y: y },
      separatorLocations: {},
      solution: solution.toUpperCase(),
    });
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  placeWordVertical(_word_or_phrase, _x_start, _y_start, _clue_number) {
    for (let i = 0; i < _word_or_phrase.length; i++) {
      if (i === 0)  {
        this.setLetterAtPos(_x_start, _y_start+i, _word_or_phrase.charAt(i), eCellStatus.eHiddenLetter, _clue_number, true, "v");
        continue;
      }
      if (this.getCellStatusAtPos(_x_start, _y_start+i) !== eCellStatus.eHiddenLetter) {
        this.setLetterAtPos(_x_start, _y_start+i, _word_or_phrase.charAt(i), eCellStatus.eHiddenLetter, _clue_number,false, "v");
      }
    }
    this.addData(_word_or_phrase, _x_start, _y_start, 'down');
  }

  getLetterAtPos(_x, _y) {
    const index = (grid_width * _y) + _x;
    return this.grid[index].letter;
  }

  setLetterAtPos(_x, _y, ch, cell_status, _clue_number, show_number, dir_str) {
    const index = (grid_width * _y) + _x;
    this.grid[index] = {letter:ch, status:cell_status, clue_number:_clue_number, show_number:show_number, dir:dir_str};
  }

  getCellStatusAtPos(_x, _y) {
    const index = (grid_width * _y) + _x;
    return this.grid[index].status;
  }

  getCellAtPos(_x, _y) {
    const index = (grid_width * _y) + _x;
    return this.grid[index];
  }

  addEnglishAnswer(_foreign_word_or_phrase, str_dir, clue_num) {
    const index = this.foreign_words.indexOf(_foreign_word_or_phrase)
    if (index !== -1) {
      const objTmp = ( { english:this.english_words[index], foreign:_foreign_word_or_phrase, dir:str_dir, clue_num:clue_num });
      this.english_answer.push(objTmp);
    }
  }

  checkGridForMatches(_str_word) {
    let matches_found = [];
    for (let y = 0; y < grid_height; y++) {
      for (let x = 0; x < grid_width; x++) {
        // 0 is horizontal
        const obj_ret = this.checkCellForMatch(x, y, _str_word);
        if (obj_ret.x_coord !== -1) {
          // use iWordLocationScore and reset
          matches_found.push(obj_ret);
        }
      }
    }
    if (matches_found.length !== 0) {
      matches_found.sort(matchCompare);
      return matches_found[0];
    } else {
      return ({x_coord: -1, y_coord: -1, direction: -1, score: -1});
    }
  }

  checkCellForMatch(_x, _y, _str_word) {
    const ch_cell = this.getLetterAtPos(_x, _y);
    for (let char_index = 0; char_index < _str_word.length; char_index++) {
      if (ch_cell === _str_word.charAt(char_index)) {
        const obj_ret = this.matchValid(_x, _y, _str_word, char_index);
        if (obj_ret.x_coord !== -1) {
          return obj_ret;
        }
      }
    }
    return ({x_coord:-1, y_coord:-1, direction:-1, score:-1});
  }

  matchValid(_x, _y, _str_word, _char_index) {
    let word_score_horizontal = 0;
    let word_score_vertical = 0;
    let horizontal_ok = false;
    let vertical_ok = false;

    // let num_chars_to_end_of_word = _str_word.length - char_index;

    let x_start = _x - _char_index;
    let y_start = _y - _char_index;

    if ((x_start < 0) || (y_start < 0)) {
      return ({x_coord:-1, y_coord:-1, direction:-1, score:-1});
    }

    if ((x_start + _str_word.length) < (grid_width)) {
      horizontal_ok = true;
      // is it ok horizontal

      let overlap_risk = false;
      for (let j = 0; j < _str_word.length; j++)  {
        let ch_cell = this.getLetterAtPos(x_start+j, _y);

        let ch_word = _str_word.charAt(j);

        if (ch_cell === ch_word) {
          if (overlap_risk === true) {
            horizontal_ok = false;
            break;
          }

          word_score_horizontal++;
          overlap_risk = true;
          continue;
        } else {
          overlap_risk = false;
        }

        if (this.getCellStatusAtPos(x_start+j, _y) === eCellStatus.eHiddenLetter) {
          horizontal_ok = false;
          break;
        }

        // Is letter safe - nothing above or below
        if (this.isCellEmpty(x_start+j, _y-1) === false) {
          horizontal_ok = false;
          break;
        }

        if (this.isCellEmpty(x_start+j, _y+1) === false) {
          horizontal_ok = false;
          break;
        }

      }
    }

    // check left and right of word.
    if (this.isCellEmpty(x_start-1, _y) === false) {
      horizontal_ok = false;
    }

    // ok-fine
    if (this.isCellEmpty(x_start+_str_word.length, _y) === false) {
      horizontal_ok = false;
    }

    if ( (y_start + _str_word.length) < (grid_height)  ) {
      vertical_ok = true;

      // is it ok vertical
      let overlap_risk = false;
      for (let j = 0; j < _str_word.length; j++) {
        let ch_cell = this.getLetterAtPos(_x, y_start+j);

        const ch_word = _str_word.charAt(j);

        if (ch_cell === ch_word) {
          if (overlap_risk === true) {
            vertical_ok = false;
            break;
          }

          word_score_vertical++;
          overlap_risk = true;
          continue;
        } else {
          overlap_risk = false;
        }


        if (this.getCellStatusAtPos(_x, y_start+j) === eCellStatus.eHiddenLetter) {
          vertical_ok = false;
          break;
        }

        // Is letter safe - nothing left or right
        if (this.isCellEmpty(_x-1, y_start+j) === false) {
          vertical_ok = false;
          break;
        }

        if (this.isCellEmpty(_x+1, y_start+j) === false) {
          vertical_ok = false;
          break;
        }
      }
    }

    // check top and bottom of word.
    if (this.isCellEmpty(_x, y_start-1) === false) {
      vertical_ok = false;
    }

    if (this.isCellEmpty(_x, y_start+_str_word.length) === false) {
      vertical_ok = false;
    }

    if ( (horizontal_ok === true) && (vertical_ok === true) ) {
      if (word_score_horizontal === word_score_vertical) {
        if (Math.floor((Math.random()*10)+1) > 5) {
          horizontal_ok = false;
        } else {
          vertical_ok = false;
        }
      } else if (word_score_horizontal > word_score_vertical) {
        vertical_ok = false;
      } else {
        horizontal_ok = false;
      }
    }

    if (horizontal_ok === true) {
      return ({x_coord:x_start, y_coord:_y, direction:0, score:word_score_horizontal});
    }

    if (vertical_ok === true) {
      return ({x_coord:_x, y_coord:y_start, direction:1, score:word_score_vertical});
    }


    return ({x_coord:-1, y_coord:-1, direction:-1, score:-1});
  }

  isCellEmpty(x, y) {
    if (x < 0) {
      return true;
    }

    if (x > (grid_width -1)) {
      return true;
    }

    if (y < 0) {
      return true;
    }

    if (y > (grid_height -1)) {
      return true;
    }


    if (this.getCellStatusAtPos(x, y) === eCellStatus.eHiddenLetter) {
      return false;
    }

    return true;
  }

}

const eCellStatus = Object.freeze( {"eNoLetter":0, "eHiddenLetter":1, "eCorrectLetter":2, "eIncorrectLetter":3,
  "eUserInput":4, "eBlueColour":5});

function matchCompare(_a,_b)
{
  return (_a.score - _b.score);
}

const defaultDiacriticsRemovalMap = [
  {'base':'A', 'letters':/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},
  {'base':'AA','letters':/[\uA732]/g},
  {'base':'AE','letters':/[\u00C6\u01FC\u01E2]/g},
  {'base':'AO','letters':/[\uA734]/g},
  {'base':'AU','letters':/[\uA736]/g},
  {'base':'AV','letters':/[\uA738\uA73A]/g},
  {'base':'AY','letters':/[\uA73C]/g},
  {'base':'B', 'letters':/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},
  {'base':'C', 'letters':/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},
  {'base':'D', 'letters':/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},
  {'base':'DZ','letters':/[\u01F1\u01C4]/g},
  {'base':'Dz','letters':/[\u01F2\u01C5]/g},
  {'base':'E', 'letters':/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},
  {'base':'F', 'letters':/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},
  {'base':'G', 'letters':/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},
  {'base':'H', 'letters':/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},
  {'base':'I', 'letters':/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},
  {'base':'J', 'letters':/[\u004A\u24BF\uFF2A\u0134\u0248]/g},
  {'base':'K', 'letters':/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},
  {'base':'L', 'letters':/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},
  {'base':'LJ','letters':/[\u01C7]/g},
  {'base':'Lj','letters':/[\u01C8]/g},
  {'base':'M', 'letters':/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},
  {'base':'N', 'letters':/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},
  {'base':'NJ','letters':/[\u01CA]/g},
  {'base':'Nj','letters':/[\u01CB]/g},
  {'base':'O', 'letters':/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},
  {'base':'OI','letters':/[\u01A2]/g},
  {'base':'OO','letters':/[\uA74E]/g},
  {'base':'OU','letters':/[\u0222]/g},
  {'base':'P', 'letters':/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},
  {'base':'Q', 'letters':/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},
  {'base':'R', 'letters':/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},
  {'base':'S', 'letters':/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},
  {'base':'T', 'letters':/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},
  {'base':'TZ','letters':/[\uA728]/g},
  {'base':'U', 'letters':/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},
  {'base':'V', 'letters':/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},
  {'base':'VY','letters':/[\uA760]/g},
  {'base':'W', 'letters':/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},
  {'base':'X', 'letters':/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},
  {'base':'Y', 'letters':/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},
  {'base':'Z', 'letters':/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},
  {'base':'a', 'letters':/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},
  {'base':'aa','letters':/[\uA733]/g},
  {'base':'ae','letters':/[\u00E6\u01FD\u01E3]/g},
  {'base':'ao','letters':/[\uA735]/g},
  {'base':'au','letters':/[\uA737]/g},
  {'base':'av','letters':/[\uA739\uA73B]/g},
  {'base':'ay','letters':/[\uA73D]/g},
  {'base':'b', 'letters':/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},
  {'base':'c', 'letters':/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},
  {'base':'d', 'letters':/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},
  {'base':'dz','letters':/[\u01F3\u01C6]/g},
  {'base':'e', 'letters':/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},
  {'base':'f', 'letters':/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},
  {'base':'g', 'letters':/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},
  {'base':'h', 'letters':/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},
  {'base':'hv','letters':/[\u0195]/g},
  {'base':'i', 'letters':/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},
  {'base':'j', 'letters':/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},
  {'base':'k', 'letters':/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},
  {'base':'l', 'letters':/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},
  {'base':'lj','letters':/[\u01C9]/g},
  {'base':'m', 'letters':/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},
  {'base':'n', 'letters':/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},
  {'base':'nj','letters':/[\u01CC]/g},
  {'base':'o', 'letters':/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},
  {'base':'oi','letters':/[\u01A3]/g},
  {'base':'ou','letters':/[\u0223]/g},
  {'base':'oo','letters':/[\uA74F]/g},
  {'base':'p','letters':/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},
  {'base':'q','letters':/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},
  {'base':'r','letters':/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},
  {'base':'s','letters':/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},
  {'base':'t','letters':/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},
  {'base':'tz','letters':/[\uA729]/g},
  {'base':'u','letters':/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},
  {'base':'v','letters':/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},
  {'base':'vy','letters':/[\uA761]/g},
  {'base':'w','letters':/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},
  {'base':'x','letters':/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},
  {'base':'y','letters':/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},
  {'base':'z','letters':/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}
];

function removeDiacritics (str)
{
  for(let i = 0; i < defaultDiacriticsRemovalMap.length; i++)
  {
    str = str.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);
  }

  return str;
}

function generateData(easy) {
  const grid = new Grid(easy ? words : words_intermidiate);
  const date = Date.now();
  return {
    id: 'simple/1',
    number: date,
    name: 'Simple Crossword 1',
    date: date,
    entries: grid.data,
    solutionAvailable: true,
    dateSolutionAvailable: 1542326400000,
    dimensions: {
      cols: 14,
      rows: 14,
    },
    crosswordType: 'quick',
  };
}

function App() {
  const [isBeginner, setBeginner] = useState(true);
  const [data, setData] = useState(generateData(true));
  function reload(asBeginner) {
    setBeginner(asBeginner)
    setData(generateData(asBeginner))
  }
  return (
    <div className="App">
      <header className="App-header center">
        <h2>Il cruciverba di Giulietta</h2>
        <div className="control-buttons">
          <div className="level">{isBeginner? "Beginner" : "Intermediate"} level</div>
          <button className="button button--primary button--crossword--current reload-button" onClick={() => reload(true)}>Beginner</button>
          <button className="button button--primary button--crossword--current reload-button" onClick={() => reload(false)}>Intermediate</button>
        </div>
        <Crossword key={data.number} data={data} loadGrid={() => []} />
      </header>
    </div>
  );
}

export default App;
