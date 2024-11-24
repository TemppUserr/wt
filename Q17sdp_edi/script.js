$(document).ready(function () {
    // Log the active tab's content to the console whenever it changes
    $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
        const activeTab = $(e.target).text();
        console.log("Active Tab: " + activeTab);
    });
});
