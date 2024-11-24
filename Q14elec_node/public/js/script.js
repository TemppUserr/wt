$(document).ready(function () {
    $('#billForm').on('submit', function (e) {
        const units = $('#units').val();
        if (units <= 0 || isNaN(units)) {
            e.preventDefault();
            alert('Please enter a valid number of units!');
        }
    });
});
