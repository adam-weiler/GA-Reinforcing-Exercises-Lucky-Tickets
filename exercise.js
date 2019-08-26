const luckCheck = (str) => {
    console.log(`Testing: ${str}`);

    if (isNaN(parseInt(str)) || (parseInt(str) < 1)) {
        return false;
    }

    let half = Math.floor(str.length / 2);

    let left = str.substring(0, half);
    let right = str.substring(str.length - half, str.length); 
    console.log(`Left: ${left}`);
    console.log(`Right: ${right}`);

    function sumHalf(digits) {
        let sum = 0;

        for (let i = 0; i < digits.length; i++) {
            let digit = digits.slice(i, i+1);
            // console.log(`Digit: ${digit}`);
            sum += parseInt(digit);
        }
        return sum;
    }

    left = sumHalf(left);
    right = sumHalf(right);

    console.log(`Left half: ${left}`);
    console.log(`Right half: ${right}`);

    return left === right ? true : false;
}


console.log(luckCheck("003111"));  // True.
console.log();
console.log(luckCheck("813372"));  // True.
console.log();
console.log(luckCheck("17935"));  // True.
console.log();
console.log(luckCheck("56328116"));  // True.
console.log();

console.log(luckCheck("4"));  // Evaluates to 0:0, returns true.
console.log();
console.log(luckCheck("-4"));  // Less than 1 returns false.
console.log();
console.log(luckCheck("abce"));  // Letters return false.
console.log();
console.log(luckCheck(""));  // Blank return false.