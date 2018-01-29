var rainWater = function (array) {
  let left = 0;
  let right = array.length - 1;
  let leftWall = 0; 
  let rightWall = 0;
  let totalWater = 0;
  let startingLeftIndex = [];
  let startingRightIndex = [];
  let updatedIndex = 0;
  let maxWater=0;
  var result = [];
  
  while (left < right) {
    if (array[left] < array[right]) {
      if (array[left] > leftWall) {
        leftWall = array[left];
        startingLeftIndex.push(left);
      } else {
        if (leftWall - array[left] === 0) {
          if (totalWater > maxWater) {
            maxWater = totalWater;
            var initialIndex = startingLeftIndex.pop();
            result = [initialIndex, left];
            totalWater = 0;
            left++;
          } else {
            left++;
          }
        } else {
          totalWater += leftWall - array[left];
          left++; 
        }
      }
    } else {
      if (array[right] > rightWall) {
        rightWall = array[right];
        startingRightIndex.push(right);
      } else {
        if (rightWall - array[right] === 0) {
          if (totalWater > maxWater) {
            maxWater = totalWater;
            var initialIndex = startingRightIndex.pop();
            result = [initialIndex, right];
            totalWater = 0;
            right--;
          } else {
            right--;
          }
        } else {
         totalWater += rightWall - array[right];
          right--; 
        }
      }
    }
  }
  return result;
}

module.exports.rainWater = rainWater;