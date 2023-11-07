var canvas = new fabric.Canvas("mycanvas")

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerObject = ""
var blockImageObject = ""

function playerUpdate() {
    fabric.Image.fromURL("th.jpeg", function (Img) {
        playerObject = Img;

        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    })
}
function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        blockImageObject = Img;

        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    })
}
window.addEventListener("keydown" , myKeyDown);

function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == "80"){
        console.log("p e shift pressionadas juntas");
        blockImageWidth = blockImageWidth + 10;
        blockImageHeight = blockImageHeight + 10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentheight").innerHTML = blockImageHeight;
    }
    if(e.shiftKey == true && keyPressed == "77"){
        console.log("m e shift pressionadas juntas");
        blockImageWidth = blockImageWidth - 10;
        blockImageHeight = blockImageHeight - 10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentheight").innerHTML = blockImageHeight;
    }
    if(keyPressed == "38")
    {
       up();
       console.log("cima");
    }
    if(keyPressed == "40")
    {
       down();
       console.log("baixo");
    }
    if(keyPressed == "37")
    {
       left();
       console.log("esquerda");
    }
     if(keyPressed == "39")
    {
       right();
       console.log("direita");
    }
    if(keyPressed == "87")
    {
       newImage("wall.jpg");
       console.log("w");
    }
    if(keyPressed == "71")
    {
       newImage("ground.png");
       console.log("g");
    }
    if(keyPressed == "76")
    {
       newImage("light_green.png");
       console.log("l");
    }
    if(keyPressed == "84")
    {
       newImage("trunk.jpg");
       console.log("t");
    }
    if(keyPressed == "82")
    {
       newImage("roof.jpg");
       console.log("r");
    }
    if(keyPressed == "89")
    {
       newImage("yellow_wall.png");
       console.log("y");
    }
    if(keyPressed == "68")
    {
       newImage("dark_green.png");
       console.log("d");
    }
    if(keyPressed == "85")
    {
       newImage("unique.png");
       console.log("u");
    }
    if(keyPressed == "67")
    {
       newImage("cloud.jpg");
       console.log("c");
    }
    
    
    }

