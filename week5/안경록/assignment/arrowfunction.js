plusTwo = (s) => s+2

console.log(plusTwo(10))


arr = [1,2,3,4,5,6,7,8,123,123412,21223,11123,22]

arr_map = arr.map(value=>value*2)
console.log(arr_map)

arr_filter = arr.filter(value => value > 10)
console.log(arr_filter)