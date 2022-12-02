var checkNum = {
    0 : "0",
    1 : "1",
    2 :	"2",
    3 :	"3",
    4 :	"4",
    5 :	"5",
    6 :	"6",
    7 :	"7",
    8 :	"8",
    9 :	"9",
    10 : "A",
    11 : "B",
    12 : "C",
    13 : "D",
    14 : "E",
    15 : "F",
    16 : "H",
    17 : "J",
    18 : "K",
    19 : "L",
    20 : "M",
    21 : "N",
    22 : "P",
    23 : "R",
    24 : "S",
    25 : "T",
    26 : "U",
    27 : "V",
    28 : "W",
    29 : "X",
    30 : "Y"
}
function getAge() {
    var Ssn = document.getElementById("p1text").value;
    var Day = parseInt(Ssn.slice(0,2));
    var Month = parseInt(Ssn.slice(2,4) - 1);
    // Not future proof
    if (Ssn.includes("-")) {
        var Year = "19" + Ssn.slice(4,6)
    } else {
        var Year = "20" + Ssn.slice(4,6)
    }
    var Today = new Date();
    var Birthdate = new Date(Year, Month, Day)
    if (Today.getDay() < Day) {
        var ageDay = Today.getDay() - Day + 30;
    } else {
        var ageDay = Today.getDay() - Day;
    }
    if (Today.getMonth() < Month ) {
        ageMonth = Today.getMonth() - Month + 12;
    } else {
        ageMonth = Today.getMonth() - Month;
    }
    var ageYear = Today.getFullYear() - Birthdate.getFullYear();
    document.getElementById("age").innerHTML = ` ${ageYear} years ${ageMonth} months and ${ageDay} days old`
}
function checkSSN() {
    // Doesn't know if month has 31 or 30 days.
    let dateRegex = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])(0[1-9]|1[0-2])(0[1-9]|[0-9][0-9])$/ //Cases 01-31 01-12 00-99
    var Ssn = document.getElementById("p1text").value;
    var birthDate = Ssn.slice(0,6);
    let personalNum = Ssn.slice(7,10);

    if (parseInt(personalNum)%2==0){
        document.getElementById("sex").innerHTML = "Female";
    } else {
        document.getElementById("sex").innerHTML = "Man";
    }
    let Combined = birthDate + personalNum;
    let Remainder = parseInt(Combined) % 31;

    if (dateRegex.test(birthDate)) {
        if (checkNum[Remainder] == Ssn.slice(10,11)) {
            document.getElementById("result1").innerHTML = "It's valid";
        } else {
            document.getElementById("result1").innerHTML = "Date is correct but it's not a valid SSN";
        }
    } else {
        document.getElementById("result1").innerHTML = "Date is not correct.";
    }
    
}
function generateSSN() {
    // This function uses given date and generates a valid SSN based on that
    let Date = document.getElementById("p2bday").value; // string 2000-01-01
    let formatDate = Date.slice(8,10) + Date.slice(5,7) + Date.slice(2,4);  //010100
    var yearSuffix = { "20" : 'A', "19" : '-' }
    let letterDate = yearSuffix[Date.slice(0,2)];
    // Gives a random number between 2 - 899 based on gender
    let Man = document.getElementById("man");
    let Woman = document.getElementById("woman");
    if (Man.checked) {
        var personalNum = Math.floor(Math.random() * ((899 - 2) / 2) + 2) * 2 + 1;
    } else if (Woman.checked) {
        var personalNum = Math.floor(Math.random() * ((899 - 2) / 2) + 2) * 2;
    } else {
        document.getElementById("newSsn").innerHTML = "You should pick a gender"
    }
    // Makes numbers under 100 have leading zeros
    let leadZero = personalNum.toString();
    while (leadZero.length < 3) leadZero = '0' + leadZero;
    // Formats the variables into a new valid social security number
    let Combined = formatDate + leadZero;
    let checkIndex = parseInt(Combined) % 31;
    let newSsn = formatDate + letterDate + leadZero + checkNum[checkIndex];
    document.getElementById("newSsn").innerHTML = newSsn;
}