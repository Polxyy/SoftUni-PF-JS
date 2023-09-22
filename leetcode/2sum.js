var twoSum = function (nums, target) {
    if((nums[0]+nums[1])==target){return [0,1];}
    for (let i = 0; i < nums.length; i++) {
        for (let c = i+1; c < nums.length; c++) {
            if ((nums[i] + nums[c]) == target) {
                return [c, i]
            }
        }
    }

    return null;
};

a=twoSum([3,2,9,7,1,5,3,3], 6)
console.log(a)