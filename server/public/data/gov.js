function call(question, options, info, answer) {
    return new Question(question, options, info, answer);
}

function randomIndexes() {
    return Math.floor(Math.random() * 6) + 1;
}

function totalQuestion() {
    return questions.length;
}

var questions = [
    call(
        `The main attributes of a state are`,
        [
            `government, the police and the armed forces `,
            "necessitapopulation, territory, government and sovereigntytes",
            "federal state and local governments",
            `the press, the legislature, the executive and the
judiciary`
        ],
        "",
        "population, territory, government and sovereignty"
    ),
    call(
        `A disadvantage of the one-party system is that it`,
        [
            `emphasizes political differences `,
            "makes accountability difficult",
            "negates freedom of association",
            "delays decision-making."
        ],
        "",
        "makes accountability difficult"
    ),
    call(
        `In the history of Nigeria, 1914 was the`,
        [
            `year the British established their rule over Nigeria `,
            "beginning of first world war",
            "year Lugard effected amalgamation of Nigeria",
            "year the railway system was completed"
        ],
        "",
        "year Lugard effected amalgamation of Nigeria"
    ),
    call(
        `Which of these rulers resisted colonial rule and
was deported to Calabar?`,
        ["King Kosoko", "King Dosunmu", "Oba Ovonramwen", "King Jaja"],
        "",
        "Oba Ovonramwen"
    ),
    call(
        `How many states were created in Nigeria in 1967?`,
        [`4`, "12", "19", "21"],
        "",
        "12"
    ),
    call(
        `A major functional of Warrant Chiefs was to`,
        [
            `take charge of local administration `,
            "stop ritual killings",
            "prevent tribal wars",
            "supervise native courts and markets"
        ],
        "",
        "supervise native courts and markets"
    ),
    call(
        `A state that is ruled by an elected citizen is`,
        [`a republic `, "a plutocracy", "a monarchy", "an empire"],
        "",
        "a republic"
    ),
    call(
        `The first Governor-General of Nigeria was`,
        [
            `Lord Lugard `,
            "Dr. Nnamdi Azikwe",
            "Sir James Robertson",
            "(the late) Major-General Aguiyi-Ironsi"
        ],
        "",
        "Lord Lugard"
    ),
    call(
        `The main role of pressure groups is to`,
        [
            `influence the legislature to make decision
favourable to them `,
            "inject emotion and selfish debates",
            "influence the public",
            `use all means, including bribery, to achieve their
objectives`
        ],
        "",
        `influence the legislature to make decision
favourable to them`
    ),

    call(`The OAU was formed in`, [`1946 `, "1956", "1960", "1963"], "", "1963"),
    call(
        `The first African Secretary-General of the United
Nations is`,
        [`Boutrous Boutrous-Ghali `, "Joe Garba", "Ibrahim Gambari", "Kofi Annan"],
        "",
        "Boutrous Boutrous-Ghali"
    ),
    call(
        `The system of indirect rule failed in the former
Eastern Nigeria primary because`,
        [
            `of the fragmented political structures `,
            `the Chief refused to cooperate with colonial
officers`,
            `the of the high incidence of taxation Chief refused
to cooperate with colonial officers`,
            `the colonial officers imposed warrant chiefs on the
people`
        ],
        "",
        "of the fragmented political structures"
    ),
    call(
        `In federalism system of Government currency,
Armed forces and National defense is the primary
function of`,
        [
            `Local government Chairman `,
            "Armed Forces Ruling Council",
            "Security and Exchange Commission",
            "Exclusive list"
        ],
        "",
        "Exclusive list"
    ),
    call(
        `In a Federal System (such as Nigeria) the Local
Governments are directly responsible`,
        [
            `to the Federal or Central Government `,
            `to the State Government`,
            "to the Federal and State Government",
            "to no other level of government"
        ],
        "",
        "to the State Government"
    ),
    call(
        `An electoral process in which candidates are
selected for elective offices by party members is`,
        [
            `primary election `,
            "electoral college",
            "bye election",
            "general election"
        ],
        "",
        "primary election"
    ),
    call(
        `Nigeria spearheaded the formation of ECOWAS
during the regime of`,
        [
            `Olusegun Obasanjo `,
            "Yakubu Gowon",
            "Muritala Muhammad",
            "Ibrahim Babangida"
        ],
        "",
        "Yakubu Gowon"
    ),
    call(
        `Who was the political head of the Old Oyo
Empire?`,
        [`Bashorun `, "Oyomesi", "Aremo", "Alaafin"],
        "",
        "Alaafin"
    ),
    call(
        `Federalism was introduced in Nigeria under the`,
        [
            `Lyttelton Constitution `,
            "Macpherson Constitution",
            "Richards Constitution",
            "Independence"
        ],
        "",
        "Lyttelton Constitution"
    ),
    call(
        `Which of these is not the supreme organ of the
OAU?`,
        [
            `The Council of Ministers`,
            "The Administrative Secretary General",
            "The Assembly of Heads of States and Government",
            "Appointment of staff"
        ],
        "",
        "Appointment of staff"
    ),
    call(
        `When a bill passed by legislature is vetoed by the
executive, the action underscores the principle of`,
        [
            `collective responsibility`,
            "probity and accountability",
            "checks and balances",
            "separation of powers"
        ],
        "",
        "checks and balances"
    ),
    call(
        `Decree 34 of 1966 was unacceptable to many
Nigerians because it was`,
        [
            `seen as an instrument of impoverishment`,
            "perceived to abolish the federal system",
            "promulgated without consultation with the people",
            "considered as alien"
        ],
        "",
        "perceived to abolish the federal system"
    ),
    call(
        `The Igbo political system was based on`,
        [`Age Grades`, "Umunna", "Family ties", "Umuada"],
        "",
        "Umunna"
    ),
    call(
        `One challenge associated with presidential
system of Government`,
        [
            `Aim of government`,
            "separation of power",
            "The Senate president",
            "Fusion of power"
        ],
        "",
        "separation of power"
    ),
    call(
        `The dominant idea behind the establishment of
the Organization of African Unity is`,
        [
            `that Africa must unite`,
            `to show the world that Africa can also do what
Latin American and Asian countries have done`,
            `to provide a framework and opportunities for co-
operation on common African problems`,
            "to promote economic development of Africa"
        ],
        "",
        "that Africa must unite"
    ),
    call(
        `A typical form of delegated legislation is`,
        [`an act`, "a bill", "a decree", "a bye-law"],
        "",
        "a bye-law"
    ),
    call(
        `Nigeria’s quest for a leadership role in Africa
hinges principally on her`,
        [
            `military might`,
            "size and population",
            "generosity",
            "economic strength"
        ],
        "",
        "size and population"
    ),
    call(
        `The term, rule of law means`,
        [
            `nobody is above the law`,
            "everybody is equal before the law",
            "we are being governed by lawyers",
            "A and B above"
        ],
        "",
        "A and B above"
    ),
    call(
        `France introduced the policy of assimilation in
her colonies primarily to`,
        [
            `teach them the art of leadership`,
            "give them a sound education",
            "change their way of life",
            "discourage them from ritual killings"
        ],
        "",
        "change their way of life"
    ),
    call(
        `In the Oyo traditional political system, the Alafin
of Oyo was elected or chosen by a group known as`,
        [`Oyo Mesi`, "Bales", "Obas", "Ogboni"],
        "",
        "Oyo Mesi"
    ),
    call(
        `A good example of a country with a largely
unwritten constitution is`,
        [
            `the United States of America`,
            "The Soviet Union",
            "Nigeria",
            "United Kingdom"
        ],
        "",
        "United Kingdom"
    ),
    call(
        `Before Nigeria became a republic, the highest
body charged with the administration of justice was the`,
        [`Supreme Court`, "Court of Appeal", "Privy Court", "High Court"],
        "",
        "Privy Court"
    ),
    call(
        `The Independent National Electoral Commission
has the power to prepare and maintain the register of`,
        [`electoral candidates`, "voters", "political parties", "constituencies"],
        "",
        "voters"
    ),
    call(
        `In which of the following systems is the power
of the component units more than that of the central
government?`,
        [`Monarchical`, "Federal Governments", "Unitary", "Confederal"],
        "",
        "Confederal"
    ),
    call(
        `The two leaders that played the most prominent
roles in the formation of the ECOWAS were`,
        [
            `Gowon and Eyadema`,
            "Kountche and Senghor",
            "Kerekou and Tubman",
            "Acheampong and Jawara"
        ],
        "",
        "Gowon and Eyadema"
    ),
    call(
        `Under a presidential system of government, the
legislature and the executive are`,
        [
            `elected separately to an unfixed term`,
            "appointed at the same time to an unfixed term",
            "appointed by the judiciary to a fixed term",
            "elected separately to a fixed term"
        ],
        "",
        "elected separately to a fixed term"
    ),
    call(
        `Which of these constitutions recognized local
government as a third tier of government in Nigeria?`,
        [
            `1960 Constitution`,
            "1963 Constitution",
            "1979 Constitution",
            "1946 Constitution"
        ],
        "",
        "1979 Constitution"
    ),
    call(
        `A referendum is a device to ensure that`,
        [
            `elections are free and fair`,
            "legislators vote to resolve contentious issues",
            "decisions are effected with the consent of citizens",
            "bye-elections are held to fill vacant positions"
        ],
        "",
        "decisions are effected with the consent of citizens"
    ),
    call(
        `The Mid-Western Region was created in Nigeria
    in`,
        [`1961`, "1962", "1963", "1964"],
        "",
        "1963"
    ),
    call(
        `A form of oligarchy in which gifted people are at
the helm of affairs is`,
        [`aristocracy`, "theocracy", "plutocracy", "gerontocracy"],
        "",
        "aristocracy"
    ),
    call(
        `One of the principal objectives of the OPEC is to`,
        [
            `determine oil prices in the international market`,
            "harmonizes the oil policies of member countries",
            "discipline erring oil-producing countries",
            "assist non-oil producing developing states"
        ],
        "",
        "harmonizes the oil policies of member countries"
    )
];
