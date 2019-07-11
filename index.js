var katzDeliLine = [];

function takeANumber (line,person) {
  line.push(person)
  return 'Welcome,' + person + '. You are number' + line.length + 'in line.'
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobodywaiting to be served!'  }
  else {
    var name = katzDeliLine[0];
    x.splice(0,1);
    return 'Currently serving' + name +'.'
  }
}