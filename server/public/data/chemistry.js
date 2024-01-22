function call(question, options, info, answer){
    return new Question(question, options, info, answer);
}

function randomIndexes(){
    return  Math.floor(Math.random() * 6)+1;
}

function totalQuestion(){
    return questions.length;
}


var questions = [
    call(`The filter in the cigarette reduce the nicotine construct by `, ["burning", "absorption", "evaporation", "absorption"], "", "burning"),
    call(`Which of these require crystallization most?`, ["Drug making", "Cement making", "Paint making", "Perfume making"], "", "Drug making"),
    call(`Iron is often galvanized in order to`, ["Make it more malleable", "Remove the impurities unit", "Protect it against corrosion", "Render it passive"], "", "Protect it against corrosion"),
    call(`In the industrial production of H2 is removed by`, ["washing under pressure", "drying over phosphorus (V) oxide", "passing the mixture to the limewater", "using ammonical copper (I) chlorine"], "", "washing under pressure"),
    call(`The gas that is most useful in protecting humans
    against solar marathon is `, ["chlorine", "ozone", "carbon IV oxide", "hydrogen sulphur"], "", "ozone"),
    call(`Vulcanization involve the removal of`, ["monometer", "the single bond", "the double bond", "a polymer"], "", "the double bond"),
    call(`The acid in electrolysis of water is dilute`, ["HNO<small>3</small>", "CH<small>3</small>COOH", "H<small>2</small>SO", "HCl"], "", "H<small>2</small>SO"),
    call(`When salt loses its water of crystallization to the
    atmosphere on exposure, the process is said to be `, ["efflorescence", "déliquescence", "effervescence", "fluorescence"], "", "efflorescence"),
    call(`Atomicity of ozone is`, ["1", "2", "3", "4"], "", "3"),
    call(`Which of the noble gases has the greatest
    ionization energy `, ["He", "Xe", "Ar", "Rr"], "", "He"),
    call(`The weakest attractive force that can be observed
    between two molecules is `, ["ionic", "covalent", "co-ordinate covalent", "vander Waals"], "", "vander Waals"),
    call(`An elements used in production of matches is`, ["nitrogen", "aluminum", "copper", "sulphur"], "", "sulphur"),
    call(`Cathode rays cause an object placed behind a
    perforated anode to cast a shadow on the screen. This
    observation shows that the rays `, ["are positively charged", "are negatively charged", "Have mass", "travel in straight lines"], "", "travel in straight lines"),
    call(`Flow of current in electrolytes is due to the
    movement of `, ["electrons", "Holes and electron", "Ions", "Charges"], "", "Ions"),
    call(`A suitable reagent for distinguish between
    ethanoic and ethanol is `, ["bromine water", "Fehling’s solution", "sodium hydrogen trioxocarbonate (iv)", "Ammoniacal silver trioxonitrate(V)"], "", "sodium hydrogen trioxocarbonate (iv)"),
    call(`In the discovery of protein, the instrument used is`, ["cathode ray tube", "glass tube and discharge tube", "discharge tube with terminal cathode", "discharge tube with central cathode"], "", "discharge tube with central cathode"),
    call(`Which of the following metals burns with brick red`, ["Pb", "Ca", "Na", "Mg"], "", "Ca"),
    call(`In the production of soap, concentrated sodium
    chloride solution is added to `, ["increase the solubility of soap", "decrease the solubility of the soap", "saponify the soap", "emulsify the soap"], "", "decrease the solubility of the soap"),
    call(`A liquid that will dissolve fat is`, ["hydrochloric acid", "calcium hydrochloride", "kerosene", "water"], "", "kerosene"),
    call(`Tartaric acid is used industrially to`, ["make baking powder", "make fruit juice", "remove rust", "dry substance"], "", "make baking powder"),
    call(`P1V1 = P2V2 supports ?`, ["Charles’s law", "Boyles’s law", "Graham’s law", "Avogadro’s law"], "", "Boyles’s law"),
    call(`A fixed mass of gas a volume of 92cm<sup>3</sup> at 3°C. When will be its volume at 18C if the pressure
    remains constant ? `, ["15.3cm<sup>3</sup>", "87.3cm<sup>3</sup>", "2.0cm<sup>3</sup>", "97.0cm<sup>3</sup>"], "", "97.0cm<sup>3</sup>"),
    call(`Which of the following ion’s requires the quantity of electricity
    for discharge at an electrode `, ["2.0 mole of Q3<sup>+</sup>", "2.5 mole of R2<sup>+</sup>", "3.0 mole of T<sup>-</sup>", "4.0 mole of Y<sup>-</sup>"], "", "2.0 mole of Q3<sup>+</sup>"),
    call(`Hydrogen can be displaced from a lot alkaline solution by`, ["Fe", "Cu", "Cn", "Sn"], "", "Fe"),
    call(`Rare gases are suitable because they`, ["are monoatomic", "form ions easily", `have duplet or octet electronic configuration in the
    outermost shells in their atoms `, "are volatile gases"], "", `
    have duplet or octet electronic configuration in the
    outermost shells in their atoms `),
    call(`A major source of oxide of oxygen is from the
    burning of `, ["coal", "wood", "fuel", "chlorofluorocarbons"], "", "coal"),
    call(`Which of the activities is commonly used as a
    nuclear fuel `, ["uranium", "palladium", "actium", "thorium"], "", "uranium"),
    call(`The leachate of a certain ash is used in local soap
    because it contain `, ["sodium chloride and potassium hydroxide", "sodium hydroxide", "potassium hydroxide", "soluble carbonates and hydrogen carbonate"], "", "sodium hydroxide"),
    call(`All these are electromagnetic waves except`, ["White light", "Photon", "X-ray", "Infrared"], "", "Photon"),
    call(`The number of isomers formed by C<small>6</small>H<small>14</small> is`, ["4", "5", "2", "3"], "", "5"),
    call(`There are basic particles from which matter
    called be made except `, ["Salt", "Atom", "Ion", "Molecule"], "", "Salt"),
    call(`The energy value of petrol can be determined by`, ["Bomb calorimeter", "Catalytic cracker", "Fractionating column", "Thermometer"], "", "Fractionating column"),
    call(`An oxidation state of or in K2CrO7`, ["7", "6", "5", "4"], "", "6"),
    call(`The elements that belong to the third period of
    periodic table are `, ["Li, Be, Al and D", "Na, P, O and Cl", "B, C, N, and O", "N2, Mg, S and Ar"], "", "N2, Mg, S and Ar"),
    call(`When sugar is dissolve in ten, the reaction is
    accomplished by `, ["positive change", "negative entropy change", "no entropy change", "a minimum entropy change"], "", "no entropy change"),
    call(`Detergents are manufacture with strength
    hydrocarbon chains is to make them `, ["soluble", "biodegradable", "cheaper", "foamy"], "", "biodegradable"),
    call(`Which of the following results in the fall of acid rain`, ["oxide of lead", "particulate matter", "oxides of carbon", "gaseous hydrocarbon"], "", "oxides of carbon"),
    call(`The fuming of kettles is caused by the presence
    in the water of `, ["calcium tetraoxosulphate (IV)", "calcium hydrogentrionocarbonate (IV)", "calcium hydroxide", "calcium trioxocarbonate (IV)"], "", "calcium hydrogentrionocarbonate (IV)"),
    call(`A difference between chemical and physical
    change is that in a chemical change `, ["oxygen is consumed", "heat is supplied", "the reversible process occurs", "a new substance is formed"], "", "a new substance is formed"),
    call(`According to the kinetic theory an absence in
    temperature causes the kinetic energy of particles to `, ["decrease", "increase", "remain constant", "be zero"], "", "be zero")
];