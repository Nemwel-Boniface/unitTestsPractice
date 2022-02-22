const stringLength = string => {
  let myStringLength =  string.length;

  if(myStringLength < 1) {
    throw "Your string cannot be less than 1 character";
  } else if(myStringLength > 10) {
    throw "Your string length cannot be more than 10 characters";
  } else {
    return myStringLength;
  }
};

module.exports = stringLength;