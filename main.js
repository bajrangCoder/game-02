var bg_au = new Audio("bg_au.mp3");
var gover = new Audio("out.ogg");
function start_game(){
        document.getElementById('gamearea').style.display = 'block';
        bg_au.play();
        document.getElementById('start_game_sec').style.display = 'none';
}
function moveleft(){
        let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        left -= 100;
        if(left >= 0){
                character.style.left = left + "px";
        }
}
function moveright() {
        let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        left += 100;
        if(left < 300){
                character.style.left = left + "px";
        }
}
document.addEventListener("keydown", event => {
        if (event.key === "ArrowLeft") {
                moveleft();
        }
        if (event.key === "ArrowRight") {
                moveright();
        }
});
var block = document.getElementById("block");
var counter = 0;
block.addEventListener('animationiteration', () => {
        var random = Math.floor(Math.random() * 3);
        left = random * 100;
        block.style.left = left + "px";
        counter = counter + 1 * 10;
        document.getElementById('p_score').innerText = counter;
});
setInterval(function(){
        var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
        
        if (characterLeft == blockLeft && blockTop < 500 && blockTop > 300) {
                bg_au.pause();
                gover.play();
                document.getElementById("gamearea").style.display = "none";
                document.getElementById("result_sec").style.display = "flex";
                document.getElementById("score").innerText = counter;
                
                block.style.animation = "none";
                block.style.display = "none";
                document.getElementById("character").style.top = "400px";
        }
},1);
document.getElementById("left").addEventListener("touchstart",moveleft);
document.getElementById("right").addEventListener("touchstart",moveright);
function play_again() {
        location.reload();
}