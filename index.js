function takeANumber (people,name) {
  line.push(name)
  return 'Welcome, ${name}. You are number ${line.length} in line.'
}

function nowServing(line) {
  if(line.length === 0){
    return 'There is nobody waiting to be served!'
  }
  else {
    var upNext = line [0]
    line.shift()
    return "Currently serving ${upNext}."
  }
}

function currentLine (line) {
  
}
