/***
 * function noInfo(question, options, answer){
    return new Question(question, options, answer);
}
 * 
 */








function call(question, options, info, answer){
    return new Question(question, options, info, answer);
}


function randomIndexes(){
    return  Math.floor(Math.random() * 6)+1;
}

function totalQuestion(){
    return questions.length;
}

var answer = [
    "g/16", "1200N", "centripetal forces only", "At the point which is twice the focal length of the lens of the camera",
    "1500J", "Atoms of all elements are identical.", "The upthrust on it when completely immersed in water is equal to its weight in air",
    "<b>I</b> and <b>III</b> only", "Lead acid accumulators", "Electrons and holes",  "X is the anode and Y is the cathode",
    "0.5", "eddy current loss", "40g", "0.31A", "20CM", "0.63s", "be a straight line", "Velocity ratio", "Water waves",
    "Silicon", "Lenclanche cell", "Complementary colours mixture", "viscous force", "The colour of the surfaces", "Sagging of telegraph wires",
    "the rate of condensation is equal to that of vapouriztion", "37.0N", "is doubled", "lattice", "Virtual, erect and dimished", "2 sec", "infared rays",
    "Temperature gradient", "N-S when suspended freely", "0.5", "283V", "Expansion", "II only", "The Moon", "Formation of shadows", "All of the following",
    "1m", "0 deg", "the open end", "1120Hz", "magnified and erect", "parabolic mirror", "150 cm", "I, II and IV only", "ebonite has a negative charge while glass has a positive charge",
    "Potassium permanganate solution in contact with the positive pole", "He cannot see with it", "Water",  "I, II, III and IV", "Vernier Caliper", "318k", "9.4m", "All of the above",


];

var info = [
null,
"[g = 10ms^-2]",
"(density of mercury = 1300kg/m^3, density of air = 1.3kg/m^3)"
];

