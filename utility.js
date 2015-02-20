var burgerCount = 0;
var width = 30;
var roundness = 5;
var marginLeft = 25;
var eyeHeight = 10;
var mouthMargin = 15;
var slide = 0;
var narration = document.getElementById("narration");
var red = 210;
var green = 180;
var blue = 140;

function burgerAnimation() {
    if (burgerCount == 0) {
        var goodbye = document.getElementById('TitleText');
        goodbye.parentNode.removeChild(goodbye);
        narration.innerHTML = "Now let's see how he likes it.";
    }
    var elm = document.getElementById('burger');
    var newone = elm.cloneNode(true);
    elm.id = "toBeDeleted";
    elm.parentNode.appendChild(newone);
    elm.style.webkitAnimationPlayState = 'running';
    burgerCount++;
    var tempCount = burgerCount;
    setTimeout(function() {elm.parentNode.removeChild(elm); 
        document.getElementById('burgerCounter').innerHTML = tempCount;
        switch(tempCount) {
            case 1:
                heartAnimation(35);
                happyBar(15, 20);
                narration.innerHTML = "He loves it! Give him another one.";
                break;
            case 2:
                heartAnimation(25);
                happyBar(5, 10);
                narration.innerHTML = "Not as good as the first one, but still tasty! Another!";
                break;
            case 3:
                heartAnimation(10);
                happyBar(6, 10);
                narration.innerHTML = "It's the same tasty burger, just... less satisfying. See if the next one is any better.";
                break;
            case 4:
                sweatAnimation(10);
                happyBar(17, 15);
                narration.innerHTML = "Oh, looks like he was full! Let's see what happens with another burger!"
                break;
            case 5:
                sweatAnimation(20);
                happyBar(23, 20);
                narration.innerHTML = "Maybe this is a little unhealthy... Another!"
                break;
            case 6:
                sweatAnimation(35);
                happyBar(45, 40);
                narration.innerHTML = "Look at his stomach! Let's do it again!"
                break;
            case 7:
                deathAnimation();
                happyBar(70, 65);
                narration.innerHTML = "That can't be good... again..?"
                break;
            case 8:
                deathAnimation();
                happyBar(100, 100);
                narration.innerHTML = "Okay, okay, last one."
                break;
            case 9:
                deathAnimation();
                happyBar(500, 800);
                narration.innerHTML = "Alright, we've tortured this guy enough. Let's go into utility."
                document.getElementById("burgerDeploy").onclick = "";
                document.getElementById("outOfOrder").style.webkitAnimationPlayState = "running";
                setTimeout(function() {utilityLesson()}, 3000);
                break;
            default:
                break; 
        }
    }, 2000);
}

function happyBar(level, result) {
    var elm = document.getElementById('happyBar');
    elm.style.marginTop = level + "px";
    setTimeout( function() {elm.style.marginTop = result + "px";}, 1000);
}

function heartAnimation(size) {
    var elm = document.getElementById('heart');
    var newone = elm.cloneNode(true);
    elm.id = "toBeDeleted";
    elm.parentNode.appendChild(newone);
    elm.style.height = size + "px";
    elm.style.webkitAnimationPlayState = 'running';
    setTimeout(function() {elm.parentNode.removeChild(elm);}, 2000);
}

function sweatAnimation(size) {
    biggerBelly();
    var elm = document.getElementById('teardrop');
    var newone = elm.cloneNode(true);
    elm.id = "toBeDeleted";
    elm.parentNode.appendChild(newone);
    elm.style.height = size + "px";
    elm.style.webkitAnimationPlayState = 'running';
    setTimeout(function() {elm.parentNode.removeChild(elm);}, 2000);
}

function deathAnimation() {
    biggerBelly();
    eyeHeight--;
    mouthMargin += 2;
    document.getElementById('eye1').style.height = eyeHeight + "px";
    document.getElementById('eye2').style.height = eyeHeight + "px";
    document.getElementById('pupil1').style.webkitAnimationPlayState = 'running';
    document.getElementById('pupil2').style.webkitAnimationPlayState = 'running';
    document.getElementById('mouth').style.marginTop = mouthMargin + "px";
}

function biggerBelly() {
    width += 4;
    marginLeft -= 2;
    roundness += 2;
    var elm = document.getElementById('torso');
    elm.style.width = width + "px"
    elm.style.marginLeft = marginLeft + "px";
    elm.style.borderRadius = roundness + "px";
}

function utilityLesson() {
    var elm = document.getElementById('aboveGround');
    var newPerson = document.getElementById("tsperson");
    var tanningSalon = document.getElementById("tanningSalon");
    elm.style.marginTop = -300 + "px";
    setTimeout(function() { elm.style.height = 292 + "px";
        while (elm.firstChild) {
            elm.removeChild(elm.firstChild); 
            elm.style.marginTop = 0 + "px";}
        newPerson.parentNode.removeChild(newPerson);
        elm.appendChild(newPerson);
        tanningSalon.parentNode.removeChild(tanningSalon);
        elm.appendChild(tanningSalon);
        }, 1000);

    var elm2 = document.getElementById('burgerDeploy');
    elm2.style.marginLeft = -500 + "px";
    setTimeout(function() {elm2.parentNode.removeChild(elm2);}, 1000);

    var elm3 = document.getElementById('outOfOrder');
    elm3.style.marginLeft = -500 + "px";
    setTimeout(function() {elm3.parentNode.removeChild(elm3);
        var nextButton = document.createElement("button");
        nextButton.innerHTML = "What's utility?";
        nextButton.id = "next";
        nextButton.onclick = function() {nextSlide(nextButton)};
        document.getElementById("ground").appendChild(nextButton);
        narration.style.marginTop = "20px"}, 1000);
    
}

