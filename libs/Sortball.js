var isMobile = detectMobile();
var width, height
var canvas, stage, update = true;
var supportsPassive = false, pressMove = false;

var containerMain = new createjs.Container()

var complete = false
var install_now;


var map = [
    [1, 12, 11, 11],
    [-1, 11, 12, 12],
    [-1, 12, 11, 1],
    [-1, 9, 1, 1],
    [-1, -1, -1, -1],
    [-1, 9, 9, 9]
]
// var map = [
//     [-1, 7, 3, 2],
//     [-1, 3, 7, 2],
//     [-1, 3, 9, 7],
//     [9, 2, 7, 3],
//     [-1, 2, 9, 9],
//     [-1, -1, -1, -1]
// ]
var listBottle = []
function changeOrientation(event) {
}
async function gameinit() {
    createjs.RotationPlugin.install();
    createjs.MotionGuidePlugin.install();
    setStage();
    loadImage();
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", tick);
}
//Event
function removeEvent() {
    stage.removeEventListener("stagemousedown", onMouseDown);
}
function setStage() {
    width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    if (width >= height || !isMobile) width = height / 1.7;

    radiusMask = width / 22

    canvas = document.getElementById("myCanvas");
    stage = new createjs.Stage(canvas);
    stage.mouseMoveOutside = true;
    canvas.height = height;
    canvas.width = width;
}
async function loadImage() {
    queue = new createjs.LoadQueue(false);
    var manifest = [
        { src: './images/full_bottle.png', id: 'full_bottle' },
    ];
    queue.on("complete", setAnimation);
    queue.loadManifest(manifest);
}
function setAnimation() {
    spriteSheet = new createjs.SpriteSheet({
        images: [queue.getResult("full_bottle")],
        framerate: 25,
        frames: [
            [1, 1, 400, 711, 0, 0, 0],
            [1, 714, 178, 517, 0, 0, 0],
            [403, 1, 163, 517, 0, 0, 0],
            [568, 1, 240, 318, 0, -186, -18],
            [181, 714, 224, 330, 0, -191, -29],
            [1, 1233, 210, 335, 0, -199, -48],
            [1, 1570, 251, 304, 0, -191, -10],
            [810, 1, 188, 315, 0, -215, -92],
            [568, 321, 255, 254, 0, 0, 0],
            [825, 318, 169, 275, 0, -231, -4],
            [181, 1046, 249, 169, 0, 0, 0],
            [213, 1217, 202, 290, 0, -258, -3],
            [254, 1509, 190, 293, 0, -220, -14],
            [417, 1217, 157, 288, 0, -237, -144],
            [446, 1507, 224, 275, 0, -253, -1],
            [407, 577, 301, 257, 0, 0, 0],
            [407, 836, 220, 202, 0, -206, -174],
            [710, 595, 245, 264, 0, -243, 0],
            [629, 861, 245, 252, 0, -194, -201],
            [876, 861, 124, 256, 0, -258, -202],
            [576, 1115, 232, 229, 0, -201, -186],
            [810, 1115, 43, 221, 0, -294, -264],
            [576, 1346, 200, 44, 0, 0, 0],
            [957, 595, 41, 184, 0, -294, -328],
            [576, 1392, 106, 111, 0, 0, 0],
            [254, 1804, 150, 64, 0, 0, 0],
            [432, 1040, 106, 111, 0, 0, 0],
            [684, 1392, 106, 111, 0, 0, 0],
            [672, 1505, 205, 179, 0, -212, -158],
            [672, 1686, 106, 111, 0, 0, 0],
            [780, 1686, 106, 111, 0, 0, 0],
            [855, 1119, 106, 111, 0, 0, 0],
            [855, 1232, 106, 111, 0, 0, 0],
            [963, 1119, 38, 145, 0, -294, -394],
            [446, 1784, 143, 57, 0, 0, 0],
            [432, 1153, 32, 62, 0, -294, -531],
            [963, 1266, 35, 104, 0, -294, -462],
            [591, 1799, 143, 57, 0, 0, 0],
            [403, 520, 45, 53, 0, -5, -1],
            [792, 1372, 106, 111, 0, 0, 0],
            [900, 1372, 106, 111, 0, 0, 0],
            [879, 1485, 106, 111, 0, 0, 0],
            [888, 1598, 106, 111, 0, 0, 0],
            [888, 1711, 106, 111, 0, 0, 0]
        ],

        "animations": {
            "ball_1": { "frames": [24] },
            "ball_2": { "frames": [30] },
            "ball_3": { "frames": [31] },
            "ball_4": { "frames": [32] },
            "ball_5": { "frames": [39] },
            "ball_6": { "frames": [40] },
            "ball_7": { "frames": [41] },
            "ball_8": { "frames": [42] },
            "ball_9": { "frames": [43] },
            "ball_10": { "frames": [26] },
            "ball_11": { "frames": [27] },
            "ball_12": { "frames": [29] },
            "bg": { "frames": [0] },
            "bottle4": { "frames": [1] },
            "bottle3": { "frames": [2] },
            "confetti": { "frames": [35, 36, 33, 23, 21, 19, 13, 7, 5, 4, 3, 6, 11, 14, 17, 9, 12, 28, 16, 20, 18] },
            "circle_decor": { "frames": [8] },
            "cup": { "frames": [10] },
            "decor": { "frames": [15] },
            "txt_wesome": { "frames": [22] },
            "btn_next": { "frames": [25] },
            "btn_install_now": { "frames": [34] },
            "btn_try_again": { "frames": [37] },
            "hand_tut": { "frames": [38] }
        },
    });
    setBackground()
    setMap()
    addEvent();
    // gameWin()
}
var bottleBase, ballBase
function setBackground() {
    var bg = new createjs.Sprite(spriteSheet, "bg");
    bg.scaleX = stage.canvas.width / bg.getBounds().width;
    bg.scaleY = stage.canvas.height / bg.getBounds().height;

    install_now = new createjs.Sprite(spriteSheet, "btn_install_now");
    install_now.scaleX = stage.canvas.width / 4.5 / install_now.getBounds().width;
    install_now.scaleY = stage.canvas.width / 4.5 / install_now.getBounds().width;
    install_now.x = (stage.canvas.width - install_now.getBounds().width * install_now.scaleX) / 2;
    install_now.y = stage.canvas.height - install_now.getBounds().height * install_now.scaleY * 2;

    stage.addChild(bg, install_now)
    var install_nowx = install_now.x,
        install_nowy = install_now.y,
        install_nowscale = stage.canvas.width / 4.5 / install_now.getBounds().width;
    createjs.Tween.get(install_now, { loop: true })
        .to(
            {
                scale: (stage.canvas.width / 5) / install_now.getBounds().width,
                x: (stage.canvas.width - ((stage.canvas.width / 5) / install_now.getBounds().width) * install_now.getBounds().width) / 2,
                y: install_nowy - (stage.canvas.width / 5 - stage.canvas.width / 8) / 10,
            },
            500,
            createjs.Ease.linear
        )
        .to({ scale: install_nowscale, x: install_nowx, y: install_nowy }, 500, createjs.Ease.linear);
    install_now.addEventListener("click", () => { getLinkInstall() }, false);

    var bottle = new createjs.Sprite(spriteSheet, "bottle3");
    bottle.scale = (stage.canvas.width / 7) / bottle.getBounds().width
    var widthBottle = bottle.getBounds().width * bottle.scale
    var defaultX = ((stage.canvas.width - (widthBottle * 3)) * 2 / 3) / 2
    var distanceBottle = ((stage.canvas.width - (widthBottle * 3)) / 3) / 2
    var plus = widthBottle + distanceBottle

    bottleBase = {
        bottle: bottle,
        width: bottle.getBounds().width * bottle.scale,
        height: bottle.getBounds().height * bottle.scale,
        scale: bottle.scale,
        startX: [defaultX, defaultX + plus, defaultX + plus * 2],
        startY: [stage.canvas.height / 4.2, stage.canvas.height / 1.7]
    }

    var ball = new createjs.Sprite(spriteSheet, convertColor(1));
    ball.scale = bottle.scale
    var heightBall = ball.getBounds().height * ball.scale
    var distanceBall = bottleBase.width / 2 - ball.getBounds().width * ball.scale / 2
    var dy1 = bottleBase.startY[0] + bottleBase.height * 0.98
    var dy2 = bottleBase.startY[1] + bottleBase.height * 0.98
    ballBase = {
        width: ball.getBounds().width * ball.scale,
        height: ball.getBounds().height * ball.scale,
        scale: ball.scale,
        startX: [bottleBase.startX[0] + distanceBall, bottleBase.startX[1] + distanceBall, bottleBase.startX[2] + distanceBall],
        startY1: [dy1 - heightBall * 4, dy1 - heightBall * 3, dy1 - heightBall * 2, dy1 - heightBall],
        startY2: [dy2 - heightBall * 4, dy2 - heightBall * 3, dy2 - heightBall * 2, dy2 - heightBall],
    }
}
function setMap() {
    for (let i = 0; i < map.length; i++) {
        const listColor = map[i];
        var bottleClone = bottleBase.bottle.clone()
        var listBall = []
        if (i <= 2) {
            bottleClone.x = bottleBase.startX[i]
            bottleClone.y = bottleBase.startY[0]
            for (let j = 0; j < listColor.length; j++) {
                const color = listColor[j];
                if (color >= 0) {
                    var ball = new createjs.Sprite(spriteSheet, convertColor(color));
                    ball.scale = ballBase.scale;
                    ball.x = ballBase.startX[i]
                    ball.y = ballBase.startY1[j]
                    stage.addChild(ball)
                    listBall.push(ball)
                }
            }
            listBottle.push({ listBall: listBall, status: true })
        } else {
            bottleClone.x = bottleBase.startX[i - 3]
            bottleClone.y = bottleBase.startY[1]
            for (let j = 0; j < listColor.length; j++) {
                const color = listColor[j];
                if (color >= 0) {
                    var ball = new createjs.Sprite(spriteSheet, convertColor(color));
                    ball.scale = ballBase.scale;
                    ball.x = ballBase.startX[i - 3]
                    ball.y = ballBase.startY2[j]
                    stage.addChild(ball)
                    listBall.push(ball)
                }
            }
            listBottle.push({ listBall: listBall, status: true })
        }
        stage.addChild(bottleClone)
    }
}
function tick(event) {
    if (update) {
        stage.update(event);
    }
}
function detectMobile() {
    try {
        var opts = Object.defineProperty({}, "passive", {
            get: function () {
                supportsPassive = true;
            },
        });
        window.addEventListener("testPassive", null, opts);
        window.removeEventListener("testPassive", null, opts);
    } catch (e) { }
    var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false;
    if (iOS) {
        return true;
    }
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1;
    if (isAndroid) {
        return true;
    }
    return false;
}
function convertColor(color) {
    return 'ball_' + color
}


