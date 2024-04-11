new Chart(document.getElementById("horizontal_bar_chart"), {
    type: "horizontalBar",
    data: {
        labels: ["India", "China", "United States", "Indonesia", "Pakistan"],
        datasets: [{
            label: "population",
            backgroundColor: ["#138808", "#EE1C25", "#0A3161", "#ff0000", "#00401A"],
            data: [1438510440, 1425334026, 341368972, 279246505, 244040793]
        }]
    },
    options: {
        legend: { 
            display: false
         },
        title: {
            display: true,
            text: "Top Five Pupulation Countries 2024 - Chulan"
        }
    }
});

