const luckCheck = (str) => {
    console.log(parseInt(str))

    if (isNaN(parseInt(str)) || (parseInt(str) < 1)) {
        return false;
    }




    // let index = 0;
    // let sum = 0;
    console.log(str)
    // console.log(str.length)
    let half = Math.floor(str.length / 2);
    // console.log(half);

    let left = str.substring(0, half);
    let right = str.substring(str.length - half, str.length); 
    console.log(left)
    console.log(right)

    function sumHalf(digits) {
        let sum = 0;
        // console.log(digits)

        for (let i = 0; i < digits.length; i++) {
            let digit = digits.slice(i, i+1);
            // console.log(parseInt(digit))
            sum += parseInt(digit);
        }

        return sum;


        // digits = parseInt(digits);
        // console.log(digits);

        // sum += digit;
        // return sum

    }

    left = sumHalf(left);
    right = sumHalf(right);

    console.log(left)
    console.log(right)

    if (left === right) {
        return true;
    } else {
        return false;
    }

    // rSum(left);
    // rSum(right);


    // left.forEach(rSum())
    // [...left].forEach(d => rSum(d))

    
    // Cut string in half ; check if odd or even
    //Left half, right half
        
        //Convert to int
        //Grab each digit
        //Add altogether
        //Compare
    
}


console.log(luckCheck("003111"));
console.log();
console.log(luckCheck("813372"));
console.log();
console.log(luckCheck("17935"));
console.log();
console.log(luckCheck("56328116"));
console.log();


console.log(luckCheck("4"));  // Evaluates to 0:0, returns true.
console.log();
console.log(luckCheck("-4"));  // Less than 1 returns false.
console.log();
console.log(luckCheck("abce"));  // Letters return false.