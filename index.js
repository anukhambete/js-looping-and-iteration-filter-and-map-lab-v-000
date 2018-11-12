// Code your solution here:
function driversWithRevenueOver(array, num) {
  let new_array = array.filter(x => x.revenue > num);
  return new_array;
}

function driverNamesWithRevenueOver(array, num) {
  let array_1 = driversWithRevenueOver(array, num);
  let new_array = array_1.map(x => x.name);
  return new_array;
}

function exactMatch(array, obj) {

}
