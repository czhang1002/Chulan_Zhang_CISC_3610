function run() {
    const duck = document.getElementById("duck");
    const horse = document.getElementById("horse");
    const owl = document.getElementById("owl");
    const sheep = document.getElementById("sheep");
    const whale = document.getElementById("whale");
    const wolf = document.getElementById("wolf");
    var x;

    duck.addEventListener("click", () => {
        x = new Audio('sound/duck.mp3');
        x.play();
    });
    horse.addEventListener("click", () => {
        x = new Audio('sound/horse.mp3');
        x.play();
    });
    owl.addEventListener("click", () => {
        x = new Audio('sound/owl.mp3');
        x.play();
    });
    sheep.addEventListener("click", () => {
        x = new Audio('sound/sheep.mp3');
        x.play();
    });
    whale.addEventListener("click", () => {
        x = new Audio('sound/whale.mp3');
        x.play();
    });
    wolf.addEventListener("click", () => {
        x = new Audio('sound/wolf.mp3');
        x.play();
    });
}

document.addEventListener("DOMContentLoaded", run);
