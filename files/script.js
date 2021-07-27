imgArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
imgCheckArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
click = 1;
var score = 0;
var attempts = 0;
var count = 0;
function randImgGenerator() {
    while (check0()) {
        var index1 = Math.floor((Math.random() * 18));
        var index2 = Math.floor((Math.random() * 18));
        if (index1 != index2 && imgArr[index1] == 0 && imgArr[index2] == 0) {
            imgIndex = Math.floor((Math.random() * 9));
            if (imgCheckArr[imgIndex] == 0) {
                imgArr[index1] = imgArr[index2] = "files\\img" + `${imgIndex + 1}` + ".png";
                imgCheckArr[imgIndex] = 1;
            }
            else
                continue;
        }
        else
            continue;
    }
}

function check0() {
    var count0 = 0;
    for (var i = 0; i < 18; i++)
        if (imgArr[i] == 0)
            count0++;
    if (count0 == 0)
        return false;
    else
        return true
}
var id1, id2, imgId1, imgId2, btn1;
function imgChange1(obj) {

    if (click == 1) {
        id1 = Number(obj.id);
        imgId1 = 'i' + id1;
        document.getElementById(imgId1).src = imgArr[id1 - 1];
        btn1 = document.getElementById(String(id1));
        btn1.disabled = true;
        click = 2;
        obj.style.backgroundColor = "#42f55a";
    }
    else {
        id2 = Number(obj.id);
        imgId2 = 'i' + id2;
        document.getElementById(imgId2).src = imgArr[id2 - 1];
        btn1 = document.getElementById(String(id1));
        btn1.disabled = false;
        click = 1;
        obj.style.backgroundColor = "#42f55a";
        checkCorrect();
    }
}
function checkCorrect() {
    if (imgArr[id1 - 1] != imgArr[id2 - 1]) {
        setTimeout(function () {
            document.getElementById(imgId1).src = document.getElementById(imgId2).src = "files\\firstimg.png";
            document.getElementById(id1).style.backgroundColor = document.getElementById(id2).style.backgroundColor = "lightblue";
        }, 1000);
        score -= 2;
        attempts++;
        document.getElementById("score").innerHTML = "Score: " + score + "<br>Attempts:" + attempts;

    }
    else {

        setTimeout(function () {
            document.getElementById(id1).style.backgroundColor = document.getElementById(id2).style.backgroundColor = "#daf542";
        }, 100);
        document.getElementById(String(id1)).disabled = document.getElementById(String(id2)).disabled = true;
        score += 10;
        attempts++;
        document.getElementById("score").innerHTML = "Score: " + score + "<br>Attempts:" + attempts;
        count++;
        if (count == 9) {
            var play_again = document.getElementById("playagain");
            play_again.style.visibility = "visible";
        }
    }
}