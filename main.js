
fetch('./acv.json')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json(); // Parses the JSON automatically
    })
    .then(data => {
        console.log(data); // Use your JSON object here
    })
    .catch(error => console.error('Error loading JSON:', error));