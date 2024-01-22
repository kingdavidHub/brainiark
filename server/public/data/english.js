function call(question, options, info, answer){
    return new Question(question, options, info, answer);
}

function randomIndexes(){
    return  Math.floor(Math.random() * 6)+1;
}

function totalQuestion(){
    return questions.length;
}
var info = [
    "choose The nearest meaning to the words or phrase in italics",
    "Choose the word or group of words that best completes each of the following sentences",
    "Choose the words that best completes each of the following sentences",
    "In each of the quetions, select the option that best explains the information conveyed in the sentence",
    "Choose the words <b>most nearly opposite</b> in meaning"
];
var answer = [
    "excessive","an accurate","obnoxious","bold","flexible","perfunctorily","patrician","thin","long before","willing",  
    "for","on","within","off","for","through","on","in","out","out",
    "come by","paid for","switch on","off hand","cut in","seeking","shoulder to shoulder","step down","shuttle between","in company of",
    "In the event of his leaving the country his family would join him","The painting was a good deceptive replica","The president gave rather long speech on the importance of patriotism",
    "The gradual fall in gold price is making the industry unstable","Publishing formulated untruths is misused press freedom","The guests arrived at the last minute","Benjamin thinks that Napoleon always says the right thing",
    "amicable","demolish","distressed","imaginery","incompetence","declining","disdain","voluntary","barbaric","affulence",
];

