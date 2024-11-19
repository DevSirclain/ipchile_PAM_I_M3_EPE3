// Mensajería
function sendMessage() {
    const message = document.getElementById('chatBox').value;
    const messageDisplay = document.getElementById('messageDisplay');
    if (message.trim()) {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messageDisplay.appendChild(messageElement);
        document.getElementById('chatBox').value = '';
    }
}

// Monitoreo de Sensores
function updateSensors() {
    navigator.sensors.getTemperature((temp) => {
        document.getElementById('temperature').textContent = temp;
    });
    navigator.sensors.getHumidity((hum) => {
        document.getElementById('humidity').textContent = hum;
    });
    navigator.sensors.getLight((light) => {
        document.getElementById('light').textContent = light;
    });
}

// Correo Corporativo
function openEmail() {
    window.location.href = 'mailto:corporativo@empresa.com';
}

// Programar Reuniones
document.getElementById('meetingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const date = document.getElementById('meetingDate').value;
    const time = document.getElementById('meetingTime').value;
    alert(`Reunión programada para el ${date} a las ${time}`);
});
