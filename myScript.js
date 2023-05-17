
let chance = true
let redWinCount = 0
let blueWinCount = 0
let drawCount = 0
let p1
let p2
function startGame() {
    p1 = document.getElementById("player1")
    p2 = document.getElementById("player2")
    console.log(document)
    if (p1.value == "") {
        p1.classList.add("is-invalid")
    }
    if (p2.value == "") {
        p2.classList.add("is-invalid")
    }
    if (p1.value && p2.value) {
        document.getElementById("stat").classList.remove("d-none")
        document.getElementById("gameCard").classList.remove("d-none")
        document.getElementById("playerCard").classList.add("d-none")

        document.getElementById("player1Name").innerHTML = player1.value
        document.getElementById("player2Name").innerHTML = player2.value
    }

}

function game(id) {
    let box = document.querySelector("#" + id)
    if (!(box.classList.contains("bg-danger") || box.classList.contains("bg-primary"))) {
        chance
            ? box.classList.add("bg-danger")
            : box.classList.add("bg-primary")
        chance = !chance
    }
    checkWinner()
}

function checkWinner(box) {
    let redBox = []
    let blueBox = []
    let fill = []
    let winnerZala = false
    for (let i = 0; i < 9; i++) {
        redBox.push(document.getElementById(`box${i + 1}`).classList.contains("bg-danger"))
        blueBox.push(document.getElementById(`box${i + 1}`).classList.contains("bg-primary"))
        if (document.getElementById(`box${i + 1}`).classList.contains("bg-primary") || document.getElementById(`box${i + 1}`).classList.contains("bg-danger")) {
            fill.push("hello")
        }
    }

    // let redBox = [
    //     document.getElementById("box1").classList.contains("bg-danger"),
    //     document.getElementById("box2").classList.contains("bg-danger"),
    //     document.getElementById("box3").classList.contains("bg-danger"),
    //     document.getElementById("box4").classList.contains("bg-danger"),
    //     document.getElementById("box5").classList.contains("bg-danger"),
    //     document.getElementById("box6").classList.contains("bg-danger"),
    //     document.getElementById("box7").classList.contains("bg-danger"),
    //     document.getElementById("box8").classList.contains("bg-danger"),
    //     document.getElementById("box9").classList.contains("bg-danger"),
    // ]
    // let blueBox = [
    //     document.getElementById("box1").classList.contains("bg-primary"),
    //     document.getElementById("box2").classList.contains("bg-primary"),
    //     document.getElementById("box3").classList.contains("bg-primary"),
    //     document.getElementById("box4").classList.contains("bg-primary"),
    //     document.getElementById("box5").classList.contains("bg-primary"),
    //     document.getElementById("box6").classList.contains("bg-primary"),
    //     document.getElementById("box7").classList.contains("bg-primary"),
    //     document.getElementById("box8").classList.contains("bg-primary"),
    //     document.getElementById("box9").classList.contains("bg-primary"),
    // ]
    // if ((redBox[0] && redBox[1] && redBox[2]) ||
    //     (redBox[3] && redBox[4] && redBox[5]) ||
    //     (redBox[6] && redBox[7] && redBox[8]) ||
    //     (redBox[0] && redBox[3] && redBox[6]) ||
    //     (redBox[1] && redBox[4] && redBox[7]) ||
    //     (redBox[2] && redBox[5] && redBox[8]) ||
    //     (redBox[0] && redBox[4] && redBox[8]) ||
    //     (redBox[2] && redBox[4] && redBox[6])) {
    //     console.log("Hurreyyy red Winner")
    // }
    // if ((blueBox[0] && blueBox[1] && blueBox[2]) ||
    //     (blueBox[3] && blueBox[4] && blueBox[5]) ||
    //     (blueBox[6] && blueBox[7] && blueBox[8]) ||
    //     (blueBox[0] && blueBox[3] && blueBox[6]) ||
    //     (blueBox[1] && blueBox[4] && blueBox[7]) ||
    //     (blueBox[2] && blueBox[5] && blueBox[8]) ||
    //     (blueBox[0] && blueBox[4] && blueBox[8]) ||
    //     (blueBox[2] && blueBox[4] && blueBox[6])) {
    //     console.log("Hurreyyy blue Winner")
    // }

    switch (true) {
        case redBox[0] && redBox[1] && redBox[2]: displayResult("red"); break;
        case redBox[3] && redBox[4] && redBox[5]: displayResult("red"); break;
        case redBox[6] && redBox[7] && redBox[8]: displayResult("red"); break;
        case redBox[0] && redBox[3] && redBox[6]: displayResult("red"); break;
        case redBox[1] && redBox[4] && redBox[7]: displayResult("red"); break;
        case redBox[2] && redBox[5] && redBox[8]: displayResult("red"); break;
        case redBox[0] && redBox[4] && redBox[8]: displayResult("red"); break;
        case redBox[2] && redBox[4] && redBox[6]: displayResult("red"); break;
            ``
        case blueBox[0] && blueBox[1] && blueBox[2]: displayResult("blue"); break;
        case blueBox[3] && blueBox[4] && blueBox[5]: displayResult("blue"); break;
        case blueBox[6] && blueBox[7] && blueBox[8]: displayResult("blue"); break;
        case blueBox[0] && blueBox[3] && blueBox[6]: displayResult("blue"); break;
        case blueBox[1] && blueBox[4] && blueBox[7]: displayResult("blue"); break;
        case blueBox[2] && blueBox[5] && blueBox[8]: displayResult("blue"); break;
        case blueBox[0] && blueBox[4] && blueBox[8]: displayResult("blue"); break;
        case blueBox[2] && blueBox[4] && blueBox[6]: displayResult("blue"); break;
        default: fill.length === 9 && displayResult("draw")
    }
}

