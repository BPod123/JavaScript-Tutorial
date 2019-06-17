function changeText(){
    document.getElementById("externalJSExample").innerHTML = "This text has been changed.";
    document.getElementById("invokeChangeTextButton").onClick="undoChangeText()";
}
function undoChangeText(){
    document.getElementById("externalJSExample").innerHTML = "Original text";
    document.getElementById("invokeChangeTextButton").onClick = "changeText()";
}