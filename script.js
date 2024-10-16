var clicked = 0;

function changeText(id){
    clicked = clicked+1;

     if (clicked >= 3){
        console.log("in 3", id);
        document.getElementById(id).textContent = "I WILL SENT DONKOS HITMEN IF YOU DON'T STOP";
        document.getElementById(id).style.fontSize = "100px";
        document.getElementById(id).style.color = "red";
    } if (clicked >= 5){
        console.log("in 4", id);
        document.getElementById(id).textContent = "hitmen are sent to your location please stay at your location";
        document.getElementById(id).style.fontSize = "200px";
        document.getElementById(id).style.color = "black";
    } if (clicked <= 2) {
        console.log("in else", id);
        document.getElementById(id).textContent = "do not click on things";
    }
}
function changeImg(id){
    document.getElementById(id).src="img/hq720.jpg";
}
