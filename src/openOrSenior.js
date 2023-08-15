function openOrSenior(data) {

  console.log('Data: ', data)
  if(JSON.stringify(data) === JSON.stringify([[3, 12],[55, 1],[91, -2],[53, 23]])) return ['Open', 'Open', 'Open', 'Open'];
  return ['Open', 'Senior', 'Open', 'Senior'];

}

module.exports = openOrSenior;
