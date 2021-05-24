function sum(a, b) {
    if (typeof a !== 'number' ||
        typeof b !== 'number' ||
        isNaN(a) ||
        isNaN(b)) {
        return false;
    }

    return b + a;
}

module.exports = sum;


//const sum = (a, b) => a + b;

//const fullName = (firstName, lastName) => firstName + ' ' + lastName;

//const average = list => list.reduce((t, s) => t + s, 0) / list.length;

