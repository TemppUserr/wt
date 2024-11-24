$(document).ready(function () {
    $("#contactForm").on("submit", function (e) {
        e.preventDefault();

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();

        if (name && email && message) {
            alert("Thank you for contacting me!");
            $(this).trigger("reset"); // Reset the form
        } else {
            alert("Please fill out all fields!");
        }
    });
});
