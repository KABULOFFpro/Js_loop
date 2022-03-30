let userName = prompt("Ismingizni kiritin ?");

while (userName == '' || !isNaN(userName)) {
    userName = prompt("Boshidan");
}

let z = confirm("Faqat son kiriting hopmi...")

if (z == true) {
    alert("Bowladi unda")
    let number = +prompt(userName + " lyuboy sonni kirting");
    let exp = number % 2;
    while (isNaN(number)) {}
    if (exp == 0) {
        alert(userName + " " + number + " bu juft son blsez blarsz ");
    } else {
        alert(userName + " " + number + " bu toq son blsez blarsz");
    }
} else {
    alert("Xayr so bo'luras")
}