function choice() {
    let choice = colorChoice.value
    let arr = ["red", "blue"]
    let color = arr.filter(function x(arg) {
        if (arg != choice) {
            return arg
        }
    })
    let str = ""
    for (let i = 0; i < color.length; i++) {
        str += `<option value="${color[i]}"> ${color[i]}</option>`
    }
    secondColorChoice.innerHTML = str
    // console.log(result);
}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(`box${i + 1}`).classList.remove("bg-danger")
        document.getElementById(`box${i + 1}`).classList.remove("bg-primary")
    }
    chance = true       // reset ke bad red se hi shuru hoga 
}

function displayResult(arg) {
    let classes = ""
    let massage = ""

    //  handle alert classes, wincount increament and message to display start
    switch (arg) {
        case "red": redWinCount++; classes = "alert alert-danger"; message = `${p1.value} is Winner`; break
        case "blue": blueWinCount++; classes = "alert alert-primary"; message = `${p2.value} is Winner`; break
        case "draw": drawCount++; classes = "alert alert-dark"; message = "match draw"; break
    }
    //  handle alert classes, wincount increament and message to display end

    // console.log(`
    //    red: ${redWinCount}
    //    blue: ${blueWinCount}
    //    draw: ${drawCount}
    //    total:${redWinCount + blueWinCount + drawCount}`)

    // display Win Count start
    let totalCount = redWinCount + blueWinCount + drawCount
    document.getElementById("redWinCount").innerHTML = redWinCount
    document.getElementById("blueWinCount").innerHTML = blueWinCount
    document.getElementById("drawCount").innerHTML = drawCount
    document.getElementById("totalMatchCount").innerHTML = totalCount
    // display Win Count end

    document.getElementById("redProgress").style.width = `${(redWinCount / totalCount) * 100}% `
    document.getElementById("blueProgress").style.width = `${(blueWinCount / totalCount) * 100}% `
    document.getElementById("drawProgress").style.width = `${(drawCount / totalCount) * 100}% `
    // feedback Alert start
    document.getElementById("result").innerHTML = `
    <div class="${classes}">
        <h1>${message}</h1>
        <hr />
        <div class="d-flex gap-4">
            <div class="spinner-border"></div>
            <p>Please Wait, Restarting Game.</p>
        </div>
    </div> `

    document.getElementById("gameCard").classList.add("d-none")

    resetGame()

    setTimeout(function () {
        document.getElementById("result").innerHTML = ""
        document.getElementById("gameCard").classList.remove("d-none")
    }, 2000);       // 2 sec ne result show karan band karen = give timer
    // feedback Alert stop
}
