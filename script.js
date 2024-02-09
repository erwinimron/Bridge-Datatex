document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var attribute1 = document.getElementById('attribute1').value;
    var attribute2 = document.getElementById('attribute2').value;

    var errorMessage = document.getElementById('errorMessage');
    errorMessage.innerHTML = '';

    // Validasi data
    if (!attribute1 || !attribute2) {
        errorMessage.innerHTML = 'Please fill in all fields.';
        return;
    }

    // Kirim data untuk validasi dan token
    fetch('/validate-and-get-token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            attribute1: attribute1,
            attribute2: attribute2
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch token.');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('tokenMessage').innerText = 'Token: ' + data.token;
    })
    .catch(error => {
        console.error('Error:', error);
        errorMessage.innerHTML = 'Failed to fetch token.';
    });
});
