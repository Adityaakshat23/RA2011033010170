const express = require('express');
const axios = require('axios'); //install axios using npm

const app = express();
const port = 8008; //create a port 
//make a get request and response callback function
app.get('/numbers', async(req, res) => {
    const urls = req.query.url || []; // Get the 'url' query parameter(s)

    const validNumbers = new Set(); // Create a Set to store unique numbers

    // Function to fetch numbers from a given URL
    const fetchNumbers = async(url) => {
        try {
            const response = await axios.get(url, { timeout: 5000 }); // Set timeout for the request
            const data = response.data;
            if (data && data.numbers && Array.isArray(data.numbers)) {
                data.numbers.forEach((number) => validNumbers.add(number));
            }
        } catch (error) {
            console.error(`Error fetching numbers from ${url}: ${error.message}`);
        }
    };
    // Fetch numbers from all specified URLs concurrently
    await Promise.all(urls.map(fetchNumbers));

    const sortedNumbers = Array.from(validNumbers).sort((a, b) => a - b);
    // Return the sorted and unique list of numbers as a JSON response
    res.json({ numbers: sortedNumbers });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});