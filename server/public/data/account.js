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
    call(`An expenses is said to be revenue in nature if it`, [`adds or contributes to the operating income of the
    business `, "necessitates the introduction of additional capital", "reduces the capital of the business", "related adds to or improves the value of fixed assets"], "", `
    adds or contributes to the operating income of the
    business `),
    call(`An entry in a subsidiary book which does not
    form part of the double entry system is a `, ["contra entry", "single entry", "journal entry", "memorandum entry"], "", "memorandum entry"),
    call(`Determine wage expenses from the given
    information, wages outstanding at the beginning,
    wages paid during the period 15000 and wages
    outstanding of the period 2, 000 `, ["N16,000", "N17,000", "N13,000", "N14,000"], "", "N16,000"),
    call(`Which method of pricing can be used
    satisfactorily in either rising or falling price
    situation ? `, ["Market price", "Average method", "FIFO", "Standard price"], "", "Average method"),
    call(`What will be the number of shares to be issued to
    a subscriber who applied
    for 50, 000 units.
    `, ["20,000", "18,000", "15,000", "12,000"], "", "20,000"),
    call(`The major distinguishing element between the
    final account of a partnership and that of a sole trader
    is the `, ["drawing A/C", "capital A/C", "Creditor A/C", "Appropriation A/C"], "", "Appropriation A/C"),
    call(`The accounting concept that allows the cost of
    kitchen cutlery to be expensed, though it can be used
    for more than one year is `, ["Materiality", "Accrual", "Going concern", "Business entity"], "", "Materiality"),
    call(`When the invoice of a customer is overcast, the
    supplier will send to him a `, ["debit notes", "cheque", "credit note", "payment voucher"], "", "credit note"),
    call(`Using LIFO method of stock valuation, analyze
    the issue quantities and their prices `, ["260 units at N1.50", "700 units at N1.50", "200 units at N1.50 and 500 units at N1.00", "350 units at N1.50 and 350 units at N1.00"], "", "260 units at N1.50"),
    //16 false
    call(`The ledger entries to be made if cash sales is
    banked is debit `, ["cash, credit sales", "sales, credit cash", "bank, credit cash", "bank, credit sales"], "", "bank, credit sales"),
    call(`In a bank reconciliation statement, Dishonoured
    cheques is added to `, ["unpresented cheques", "uncredited cheques", "statement of account", "aggregate balanace as per cash book"], "", "uncredited cheques"),
    call(`Which of the following is a debit entry in debtors
    control account ? `, ["discount allowed", "return inwards", "credit sales", "cash from debtors"], "", "credit sales"),
    call(`Which of the following is not a proper form of
    the accounting equation `, ["fixed assets + current assets - liabilities = capital", `
    fixed assests + current assests + liabilities =
    capital `, "fixed assets – liabilities + current assets = capital", "fixed asset + current asset – capital = liabilities"], "", `
    fixed assests + current assests + liabilities =
    capital `),
    call(`The accounting convention that state that stock
    should be value that the lower of cost and net realized
    value is-- -- -- -- -- -- -- - convention `, ["marching", "consistency", "realization", "prudency"], "", "prudency"),
    call(`What does liquidity ratio measure?`, ["measures operating efficiency of a company", `measures the ability of a company to meet its
    current obligations.
    `, "measures the value of investments of a company", "measures the financial leverage of a company"], "", `measures the ability of a company to meet its current obligations.`),
    call(`Derive the stock turnover period.(Average stock
    = 23, 000. Cost of sales = 300, 000 year = 365 days).
    `, ["28 days", "42 days", "27 days", "23 days"], "", "28 days"),
    call(`The following accounting entries are made when bad debt is recovered `, [`debit bad debts accounts and credit bad debt recovered account `, "debit debtors accounts and recovered account", `debit bad debts recovered account and credit bad debts account `, `
    debit bad debts account and credit profit and loss
    account `], "", "debit debtors accounts and recovered account"),
    call(`One of the items listed below will not be found
    in a company’s memorandum and article of
    association.Which is it ? `, ["objects and their alteration", "location of business", "bank signatories", "powers of directors"], "", "bank signatories"),
    call(`The act of making necessary adjustment after comparing the actual cost with targeted cost is cost ----------------`, ["conversion", "control", "allocation", "analysis"], "", "control"),
    call(`Sales ledger control account contains the total
    amount in respect of `, ["creditors", "debtors", "investors", "shareholders"], "", "debtors"),
    call(`The following account are prepared when goods are sent to branch except`, ["Branch stock", "Goods set to branch account", "Branch adjustment account", "Branch debtors account"], "", "Branch debtors account"),
    call(`The basis of accounting for public sector is`, ["accrual basis", "cost basis", "revenue basis", "cash basis"], "", "cash basis"),
    call(`If the partnership agreement does not specify
    how net profit is to be divided, the profit should be
    divided `, ["equally", "in accordance with an established", "in proportion of current account balances", "in proportion of weighted average of capital"], "", "equally"),
    call(`A sales for N2,570 was recorded in the sales day
    book as N2750.The error committed was `, ["error of principle", "error of commission", "error of original entry", "compensating error"], "", "error of original entry"),
    call(`Keeping records under single entry system has
    the advantage of `, ["Quality in terms of records", "Simplicity in terms of operation", "Accuracy in terms of operation", "Completeness in terms of records"], "", "Simplicity in terms of operation"),
    call(`Which of the following is true in public sector
    accounting ? Cost of assets is `, ["depreciated on straight line method", "expensed in the year of purchase", "charged to federation account", "depreciated on reducing balance method"], "", "expensed in the year of purchase"),
    call(`Which of the following accounts is debited when
    a delivery van is sold
    for cash ? `, ["sales account", "delivery van account", "cash account", "profit and loss accounts"], "", "cash account"),
    call(`When shares are sold at more than the per value,
    they are said to have been issued at `, ["A premium", "Normal value", "A discount", "A profit"], "", "A premium"),
    call(`Calculate the total purchase of a business from
    <br>
    the given information, cash purchases 3000;
    payments to creditors 54,000; creditors at the
    beginning 4000;
    creditors at the end 2, 000 `, ["N52,000", "N51,000", "N55,000", "N50,000"], "", "N55,000"),
    call(`Which of the following is shown in the profit
    and loss appropriation account of a company `, ["interest charges", "depreciation", "directors emoluments", "dividends"], "", "dividends"),   
    call(`The income and expenditure account of a club is
    the same as `, ["single entry account", "a profit and loss account", "a trading account", "a cash book"], "", "a profit and loss account"),
    call(`Goods stolen at the branch is debited to`, ["branch stock account", "defalcations account", "branch debtors account", "branch adjustment account"], "", "branch adjustment account"),
    call(`Specific principles, bases, conventions, rules and
    practices adopted by an enterprise in preparing and
    presenting financial statements are known as ----------
    -- -- -- -- -- - `, ["financial accounting", "accounting policies", "cost accounting", "accounting conventions"], "", "accounting policies"),
    call(`Which of the following cannot be realized?`, ["creditors", "debtors", "motor vehicles", "goodwill"], "", "goodwill"),
    call(`If a trail balance is in agreement, one of the
    statement is untrue `, ["the accounting system is error free", `
    equal debit entries and credit entries were recorded
    for each transaction `, `
    the debit and credit from the journal were posted
    to the accounts `, `
    account balances were correctly computed `], "", "the accounting system is error free"),
    call(`If sales return is understated, it implies that ------
    ------------------------ is overstated`, ["return inward", "sales figure", "cost of sales", "return outward"], "", "sales figure"),
    call(`Accounting information is used by investors and
    creditors of a company to predict `, ["potential merger candidates for the company", "appropriate remunerations for the company’s staff", "future cash flows of the company", "future tax payments of the company"], "", "future cash flows of the company"),
    call(`An advantage of using accounting ratios is that`, ["can be easily calculated", "show errors and frauds", "facilitate decision making", "are stipulated by law"], "", "facilitate decision making"),
    call(`The document setting out the regulations
    regarding shares, meetings and internal organization
    of a company is known as `, ["prospectus", "memorandum of association", "company law", "articles of association"], "", "articles of association"),
    call(`The loss made by a non profit making
    organization is called `, ["deficit", "surplus", "discount", "shortage"], "", "deficit"),
];
