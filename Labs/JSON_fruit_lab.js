var fruit = [
    {"name": "Apple", "quantity": 20, "color": "#DD1533"}, 
    {"name": "Orange", "quantity": 10, "color": "#FF5F00"}, 
    {"name": "Banana", "quantity": 15, "color": "#FFE135"}, 
    {"name": "Kiwi", "quantity": 5, "color": "#7A960F"}, 
    {"name": "Blueberry", "quantity": 5, "color": "#312581"},
    {"name": "Grapes", "quantity": 10, "color": "#421C52"}];

// var fruit = '[{"name": "Apple", "quantity": 20, "color": "#DD1533"}, {"name": "Orange", "quantity": 10, "color": "#FF5F00"}, {"name": "Banana","quantity": 15, "color": "#FFE135"}, {"name": "Kiwi", "quantity": 5, "color": "#7A960F"}, {"name": "Blueberry", "quantity": 5, "color": "#312581"}, {"name": "Grapes", "quantity": 10, "color": "#421C52"}]';

const barchart = () => {
    const board = document.getElementById("board");
    let barchart = board.getContext("2d");
    let barheight = 0, nextLine = 1;
    console.log(typeof(fruit));
    // let fruit_data = JSON.parse(fruit);
    // let fruit_data = JSON.stringify(fruit);

    barchart.beginPath();
    for (let i = 0; i < fruit.length; i++) {
        barchart.fillStyle = fruit[i].color;
        barchart.fillRect(0, 0 + barheight, 30*fruit[i].quantity, 90);
        barchart.font = "20px monospace";
        barchart.fillStyle = "black";
        barchart.fillText(fruit[i].quantity, 20, 30 * nextLine++);
        barchart.fillText(fruit[i].name, 20, 30 * nextLine++);
        nextLine++;
        barheight += 90;
    }
}

document.addEventListener("DOMContentLoaded", barchart);

