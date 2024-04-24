function run() {
    // background height
    form();
    function form() {
        document.body.style.minHeight = window.innerHeight - 30 + "px";
    }
    
    const submit_button = document.getElementById("submit_button");
    const reset_button = document.getElementById("reset_button");
    const result_container = document.getElementById("result_container");
    let result = JSON.parse(localStorage.getItem("list")) || [];
    
    document.getElementById("Fahrenheit").addEventListener("click", () => {
        document.getElementById("unit").textContent = "°C";
    });
    document.getElementById("Celsius").addEventListener("click", () => {
        document.getElementById("unit").textContent = "°F";
    });

    // when submit button onclick, if the values are numbers and not null, 
    // store the numbers and result in storage, and display the result
    submit_button.addEventListener("click", () => {
        let fromUnit;
        if (document.getElementById("Fahrenheit").checked) {
            document.getElementById("Fahrenheit").value = "°F";
            fromUnit = "°C";
        }
        else if (document.getElementById("Celsius").checked) {
            document.getElementById("Celsius").value = "°C";
            fromUnit = "°F";
        }
        
        if(numbers.temperature.value != "" && isNumber(equation())) {
            result.push({
                Unit: numbers.radio_select.value,
                FromUnit: fromUnit,
                Temperature: numbers.temperature.value,
                // Example_b: numbers.B.value,
                Result: equation()
            });
            render();
            localStorage.setItem("list", JSON.stringify(result));
        } else {
            alert("Please enter a valid number");
        }

        function equation() {
            const num = Number(numbers.temperature.value);
            if (document.getElementById("Fahrenheit").checked) 
                return Math.round(((num * (9 / 5)) + 32) * 100)/100;
            else if (document.getElementById("Celsius").checked) 
                return Math.round(((num - 32) * (5 / 9)) * 100)/100;
        }

        function isNumber(num) {
            return typeof num == "number" && !isNaN(num);
        }
    });

    // when reset button onclick, clear storege and display contents
    reset_button.addEventListener("click", () => {
        localStorage.removeItem("list");
        document.getElementById("history").remove();
    });

    // display contents
    render();
    function render() {
        if (result.length >= 1) {
            const html = `
                <div id="history">
                    <div style="font-weight: bold; font-size: 20px">Result:</div>
                    <div>Unit: &nbsp&nbsp${result[result.length - 1].Unit}</div>
                    <div>From: &nbsp&nbsp${result[result.length - 1].Temperature + " " + result[result.length - 1].FromUnit}</div>
                    <div>To: &nbsp&nbsp${result[result.length - 1].Result + " " + result[result.length - 1].Unit}</div>
                </div>
            `;
            result_container.innerHTML = html;
            if (result[result.length - 1].Unit == "°F") 
                document.getElementById("Fahrenheit").checked = true;
            else 
                document.getElementById("Celsius").checked = true;
            numbers.temperature.value = result[result.length - 1].Temperature;
            // numbers.B.value = result[result.length - 1].Example_b;
        }
    }
}

document.addEventListener("DOMContentLoaded", run);