function nextSlide(button) {
    slide++;

    switch(slide) {
        case 1:
            narration.innerHTML = "Utility is the arbritary measure of one's satisfaction or nonmaterial benefit from the consumption of a good or service";
            button.innerHTML = "Simpler Terms";
            break;
        case 2:
            narration.innerHTML = "I like food. I eat food. I feel good. Utility go up.";
            button.innerHTML = "By How Much?";
            break;
        case 3:
            narration.innerHTML = "Depends on how much it satisfied me. Like I said, utility is arbitrary, so I can make up numbers to measure my utility as long as what I prefer has a higher marginal utility than what I don't.";
            button.innerHTML = "Marginal?";
            break;
        case 4:
            narration.innerHTML = "Marginal utility means the change in a consumer's utility for each unit of good they consume. Goods can't have utility. Pizzas cannot be satisfied.";
            button.innerHTML = "Go on...";
            break;
        case 5:
            narration.innerHTML = "Assuming I have two separate stomachs for burgers and cake (both equally empty), if I prefer eating a single burger over a single slice of cake, then the burger raises my utility by 15 and the slice of cake raises my utility by 10";
            button.innerHTML = "I prefer dessert";
            break;
        case 6:
            narration.innerHTML = "Different people have different utilities.";
            button.innerHTML = "Touché";
            break;
        case 7:
            narration.innerHTML = "The more you consume a single good, the less utility you receive from it, just like we saw with our burger-eating friend.";
            button.innerHTML = "Another Example?";
            break;
        case 8:
            narration.innerHTML = "Our gal pal here really wants a tan, so let's satisfy her want! Let's assume her utility is 0";
            button.innerHTML = "Go Tan!";
            tannerMove(100);
            document.getElementById("tanningSalon").style.top = "0px";
            document.getElementById("point1").style.opacity = "1";
            break;
        case 9:
            narration.innerHTML = "Look at her smile!";
            button.innerHTML = "Explanation";
            tannerMove(450);
            setTimeout(function() {getTan();
                                  tannerSmile(12);}, 1000);
            break;
        case 10:
            narration.innerHTML = "Because our friend is satisfied, we're going to say the marginal utility of one tanning session is 10";
            button.innerHTML = "Again!";
            tannerMove(100);
            document.getElementById("line1Container").style.width = "54px";
            document.getElementById("point2").style.opacity = "1";
            break;
        case 11:
            narration.innerHTML = "Looking even better!";
            button.innerHTML = "Explanation";
            tannerMove(450);
            setTimeout(function() {getTan();
                                  tannerSmile(20);}, 1000);
            break;
        case 12:
            narration.innerHTML = "Our friend is even happier! However, that's not to say that she enjoyed the second trip better than the first. She is just happier overall. Let's say the marginal utility of the second session is 5";
            button.innerHTML = "Again!";
            tannerMove(100);
            document.getElementById("line1Container").style.width = "79px";
            document.getElementById("point3").style.opacity = "1";
            break;
        case 13:
            narration.innerHTML = "A little too crisp..";
            button.innerHTML = "Explanation";
            tannerMove(450);
            setTimeout(function() {getTan();
                                  tannerSmile(10);}, 1000);
            break;
        case 14:
            narration.innerHTML = "Looks like our friend's skin is getting a little to dark for comfort. Though she feels it looks better than how she looked before her first trip, her margial utility was only -13. That means her total utility is more than what she started with.";
            button.innerHTML = "Again?";
            tannerMove(100);
            document.getElementById("line2Container").style.width = "26px";
            document.getElementById("point4").style.opacity = "1";
            break;
        case 15:
            narration.innerHTML = "That can't be healthy.";
            button.innerHTML = "Explanation";
            tannerMove(450);
            setTimeout(function() {getTan();
                                  tannerSmile(0);}, 1000);
            break;
        case 16:
            narration.innerHTML = "Our friend has serious skin damage and she is not happy. The marginal utility of the last visit was -30 and her total utility is negative.";
            button.innerHTML = "Under Construction";
            tannerMove(100);
            document.getElementById("line2Container").style.width = "51px";
            break;
        default:
            break;
    }
}

function tannerMove(position) {
    document.getElementById("tsperson").style.marginLeft = position + "px";
}

function getTan() {
    red -= 10;
    green -= 10;
    blue -= 10;
    
    document.getElementById("tshead").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    
    document.getElementById("tsl_arm").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    
    document.getElementById("tsr_arm").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

function tannerSmile(amount) {
    document.getElementById("tsmouth").style.borderRadius = amount + "px";
}
