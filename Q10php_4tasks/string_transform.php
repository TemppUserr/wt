<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP String Transformations</title>
</head>
<body>
    <h1>PHP String Transformations</h1>
    <form method="POST" action="">
        <label for="inputString">Enter a String:</label><br>
        <input type="text" id="inputString" name="inputString" required>
        <br><br>
        <button type="submit" name="transform" value="uppercase">Transform to UPPERCASE</button>
        <button type="submit" name="transform" value="lowercase">Transform to lowercase</button>
        <button type="submit" name="transform" value="ucfirst">Capitalize First Character</button>
        <button type="submit" name="transform" value="ucwords">Capitalize First Letter of Each Word</button>
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['inputString']) && isset($_POST['transform'])) {
        $inputString = $_POST['inputString'];
        $transform = $_POST['transform'];
        $result = '';

        // Perform the transformation based on the button clicked
        switch ($transform) {
            case 'uppercase':
                $result = strtoupper($inputString);
                break;

            case 'lowercase':
                $result = strtolower($inputString);
                break;

            case 'ucfirst':
                $result = ucfirst($inputString);
                break;

            case 'ucwords':
                $result = ucwords($inputString);
                break;

            default:
                $result = 'Invalid transformation type.';
        }

        // Display the result
        echo "<h2>Transformed String:</h2>";
        echo "<p><strong>Original String:</strong> $inputString</p>";
        echo "<p><strong>Transformed String:</strong> $result</p>";
    }
    ?>
</body>
</html>
