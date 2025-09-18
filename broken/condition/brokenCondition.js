/* Becky

Parameters:
numberA - number
numberB - number

Returns a string value:
- "greater" if numberA is greater than numberB
- "less" if numberA is less than numberB
- "equal" if the numbers are equal
*/
function compareNumbers1(numberA, numberB) {
    if(numberA > numberB) {
        return "greater";
    } else if(numberB < numberA) {
        return "less";
    } else {
        return "equal";
    }
}

/* Ben

Parameters:
stringA - string
stringB - string

Returns a string value:
- "same" if the strings are equal
- "different" if not
*/
function compareStrings(stringA, stringB) {
    if(stringA === stringB); {
        return "same";
    }

    return "different";
}

/* Eduardo

Parameters:
conditionA - boolean
conditionB - boolean

Returns a string value:
- "both true" if both conditions are true
- "one is false" if not
*/
function and(conditionA, conditionB) {
    if(conditionA || conditionB) {
        return "both true";
    } else {
        return "one is false"
    }
}

/* Kevin

Parameters:
numberA - number
numberB - number

Stores a string value in a variable called result
and returns the string value:
- "greater" if numberA is greater than numberB
- "less" if numberA is less than numberB
- "equal" if the numbers are equal
*/
function compareNumbers2(numberA, numberB) {
    let result;

    if(numberA > numberB) {
        result = "greater";
    } if(numberA < numberB) {
        result = "less";
    } else {
        result = "equal"; 
    }

    return result;
}

/* Mely

Parameters:
conditionA - boolean
conditionB - boolean

Returns a string value:
- "at least one is true" if at least one condition is true
- "both false" if not
*/
function or(conditionA, conditionB) {
    if((conditionA | conditionB) === true) {
        return "at least one is true";
    } else {
        return "both false";
    }
}

/* Michael

Parameters:
num - number

Returns a string value:
- "even" if the number is even
- "odd" if not
*/
function evenOrOdd(num) {
    if(num % 2 === 0) {
        return "even";
    if(num % 2 === 1) {
        return "odd";
    }
    }
}

/* Michelle

Parameters:
numberA - number
numberB - number

Returns a string value:
- "equal" if the numbers are equal
- "not equal" if not
*/
function equal(numberA, numberB) {
    if(numberA = numberB) {
        return "equal";
    } else {
        return "not equal";
    }
}


/* Rock

Parameters:
numberA - number
numberB - number

Stores a string value:
- "greater" if numberA is greater than numberB
- "less" if numberA is less than numberB
- "equal" if the numbers are equal
*/
function compareNumbers3(numberA, numberB) {
    if(numberA > numberB) {
        return "greater";
    } else if(numberA <= numberB) {
        return "less";
    } else {
        return "equal";
    }
}

/* Sophia

Parameters:
numberA - number
numberB - number
numberC - number

Stores a string value:
- "between" if numberB is greater than numberA 
and less than numberC
- "not between" if not
*/
function between(numberA, numberB, numberC) {
    if(numberA < numberB < numberC) {
        return "between";
    } else {
        return "not between";
    }
}

/* Victor

Parameters:
conditionA - boolean
conditionB - boolean
conditionC - boolean

Stores a string value:
- "all true" if all conditions are true
- "at least one is false" if not
*/
function allTrue(conditionA, conditionB, conditionC) {
    if((conditionA && conditionB & conditionC) === true) {
        return "all true";
    } else {
        return "at least one is false";
    }
}

/* Zander

Parameters:
numberA - number
numberB - number

Stores a string value in a variable called result
and returns the string value:
- "greater" if numberA is greater than numberB
- "less" if numberA is less than numberB
- "equal" if the numbers are equal
*/
function compareNumbers4(numberA, numberB) {
    let result;

    if(numberA >= numberB) {
        result = "greater";
    } else if(numberA <= numberB) {
        result = "less";
    } else {
        result = "equal";
    }

    return result;
}