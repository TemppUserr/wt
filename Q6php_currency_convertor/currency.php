<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Converter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: center;
        }

        h1 {
            font-size: 1.5em;
            margin-bottom: 20px;
        }

        input[type="number"] {
            width: calc(100% - 20px);
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1em;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1em;
        }

        button:hover {
            background-color: #0056b3;
        }

        .result {
            margin-top: 20px;
            font-size: 1.2em;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Currency Converter</h1>
        <form method="POST">
            <label for="amount">Enter Amount in USD:</label><br>
            <input type="number" id="amount" name="amount" step="0.01" required><br>
            <button type="submit" name="convert">Convert to INR</button>
        </form>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $exchangeRate = 82.50; // Hard-coded exchange rate (1 USD = 82.50 INR)
            $amount = $_POST['amount'];
            $convertedAmount = $amount * $exchangeRate;

            echo "<div class='result'>";
            echo "<p><strong>USD:</strong> $amount</p>";
            echo "<p><strong>INR:</strong> ₹" . number_format($convertedAmount, 2) . "</p>";
            echo "</div>";
        }
        ?>
    </div>
</body>
</html>
