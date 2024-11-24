$(document).ready(function () {
    // Process Integer Array
    $("#integerForm").on("submit", function (e) {
        e.preventDefault();

        const input = $("#integerArray").val();
        if (!input.trim()) {
            alert("Please enter a valid array of integers!");
            return;
        }

        const array = input.split(",").map(Number);

        // Sorting the array
        const sortedArray = [...array].sort((a, b) => a - b);

        // Searching for a number (example: 5)
        const searchValue = 5;
        const searchResult = array.includes(searchValue)
            ? `The number ${searchValue} is found in the array.`
            : `The number ${searchValue} is not found in the array.`;

        // Display results
        $("#integerResults").html(`
            <p><strong>Original Array:</strong> [${array.join(", ")}]</p>
            <p><strong>Sorted Array:</strong> [${sortedArray.join(", ")}]</p>
            <p><strong>Search Result:</strong> ${searchResult}</p>
        `);
    });

    // Process Named Entity Array
    $("#entityForm").on("submit", function (e) {
        e.preventDefault();

        const input = $("#entityArray").val();
        if (!input.trim()) {
            alert("Please enter a valid array of names!");
            return;
        }

        const array = input.split(",").map(name => name.trim());

        // Sorting the array
        const sortedArray = [...array].sort();

        // Searching for a name (example: "Alice")
        const searchValue = "Alice";
        const searchResult = array.includes(searchValue)
            ? `The name "${searchValue}" is found in the array.`
            : `The name "${searchValue}" is not found in the array.`;

        // Display results
        $("#entityResults").html(`
            <p><strong>Original Array:</strong> [${array.join(", ")}]</p>
            <p><strong>Sorted Array:</strong> [${sortedArray.join(", ")}]</p>
            <p><strong>Search Result:</strong> ${searchResult}</p>
        `);
    });
});
