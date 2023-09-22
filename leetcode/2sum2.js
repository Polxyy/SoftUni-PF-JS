var twoSum = function (nums, target) {
    let answer;

    if ((nums[0] + nums[1]) == target) { return answer = [0, 1]; }

    if (nums[nums.length / 2] > target) {
        for (let i = 0; i < 1+nums.length / 2; i++) {
            for (let c = 0; c < 1+nums.length / 2; c++) {
                if ((nums[i] + nums[c]) == target) {
                    answer = [c, i];
                    return answer;
                }
            }
        }
    } else {
        for (let i = 0; i < nums.length; i++) {
            for (let c = 0; c < nums.length; c++) {
                if ((nums[i] + nums[c]) == target) {
                    answer = [c, i]
                    return answer;
                }
            }
        }
    }
   
};