function check(str, bracketsConfig) {
  const checkList = [];
  const openArr = [];
  const closeArr = [];

  for (const [open, close] of bracketsConfig) {
    openArr.push(open);
    closeArr.push(close);
  }
  for (const char of str) {
    const openIndex = openArr.indexOf(char);
    const closeIndex = closeArr.indexOf(char);

    if (openIndex !== -1) {
      if (openIndex === closeIndex && checkList.length > 0 && checkList[checkList.length - 1] === char) {
        checkList.pop(char);
      } else {
        checkList.push(char);
      }
    }

    else if (closeIndex !== -1) {
      if (checkList.length === 0) {
        return false;
      }
      const lastChar = checkList.pop();
      if (lastChar !== openArr[closeIndex]) {
        return false;
      }
    }
  }
  return checkList.length === 0;
}
console.log(check('()', [['(', ')']]));  // -> true
console.log(check('((()))()', [['(', ')']]));  // -> true
console.log(check('())(', [['(', ')']]));  // -> false
console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]));  // -> true
console.log(check('[(])', [['(', ')'], ['[', ']']]));  // -> false
console.log(check('[]()', [['(', ')'], ['[', ']']]));  // -> true
console.log(check('[]()(', [['(', ')'], ['[', ']']]));  // -> false
console.log(check('||', [['|', '|']]));  // -> true
console.log(check('|()|', [['(', ')'], ['|', '|']]));  // -> true
console.log(check('|(|)', [['(', ')'], ['|', '|']]));  // -> false
console.log(check('|()|(||)||', [['(', ')'], ['|', '|']]));  // -> true