function openOrSenior(data) {

  return data.map((ageHend)=>ageHend[0] >= 55 && ageHend[1] > 7 ? 'Senior' : 'Open')

  // return data.map(([age, hand])=> age >= 55 && hand > 7 ? 'Senior' : 'Open')

}

module.exports = openOrSenior;