function addEvent() {
    stage.addEventListener("stagemousedown", onMouseDown);
    // window.addEventListener('resize', reportWindowSize);
}
var listBottleA = [], listBottleB = [];
function onMouseDown(evt) {
    var location = currentMouse(evt);
    var indexChoose = checkClick(location)
    if (indexChoose != null) {
        if (listBottleA.length == listBottleB.length) {
            if (map[indexChoose].lastIndexOf(-1) != 3) {
                if (listBottle[indexChoose].status == true) {
                    listBottleA.push(indexChoose)
                    upBallChoose()
                }
            }
        } else {
            if (indexChoose != listBottleA[listBottleA.length - 1] && map[indexChoose].lastIndexOf(-1) >= 0) {
                if (listBottle[indexChoose].status == true) {
                    var oldColorArr = map[listBottleA[listBottleA.length - 1]]
                    var oldColor = oldColorArr[oldColorArr.lastIndexOf(-1) + 1]
                    var newColorArr = map[indexChoose]
                    var newColor = newColorArr[newColorArr.lastIndexOf(-1) + 1]
                    if (newColor == oldColor || newColorArr.lastIndexOf(-1) == 3) {
                        listBottleB.push(indexChoose)
                        moveBallChoose()
                    } else {
                        downBallChoose()
                    }
                }
            } else {
                downBallChoose()
            }
        }
    }
    pressMove = true;

}
function checkClick(location) {
    var x = null, y = null;
    if (location.x >= bottleBase.startX[0] && location.x <= bottleBase.startX[0] + bottleBase.width) x = 0
    else if (location.x >= bottleBase.startX[1] && location.x <= bottleBase.startX[1] + bottleBase.width) x = 1
    else if (location.x >= bottleBase.startX[2] && location.x <= bottleBase.startX[2] + bottleBase.width) x = 2
    if (location.y >= bottleBase.startY[0] && location.y <= bottleBase.startY[0] + bottleBase.height) y = 0
    else if (location.y >= bottleBase.startY[1] && location.y <= bottleBase.startY[1] + bottleBase.height) y = 1
    if (x != null && y != null) {
        var index = y == 0 ? x : x + 3
        return index
    }
    else return null
}
function currentMouse(evt) {
    return { x: evt.stageX, y: evt.stageY }
}
function upBallChoose() {
    var indexChoose = listBottleA[listBottleA.length - 1]
    var ball = listBottle[indexChoose].listBall[0]
    var y = indexChoose < 3 ? bottleBase.startY[0] - ballBase.height * 1.2 : bottleBase.startY[1] - ballBase.height * 1.2
    createjs.Tween.get(ball)
        .to({ y: y }, 200, createjs.Ease.linear)
}
function downBallChoose() {
    indexChoose = listBottleA[listBottleA.length - 1]
    listBottleA.pop();
    var ball = listBottle[indexChoose].listBall[0]
    var indexBall = 4 - listBottle[indexChoose].listBall.length
    var y = indexChoose < 3 ? ballBase.startY1[indexBall] : ballBase.startY2[indexBall]

    snd.play()
    createjs.Tween.get(ball)
        .to({ y: y }, 600, createjs.Ease.bounceOut)
}
function moveBallChoose() {
    let oldChoose = listBottleA[listBottleA.length - 1]
    let newChoose = listBottleB[listBottleB.length - 1]
    listBottle[oldChoose].status = false
    listBottle[newChoose].status = false
    let indexNew = map[newChoose].lastIndexOf(-1)

    convertMap(oldChoose, newChoose)

    let x0 = newChoose < 3 ? ballBase.startX[newChoose] : ballBase.startX[newChoose - 3]
    let y0 = newChoose < 3 ? bottleBase.startY[0] - ballBase.height * 1.2 : bottleBase.startY[1] - ballBase.height * 1.2
    let y1 = newChoose < 3 ? ballBase.startY1[indexNew] : ballBase.startY2[indexNew]
    var ball = listBottle[oldChoose].listBall[0]

    var target = listBottle[oldChoose].listBall.shift();
    listBottle[newChoose].listBall.unshift(target)
    listBottle[oldChoose].status = true

    createjs.Tween.get(ball)
        .to({ x: x0, y: y0 }, 200, createjs.Ease.linear)
        .wait(100)
        .call(() => {
            snd.play()
            createjs.Tween.get(ball)
                .to({ y: y1 }, 400, createjs.Ease.bounceOut)
                .call(() => {
                    listBottle[newChoose].status = true
                    if (checkCompleteItem(map[newChoose])) boottlePass(x0, y0 + ballBase.height * 1.2)
                })
        })

}
function convertMap(index1, index2) {
    let oldColorArr = cloneArray(map[index1])
    let newColorArr = cloneArray(map[index2])

    let color = oldColorArr[oldColorArr.lastIndexOf(-1) + 1]
    oldColorArr.splice(oldColorArr.lastIndexOf(-1) + 1, 1, -1)
    newColorArr.splice(newColorArr.lastIndexOf(-1), 1, color)

    map.splice(index1, 1, oldColorArr)
    map.splice(index2, 1, newColorArr)
}

function cloneArray(array) {
    var newarr = []
    array.forEach(element => { newarr.push(element) });
    return newarr
}
function checkWin() {
    win = 0
    for (let i = 0; i < map.length; i++) {
        const listColor = map[i];
        const color0 = listColor[0]
        let isWin = listColor.every(function (item) {
            return item == color0;
        });
        if (isWin) win++
    }
    if (win == 6) return true
    else return false
}
function checkCompleteItem(arr) {
    const color0 = arr[0]
    let isWin = arr.every(function (item) {
        return item == color0;
    });
    return isWin
}
function boottlePass(x, y) {
    var confetti = new createjs.Sprite(spriteSheet, 'confetti');
    confetti.scale = (stage.canvas.width / 25) / confetti.getBounds().width
    confetti.x = x - (confetti.getBounds().width * confetti.scale) * 8.5;
    confetti.y = y + bottleBase.height / 2 - (confetti.getBounds().height * confetti.scale) * 8;
    stage.addChild(confetti);
    confetti.on("animationend", handleComplete);
    function handleComplete() {
        stage.removeChild(this);
        confetti = null;
        complete = checkWin()

        console.log(complete);
        // gameWin()
    }
}


function gameWin() {
    removeEvent()
    stage.removeChild(install_now);
    var particle = new createjs.Shape();
    particle.graphics.f("#000000").dr(0, 0, stage.canvas.width, stage.canvas.height);
    particle.alpha = 0.85


    var cup = new createjs.Sprite(spriteSheet, "cup");
    cup.scale = (stage.canvas.width / 2) / cup.getBounds().width
    cup.x = (stage.canvas.width - cup.getBounds().width * cup.scale) / 2
    cup.y = stage.canvas.height / 6

    var circle_decor = new createjs.Sprite(spriteSheet, "circle_decor");
    circle_decor.scale = cup.scale
    circle_decor.x = (stage.canvas.width - circle_decor.getBounds().width * circle_decor.scale) / 2
    circle_decor.y = cup.y - cup.getBounds().height * cup.scale / 11

    var decor = new createjs.Sprite(spriteSheet, "decor");
    decor.scale = cup.scale
    decor.x = (stage.canvas.width - decor.getBounds().width * decor.scale) / 2
    decor.y = cup.y - cup.getBounds().height * cup.scale / 3

    var txt_wesome = new createjs.Sprite(spriteSheet, "txt_wesome");
    txt_wesome.scale = cup.scale * 0.7
    txt_wesome.x = (stage.canvas.width - txt_wesome.getBounds().width * txt_wesome.scale) / 2
    txt_wesome.y = cup.y + cup.getBounds().height * cup.scale * 1.4

    var btn_next = new createjs.Sprite(spriteSheet, "btn_next");
    btn_next.scale = cup.scale
    btn_next.x = (stage.canvas.width - btn_next.getBounds().width * btn_next.scale) / 2
    btn_next.y = txt_wesome.y + cup.getBounds().height * cup.scale * 0.9

    stage.addChild(particle, circle_decor, cup, decor, txt_wesome, btn_next)


    var btn_nextx = btn_next.x,
        btn_nexty = btn_next.y,
        btn_nextscale = cup.scale;
    createjs.Tween.get(btn_next, { loop: true })
        .to(
            {
                scale: cup.scale - 0.1,
                x: (stage.canvas.width - ((stage.canvas.width / 5) / btn_next.getBounds().width) * btn_next.getBounds().width) / 2,
                y: btn_nexty - (stage.canvas.width / 5 - stage.canvas.width / 8) / 10,
            },
            350,
            createjs.Ease.linear
        )
        .to({ scale: btn_nextscale, x: btn_nextx, y: btn_nexty }, 350, createjs.Ease.linear);
    btn_next.addEventListener("click", () => { getLinkInstall() }, false);

}

