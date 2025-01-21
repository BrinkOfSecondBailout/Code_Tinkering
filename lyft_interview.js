

/* Return true if driver has driven less than 12 hours since their last 8 hour break */
function canDrive(history, currentTime) {
    let length = history.length;
    let last = 0; current_duration = 0; break_total = 0;

    for (let i = 0; i < length; i++) {
        if (last > 0) {
            break_total = history[i][0] - last;
        }
        current_duration = history[i][1] - history[i][0];
        console.log("[" + "time: " + current_duration + " hours, last break: " + break_total + " hours]");
        if (break_total < 8 && current_duration >= 12) {
            return false;
        }
        last = history[i][1];
    }
    return true;
}

var history1 = [[2, 6], [14, 24]]; // true
var history2 = [[2, 8], [12, 16], [20, 22]]; // true
var history3 = [[2, 8], [10, 22]]; // false
var history4 = [[0, 4], [6, 10], [12, 16]]; // true
var history5 = [[0, 13]]; // false

console.log(canDrive(history1, 24));
console.log(canDrive(history2, 24));
console.log(canDrive(history3, 24));
console.log(canDrive(history4, 24));
console.log(canDrive(history5, 24));