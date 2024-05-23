function getLeapYear(year, target) {
    let result = document.getElementById(target);
    let givenYear = document.getElementById(year).value;
    if ((givenYear % 4 === 0 && givenYear % 100 !== 0) || (givenYear % 400 === 0)) {
        result.innerHTML = "The year is a leap year";
    } else {
        result.innerHTML = "The year is not a leap year";
    }
}