var questions = [
    call(`A satellite moves in a circular orbit of radius 4R round the earth. The acceleration of the satelite in terms of <b>g</b> is`, [
        "4/g", 
        "g/4", 
        "g/16", 
        "16/g"
    ], info[0], answer[0]),
    call(`What force has to be exerted on a mass 60kg to give it an acceleration of 10ms^-2 vertically upwards`, [
        "600N", 
        "1200N", 
        "400N", 
        "300N"
    ] , info[1], answer[1]),
    call(`A satellite revolving around the earth is kept on its orbit by`, [
        "centrifugal forces only",
        "centripetal forces only",
        "centripital and frictional forces only",
        "centripetal and centrifugal forces"
    ], info[0], answer[2]),
    call(`If a document is to be produced using a duplicating camera, where should the document be placed in order to obtain an exact copy?`, [
        "At the point which is twice the focal length of the lens of the camera",
        "At the optical centre of the lens of the camera",
        "Between the principal focus and a point twice the focal length of the lens of the camera",
        "Beyond a point twice the focal length of the lens of the camera."
    ], info[0], answer[3]),
    call(`The efficiency of a machine is 70%. Calculate the work done using the machine to raise a load 10kg through a vertical height of 2.0m`, [
        "2000J", "3000J", "1500J", "1000J"
    ], info[0], answer[4]),
    call(`Which of the following staatements is <b>NOT</b> true about atoms?`, [
        "An atom is made up of a nucleus and a number of electrons.",
        "The mass of an atom is concentrated in the nucleus.",
        "Atoms of different elements have different atomic weights",
        "Atoms of all elements are identical."
    ], info[0], answer[5]),
    call(`A piece of cork floats in water because`, [
        "The upthrust on it when completely immersed in water is greater than weight in air",
        "Thwe surface of the water acts like an elastic skin",
        "The upthrust on it when completely immersed in water is equal to its weight in air",
        "There is no upthrust on it when it is completely immersed in  water"
    ], info[0], answer[6]),
    call(`
    I. Thermometer must be kept vertical <br />
    II. Top of the mercury menicus is dead <br />
    III. Air use must be dry <br />
    <br />
    Which of the following precautions are common in verification of Boyle's, Charles law and pressure law?
    `, [
        "<b>I</b> and <b>II</b> only",
        "<b>I, II</b> and <b>III</b> only",
        "<b>II</b> and <b>III</b> only",
        "<b>I</b> and <b>III</b> only",
    ], info[0], answer[7]),
    call(`Which of the following does <b>NOT</b> use magnetic effect of current to function?`, [
        "A telephone receiver",
        "Lead acid accumulators",
        "A moving coil galvanometer",
        "An electric bell"
    ], info[0], answer[8]),
    call(`What are the charge carriers in semiconductors?`, [
        "Electrons and holes",
        "Holes only",
        "Ion and electrons",
        "Ion and holes"
    ], info[0], answer[9]),
    call(`Which of the following will be applied when a metal <b>Y</b> is used to electroplate another metal <b>X</b> in electrolysis ?`, [
        "Y is the cathode and X is the anode",
        "Y is the anode and very high current is used",
        "X is the anode and very high current is used",
        "X is the anode and Y is the cathode"
    ], info[0], answer[10]),
    call(`A 100kg box is pushed along a road with a force of 50N. if the box moves with a uniform velocity, the coefficent of friction between the box and the road is`, [
        "0.4",
        "1.0",
        "0.8",
        "0.5"
    ], info[1], answer[11]),
    call(`From the generating station to each substain power is transmitted at a very high voltage so as to reduce`, [
        "eddy current loss",
        "hysteresis loss",
        "heating in the coils",
        "magnetic flux leakage"
    ], info[0], answer[12]),
    call(`An empty relative destiny bottle has a mass of 30kg, When filled with paraffin, its mass is 70g. Calculate the mass of the bottle when it is filled with water.`, [
        "40g",
        "20g",
        "60g",
        "80g"
    ], "[Relative destiny of paraffin = 0.8]", answer[13]),
    call(`An electric bulb is labelled 260V, 80W. How much current is taken by the bulb ?`, [
        "0.46A",
        "0.82A",
        "0.40A",
        "0.31A"
    ], info[0], answer[14]),
    call(`A metre rule is pivoted at its mid-point with a vertical force of 10N hanging from the distance 30cm from the mid-point. At what distance must a 15N force hang to balance the ruler horizontally ?`, [
        "25CM",
        "30CM",
        "20CM",
        "10CM"
    ], info[0], answer[15]),
    call(`Calculate the period of vibration of a spring system of force constant 200Nm^-1 when loaded with mass of 2kg.`, [
        "0.53s",
        "0.63s",
        "0.33s",
        "0.23s"
    ], info[0], answer[16]),
    call(`A charged particle is moving in a uniform magnetic field. If the dirction of motion of the charged particle is parallel to the magnetic field, the path of the charge will`, [
        "curve inwards",
        "be a parabola",
        "curve outwards",
        "be a straight line"
    ], info[0], answer[17]),
    call(`Which of the following is <b>NOT</b> affected by friction in machines`, [
        "Efficency",
        "Effort",
        "Velocity ratio",
        "Mechanical advantage"
    ], info[0], answer[18]),
    call(`Which of the following waves is both transverse and mechanical ?`, [
        "Sound waves",
        "Radio waves",
        "Water waves",
        "X - rays"
    ], info[0], answer[19]),
    call(`Which of the following  is a semiconductor material ?`, [
        "Copper",
        "Silicon",
        "Steel",
        "Iron"
    ], info[0], answer[20]),
    call(`Chemical energy is used to power which of the following ?`, [
        "Lenclanche cell",
        "Electrical cell",
        "A dynamo",
        "Solar cell"
    ], info[0], answer[21]),
    call(`When primary and secondary colours are combined to produce white light, the phenomenon is known as`, [
        "Complementary colours mixture",
        "subtractive mixtures of colours",
        "secondary and primary colours mixture",
        "primary colours mixture"
    ], info[0], answer[22]),
    call(`The diffrent time rates of flow of fluids is due to`, [
        "cohesive force",
        "adhesive force",
        "viscous force",
        "surface tension"
    ], info[0], answer[23]),
    call(`Which of the following does <b>NOT</b> affect frictional force ?`, [
        "The relative velocity of the surface in contact",
        "The colour of the surfaces",
        "The area of contact of the given surfaces",
        "The nature of the surfaces in contact"
    ], info[0], answer[24]),
    call(`Which of thhe following is  <b>NOT</b> an application of expansion in metals ?`, [
        "Bimetallic strip thermometer",
        "Temperature control in an electric iron",
        "Compensated balance wheel of a watch",
        "Sagging of telegraph wires"
    ], info[0], answer[25]),
    call(`Vapour is said to be saturated on top of an enclosed liquid if`, [
        "the rate of condensation is equal to that of vapouriztion",
        "there is neither condensation nor vapourization of the liquid",
        "the rate of condensation is less than that of vapourization",
        "the rate of condensation is is greater than that of vapourization"
    ], info[0], answer[26]),
    call(`A body which weighs 50N in air distance 3.7kg of water partially immersed in water. Calculate the upthrust on the body`, [
        "37.0N",
        "87.0N",
        "13.0N",
        "8.7N"
    ], info[0], answer[27]),
    call(`if the distance between the object and the pinhole camera is reduced ny half, the size of the image of tje object`, [
        "is doubled",
        "is quadrupled",
        "remains the same",
        "is halved"
    ], info[0], answer[28]),
     call(`A regular spacing or arragement of atoms in a crystalline material is called`, [
        "Ordbit",
        "lattice",
        "Atomic structure",
        "Energy level"
    ], info[0], answer[29]),
    call(`Images formed by convex mirror are always ?`, [
        "Virtual, erect and dimished",
        "Virtual, real and erect",
        "Maginfied, dimished and erect",
        "Virtual, diminished and erect"
    ], info[0], answer[30]),
    call(`If a ball release from a height of 20m, How long would it take the to reach the ground ?`, [
        "2 sec",
        "3 sec",
        "35 sec",
        "2.4 sec"
    ], `(assuming = ${info[1]})`, answer[31]),
    call(`What type of electromagnetic radiation can be used to take photographs in the hase ?`, [
        "Radio waves",
        "infared rays",
        "visible light",
        "Gamma rays"
    ], info[0], answer[32]),
    call(`Which of the following is a vector quantity ?`, [
        "Temperature gradient",
        "Mass",
        "Work",
        "Time"
    ], info[0], answer[33]),
    call(`Lodestone is a natural magnet, it points at ?`, [
        "N-W when suspended freely",
        "N-S when suspended freely",
        "S-E when suspended freely",
        "S-W when suspended freely"
    ], info[0], answer[34]),
    call(`What is the co-efficient of friction between a wood of mass 1.6kg and a hroizontal surface, if the limiting frictional force is 8N ?`, [
        "0.2",
        "0.9",
        "0.5",
        "0.6"
    ], info[0], answer[35]),
    call(`The r.m.s value of a supply voltage is quoted at 200V. What is the approximate peak value of the voltage ?`, [
        "200V",
        "300V",
        "283V",
        "250V"
    ], info[0], answer[36]),
    call(`Heat losses to the surrounding is possible through the following except ?`, [
        "Conduction",
        "Convection",
        "Radiation",
        "Expansion"
    ], info[0], answer[37]),
    call(`Which of the following will increase the boling point of water ?
        <br />
        I. Taking it to a high altitude <br />
        II. Dissolving a salt into it <br />
        III. Heating it in a sealed flask <br />
        IV. Increasing the rate of heat supply <br />
    `, [
        "I only",
        "II & IV  only",
        "II & III only",
        "II only"
    ], info[0], answer[38]),
    call(`Which of the following is not a luminous object ?`, [
        "The Sun",
        "The Moon",
        "Light candle",
        "Star"
    ], info[0], answer[39]),
    call(`Which of the following cannot be used to explain the laws governing <b>REFLECTION</b> ?`, [
        "Formation of image by plane mirror",
        "Formation of image by curved mirror",
        "Action of the periscope",
        "Formation of shadows"
    ], info[0], answer[40]),
    call(`A good electric cell should have which of the following`, [
        "A minimum of polarixation effect",
        "A long life",
        "A cheap and safe electrolytes",
        "All of the following"
    ], info[0], answer[41]),
    call(`Estimate the falls in the height of the mercury column when the barometer is taken vertically upwards through a height of 1km `, [
        "0.1m",
        "0.5m",
        "0.3m",
        "1m"
    ], info[2], answer[42]),
    call(`What is the angle of dip at a magnetic equator`, [
        "180 deg",
        "90 deg",
        "45 deg",
        "0 deg"
    ], info[0], answer[43]),
    call(`In  a closed organ pipe producing a musical note an antinode will always be produced at`, [
        "the closed end",
        "the open end",
        "the middle",
        "all the parts of the pipe"
    ], info[0], answer[44]),
    call(`In a resonance tube expreiment, if the fundamental frequency of the vibrating air column is 280Hz, the frequency of the third overtone is`, [
        "70Hz",
        "840Hz",
        "1120Hz",
        "1960Hz"
    ], info[0], answer[45]),
    call(`An object O lies at a distance m in front of a concave mirror of focal length. If m < f, then the final image obtained will be`, [
        "virtual and diminished",
        "magnified and erect",
        "real and inverted",
        "diminished and erect"
    ], info[0], answer[46]),
    call(`The most suitable type of mirror used for the construction of searchlight is the`,  [
        "concave mirror",
        "convex mirror",
        "spherical mirror",
        "parabolic mirror"
    ], info[0], answer[47]),
    call(`A man wears convex lens glasses of focal length 30cm in order to correct his eye defect. Instead of the optimum 25cm, his least distinct vision is`, [
        "14 cm",
        "28 cm",
        "75 cm",
        "150 cm"
    ], info[0], answer[48]),
    call(`Which of the following are true about infra-red radiation ? 
    <br />
    I. it is invisible <br />
    II. It is called heat energy <br />
    III. its frequency is higher than that of blue light. <br />
    IV. it travels as a transverse wave <br />
    `, [
        "I, II, III and IV",
        "I, II and IV only",
        "I, III and IV only",
        "II, III and IV"
    ], info[0], answer[49]),
    call(`An ebonite rod rubbed with fur attratcs a glass rod rubbed with silk because`, [
        "ebonite has a negative charge while glass has a positive charge",
        "ebonite has a positive charge while glass has a negative charge",
        "both have negative charges",
        "both have positive charges."
    ], info[0], answer[50]),
    call(`Which of the following can be used to reduce local action in a lenclanche cell ?`, [
        "A carbon rod as the positive pole",
        "Pure zinc as the negative pole",
        "Potassium permanganate solution in contact with the positive pole",
        "common salt solution"
    ], info[0], answer[51]),
    call(`If a normal sighted person loses the sight of one eye, he cannot ?`, [
        "Judge the distance of an object",
        "See dearly a near object",
        "Decode the shape of an object",
        "He cannot see with it"
    ], info[0], answer[52]),
    call(`Heat transfer by convection will take place in one of the following substance ?`, [
        "Stone",
        "Wood",
        "Mercury",
        "Water"
    ], info[0], answer[53]),
    call(`The following statement is true about <b>FORCE</b><br />
    I. it is a physical quantity that denotes ability to pull, push, twist or accelerate a body <br />
    II. it is a product of its mass and acceleration {f= ma}
    III. The S.I unit of force is newton
    IV. it has a dimension of MLT^-2
    `, [
        "I & II only",
        "I, II, III and IV",
        "II & III only",
        "III only"
    ], info[0], answer[54]),
    call(`Which of the scientific instrument (tool) is used to measure accurately to 2 decimal place in centimeter ?`, [
        "Metre rule",
        "Vernier Caliper",
        "Micrometer screw gauge",
        "Measuring cylindeer"
    ], info[0], answer[55]),
    call(`convert 45 degree celcuis to kelvin`, [
        "318k",
        "250k",
        "184k",
        "120k"
    ], info[0], answer[56]),
    call(`The eyeball consits of a round tough white skin called ?`, [
        "9.4m",
        "7.5m",
        "5.7m",
        "6.9m"
    ], info[0], answer[57]),
    call(`A good electric cell should have which of the following ?`, [
        "A minimum of polarixation effect",
        "A long life",
        "A cheap and safe electrolysis",
        "All of the above"
    ], info[0], answer[58])
    

    




]; 