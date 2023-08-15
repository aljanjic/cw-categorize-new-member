function openOrSenior(data) {

  let result = data.map((ageHend)=> {
    return ageHend[0] >= 55 && ageHend[1] > 7 ? 'Senior' : 'Open';
  })

  console.log('Result: ', result)


  return result;

}

module.exports = openOrSenior;
