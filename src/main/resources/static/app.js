document.getElementById('fetchMessageButton').addEventListener('click', () => {
    fetch('http://localhost:8080/demo/api/v1/message')
        .then(response => response.text())
        .then(message => {
            document.getElementById('message').textContent = message;
        })
        .catch(error => {
            console.error('Error fetching message:', error);
        });
});

document.getElementById('fetchDataButton').addEventListener('click', () => {
    fetch('http://localhost:8080/demo/api/v1/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('data').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});