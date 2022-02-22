const capitalize = (string) => {
  // const split = string.splice('');
  // console.log(split);
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalize('meja'));
module.exports = capitalize;