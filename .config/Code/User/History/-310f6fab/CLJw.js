var arr = ['a', 'b', 'a', 'a', 'b', 'b', 'c', 'c', 'd', 'b', 'a']
var includesValue = [
  {
    value: "",
    count: 0,
  },
];
var result = arr.map((value) => includesValue.includes(value) ? includesValue(includesValue.findIndex(value).count++) : includesValue.push([{
    value: value,
    count: 1,
}]));

console.log(result)