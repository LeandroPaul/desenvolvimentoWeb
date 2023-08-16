const chatContainer = document.querySelector('.chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', sendMessage);

function sendMessage() {
const message = userInput.value;
if (message.trim() !== '') {
const messageElement = document.createElement('div');
messageElement.classList.add('message');
messageElement.textContent = `Você: ${message}`;
chatContainer.appendChild(messageElement);
userInput.value = '';
// Chame aqui uma função para enviar a mensagem para o GPT e obter a resposta
// Em seguida, adicione a resposta no chat da mesma forma
}
}

