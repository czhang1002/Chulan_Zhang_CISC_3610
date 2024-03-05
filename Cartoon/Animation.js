const cartoon_drawing = function() {
    const canvas = document.getElementById("board");
    let cartoon = canvas.getContext("2d");

    function canvas_drawing() {
        // sky
        cartoon.fillStyle = "#8ae5ff";
        cartoon.fillRect(0, 0, 800, 500);

        // sun on the left top
        cartoon.beginPath();
        // sunshine
        cartoon.shadowColor = "#FDB813";
        cartoon.shadowBlur = 20;
        // sun
        cartoon.fillStyle = "#FDB813";
        cartoon.arc(70, 70, 40, 0, 2 * Math.PI);
        cartoon.fill();
        cartoon.shadowBlur = 0;

        // grassland
        cartoon.beginPath();
        cartoon.fillStyle = "#506d2e";
        cartoon.moveTo(0, 400);
        cartoon.lineTo(200, 410);
        cartoon.lineTo(600, 410);
        cartoon.lineTo(800, 400);
        cartoon.lineTo(800, 500);
        cartoon.lineTo(0, 500);
        cartoon.lineTo(0, 400);
        cartoon.fill();

        // mountain
        cartoon.beginPath();
        cartoon.fillStyle = "#023605";
        cartoon.moveTo(800, 400);
        cartoon.lineTo(600, 410);
        cartoon.lineTo(650, 300);
        cartoon.lineTo(680, 200);
        cartoon.lineTo(800, 150);
        cartoon.lineTo(800, 400);
        cartoon.fill();

        // big tree on the left
        cartoon.beginPath();
        // tree trunk
        cartoon.fillStyle = "#613B16";
        cartoon.fillRect(25, 365, 20, 40);
        // tree crown
        cartoon.fillStyle = "#206113";
        cartoon.moveTo(35, 190);
        cartoon.lineTo(-5, 370);
        cartoon.lineTo(75, 370);
        cartoon.lineTo(35, 190);
        cartoon.fill();

        // small tree on the left
        cartoon.beginPath();
        // tree trunk
        cartoon.fillStyle = "#613B16";
        cartoon.fillRect(80, 370, 15, 40);
        // tree crown
        cartoon.fillStyle = "#2f9000";
        cartoon.moveTo(85, 280);
        cartoon.lineTo(60, 375);
        cartoon.lineTo(115, 375);
        cartoon.lineTo(85, 280);
        cartoon.fill();

        // small river
        cartoon.beginPath();
        cartoon.strokeStyle = "#06a4d5";
        cartoon.lineWidth = 20;
        cartoon.moveTo(480, 411);
        cartoon.quadraticCurveTo(478, 440, 765, 450);
        cartoon.moveTo(760, 450);
        cartoon.quadraticCurveTo(870, 460, 345, 510);
        cartoon.stroke();

        // grasses next to the house
        cartoon.beginPath();
        cartoon.fillStyle = "#136d15";
        cartoon.moveTo(320, 340);
        cartoon.quadraticCurveTo(290, 340, 290, 360);
        cartoon.quadraticCurveTo(265, 355, 260, 380);
        cartoon.quadraticCurveTo(230, 380, 230, 410);
        cartoon.lineTo(320, 410);
        cartoon.lineTo(320, 340);
        cartoon.fill();
        cartoon.beginPath();
        cartoon.fillStyle = "#268b07";
        cartoon.moveTo(320, 370);
        cartoon.quadraticCurveTo(290, 365, 290, 390);
        cartoon.quadraticCurveTo(250, 380, 250, 410);
        cartoon.lineTo(320, 410);
        cartoon.lineTo(320, 370);
        cartoon.fill();

        // house roof
        cartoon.beginPath();
        cartoon.fillStyle = "#82490b";
        cartoon.moveTo(300, 330);
        cartoon.lineTo(370, 270);
        cartoon.quadraticCurveTo(380, 260, 390, 270);
        cartoon.lineTo(460, 330);
        cartoon.quadraticCurveTo(465, 345, 450, 340);
        cartoon.lineTo(390, 290);
        cartoon.quadraticCurveTo(380, 280, 370, 290);
        cartoon.lineTo(310, 340);
        cartoon.quadraticCurveTo(295, 345, 300, 330);
        cartoon.fill();

        // house in the middle
        cartoon.beginPath();
        cartoon.fillStyle = "#e0c397";
        cartoon.moveTo(310, 340);
        cartoon.lineTo(310, 410);
        cartoon.lineTo(450, 410);
        cartoon.lineTo(450, 340);
        cartoon.lineTo(390, 290);
        cartoon.quadraticCurveTo(380, 280, 370, 290);
        cartoon.lineTo(310, 340);
        cartoon.fill();

        // windows on the house
        cartoon.beginPath();
        cartoon.fillStyle = "#d8e4e9";
        cartoon.strokeStyle = "#000000";
        cartoon.lineWidth = 1;
        for (let i = 0; i < 4; i++) {
            let move = i * 30;
            cartoon.fillRect(325 + move, 340, 20, 20);    
            cartoon.strokeRect(325 + move, 340, 20, 20);    
        }
        cartoon.fillRect(325, 370, 20, 20);    
        cartoon.strokeRect(325, 370, 20, 20);    
        cartoon.fillRect(415, 370, 20, 20);    
        cartoon.strokeRect(415, 370, 20, 20);  

        // door on the house
        cartoon.beginPath();
        cartoon.fillStyle = "#a35a35";
        cartoon.moveTo(360, 380);
        cartoon.lineTo(360, 410);
        cartoon.lineTo(400, 410);
        cartoon.lineTo(400, 380);
        cartoon.quadraticCurveTo(380, 360, 360, 380);
        cartoon.fill();
        // door handle
        cartoon.fillStyle = "#e0c397";
        cartoon.beginPath();
        cartoon.arc(395, 395, 2, 0, 2 * Math.PI);
        cartoon.fill();
    }

    // clouds and birds
    const clouds = [], birds = [];
    could_bird_position();
    function could_bird_position() {
        let clouds_movement_right = 0, clouds_movement_up_down = 0;
        // store the clouds' random position in an array
        for (let i = 0; i < 10; i++) {
            clouds_movement_right += Math.random() * 200;
            clouds_movement_up_down = Math.random() * 50;
            clouds.push({
                x: 10 + clouds_movement_right,
                y: 70 + clouds_movement_up_down,
                x1: 20 + clouds_movement_right,
                y1: 60 + clouds_movement_up_down,
                x2: 40 + clouds_movement_right,
                y2: 60 + clouds_movement_up_down,
                x3: 50 + clouds_movement_right,
                y3: 70 + clouds_movement_up_down,
                x4: 40 + clouds_movement_right, 
                y4: 80 + clouds_movement_up_down,
                x5: 20 + clouds_movement_right,
                y5: 80 + clouds_movement_up_down
            });
        }

        let bird_movement_right = 0, bird_movement_up_down = 0;
        // store the clouds' random position in an array
        for (let i = 0; i < 8; i++) {
            bird_movement_right += Math.random() * 200 + 20;
            bird_movement_up_down = Math.random() * 100;
            birds.push({
                x: 0 + bird_movement_right,
                y: 150 + bird_movement_up_down,
                x1: 20 + bird_movement_right,
                y1: 150 + bird_movement_up_down,
                x2: 0 + bird_movement_right,
                y2: 140 + bird_movement_up_down,
                x3: 10 + bird_movement_right,
                y3: 150 + bird_movement_up_down,
                x4: 20 + bird_movement_right, 
                y4: 140 + bird_movement_up_down,
            });
        }
    }

    function animation() {
        // clouds animation
        cartoon.fillStyle = "#fff";
        for (let i = 0; i < 10; i++) {
            cartoon.beginPath();
            // when the cloud out of the canva, reset from the left
            if (clouds[i].x > 900) {
                clouds[i].x = -40; 
                clouds[i].x1 = -30;
                clouds[i].x2 = -10;
                clouds[i].x3 = 0;
                clouds[i].x4 = -10;
                clouds[i].x5 = -30;
            }
            // clouds shift one position to the right
            cartoon.arc(clouds[i].x++, clouds[i].y, 10, 0.5 * Math.PI, 1.5 * Math.PI);
            cartoon.arc(clouds[i].x1++, clouds[i].y1, 10, 1 * Math.PI, 2 * Math.PI);
            cartoon.arc(clouds[i].x2++, clouds[i].y2, 10, 1 * Math.PI, 2 * Math.PI);
            cartoon.arc(clouds[i].x3++, clouds[i].y3, 10, 1.5 * Math.PI, 0.5 * Math.PI);
            cartoon.arc(clouds[i].x4++, clouds[i].y4, 10, 0 * Math.PI, 1 * Math.PI);
            cartoon.arc(clouds[i].x5++, clouds[i].y5, 10, 0 * Math.PI, 1 * Math.PI);
            cartoon.fill(); 
        }

        // birds animation
        cartoon.strokeStyle = "black";
        cartoon.lineWidth = 3;
        for (let i = 0; i < 8; i++) {
            cartoon.beginPath();
            // when the bird out of the canva, reset from the left
            if (birds[i].x > 900) {
                birds[i].x = -20; 
                birds[i].x1 = 0;
                birds[i].x2 = -20;
                birds[i].x3 = -10;
                birds[i].x4 = 0;
            }

            // birds shift one position to the right
            cartoon.moveTo(birds[i].x++, birds[i].y);
            cartoon.lineTo(birds[i].x1++, birds[i].y1);
            cartoon.stroke();
            cartoon.moveTo(birds[i].x2++, birds[i].y2);
            cartoon.lineTo(birds[i].x3++, birds[i].y3);
            cartoon.lineTo(birds[i].x4++, birds[i].y4);
            cartoon.stroke();
        }
    }

    update();
    function update() {
        setInterval(() => {
            cartoon.fillStyle = "white";
            cartoon.fillRect(0, 0, 800, 500);
            canvas_drawing();
            animation(); 
        }, 50);
    }
}

document.addEventListener('DOMContentLoaded', cartoon_drawing);

