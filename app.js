function insertText(id, text) {
    document.getElementById(id).innerHTML = text;
}
function sayHello() {
    insertText('hello', 'Greetings, traveller!');
}
function myName() {
    insertText('who', 'I am Juuso');
}
function myThings() {
    insertText('what', 'I works as a Test Lead');
}
function myCustomer() {
    insertText('customer', 'My client is SOK');
}
function myExpertise() {
    insertText('expertise', 'I am still learning...');
}