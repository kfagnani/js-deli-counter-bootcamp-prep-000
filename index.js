var katzDeliLine = [];

function takeANumber (line,person) {
  line.push(person)
  return 'Welcome, ' + person + '. You are number ' + line.length + ' in line.'
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'  }
  else {
    var name = katzDeliLine[0];
    x.splice(0,1);
    return 'Currently serving' + name +'.'
  }

  function currentLine (newLine) {
    var line =[]
    if (newLine.length === 0) {
    return "This line is currently empty"  
    } else {
      for (var i = 0; i < newLine.length; i++) {
        line += (i + 1) + '.' + newLine [i] + ','
      }
      line = line.slice (0, line.length - 2)
      return 'The line is currently:' 
      + line
    }
     }
}