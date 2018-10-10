let socket = io();
let form = document.getElementsByTagName('form')[0];
let send = document.getElementById('m');
let messages = document.getElementById('messages');

socket.on('chat message', function(msg){
    let liElement = document.createElement('li');
    let textNode = document.createTextNode(msg);
    liElement.appendChild(textNode);
    messages.append(liElement);
    window.scrollTo(0, document.body.scrollHeight);
});

form.addEventListener('submit', processForm);

function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    socket.emit('chat message', send.value);
    send.value = '';
    return false;
}

socket.emit('loaded');