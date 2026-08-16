function sumDigits(nums) {
    let sum = 0;
    while (nums !== 0) {
        sum += nums % 10;
        nums = Math.trunc(nums / 10);
    }

    console.log(sum);
}

sumDigits(245678);
