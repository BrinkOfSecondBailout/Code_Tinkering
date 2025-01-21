

/* Return true if driver has driven less than 12 hours since their last 8 hour break */
function canDrive(history, currentTime) {
    if (!history || history.length === 0 || currentTime == null) return false;

    let length = history.length;
    let last = 0; hours_worked = 0; last_break = 0;

    if (currentTime - history[length - 1][1] >= 8) return true;

    for (let i = 0; i < length; i++) {
        if (last > 0) {
            last_break = history[i][0] - last;
        }
        hours_worked += history[i][1] - history[i][0];
        if (hours_worked >= 12 && last_break < 8) {
            return false;
        } else if (last_break >= 8) {
            hours_worked = 0;
        }
        last = history[i][1];
    }
    return true;
}

var history1 = [[2, 6], [14, 24]]; // true
var history2 = [[2, 8], [12, 16], [20, 22]]; // false
var history3 = [[2, 8], [10, 22]]; // false
var history4 = [[0, 4], [6, 10], [12, 16]]; // true

console.log(canDrive(history1, 24));
console.log(canDrive(history2, 24));
console.log(canDrive(history3, 24));
console.log(canDrive(history4, 24));