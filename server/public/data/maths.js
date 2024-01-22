function call(question, options, info, answer) {
    return new Question(question, options, info, answer);
}

function randomIndexes() {
    return Math.floor(Math.random() * 6) + 1;
}

function totalQuestion() {
    return questions.length;
}

function multifraction(first, second, third){
return `${first} <sup>${second}</sup>&frasl;<sub>${third}</sub>`;
}

var info = [
    null
];

var answer = [
 "1001011<small>2</small>","N51,000","8.6 x 10<sup>-1</sup>",
 "N45,000","66.253","10","3√6−7","5","{6,7}","(2y - 3x) (y - 6x)",
 "1","18","-3 < x < 1","73","√2","3,-4","8","2.5m","circle with radius 4m",
 "-4, 1","5","( 3 −38 2 )","3x - 4y + 18 = 0","-4","2","5","√2",

 
]

var questions = [
    call(`Find the value of 110111<small>2</small> + 10100<small>2</small>`, ["1101011<small>2</small>", "1001001<small>2</small>", "1001011<small>2</small>", "1001111<small>2</small>"], info[0], answer[0]),
    call(`A woman bought a grinder for N60,000. She
    sold it at a loss of 15 % .How much did she sell it ? `, ["N53,000", "N52,000", "N51,000", "N50,000"], info[0], answer[1]),
    call(`Express the product of 0.00043 and 2000 in
    standard form.
    `, ["8.6 x 10<sup>-3</sup>", "8.3 x 10<sup>-2</sup>", "8.6 x 10<sup>-1</sup>", "8.6 x 10"], info[0], answer[2]),
    call(`A man donates 10% of his monthly net earnings
    to his church. If it amounts to N4,500, what is his net
    monthly income ? `, ["N40,500", "N45,000", "N52,500", "N62,000"], info[0], answer[3]),
    call(`If log7.5 = 0.8751, evaluate 2 log75 + log750`, ["6.6252", "6.6253", "66.252", "66.253"], info[0], answer[4]),
    call(`Solve for x in 8x<sup>-2</sup>= 2/25`, ["4", "6", "8", "10"], info[0], answer[5]),
    call(`simplify 2√2−√3/√2+√3`, ["3√6−7", "3√6+7", "3√6−1", "3√6+1"], info[0], answer[6]),
    call(`Evaluate Log28 + Log216 - Log24`, ["3", "4", "5", "6"], info[0], answer[7]),
    call(`If P = {1,2,3,4,5} and P<b>U</b>Q = {1,2,3,4,5,6,7},
    list the elements in Q `, ["{6}", "{7}", "{6,7}", "{5,6}"], info[0], answer[8]),
    call(`Factorize 2y<sup>2</sup>- 15xy + 18x<sup>2</sup>`, ["(2y - 3x) (y + 6x)", "(2y - 3x) (y - 6x)", "(2y + 3x) (y - 6x)", "(3y + 2x) (y - 6x)"], info[0], answer[9]),
    call(`Find the value of <b>k</b> if <b>y - 1</b> is a factor of y3+ 4y2+ ky - 6`, ["-6", "-4", "0", "1"], info[0], answer[10]),
    call(`y varies directly as w<sup>2</sup>. When y = 8, w = 2. Find y when w = 3`, ["18", "12", "9", "6"], info[0], answer[11]),
    call(`What is the solution of x-5/x+3 < -1 ?`, ["-3 < x < 1", "x < -3 or x > 1", "-3 < x < 5", "x < -3 or x > 5"], info[0], answer[12]),
    call(`The 4th term of an A.P. is 13 while the 10th term
    is 31. Find the 24th term.`, ["89", "75", "73", "69"], info[0], answer[13]),
    call(`What is the common ratio of the G.P. (√10 + √5) + (√10 + 2√5) + ...... ? `, ["√2", "√5", "3", "5"], info[0], answer[14]),
    call(`A binary operation * is defined by x * y = xy. If x * 2 = 12 - x, find the possible values of x`, ["3,4", "3,-4", "-3,4", "-3,-4"], info[0], answer[15]),
    call(`How many sides has a regular polygon whose interior angle is 135&#176;`, ["12", "10", "9", "8"], info[0], answer[16]),
    call(`A cylindrical tank has a capacity of 6160m<sup>3</sup>. What is the depth of the tank if the radius of its base is 28cm?`, ["8.0m", "7.5m", "5.0m", "2.5m"], info[0], answer[17]),
    call(`The locus of a dog tethered to a pole with a rope of 4m is a`, ["circle with diameter 4m", "circle with radius 4m", "semi-circle with diameter 4m", "semi-circle with radius 4m"], info[0], answer[18]),
    call(`Find the mid point of S(-5, 4) and T(-3, -2)`, ["-4, 2", "4, -2", "-4, 1", "4, -1"], info[0], answer[19]),
    call(`The gradient of a line joining (x,4) and (1,2) is <sup>1</sup>&frasl;<sub>2</sub>. Find the value of x`, ["5", "3", "-3", "-5"], info[0], answer[20]),
    call(`Calculate the mid point of the line segment y - 4x + 3 = 0, which lies between the x-axis and y-axis.`, ["( 3 −38 2 )", "( 3 38 2 )", "( −2 22 2 )", "( −2 33 2 )"], info[0], answer[21]),
    call(`Find the equation of the straight line through (-2, 3) and perpendicular to 4x + 3y - 5 = 0`, ["3x - 4y + 18 = 0", "3x + 2y - 18 = 0", "4x + 5y + 3 = 0", "5x - 2y - 11 = 0"], info[0], answer[22]),
    call(`Find the minimum value of y = x2 - 2x - 3`, ["4", "1", "-1", "-4"], info[0], answer[23]),
    call(`The mean of 2 - 4, 4 + t, 3 - 2t and t - 1 is`, ["t", "-t", "2", "-2"], info[0], answer[24]),
    call(`Find the median of 5,9,1,10,3,8,9,2,4,5,5,5,7,3 and 6`, ["6", "5", "4", "3"], info[0], answer[25]),
    call(`Find the standard deviation of 5, 4, 3, 2, 1`, ["√2", "√3", "√6", "√10"], info[0], answer[26]),
]