function getDistance(p1, p2) {
    var a = p1.x - p2.x;
    var b = p1.y - p2.y;
    return Math.sqrt(a * a + b * b);
}
var snd = new Audio('data:audio/wav;base64,UklGRkZsAABXQVZFZm10IBAAAAABAAIARKwAABCxAgAEABAATElTVBoAAABJTkZPSVNGVA4AAABMYXZmNTguNDUuMTAwAGRhdGEAbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAAkAAAAAAAAAAAAJAAkAAAAAAAAAAAAJAAkAAAAAAAAAAAAAAAAAAAAAAAkACQAAAAAAAAAAAAkACQAAAAAAAAAAAAkACQAAAAAACQAJAAkACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAAAAAAAAAAAAkACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAJAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQASABIACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAAAAAAAAAAAAAAAAAAAAAACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQASABIACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9//3/wAAAAAAAAAA9//3/wAAAAAAAAAA9//3/wAAAAAAAAAA9//3/wAAAAD3//f/9//3//f/9//3//f/AAAAAAAAAAAAAAAAAAAAAPf/9//3//f/AAAAAAAAAAAAAAAAAAAAAPf/9/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3//f/7v/u/+7/7v/3//f/7v/u/+7/7v/u/+7/5f/l/+X/5f/l/+X/3P/c/9z/3P/T/9P/0//T/9P/0//K/8r/yv/K/8r/yv/B/8H/yv/K/8r/yv/B/8H/wf/B/8H/wf/B/8H/wf/B/7j/uP+4/7j/wf/B/7j/uP/B/8H/wf/B/7j/uP+4/7j/uP+4/6//r//B/8H/wf/B/6//r//B/8H/uP+4/7j/uP+4/7j/uP+4/7j/uP+4/7j/uP+4/8H/wf/B/8H/wf/B/8H/wf+4/7j/uP+4/8H/wf/B/8H/wf/B/8H/wf/B/8H/wf/B/8r/yv/K/8r/yv/K/8r/yv/K/8r/yv/K/8r/yv/K/8r/0//T/9P/0//T/9P/0//T/9z/3P/l/+X/3P/c/9P/0//c/9z/5f/l/+7/7v/u/+7/5f/l/+7/7v/u/+7/7v/u/wAAAAD3//f/7v/u//f/9//3//f/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAJAAkACQAJAAkACQAJAAAAAAAJAAkAGwAbABIAEgAJAAkAEgASABsAGwAbABsAJAAkACQAJAAbABsAGwAbACQAJAA2ADYANgA2ADYANgAtAC0ALQAtADYANgA/AD8APwA/AD8APwA/AD8APwA/AD8APwBIAEgASABIAEgASABIAEgAUQBRAEgASABRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBaAFoAUQBRAFEAUQBRAFEASABIAFEAUQBaAFoAUQBRAFoAWgBaAFoAUQBRAFoAWgBaAFoASABIAFEAUQBRAFEAUQBRAFEAUQBRAFEASABIAFEAUQBRAFEAUQBRAEgASAA/AD8ASABIAFEAUQBIAEgASABIAD8APwA2ADYAPwA/AD8APwA/AD8ANgA2ADYANgAtAC0ANgA2ADYANgAtAC0AJAAkACQAJAAkACQAJAAkACQAJAAbABsAGwAbABsAGwASABIAEgASAAkACQAJAAkAEgASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9//3/+7/7v/3//f/7v/u/+X/5f/u/+7/3P/c/+X/5f/u/+7/3P/c/9z/3P/c/9z/0//T/9z/3P/c/9z/yv/K/8r/yv/B/8H/wf/B/8r/yv/B/8H/wf/B/8H/wf+v/6//uP+4/8H/wf+v/6//r/+v/6//r/+d/53/r/+v/7j/uP+m/6b/pv+m/53/nf+U/5T/nf+d/5T/lP+U/5T/lP+U/4v/i/+U/5T/nf+d/5T/lP+U/5T/lP+U/4L/gv+L/4v/lP+U/4v/i/+L/4v/i/+L/4v/i/+L/4v/gv+C/4v/i/+U/5T/i/+L/4v/i/+L/4v/gv+C/4v/i/+L/4v/ef95/3n/ef+C/4L/i/+L/4v/i/+U/5T/i/+L/4v/i/+U/5T/nf+d/5T/lP+d/53/lP+U/5T/lP+d/53/nf+d/53/nf+m/6b/pv+m/6//r/+4/7j/r/+v/7j/uP+4/7j/uP+4/8H/wf/B/8H/wf/B/9P/0//c/9z/0//T/9z/3P/c/9z/3P/c/+7/7v/l/+X/5f/l/+7/7v/3//f/AAAAAAAAAAD3//f/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAJAAkACQAAAAAAEgASABIAEgASABIAJAAkABsAGwAbABsALQAtAC0ALQA2ADYALQAtAC0ALQA2ADYAPwA/AD8APwBIAEgAPwA/AEgASABaAFoAWgBaAFoAWgBaAFoAUQBRAFEAUQBjAGMAYwBjAGwAbABsAGwAYwBjAGwAbAB1AHUAdQB1AH4AfgB+AH4AfgB+AIcAhwB+AH4AhwCHAJAAkAB+AH4AfgB+AIcAhwCHAIcAkACQAJAAkACHAIcAhwCHAJAAkACZAJkAogCiAJAAkACHAIcAkACQAIcAhwCZAJkAogCiAJAAkACQAJAAmQCZAJAAkACQAJAAkACQAIcAhwCHAIcAfgB+AH4AfgB+AH4AfgB+AH4AfgB+AH4AdQB1AHUAdQBsAGwAYwBjAGwAbABsAGwAYwBjAFoAWgBaAFoAUQBRAFoAWgBaAFoASABIAD8APwBIAEgASABIAD8APwA/AD8ANgA2AC0ALQAkACQAJAAkAC0ALQAkACQAEgASABIAEgAJAAkAAAAAAAkACQAAAAAAAAAAAAAAAAAAAAAA9//3/wAAAAD3//f/7v/u//f/9//l/+X/3P/c/9z/3P/T/9P/yv/K/8H/wf+4/7j/yv/K/8H/wf+m/6b/r/+v/6b/pv+U/5T/pv+m/6b/pv+U/5T/nf+d/4v/i/95/3n/gv+C/3n/ef95/3n/gv+C/3D/cP9w/3D/cP9w/17/Xv9w/3D/cP9w/17/Xv9n/2f/Xv9e/0z/TP9e/17/TP9M/zr/Ov9M/0z/TP9M/0P/Q/9M/0z/Ov86/zH/Mf9D/0P/Ov86/zr/Ov9D/0P/KP8o/zr/Ov86/zr/H/8f/zH/Mf8o/yj/H/8f/zr/Ov8x/zH/KP8o/zH/Mf8o/yj/H/8f/yj/KP8f/x//KP8o/zH/Mf8x/zH/Q/9D/zr/Ov8x/zH/Q/9D/zr/Ov8x/zH/TP9M/0P/Q/9D/0P/Vf9V/0z/TP9D/0P/Xv9e/17/Xv9w/3D/cP9w/2f/Z/9w/3D/ef95/3n/ef+C/4L/gv+C/4v/i/+d/53/nf+d/53/nf+m/6b/nf+d/53/nf+v/6//uP+4/8H/wf/K/8r/yv/K/8r/yv/T/9P/3P/c/+7/7v/3//f/9//3/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIAEgAbABsAGwAbAC0ALQA2ADYALQAtADYANgBIAEgAPwA/AEgASABRAFEAWgBaAGwAbABsAGwAbABsAHUAdQB1AHUAhwCHAJAAkACQAJAAogCiAKIAogCQAJAAqwCrALQAtACrAKsAxgDGAMYAxgC9AL0AzwDPAMYAxgDPAM8A4QDhAM8AzwDPAM8A2ADYAM8AzwDqAOoA8wDzAOoA6gD8APwA/AD8AOoA6gD8APwA8wDzAOoA6gAFAQUB/AD8APwA/AAFAQUB/AD8AAUBBQEOAQ4B/AD8AA4BDgEOAQ4B/AD8AAUBBQEFAQUB8wDzAA4BDgEOAQ4B8wDzAPwA/ADzAPMA6gDqAPwA/ADzAPMA6gDqAOoA6gDhAOEA2ADYANgA2ADPAM8A2ADYAM8AzwC9AL0AvQC9AL0AvQCrAKsAtAC0AKsAqwCZAJkAkACQAIcAhwB+AH4AfgB+AHUAdQBsAGwAbABsAGMAYwBaAFoAUQBRAD8APwA/AD8ANgA2ABsAGwAkACQAGwAbAAkACQAAAAAAAAAAAO7/7v/u/+7/7v/u/+X/5f/l/+X/3P/c/9P/0//B/8H/r/+v/6b/pv+m/6b/lP+U/5T/lP+L/4v/ef95/3n/ef95/3n/Z/9n/17/Xv9M/0z/Q/9D/0P/Q/8x/zH/Mf8x/zH/Mf8f/x//Fv8W/w3/Df8E/wT/+/77/vL+8v7p/un+6f7p/tf+1/7O/s7+zv7O/s7+zv7F/sX+vP68/rP+s/6z/rP+qv6q/qr+qv6q/qr+mP6Y/pj+mP6h/qH+mP6Y/pj+mP6P/o/+j/6P/o/+j/6P/o/+hv6G/n3+ff59/n3+hv6G/ob+hv59/n3+hv6G/n3+ff59/n3+j/6P/ob+hv59/n3+j/6P/o/+j/6Y/pj+mP6Y/pj+mP6Y/pj+mP6Y/qH+of6q/qr+qv6q/rP+s/6z/rP+s/6z/sX+xf7O/s7+zv7O/tf+1/7g/uD+4P7g/vL+8v7y/vL+8v7y/gT/BP8N/w3/Fv8W/yj/KP8x/zH/Q/9D/0z/TP9M/0z/Xv9e/17/Xv9n/2f/gv+C/4L/gv+U/5T/nf+d/53/nf+v/6//wf/B/8H/wf/c/9z/5f/l/+X/5f8AAAAAAAAAAAAAAAAbABsAJAAkAC0ALQA/AD8APwA/AEgASABRAFEAWgBaAHUAdQCHAIcAkACQAKsAqwCiAKIAogCiAL0AvQC9AL0AvQC9ANgA2ADYANgA6gDqAPwA/AAFAQUBDgEOARcBFwEgASABMgEyATIBMgE7ATsBVgFWAVYBVgFfAV8BcQFxAWgBaAFoAWgBegF6AYMBgwGMAYwBngGeAZ4BngGnAacBsAGwAbABsAGwAbABuQG5AcIBwgHLAcsB1AHUAd0B3QHdAd0B3QHdAd0B3QHdAd0B3QHdAd0B3QHvAe8B7wHvAeYB5gH4AfgB7wHvAeYB5gHvAe8B7wHvAd0B3QHmAeYB5gHmAd0B3QHdAd0B1AHUAcsBywHLAcsBwgHCAcIBwgHCAcIBsAGwAbABsAGwAbABlQGVAZUBlQGMAYwBegF6AXoBegFxAXEBXwFfAVYBVgFNAU0BOwE7ATIBMgEgASABIAEgARcBFwEFAQUB/AD8AOoA6gDYANgAxgDGAL0AvQCiAKIAmQCZAJAAkAB+AH4AYwBjAGMAYwBRAFEAPwA/AD8APwAkACQACQAJAAAAAAD3//f/5f/l/+X/5f/K/8r/uP+4/6//r/+U/5T/lP+U/3n/ef9n/2f/Z/9n/0z/TP8x/zH/Mf8x/xb/Fv8E/wT/+/77/uD+4P7O/s7+zv7O/rz+vP6q/qr+qv6q/o/+j/6G/ob+ff59/mL+Yv5Z/ln+R/5H/jX+Nf4+/j7+Nf41/hr+Gv4a/hr+CP4I/vb99v32/fb97f3t/dv92/3S/dL9yf3J/cD9wP23/bf9t/23/a79rv2u/a79pf2l/Zz9nP2c/Zz9iv2K/YH9gf2B/YH9b/1v/Xj9eP2B/YH9b/1v/Xj9eP14/Xj9b/1v/Xj9eP2B/YH9b/1v/Xj9eP2B/YH9b/1v/YH9gf2B/YH9gf2B/Yr9iv2K/Yr9k/2T/a79rv2l/aX9rv2u/cn9yf3A/cD90v3S/eT95P3b/dv97f3t/f/9//3//f/9Gv4a/iz+LP4s/iz+Pv4+/kf+R/5Z/ln+a/5r/nT+dP6G/ob+of6h/qr+qv7F/sX+1/7X/uD+4P77/vv+Df8N/w3/Df8o/yj/TP9M/1X/Vf9n/2f/gv+C/5T/lP+v/6//wf/B/9P/0//u/+7/9//3/wAAAAAbABsALQAtAD8APwBRAFEAYwBjAH4AfgCZAJkAqwCrAMYAxgDhAOEA8wDzAAUBBQEgASABMgEyAU0BTQFoAWgBegF6AYMBgwGVAZUBpwGnAcIBwgHUAdQB5gHmAQECAQITAhMCHAIcAjcCNwJAAkACSQJJAmQCZAJ/An8CiAKIApoCmgKsAqwCrAKsAr4CvgLQAtAC2QLZAuIC4gL0AvQC/QL9Av0C/QIPAw8DGAMYAyEDIQMqAyoDMwMzAzMDMwMzAzMDPAM8AzwDPAM8AzwDRQNFA04DTgNOA04DTgNOA1cDVwNXA1cDTgNOA1cDVwNXA1cDRQNFA0UDRQM8AzwDKgMqAzMDMwMqAyoDIQMhAyEDIQMYAxgDBgMGAwYDBgP0AvQC6wLrAuIC4gLHAscCvgK+ArUCtQKaApoCmgKaApECkQJtAm0CZAJkAlsCWwI3AjcCLgIuAiUCJQIBAgEC7wHvAdQB1AG5AbkBsAGwAYwBjAF6AXoBaAFoAUQBRAEyATIBIAEgAfMA8wDqAOoA2ADYAKsAqwCZAJkAhwCHAFEAUQBIAEgALQAtAAAAAAAAAAAA5f/l/8H/wf+v/6//lP+U/3n/ef9V/1X/KP8o/xb/Fv8E/wT/zv7O/sX+xf6z/rP+ff59/nT+dP5i/mL+LP4s/hr+Gv4I/gj+5P3k/cn9yf2u/a79k/2T/YH9gf1m/Wb9VP1U/UL9Qv0e/R79A/0D/QP9A/3W/Nb8xPzE/Lv8u/yX/Jf8jvyO/IX8hfxq/Gr8WPxY/Eb8Rvw9/D38K/wr/Bn8GfwZ/Bn8B/wH/PX79fvs++z72vva++P74/vR+9H70fvR+9r72vu/+7/7v/u/+7/7v/ut+637v/u/+7b7tvut+637v/u/+637rfu2+7b7tvu2+7b7tvva+9r72vva+9r72vvj++P72vva+/X79fv++/77B/wH/Cv8K/wZ/Bn8RvxG/Fj8WPw9/D38c/xz/IX8hfyF/IX8u/y7/LL8svzW/Nb88fzx/Oj86Pwn/Sf9MP0w/TD9MP1m/Wb9iv2K/aX9pf3A/cD97f3t/Qj+CP4I/gj+Nf41/mv+a/59/n3+mP6Y/qr+qv7p/un+Fv8W/xb/Fv9D/0P/Z/9n/4L/gv+4/7j/3P/c//f/9/8SABIAPwA/AFoAWgBsAGwAmQCZAL0AvQDqAOoAIAEgAUQBRAFfAV8BcQFxAYwBjAG5AbkB1AHUARMCEwJJAkkCUgJSAogCiAKjAqMCvgK+AuIC4gLiAuICMwMzA1cDVwNOA04DlgOWA6gDqAOxA7ED5wPnA/AD8AMUBBQELwQvBFwEXASSBJIEgASABKQEpATRBNEE0QTRBOME4wTaBNoEIgUiBU8FTwUiBSIFTwVPBVgFWAUrBSsFagVqBXMFcwVzBXMFjgWOBXwFfAWyBbIFxAXEBY4FjgWpBakFoAWgBYUFhQWpBakFuwW7BbsFuwWgBaAFlwWXBaAFoAWgBaAFqQWpBYUFhQVzBXMFhQWFBWoFagVPBU8FPQU9BT0FPQU9BT0FGQUZBf4E/gT1BPUE0QTRBLYEtgSSBJIEdwR3BGUEZQRTBFMESgRKBCYEJgQLBAsE8APwA7EDsQN7A3sDaQNpA2ADYANFA0UDMwMzAyEDIQPHAscCiAKIAogCiAJJAkkCJQIlAi4CLgIcAhwCAQIBAoMBgwEgASABVgFWASkBKQHGAMYAtAC0AGMAYwBjAGMAdQB1AAAAAACd/53/cP9w/zr/Ov9D/0P/Xv9e/x//H/+q/qr+ff59/mv+a/41/jX+9v32/aX9pf2c/Zz92/3b/Zz9nP0M/Qz98fzx/MT8xPxz/HP8WPxY/DT8NPz++/77/vv++/77/vub+5v7Hfsd+xT7FPsm+yb7AvsC+/n6+frM+sz6jfqN+o36jfpF+kX6D/oP+jz6PPr9+f35tfm1+f35/fkY+hj6vvm++Tf5N/n4+Pj4UvlS+ZH5kfl2+Xb5UvlS+QH5Afl6+Hr4O/g7+Hr4evi5+Ln4y/jL+Ob45vjU+NT4jPiM+F/4X/gp+Cn4DvgO+E34TfiM+Iz43fjd+O/47/i5+Ln41PjU+Pj4+Pi5+Ln4y/jL+Bz5HPlS+VL5dvl2+W35bflt+W35QPlA+SX5Jfms+az5GPoY+ir6Kvo8+jz6/fn9+bX5tfkG+gb6e/p7+tX61fom+yb7OPs4+wv7C/sL+wv7XPtc+6T7pPvR+9H7NPw0/Jf8l/yX/Jf8hfyF/Nb81vxv/W/9gf2B/Qz9DP0n/Sf9I/4j/un+6f6Y/pj+LP4s/mv+a/59/n3+vP68/sr/yv8JAAkAlP+U/4v/i/8AAAAAvQC9ADsBOwHqAOoAFwEXAdQB1AEBAgECLgIuAr4CvgIGAwYDTgNOA/AD8AMdBB0E3gPeAx0EHQTsBOwEagVqBSsFKwU0BTQF3wXfBTAGMAbxBfEF+gX6BYoGigYRBxEHNQc1B48HjwcxCDEIVQhVCOkH6Qe8B7wHQwhDCBIJEgmHCYcJzwnPCTIKMgoFCgUKkAmQCfMJ8wlWClYKVgpWCuYK5gpSC1ILAQsBCwELAQslCyULAQsBCyULJQtkC2QLLgsuC8sKywrLCssKdgt2C8cLxwtSC1ILEwsTC1ILUguIC4gLkQuRCzcLNwslCyULvgu+C+IL4gtJC0kLUgtSC+sL6wvHC8cLAQsBC7AKsArLCssKjAqMCg4KDgrGCcYJxgnGCQUKBQq0CbQJcAhwCOAH4AeLCIsI3AjcCJ0InQh5CHkIcAhwCJQIlAimCKYIXgheCOAH4AeGB4YHHwgfCGMJYwnPCc8JxgnGCZAJkAlwCHAIoQehB4YHhgeTBpMGsgWyBTkGOQYIBwgHPgc+B3gGeAbeA94DhwCHAAT/BP+m/6b/AAAAAOD+4P5r/mv+Q/9D//v++/5m/Wb9GfwZ/B37HfsY+hj6x/nH+Yn7ifu8/rz+SABIADH/Mf94/Xj9fPx8/E/8T/z1+/X7gPuA+0b8RvxP/E/8Ifoh+v35/fki/CL8FPsU++X25fYQ8xDzdvB28N3v3e8P8Q/xzPHM8TPxM/El8CXw1O/U77DvsO9e7V7tL+kv6Z7mnubn6Ofo6u7q7lzyXPKx8bHxuvG68efx5/EK8Arwxu7G7iDvIO8q8SrxbfBt8CbpJukA7gDuRwdHB08OTw6k8qTyIuEi4dPt0+2Q95D39+337QziDOLI4MjgJOUk5STlJOWB4oHiUONQ487jzuMF3QXd3cvdy9m62bo1vzW/KdQp1GLjYuMB8AHwSvtK+zPxM/Ho2OjYKs0qzZjRmNEa4xrjof6h/qsSqxKlGKUYoRmhGTcUNxSPB48HAgQCBMsTyxMQKRApXDFcMfwt/C0HKQcpdx93Hw8MDwwb9xv3l+qX6kHpQekg7yDv8uzy7HHUcdSZr5mv0ZjRmIqaiprzpvOmzq3OrW+sb6z/o/+js5KzkquCq4IihyKHL6EvoSTBJMF+3H7ceOt467frt+vu7e7t6f7p/oIRghE1GTUZEhsSG+ce5x5uKG4oFTMVM+gy6DJqKWop2SbZJoQwhDDSPNI8oESgRNRJ1ElMUExQrleuV5Ngk2DzbPNsJXcld7F4sXi1d7V3tnm2efR39Hdyb3JvPWg9aMxmzGaIZYhl1V3VXUxQTFBFQkVCjDeMN/Aw8DBWLlYugy6DLpIxkjFkOGQ4vT+9P6RDpEMRRhFG/Ur9SpVSlVL8WvxaVWJVYrpmumY0aDRoxGjEaM1ozWhyZnJmcGJwYtdh12GfZp9mQG5Abnt4e3j/f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f5l+mX4acxpzll2WXUdGR0ZLM0szoCCgIJUKlQqy87LzSd5J3sXIxchAsUCxS5pLmnOHc4cAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIBzkHOQb6Nvo/26/brL1MvUOOk46Q32DfbQAtACyxPLE3QidCIkLSQt7DrsOp9Ln0sJWgla2mfaZxN3E3f/f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9/g3aDdhRnFGd2XHZckVORU+tK60riQeJBbDZsNqApoCkGHgYe2BLYEoYHhgfJ/cn9ivSK9Lrouui82rzao8yjzPa+9r4Yshiyuae5p/Wh9aGWoJagzKDMoKShpKHXpNeklqmWqSiuKK45tTm1KMAowFbLVssY1hjWYuNi43vxe/Gg/KD8IgUiBTwMPAwXExcT1BzUHK0orSgiMiIyVzlXOQpBCkE/SD9Ik06TTolViVUKXApcEWERYahmqGbKa8prbGxsbORp5Gn6aPpo6GjoaAFlAWXVXdVdYlhiWFxVXFVeUF5Qj0aPRoQ5hDkNLA0sbh9uHzcUNxTqCeoJTP9M/+307fR57Xnt3uje6LPjs+Na3Frcg9SD1OfN583gyODIAsUCxavBq8Fdvl2+y7nLubqyurKyq7Krvqi+qKenp6cVoxWjY51jncadxp1ipGKkIqsiqzavNq9XsleyKLcot7O/s79aylrKwdLB0mrYath733vfjuqO6uH34feNA40DZAtkC7MQsxDeFd4VaBxoHMIlwiU4MTgx2jraOmRBZEFISEhI3FDcUBZZFlkeYB5gM2YzZjFrMWvwb/BvfnV+dbJ6snqdfZ19i32LfYp7inu6eLp45XTldDxvPG+AZ4Bnv16/XoVWhVYaTxpPa0ZrRvo7+jvsMewx7CjsKL8fvx/IFsgWWA5YDncEdwT4+Pj4Ce4J7objhuOS15LXaMtoy6/Ar8Astiy2NKs0q1yhXKG/mL+Y1pDWkJSKlIqxhbGFR4BHgACAAIAAgACAAIAAgACAAIAAgACAAIAAgIuBi4GEhYSFF4wXjF6TXpNcmFyY95z3nMCjwKObqpuqq6+rr121XbUivSK9pMWkxVzOXM6k16TX7ODs4K3prekC8gLy+fr5+isFKwUeDx4PiRaJFrkcuRzhJOEk/C38Lao0qjTiOOI4wDzAPNg/2D9JQUlBTkJOQhRDFEMPQg9Coj+iP0w+TD5nPmc+WT1ZPd453jm9Nr02JDYkNh81HzUCMQIxzivOKwsoCygpJSklZiFmIc8bzxu6FboVYhBiEHUJdQl5/3n/ffV99cHtwe0B5wHnyODI4Pva+9pb1VvVxdHF0W/Qb9BBzkHOlcuVyxPME8xzz3PPuNK40m3VbdW72LvYIN0g3YriiuJg6GDoyu3K7dHy0fJf+F/4s/6z/kYFRgX9C/0LTRNNE7gauBo5ITkhiCaIJlkrWSufMJ8w2DbYNmY8ZjzGP8Y/YEJgQjVGNUYBSgFKFEwUTLZMtkwmTCZME0oTSqFGoUb0QfRBijyKPAE4ATjpNOk0AjECMa4qrirgIuAiLRstG7UUtRQMDwwPuAi4CJ4BngEL+wv7YvVi9X/wf/Bm62brEuUS5b7evt722fbZudS51ITNhM1hxmHGfsF+wYG+gb4mvCa8TblNuZi2mLbAtcC1ULZQtq+3r7eRupG6373fvTHAMcDvwu/CZsdmx/TM9Mwb0xvTb9lv2eLe4t5H40fjf+d/5/Ls8uxz83PzjPiM+Bn8GfwOAQ4BVQhVCMkPyQ8mFiYWzxvPG64hriFKKEoopy6nLho0GjR7OXs5zj3OPVo/Wj/PP88/KkIqQqVFpUXKR8pHNkg2SItHi0e3RbdFAkMCQ4NAg0B5Pnk+DDwMPGQ4ZDiKM4ozlS6VLhErESv+KP4odiZ2JiMiIyI7HDscuhW6FYEPgQ/GCcYJZQRlBPL+8v6D+IP4RfFF8QPrA+to5mjm3+Hf4eHc4dxh2GHYjNSM1OTQ5NA4zjjOKs0qzWTMZMwpyynLF8sXy+LM4swQzxDPLNEs0b3TvdNX1lfWxNjE2CjbKNun3afdfOF84UDnQOd97H3sg++D7ybyJvLO9c71/fn9+e397f2eAZ4BTwVPBcEIwQjZC9kLAw8DD0gSSBLrFOsUEBcQF0cZRxlaG1obuRy5HHEccRyCGoIagRiBGDQXNBe6FboVlROVEzoROhEeDx4PZQ1lDS4LLgvXB9cHbgRuBJUBlQEf/x//xPzE/En5SflL9Ev0AfAB8DHtMe316fXp2OXY5XPhc+G93L3cl9iX2FvVW9Xy0fLRts62zrXMtczqyurKDckNyYbIhsgxyTHJr8mvyRvKG8oyyzLL2czZzOPO485r0WvRaNRo1JvXm9fF2sXa1N3U3SLhIuHu5O7kFOkU6V7tXu0U8hTybPds9/r8+vyIAogCcAhwCLsOuw4hFSEVNhs2G4EhgSFcKFwoei56LqkyqTJ5NXk1CjgKODQ7NDvlPuU+SUFJQVJBUkG5QLlAnkCeQCBAIEBaP1o/Xj5ePgw8DDysOKw4nTWdNegy6DIGMAYw0yzTLP4o/igJJAkkMx4zHtIY0hh/FH8UIxAjEN0K3QraBNoEhv6G/oz4jPig86Dzz+7P7pvpm+kS5RLll+GX4bXetd6i3KLcxdrF2qnYqdhl12XXXNdc15LXktet163X/tf+1zDZMNmd253b+N343QbfBt/V39Xf8eHx4UjlSOXM6Mzo5Ovk6+ru6u538nfyTPZM9gb6Bvoa/hr+dgJ2AhEHEQdFDEUM7hHuEeMW4xb3Gvca5x7nHmIiYiJaJFokpyWnJcMnwyffKd8pnCqcKooqiip4KngqriquKhorGiuBKoEqQShBKBMmEya9JL0kziLOIiIgIiC+Hb4dURtRG0sYSxjQFNAUxRDFEA8MDwzJBskGlQGVAQz9DP25+Ln4S/RL9MLvwu+76rvqdeV15YXhheE83zzfz9zP3IrZitly1nLWntSe1BfUF9TY09jTmdOZ08/Tz9NN1E3UntSe1JrVmtU02DTYedt524zdjN2a3preZeBl4D7jPuNE5kTmFOkU6dLr0uvG7sbuL/Iv8s71zvV2+Xb5CP4I/ioDKgN0B3QHZAtkC8APwA9fE18TlhWWFZcXlxdVGlUarB2sHakgqSCPIo8iyiPKI+ok6iSDJYMlTSVNJZkkmSSCI4Ij5CHkISIgIiD5HvkejR6NHmQdZB3KGsoaHhgeGAsWCxbUE9QTzhDOEPAM8AxVCFUI1QPVA8r/yv/R+9H7tPe0947zjvPC78LvR+xH7JbolujT5NPkjuGO4Q/fD9+D3YPd89zz3CTcJNyh2qHaydnJ2SzaLNrO2s7as9qz2tvZ29k52TnZI9oj2n7cfty+3r7eOOA44Ojh6OFw5HDkN+c35+Pp4+lD7UPtRfFF8Sz1LPVJ+Un5wP3A/Z4BngE9BT0Ffgl+CdEN0Q15EXkRmhSaFEYXRhf7GfsZJR0lHewf7B8DIQMhuyC7ID0gPSBYIFgg6CDoIDAhMCGyILIg2h/aHx0fHR++Hb4dtBu0G68arxqUGpQayRjJGPQU9BSCEYIReA94D4kNiQ25CrkK/wb/BioDKgMtAC0A7f3t/ZL7kvsB+QH5VfZV9rvzu/ON8Y3x5u/m77TutO6v7a/tR+xH7IXqhern6OforOes50DnQOfZ59nnluiW6I3ojehF6EXow+jD6DTqNOql66XrhuyG7J3tne2D74PvjfGN8RDzEPOK9Ir0APcA97r6uvpH/kf+NgA2AN0B3QF3BHcEoQehB4MKgwq6DLoMRg5GDuQP5A+4EbgRKRMpE0kUSRSEFYQVbhZuFiIXIhceGB4Ytxi3GG8Ybxi7F7sX4xbjFvkV+RVOFU4VmhSaFE0TTRNVEVURAw8DD9UM1Qy5CrkKcAhwCAwGDAZgA2ADbABsADX+Nf76/Pr8U/tT+3r4eviz9bP1A/QD9L/yv/JO8U7xp++n7+Xt5e2P7I/sI+wj7O3r7ese6x7rIuoi6pLpkumb6ZvpEOoQ6oXqhero6ujqLOws7D/uP+7d793vGPEY8dry2vI19TX1BfgF+B37Hfvt/e39NgA2AKwCrAKgBaAFEgkSCU4MTgyODo4O/w//D50RnREKFAoUyBbIFtsY2xj7GfsZphqmGmMbYxtEHEQc7xzvHAodCh3mHOYcyxzLHDscOxwtGy0bBBoEGoEYgRibFpsWvhS+FFoSWhIeDx4PTgxODF8KXwpwCHAI8QXxBdAC0AKU/5T/xPzE/CH6Ifpj92P3R/VH9c3zzfMd8h3yCvAK8Pft9+0a7BrsfOp86nLocugF5gXmweTB5AnlCeUk5STlneSd5EzkTORV5FXki+SL5H7lfuXd5t3m2efZ57HosegH6gfqgeuB68Xsxex+7n7uD/EP8QP0A/TB9sH2E/kT+R37Hfv6/Pr8s/6z/mwAbACIAogC2gTaBP8G/wb3CPcIwgrCCnsMewz1DfUN3w7fDmYPZg8IEAgQoRChEDoROhESEhISzxLPEqISohJwEXAR0g/SD1gOWA4vDS8N6wvrC6cKpwrYCdgJPwk/CQQIBAhLBksG0QTRBIQDhAPUAdQBLQAtACj/KP8R/hH+K/wr/DP6M/qw+LD4P/c/9/L18vU+9T71rvSu9AP0A/Rq82rzv/K/8kHyQfI48jjy+fH58Q/xD/GR8JHwPPE88VPyU/La8try9fL18mHzYfN49Hj0qvWq9V72Xvbc9tz28/fz9+v56/kZ/Bn8yf3J/TH/Mf/PAM8AkQKRAi8ELwSXBZcF5AbkBhYIFgh+CX4JJQslC9UM1QwHDgcOhQ6FDqkOqQ45DzkPNRA1EGIQYhBCD0IP2g3aDS8NLw0CDQIN3gzeDGAMYAwlCyULogmiCbgIuAgxCDEILAcsB2EFYQVpA2kDwgHCAVEAUQDF/sX+zfzN/MP6w/o3+Tf5F/gX+NP20/Z09XT1b/Rv9Lvzu/MQ8xDzkvKS8lzyXPId8h3y5/Hn8SbyJvKk8qTytvK28pLykvLs8uzyxPPE8670rvRr9Wv16fXp9XD2cPZa91r3nvie+CH6Ifr1+/X72/3b/Yv/i/9WAVYBjQONA3MFcwWBBoEGdAd0B4IIggirCasJbQttCyYNJg31DfUNhQ6FDv8P/w+LEYsR5RHlEXkReRFVEVURyhHKEVoSWhKQEpASPxI/Ep0RnRFDEUMRXhFeEToROhE1EDUQ1g7WDsgNyA3DDMMMiAuICykKKQrBCMEINQc1B98F3wXjBOME+QP5A5oCmgLPAM8AQ/9D/z7+Pv5C/UL94/vj+2n6afoT+RP5DvgO+FH3Ufev9q/2MfYx9tf11/VZ9Vn1pfSl9DD0MPRC9EL0b/Rv9Mn0yfR09XT1XvZe9iT3JPeZ95n3/Pf892j4aPj4+Pj4o/mj+UX6Rfqf+p/6+fr5+uz77PtU/VT9Nf41/mv+a/77/vv+LQAtAEQBRAGDAYMBTQFNAbABsAH0AvQCJgQmBHcEdwSSBJIETwVPBQwGDAb6BfoFYQVhBTQFNAVhBWEFWAVYBRkFGQXsBOwE0QTRBHcEdwTnA+cDYANgA9kC2QIKAgoCMgEyAdgA2ACZAJkA7v/u/0P/Q/8f/x//vP68/kv9S/13+3f7YPpg+tD50PkK+Qr5F/gX+C33Lfco9ij2PvU+9aX0pfQw9DD0zfPN82HzYfPa8tryrfKt8iLzIvO787vz3/Pf87vzu/O787vzOfQ59CP1I/UW9hb25fbl9n73fvcg+CD4E/kT+UX6RfpT+1P7T/xP/G/9b/3F/sX+GwAbAIwBjAEPAw8DgASABPoF+gViB2IHXgheCCQJJAkXChcKAQsBC74LvgshDCEMGAwYDNkL2QvZC9kL/Qv9C9kL2Qt/C38LEwsTC5UKlQrqCeoJPwk/CXkIeQiGB4YHXQZdBiIFIgU4BDgEzAPMAyEDIQOeAZ4B0//T/1n+Wf4e/R79v/u/+2n6afpS+VL5evh6+KL3ovfl9uX2lPaU9jH2MfaP9Y/1I/Uj9Sz1LPVH9Uf1LPUs9VD1UPUN9g32CfcJ96v3q/dE+ET4Jfkl+Qb6Bvq6+rr6m/ub++j86PyP/o/+NgA2AIMBgwF2AnYCugO6A2oFagXSBtIGoQehB4IIggi9Cb0J1ArUCrULtQufDJ8MpA2kDXwOfA4DDwMPQg9CD0sPSw8VDxUPzQ7NDoUOhQ4ZDhkOyA3IDaQNpA0dDR0NGAwYDAoLCgspCikKCQkJCcUHxQfJBskGMAYwBlgFWAUCBAIEfwJ/AikBKQEAAAAAzv7O/m/9b/0Z/Bn81frV+r75vvnC+ML44ffh9zb3Nvem9qb2FvYW9qH1ofV09XT1PvU+9cn0yfRm9Gb0ePR49Aj1CPW89bz1H/Yf9kz2TPbK9sr2ovei96f4p/ij+aP5cvpy+jj7OPsr/Cv8J/0n/Qj+CP7F/sX+nf+d/5kAmQCwAbABfwJ/AvQC9AJ7A3sDOAQ4BL8EvwQZBRkFfAV8BegF6AVCBkIGrgauBggHCAcjByMHIwcjBwgHCAfABsAGkwaTBm8GbwYVBhUGagVqBb8EvwQdBB0EVwNXA38CfwLCAcIBFwEXAWwAbAC4/7j/+/77/kf+R/6u/a79Qv1C/ej86Px8/Hz82vva+0H7Qfve+t76sfqx+mn6afrH+cf5HPkc+d343fjd+N34sPiw+Iz4jPin+Kf43fjd+CX5Jfma+Zr5Ifoh+mn6afqN+o36FPsU++P74/t8/Hz8xPzE/Cf9J/3J/cn9j/6P/kP/Q//c/9z/bABsAA4BDgGnAacBZAJkAk4DTgMUBBQEbgRuBK0ErQQrBSsF6AXoBYoGigbJBskG2wbbBv8G/wY+Bz4HUAdQBwgHCAeuBq4GbwZvBicGJwayBbIFPQU9Bb8EvwQCBAIEGAMYA1sCWwKnAacB2ADYAC0ALQCU/5T/zv7O/iz+LP6l/aX9+vz6/BD8EPwv+y/7jfqN+jP6M/rr+ev5f/l/+QH5AfmV+JX4aPho+HH4cfho+Gj4VvhW+IP4g/jv+O/4W/lb+Zr5mvnH+cf5D/oP+nv6e/rw+vD6ifuJ+0/8T/wV/RX9rv2u/T7+Pv6z/rP+Fv8W/6//r/9sAGwABQEFAXoBegETAhMC4gLiApYDlgMCBAIEZQRlBNoE2gQ9BT0FfAV8BakFqQXfBd8FJwYnBoEGgQaTBpMGSwZLBgMGAwbxBfEF8QXxBbIFsgVPBU8F4wTjBJIEkgRBBEEEwwPDAzwDPAPQAtACbQJtAuYB5gFWAVYBtAC0ABIAEgCL/4v/KP8o/+D+4P6h/qH+Wf5Z/hH+Ef7S/dL9iv2K/Tn9Of36/Pr8zfzN/Kn8qfyO/I78l/yX/Lv8u/zf/N/8DP0M/Sf9J/1L/Uv9gf2B/aX9pf3J/cn9Gv4a/qH+of4E/wT/Ov86/2f/Z/+4/7j/GwAbAIcAhwDqAOoAXwFfAcsBywETAhMCUgJSAqwCrAIYAxgDVwNXA40DjQPMA8wDCwQLBDgEOARcBFwEkgSSBL8EvwTIBMgEtgS2BJsEmwSSBJIEdwR3BFMEUwQ4BDgEFAQUBN4D3gOfA58DTgNOA+sC6wJbAlsC3QHdAYMBgwEXARcBfgB+APf/9/95/3n/Fv8W/7P+s/5Z/ln+7f3t/YH9gf0V/RX9qfyp/E/8T/wH/Af82vva+7b7tvuA+4D7U/tT+0r7SvtK+0r7U/tT+2X7ZfuA+4D7ifuJ+6T7pPva+9r7NPw0/Jf8l/zo/Oj8J/0n/Xj9eP32/fb9a/5r/rz+vP4E/wT/cP9w/+7/7v9jAGMAxgDGACABIAFoAWgBngGeAdQB1AEBAgECJQIlAkACQAJbAlsCbQJtAnYCdgJ2AnYCdgJ2AmQCZAJJAkkCLgIuAgECAQLCAcIBegF6ATsBOwEFAQUBvQC9AGMAYwAAAAAAuP+4/3n/ef8x/zH/1/7X/n3+ff4j/iP+7f3t/a79rv1d/V39A/0D/cT8xPyX/Jf8Yfxh/Cv8K/wQ/BD8B/wH/PX79fvj++P70fvR+9H70fvs++z7EPwQ/Cv8K/xP/E/8hfyF/Lv8u/zo/Oj8Hv0e/Wb9Zv3b/dv9R/5H/pj+mP7g/uD+Q/9D/8H/wf8tAC0AkACQAOoA6gBEAUQBpwGnAQECAQJJAkkCmgKaAv0C/QJXA1cDjQONA7EDsQPVA9UDCwQLBC8ELwQvBC8EJgQmBDgEOAQ4BDgEJgQmBPkD+QPDA8MDlgOWA3IDcgMzAzMD9AL0Ar4CvgKIAogCLgIuAssBywGMAYwBRAFEAfwA/ACiAKIAPwA/AOX/5f+m/6b/Z/9n/zr/Ov/7/vv+s/6z/nT+dP5H/kf+Gv4a/uT95P3b/dv95P3k/fb99v32/fb92/3b/cn9yf3t/e39I/4j/lD+UP59/n3+mP6Y/rP+s/7y/vL+Ov86/3n/ef+v/6//5f/l/xsAGwBsAGwAxgDGAA4BDgFEAUQBcQFxAbkBuQEBAgECSQJJAnYCdgKRApECrAKsAtkC2QL9Av0CGAMYAxgDGAP0AvQC4gLiAtkC2QLQAtACvgK+ApoCmgJtAm0CSQJJAgoCCgLCAcIBlQGVAWgBaAEgASABxgDGAGwAbAAbABsA7v/u/6//r/9V/1X/BP8E/8X+xf6Y/pj+Wf5Z/gj+CP7A/cD9pf2l/aX9pf2c/Zz9Zv1m/Tn9Of0n/Sf9MP0w/UL9Qv1C/UL9S/1L/Wb9Zv2K/Yr9rv2u/dv92/3//f/9Gv4a/ln+Wf6Y/pj+4P7g/h//H/9V/1X/ef95/6//r//l/+X/JAAkAFoAWgB1AHUAogCiAOEA4QAXARcBOwE7AU0BTQFfAV8BjAGMAbABsAG5AbkBuQG5AbABsAGnAacBsAGwAZ4BngGDAYMBaAFoAUQBRAEpASkBFwEXAfMA8wDPAM8AtAC0AJAAkABjAGMAEgASAMr/yv+m/6b/i/+L/17/Xv8f/x//4P7g/qr+qv59/n3+Pv4+/hH+Ef72/fb90v3S/bf9t/2l/aX9gf2B/V39Xf1U/VT9Xf1d/W/9b/1v/W/9b/1v/aX9pf3k/eT9//3//Qj+CP4a/hr+Pv4+/mL+Yv6h/qH+6f7p/jr/Ov9w/3D/pv+m/+X/5f8kACQAWgBaAHUAdQCrAKsABQEFAUQBRAFoAWgBjAGMAcIBwgEBAgECJQIlAkACQAJbAlsCdgJ2AnYCdgJ/An8CdgJ2Am0CbQJtAm0CZAJkAlICUgI3AjcCAQIBAssBywGwAbABjAGMAWgBaAEyATIB/AD8ANgA2ACiAKIAWgBaAD8APwAkACQAAAAAAMr/yv+L/4v/cP9w/3n/ef9n/2f/Ov86/x//H/8N/w3/+/77/vv++/7y/vL++/77/gT/BP/p/un+4P7g/vL+8v4W/xb/TP9M/17/Xv9M/0z/Xv9e/4v/i//B/8H/7v/u/wAAAAAAAAAALQAtAGMAYwCQAJAAkACQAIcAhwCZAJkAzwDPAPMA8wAFAQUBDgEOAQ4BDgEXARcBDgEOAQ4BDgEXARcBFwEXAfwA/ADzAPMA4QDhAM8AzwC9AL0AqwCrAJkAmQB1AHUASABIADYANgASABIA7v/u/7j/uP+C/4L/Xv9e/0z/TP8f/x//4P7g/rP+s/6P/o/+ff59/mv+a/5H/kf+LP4s/hH+Ef7//f/9CP4I/v/9//3b/dv9yf3J/dv92/3//f/9I/4j/hr+Gv4R/hH+I/4j/j7+Pv5r/mv+mP6Y/rP+s/7p/un+H/8f/0P/Q/9w/3D/lP+U/7j/uP/u/+7/EgASAC0ALQBjAGMAmQCZAM8AzwDzAPMABQEFASkBKQFxAXEBlQGVAbABsAHCAcIBywHLAeYB5gEBAgECCgIKAhwCHAIlAiUCHAIcAi4CLgIuAi4CEwITAgECAQIBAgEC7wHvAdQB1AGwAbABpwGnAZUBlQFoAWgBOwE7ARcBFwHqAOoA2ADYAMYAxgCQAJAAWgBaACQAJAAAAAAA5f/l/8r/yv+4/7j/r/+v/3n/ef9V/1X/Q/9D/zH/Mf8f/x//Df8N//L+8v7y/vL+6f7p/tf+1/7g/uD+6f7p/un+6f77/vv+BP8E/wT/BP8N/w3/H/8f/0z/TP+C/4L/lP+U/6b/pv/B/8H/wf/B/9z/3P8AAAAAAAAAABIAEgAkACQAPwA/AFEAUQBjAGMAdQB1AJAAkACZAJkAmQCZAJAAkAB+AH4AhwCHAJkAmQCHAIcAdQB1AH4AfgB+AH4AfgB+AGwAbABIAEgAJAAkABsAGwAJAAkAAAAAAO7/7v/B/8H/pv+m/53/nf+U/5T/ef95/0z/TP8x/zH/H/8f/wT/BP/p/un+4P7g/tf+1/7X/tf+zv7O/rz+vP68/rz+vP68/rP+s/68/rz+zv7O/uD+4P77/vv+Df8N/x//H/86/zr/Vf9V/4L/gv+d/53/r/+v/8H/wf/T/9P/9//3/yQAJABRAFEAdQB1AJAAkACZAJkAtAC0AOEA4QDzAPMAFwEXASkBKQEpASkBOwE7AU0BTQFNAU0BVgFWAU0BTQE7ATsBRAFEATsBOwEpASkBDgEOAeEA4QDhAOEA6gDqAL0AvQCQAJAAdQB1AFoAWgBRAFEALQAtAAAAAADu/+7/5f/l/7j/uP+m/6b/i/+L/17/Xv9V/1X/Q/9D/x//H/8E/wT/6f7p/vL+8v77/vv+4P7g/sX+xf7O/s7+zv7O/s7+zv7X/tf+4P7g/g3/Df8W/xb/Fv8W/zH/Mf9D/0P/Vf9V/4L/gv+U/5T/nf+d/8H/wf/c/9z/7v/u//f/9/8AAAAAGwAbAD8APwBaAFoAbABsAHUAdQB+AH4AmQCZAKsAqwCrAKsAvQC9AL0AvQDGAMYAzwDPAM8AzwDPAM8AzwDPAL0AvQC9AL0AtAC0AKsAqwCiAKIAhwCHAGwAbABsAGwAUQBRADYANgA2ADYAJAAkABIAEgAbABsACQAJAAAAAAAAAAAA3P/c/8r/yv/T/9P/wf/B/8H/wf+4/7j/nf+d/5T/lP+m/6b/uP+4/8r/yv/B/8H/uP+4/9P/0//T/9P/0//T/9P/0//B/8H/3P/c/wAAAAAJAAkAGwAbAC0ALQAtAC0ASABIAFEAUQBIAEgAWgBaAGwAbAB1AHUAhwCHAH4AfgB+AH4AkACQAJAAkACiAKIAtAC0ALQAtACrAKsAogCiAJkAmQCHAIcAfgB+AH4AfgCHAIcAhwCHAGwAbABjAGMAWgBaAFEAUQA/AD8AJAAkABsAGwAbABsAAAAAAAAAAAAAAAAA7v/u/+X/5f/K/8r/r/+v/6//r/+m/6b/nf+d/53/nf95/3n/Z/9n/3D/cP9V/1X/Q/9D/0z/TP9D/0P/Vf9V/2f/Z/9M/0z/Mf8x/yj/KP8o/yj/Q/9D/2f/Z/9n/2f/Z/9n/2f/Z/9n/2f/ef95/4L/gv+L/4v/nf+d/53/nf+4/7j/0//T/9z/3P/u/+7/AAAAAAAAAAAbABsALQAtAC0ALQA/AD8ASABIAFEAUQBsAGwAbABsAHUAdQB1AHUAbABsAHUAdQCZAJkAmQCZAKIAogCZAJkAdQB1AGwAbAB+AH4AbABsAGwAbABaAFoANgA2ADYANgA/AD8ALQAtABsAGwAJAAkAAAAAAAAAAAD3//f/0//T/7j/uP+4/7j/wf/B/8H/wf+v/6//pv+m/5T/lP+d/53/pv+m/6b/pv+d/53/nf+d/5T/lP+m/6b/pv+m/5T/lP+U/5T/pv+m/6b/pv/B/8H/3P/c/9z/3P/l/+X/7v/u/+7/7v8AAAAACQAJAAkACQAbABsAEgASABsAGwA2ADYAJAAkAC0ALQBIAEgANgA2AFEAUQBaAFoAPwA/AEgASABjAGMASABIAEgASABaAFoASABIAEgASAA/AD8AGwAbACQAJAAtAC0AGwAbABsAGwAJAAkAAAAAAAAAAADu/+7/5f/l/+7/7v/c/9z/0//T/8H/wf+m/6b/pv+m/6//r/+m/6b/nf+d/53/nf+d/53/nf+d/6b/pv+m/6b/lP+U/53/nf+d/53/nf+d/6//r/+4/7j/uP+4/8r/yv/T/9P/0//T/+7/7v/3//f/9//3/wkACQASABIAEgASACQAJAAtAC0ANgA2AEgASABaAFoAdQB1AH4AfgCHAIcAkACQAJAAkACQAJAAmQCZAKIAogCrAKsAtAC0AKIAogCZAJkAogCiAJkAmQCQAJAAkACQAIcAhwB1AHUAdQB1AGwAbABjAGMAWgBaAFoAWgBIAEgALQAtACQAJAAkACQACQAJAAAAAAD3//f/5f/l/+X/5f/l/+X/yv/K/8H/wf/B/8H/r/+v/6//r/+v/6//nf+d/5T/lP+d/53/lP+U/4v/i/+d/53/lP+U/4v/i/+U/5T/lP+U/5T/lP+m/6b/pv+m/53/nf+m/6b/r/+v/8H/wf/K/8r/wf/B/9P/0//c/9z/5f/l/wAAAAAAAAAAAAAAABIAEgAkACQALQAtAC0ALQAkACQAJAAkAEgASABaAFoASABIADYANgA/AD8AUQBRAFEAUQBIAEgASABIADYANgA/AD8ANgA2ABsAGwAtAC0ALQAtABIAEgAbABsAGwAbAAAAAAAJAAkACQAJAOX/5f/u/+7/5f/l/9P/0//u/+7/5f/l/7j/uP/K/8r/yv/K/6b/pv+4/7j/wf/B/6//r/+4/7j/pv+m/5T/lP+d/53/r/+v/6//r/+v/6//pv+m/6//r/+4/7j/r/+v/7j/uP+4/7j/uP+4/9P/0//l/+X/0//T/9z/3P/l/+X/3P/c/+X/5f8AAAAA9//3/wAAAAAJAAkAAAAAAAAAAAASABIAEgASABIAEgAbABsAGwAbABsAGwAbABsAJAAkACQAJAASABIAEgASABsAGwAJAAkAAAAAAAkACQAAAAAAAAAAAAAAAAD3//f/9//3/wAAAAAAAAAA7v/u//f/9//u/+7/3P/c/9z/3P/c/9z/3P/c/+7/7v/u/+7/0//T/9z/3P/c/9z/3P/c//f/9//u/+7/3P/c/+7/7v/3//f/7v/u//f/9//u/+7/9//3/wkACQASABIAGwAbABsAGwAkACQANgA2AD8APwA/AD8AWgBaAFoAWgBsAGwAdQB1AGMAYwBsAGwAkACQAH4AfgCHAIcAmQCZAIcAhwCZAJkAogCiAJAAkACZAJkAmQCZAJAAkACQAJAAhwCHAJkAmQCZAJkAdQB1AH4AfgB+AH4AYwBjAHUAdQB1AHUAUQBRAEgASABIAEgAPwA/ADYANgAtAC0AGwAbAAkACQAAAAAAAAAAAPf/9//3//f/9//3/9z/3P/T/9P/0//T/7j/uP+4/7j/wf/B/6//r/+d/53/nf+d/5T/lP+L/4v/i/+L/4v/i/+L/4v/lP+U/53/nf+U/5T/i/+L/5T/lP+d/53/lP+U/6b/pv+m/6b/r/+v/7j/uP+m/6b/pv+m/7j/uP+4/7j/yv/K/9P/0//B/8H/0//T/9z/3P/T/9P/3P/c/9z/3P/T/9P/5f/l/9z/3P/T/9P/3P/c/8r/yv/c/9z/7v/u/9P/0//T/9P/3P/c/8r/yv/c/9z/5f/l/8r/yv/c/9z/5f/l/8r/yv/c/9z/5f/l/8r/yv/K/8r/0//T/8r/yv/c/9z/3P/c/9P/0//T/9P/yv/K/9P/0//c/9z/yv/K/9P/0//c/9z/yv/K/+X/5f/3//f/0//T/9P/0//u/+7/3P/c//f/9/8JAAkAAAAAAAkACQASABIAAAAAABsAGwA2ADYANgA2AEgASAA2ADYALQAtAEgASAA/AD8ASABIAGMAYwBIAEgAWgBaAH4AfgBsAGwAYwBjAGwAbABaAFoAbABsAIcAhwB1AHUAdQB1AH4AfgBjAGMAbABsAGwAbABaAFoAYwBjAFoAWgBRAFEAUQBRAEgASAA/AD8ANgA2ADYANgAtAC0AJAAkACQAJAAbABsAAAAAABIAEgAJAAkAAAAAAAkACQAAAAAA9//3/wAAAAD3//f/5f/l/+7/7v/3//f/7v/u//f/9/8AAAAA9//3//f/9//3//f/9//3//f/9//3//f/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIAEgASABIACQAJABIAEgASABIAAAAAABIAEgAbABsACQAJABIAEgASABIAAAAAAAkACQASABIACQAJAAkACQAJAAkAAAAAAAAAAAAAAAAAAAAAAPf/9//3//f/9//3/+X/5f/l/+X/5f/l/9P/0//K/8r/0//T/8r/yv/B/8H/wf/B/7j/uP/B/8H/r/+v/6b/pv+v/6//r/+v/7j/uP+4/7j/nf+d/53/nf+v/6//uP+4/8H/wf+4/7j/r/+v/8H/wf+4/7j/uP+4/9P/0//B/8H/yv/K/9z/3P/K/8r/3P/c/+7/7v/T/9P/5f/l/wAAAADu/+7/AAAAAAAAAAD3//f/AAAAAAAAAAAAAAAAEgASAAkACQAJAAkAEgASAAkACQAJAAkAEgASAAAAAAASABIAGwAbAAAAAAAJAAkAEgASAAkACQASABIACQAJAAAAAAAJAAkAAAAAAAAAAAAAAAAA9//3/wAAAAAAAAAA5f/l/+7/7v/3//f/5f/l//f/9/8AAAAA5f/l/+7/7v/3//f/5f/l//f/9/8AAAAA3P/c/+7/7v8AAAAA7v/u/wAAAAAAAAAA7v/u/wAAAAAAAAAA9//3/wkACQAAAAAAAAAAABIAEgAJAAkACQAJAC0ALQAkACQAGwAbAC0ALQA2ADYAPwA/AFEAUQBIAEgASABIAD8APwBIAEgAUQBRAFEAUQBRAFEAWgBaAFEAUQBRAFEAWgBaAFEAUQBRAFEAWgBaAEgASABIAEgASABIAEgASABIAEgANgA2ADYANgA2ADYALQAtAC0ALQAtAC0AEgASABIAEgASABIACQAJABsAGwAbABsACQAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3//f/9//3/+7/7v/u/+7/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9//3/wAAAAAJAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAAkAAAAAAAAAAAAAAAAAAAAAAAkACQAAAAAAAAAAAAAAAAAAAAAACQAJAAkACQAAAAAAAAAAAAAAAAAAAAAAAAAAAPf/9//u/+7/9//3/+7/7v/u/+7/5f/l/9P/0//T/9P/0//T/8r/yv/T/9P/0//T/8H/wf/T/9P/wf/B/7j/uP/K/8r/yv/K/7j/uP+4/7j/uP+4/7j/uP+4/7j/uP+4/6//r/+m/6b/r/+v/8r/yv+4/7j/r/+v/7j/uP+4/7j/wf/B/9P/0//K/8r/0//T/9z/3P/K/8r/0//T/9z/3P/c/9z/7v/u/+7/7v/l/+X/9//3//f/9/8AAAAAAAAAAPf/9/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAAkACQAJAAAAAAAAAAAAAAAAAAkACQASABIACQAJAAkACQAJAAkAAAAAAAAAAAAAAAAA9//3/wAAAAAAAAAA9//3/wAAAAAAAAAAAAAAAAAAAAAJAAkAAAAAAAAAAAAJAAkAAAAAAAAAAAAAAAAA9//3/wAAAAAAAAAAAAAAAAkACQAAAAAAAAAAABIAEgASABIACQAJABIAEgAbABsAGwAbABsAGwAkACQAJAAkAC0ALQA2ADYANgA2AC0ALQAtAC0ANgA2ADYANgA2ADYAPwA/ADYANgA2ADYAPwA/ADYANgA2ADYAPwA/AD8APwA2ADYANgA2AC0ALQAtAC0ALQAtACQAJAAbABsAEgASABsAGwAkACQAJAAkABsAGwAbABsAEgASABIAEgASABIACQAJAAkACQAAAAAACQAJAAkACQAAAAAAAAAAAAAAAAD3//f/AAAAAAAAAAD3//f/AAAAAPf/9//3//f/9//3/+7/7v/l/+X/9//3//f/9//3//f/7v/u/+7/7v/u/+7/9//3/wAAAADu/+7/9//3/wAAAAAAAAAAAAAAAAAAAAD3//f/AAAAAAAAAAD3//f/AAAAAAAAAAD3//f/AAAAAAAAAAD3//f/9//3/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3//f/9//3/wAAAAAAAAAAAAAAAAAAAAD3//f/9//3/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9//3/wAAAAAAAAAAAAAAAAAAAAAAAAAA9//3/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPf/9/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3//f/9//3/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3//f/9//3//f/9/8AAAAAAAAAAAAAAAAAAAAAAAAAAPf/9//3//f/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')