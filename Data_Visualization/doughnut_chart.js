new Chart(document.getElementById("doughnut_chart"), {
    type: "doughnut",
    data: {
        labels: ["Apple", "Banana", "Kiwi", "Blueberry", "Straberray", "Orange"],
        datasets: [{
            label: "boxes",
            backgroundColor: ["#DD1533", "#FFE135", "#7A960F", "#312581", "#FB2943", "#FFA500"],
            data: [10, 8, 3, 6, 12, 9],
        }]
    },
    options: {
        title: {
            display: true,
            text: "Supermarket Friut Storage (in boxes) - Chulan"
        }
    }
});

