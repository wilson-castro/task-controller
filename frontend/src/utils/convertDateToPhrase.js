
function returnMounthInWord(mouth) {
  switch (mouth) {
    case '01':
      return 'jan';
    case '02':
      return 'fev';
    case '03':
      return 'mar';
    case '04':
      return 'abr';
    case '05':
      return 'mai';
    case '06':
      return 'jun';
    case '07':
      return 'jul';
    case '08':
      return 'ago';
    case '09':
      return 'set';
    case '10':
      return 'out';
    case '11':
      return 'nov';
    case '12':
      return 'dez';
    default:
      return mouth;
  }
}


export const convertDateToPhrase = (date) => {
  const dateArray = date.split('-')
  const mounth = returnMounthInWord(dateArray[1])
  const Phrase = dateArray[2] + ' ' + mounth + ' ' + dateArray[0]

  return Phrase
}