var questions = [
call(`He is a very well known for his <i>inordinate</i> ambition`, ["sound", "moderate", "passionate", "excessive"], info[0], answer[0]),
call(`A <i>conservative</i> estimate put the number of missing persons at forty`, ["an accurate", "tough", "an incorrect", "a primitive"], info[0], answer[1]),
call(`The usually hostile crowd was captivated by the player's <i>winsome</i> attitude`, ["colorful", "obnoxious", "drunk", "friendly"], info[0], answer[2]),
call(`Students could be <i>timid</i>`, ["bold", "sad", "covetous", "pugnacious"], info[0], answer[3]),
call(`The Labour leader's <i>recalcitrant</i> stance was appluaded`, ["flexible", "well-informed", "stubborn", "uncompromising"], info[0], answer[4]),
call(`The doctor examined the patient <i>painstakingly</i>`, ["carefully", "professionally", "painfully", "perfunctorily"], info[0], answer[5]),
call(`He gave up his <i>plebeian</i> tastes`, ["roboust", "laughan", "patrician", "voracious"], info[0], answer[6]),
call(`That little boy has become quite <i>chubby</i>`, ["thin", "intelligent", "tall", "huge"], info[0], answer[7]),
call(`<i>No sooner had</i> he arrived than is started raining`, ["long before", "seldom", "just before", "simultaneously"], info[0], answer[8]),
call(`I am <i>loath</i> to do the  assignment`, ["unwilling", "dying", "waiting", "willing"], info[0], answer[9]),
call(`Fatou and her child set out ________ kano two days ago`, ["for", "to", "at", "by"], info[1], answer[10]),

call(`Mr.Jones was ________ the plane that crashed `, ["inside", "into", "by", "on"], info[1], answer[11]),
call(`The lecturer works ________ the university at ilorin`, ["within", "by", "in", "throught"], info[1], answer[12]),
call(`The teacher rounded ________ the lesson at 8:00 pm`, ["up", "off", "in", "on"], info[1], answer[13]),
call(`The Commisioner left ________ England yesterday`, ["to", "at", "for", "in"], info[1], answer[14]),
call(`He talked to his brother ________ the window`, ["by", "through", "on", "in"], info[1], answer[15]),
call(`The chairman accepted an amendment ________ the motion`, ["about", "with", "on", "to"], info[1], answer[16]),
call(`Audu was taken ________ by his wife's story`, ["in", "up", "of", "out"], info[1], answer[17]),
call(`Most accident words in the general hospital have been  ________  of use since 1990`, ["in", "out", "inside", "up"], info[1], answer[18]),
call(`Every student is advised to abide ________  the school rules and regulations.`, ["with", "against", "to", "by"], info[1], answer[19]),

call(`Despite all preparations, the wedding did not ________`, ["come along", "come on", "come by", "come off"], info[2], answer[20]),
call(`After so many trails, the exprement________`, ["paid up", "paid out", "paid off", "paid for"], info[2], answer[21]),
call(`They had to ________ the generator when the electricity failed`, ["light up", "fall back on", "siwtch on", "resort to"], info[2], answer[22]),
call(`The loquancious young lad reeled of all the names of the player ________`, ["off hand", "at heart", "off head", "at hand"], info[2], answer[23]),
call(`Our culture does not allow one to ________ when an elderly person is speaking`, ["cut of", "cut in", "cut on", "cut off"], info[2], answer[24]),
call(`I am ________ to the university this year`, ["seeking on", "seeking at", "seeking for", "seeking"], info[2], answer[25]),
call(`We found it difficult to identify him as the crowd was ________ around him`, ["head to head", "head above head", "shoulder to shoulder", "shoulder from shoulder"], info[2], answer[26]),
call(`One of the three candidates contensting the union election was obliged to ________ in favour of his wife`, ["step down", "step out", "stand out", "stand down"], info[2], answer[27]),
call(`Some motorists ________  las vegas to canada`, ["shuttle along", "shuttle to", "shuttle kano", "shuttle heaven"], info[2], answer[28]),
call(`The expected quest eventually arrived ________ his wife.`, ["in company with", "in company of", "by company of", "accompanied with"], info[2], answer[29]),

call(`If I left the country, I would arrange for my family to come and join me.`, ["He left the country", "In the event of his leaving the country his family would join him", "He did not leave the country and his family did not join him", "He may not leave the country"], info[3], answer[30]),
call(`The painting in the museum was beautifully faked`, ["The painting was a good deceptive replica", "The painting was well-framed and displayed", "The painting was deceptively decorated in the museum", "The painting was carefully hung in the museum"], info[3], answer[31]),
call(`The president held forth for serveral minutes on the need for patriotism`, ["The president was silent for some minutes when patriotism was being discussed", "The president whispered a few things about patriotism", "The president spent time saying a few things about patriot", "The president gave rather long speech on the importance of patriotism"], info[3], answer[32]),
call(`The slide in the price of gold of world market has left the industry reeling`, ["The gradual fall in gold price is making the industry unstable", "The stability in gold price is making the industry stagnant", "The decline in gold price is making the industry redundant", "The increase in gold price is making the industry to boom"], info[3], answer[33]),
call(`Fabricated Statements published as truths amount to an abuse of press freedom`, ["To make known what is not true is aggressive to press freedom", "Publishing formulated untruths is misused press freedom", "Unplanned publicized untruths are a misuse of the freedom of the press", "Press freedom is based on published untruth"], info[3], answer[34]),
call(`The expected guests arrived at the eleventh hour`, ["The guests arrived at the last minute", "The guests arrived at 11 o'clock", "The guests arrived at the expected time", "The guests arrived eleven hours behind achedule"], info[3], answer[35]),
call(`Benjamin exclamied, 'If it Napoleon who said it, it must be right'.`, ["Benjamin never belives what Napolean says", "Benjamin does not know what is right unless Napoleon says it", "Napoleon always says what Benjamin belives to be right", "Benjamin thinks that Napoleon always says the right thing"], info[3], answer[36]),

call(`Althought the atmosphere was <u>hostile</u>, the meaning ended on ________ terms.`, ["gentle", "unacceptable", "suspicious", "amicable"], info[4], answer[37]),
call(`The company had to ________ the restaurant in order to <u>construct</u> a hotel.`, ["demolish", "abandon", "damage", "relocate"], info[4], answer[38]),
call(`Five years ago the economy of our country was <u>buoyant</u> but nowadays it has become ________`, ["profitable", "distressed", "unbeatable", "low"], info[4], answer[39]),
call(`We enjoy <u>real</u> stories not those that are ________`, ["imaginery", "practical", "vague", "undefiend"], info[4], answer[40]),
call(`Ann's <u>efficiency</u> earned her promotion while jane's ________ caused her dismissal`, ["lateness", "capability", "incompetence", "laziness"], info[4], answer[41]),
call(`While John business is <u>flourishing</u>. Micheal is ________`, ["declining", "dimishing", "vanishing", "withering"], info[4], answer[42]),
call(`Clara is full <u>admiration</u> for lena but she treats me with ________`, ["despair", "callousness", "carefullness", "disdain"],info[4], answer[43]),
call(`The contribution should be ________ not <u>compulsory</u>`, ["wilful", "voluntary", "delibrate", "outright"], info[4], answer[44]),
call(`In those societes, the ________ and the <u>cultured</u>, lived together`, ["ignorant", "rich", "barbaric", "arrogant"], info[4], answer[45]),
call(`Some people live in above <u>poverty</u> while others live in ________`, ["affulence", "greateness", "fame", "peace"], info[4], answer[46]),







];
