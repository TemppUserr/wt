<?php
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $position = htmlspecialchars($_POST['position']);
    $department = htmlspecialchars($_POST['department']);
    $salary = htmlspecialchars($_POST['salary']);

    $stmt = $pdo->prepare("INSERT INTO employees (name, position, department, salary) VALUES (?, ?, ?, ?)");

    try {
        $stmt->execute([$name, $position, $department, $salary]);
        echo "<p>Employee added successfully. <a href='listemp.php'>View Employee List</a>.</p>";
    } catch (PDOException $e) {
        echo "<p>Error: " . $e->getMessage() . "</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Employee</title>
</head>
<body>
    <h1>Add New Employee</h1>
    <form method="POST">
        <label>Name: <input type="text" name="name" required></label><br><br>
        <label>Position: <input type="text" name="position" required></label><br><br>
        <label>Department: <input type="text" name="department" required></label><br><br>
        <label>Salary: <input type="number" name="salary" step="0.01" required></label><br><br>
        <button type="submit">Add Employee</button>
    </form>
</body>
</html>
