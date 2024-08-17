document.getElementById('checkButton').addEventListener('click', async function () {
    const question = document.getElementById('question').value;
    const resultDiv = document.getElementById('result');
    
    if (!question) {
        resultDiv.textContent = "Please enter a question.";
        return;
    }

    resultDiv.textContent = "Checking...";

    try {
        const response = await fetch('https://api.example.com/content-safety', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY' // Replace with your API key
            },
            body: JSON.stringify({ question })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        resultDiv.textContent = `Result: ${data.result}`;
    } catch (error) {
        resultDiv.textContent = 'Error: ' + error.message;
    }
});
