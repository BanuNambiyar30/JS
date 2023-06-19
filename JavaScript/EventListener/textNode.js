function createObject() {
    var div = document.createElement('div');
    var text = document.createTextNode('Enter Your Name:');
    var input = document.createElement('input');
    var button = document.createElement('button');
    var buttonText = document.createTextNode('Click');
    button.appendChild(buttonText);
    div.appendChild(text);
    div.appendChild(input);
    div.appendChild(button);
    document.body.appendChild(div);
}