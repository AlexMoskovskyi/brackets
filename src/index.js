module.exports = function check(str, bracketsConfig) {
  let array = [];
    for (let elem of bracketsConfig) 
    {
      array.push(elem.join(''))
    }
    
    for (let i = 0; i < array.length; i++) 
    {
      if (str.includes(array[i])) 
      {
        str = str.replace(array[i], '');
        i =- 1
      }
    }
   return str.length === 0;
}

