const removeFromArray = function (array, ...itemsToRemove) {
  let modifiedArray = array.filter((item) => !itemsToRemove.includes(item));
  return modifiedArray;
};
console.log(removeFromArray([1, 2, 3, 4], 1, 4));
// Do not edit below this line
module.exports = removeFromArray;
