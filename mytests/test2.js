const reverseString = string => {
  // return string.split("").reverse().join("");
  if(string === '') {
    throw "String cannot be empty";
  } else {
    return string.split("").reverse().join("");
  }
};

module.exports = reverseString;