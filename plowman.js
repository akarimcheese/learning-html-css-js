var title = document.getElementById("title");
var start_button = document.getElementById("start_button");
var cloud1 = document.getElementById("cloud1");
var cloud2 = document.getElementById("cloud2");
var cloud3 = document.getElementById("cloud3");
var cloud4 = document.getElementById("cloud4");
var jim_head = document.getElementById("jim_head");
var jim = document.getElementById("jim");

function load() {
    title.style.marginTop = "50px";
    title.style.opacity = "1";
}

function start() {
    document.getElementById("body").style.backgroundColor = "rgb(100, 200, 250)";
    document.getElementById("stand").style.backgroundColor = "tan";
    document.getElementById("banner1").style.backgroundColor = "rgb(220, 220, 220)";
    document.getElementById("sign1").style.backgroundColor = "rgb(250, 100, 100)";
    document.getElementById("sign1").style.color = "white";
    document.getElementById("sign_year").style.color = "lightblue";
    document.getElementById("sign_name").style.color = "lightblue";
    
    jim_head.src = "normal_right.png";
    jim.style.marginLeft = "700px";
    
    title.style.marginTop = "25px";
    title.style.opacity = "0";
    start_button.style.opacity = "0";
    
    setTimeout( function() { start_button.parentNode.removeChild(start_button);
                               }, 1005);
    
    cloud1.style.marginTop = "50px";
    cloud1.style.marginLeft = "900px";
    cloud2.style.marginTop = "10px";
    cloud2.style.marginLeft = "550px";
    cloud3.style.marginTop = "30px";
    cloud3.style.marginLeft = "300px";
    cloud4.style.marginTop = "40px";
    cloud4.style.marginLeft = "50px";
    
}
