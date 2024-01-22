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
    ""
];
var answer = [
    "similar cells", "community", "skull", "Kidney", "mouth", "systematic sampling",
    "species", "cones", "aves pisces", "Influenza", "coffee leaf rust", "O2", "alveoli",
    "mitochondrion", "Viruses", "Darwin", "ricket", "Nephridium", "thallophytic", "Adrenal",
    "Cell membrane", "isotonic", "Grass hopper", "spermatophyte", "Filtration", "Vulva",
    "Sudan III", "digestion", "Excretion of CO2", "afforestation", "Pigeon", "chordate",
    "hepatitis", "endocrine system", "Adrenalin", "Sneezing", "Biology", "subclavian",
    "volvox", "fats", "rat", "mitochondrion"
];

var questions = [
call(`A tissue is composed of a group of`, ["similar cells", "tissues", "systems", "related organs"], info[0], answer[0]),
call(`The population of different organisms that exist together in a habitat is called`, ["biomes", "biosphere", "community", "ecology"], info[0], answer[1]),
call(`Which of the following serves as the brain box in man`, ["skeleton", "skull", "head", "spinal column"], info[0], answer[2]),
call(`Which organ removes the largest amount of excess water from the body?`, ["Liver", "Lung", "Kidney", "skin"], info[0], answer[3]),
call(`The following parts are involved in breathing process, except`, ["mouth", "nostrils", "ribs", "diaphragm"], info[0], answer[4]),
call(`Which of these is not a sampling method for
determining population size ? `, ["capture and re-capture method", "complete census", "Transect method", "systematic sampling"], info[0], answer[5]),
call(`A group of organisms of the same kind
inhabiting the same environment is called `, ["ecosystem", "habitat", "population", "species"], info[0], answer[6]),
call(`The light sensitive cells in the human eye is
called the................
`, ["Choroid", "Sclerotic layer", "retina", "cones"], info[0], answer[7]),
call(`The earliest form of life in animal kingdom is the`, ["class", "amphibian", "aves pisces", "reptilia"], info[0], answer[8]),
call(`Which of the following disease is not sexually
transmitted ? `, ["Gonorrhea", "Herpes", "Influenza", "Syphilis"], info[0], answer[9]),
call(`One of the following diseases is caused by fungi`, ["cassava mosaic", "coffee leaf rust", "leaf blight of cassava rossette", "disease of groundnut"], info[0], answer[10]),
call(`The by-product of photosynthesis is`, ["CO2", "O2", "C6H12O6", "H2O"], info[0], answer[11]),
call(`Gaseous exchange in the lungs takes place in the`, ["alveoli", "bronchi", "bronchioles", "trachea"], info[0], answer[12]),
call(`In eukaryotic cells,cellular respiration takes
place in the `, ["nucleus", "cytoplasm", "centrioles", "mitochondrion"], info[0], answer[13]),
call(`One of the following causes Ebola fever`, ["Bacteria", "Fungi", "Protozoa", "Viruses"], info[0], answer[14]),
call(`The theory of survival of the fittest was
propounded by.....
`, ["Darwin", "Hooke", "Lamarck", "Linnaeus"], info[0], answer[15]),
call(`The deficiency of vitamin D leads to`, ["beriberi", "pellagra", "ricket", "scurvy"], info[0], answer[16]),
call(`One of these is used for excretion in earthworm`, ["Contractile vacuole", "Flame cell", "Malpighian tubule", "Nephridium"], info[0], answer[17]),
call(`The following group of plants is the most
advanced except `, ["bryophyte", "pteridophyta", "spermatophyte", "thallophytic"], info[0], answer[18]),
call(`Which of the following hormonal glands is
located on top of the kidney ? `, ["Adrenal", "gonads", "pancreas", "thyroid"], info[0], answer[19]),
call(`One of these is present in both plant and animal cell?`, ["Cell membrane", "Cell wall", "Chloroplast", "Large cell vacuole"], info[0], answer[20]),
call(`When the solute concentration of the cell and its
surrounding medium are the same, the solution is
said to be `, ["hypertonic", "hypotonic", "isotonic", "acidic"], info[0], answer[21]),
call(`The primary consumer in the food chain below is................
<br>
Green plants → Grasshopper → Lizard → Snake →
Hawk `, ["Grass hopper", "green plants", "hawk", "lizard"], info[0], answer[22]),
call(`Angiosperms belong to the class`, ["bryophyte", "pteredophyta", "spermatophyte", "thallophytic"], info[0], answer[23]),
call(`In the kidney, both useful substances and wastes
are removed from the blood by `, ["Filtration", "selective absorption", "dialysis machine", "excretion"], info[0], answer[24]),
call(`Which of the following is not part of the
mammalian male reproductive organ ? `, ["Epididymis", "Vas deferens", "testis", "Vulva"], info[0], answer[25]),
call(`Which of the following reagent is used for
testing the presence of protein in food ? `, ["Benedict solution", "Fetiling’s Solution", "Millon’s reagent", "Sudan III"], info[0], answer[26]),
call(`The breaking down of food in the alimentary
canal is called `, ["digestion", "egestion", "excretion", "ingestion"], info[0], answer[27]),
call(`The followings are the functions of the kidneys, except`, ["Regulation of water content in the blood", "Maintenance of blood PH and homeostasis", "Excretion of CO2", "Removal of waste products from the blood"], info[0], answer[28]),
call(`The following distrupts the balance in an
ecosystem except `, ["afforestation", "deforestation", "migration", "pollution"], info[0], answer[29]),
call(`The following animals are viviparous expect`, ["Cow", "Dog", "Goat", "Pigeon"], info[0], answer[30]),
call(`The following animals is an invertebrate except`, ["flat worms", "round worms", "chordate", "protozoan"], info[0], answer[31]),
call(`The following are kidney diseases except`, ["diuresis", "hepatitis", "nephritis", "oedema"], info[0], answer[31]),
call(`The gland that releases hormones into the blood
are part of the `, ["digestive system", "endocrine system", "circulatory system", "respiratory system"], info[0], answer[32]),
call(`One of the following is called emergency
hormone in man.
`, ["Adrenalin", "Prolactin", "Testosterone", "Thyroxine"], info[0], answer[33]),
call(`Which of these responses is not voluntarily
controlled by the brain ? `, ["Dancing", "Eating", "Sneezing", "Writing"], info[0], answer[34]),
call(`The scientific study of life is`, ["Botany", "Biology", "Zoology", "Ecology"], info[0], answer[35]),
call(`One of the following exist as colony `, ["euglena", "paramecium", "spirogyra", "volvox"], info[0], answer[36]),
call(`The translucency spot in food test shows the
presence of `, ["fats", "starch", "water", "protein"], info[0], answer[37]),
call(`The following are examples of oviparous
animals except `, ["crocodile", "dove", "rat", "tilapia"], info[0], answer[38]),
call(`The part of cell that is responsible for the
production of energy is `, ["cell membrane", "cytoplasm", "mitochondrion", "nucleus"], info[0], answer[38])
];
