const express = require('express');
const path = require('path');

const app = express();

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Set up EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
    res.render('index', { bill: null, error: null });
});

// Route for calculating the electricity bill
app.post('/calculate', (req, res) => {
    const units = parseFloat(req.body.units);

    if (isNaN(units) || units <= 0) {
        return res.render('index', { bill: null, error: 'Please enter a valid number of units!' });
    }

    let bill = 0;

    if (units <= 50) {
        bill = units * 3.50;
    } else if (units <= 150) {
        bill = (50 * 3.50) + ((units - 50) * 4.00);
    } else if (units <= 250) {
        bill = (50 * 3.50) + (100 * 4.00) + ((units - 150) * 5.20);
    } else {
        bill = (50 * 3.50) + (100 * 4.00) + (100 * 5.20) + ((units - 250) * 6.50);
    }

    res.render('index', { bill: bill.toFixed(2), error: null });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
