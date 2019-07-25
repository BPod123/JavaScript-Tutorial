function docWriteLine(string){
    document.write('<leftSide>document.write(\'' +
    string +
    '\');</leftSide> \
    <rightSide>' + string + '</rightSide>');
}
function docWriteVar(string, varName){
    document.write('<leftSide>document.write(\'' +
    varName +
    '\');</leftSide> \
    <rightSide>' + string + '</rightSide>');
}
function ex(code) {
    
}